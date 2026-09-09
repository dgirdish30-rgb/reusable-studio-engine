# System Charter

## Intent
A minimal, reusable canvas engine that captures one gesture of digital behavior—what you choose to watch, how it moves, why it matters.

## Constraints
1. **One signal only.** No multi-input sprawl. Signal is captured, clean, usable.
2. **No external libraries.** Pure Canvas API. Dependencies block speed; clarity blocks bloat.
3. **Deploy within 15 minutes.** If setup takes longer than the first idea, it fails.

## Tensions
- **Legibility ↔ Liveness:** The sketch must be readable in 5 seconds AND respond to input immediately.
- **Simplicity ↔ Intention:** A dot is simple. A dot *that means something* takes intent.

## Taste Vow
We refuse overproduction: no particle effects as default behavior, no animations hunting for attention, no "effects for effects' sake." Signal comes first.

---

## Template Sketch Definition

**Signal:** Mouse X position (horizontal movement across screen)

**Parameter:** Circle radius (grows/shrinks with X position)

**Behavior:** A single circle at screen center pulses with radius tied to mouse X. As you move right, it grows; left, it shrinks. The circle is always alive, always listening.

**Readability Test:** Move your mouse left to right. Within 2 seconds, you see the circle clearly respond. Within 5 seconds, you understand: "mouse position controls size." That's it. That works.

### Visual Form
- One circle. White stroke, no fill.
- Centered on canvas.
- Radius range: 20px (far left) to 200px (far right).
- Frame rate: 60fps, smooth, no jank.

### Why This Works
- **One signal:** X position only.
- **One parameter:** Radius.
- **One behavior:** Pulse/grow.
- **Instant proof:** Move mouse, circle changes. Done.
- **Reusable:** Next project? Replace the circle with a line, a rect, a grid. Keep the signal-to-parameter-to-behavior pipeline.
