# Roadmap

## How I Use This Template to Start New Projects

Follow this sequence every time a new assignment drops. Keep it literal. Estimate total time: 15 minutes.

### 1. **Define Intent + Constraints** (2 min)
- Copy this repo to a new repo with the assignment name.
- Open `docs/SYSTEM_CHARTER.md`.
- Replace the intent, constraints, and tensions with YOUR idea.
- Commit: `docs: charter for [project name]`

### 2. **Sketch the System in Words** (2 min)
- In SYSTEM_CHARTER.md, define your signal, parameter, and behavior.
- Write the readability test: how will you know it works in 5 seconds?
- Do NOT write code yet.
- Commit: `docs: sketch defined`

### 3. **Build Smallest Working Version** (6 min)
- Open `/src/canvas/setupCanvas.js`. Set canvas size and HiDPI scaling.
- Open `/src/canvas/loop.js`. Draw your visual form (circle, line, grid, etc.).
- Open `/src/input/input.js`. Wire your signal (mouse X, click, time, etc.).
- Open `main.js`. Connect the three pieces.
- Test locally: open `index.html` in browser. Does it run? Does it respond?
- Commit: `canvas: hidpi + loop + input working`

### 4. **Iterate Through Visible Tests** (3 min)
- Does the signal map to the parameter correctly? (Move mouse → circle grows?)
- Does the behavior feel right? (Too fast? Too slow? Change the scale.)
- Save a screenshot: `/process/screenshots/01-first-run.png`
- Update `/process/changelog.md` with what changed and why.
- Commit: `refine: [behavior description]`

### 5. **Deploy** (1 min)
- Push to main.
- GitHub Pages or Cloudflare Pages picks it up automatically.
- Test the live link.
- Save a screenshot: `/process/screenshots/02-deploy-live.png`
- Commit: `deploy: live`

### 6. **Polish Only After Meaning is Legible** (1 min)
- Update README.md with your project name and live link.
- Add a "How I built this" section if relevant.
- Save a screenshot: `/process/screenshots/03-readme.png`
- Commit: `docs: readme + process`

---

**Done.** You have a working, deployed, documented engine. Classmates can click your link and see it run. Next project? Start at step 1.
