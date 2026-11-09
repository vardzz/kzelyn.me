# KZELYN Portfolio — Design System

> A refined editorial portfolio design combining luxury typography, minimalist layouts, warm neutral colors, and sophisticated personal branding.

---

# 1. Design Philosophy

## Design Direction

**Style:** Luxury Editorial / Minimalist / Fashion-Inspired

The website should feel like a combination of:

- A luxury fashion magazine.
- A professional creative portfolio.
- A high-end personal branding website.

### Core Principles

1. Typography is the primary visual element.
2. Generous whitespace creates visual balance.
3. Asymmetrical layouts establish visual interest.
4. Minimal borders and dividers provide structure.
5. Large editorial typography contrasts with small sans-serif labels.
6. Photography should feel natural, professional, and cinematic.

Avoid:

- Excessive gradients.
- Glassmorphism.
- Unnecessary shadows.
- Colorful accent elements.
- Excessive rounded cards.
- Generic SaaS-style layouts.
- Overly decorative animations.

# 2. Typography System

## Primary Font: Bodoni Moda

**Usage:**

- Oversized KZELYN lettering.
- Main hero headline.
- Editorial section headings.
- Large quotation-style statements.

Recommended Google Fonts import:

```css
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500;6..96,600;6..96,700&display=swap");
```

Characteristics:

- High contrast between thick and thin strokes.
- Elegant serif details.
- Fashion editorial appearance.
- Sophisticated and timeless.

Alternative fonts:

- Didot
- Cormorant Garamond
- Playfair Display

Bodoni Moda is the preferred option for the closest overall direction.

## Secondary Font: Inter

**Usage:**

- Navigation.
- Descriptions.
- Buttons.
- Small labels.
- Section indicators.
- Supporting information.

