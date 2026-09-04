# Spec: Light Theme Color Palette Implementation for Hero Section

## Objective
Implement and test the specified 8-color design system palette exclusively for the Hero section in light mode, ensuring seamless visual hierarchy, WCAG 2.1 AA accessibility compliance, and strict preservation of dark-mode styling.

## Target Color Palette Matrix (Light Mode)
| Token Name | Hex Code | Assigned UI Elements in Hero Section | Contrast vs #F7F9FC |
|---|---|---|---|
| Main Background | `#F7F9FC` | Hero section root background (`#home`) | Base |
| White Sections | `#FFFFFF` | Secondary button background, Orbit center card | 1.05:1 (Surface) |
| Primary Brand | `#2563EB` | Primary CTA button, gradient start, badge text | 4.6:1 (AA) |
| Teal Accent | `#35B8A5` | Text gradient end, ambient background glow, subtle badge highlights | 2.1:1 (Graphical) |
| Headings | `#0B1220` | Hero main H1 title, bold brand callouts | 16.6:1 (AAA) |
| Body | `#475569` | Hero lead paragraph / description text | 6.8:1 (AA) |
| Muted | `#7C8799` | Subtitle bullet separators, secondary badges | 3.2:1 (Large / UI) |
| Border | `#E4E9F0` | Pill badge border, secondary button stroke, orbit rings | 1.15:1 (Boundary) |

## Tech Stack
- Framework: React 19.2.8
- Build Tool: Vite 8.2.2
- Styling: Tailwind CSS v4.3.3 (`@theme` variables / utility classes)
- Runtime: Browser (Chrome / Edge / Firefox / Safari)

## Commands
- Dev Server: `npm run dev`
- Linter: `npm run lint`
- Production Build: `npm run build`

## Project Structure
- `SPEC-light-theme-hero.md` → Canonical feature specification
- `src/components/Hero.jsx` → Hero presentation and layout
- `src/components/OrbitCircle.jsx` → Hero interactive orbit animation
- `src/index.css` → Tailwind CSS custom theme definitions & gradients

## Code Style
```jsx
// Explicit semantic color mapping with dark mode preservation
<section
  id="home"
  className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F9FC] dark:bg-slate-950 transition-colors duration-300"
>
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1220] dark:text-white tracking-tight">
    Transform Your Ideas <br />
    <span className="text-gradient">Into Digital Experiences</span>
  </h1>
  <p className="mt-5 text-base sm:text-lg text-[#475569] dark:text-slate-300">
    Web development • Mobile apps • Digital marketing
  </p>
</section>
```

## Testing Strategy
1. **Contrast & a11y Audit**:
   - Verify `#0B1220` heading text on `#F7F9FC` background achieves >= 4.5:1 (calculated: 16.6:1, AAA).
   - Verify `#475569` body text on `#F7F9FC` background achieves >= 4.5:1 (calculated: 6.8:1, AA).
   - Verify `#FFFFFF` text on `#2563EB` button achieves >= 4.5:1 (calculated: 4.6:1, AA).
2. **Scope Isolation**:
   - Ensure the new colors are applied strictly to the Hero section (and its immediate orbit visual).
   - Other sections (Stats, Services, Portfolio, etc.) remain untouched.
   - Dark theme retains existing dark slate styles (`dark:...`).
3. **Build & Lint Verification**:
   - `npm run lint` passes with 0 errors / 0 warnings.
   - `npm run build` succeeds without warnings.

## Boundaries
- **Always do**: Maintain dark-mode variants alongside new light-mode hex values; test responsiveness at 320px, 768px, 1280px; keep linter clean.
- **Ask first**: Changing global tokens in `index.css` that affect other sections; altering font families or component structure.
- **Never do**: Hardcode light styles that break dark mode; lower contrast below WCAG 2.1 AA for body text.

## Success Criteria
- [ ] Hero section background rendered with `#F7F9FC` in light mode.
- [ ] Heading rendered with `#0B1220` in light mode.
- [ ] Body copy rendered with `#475569` in light mode.
- [ ] Badge/secondary text rendered with `#7C8799` and `#E4E9F0` border in light mode.
- [ ] Primary button and gradients feature `#2563EB` and `#35B8A5` in light mode.
- [ ] Secondary button utilizes `#FFFFFF` surface with `#E4E9F0` border and `#2563EB` text.
- [ ] Orbit ring accents and center container incorporate the new border and white surface tokens.
- [ ] Dark mode functionality remains completely intact and unaffected.
