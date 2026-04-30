# DESIGN.md

This file is the design baseline for wireframes and concepts in this workspace.

## Design Attitude

The interface should be calm, useful, and fast to read. Do not create a marketing landing page when the user asked for a tool, dashboard, product flow, or app screen. The first view should show the actual product or task.

Good design comes from context. If existing UI, design tokens, screenshots, brand guidelines, or product references exist, they should shape the direction. Do not invent from scratch when real reference material is available.

## Anti-Slop

Avoid patterns that look like generic AI-generated design:

- No aggressive gradient backgrounds.
- Do not use `Inter`, `Roboto`, `Arial`, or `system-ui` as the primary design typeface unless the project explicitly wants that.
- No rounded containers with a colored left-border accent as a default pattern.
- No emoji unless it clearly belongs to the product or brand.
- No decorative SVG illustrations. Prefer real assets, clear placeholders, or composition.
- No fake stats, fake icons, or fake numbers just to fill space.
- No placeholder sections that only add padding and emptiness.
- No generic links, badges, or feature tiles without a real purpose.

## Layout

- Use clear hierarchy: navigation, main area, context area.
- Keep spacing consistent: 4, 8, 12, 16, 24, 32 px.
- Use at most 2 to 3 layout zones per screen.
- No cards inside cards.
- Use cards only for repeated items, modals, or clearly framed objects.
- Keep toolbars compact.
- Check mobile screens for clarity and touch targets first.
- Use CSS Grid and Flex with `gap`. Avoid inline-flow layout for UI elements.
- Use whitespace as a design tool. Fewer, more intentional elements are better than filled emptiness.
- If an area feels empty, solve it with composition, hierarchy, and space, not more copy.

## Artboard Fit

- Every screen must fit its `DCArtboard` viewport.
- No horizontal overflow. If actions, chips, or text get tight, reduce density, wrap cleanly, or change the composition.
- Use the full artboard height intentionally. Avoid small content islands at the top with accidental empty space below.
- For app screens: fixed header/footer areas, with a flexible middle content area using `minmax(0, 1fr)`.
- Only the middle content area should scroll unless the screen is intentionally a page-scroll design.
- Desktop artboards can breathe, but they still need to feel like complete screens.
- Mobile artboards must keep primary actions reachable.

## Typography

- Do not scale font size with viewport width.
- Letter spacing stays `0`.
- Choose a strong typographic direction instead of a default system font as a design decision.
- Use large headlines only for real hero or brand moments.
- Use smaller, denser typography in tools and dashboards.
- Text must never overflow buttons, cards, or panels.
- Use `text-wrap: pretty` for headings and longer UI copy.

## Color

- Do not keep everything in one hue family.
- Avoid dominant purple, dark blue, beige, or brown palettes.
- Use `oklch()` for new color values when practical.
- Limit new palettes to at most 2 to 3 main colors.
- Use color for status, focus, and orientation.
- Keep surfaces neutral and actions clear.

## Components

- Use icons for tool buttons.
- Use text buttons only for clear commands.
- Use segmented controls for modes.
- Use toggles or checkboxes for binary options.
- Use sliders, steppers, or inputs for numeric values.
- Use tabs for views.
- Use menus for option groups.
- Buttons and controls need stable heights and widths.

## Wireframe Rules

- Every wireframe needs a clear purpose.
- Every screen should show realistic example content, not generic placeholders like `Lorem ipsum`.
- Do not invent content just to fill space.
- Every element must earn its place.
- One section with real content is better than three filler sections.
- Make the primary action visible.
- Reduce emphasis on secondary actions.
- Include empty, loading, and error states when they matter for the flow.

## Variants

When visual direction or product approach is open, show at least three variants:

- One `by the book` variant that respects familiar patterns.
- One variant with bolder color or typography.
- One variant with a different layout or interaction metaphor.

Variants should explore meaningful axes: density, color, hierarchy, motion, layout, or interaction. Do not repeat the same card three times with a different accent.

## Advanced CSS

Use these techniques only when they support the concept:

- `clip-path` for meaningful shapes or masks.
- `mix-blend-mode` for controlled visual layering.
- CSS `@layer` for cleaner style organization in larger files.

Do not use advanced effects as decoration without product value.

## Agent Prompt

When an agent builds a screen:

1. Read `DESIGN.md` first.
2. Identify the target user, task, and most important screen state.
3. Work in the project canvas: `canvas.jsx` for board composition, `components/*.jsx` for larger screens.
4. Use realistic example content.
5. Check that text and UI do not overlap on desktop or mobile.
6. Briefly describe any assumptions.
