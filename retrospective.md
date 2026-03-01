# Retrospective: Typographic Clipping Bug (Mar 2026)

## Bug Description
During the refactoring of the article pages (`/breathing-science`, `/breathing-for-anxiety`, etc.), a severe visual bug occurred where the top horizontal half of the `<h1>` headline text (e.g., "Sharpen your focus" or "How to calm anxiety") was completely clipped or invisible.

## Root Cause Analysis
The issue was caused by a combined typographic interaction specific to the chosen web font and CSS properties:
1. **The Font (`IM Fell English`)**: This is a classic text typeface that features exaggerated ascenders (the top parts of letters like 'h', 'l', 't', 'f') and descenders, particularly in its italic variant.
2. **The CSS (`line-height: 1.1;`)**: The headline was given a modern, tight line-height of `1.1` to make the large `clamp()` text look cohesive.
3. **The Line-Box Behavior**: In CSS, when a font's internal ascender metrics exceed the calculated line-box height (determined by `font-size * line-height`), the browser will physically clip any glyph shapes that overflow the line-box, especially if they are the first line in a block container kissing the top bounding edge.

Because `.article-headline` had no vertical padding and a tight `line-height`, the browser blindly sliced off the top 15-20% of the first line of text.

## Resolution
The fix required modifying the `.article-headline` CSS block across all `.astro` article pages:
```css
.article-headline {
  /* ... */
  line-height: 1.25; /* Increased from 1.1 to provide internal line-box breathing room */
  padding-top: 0.2em; /* Explicitly guarantees space for the tallest ascenders */
  padding-bottom: 0.1em;
  overflow: visible;
}
```

## Learnings & Prevention
1. **Custom Web Fonts are Unpredictable**: Unlike standard system fonts (San Francisco, Arial), custom display and vintage serif fonts often have bounding boxes that do not perfectly align with CSS default expectations. 
2. **Never blindly use `line-height: 1.1` for serif fonts**: While `1.1` or `1.0` is a great design pattern for modern Grotesk/Sans-Serif headings (like Inter or Roboto), classic Serif fonts usually require `1.2` or higher to prevent ascender/descender collision.
3. **Always Add Padding to Web Font Headings**: Giving large headings a small `padding-top: 0.1em` or `0.2em` is a defensive CSS technique that prevents container overflow clipping on the first line.

This learning has been codified in `rules.md` to ensure any future developers (or AI agents) do not revert the line-height or copy-paste broken heading styles.
