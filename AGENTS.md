# AGENTS.md — technical decisions

## Ocean portfolio structure
- All creature/ambient illustrations are hand-built SVG components in `src/components/ocean/Creatures.tsx`; no image library or framer-motion — all animation is pure CSS defined in `src/styles.css` (smoothest fit for the edge runtime, no deps).
- The page is one continuous "dive": the body background is a single tall linear-gradient (sky → sand → shallows → deep → abyss); sections are transparent over it. Text switches from `text-ink` (bright zones) to `text-foam` (dark zones) with `.depth-shadow` for contrast.
- Randomized inline styles (bubbles, marine snow, fish) must use deterministic values rounded to 2 decimals (`rnd()` helper) — raw floats cause SSR hydration mismatches.
- Desktop wheel scrolling uses Lenis from a client-side effect; touch devices and reduced-motion users keep native scrolling for accessibility and predictable gestures.
- The Surface/About boundary never snaps; it uses a broad overlapping water fade, dissolving waves, and a restrained bubble curtain driven by deterministic shoreline scroll progress.
