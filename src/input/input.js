export function createInput(canvas, onChange) {
  const input = { value: 0.5 };

  function update(pointerX) {
    const bounds = canvas.getBoundingClientRect();
    input.value = Math.max(0, Math.min(1, (pointerX - bounds.left) / bounds.width));
    onChange(input.value);
  }

  canvas.addEventListener("pointermove", (event) => update(event.clientX));
  canvas.addEventListener("pointerdown", (event) => update(event.clientX));

  return input;
}
