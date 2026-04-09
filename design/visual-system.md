# Visual System

## Design Intent

Build the site like a premium editorial control surface for working PMs.

It should feel:

- commercially sharp
- calm but high-end
- fast to scan
- more like a designed magazine system than a blog
- more like a thinking tool than a personal brand page

The emotional target is: serious, useful, polished, and slightly formidable.

## Core Visual Direction

### Aesthetic

Editorial precision with operator-grade utility.

This means:

- bold headlines with a literary or financial-journal energy
- structured supporting modules that feel almost like cockpit panels
- restrained palette, but not sterile
- subtle texture and motion that add atmosphere without competing with the content

### What To Avoid

- startup SaaS gradients and generic card grids
- self-help or creator-economy vibes
- overly minimalist layouts that flatten the hierarchy
- dashboard-heavy UI that makes the content feel like software documentation
- playful illustration styles that reduce credibility

## Typography

### Pairing Strategy

Use a high-character serif for display and a refined sans-serif for body and UI.

Recommended pairings:

- `Canela` + `Suisse International`
- `Ivar Display` + `Akkurat`
- `Freight Display` + `Neue Haas Grotesk`
- fallback open-source direction: `Cormorant Garamond` + `Manrope`

### Usage Rules

- Hero headlines and major section titles use the serif.
- Body copy, navigation, labels, chips, and metadata use the sans-serif.
- Short operator labels should be uppercase or small caps with generous letter spacing.
- Keep line lengths tight enough for editorial reading:
  - body copy: about 65 to 75 characters
  - summary bands and callouts: shorter and denser

## Color System

### Palette Direction

Use a warm neutral base with one confident accent.

Recommended palette:

- `Ink`: near-black with a brown or green undertone
- `Paper`: warm ivory instead of bright white
- `Fog`: muted stone for panels and dividers
- `Signal`: deep vermilion, oxidized orange, or dark brass
- `Field`: dark olive or slate-green for secondary depth

### Usage Rules

- Background should be paper-toned, not stark white.
- Headlines and primary text should use Ink.
- Accent color should be rare and deliberate:
  - active nav states
  - CTA emphasis
  - section markers
  - small data points or pills
- Operator mode can use a denser background treatment than framework mode.

## Spatial System

### Page Rhythm

The site should breathe. Use generous spacing to create authority and scanability.

Recommended rhythm:

- hero sections feel oversized and architectural
- summary bands are compressed and information-dense
- editorial body sections alternate with structured modules
- section transitions use whitespace, rule lines, or tonal panel changes

### Grid

Use a 12-column desktop grid with asymmetry.

Patterns:

- content column paired with a narrow utility rail
- full-bleed sectional dividers for belief systems and navigation pivots
- two-column module rows for examples, checklists, and worksheet previews

On mobile:

- collapse to a single reading column
- keep module identity through borders, fills, and labels
- preserve the summary-first hierarchy before long content

## Motion

### Motion Philosophy

Motion should signal polish and confidence, not novelty.

Recommended behaviors:

- staggered reveal on hero copy and cards
- soft fade and slight upward motion for section entrances
- smooth underline or fill transitions on interactive labels
- operator mode toggle with a clear but restrained state change

### Motion Limits

- no looping decorative animation
- no heavy parallax
- no exaggerated spring behavior
- keep transitions quick and quiet

## Visual Devices

Use a small set of repeated devices so the system feels designed, not improvised.

Recommended devices:

- numbered section markers
- editorial rule lines
- small uppercase metadata labels
- lightly tinted panels for summaries and tools
- quote-sized principle callouts
- pill groups for “use this when” signals

## Content Layering Rules

Each topic should visibly split into two layers:

- `Framework`
- `Operator Mode`

Framework layer should feel more open and editorial.
Operator layer should feel denser, more procedural, and slightly more tactile.

Recommended treatments:

- segmented control near the top of each page
- sticky side rail showing current mode
- operator modules use stronger borders and slightly darker panel backgrounds

## Accessibility And Practicality

- Maintain strong text contrast across all neutrals and accent uses.
- Do not rely on color alone to distinguish framework vs operator mode.
- Make every scan module understandable without hover.
- Keep motion optional and respect reduced-motion settings.
- Ensure the serif remains readable at large and medium sizes, not just dramatic sizes.
