/**
 * src/canvas/setupCanvas.js
 * Configures the canvas with HiDPI scaling for crisp rendering on high-resolution displays.
 * Returns the 2D context and logical width/height.
 */

function setupCanvas(canvas) {
    // Get the device pixel ratio for HiDPI displays (Retina, 4K, etc.)
    const dpr = window.devicePixelRatio || 1;
    
    // Get the logical (CSS) dimensions
    const rect = canvas.getBoundingClientRect();
    const logicalWidth = rect.width;
    const logicalHeight = rect.height;
    
    // Set the actual canvas resolution to match device pixels
    canvas.width = logicalWidth * dpr;
    canvas.height = logicalHeight * dpr;
    
    // Get the 2D rendering context
    const ctx = canvas.getContext('2d');
    
    // Scale the context to account for device pixel ratio
    // This makes drawing operations work in logical coordinates
    ctx.scale(dpr, dpr);
    
    // Return context and logical dimensions for use in the loop
    return {
        ctx: ctx,
        width: logicalWidth,
        height: logicalHeight
    };
}
