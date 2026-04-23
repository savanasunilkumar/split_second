# Split Second

Split Second is a browser-based emergency response simulation focused on decision-making under pressure. The experience places the learner at a nighttime highway rollover with a trapped driver, visible smoke, a fuel hazard, and a critical first-choice decision that changes the outcome of the scenario.

Built as an single-page interactive experience, the project combines structured scene progression, branching video playback, and debrief feedback to show how early judgment affects responder safety and incident control.

## Overview

- Guided scenario flow from briefing through debrief
- Branching decision point with two distinct outcome paths
- Video-supported scenes with styled fallback states
- Live scenario context for objective, timing, risk, and learner selection
- Debrief content that reinforces safer operational choices

## Stack

- HTML
- CSS
- Vanilla JavaScript

## Project Structure

```text
.
├── assets/
│   ├── dispatch.mp4
│   ├── escalation.mp4
│   ├── immediate.mp4
│   ├── secure.mp4
│   └── README.md
├── index.html
├── script.js
├── styles.css
└── midjourney_video_prompts.md
```

## Running Locally

Serve the project with any lightweight local web server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

Directly opening `index.html` can work for quick checks, but serving the project locally is the more reliable option for testing media behavior.

## Media

The simulation uses the following files from `assets/`:

- `dispatch.mp4`
- `escalation.mp4`
- `immediate.mp4`
- `secure.mp4`

If a video is missing, the interface falls back to built-in visual scene states so the simulation remains usable.

## Scenario Flow

1. Briefing
2. Dispatch
3. Escalation
4. Decision Point
5. Outcome
6. Debrief

The learner chooses between two first-response actions:

- Immediate extraction
- Stabilize the scene first

That choice determines which outcome branch and debrief the user sees next.

## Development Notes

- No framework, bundler, or build step is required
- The site is easy to host as a static web experience
- `midjourney_video_prompts.md` contains prompt material used during content development
