---
name: web-game-development
description: Design, implement, debug, test, and optimize browser-based games using HTML, CSS, JavaScript, Canvas, or WebGL. Use for game loops, input, collision, levels, menus, audio, persistence, responsive UI, and deployment.
---

# Web Game Development

## Goal
Build responsive, maintainable browser games with a clear gameplay loop, reliable input, predictable simulation, accessible interface, and measured performance.

## Use this skill for
- 2D arcade, puzzle, platform, strategy, and casual games.
- DOM/CSS, Canvas 2D, SVG, and WebGL game interfaces.
- Player controls, movement, physics, and collisions.
- Game states, menus, pause/resume, score, levels, and progression.
- Audio, local storage, responsive UI, and deployment.
- Browser compatibility, debugging, and performance work.

## Workflow
1. Define the gameplay loop: player action, immediate feedback, goal, failure condition, and replay incentive. Keep the first playable milestone small.
2. Select rendering technology: DOM/CSS for UI-heavy boards, Canvas 2D for many moving objects, SVG for small vector scenes, WebGL for 3D or GPU-heavy visuals. Avoid a large engine without a concrete need.
3. Separate responsibilities: input, simulation, rendering, UI, persistence, and asset loading. Keep game state authoritative instead of inferring rules from the DOM.
4. Implement the loop using `requestAnimationFrame` and elapsed time. Use a fixed simulation step when physics stability matters, and clamp large deltas after tab suspension.
5. Normalize input: track keyboard held-state, use Pointer Events for mouse/touch/pen, and keep essential UI keyboard accessible.
6. Build movement and collisions using consistent world units. Separate world and screen coordinates, start with simple collision shapes, and address tunneling where relevant.
7. Model explicit states such as loading, title, playing, paused, game-over, and victory. Centralize transitions and ensure only one active loop exists.
8. Add game feel with clear animation, particles, audio, and feedback. Keep effects subordinate to gameplay and respect reduced motion where practical.
9. Test new game, pause, resume, restart, win/loss, viewport resize, focus loss, asset failure, storage failure, and repeated restarts.
10. Profile before optimizing. Reduce hot-loop allocations, cache static rendering when useful, cap Canvas backing resolution, and avoid unnecessary DOM layout work.
11. Deliver source, run steps, controls, browser assumptions, tests performed, and known limitations.

## Suggested project layout
```text
src/
  main.js
  game/
    state.js
    update.js
    render.js
    input.js
    collision.js
  ui/
    menu.js
    hud.js
  styles.css
assets/
  images/
  audio/
index.html
scripts/
```
Scale the structure to project size. Do not create abstractions that do not solve real complexity.

## Engineering rules
- Use seconds and delta time rather than frame-count movement.
- Separate update and render responsibilities.
- Cancel animation frames and remove listeners when disposing a game.
- Handle page visibility changes to avoid large simulation jumps.
- Centralize world-to-screen and pointer-to-world conversion.
- Validate imported or persisted save data.
- Handle storage and asset-loading failures gracefully.
- Respect browser audio autoplay rules.
- Never use `eval` or `new Function` for game logic.
- Avoid inserting untrusted strings through `innerHTML`.
- Never put secret keys in browser code.

## Accessibility
Use semantic HTML for menus, settings, and score summaries. Provide keyboard support for essential actions, visible focus, text alternatives for status changes, and reduced-motion support where practical. Do not communicate state through color alone.

## Validation
Run `node scripts/smoke_test.mjs path/to/index.html`. This is a static check only, not an end-to-end browser test. Perform real browser testing before release.

## Supporting files
- `resources/game-architecture.md`
- `resources/gameplay-testing.md`
- `resources/performance-checklist.md`
- `scripts/smoke_test.mjs`
- `scripts/serve.mjs`

## Response format
Describe the game loop and controls, provide source and run instructions, identify target devices, list tests performed, and state known limitations.
