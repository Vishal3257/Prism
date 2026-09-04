I want you to implement a modern Technologies Marquee section in my existing React website for Prism Infotech.

IMPORTANT:
- First inspect the existing project structure, components, styling system, theme system, and current design language.
- Do NOT unnecessarily modify or rewrite existing components.
- Do NOT create a completely separate design system.
- The new section must feel native to the existing Prism Infotech website.
- Keep the implementation clean, reusable, responsive, and production-ready.

FEATURE REQUIREMENTS:

Create a "Technologies We Use" / "Our Technologies" section that displays the following technologies:

const TECHNOLOGIES = [
  // Frontend
  { name: 'HTML', icon: 'fa-html5', color: '#e34f26', category: 'Frontend' },
  { name: 'CSS', icon: 'fa-css3-alt', color: '#1572b6', category: 'Frontend' },
  { name: 'JavaScript', icon: 'fa-js', color: '#d6a800', category: 'Frontend' },
  { name: 'React', icon: 'fa-react', color: '#149eca', category: 'Frontend' },
  { name: 'Next.js', icon: 'fa-arrow-right', color: '#111827', category: 'Frontend' },
  { name: 'Vue', icon: 'fa-vuejs', color: '#42b883', category: 'Frontend' },

  // Backend & Databases
  { name: 'Node.js', icon: 'fa-node-js', color: '#3c873a', category: 'Backend & DB' },
  { name: 'PHP', icon: 'fa-php', color: '#777bb4', category: 'Backend & DB' },
  { name: 'Laravel', icon: 'fa-laravel', color: '#ff2d20', category: 'Backend & DB' },
  { name: 'Python', icon: 'fa-python', color: '#3776ab', category: 'Backend & DB' },
  { name: 'Django', icon: 'fa-python', color: '#0c4b33', category: 'Backend & DB' },
  { name: 'MySQL', icon: 'fa-database', color: '#00758f', category: 'Backend & DB' },
  { name: 'PostgreSQL', icon: 'fa-database', color: '#336791', category: 'Backend & DB' },
  { name: 'MongoDB', icon: 'fa-leaf', color: '#47a248', category: 'Backend & DB' },
  { name: 'Supabase', icon: 'fa-fire', color: '#3ecf8e', category: 'Backend & DB' },
  { name: 'Firebase', icon: 'fa-fire', color: '#f58220', category: 'Backend & DB' },

  // Mobile & Cloud
  { name: 'React Native', icon: 'fa-mobile-button', color: '#149eca', category: 'Mobile & Cloud' },
  { name: 'Flutter', icon: 'fa-mobile-screen', color: '#02569b', category: 'Mobile & Cloud' },
  { name: 'AWS', icon: 'fa-aws', color: '#ff9900', category: 'Mobile & Cloud' },
  { name: 'Vercel', icon: 'fa-code-branch', color: '#111827', category: 'Mobile & Cloud' },
  { name: 'Netlify', icon: 'fa-cloud', color: '#00a89d', category: 'Mobile & Cloud' },

  // Marketing & Tools
  { name: 'Google Ads', icon: 'fa-google', color: '#4285f4', category: 'Marketing & Tools' },
  { name: 'Meta Ads', icon: 'fa-facebook', color: '#1877f2', category: 'Marketing & Tools' },
  { name: 'Google Analytics', icon: 'fa-chart-simple', color: '#f9ab00', category: 'Marketing & Tools' },
  { name: 'Search Console', icon: 'fa-magnifying-glass', color: '#34a853', category: 'Marketing & Tools' },
  { name: 'Git', icon: 'fa-git-alt', color: '#f05032', category: 'Marketing & Tools' },
  { name: 'GitHub', icon: 'fa-github', color: '#24292f', category: 'Marketing & Tools' },
];

DESIGN / BEHAVIOR:

1. Create TWO horizontal marquee rows.

2. First row:
   - Continuously moves from RIGHT → LEFT.
   - Smooth infinite loop.
   - No visible jump when the animation restarts.

3. Second row:
   - Continuously moves from LEFT → RIGHT.
   - Smooth infinite loop.
   - No visible jump.

4. Duplicate the technology items internally to create a seamless infinite marquee.

5. The animation must be CSS-based using transform/translateX and should be performant.
   Avoid unnecessary JavaScript animation libraries.