Recommended import:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
```

Characteristics:

- Clean and modern.
- Excellent readability.
- Neutral appearance.
- Works well alongside high-contrast serif typography.

## Font Assignment

| Element               | Font        | Weight  |
| --------------------- | ----------- | ------- |
| Oversized name        | Bodoni Moda | 400     |
| Hero headline         | Bodoni Moda | 400     |
| Bold name in headline | Bodoni Moda | 700     |
| Section headings      | Bodoni Moda | 400     |
| Navigation            | Inter       | 400–500 |
| Description           | Inter       | 400     |
| Small labels          | Inter       | 400–500 |
| Buttons               | Inter       | 500     |
| Pagination            | Inter       | 400     |

# 3. Typography Scale

All measurements below are desktop reference targets.

| Element          | Font Size | Line Height | Letter Spacing |
| ---------------- | --------: | ----------: | -------------: |
| Oversized KZELYN |     310px |        0.95 |       -0.075em |
| Hero headline    |      64px |        1.04 |       -0.035em |
| Section heading  |      64px |        1.05 |       -0.025em |
| Subheading       |      28px |         1.2 |        -0.02em |
| Body description |      16px |         1.6 |              0 |
| Navigation       |      13px |         1.4 |         0.01em |
| Small label      |      12px |         1.4 |         0.04em |
| Button text      |      13px |         1.4 |              0 |
| Pagination       |      18px |         1.4 |              0 |

## Oversized Name

The KZELYN text is the dominant typographic element.

Specifications:

- Uppercase.
- Single horizontal line.
- Bodoni Moda Regular.
- Approximately 19vw font size.
- Tight negative letter spacing.
- Positioned near the upper section of the viewport.
- Extends across almost the entire screen width.

The portrait must overlap the typography.

# 4. Color Palette

## Primary Colors

| Token          | Hex     | Usage                      |
| -------------- | ------- | -------------------------- |
| Background     | #F3EFE9 | Main page background       |
| Primary Text   | #171513 | Headlines and primary text |
| Secondary Text | #77716A | Descriptions               |
| Muted Text     | #88827A | Supporting information     |
| Border         | #A9A39B | Dividers and outlines      |
| Primary Button | #000000 | Main CTA                   |
| Button Text    | #FFFFFF | Main CTA text              |
| White          | #FFFFFF | Logo lettering             |

## CSS Variables

```css
:root {
  --color-background: #f3efe9;
  --color-primary: #171513;
  --color-secondary: #77716a;
  --color-muted: #88827a;
  --color-border: #a9a39b;
  --color-black: #000000;
  --color-white: #ffffff;
}
```

The background should remain a consistent warm off-white.

Avoid pure white backgrounds for the main sections.

# 5. Layout System

## Desktop Reference Dimensions

Primary reference viewport:

- Width: 1648px
- Height: 928px
- Aspect ratio: 16:9

### Global Layout

| Property                | Value                       |
| ----------------------- | --------------------------- |
| Hero height             | 100svh                      |
| Minimum height          | 928px at reference viewport |
| Horizontal page padding | 4.5vw                       |
| Main positioning        | Relative                    |
| Portrait positioning    | Absolute                    |
| Overflow                | Hidden                      |
| Background              | #F3EFE9                     |

### Main Composition

The hero consists of five primary visual layers:

1. Background.
2. Oversized KZELYN typography.
3. Portrait image.
4. Introduction content.
5. Navigation and supporting information.

Use absolute positioning where necessary to preserve the original overlapping composition.

# 6. Navigation Design

## Structure

The navigation contains:

1. Circular K logo.
2. Horizontal divider.
3. Portfolio link.
4. About link.
5. Projects link.
6. Contact link.
7. Let's Talk button.

### Specifications

| Property         | Value             |
| ---------------- | ----------------- |
| Logo size        | 52px × 52px       |
| Logo background  | #000000           |
| Logo letter      | Bodoni Moda       |
| Logo letter size | 38px              |
| Navigation font  | Inter             |
| Navigation size  | 13px              |
| Navigation gap   | 40–44px           |
| Header padding   | 24px 4.5vw        |
| Button border    | 1px solid #77716A |
| Button radius    | 999px             |
| Button padding   | 12px 22px         |

The active navigation item must have a thin underline.

Navigation should remain visually lightweight.

# 7. Hero Introduction

## Positioning

The introduction is positioned on the left side of the hero.

Recommended desktop placement:

- Left: 4.5vw.
- Top: approximately 44–46% of viewport height.
- Maximum content width: 550px.

### Small Label

Text:

BSBA MARKETING MANAGEMENT GRADUATE

Specifications:

- Inter.
- 12px.
- Uppercase.
- Letter spacing: 0.04em.
- Color: #171513.

A thin horizontal divider extends to the right of the label.

### Main Headline

Exact text:

Hello, I'm Kzelyn.

Crafting brands with

purpose & care.

Specifications:

- Bodoni Moda.
- 64px.
- Line height: 1.04.
- Regular weight.
- Tight letter spacing.
- Bold emphasis on Kzelyn.

Maximum width: approximately 550px.

### Supporting Description

Exact text:

A marketing graduate passionate about turning creative ideas into real impact through strategy, design, and meaningful connections.

Specifications:

- Inter.
- 16px.
- Weight: 400.
- Line height: 1.6.
- Color: #77716A.
- Maximum width: 390px.
- Top margin: 20px.

# 8. Button System

## Primary CTA

Text: Explore My Work

| Property           | Value          |
| ------------------ | -------------- |
| Background         | #000000        |
| Text               | #FFFFFF        |
| Font               | Inter          |
| Font size          | 13px           |
| Font weight        | 500            |
| Height             | 46px           |
| Horizontal padding | 30px           |
| Border radius      | 999px          |
| Icon               | Arrow up-right |

## Secondary CTA

Text: About Me

| Property           | Value             |
| ------------------ | ----------------- |
| Background         | Transparent       |
| Text               | #171513           |
| Border             | 1px solid #77716A |
| Font               | Inter             |
| Font size          | 13px              |
| Height             | 46px              |
| Horizontal padding | 32px              |
| Border radius      | 999px             |

### Button Spacing

- Horizontal gap: 24–30px.
- Top margin: 22px.
- Hover transition: 200–300ms.
- Primary hover: slightly lighter black.
- Secondary hover: black background with white text.

# 9. Portrait Image

## Asset

```text
/public/kzelyn-image.png
```

Use the existing transparent PNG.

### Positioning

The portrait is the main visual focal point.

Specifications:

| Property             | Value                      |
| -------------------- | -------------------------- |
| Position             | Absolute                   |
| Horizontal alignment | Right-center               |
| Bottom               | 0                          |
| Width                | Approximately 57%          |
| Height               | Approximately 94%          |
| Object fit           | Contain                    |
| Object position      | Bottom center              |
| Z-index              | Above oversized typography |

### Important Rules

- Preserve the original aspect ratio.
- Do not crop the head or hands.
- Do not apply image filters.
- Do not add background shapes.
- Do not add shadows.
- Do not alter the clothing or pose.
- Keep the portrait's transparent background.
- Maintain the original image proportions.

The image must visually integrate with the background and overlap the oversized KZELYN typography.

# 10. Right-Side Pagination

Content:

01 / 04

Turning ideas into strategies, and strategies into something greater.

### Specifications

- Position: right side.
- Horizontal offset: 4.5vw.
- Vertical position: approximately 53% of viewport height.
- Left vertical divider: 1px.
- Divider color: #A9A39B.
- Padding left: 24px.
- Pagination size: 18px.
- Description size: 14px.
- Description line height: 1.6.
- Maximum description width: 170px.

The pagination must remain subtle and must not compete with the portrait.

# 11. Scroll Indicator

Content:

↓ Scroll to explore

### Specifications

- Position: bottom-left.
- Horizontal alignment with the main introduction.
- Arrow container: approximately 36px × 38px.
- Border radius: 11px.
- Border: 1px solid #A9A39B.
- Arrow size: 20px.
- Label font: Inter.
- Label size: 13px.
- Label color: #77716A.
- Horizontal divider extending to the right.

Keep the element visually understated.

# 12. Spacing System

Use a consistent spacing scale.

| Token    | Value |
| -------- | ----: |
| space-1  |   4px |
| space-2  |   8px |
| space-3  |  12px |
| space-4  |  16px |
| space-5  |  20px |
| space-6  |  24px |
| space-8  |  32px |
| space-10 |  40px |
| space-12 |  48px |
| space-16 |  64px |
| space-20 |  80px |
| space-24 |  96px |

Prefer generous whitespace instead of tightly packed components.

# 13. Border and Radius System

| Element          | Border Radius |
| ---------------- | ------------- |
| Logo             | 50%           |
| Main CTA         | 999px         |
| Secondary CTA    | 999px         |
| Navigation CTA   | 999px         |
| Scroll container | 11px          |
| Dividers         | 0px           |

Use 1px borders for most interface outlines.

Avoid excessive rounded corners on decorative elements.

# 14. Responsive Design

## Desktop: 1280px and Above

- Preserve the original editorial layout.
- Maintain the oversized typography.
- Keep the portrait on the right.
- Maintain the left-side introduction.
- Display the pagination and scroll indicator.

## Tablet: 768px–1279px

- Reduce oversized typography to approximately 18vw.
- Reduce headline size to 48–56px.
- Adjust portrait width to 60–65%.
- Reduce navigation spacing.
- Keep text readable.
- Reposition pagination if necessary.

## Mobile: Below 768px

- Use a simplified navigation.
- Reduce oversized lettering significantly.
- Position the portrait without obstructing the headline.
- Stack introduction elements vertically.
- Use a headline size between 38px and 46px.
- Hide or reposition pagination.
- Keep CTAs accessible.
- Prevent horizontal overflow.

Mobile should preserve the same visual identity without forcing the desktop composition into a narrow viewport.

# 15. Motion and Interaction

Keep animations subtle and purposeful.

Recommended interactions:

- Navigation underline transition.
- Button background transitions.
- Smooth scrolling.
- Subtle image entrance animation.
- Minimal arrow movement on hover.

Recommended timing:

```css
transition: all 250ms ease;
```

Avoid:

- Excessive parallax.
- Constant floating animations.
- Aggressive entrance animations.
- Large movement effects.
- Distracting background animations.

# 16. Recommended CSS Font Configuration

```css
:root {
  --font-editorial: "Bodoni Moda", "Didot", serif;
  --font-interface: "Inter", sans-serif;
}

body {
  background: var(--color-background);
  color: var(--color-primary);
  font-family: var(--font-interface);
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
.editorial-text {
  font-family: var(--font-editorial);
}
```

# 17. Design Implementation Rules

When implementing this design:

1. Treat this document as the primary design specification.
2. Preserve the original reference composition.
3. Do not introduce new colors or typography without a strong reason.
4. Do not replace the provided portrait.
5. Maintain the distinction between serif editorial typography and sans-serif interface typography.
6. Prioritize desktop visual accuracy.
7. Use consistent spacing and alignment.
8. Avoid unnecessary components.
9. Keep the code modular and maintainable.
10. Test the actual rendered result against the original reference.

# 18. Final Design Identity

**Brand:** KZELYN

**Visual Direction:** Luxury Editorial Minimalism

**Primary Typeface:** Bodoni Moda

**Secondary Typeface:** Inter

**Primary Background:** Warm Off-White

**Primary Text:** Near Black

**Layout:** Asymmetrical Editorial Composition

**Visual Focal Point:** Oversized Typography + Portrait Photography

**Overall Feeling:** Elegant, confident, refined, creative, and timeless.

---

END OF DESIGN SYSTEM
