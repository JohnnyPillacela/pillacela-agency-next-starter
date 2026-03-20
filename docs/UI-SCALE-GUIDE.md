# UI Scale Guide

Use this guide to decide how "zoomed in" a website should feel before designing or implementing it.

This is not just about making everything bigger. Good scale is a mix of:
- typography size
- section width
- card and form sizing
- spacing rhythm
- density vs breathing room

The goal is to choose a scale that matches the brand, not to make every site look the same.

---

## The Three Scale Modes

### 1. Regular

Best for:
- practical local businesses
- trust-first service businesses
- informational websites
- brands that want to feel clear, calm, and familiar

Typical impression:
- clean
- professional
- easy to read
- not flashy

Client-facing explanation:
> We keep the design comfortable and familiar so the site feels trustworthy and easy to scan. This works well for businesses that want clarity first, with a modern look that does not feel overly styled.

Use `Regular` when:
- the client serves a broad audience
- the site needs to feel straightforward and dependable
- the brand is not especially premium or design-led
- you want the lowest-risk layout choice

Avoid `Regular` when:
- the current design feels too small or too safe
- the client wants a stronger modern feel
- the hero needs to make more of a first impression

Implementation guidance:
- Hero headline: `text-4xl md:text-5xl`
- Hero supporting text: `text-lg`
- Section headings: `text-3xl md:text-4xl`
- Body copy: `text-base`
- Small supporting copy: `text-sm`
- Navbar links: `text-sm`
- Buttons: standard sizing, comfortable but not large
- Cards: moderate padding, standard spacing
- Contact form labels/help text: `text-sm`
- Inputs and textarea: standard height, easy to scan
- Content blocks: usually `max-w-2xl`
- Main page container: around `max-w-6xl`
- Section spacing: balanced, not tight and not dramatic

What it should feel like:
- stable
- clear
- useful
- approachable

---

### 2. Zoomed In

Best for:
- most modern service businesses
- agencies
- consultants
- home service brands that want to feel current
- clients who want the site to feel more premium without going luxury

Typical impression:
- modern
- more confident
- easier to scan quickly
- more "designed"

Client-facing explanation:
> We increase the visual scale a bit so the site feels more current and higher-end. The content remains readable and structured, but the typography and interface have more presence.

Use `Zoomed In` when:
- the site feels a little too small or distant
- the client wants a more current marketing-site feel
- the business wants stronger perceived value
- the layout should feel more present without becoming full-width

Avoid `Zoomed In` when:
- the client specifically wants a conservative or understated look
- the content is very dense and would become harder to manage at larger sizes

Implementation guidance:
- Hero headline: `text-5xl md:text-6xl lg:text-7xl`
- Hero supporting text: `text-xl`
- Section headings: `text-4xl md:text-5xl`
- Body copy: `text-lg`
- Small supporting copy: avoid overusing `text-sm`
- Navbar links: `text-sm` to `text-base`
- Buttons: one size larger or slightly taller
- Cards: slightly larger padding and stronger hierarchy
- Contact form labels: `text-sm` or `text-base`
- Inputs and textarea: slightly taller, more generous padding
- Field spacing: more room between fields
- Content blocks: `max-w-2xl` to `max-w-3xl`
- Main page container: around `max-w-6xl` to `max-w-7xl`
- Section spacing: slightly more generous than `Regular`

What it should feel like:
- current
- confident
- polished
- high-value

Notes:
- This is the best default for many client sites.
- This mode usually solves the "everything feels a little too small" problem.
- It should feel intentionally larger, not randomly oversized.

---

### 3. Elegant Luxury Premium

Best for:
- high-end brands
- luxury services
- architecture, interior design, branding, beauty, hospitality
- founder-led or premium personal brands
- clients who want refinement more than raw energy

Typical impression:
- editorial
- refined
- expensive
- calm and intentional

Client-facing explanation:
> We use a more elevated visual scale with stronger typographic presence, more breathing room, and a more refined rhythm. The result feels premium and deliberate rather than simply bigger.

Use `Elegant Luxury Premium` when:
- brand perception matters as much as conversion clarity
- the client sells premium outcomes, not just services
- the business wants to feel exclusive, tailored, or high-touch
- the content can support a more curated presentation

Avoid `Elegant Luxury Premium` when:
- the client needs a practical, everyday, broad-market feel
- the business depends on dense information or lots of quick utility
- the brand is not visually strong enough to support a premium presentation

