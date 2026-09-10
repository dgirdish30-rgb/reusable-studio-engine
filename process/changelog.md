# Changelog

## Session 1: Initial Engine Build

### Commit 1: Scaffold structure + docs skeleton
Created directory structure and foundational documentation:
- SYSTEM_CHARTER.md: defined creative intent, constraints, and template sketch
- ROADMAP.md: documented workflow ritual for future projects
- PROMPTS.md: established Copilot prompt templates and annotation rules

**Why:** Creative agency first. Before code runs, intent is clear. Documents serve as guardrails for all future work in this template.

### Commit 2: Canvas HiDPI + animation loop
Implemented core Canvas engine:
- setupCanvas.js: HiDPI scaling for crisp rendering on high-res displays
- loop.js: 60fps animation loop that maps mouseX to circle radius
- index.html + style.css: minimal scaffolding

**Why:** Proof that engine can run. Circle responds to mouse. Readability test passes in ~2 seconds.

### Commit 3: Input captured and wired
Connected mouse tracking to visual behavior:
- input.js: captures mousemove events, updates state.mouseX
- state object: single source of truth for signal (mouseX) → parameter (radius)

**Why:** One signal, one parameter, one behavior. The pipeline is complete and functional.

### Commit 4: Utility functions added
Added reusable math helpers:
- lerp, map, clamp for common creative coding patterns
- toRad/toDeg for angle conversions

**Why:** Next projects will reuse these. No need to rewrite them.
