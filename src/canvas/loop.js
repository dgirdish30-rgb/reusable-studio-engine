/**
 * src/canvas/loop.js
 * Animation loop that runs at 60fps.
 * Clears the canvas and draws the sketch based on current state.
 */

function startLoop(ctx, width, height, state) {
    // Constants for the circle sketch
    const minRadius = 20;
    const maxRadius = 200;
    const centerX = width / 2;
    const centerY = height / 2;
    
    /**
     * The animation frame function that runs every frame.
     * This is called by requestAnimationFrame (~60fps).
     */
    function animate() {
        // Clear the canvas with a black background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);
        
        // Map mouseX position to radius
        // As mouse moves right (0 to width), radius grows from minRadius to maxRadius
        const normalizedX = state.mouseX / width;
        state.radius = minRadius + (normalizedX * (maxRadius - minRadius));
        
        // Draw a white circle at the center
        // The radius changes based on mouse position
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, state.radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Request the next frame
        requestAnimationFrame(animate);
    }
    
    // Start the animation loop
    animate();
}
