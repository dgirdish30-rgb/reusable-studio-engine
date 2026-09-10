export function startLoop({ context, canvas, input }) {
  let time = 0;

  function frame() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const signal = input.value;
    const radius = 24 + signal * Math.min(width, height) * 0.2;
    const pulse = Math.sin(time * (1.5 + signal * 4)) * 0.12 + 1;

    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(width / 2, height / 2, radius * pulse, 0, Math.PI * 2);
    context.strokeStyle = `rgba(242, 140, 82, ${0.45 + signal * 0.55})`;
    context.lineWidth = 2 + signal * 3;
    context.stroke();

    time += 0.016;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
