# Prompts

This file controls how you ask Copilot for help. You are not asking for ideas. You are asking for specific technical help inside your constraints.

---

## Context Block

**What you are building:** A reusable Canvas sketch engine that maps one input signal to one visual behavior.

**What exists:**
- `index.html` — entry point, loads main.js
- `main.js` — wires together canvas setup, loop, and input
- `src/canvas/setupCanvas.js` — HiDPI scaling, context setup
- `src/canvas/loop.js` — animation loop that draws each frame
- `src/input/input.js` — captures mouse/keyboard/time signals
- `src/utils/math.js` — helpers for scaling, mapping values

**Constraints:**
- Pure Canvas API only. No libraries.
- One signal. One parameter. One behavior.
- Must run at 60fps without jank.
- No external dependencies.

---

## Prompt Template 1: Canvas Draw Loop

**Use this when:** You need help translating a visual idea into Canvas code.

```
I want to draw [VISUAL FORM: circle/line/grid/shape].
The parameter that controls it is [PARAMETER NAME: radius/angle/opacity/etc].
The parameter's range is [MIN] to [MAX].
The signal that drives it is [SIGNAL: mouseX/mouseY/time/keypress].
How do I update loop.js to draw this behavior in Canvas? Keep it under 20 lines.
```

**Example:**
```
I want to draw a circle.
The parameter is radius.
The radius range is 20 to 200 pixels.
The signal is mouseX position.
How do I update loop.js to draw this?
```

**Rule after response:** Read what Copilot wrote. Add a comment above each line explaining what it does. If it uses a Canvas method you don't know, look it up in MDN. Commit with a message that says what changed and why.

---

## Prompt Template 2: Input Mapping

**Use this when:** You need to wire a signal to your parameter.

```
I'm capturing [SIGNAL SOURCE: mouseX/click/time/scroll].
I want to map it to [PARAMETER: value between MIN and MAX].
The mapping should be [LINEAR/EASED/INVERTED].
Write the code for input.js that does this without libraries.
```

**Example:**
```
I'm capturing mouseX (0 to window.innerWidth).
I want to map it to radius between 20 and 200 pixels.
The mapping should be linear.
Write the code for input.js.
```

**Rule after response:** Test it. Move your mouse. Does the parameter change? Save a screenshot. Update changelog.md.

---

## Prompt Template 3: Debugging

**Use this when:** Something runs but doesn't behave right.

```
Expected behavior: [WHAT SHOULD HAPPEN]
Actual behavior: [WHAT IS HAPPENING]
I suspect the issue is in [FILE NAME].
Here's the relevant code:

[PASTE CODE SNIPPET]

What's wrong? Keep the fix to 3 lines max.
```

**Example:**
```
Expected behavior: Circle grows as I move right.
Actual behavior: Circle shrinks as I move right.
I suspect it's in input.js.
Here's the code:

const radius = (mouseX / window.innerWidth) * (maxRadius - minRadius) + minRadius;

What's wrong?
```

**Rule after response:** Apply the fix. Test. Verify. Commit.

---

## Rule: Explain Every AI Response

**After Copilot generates code:**

1. **Read it aloud.** Does it make sense?
2. **Add comments.** Explain what each function/loop/condition does.
3. **Test it.** Run it. Does it do what you asked?
4. **Document why.** In your commit message, write *what changed and why*. Not "add function." Write "map mouseX to radius using linear scaling."
5. **Iterate.** If it doesn't work, use Prompt Template 3.

**This is not busywork.** You are learning how the system works. If you can't explain it, you can't own it.

---

## Example: Full Workflow

1. **Ask:** "Draw a circle with radius controlled by mouseX."
2. **Copilot responds** with `loop.js` code.
3. **You annotate:**
   ```javascript
   // Get the current radius from input.js
   const r = state.radius;
   
   // Clear the canvas (black background)
   ctx.fillStyle = 'black';
   ctx.fillRect(0, 0, width, height);
   
   // Draw a white circle at center
   ctx.strokeStyle = 'white';
   ctx.beginPath();
   ctx.arc(width / 2, height / 2, r, 0, Math.PI * 2);
   ctx.stroke();
   ```
4. **You test it.** Move mouse. Circle grows/shrinks.
5. **You commit:** `canvas: draw circle with radius mapped to mouseX`
6. **You update changelog.md:** "Implemented core loop: circle radius now responds to horizontal mouse movement. Tested 60fps on chrome."

**That's how you use this system.**