6. Add a subtle fade/mask effect on the left and right edges of the marquee so items gradually disappear at the boundaries.

7. Technology cards should be modern and premium:
   - Rounded corners
   - Subtle border
   - Soft shadow
   - Technology icon
   - Technology name
   - Clean spacing
   - Professional agency/SaaS appearance

8. Use the existing Prism Infotech brand colors/design language.
   The logo uses a blue → teal gradient, so use that branding subtly.
   Do NOT make every card blue.
   Technology icons should retain their respective technology colors.

9. Add a heading above the marquee:

   "OUR TECHNOLOGIES"

   "Built with modern technologies"

   "We use modern and reliable technologies to build fast, scalable and high-quality digital experiences."

   However, inspect the existing website typography and copywriting style first and adapt the wording if necessary.

10. The section must work perfectly in:
    - Desktop
    - Tablet
    - Mobile

11. On mobile:
    - Reduce card padding
    - Reduce icon size
    - Reduce gaps
    - Maintain smooth marquee animation
    - Prevent horizontal page overflow

12. Add hover interaction:
    - Technology card can slightly lift on hover.
    - Marquee animation should pause when the user hovers over the marquee area.
    - Keep this subtle and professional.

IMPORTANT FONT AWESOME REQUIREMENT:

Inspect how Font Awesome is currently installed in the project.

Some icons are Font Awesome Brand icons:
- fa-html5
- fa-css3-alt
- fa-js
- fa-react
- fa-vuejs
- fa-node-js
- fa-php
- fa-laravel
- fa-python
- fa-aws
- fa-google
- fa-facebook
- fa-git-alt
- fa-github

Some are Solid icons:
- fa-database
- fa-mobile-button
- fa-mobile-screen
- fa-code-branch
- fa-cloud
- fa-chart-simple
- fa-magnifying-glass
- fa-arrow-right
- fa-fire
- fa-leaf

Therefore DO NOT blindly use `fa-brands` for every icon.

Use the correct Font Awesome style:
- `fa-brands` for brand icons
- `fa-solid` for solid icons

If Font Awesome is already configured, reuse the existing setup.
If it is not configured, inspect the project and implement it using the project's preferred approach.

IMPORTANT:
Do not use fake icons or broken Font Awesome classes.

COMPONENT ARCHITECTURE:

Create a reusable component, for example:

TechnologiesMarquee.jsx

and corresponding styling using the project's existing styling approach.

If the project uses Tailwind CSS:
- Prefer Tailwind classes.
- Use a small custom CSS animation only where necessary.

If the project uses regular CSS:
- Create a dedicated TechnologiesMarquee.css.

Do not introduce a new CSS framework.

DATA:
Keep TECHNOLOGIES as a separate reusable data constant if the project architecture supports it.

IMPLEMENTATION DETAILS:

The marquee should conceptually work like:

Row 1:
HTML → CSS → JavaScript → React → Next.js → Vue → Node.js → ...
             ← continuously moving

Row 2:
Django → MySQL → PostgreSQL → MongoDB → AWS → Vercel → GitHub → ...
             → continuously moving

But the actual implementation must use duplicated content and translateX so the transition is completely seamless.

Do NOT use:
- setInterval
- requestAnimationFrame
- heavy animation libraries
- horizontal browser scrollbar
- manually changing item positions with React state

ACCESSIBILITY:
- Use semantic HTML.
- Technology names must remain readable.
- Decorative icons should have appropriate accessibility handling.
- Respect `prefers-reduced-motion`.
  If the user has reduced motion enabled, disable or significantly reduce the marquee animation.

PERFORMANCE:
- Use transform-based animation.
- Use `will-change: transform` only where useful.
- Avoid unnecessary React re-renders.
- The page must not develop horizontal overflow because of the marquee.

PLACEMENT:
Find the most suitable location in the current website, preferably around the services/skills/technology-related content.
Do not blindly place it at the top.
Inspect the existing pages and choose the section position that gives the best visual flow.

FINAL REQUIREMENT:
After implementation:
1. Run the project.
2. Check for compilation/runtime errors.
3. Verify the marquee animation.
4. Verify desktop and mobile responsiveness.
5. Verify there is no horizontal page overflow.
6. Verify all icons render correctly.
7. Verify dark/light theme if the project supports both.
8. Fix any issues you find.
9. Do not just tell me what code I should write — actually implement the changes in the project.