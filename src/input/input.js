/**
 * src/input/input.js
 * Captures mouse movement and updates the state object.
 * Maps mouseX to the visual parameter (radius).
 */

function setupInput(state, width, height) {
    /**
     * Track mouse movement across the canvas.
     * Updates state.mouseX which drives the circle radius in the loop.
     */
    document.addEventListener('mousemove', (event) => {
        // Get the canvas element to calculate position relative to it
        const canvas = document.getElementById('canvas');
        const rect = canvas.getBoundingClientRect();
        
        // Calculate mouse position relative to canvas
        state.mouseX = event.clientX - rect.left;
        state.mouseY = event.clientY - rect.top;
        
        // Clamp values to canvas bounds
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
