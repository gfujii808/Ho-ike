# AGENTS.md

## Project

This repository contains materials for `Hōʻike`, a Hawaiʻi-centered AI career-navigation concept for HIDOE middle and high school students.

## Product Intent

- Hōʻike exists to unhide the hidden curriculum of career navigation.
- The intended effect of that work is to make local futures in Hawaiʻi visible, desirable, and attainable.
- The first users are HIDOE public school students, especially underserved students who may not have inherited access to professional scripts, social capital, or local pathway context.
- Frame local opportunity as a way to contribute to and care for community, not only as a pipeline to employment.
- Avoid language that suggests leaving Hawaiʻi is the default marker of ambition or success.

## Non-Negotiable Constraints

- Do not design open social networking for minors in the MVP.
- Do not design direct employer outreach, unmoderated direct messaging, or public student profiles in the MVP.
- Default to pseudonymous student-facing identities such as generated handles.
- Real identity, if retained for school accountability, must remain hidden from professionals and other students.
- Minimize student data collection. Only ask for information that is explicitly useful for pathway guidance.
- Avoid language that overclaims anonymity. Use `pseudonymous` unless true anonymity is both implemented and legally supportable.
- Keep all guidance school-safe, culturally respectful, and age-appropriate.

## Cultural Guidance

- Prefer Hawaiʻi-specific examples, partners, pathways, and language over mainland-default assumptions.
- Treat terms such as `talk story`, `ʻohana`, and local place names with care and specificity, not as decoration.
- Favor a tone that is invitational, practical, and community-rooted.
- When describing opportunity, emphasize contribution to home, community, and local resilience alongside personal advancement.

## UX Guidance

- The product should feel like a protected, school-safe LinkedIn for exploration, not like social media.
- Every major pathway surface should provide concrete next actions under short horizons such as `Do Now`, `Try This Week`, and `Explore Next`.
- Include prompt starters for intimidated students whenever they are asked to engage with professionals.
- Make the student experience low-stakes, confidence-building, and clear about what happens next.
- When representing students, prefer guided snapshots built from interests, values, involvements, and causes they care about rather than fixed job titles.
- Do not expose a student's school name to professionals in phase 1; if cohort context matters, use teacher-managed aliases such as `PenguinPod`.

## Technical Guidance

- Favor lightweight prototypes that can be demonstrated quickly.
- For browser overlays, isolate UI from host pages to reduce interference.
- Keep the MVP architecture simple and reversible; do not assume official district integration in phase 1.
- If adding AI behavior, constrain it with explicit prompt instructions and safe fallbacks rather than open-ended advising.

## Safety and Moderation

- Assume all professional participation is moderated.
- Assume all student-to-professional questions in phase 1 are guided and reviewable.
- Provide escalation paths for counselors, teachers, or program staff where a student needs human support.
- Avoid advice that could pressure students into unsafe disclosure or unsupervised contact.

## Contributors

**Grace Fujii** — project author, product direction, UX, and content. Built with OpenAI Codex.

**Claude (Anthropic, claude-sonnet-4-6)** — contributed UI/UX design direction, CSS architecture, and visual polish across multiple sessions including: retro color palette implementation and token system, full-bleed flow-band layout system with wavy SVG section dividers, blob accent decorator system, hero gradient design, scroll-triggered reveal animation pattern, interest chip catalog expansion, card gradient updates, wave transition geometry debugging, and iterative visual audit passes on `styles.css`, `index.html`, `app.js`, and `extension-mockup.html`.
