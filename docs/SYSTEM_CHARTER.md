# System Charter

## Intent
This engine should carry a feeling of attentive, responsive presence: a small signal becoming visible without spectacle.

## Constraints
- Keep one input signal, one dominant behavior, and one visual form.
- Use dependency-free browser APIs so the engine starts anywhere.
- Write intent and explain changes before adding complexity.

## Tensions
- Precision against softness.
- Stillness against motion.

## Taste Vow
I refuse decorative effects that make the system look busy before its meaning is legible.

## Template Sketch
- **Signal:** mouse X position.
- **Parameter:** ring radius and pulse speed.
- **Behavior:** the ring breathes faster and grows as the pointer moves right.
- **Readability test:** moving left to right clearly changes the ring within five seconds.
