# Reusable Studio Engine

A minimal, well-documented canvas animation engine designed for creative coding and interactive visualizations.

## Quick Start

Open `index.html` in a browser. Move your mouse left to right to see the circle grow and shrink.

## Architecture

The engine follows a simple **Signal → Parameter → Behavior** pattern:

### Signal
What input are you reading?
- **Mouse X position** (horizontal movement across the screen, 0 to window.width)

### Parameter
What single variable does that signal control?
- **Circle radius** (grows from 20px on the left to 200px on the right)

### Behavior
What changes over time in the loop?
- **Circle pulses smoothly** as radius grows/shrinks with mouse movement

### Readability Test
How will you know it's working in 5 seconds?
- **Move your mouse left → right, watch the white circle grow larger**

## File Structure

```
.
├── index.html              # Entry point
├── main.js                 # Wires canvas, input, and loop together
├── style.css               # Minimal styling (black background, full viewport)
└── src/
    ├── canvas/
    │   ├── setupCanvas.js  # HiDPI canvas scaling
    │   └── loop.js         # 60fps animation loop
    ├── input/
    │   └── input.js        # Mouse tracking
    └── utils/
        └── math.js         # Reusable math helpers (lerp, map, clamp, toRad, toDeg)
```

## Core Modules

### setupCanvas.js
Handles HiDPI scaling for crisp rendering on high-resolution displays (Retina, 4K, etc.).
Returns a 2D context and logical width/height.

### loop.js
The 60fps animation loop that:
1. Clears the canvas
2. Maps mouseX to circle radius
3. Draws a white stroke circle at the center
4. Requests the next frame

### input.js
Tracks mouse movement and updates `state.mouseX`.
The state object is the single source of truth flowing through the engine.

### math.js
Utility functions for creative coding:
- `lerp(a, b, t)` — linear interpolation
- `map(value, inMin, inMax, outMin, outMax)` — map value between ranges
- `clamp(value, min, max)` — constrain value to bounds
- `toRad(degrees)` — convert to radians
- `toDeg(radians)` — convert to degrees

## How It Works

1. **setupCanvas** initializes the 2D context with HiDPI scaling
2. **Input listeners** capture mouse movement and update `state.mouseX`
3. **Animation loop** runs at 60fps:
   - Maps `state.mouseX` (0 to width) → radius (20 to 200px)
   - Draws a white circle at the center
   - The circle visibly grows/shrinks as you move the mouse

## Extending This Engine

To add new interactive elements:

1. **Add a new signal** in `input.js` (e.g., click/hold, scroll, time)
2. **Map it to a parameter** in the state object
3. **Use that parameter** in `loop.js` to draw or transform
4. **Update the readability test** comment to describe the new behavior

Example: Add `state.clickCount` and draw more circles based on clicks, or use `state.time` to create rotating elements.

## HiDPI Scaling

The canvas automatically scales to device pixel ratio (DPR). On a 2x Retina display:
- Logical dimensions: 1920×1080
- Actual canvas resolution: 3840×2160
- Context is scaled 2x so drawing operations use logical coordinates

This ensures crisp rendering without manual pixel density handling.

## Notes

- The engine uses vanilla JavaScript (no dependencies)
- All modules are designed for reuse in future projects
- Comments follow the Signal/Parameter/Behavior pattern for clarity
- Math utilities are intentionally simple and composable
