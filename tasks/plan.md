# Implementation Plan: Light Theme Palette for Hero Section

## Overview
Apply the approved 8-color light-mode palette strictly to the Hero section (`Hero.jsx` and `OrbitCircle.jsx`), validating contrast, visual hierarchy, and full dark-mode compatibility.

## Color Mapping Reference
- Main Background: `#F7F9FC`
- White Sections / Surfaces: `#FFFFFF`
- Primary Brand: `#2563EB`
- Teal Accent: `#35B8A5`
- Headings: `#0B1220`
- Body: `#475569`
- Muted: `#7C8799`
- Border: `#E4E9F0`

## Phases
1. **Phase 1: Update Hero Layout & Typography (`Hero.jsx`)**
   - Apply `#F7F9FC` to Hero section container
   - Update pill badge with `#FFFFFF` background, `#E4E9F0` border, `#2563EB` text, and `#7C8799` muted dot
   - Update H1 heading to `#0B1220`
   - Update gradient span from `#2563EB` to `#35B8A5`
   - Update lead paragraph to `#475569` with `#7C8799` bullets
   - Style primary button with `#2563EB` to `#35B8A5` gradient
   - Style secondary button with `#FFFFFF` surface, `#E4E9F0` border, `#2563EB` text

2. **Phase 2: Update Orbit Animation Elements (`OrbitCircle.jsx` & `index.css`)**
   - Adjust orbit rings to use border `#E4E9F0` in light mode
   - Style orbit floating chips with `#FFFFFF` background, `#E4E9F0` border, and `#475569` text
   - Update center hub with `#FFFFFF` surface and `#E4E9F0` border

3. **Phase 3: Verification & Quality Gates**
   - Verify WCAG 2.1 AA contrast compliance
   - Test dark mode toggle to ensure 100% dark styling preservation
   - Execute `npm run lint` and `npm run build`
