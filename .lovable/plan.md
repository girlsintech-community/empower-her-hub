

## UI Critique & Issues Found

### Critical Issues

1. **About Section is too bare** — It's just a title and one paragraph floating in a massive empty section. No visual elements, no cards, no imagery. It feels like placeholder content that was never finished. The section takes up a full viewport height with almost nothing in it.

2. **Excessive vertical whitespace everywhere** — There are huge empty gaps between sections, especially between the hero bottom and the About section, between About and Features, and between Speakers and FAQ. The torn/jagged SVG dividers add visual noise but also create dead space that makes the page feel stretched thin.

3. **Section dividers look unpolished** — The torn/jagged SVG edges appear as thin, barely visible pink lines. They don't create the dramatic torn-paper effect intended. They look like rendering artifacts rather than intentional design elements.

4. **Mobile hero is cramped at top** — On mobile (375px), the hero title starts almost flush with the navbar with minimal top padding. The title "Empower Her 2.0" is partially cut off or too close to the top.

5. **Countdown timer numbers lack hierarchy** — While visible now, the numbers blend into the dark cards. The gradient border helps, but the numbers themselves could be more prominent (larger, bolder, or using the gradient text treatment).

6. **Footer Quick Links are redundant** — The footer still has "Quick Links" (About, Agenda, Speakers, FAQ) that just duplicate the navbar. The user previously asked to remove quick links but they remain in the footer.

7. **"View Agenda" button is misleading** — The hero has a "View Agenda" CTA that scrolls to a "Coming Soon" section. This is a dead-end that frustrates users. It should either be removed or changed to something useful.

8. **Speaker images are small** — At 128px on desktop and 112px on mobile for a 5-column grid, the speaker photos feel thumbnail-sized. For a conference site, speakers deserve more visual prominence.

9. **No visual variety in section backgrounds** — Every section uses the same flat dark background (`--background`). There's no alternating treatment, subtle gradient shifts, or texture variation to create visual rhythm.

10. **"Stay tuned for the big reveal" button in Agenda does nothing** — It's styled as a button but has no action, no link, no hover feedback that communicates it's decorative. Confusing UX.

### Minor Issues

11. **Dark mode toggle icon (half-moon)** is not immediately recognizable as a theme toggle — no tooltip or label.
12. **Social media icons in footer** have no hover color change to match the neon theme — they just sit there as grey circles.
13. **Feature card numbering (01-04)** is very faint and barely readable.
14. **No scroll-to-top button** on a long single-page site.
15. **The "pulse-ring" animation on CTA buttons** creates a visible box around them that looks like a UI glitch on some renders.

---

## Proposed Fix Plan

### Files to modify:
- `src/components/AboutSection.tsx` — Add visual content (mission points or value cards) to fill the empty section
- `src/components/HeroSection.tsx` — Remove "View Agenda" button (points to coming-soon), fix mobile top padding
- `src/components/SectionDivider.tsx` — Make dividers more visible with fills instead of just strokes, or simplify to subtle gradient lines
- `src/components/SpeakersSection.tsx` — Increase speaker image sizes
- `src/components/AgendaSection.tsx` — Remove the non-functional "Stay tuned" button or make it link to registration
- `src/components/Footer.tsx` — Remove Quick Links section per user's earlier request, add neon hover to social icons
- `src/components/CountdownTimer.tsx` — Make numbers use gradient-text for more visual pop
- `src/components/FeaturesSection.tsx` — Make card numbers more visible
- `src/index.css` — Add alternating section background utility, fix pulse-ring animation overflow
- `src/pages/Index.tsx` — Add alternating subtle background treatments to sections, reduce divider frequency