Implementation guidance:
- Hero headline: `text-5xl md:text-7xl`
- Hero supporting text: `text-lg` to `text-xl`
- Section headings: `text-4xl md:text-6xl`
- Body copy: `text-lg` with strong line-height
- Small supporting copy: used sparingly
- Navbar links: restrained and clean, often not oversized
- Buttons: elegant and restrained, not bulky
- Cards: more whitespace, fewer visual elements, stronger composition
- Contact form labels: subtle, clean, and consistent
- Inputs and textarea: refined spacing, often taller but visually lighter
- Field spacing: generous
- Content blocks: narrow enough to feel curated and readable
- Main page container: can stay contained; luxury does not require full width
- Section spacing: generous, with more breathing room than `Zoomed In`

What it should feel like:
- elevated
- intentional
- minimal but rich
- premium

Notes:
- Luxury does not mean every element should be huge.
- The premium feeling usually comes from contrast:
  - larger headlines
  - restrained body copy
  - more whitespace
  - cleaner composition
- If everything is equally large, it stops feeling elegant and starts feeling heavy.

---

## Element-by-Element Guide

### Hero

`Regular`
- Strong but not oversized
- Safe for most industries

`Zoomed In`
- Larger and more immediate
- Better if the site currently feels too distant

`Elegant Luxury Premium`
- More dramatic and typographic
- Often uses more whitespace and a slower visual rhythm

### Section Headings

`Regular`
- Clear and readable
- Comfortable hierarchy

`Zoomed In`
- More visual authority
- Better for stronger modern presence

`Elegant Luxury Premium`
- Larger, more expressive, more spacious
- Often paired with tighter supporting copy width

### Body Text

`Regular`
- `text-base`
- Best for utility and broad readability

`Zoomed In`
- `text-lg`
- Better for modern marketing sites

`Elegant Luxury Premium`
- Usually `text-lg`, but with more attention to line length and spacing
- Premium feel comes from rhythm, not just size

### Navbar

`Regular`
- quiet
- supportive
- mostly functional

`Zoomed In`
- slightly more visible
- can be a little taller or use slightly larger link text

`Elegant Luxury Premium`
- restrained, refined, and uncluttered
- should not feel noisy or heavy

### Buttons

`Regular`
- standard size
- practical

`Zoomed In`
- slightly taller and more present
- stronger CTA feel

`Elegant Luxury Premium`
- refined proportions
- avoid chunky or overly loud buttons

### Cards

`Regular`
- moderate padding
- balanced density

`Zoomed In`
- more padding
- clearer headline-to-body hierarchy
- less tiny text

`Elegant Luxury Premium`
- generous whitespace
- fewer competing details
- more emphasis on composition and breathing room

### Contact Forms

`Regular`
- straightforward and familiar
- labels and helper text can stay `text-sm`

`Zoomed In`
- fields slightly taller
- more padding
- clearer spacing between inputs
- better when the current form feels cramped

`Elegant Luxury Premium`
- refined spacing
- fewer distractions
- can use larger field height with a visually lighter appearance

### Badges, Labels, Meta Text

`Regular`
- acceptable to use `text-sm` and some `text-xs`

`Zoomed In`
- reduce the amount of tiny type
- use small text only when truly secondary

`Elegant Luxury Premium`
- use tiny text sparingly and intentionally
- metadata should feel quiet, not cheap

---

## Quick Decision Rule

Choose `Regular` if the brand should feel:
- trustworthy
- practical
- familiar
- low-risk

Choose `Zoomed In` if the brand should feel:
- modern
- more valuable
- more confident
- more visually current

Choose `Elegant Luxury Premium` if the brand should feel:
- exclusive
- refined
- editorial
- high-touch

---

## My Default Recommendation

If you are unsure, start with `Zoomed In`.

Why:
- it solves the "everything feels a little too small" issue
- it still works for many industries
- it feels modern without forcing a luxury aesthetic
- it improves perceived quality without requiring a dramatic redesign

Use `Regular` when you want safer and simpler.

Use `Elegant Luxury Premium` when the brand truly earns it.

---

## Implementation Rule of Thumb

When changing scale, do not only increase the hero.

Update the system together:
- hero headline
- section headings
- body copy
- buttons
- card padding
- form field height and spacing
- small labels and meta text
- container width
- section spacing

If only one or two elements get bigger, the design can feel inconsistent.

The best scale changes feel systemic, not random.
