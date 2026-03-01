# Soft Breathe — Article Layout & Typography Rules

To maintain visual consistency and avoid rendering bugs across all content pages (like `/breathing-science`, `/breathing-for-anxiety`), any new article page MUST adhere to the following layout and typography specifications.

## 1. Grid Layout System

All articles use a 3-column CSS Grid layout that centres a 680px main content area, with a responsive sticky Table of Contents (TOC) on the right side for desktop, and top for mobile.

```css
.article-layout {
  display: grid;
  grid-template-columns: 1fr 680px 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}
.article-body { 
  grid-column: 2; 
  padding-bottom: 60px; 
}
.article-sidebar { 
  grid-column: 3; 
  position: sticky; 
  top: 120px; 
  align-self: start; 
  height: max-content; 
}
```

### Mobile Responsive Layout (max-width: 1024px)
On mobile/tablet, the grid collapses to a single column. The TOC (`.article-sidebar`) becomes a horizontally scrolling sticky bar at the top of the viewport with a frosted glass effect (`backdrop-filter: blur(8px)`).

## 2. Typography Rules

### H1 (Hero Headline)
- **Font:** `IM Fell English`, italicized keywords.
- **Font Size:** `clamp(32px, 5vw, 56px)`
- **CRITICAL BUG PREVENTION:** The `IM Fell English` italic font has unusually tall ascenders and deep descenders. If the `line-height` is too tight (e.g., `1.1`) or if there is no vertical padding, the browser line-box will **clip the top of the text** horizontally.
- **Mandatory CSS Fix:** Always use `line-height: 1.25` and add at least `padding-top: 0.2em;` to `.article-headline`.
```css
.article-headline {
  font-family: 'IM Fell English', serif; 
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.25; /* Do not use 1.1 */
  color: var(--ink); 
  margin-bottom: 32px;
  padding-top: 0.2em; /* Prevents ascender clipping */
  padding-bottom: 0.1em;
  overflow: visible;
}
```

### H2 (Section Headings)
- **Font:** `IM Fell English`
- **Font Size:** `clamp(24px, 3vw, 36px)`
- **Spacing:** `80px` margin-top to create generous breathing room, `24px` margin-bottom.
- **Divider:** Add a `1px solid var(--paper-dark)` border-top, combined with `padding-top: 80px`.
- *Note:* The first `h2` (`:first-of-type`) MUST have `margin-top: 0; padding-top: 0; border-top: none;` to prevent double-spacing.

### Paragraphs & Lists
- **Font Size:** `16px`
- **Line Height:** `1.85`
- **Color:** `var(--ink-faint)`
- **Weight/Style:** `300` (Light), `italic`

### Data Points & Code
- **Font:** `DM Mono`
- Always wrap specific data points (like `Cohen's d = 1.44` or `20 minutes`) in `<span class="data-point">`.
- **Styling:** `font-size: 0.9em; background: var(--paper-dark); padding: 2px 6px; border-radius: 4px; color: var(--ink-soft);`

## 3. UI Components (Cards)

Wrap discrete sections like **Clinical Evidence** or **FAQ** inside `<div class="article-card">` to visually separate them from the main narrative flow.
- **Background:** `var(--paper-warm)`
- **Padding:** `32px 40px` (desktop) / `24px 20px` (mobile)
- **Border Radius:** `4px`
- **Margins:** `40px 0`

When an `h2` or `h3` is the first element inside a card, explicitly set `margin-top: 0; padding-top: 0; border: none;` on the heading via inline style or specific CSS selector to override the global H2 styling.
