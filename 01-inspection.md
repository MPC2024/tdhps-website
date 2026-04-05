# Code Inspection Report — Kenneth Schema Implementation

**Date**: 2026-03-29
**Inspector**: Inspector (QA Gate)
**Project**: TDHPS Website
**Scope**: Post-merge code review (merged to main without QA gate)

---

## Executive Summary

**Files Reviewed**: 7
**Critical Issues**: 2
**Warnings**: 4
**Info Notes**: 2
**Verdict**: **BLOCKED** — Critical data inconsistencies must be resolved before deployment

---

## Critical Issues (BLOCK deployment)

### ISSUE-001: Phone Number Inconsistency Across Files
**Location**: `app/layout.tsx:103` vs `lib/locations.ts:60`
**Severity**: Critical (Data Integrity)

**Problem**:
- `app/layout.tsx` line 103: `"telephone": "+1-713-820-6140"` (hardcoded)
- `lib/locations.ts` line 60: `"phone": "(832) 930-4060"` (from locations data)
- SchemaMarkup component uses locations.ts data, but root layout uses different number

Schema.org compliance requires consistency across all schema markup. This creates conflicting contact information in search results and JSON-LD crawlers.

**Evidence**:
```typescript
// app/layout.tsx line 103
email: "galleria@thedoghouseps.com",

// lib/locations.ts line 60-61
phone: "(832) 930-4060",
email: "galleria@thedoghouseps.com",
```

**Fix Required**:
- [ ] Verify which phone number is correct: `+1-713-820-6140` or `(832) 930-4060`
- [ ] Update root layout to use phone number from locations.ts
- [ ] Search all schema markup for consistent phone format

---

### ISSUE-002: GPS Coordinate Discrepancy — Pearland Location
**Location**: `app/layout.tsx:255-256` vs `lib/locations.ts:94-95`
**Severity**: Critical (Data Accuracy)

**Problem**:
- `app/layout.tsx` line 255-256: `latitude: 29.5586, longitude: -95.2861`
- `lib/locations.ts` line 94-95: `lat: 29.5567974, lng: -95.3927816`

These are different map coordinates. The difference is ~6 miles, which is significant for a location-based business. Search engines and mapping applications will show conflicting locations.

**Evidence**:
```typescript
// app/layout.tsx (less precise)
latitude: 29.5586,
longitude: -95.2861,

// lib/locations.ts (more precise, longer decimal places)
lat: 29.5567974,
lng: -95.3927816,
```

**Fix Required**:
- [ ] Verify which coordinates are correct via Google Maps or GPS
- [ ] Update root layout to use coordinates from locations.ts
- [ ] Check all three locations for similar discrepancies

---

## Warnings (CONDITIONAL — fix next cycle)

### WARNING-001: Unused formatTime Function
**Location**: `lib/schema.ts:71-77`
**Severity**: Medium (Dead Code)

**Problem**:
The `formatTime()` function is defined inside `generateLocalBusinessSchema()` but never called. The function converts 24-hour time (07:00) to 12-hour format (7:00 AM), but the schema markup uses 24-hour format unchanged.

**Evidence**:
```typescript
// Defined but never used
const formatTime = (time: string) => {
  const [hours, mins] = time.split(":");
  const hour = parseInt(hours, 10);
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${displayHour}:${mins}${suffix}`;
};

