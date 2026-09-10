/**
 * main.js
 * Entry point that wires together the canvas engine.
 * This file connects setupCanvas, the animation loop, and input handling.
 */

// Get the canvas element
const canvas = document.getElementById('canvas');

// Set up the canvas with HiDPI scaling
const { ctx, width, height } = setupCanvas(canvas);

// Initialize the input state object
// Signal: mouse X position (horizontal movement)
// Parameter: circle radius (20-200px)
// Behavior: circle pulses as radius grows/shrinks with mouse movement
// Readability test: move mouse left→right, see circle grow larger within 2 seconds
const state = {
    mouseX: width / 2,
    mouseY: height / 2,
    radius: 50
};

// Wire up input listeners
setupInput(state, width, height);

// Start the animation loop
startLoop(ctx, width, height, state);
