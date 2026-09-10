# Reusable Studio Engine

A dependency-free Canvas starter for beginning creative coding assignments quickly. It separates intent, implementation, and process evidence so the first move is always deliberate.

## Start

Serve this folder from a local web server because browser modules are blocked by some `file://` restrictions.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` and move the pointer across the canvas. The percentage shows the pointer's horizontal position. The orange ring grows, becomes heavier, and pulses faster as the pointer moves right.

## File Jobs

- `index.html`: page shell and Canvas mount point.
- `style.css`: visual frame and responsive sizing.
- `main.js`: small entry point that wires modules together.
- `src/canvas/`: HiDPI setup and animation loop.
- `src/input/`: normalized pointer signal.
- `src/utils/`: reusable pure helpers.
- `docs/`: intent, roadmap, and Copilot prompt ritual.
- `process/`: iteration notes and screenshot evidence.
- `assets/`: future images, models, or audio.

## Deploy

This is a root-level static site. Publish the repository with GitHub Pages using the `main` branch and root folder, or connect it to Cloudflare Pages with no build command and `/` as the output directory. Every push can then update the public link.

## Working Ritual

1. Write intent and constraints in `docs/SYSTEM_CHARTER.md`.
2. Describe the system in words before requesting technical help.
3. Build the smallest visible test.
4. Record what changed and why in `process/changelog.md`.
5. Capture the required screenshots before deployment and README polish.
