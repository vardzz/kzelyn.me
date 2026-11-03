# DESIGN.md — Portfolio Design System

> **Instruction to AI agents:** This file is the single source of truth for all UI/UX on this website. Follow it for every page, section, and component. Do not invent new colors, fonts, radii, or shadows. If something is not covered here, choose the quietest, most minimal option that stays consistent with these rules.

---

## 1. Brand Feeling

**Minimalist · Soft · Feminine · Premium**

Think: a quiet boutique, a linen-wrapped lookbook, warm morning light on a dusty-rose wall. Calm, airy, intentional. Never loud, never crowded, never glittery.

- Lots of empty space. Let things breathe.
- One idea per section.
- Soft edges, soft shadows, soft color. No harsh contrast, no hard black.
- Luxury comes from restraint: fewer elements, better spacing.

---

## 2. Color System

Derived from the reference palette and the dark-brown wordmark.

### Core tokens

| Token        | Name       | Hex       | Role                                               |
| ------------ | ---------- | --------- | -------------------------------------------------- |
| `--bone`     | Bone       | `#E5DFD6` | Secondary surface, cards, dividers                 |
| `--paper`    | Paper      | `#F2F0EC` | **Default page background** (lightest)             |
| `--espresso` | Espresso   | `#3E1F16` | **Primary text**, wordmark, headings               |
| `--sage`     | Dried Sage | `#7A816C` | Secondary accent, tags, subtle highlights          |
| `--rose`     | Dusty Rose | `#D1A9A5` | **Primary accent**, buttons, hover washes          |
| `--rust`     | Faded Rust | `#AE6965` | Strong accent, links, key emphasis (use sparingly) |
| `--oak`      | Warm Oak   | `#A58B71` | Muted text, borders, icons, captions               |

### Derived tints (for backgrounds and states)

| Token         | Hex       | Use                               |
| ------------- | --------- | --------------------------------- |
| `--rose-soft` | `#EBD8D5` | Section washes, hover backgrounds |
| `--sage-soft` | `#DDE0D6` | Alternate section wash            |
| `--line`      | `#D9D1C6` | Hairline borders and dividers     |

### CSS variables

```css
:root {
  --paper: #f2f0ec;
  --bone: #e5dfd6;
  --espresso: #3e1f16;
  --sage: #7a816c;
  --rose: #d1a9a5;
  --rust: #ae6965;
  --oak: #a58b71;
  --rose-soft: #ebd8d5;
  --sage-soft: #dde0d6;
  --line: #d9d1c6;
}
```

### Usage ratio (per screen)

- **70%** Paper / Bone (neutral space)
- **15%** Espresso (text)
- **10%** Dusty Rose / Rose-soft (accent)
- **5%** Sage, Rust, Oak (detail)

### Color rules

- Page background is always `--paper`. Alternate sections may use `--bone`, `--rose-soft`, or `--sage-soft`.
- **Never use pure black (`#000`) or pure white (`#FFF`).** Text is `--espresso`; lightest surface is `--paper`.
- Body text: `--espresso`. Secondary text: `--oak`.
- `--rust` and `--sage` are **not** safe for small body text on light backgrounds (low contrast). Use them for large text, icons, borders, or fills only.
- Max **two accent colors** visible in any single section.
- No gradients, except an optional very subtle `--paper` → `--rose-soft` wash on hero backgrounds.

---

## 3. Typography

### Font roles

| Role                  | Font                                                                                         | Use                                           |
| --------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Signature display** | **Fraunces** (soft, flared, high-contrast serif; closest Google Font to the "mora" wordmark) | **ONLY** for important words (see rule below) |
| **Everything else**   | **DM Sans**                                                                                  | Headings, body, nav, buttons, captions, UI    |

```css
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Fraunces:opsz,wght,SOFT,WONK@9..144,500..700,100,1&display=swap");

:root {
  --font-display: "Fraunces", serif;
  --font-body: "DM Sans", system-ui, sans-serif;
}
```

> If the real logo font or a logo SVG is available, use it for the brand name instead of Fraunces. Fraunces is the fallback for matching words elsewhere.

### ⚠️ Signature font rule (strict)

The signature display font is **rare and special**. Use it **only** for:

1. **The owner's name / brand name** (nav logo, hero name, footer sign-off)
2. **One highlighted word** inside a hero or section headline (max 1–2 words)
3. **Large numerals or a single pull word** (e.g., "01", "Selected Work") when used as a deliberate accent

**Never** use it for: paragraphs, buttons, navigation links, form fields, captions, card descriptions, or full headings.

**Maximum: 1 signature-font moment per section.**

Example: `Hello, I'm <span class="signature">Mora</span>` — only the name is in the display font; the rest is DM Sans.

### Type scale

| Style           | Size (desktop / mobile)              | Weight                     | Line height | Letter spacing |
| --------------- | ------------------------------------ | -------------------------- | ----------- | -------------- |
| Hero heading    | 72px / 40px                          | DM Sans 300                | 1.05        | -0.02em        |
| Section heading | 44px / 30px                          | DM Sans 300                | 1.15        | -0.01em        |
| Subheading      | 22px / 18px                          | DM Sans 400                | 1.4         | 0              |
| Body            | 16–17px                              | DM Sans 400                | 1.75        | 0              |
| Caption / meta  | 13px                                 | DM Sans 400                | 1.5         | 0.02em         |
| Eyebrow / label | 12px                                 | DM Sans 500, **UPPERCASE** | 1.4         | 0.18em         |
| Signature word  | matches the surrounding heading size | Fraunces 600               | inherits    | -0.01em        |

