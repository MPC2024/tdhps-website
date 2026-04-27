# LinguiJS Usage Examples - TDHPS Website

This document shows real examples of how to use LinguiJS for translatable content.

## Example 1: Simple JSX Translation

### Before (Manual)
```tsx
import { useLanguage } from "@/lib/LanguageContext";

export function BookingButton() {
  const { t } = useLanguage();

  return (
    <button>{t("book_appointment")}</button>
  );
}
```

Then you'd need to add to `lib/translations.ts`:
```ts
book_appointment: "Book An Appointment",
// ... Spanish in translations.es.book_appointment
```

### After (Lingui - Recommended)
```tsx
import { Trans } from "@lingui/react";

export function BookingButton() {
  return (
    <button>
      <Trans>Book An Appointment</Trans>
    </button>
  );
}
```

No translation object needed. Just use `<Trans>`. Lingui extracts automatically.

## Example 2: Dynamic Content

### Before (Manual)
```tsx
const { t } = useLanguage();
const message = `${t("welcome")}, ${petName}!`;
```

### After (Lingui)
```tsx
import { i18n } from "@lingui/core";

const message = i18n._`Welcome, ${petName}!`;
```

Using template literals for interpolation.

## Example 3: Conditional Translations

### Before (Manual)
```tsx
const { t, language } = useLanguage();

return (
  <div>
    {language === "es" ? "¡Hola!" : "Hello!"}
  </div>
);
```

### After (Lingui)
```tsx
import { Trans } from "@lingui/react";

return (
  <div>
    <Trans>Hello!</Trans>
  </div>
);
```

Lingui handles the language switching automatically based on `i18n.activate(language)`.

## Example 4: Plural Forms

```tsx
import { Trans, plural } from "@lingui/react";

export function PetCount({ count }: { count: number }) {
  return (
    <p>
      <Trans>
        {plural(count, {
          one: "# dog is in our care",
          other: "# dogs are in our care"
        })}
      </Trans>
    </p>
  );
}
```

English: "1 dog is in our care" / "5 dogs are in our care"
Spanish: "1 perro está bajo nuestro cuidado" / "5 perros están bajo nuestro cuidado"

## Example 5: Attributes (alt text, titles, etc.)

### Incorrect (Lingui can't extract from attributes)
```tsx
<img alt="Dog grooming" src="..." />  // ❌ Not extracted
```

### Correct (Move to title attribute or use i18n._)
```tsx
import { i18n } from "@lingui/core";

const altText = i18n._("Dog grooming");
export function GroomingImage() {
  return <img alt={altText} src="..." />;
}

// OR use useLinguiString hook (if available in your version)
```

## Example 6: Long Blocks of Text

### Before (Hard to read)
```tsx
const { t } = useLanguage();

return (
  <p>
    {t("welcome_paragraph_1")}
  </p>
);
```

With manual translation management.

### After (Much cleaner)
```tsx
import { Trans } from "@lingui/react";

return (
  <p>
    <Trans>
      Welcome to The Dog House Pet Salon, where we pride ourselves on providing
      top-tier dog grooming services, daycare, and dog boarding to the residents
      of Houston, TX, including Pearland, The Galleria, Uptown, and surrounding
      communities.
    </Trans>
  </p>
);
```

The text is right there. Easy to read. Lingui extracts it automatically.

## Example 7: Components with Translatable Content

```tsx
import { Trans } from "@lingui/react";

interface LocationCardProps {
  name: string;
  address: string;
}

export function LocationCard({ name, address }: LocationCardProps) {
  return (
    <div className="location-card">
      <h2>{name}</h2>
      <p>{address}</p>
      <button>
        <Trans>Book Appointment</Trans>
      </button>
      <p>
        <Trans>Hours: Monday - Friday, 9am - 6pm</Trans>
      </p>
    </div>
  );
}
```

Using it:
```tsx
<LocationCard
  name="Galleria Uptown Park"
  address="1234 Uptown Ave, Houston, TX 77001"
/>
```

## Example 8: Translating Form Labels

```tsx
import { Trans } from "@lingui/react";

export function GroomingForm() {
  return (
    <form>
      <label htmlFor="petName">
        <Trans>Pet Name</Trans>
      </label>
      <input id="petName" type="text" placeholder="Fluffy" />

      <label htmlFor="petBreed">
        <Trans>Breed</Trans>
      </label>
      <input id="petBreed" type="text" placeholder="Golden Retriever" />

      <label htmlFor="serviceType">
        <Trans>Service Type</Trans>
      </label>
      <select id="serviceType">
        <option><Trans>Grooming</Trans></option>
        <option><Trans>Bathing</Trans></option>
        <option><Trans>Boarding</Trans></option>
      </select>

      <button type="submit">
        <Trans>Book Now</Trans>
      </button>
    </form>
  );
}
```

## Example 9: Migration Path - Gradually Convert Old Strings