// Time is used raw without formatting
opens: location.hours.monday.open,  // Still "07:00"
closes: location.hours.monday.close,  // Still "19:00"
```

**Recommendation**:
- [ ] Remove unused `formatTime()` function (9 lines of dead code)
- OR implement it properly: replace raw time values with formatted output if needed
- Schema.org actually expects HH:MM format (24-hour), so the current usage is correct, but the function is misleading

---

### WARNING-002: Empty yelpBusinessId Fields
**Location**: `lib/locations.ts:57, 77, 97`
**Severity**: Low (Incomplete Data)

**Problem**:
All three locations have `yelpBusinessId: ""` with empty strings. If Yelp integration is planned, these need real IDs. If not planned, the field should be removed.

**Evidence**:
```typescript
galleria: {
  // ... other fields ...
  yelpBusinessId: "",  // Empty
},
memorialPark: {
  yelpBusinessId: "",  // Empty
},
pearland: {
  yelpBusinessId: "",  // Empty
},
```

**Recommendation**:
- [ ] Either populate with real Yelp business IDs or remove the field entirely
- [ ] If keeping for future use, add a TODO comment explaining why

---

### WARNING-003: Dynamic Copyright Year in Schema
**Location**: `lib/schema.ts:226`
**Severity**: Medium (Cache/Build Impact)

**Problem**:
The copyright year is set dynamically with `new Date().getFullYear()`. This means the JSON-LD output changes every January, potentially invalidating CDN caches and requiring rebuilds at year boundaries.

**Evidence**:
```typescript
copyrightYear: new Date().getFullYear(),  // Changes every year
```

**Recommendation**:
- [ ] Change to static year (founding year) or use a constant: `copyrightYear: 2000`
- [ ] If dynamic year is intentional, document why in comments
- [ ] Consider using server-side static generation instead of client-side date

---

### WARNING-004: Duplicate Schema Markup in Root Layout
**Location**: `app/layout.tsx:295-302`
**Severity**: Medium (Redundant Output)

**Problem**:
The root layout renders THREE overlapping schema definitions:
1. `organizationJsonLd` (hardcoded, lines 96-283)
2. `generateAIOptimizationSchema()` (line 300)
3. `<SchemaMarkup type="itemList" />` (line 302) which also renders Organization schema if type="all"

This creates duplicate Organization schema markup in the HTML, which search engines may penalize.

**Evidence**:
```typescript
// Line 296-297: Manual Organization schema
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
/>

// Line 299-301: AI Optimization schema
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAIOptimizationSchema()) }}
/>

