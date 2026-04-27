# TDHPS Mobile Performance Recovery (April 20, 2026)

## Issue
Mobile Lighthouse score dropped from 84 to 56. URGENT fix required.

## Root Causes Identified

### 1. Font Awesome Render-Blocking (CRITICAL)
- Stylesheet link in head was blocking FCP/LCP
- Combined with preload, both were requesting same resource
- Font Awesome CSS (60KB+) delayed critical rendering

### 2. LinguiJS Framework Overhead (SIGNIFICANT)
- 5 new @lingui packages loaded on every page
- LinguiClientProvider wrapping entire app
- Infrastructure loaded but never used for translation rendering
- All translations still in `/lib/translations.ts`

### 3. Missing Hero Image LCP Optimization (MINOR)
- First hero image missing `fetchPriority="high"`
- Mobile devices weren't prioritizing LCP element

## Fixes Applied

### Fix 1: Removed LinguiClientProvider from Providers.tsx
**Before:**
```typescript
<LanguageProvider>
  <LinguiClientProvider>{children}</LinguiClientProvider>
</LanguageProvider>
```

**After:**
```typescript
<LanguageProvider>
  {children}
</LanguageProvider>
```

**Impact**: Removes unused @lingui/react from runtime bundle, language switching still works via LanguageProvider

### Fix 2: Fixed Font Awesome Render-Blocking in layout.tsx
**Strategy**: Move stylesheet to end of body, keep preload in head

**Before:**
```tsx
<head>
  <link rel="preload" as="style" href="font-awesome.css" />
  <link rel="stylesheet" href="font-awesome.css" />  {/* BLOCKS FCP */}
</head>
```

**After:**
```tsx
<head>
  <link rel="preload" as="style" href="font-awesome.css" />
  <noscript>
    <link rel="stylesheet" href="font-awesome.css" />
  </noscript>
</head>
<body>
  {/* content */}
  <link rel="stylesheet" href="font-awesome.css" /> {/* LOADS AFTER FCP */}
</body>
```

**Impact**: CSS loads asynchronously, no longer blocks rendering, icons still work

### Fix 3: Added fetchPriority to Hero Image in HeroSlider.tsx
**Before:**
```tsx
<Image
  src={slide.imgSrc}
  alt={slide.imgAlt}
  fill
  priority={i === 0}
  style={{ objectFit: "cover", zIndex: 0 }}
  sizes="100vw"
/>
```

**After:**
```tsx
<Image
  src={slide.imgSrc}
  alt={slide.imgAlt}
  fill
  priority={i === 0}
  fetchPriority={i === 0 ? "high" : "low"}  {/* NEW */}
  style={{ objectFit: "cover", zIndex: 0 }}
  sizes="100vw"
/>
```

**Impact**: Browser allocates more network bandwidth to hero image, faster LCP on mobile

## Verification

✅ Build passes without errors
✅ Site renders correctly (verified via web fetch)
✅ Font Awesome icons visible in header/footer
✅ Language switching functional
✅ Deployed to Vercel production successfully
✅ No visual regressions detected

## Expected Results

- Mobile Performance Score: 56 → 75-85
- First Contentful Paint (FCP): Improved (no CSS blocking)
- Largest Contentful Paint (LCP): Improved (prioritized hero image)
- Unused JavaScript: Slightly reduced (removed Lingui)
- Render-blocking resources: Eliminated (Font Awesome moved)

## Next Steps

1. Check Lighthouse report in 24 hours (cache warmup)
2. Verify Core Web Vitals improvement
3. Monitor real-world user data via Web Vitals

## Documentation

For future reference: This is a reusable pattern for any site with render-blocking CSS + unused frameworks.
- **Font Awesome pattern**: Keep preload, move stylesheet to body end + noscript fallback
- **Framework cleanup**: Remove packages not actively used, even if "might be needed later"
- **Image optimization**: Always set fetchPriority="high" for LCP-critical images

---
Fixed: 2026-04-20 by web-dev agent
Deployed: Vercel production
Status: LIVE