### Old (Still Works)
```tsx
import { useLanguage } from "@/lib/LanguageContext";

export function OldComponent() {
  const { t } = useLanguage();
  return <h1>{t("the_dog_house")}</h1>;
}
```

### New Component in Same App
```tsx
import { Trans } from "@lingui/react";

export function NewComponent() {
  return <h1><Trans>The Dog House Pet Salon</Trans></h1>;
}
```

Both coexist. No breaking changes. Gradually migrate old strings.

## Example 10: Real-World Page Conversion

### Before: All Manual Translations
```tsx
// components/HomePage.tsx
import { useLanguage } from "@/lib/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main>
      <h1>{t("the_dog_house")}</h1>
      <p>{t("welcome_to_dog_house")}</p>
      <section>
        <h2>{t("our_services_not_limited")}</h2>
        <p>{t("service_description")}</p>
      </section>
      <button>{t("book_appointment")}</button>
    </main>
  );
}
```

With translations object:
```ts
// lib/translations.ts
export const translations = {
  en: {
    the_dog_house: "THE DOG HOUSE Pet Salon",
    welcome_to_dog_house: "Welcome to The Dog House...",
    our_services_not_limited: "Our services...",
    service_description: "We strive to meet...",
    book_appointment: "Book An Appointment",
  },
  es: {
    the_dog_house: "CASA DE PERROS Salón de Mascotas",
    welcome_to_dog_house: "Bienvenido a...",
    // ... etc
  },
};
```

### After: Using Lingui
```tsx
// components/HomePage.tsx
import { Trans } from "@lingui/react";

export default function HomePage() {
  return (
    <main>
      <h1><Trans>THE DOG HOUSE Pet Salon</Trans></h1>
      <p><Trans>Welcome to The Dog House Pet Salon, where we pride ourselves on providing top-tier dog grooming services...</Trans></p>

      <section>
        <h2><Trans>Our services are not limited to dog grooming</Trans></h2>
        <p><Trans>We strive to meet the diverse needs of our clients...</Trans></p>
      </section>

      <button><Trans>Book An Appointment</Trans></button>
    </main>
  );
}
```

No translations object. No manual key management. Lingui handles everything:

```bash
npm run extract  # Finds all <Trans>, creates src/locales/en/messages.po
python3 scripts/auto-translate.py  # Generates Spanish automatically
npx lingui compile  # Creates JSON for production
```

## Example 11: Handling Rich Content

```tsx
import { Trans } from "@lingui/react";

export function RichContent() {
  return (
    <div>
      <Trans>
        We offer <strong>premium grooming</strong> with{" "}
        <em>certified professionals</em>. Book today!
      </Trans>
    </div>
  );
}
```

Lingui preserves the HTML structure when translating.

## Example 12: Comments in Translatable Text (Optional)

Use comments above `<Trans>` to provide context to translators:

```tsx
import { Trans } from "@lingui/react";

export function ServiceCard() {
  return (
    <>
      {/* Translator note: This is for the grooming service card headline */}
      <h3><Trans>Professional Dog Grooming</Trans></h3>

      {/* Translator: Keep this brief, max 100 chars for mobile display */}
      <p><Trans>Expert care for all breeds and coat types</Trans></p>
    </>
  );
}
```

## The Extraction & Translation Workflow

After writing these examples, the workflow would be:

```bash
# 1. Extract all Trans macros
npm run extract

# src/locales/en/messages.po now contains:
# msgid "THE DOG HOUSE Pet Salon"
# msgid "Welcome to The Dog House Pet Salon..."
# msgid "Book An Appointment"
# msgid "Professional Dog Grooming"
# ... etc

# 2. Auto-generate Spanish
python3 scripts/auto-translate.py

# src/locales/es/messages.po now contains:
# msgid "THE DOG HOUSE Pet Salon"
# msgstr "CASA DE PERROS Salón de Mascotas"
# msgid "Welcome to The Dog House Pet Salon..."
# msgstr "Bienvenido a The Dog House Pet Salon..."
# ... auto-translated

# 3. Compile to optimized JSON
npx lingui compile

# src/locales/en/messages.json and es/messages.json created

# 4. Build and deploy
npm run build
git push
```

Spanish users now see automatic translations with zero manual effort.

## Key Takeaways

1. **Use `<Trans>` for JSX** - Most common, most readable
2. **Use `i18n._()`** - For JavaScript strings, dynamic content
3. **Avoid hardcoded strings** - Use `<Trans>` even for one-time text
4. **Let Lingui extract** - Don't manage translation keys manually
5. **Let MyMemory translate** - Run auto-translate.py, review, compile
6. **Trust the process** - Extract → Translate → Compile → Deploy

---

For more examples and documentation, see:
- `LINGUI_SETUP_GUIDE.md` - Full setup documentation
- `LINGUI_QUICK_START.md` - Quick reference
- https://lingui.dev - Official LinguiJS documentation
