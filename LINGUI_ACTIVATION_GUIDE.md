# LinguiJS Activation Guide

## Status: Setup Complete, Awaiting Activation

LinguiJS is fully configured and ready. The final step is to wrap your app with the `LinguiClientProvider` in `app/layout.tsx`.

## Current State

LinguiJS infrastructure exists but is not yet active because `LinguiClientProvider` is not in the app layout.

**This is intentional** — we set up the infrastructure without breaking anything, so you can activate it yourself when ready.

## Activation: 2 Steps

### Step 1: Locate Your App Layout

Find `app/layout.tsx` (usually in `/home/aiciv/tdhps-website/app/layout.tsx`)

Check if `LanguageProvider` is already present:
```tsx
import { LanguageProvider } from "@/lib/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
```

### Step 2: Add LinguiClientProvider

Update `app/layout.tsx` to wrap children with both providers:

```tsx
import { LanguageProvider } from "@/lib/LanguageContext";
import { LinguiClientProvider } from "@/components/LinguiProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <LinguiClientProvider>
            {children}
          </LinguiClientProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
```

**Key Point**: `LinguiClientProvider` must be INSIDE `LanguageProvider`. The nesting order matters:

```
LanguageProvider (outer - provides language state)
└── LinguiClientProvider (inner - uses language state to load catalogs)
    └── Your app content
```

### Step 3: Verify It Works

After activation, the language switcher should now power Lingui translations.

```tsx
// This component would show Spanish text when language is switched to "es"
import { Trans } from "@lingui/react";

export function TestComponent() {
  return <h1><Trans>Welcome to LinguiJS</Trans></h1>;
}
```

## What Happens When You Activate

1. **App Loads**: `LanguageProvider` initializes with `language: "en"`
2. **LinguiClientProvider Mounts**: Imports `src/locales/en/messages.json`
3. **Lingui Activates**: `i18n.activate("en")` sets English as active
4. **Translations Render**: Any `<Trans>` macros render in English
5. **User Switches Language**: Language state updates to "es"
6. **LinguiClientProvider Effect Runs**: Imports `src/locales/es/messages.json`
7. **Lingui Updates**: `i18n.activate("es")` switches to Spanish
8. **Translations Re-render**: Any `<Trans>` macros re-render in Spanish

All automatic. No manual intervention needed.

## Before You Activate: Checklist

- [ ] `lib/LanguageContext.tsx` exists and is imported
- [ ] `components/LinguiProvider.tsx` exists
- [ ] `lingui.config.ts` exists
- [ ] `src/locales/{en,es}/` directories exist
- [ ] `npm run build` succeeds
- [ ] Existing site works (no errors in console)

## After Activation: Testing

1. **Test in English**: Visit site, verify it loads and works
2. **Test Language Switch**: Click language toggle, verify page responds
3. **Test with Trans**: Add a test component with `<Trans>` and verify it's extracted
   ```tsx
   import { Trans } from "@lingui/react";
   <Trans>This is a test string</Trans>
   ```
4. **Extract**: `npm run extract`
5. **Auto-translate**: `python3 scripts/auto-translate.py`
6. **Compile**: `npx lingui compile`
7. **Build**: `npm run build`
8. **Test Spanish**: Switch language, verify Spanish appears

## If Activation Fails

### Error: "useLanguage must be used within LanguageProvider"
**Cause**: `LinguiClientProvider` is outside `LanguageProvider`
**Fix**: Ensure nesting is correct:
```tsx
<LanguageProvider>
  <LinguiClientProvider>  {/* Must be INSIDE LanguageProvider */}
    {children}
  </LinguiClientProvider>
</LanguageProvider>
```

### Error: "Cannot find module ../src/locales/en/messages"
**Cause**: Catalog files don't exist yet
**Fix**: Run extraction first:
```bash
npm run extract
npx lingui compile
```

### Language Switch Doesn't Update Translations
**Cause**: LinguiClientProvider not in layout
**Fix**: Follow Step 2 above to add provider

### Build Fails with "SWC Plugin Error"
**Cause**: Lingui SWC plugin conflict
**Fix**: See `LINGUI_SETUP_GUIDE.md` section "Build fails with SWC plugin error"

## Rollback (If Needed)

If Lingui causes issues, it's easy to rollback:

```tsx
// Remove LinguiClientProvider wrapper, keep LanguageProvider
import { LanguageProvider } from "@/lib/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
```

Old system continues to work. No data loss.

## Expected File Structure After Activation

```
/home/aiciv/tdhps-website/
├── lingui.config.ts                    ✅
├── lib/
│   ├── LanguageContext.tsx             ✅ (existing)
│   ├── i18n.ts                         ✅
│   └── translations.ts                 ✅ (existing)
├── components/
│   └── LinguiProvider.tsx              ✅
├── scripts/
│   └── auto-translate.py               ✅
├── src/
│   └── locales/
│       ├── en/                         ✅
│       │   ├── messages.po             (created by extract)
│       │   └── messages.json           (created by compile)
│       └── es/
│           ├── messages.po             (created by auto-translate)
│           └── messages.json           (created by compile)
├── app/
│   └── layout.tsx                      (needs LinguiClientProvider added)
├── next.config.ts                      ✅ (already updated)
└── package.json                        ✅ (already updated)
```

## Quick Activation Procedure

Copy-paste this into `app/layout.tsx`:

```tsx
import { LanguageProvider } from "@/lib/LanguageContext";
import { LinguiClientProvider } from "@/components/LinguiProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <LinguiClientProvider>
            {/* Your existing layout content */}
            {children}
          </LinguiClientProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
```

Then:
```bash
npm run build   # Verify no errors
npm run dev     # Test locally
```

## Success Indicators

After activation, you should see:

- ✅ Site loads without console errors
- ✅ Language toggle still works
- ✅ No breaking changes to existing pages
- ✅ New `<Trans>` macros can be extracted
- ✅ Auto-translate pipeline works

## Next: Start Using Lingui

Once activated, mark new strings with `<Trans>`:

```tsx
import { Trans } from "@lingui/react";

export function BookingButton() {
  return <button><Trans>Book An Appointment</Trans></button>;
}
```

Then follow the standard workflow:
```bash
npm run extract
python3 scripts/auto-translate.py
npx lingui compile
npm run build
```

Spanish translations auto-generate.

## Questions?

See:
- `LINGUI_QUICK_START.md` — Overview
- `LINGUI_SETUP_GUIDE.md` — Detailed documentation
- `LINGUI_EXAMPLES.md` — Code patterns
- https://lingui.dev — Official docs

---

**Ready to activate?** Follow Step 1-2 above. Takes 2 minutes.
