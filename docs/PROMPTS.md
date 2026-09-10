# Prompt Kit

## Context Block

I am building a dependency-free browser sketch from this reusable studio engine. The current files are `index.html`, `style.css`, `main.js`, and focused modules under `src/canvas`, `src/input`, and `src/utils`. The project charter defines one signal, one parameter, one dominant behavior, and one visual form. Preserve those constraints and explain every change in plain language.

## Canvas Draw Loop

> Implement or adjust the Canvas draw loop in `src/canvas/loop.js`. Keep one dominant visual behavior and use the existing input state. Explain the data flow, timing, and visible result. Do not add libraries or unrelated features.

## Input Mapping

> Add one input mapping in `src/input/input.js` for [signal]. Map it to [parameter] while preserving the current public API. Explain how the signal is normalized and how I can verify it visually within five seconds.

## Debugging

> Diagnose this browser behavior: [describe the symptom]. Inspect the smallest relevant file path first. Propose the smallest fix, explain the cause in plain language, and include one focused browser or console check.

## Rule

Every AI response must be followed by my explanation of what changed and why. Generated code is not complete until I can describe its job in plain language.
