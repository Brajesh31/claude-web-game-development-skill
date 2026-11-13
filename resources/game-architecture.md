# Web game architecture

## Start with a small playable loop
Begin with an entry point, state model, input handler, update function, and renderer. Split modules only as responsibilities grow.

## Responsibilities
- Input: convert browser events into normalized actions.
- Simulation: update positions, timers, score, rules, and collisions.
- Rendering: draw state without mutating game rules.
- UI: menus, settings, HUD, dialogs, and accessibility announcements.
- Persistence: validate and store settings or progress.
- Assets: load files asynchronously and expose readiness/progress.

## Explicit state transitions
Centralize transitions between loading, title, playing, paused, game-over, and victory. Prevent restart or resume from spawning duplicate animation loops.

## Coordinate spaces
Keep world coordinates separate from screen coordinates. Apply camera transforms in one place and centralize pointer-to-world conversion.

## Time management
Use elapsed seconds. A fixed-step accumulator is useful for physics-heavy games:

```js
const STEP = 1 / 60;
let accumulator = 0;
let previous = performance.now();

function frame(now) {
  const delta = Math.min((now - previous) / 1000, 0.1);
  previous = now;
  accumulator += delta;
  while (accumulator >= STEP) {
    update(STEP);
    accumulator -= STEP;
  }
  render(accumulator / STEP);
  requestAnimationFrame(frame);
}
```

Do not add an entity-component system or state library unless project complexity justifies it.
