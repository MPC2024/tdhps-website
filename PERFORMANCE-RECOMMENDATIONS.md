# TDHPS Performance Optimization — Quick Reference

**Generated**: 2026-04-21
**Full Report**: See `PERFORMANCE-AUDIT.md` for detailed analysis

## Current Status
- Estimated FCP: 1.8–2.2s (mobile 4G, slow device)
- Estimated LCP: 2.5–3.2s
- Web Vitals: Borderline passing, opportunity for improvement

## Top 5 Bottlenecks (Priority Order)

### 1. Font Awesome CSS Render-Blocking (MEDIUM) — 30 mins
**File**: `app/layout.tsx:202–208`
**Fix**: Convert `<link>` to async load or self-host

```tsx
// BEFORE (render-blocking):
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/.../font-awesome/6.5.1/css/all.min.css" />

// AFTER (non-blocking):
<link rel="preload" as="style" href="..." onLoad="this.onload=null;this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="..." /></noscript>
```
**Impact**: FCP +150–250ms improvement

---

### 2. Missing Hero Image Preload (MEDIUM) — 15 mins
**File**: `app/layout.tsx` (add to `<head>`)
**Fix**: Add explicit preload link

```tsx
<link rel="preload" as="image" href="https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp" type="image/webp" />
```
**Impact**: LCP +80–150ms improvement

---

### 3. JS Hydration Blocking Interactivity (MEDIUM) — Strategic
**File**: `components/Providers.tsx` and 24 other `use client` components
**Issue**: Language context forces entire app to be client-side
**Strategic Fix** (Future): Move language detection to server-side
**Impact**: FCP +200–400ms on slow networks

---

### 4. SVG Height Missing (LOW) — 1 line
**File**: `app/page.tsx:32–36`
**Fix**: Add explicit height to parent

```tsx
<div style={{
  position: "absolute",
  bottom: "-1px",
  left: 0,
  width: "100%",
  height: "60px",  // ADD THIS
  lineHeight: 0,
  zIndex: 10
}}>
```
**Impact**: CLS reduction of 0.01

---

### 5. GTM Script Timing (LOW) — 5 mins
**File**: `app/layout.tsx:231`
**Optional Fix**: Change to lazy loading

```tsx
<Script src="..." strategy="lazyOnload" />  // Instead of afterInteractive
```
**Impact**: 20–50ms improvement if high bounce rate

---

## Quick Wins Summary

| Task | Time | Files | FCP Gain | Priority |
|------|------|-------|----------|----------|
| Font Awesome async | 30m | layout.tsx | +150–250ms | HIGH |
| Hero preload | 15m | layout.tsx | +80–150ms | HIGH |
| SVG height | 5m | page.tsx | +0.01 CLS | MEDIUM |
| GTM lazy | 5m | layout.tsx | +20–50ms | LOW |
| **Total** | **~60m** | **3 files** | **+250–450ms** | — |

**After all quick wins**: FCP should improve from 1.8–2.2s → 1.5–1.8s

---

## What's Already Optimized

You don't need to change:
- Hero slider (`HeroSlider.tsx`) — already has `priority={true}`, `fill`, `objectFit`
- Image sizes (all 50+ components) — responsive `sizes` attributes present
- Google Fonts — all using `display: "swap"`
- Analytics script — correct `afterInteractive` strategy
- Build config — CSS optimization enabled

---

## Verification

After implementing quick wins, verify with:
```bash
npm run build  # Should still pass clean
# Then use Chrome DevTools Lighthouse:
# 1. Throttle to "Slow 4G"
# 2. CPU 4x slowdown
# 3. Run audit and compare FCP/LCP metrics
```

---

## Next Steps

**This week**: Implement 4 quick wins (60 mins)
**Next 1–2 weeks**: Self-host Font Awesome, set up Lighthouse CI
**Next month**: Strategic refactor (server-side language detection)

For full details, see: `/home/aiciv/tdhps-website/PERFORMANCE-AUDIT.md`
