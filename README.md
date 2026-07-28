# SOFTY Landing Page

Landing page for two WordPress products — **SOFTY Custom Layouts for TinyMCE** and **AI Chatbot** — built with Create React App, TypeScript, `react-router-dom`, and Ant Design (`antd` + `@ant-design/icons`). No emoji icons are used anywhere; all iconography comes from `@ant-design/icons`.

Vietnamese is the default language, with an EN/VI toggle in the header (persisted in `localStorage`).

## Getting started

```bash
npm install
npm start
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
```

## Project structure

```
src/
  i18n/
    translations.ts      UI chrome strings (nav, buttons, headings) in vi/en
    LanguageContext.tsx   Language provider + useLanguage() hook
  data/
    content.ts            Product, service, pricing, testimonial and FAQ content (vi/en)
  components/
    EditorWindow.tsx       Signature "editor chrome" card used across the page
    Header.tsx / Footer.tsx
    Hero.tsx
    ProductsSection.tsx
    ServicesSection.tsx
    PricingSection.tsx
    TestimonialsSection.tsx
    FaqSection.tsx
    CtaBanner.tsx
  pages/
    Home.tsx               Assembles all landing sections at "/"
    ProductDetail.tsx       Full feature + pricing page at "/products/:slug"
```

## Design notes

- Palette: deep navy ink (`#14192B`), indigo (`#3B4CCA`) for the layouts product, teal (`#2BB8A3`) for the AI chatbot product, and amber (`#F2A93B`) as a shared highlight — all defined as CSS custom properties in `src/index.css`.
- Type: Space Grotesk for display headings, Inter for body copy, JetBrains Mono for tags, prices and the "editor chrome" tab labels — a nod to the products being editor/code-adjacent tools.
- Signature element: the `EditorWindow` component (traffic-light dots + mono tab label) mimics the Classic Editor / chat-widget chrome these plugins actually live inside, and is reused for the hero mockup, both product cards, and the product detail hero.

## Editing content

- Any UI label (nav, buttons, section eyebrows) lives in `src/i18n/translations.ts`.
- Product features, pricing tiers, services, testimonials and FAQ entries live in `src/data/content.ts`, each with a `{ vi, en }` pair.
- Prices are illustrative — update `PricingTier.price` in `content.ts` to match your actual plans.
