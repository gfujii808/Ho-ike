# Hōʻike Challenge Package

Hōʻike Explorer is a Codex-built browser prototype for the OpenAI x Handshake Codex Creator Challenge. It is designed for HIDOE middle and high school students and shows how OpenAI Codex can translate assignments, hobbies, and community activities into local pathway exploration, safer professional discovery, and concrete next steps in Hawaiʻi. It is also designed as a credible starting point for a school-safe pilot and longer-term hidden-curriculum intervention in Hawaiʻi.

**Hōʻike unhides the hidden curriculum of local futures in Hawaiʻi.**

Judges should be able to understand three things quickly:

- `What it solves`: students often need help seeing how what they already do connects to local futures, community contribution, and concrete next steps.
- `What Codex is doing`: the demo accepts new input and turns it into a `Professional Why`, pathway options, `Local Voices`, and `Small Steps`.
- `Why it matters`: the prototype is designed to be useful now as a competition demo and credible later as a school-safe pilot or research intervention.

![Hōʻike flow proof strip](submission/demo-proof-strip.svg)

Live demo: [https://gfujii808.github.io/Ho-ike/](https://gfujii808.github.io/Ho-ike/)

Direct main demo: [https://gfujii808.github.io/Ho-ike/demo/index.html](https://gfujii808.github.io/Ho-ike/demo/index.html)

Extension mockup: [https://gfujii808.github.io/Ho-ike/demo/extension-mockup.html](https://gfujii808.github.io/Ho-ike/demo/extension-mockup.html)

Pilot brief: [submission/hoike-hidoe-pilot-brief.md](/Users/gracefujii/Documents/Codex/submission/hoike-hidoe-pilot-brief.md)

This workspace contains the full submission package:

- `submission/hoike-proposal.md` - the polished proposal
- `submission/hoike-executive-summary.md` - the judge-friendly executive brief
- `submission/hoike-demo-script.md` - a 3-minute finalist demo script
- `submission/handshake-ai-showcase.md` - submission-ready Handshake AI Showcase copy
- `submission/hoike-founder-brief.md` - a founder-style launch memo for judges
- `submission/hoike-hidoe-pilot-brief.md` - a pilot and research brief for HIDOE-facing conversations
- `submission/competition-checklist.md` - packaging checklist for the challenge
- `demo/index.html` - a lightweight MVP walkthrough
- `demo/extension-mockup.html` - a near-term Chrome extension direction on top of a Canvas-like page
- `demo/styles.css` - demo styling
- `demo/app.js` - demo interactions and translation logic
- `AGENTS.md` - project guidance for future Codex iterations
- `submission/demo-proof-strip.svg` - lightweight visual proof artifact for the core product flow

## What Hōʻike Solves

Hawaiʻi students do not only need lists of jobs. Many also need help with the hidden curriculum of career navigation: seeing how what they already do connects to local futures, understanding different ways into a field, and getting low-stakes support for first questions. Hōʻike is designed to reduce those informational frictions inside a workflow students already understand.

## What OpenAI Codex Is Doing

In the demo, Codex is represented as the reasoning layer that:

- reads an assignment, activity, or interest
- infers strengths and signals from that starting point
- maps those signals into Hawaiʻi-relevant pathway options
- surfaces school-safe Local Voices and guided next steps
- exposes that reasoning in the `AI Translation Log` for reviewers

The repo and UI are intentionally built to make that execution visible, not hidden behind static copy.

## What Is Dynamic In The Demo

The main demo is not only a slideshow of preset screens. It supports a live `paste any activity` flow that:

- accepts a new assignment, hobby, community activity, or interest
- runs in-browser matching against pathway and sector logic
- generates a new `Professional Why`
- generates pathway options, Local Voices matches, and Small Steps tied to that input
- exposes the reasoning in the `AI Translation Log`

Preset assignments and simulated `Local Voices` profiles are still included so judges can move quickly through the product, but the core translation path is functional and input-driven rather than a fixed storyboard.

## Extension Direction

The main hosted demo is the primary judged artifact, but the extension mockup shows the near-term implementation direction. In a real Chrome extension build, Hōʻike should mount its sidebar inside a dedicated root using `Shadow DOM` so Canvas styles cannot break the overlay and the overlay cannot interfere with LMS rendering.

That matters for stability and safety on an LMS page: the Hōʻike UI stays isolated, and core Canvas behaviors like assignment pages, quizzes, and other host-page styles are less likely to conflict with the overlay. The current extension artifact is a high-fidelity mockup of that direction, not yet a production extension package.

## Why Hawaiʻi

Hōʻike is explicitly Hawaiʻi-centered. The product frames local futures as contribution to home, community, and local resilience, not just as a pipeline to employment or a reason to leave. The explainer mode and submission package connect the prototype to Hawaiʻi-specific brain drain, hidden curriculum, and pathway-decision research.

## Beyond The Competition

Hōʻike is not framed as a throwaway contest artifact. The prototype is intentionally shaped so it could continue into a small classroom, advisory, or counselor-supported pilot focused on pathway visibility, safer question-asking, and local-future confidence for Hawaiʻi students.

## What Judges Should Notice

- `Execution`: the main demo includes a paste-any-activity flow and an `AI Translation Log` that make the Codex-guided reasoning legible instead of hiding it behind static marketing copy.
- `Usefulness / Value`: the product focuses on a real workflow problem for Hawaiʻi students by reducing informational frictions around pathway exploration, Local Voices discovery, and safer first questions.
- `Polish / Thoughtfulness`: the prototype includes pseudonymous student handles, moderated question flows, cohort-aware classroom signals, concrete `Do Now / Try This Week / Explore Next` follow-up steps, and a documented `Shadow DOM` extension-isolation strategy for a real Canvas overlay.

## Built With Codex

This project was developed using a vibe-coding workflow: natural-language prompting and iterative guidance with an AI coding assistant to generate, refine, and debug the prototype. That workflow was especially useful for:

- building the browser-based demo flow quickly
- iterating on CSS and interaction details across both the main demo and extension mockup
- wiring activity translation outputs into pathway, Local Voices, prompt, and progress UI
- making the experience feel native to a student workflow inspired by Canvas

## Demo Notes

- The main hosted demo is the primary judged artifact.
- The extension mockup is a high-fidelity product-direction surface, not a production Canvas extension.
- The `AI Translation Log` is intentionally visible in the main demo so reviewers can see how the assignment-to-pathway reasoning works.
- `Local Voices` profiles are simulated for presentation purposes.
- The public ship target should open directly to `demo/index.html`, with `demo/extension-mockup.html` as the secondary artifact.
