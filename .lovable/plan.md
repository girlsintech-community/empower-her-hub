

## Plan: Neon-Inspired Visual Upgrade

Taking inspiration from the reference image's bold, high-energy aesthetic — neon glows, dramatic dark backgrounds, glowing borders, and torn-edge dividers — while keeping it professional for a women-in-tech conference.

### What Changes

**1. Color System & Dark-First Approach** (`src/index.css`)
- Default to a much darker base even in light mode (deep navy/charcoal backgrounds)
- Add neon glow CSS utilities: `neon-glow-text`, `neon-border`, `neon-card` with vibrant pink/orange/gold glow effects
- Add text-shadow glow effects for headings
- Enhance `glass-card` with visible neon-tinted border glow
- Add a `torn-edge` style section divider using clip-path

**2. Section Dividers — Torn Paper Style** (`src/components/SectionDivider.tsx`)
- Replace smooth wave/curve SVGs with jagged torn-paper-edge dividers inspired by the reference
- Add subtle gradient coloring on the tear edges

**3. Hero Section** (`src/components/HeroSection.tsx`)
- Add a subtle neon text-shadow glow on the main title
- Increase the intensity of the floating gradient orbs (more saturated, slightly larger)
- Make the CTA button have a visible neon glow ring

**4. Section Headings — All Sections**
- Add a neon text-shadow glow to all `<h2>` section titles for dramatic impact
- Make the uppercase tracking labels (e.g., "What Sets Us Apart") glow subtly

**5. Feature Cards** (`src/components/FeaturesSection.tsx`)
- Add a neon-glow border on hover (pink-to-orange gradient border that glows)
- Darken the card backgrounds slightly for contrast

**6. Speakers Section** (`src/components/SpeakersSection.tsx`)
- Add a neon glow ring around speaker avatars on hover
- Increase the gradient-ring glow intensity

**7. Agenda & FAQ Cards** (`src/components/AgendaSection.tsx`, `src/components/FAQSection.tsx`)
- Add subtle neon border glow on the glass cards
- Enhance the "Coming Soon" lock icon with a pulsing neon glow

**8. Final CTA** (`src/components/FinalCTASection.tsx`)
- Add a more dramatic neon glow around the CTA button
- Intensify the floating orb decorations

**9. Footer** (`src/components/Footer.tsx`)
- Add neon glow on social media icons on hover
- Intensify the gradient top border line

**10. Navbar** (`src/components/Navbar.tsx`)
- Add a subtle neon glow on the "Register Now" button
- Make the nav link hover underline glow

### Files to Modify
- `src/index.css` — New neon glow utilities, enhanced color variables, text-shadow classes
- `src/components/SectionDivider.tsx` — Torn paper edge dividers
- `src/components/HeroSection.tsx` — Neon title glow, enhanced orbs
- `src/components/FeaturesSection.tsx` — Neon hover borders on cards
- `src/components/SpeakersSection.tsx` — Glowing avatar rings
- `src/components/AgendaSection.tsx` — Neon card glow
- `src/components/FAQSection.tsx` — Neon border glow on accordion items
- `src/components/FinalCTASection.tsx` — Intensified CTA glow
- `src/components/Footer.tsx` — Neon social icons
- `src/components/Navbar.tsx` — Glowing CTA and nav underlines
- `src/components/AboutSection.tsx` — Neon heading glow
- `src/components/CountdownTimer.tsx` — Neon border glow on timer cards

No new dependencies needed. All effects use CSS box-shadow, text-shadow, and existing framer-motion animations.

