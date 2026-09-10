export function setupCanvas(canvas) {
  const context = canvas.getContext("2d");
  const pixelRatio = window.devicePixelRatio || 1;

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    canvas.width = Math.round(bounds.width * pixelRatio);
    canvas.height = Math.round(bounds.height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  resize();
  window.addEventListener("resize", resize);

  return context;
}
