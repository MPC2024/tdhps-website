# LinguiJS Setup Guide - TDHPS Website

## Overview

LinguiJS has been integrated alongside the existing LanguageContext/translations system. Both systems work together:

- **Existing system** (`lib/LanguageContext.tsx`, `lib/translations.ts`): Manual translations, currently handles all English/Spanish strings
- **LinguiJS**: Structured translation framework with catalog extraction and compilation. Enables autonomous translation workflows.

## What Was Installed

### Packages
```bash
@lingui/core        # Core i18n engine
@lingui/react       # React hooks and components
@lingui/macro       # Compile-time macro for strings
@lingui/cli         # Command-line extraction and compilation
@lingui/swc-plugin  # Next.js SWC integration
```

### Files Created

| File | Purpose |
|------|---------|
| `lingui.config.ts` | Lingui configuration (locales: en, es) |
| `lib/i18n.ts` | Lingui core setup and catalog loader |
| `components/LinguiProvider.tsx` | React provider for Lingui context |
| `scripts/auto-translate.py` | Autonomous translation script (MyMemory API) |
| `src/locales/en/` | Locale directory for English |
| `src/locales/es/` | Locale directory for Spanish |
| `next.config.ts` | Updated with SWC plugin for Lingui macros |

## Workflow: Adding Translatable Content

### Step 1: Mark Strings with Lingui Macros

Use `Trans` component or `i18n._()` for new content:

```tsx
// Option A: In JSX (preferred for readability)
import { Trans } from "@lingui/react";

export function MyComponent() {
  return (
    <div>
      <Trans>Book Your Pet's Grooming Today!</Trans>
    </div>
  );
}

// Option B: In JavaScript (useful for dynamic strings)
import { i18n } from "@lingui/core";

const greeting = i18n._("Welcome to The Dog House");
```

### Step 2: Extract Translatable Strings

```bash
npm run extract
```

This reads your codebase, finds all `<Trans>` and `i18n._()` calls, and updates the `.po` catalog files:
- `src/locales/en/messages.po` — Source strings (English)
- `src/locales/es/messages.po` — Target strings (Spanish, initially empty)

### Step 3: Generate Spanish Translations

```bash
python3 scripts/auto-translate.py
```

This script:
1. Reads `src/locales/en/messages.po`
2. For each English string, calls **MyMemory API** (free, 5000 words/day)
3. Writes Spanish translations to `src/locales/es/messages.po`

**Note**: MyMemory is suitable for initial translations. For production, consider:
- **LibreTranslate** (self-hosted, ~3000 char/sec)
- **DeepL API** (paid, highest quality)
- **Google Translate API** (paid, widely used)

### Step 4: Compile Catalogs

```bash
npx lingui compile
```

This creates optimized binary catalog files for production:
- `src/locales/en/messages.json` — Compiled English
- `src/locales/es/messages.json` — Compiled Spanish

### Step 5: Deploy

```bash
git add .
git commit -m "Add/update translations"
npm run build
npm run start
```

## Migration Path: Custom Translations → Lingui

The site currently uses `lib/translations.ts` with manual strings. Gradual migration:

### Phase 1 (Current): Run Both Systems
- Existing `useLanguage()` hook + `lib/translations.ts` remain active
- New components use Lingui macros
- No breaking changes

### Phase 2 (Future): Migrate Existing Content
1. Convert high-traffic pages from custom translations to Lingui
2. Extract and auto-translate
3. Verify quality
4. Deprecate old system

### Phase 3 (Future): Retire Old System
- All strings use Lingui
- Remove `lib/LanguageContext.tsx` and `lib/translations.ts`
- Pure Lingui workflow

## Important: Integration with Existing LanguageContext

`components/LinguiProvider.tsx` depends on the existing `useLanguage()` hook:

```tsx
export function LinguiClientProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();  // ← From existing LanguageContext

  useEffect(() => {
    // Load the appropriate Lingui catalog based on language
    const { messages } = await import(`../src/locales/${language}/messages`);
    i18n.load(language, messages);
    i18n.activate(language);
  }, [language]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
```

**To activate LinguiProvider**, wrap your app in `app/layout.tsx` (see "Integration" section below).

## Integration: Wrapping Your App

To use LinguiProvider and activate Lingui, update `app/layout.tsx`:

```tsx
import { LanguageProvider } from "@/lib/LanguageContext";
import { LinguiClientProvider } from "@/components/LinguiProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <LinguiClientProvider>
            {/* Your app content */}
            {children}
          </LinguiClientProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
```

**IMPORTANT**: Both providers must be in place. The old `LanguageContext` feeds language state into `LinguiProvider`.

## Autonomous Translation Workflow (No Manual Intervention)

To enable agents to publish Spanish content without manual translation:

```bash
# 1. Developer creates component with Trans macro
# 2. Pipeline runs (CI/CD or scheduled):

npm run extract                # Extract new strings
python3 scripts/auto-translate.py   # Auto-generate Spanish
npx lingui compile             # Compile for production
npm run build                  # Build
npm run deploy                 # Deploy (Vercel, etc.)

# 3. Spanish users see translated content immediately
```

Example GitHub Actions workflow (`.github/workflows/auto-translate.yml`):

```yaml
name: Auto-Translate

on:
  push:
    branches: [main]
    paths:
      - "app/**"
      - "components/**"
      - ".github/workflows/auto-translate.yml"

jobs:
  translate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "20"
      - run: npm install
      - run: npm run extract
      - run: python3 scripts/auto-translate.py
      - run: npx lingui compile
      - run: npm run build
      - uses: vercel/action@v5
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Verification: Did Lingui Setup Work?

Run these checks:

```bash
# 1. Config exists and is valid
cat lingui.config.ts

# 2. Directories created
ls src/locales/

# 3. Build succeeds
npm run build

# 4. Extract works
npm run extract

# 5. Auto-translate script runs
python3 scripts/auto-translate.py
```

Expected output from extraction:
```
✔ Done in XXXms
Catalog statistics for src/locales/{locale}/messages:
┌─────────────┬─────────────┬─────────┐
│ Language    │ Total count │ Missing │
├─────────────┼─────────────┼─────────┤
│ en (source) │      X      │    -    │
│ es          │      X      │    X    │
└─────────────┴─────────────┴─────────┘
```

## Troubleshooting

### Issue: "Module not found: @lingui/core"
**Solution**: Run `npm install` to ensure all packages installed.

### Issue: "Extract finds 0 strings"
**Cause**: No code uses Lingui `<Trans>` macro yet. Existing code uses custom `useLanguage()`.
**Solution**: Mark new strings with `<Trans>` or `i18n._()`. Old strings continue using custom system.

### Issue: Auto-translate script fails with "5000 words/day exceeded"
**Cause**: MyMemory API daily limit reached.
**Solution**:
- Wait 24 hours
- Use LibreTranslate or DeepL instead (see "Generate Spanish Translations" section)

### Issue: Build fails with "SWC plugin error"
**Cause**: Lingui SWC plugin conflict with other plugins.
**Solution**: Remove `swcPlugins` from `next.config.ts` and use Babel approach instead:
```bash
npm install --save-dev @babel/core @babel/preset-react babel-loader
```
Then configure in `next.config.ts`:
```typescript
experimental: {
  optimizeCss: true,
},
```

### Issue: Language switching doesn't update Lingui strings
**Cause**: `LinguiClientProvider` not wrapping app.
**Solution**: Ensure `app/layout.tsx` includes both `LanguageProvider` and `LinguiClientProvider`.

## Commands Reference

```bash
# Extract translatable strings into .po catalogs
npm run extract

# Compile .po catalogs into optimized JSON for production
npx lingui compile

# Auto-translate English → Spanish (MyMemory API)
python3 scripts/auto-translate.py

# Build with Lingui integration
npm run build

# Development mode (extracts macros at runtime)
npm run dev
```

## File Locations Quick Reference

| Path | Purpose |
|------|---------|
| `lingui.config.ts` | Lingui config (locales, catalog format, paths) |
| `lib/i18n.ts` | Lingui core setup |
| `lib/LanguageContext.tsx` | **EXISTING**: Language state management |
| `components/LinguiProvider.tsx` | Lingui + existing context integration |
| `src/locales/en/messages.po` | **SOURCE**: English strings (generated by extract) |
| `src/locales/es/messages.po` | **TARGET**: Spanish translations (generated by auto-translate.py) |
| `src/locales/en/messages.json` | Compiled English (generated by compile) |
| `src/locales/es/messages.json` | Compiled Spanish (generated by compile) |
| `scripts/auto-translate.py` | Autonomous translation tool |
| `next.config.ts` | SWC plugin config for Lingui macros |

## Next Steps

1. **Activate LinguiProvider** in `app/layout.tsx` (if not already done)
2. **Create a test component** with Lingui macros:
   ```tsx
   import { Trans } from "@lingui/react";
   export function TestComponent() {
     return <Trans>Hello, this is a test string!</Trans>;
   }
   ```
3. **Run the workflow**:
   ```bash
   npm run extract
   python3 scripts/auto-translate.py
   npx lingui compile
   npm run build
   ```
4. **Test in Spanish**: Toggle language in UI, verify translation appears

## Questions?

See official docs: https://lingui.dev

---

**Setup completed**: 2026-04-21
**System**: Next.js 16.2.0 + Lingui + MyMemory API
**Status**: Ready for autonomous translation workflow