Light weights (300) for large headings give the premium, airy feel. Never use weights above 500 in DM Sans.

---

## 4. Layout & Spacing

- **Base unit: 8px.** All spacing is a multiple of 8.
- **Max content width:** 1120px. Reading text max **640px**.
- **Grid:** 12 columns desktop, 4 mobile. Gutter 24px (desktop) / 16px (mobile).
- **Section padding:** 128px vertical desktop / 72px mobile. Be generous.
- **Page side padding:** 48px desktop / 20px mobile.
- Prefer **asymmetric, editorial layouts**: generous margins, offset images, lots of negative space.
- One focal element per viewport.

### Spacing scale

`4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

---

## 5. Shape, Depth & Borders

Soft and pill-shaped, echoing the rounded palette cards.

| Token           | Value | Use                         |
| --------------- | ----- | --------------------------- |
| `--radius-sm`   | 12px  | Inputs, tags                |
| `--radius-md`   | 24px  | Cards, images               |
| `--radius-lg`   | 32px  | Large cards, feature panels |
| `--radius-pill` | 999px | Buttons, chips, nav pill    |

```css
--shadow-soft: 0 8px 30px rgba(62, 31, 22, 0.06);
--shadow-lift: 0 14px 40px rgba(62, 31, 22, 0.1);
```

- Prefer **hairline borders** (`1px solid var(--line)`) or a soft shadow, never both heavy.
- Shadows are always warm-tinted (espresso at low opacity), never gray or black.
- No hard drop shadows, no glows, no neon.

---

## 6. Components

### Buttons

- **Primary:** `--rose` background, `--espresso` text, pill radius, padding `14px 32px`, DM Sans 500 14px, letter-spacing 0.04em. Hover: background `--rust`, text `--paper`.
- **Secondary:** transparent, 1px `--espresso` border, `--espresso` text, pill. Hover: fill `--rose-soft`.
- **Text link:** `--espresso`, underline 1px `--rose`, offset 6px. Hover: underline `--rust`.
- Never use more than one primary button per viewport.

### Cards

- Background `--bone` or `--paper`, radius 24–32px, padding 32–40px, `--shadow-soft` or hairline border.
- Images inside cards use the same radius. Hover: lift 4px + `--shadow-lift`.

### Navigation

- Minimal: wordmark/name left (signature font), 3–5 links right (DM Sans 14px, normal case).
- Optional floating **pill nav** with `--paper` at 80% opacity + backdrop blur, hairline border.
- Active link: `--rust` dot or thin underline, never bold.

### Tags / Chips

- Pill, `--sage-soft` or `--rose-soft` background, `--espresso` text, 12px uppercase with 0.12em spacing.

### Forms

- Underline-style or soft-rounded (12px) inputs, `--line` border, focus border `--rose` + faint rose ring. Labels are eyebrow style. Error color: `--rust`.

### Dividers

- 1px `--line`, or generous whitespace instead. Prefer whitespace.

### Icons

- Thin line icons (1.25–1.5px stroke), `--oak` or `--espresso`. Rounded caps. No filled or multicolor icons.

---

## 7. Imagery

- Warm, natural, soft light. Muted tones that sit inside the palette (blush, sage, oak, cream).
- Rounded corners (24px). No harsh borders or heavy filters.
- Use a subtle warm overlay if an image clashes with the palette.
- Product/portfolio mockups sit on `--bone` or `--rose-soft` backgrounds with generous padding.

---

## 8. Motion

Quiet and slow. Motion should feel like a breath, not a performance.

- Duration: **300–600ms**. Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Allowed: fade-up on scroll (16–24px travel), gentle hover lift, soft color transitions, slow image scale (1 → 1.03).
- Avoid: bouncing, spinning, parallax overload, flashing, auto-playing carousels.
- Always respect `prefers-reduced-motion`.

---

## 9. Accessibility

- Body text contrast ≥ 4.5:1: `--espresso` on `--paper`/`--bone` passes comfortably.
- `--rust` text only at ≥ 24px or bold ≥ 18.5px, or as a non-text accent.
- Visible focus state on all interactive elements: 2px `--rust` outline with 3px offset.
- Tap targets ≥ 44×44px. Meaningful alt text on all images.

---

## 10. Responsive

- Mobile-first. Breakpoints: `640px · 960px · 1280px`.
- On mobile: single column, section padding 72px, hero heading 40px, keep generous whitespace (do not compress it).

---

## 11. Do / Don't

**Do**

- Use whitespace as the main design material.
- Keep one accent color dominant per section (usually Dusty Rose).
- Use the signature font only on names and one key word.
- Keep copy short, warm, and confident.

**Don't**

- Don't use bold, heavy, or all-caps headings (except small eyebrow labels).
- Don't use pure black, pure white, or saturated colors.
- Don't use more than two fonts, ever.
- Don't add emojis, stickers, or decorative clutter.
- Don't use sharp corners, hard shadows, or dense grids.
- Don't introduce new colors outside this file.

---

## 12. Agent Checklist (before shipping any layout)

- [ ] Background is `--paper` (or an approved wash)
- [ ] Text is `--espresso` / `--oak`, never black
- [ ] Signature font used only on name / 1–2 key words (max one per section)
- [ ] Spacing follows the 8px scale, and sections feel airy
- [ ] Radii and shadows come from the tokens above
- [ ] Only one primary button in view
- [ ] Contrast and focus states pass
- [ ] Nothing feels loud, crowded, or cold