// Line 302: SchemaMarkup component (also includes Organization by default)
<SchemaMarkup type="itemList" />
```

**Recommendation**:
- [ ] Consolidate: Choose ONE source of Organization schema (prefer schema.ts functions)
- [ ] Either: Remove manual `organizationJsonLd` and use component-based approach, OR
- [ ] Pass `SchemaMarkup type="itemList"` only (don't include organization)
- [ ] Add comments explaining which schema is responsible for which entities

---

## Info (no action required)

### INFO-001: XSS Protection — Secure Use of dangerouslySetInnerHTML
**Location**: `components/SchemaMarkup.tsx:54`, `app/layout.tsx:296-301`
**Severity**: None (Good Practice)

**Finding**:
All uses of `dangerouslySetInnerHTML` are properly secured:
- Input to `__html` is JSON.stringify() output only
- No user input is mixed with schema data
- No interpolation of untrusted strings

This is the correct pattern for JSON-LD schema markup.

---

### INFO-002: TypeScript Type Safety
**Location**: All files
**Severity**: None (Positive)

**Finding**:
All TypeScript types are properly defined:
- Location interface (locations.ts:16-34) covers all required fields
- OpeningHours interface properly typed
- Schema generation functions have clear return types
- No `any` type abuse found
- All imports are resolvable and files exist

---

## Code Quality Notes

### Security Assessment
- **SQL Injection**: Not applicable (no database queries in reviewed files)
- **API Key Exposure**: No hardcoded secrets in schema/locations files
- **CORS**: Not applicable (server-side schema generation)
- **Authentication**: Not required (public schema markup)

### Schema.org Compliance Check

#### LocalBusiness Schema (PASS)
- Has required @type (LocalBusiness, PetStore)
- Has required name ✓
- Has required address with PostalAddress structure ✓
- Has telephone ✓ (though value conflicts with hardcoded version)
- Has proper openingHoursSpecification format ✓
- Geo coordinates provided ✓

#### Organization Schema (PASS)
- Has @context ✓
- Has @type ✓
- Has name, url, logo ✓
- Has contactPoint ✓

#### ItemList Schema (PASS)
- Proper @type and numberOfItems ✓
- itemListElement array with ListItem objects ✓
- position attribute for ordering ✓

### React/Next.js Best Practices
- `'use client'` directive properly used in SchemaMarkup.tsx
- Server-side schema generation in layout.tsx (correct)
- No prop drilling; clean component structure
- Metadata exports use correct Next.js type
- All imports use @/ alias correctly

### CSS Quality (discounts.module.css)
- **Positive**: Excellent accessibility support (prefers-reduced-motion, prefers-contrast)
- **Positive**: Responsive design with proper media queries
- **Positive**: Semantic use of CSS variables (--font-*)
- **Note**: Some hardcoded color values (#ff6b6b, #4CAF50) could be extracted to CSS variables for consistency
- **Accessibility**: Good contrast ratios, readable font sizes, proper spacing

---

## Integration Verification

### Import Chain Check
- ✓ schema.ts imports locations.ts correctly
- ✓ SchemaMarkup.tsx imports schema.ts functions
- ✓ layout.tsx imports all required functions
- ✓ discounts/page.tsx uses metadata correctly
- ✓ All imports match actual file locations

### Dependencies
- ✓ No missing external dependencies
- ✓ Uses only Next.js built-ins (no extra packages needed)
- ✓ TypeScript types all present

---

## Detailed Findings by File

### lib/schema.ts
**Status**: PASS (with warnings)
- 7 functions generating proper JSON-LD
- All @context values correct
- All @type values match schema.org
- Required fields present
- formatTime() function dead code (warning)
- Dynamic copyright year (warning)

### components/SchemaMarkup.tsx
**Status**: PASS
- Proper use of 'use client' directive
- Secure JSON.stringify usage
- Type-safe props interface
- Conditional rendering works correctly
- Key prop on mapped elements correct

### lib/locations.ts
**Status**: WARNING
- All required Location fields present
- GPS coordinates provided (but conflict with root layout)
- Phone numbers consistent within file
- Empty yelpBusinessId fields (incomplete data)
- TypeScript interfaces well-defined

### app/layout.tsx
**Status**: CRITICAL
- ISSUE-001: Phone number conflict with locations.ts
- ISSUE-002: GPS coordinates conflict for Pearland
- WARNING-004: Duplicate schema markup
- Metadata export correct
- Font imports proper

### app/discounts/page.tsx
**Status**: PASS
- Metadata properly exported
- Next.js Link components used correctly
- Proper link attributes (target, rel)
- No security issues
- Semantic HTML structure

### app/discounts/discounts.module.css
**Status**: PASS
- Well-structured CSS modules
- Responsive design implemented
- Accessibility features (prefers-reduced-motion, prefers-contrast)
- Proper color scheme
- No hardcoded breakpoint issues

### app/discounts/layout.tsx
**Status**: PASS
- Simple, clean metadata export
- Proper layout wrapper
- Metadata object structure correct

---

## Recommendations Summary

### Must Fix (Blocking)
1. Resolve phone number inconsistency (ISSUE-001)
2. Verify and fix GPS coordinates (ISSUE-002)

### Should Fix (Next Cycle)
1. Remove dead formatTime() function
2. Consolidate duplicate schema markup in layout.tsx
3. Handle empty yelpBusinessId fields
4. Change dynamic copyright year to static

### Optional Improvements
1. Extract hardcoded colors in CSS to CSS variables
2. Add comments explaining schema consolidation strategy

---

## Verdict Recommendation

**BLOCKED** — Cannot approve for deployment

**Reason**: Two critical data consistency issues exist that will cause conflicting information in search results and mapping services. The phone number and GPS coordinate discrepancies must be resolved and verified before merge to production.

**Unblock Path**:
1. Verify correct phone number (call business)
2. Verify Pearland GPS coordinates (Google Maps)
3. Update app/layout.tsx with correct data from lib/locations.ts
4. Fix duplicate schema markup issue
5. Re-submit for review

**Review Confidence**: High — All files fully read and analyzed. No logic errors in schema generation, only data consistency issues between two sources of truth.

---

## Inspector Notes

This code demonstrates good architecture (schema generation functions are clean, reusable, and well-typed). The main issue is that data exists in TWO places (lib/locations.ts and hardcoded in app/layout.tsx), and they don't match. The solution is to consolidate: make app/layout.tsx use the schema functions that read from lib/locations.ts as the single source of truth.

**Files delivered for fix**:
- `/home/aiciv/tdhps-website/01-inspection.md` (this file)

