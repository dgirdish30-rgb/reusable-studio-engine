/**
 * src/input/input.js
 * Captures mouse movement and updates the state object.
 * 
 * Signal: mouse X position (0 to window width)
 * Captures horizontal movement and maps to state.mouseX
 */

function setupInput(state, width, height) {
    /**
     * Track mouse movement across the canvas.
     * Updates state.mouseX which drives the circle radius in the loop.
     * Signal flows: mousemove event → state.mouseX → loop calculates radius
     */
    document.addEventListener('mousemove', (event) => {
        // Get the canvas element to calculate position relative to it
        const canvas = document.getElementById('canvas');
        const rect = canvas.getBoundingClientRect();
        
        // Calculate mouse position relative to canvas (left edge = 0)
        state.mouseX = event.clientX - rect.left;
        state.mouseY = event.clientY - rect.top;
        
        // Clamp values to canvas bounds (prevent overshoot)
        state.mouseX = Math.max(0, Math.min(state.mouseX, width));
        state.mouseY = Math.max(0, Math.min(state.mouseY, height));
    });
    
    /**
     * Handle window resize to keep canvas responsive.
     */
    window.addEventListener('resize', () => {
        location.reload();
    });
}
