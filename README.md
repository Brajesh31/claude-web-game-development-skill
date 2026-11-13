# claude-web-game-development-skill

A Claude Code skill for designing, implementing, debugging, testing, and optimizing browser-based games.

## Overview

This skill supports browser games built with HTML, CSS, JavaScript, Canvas 2D, SVG, or WebGL. It covers gameplay loops, rendering choices, input, movement, collisions, game states, audio, persistence, responsive interfaces, testing, and performance.

## Use Cases

- 2D arcade, puzzle, platform, strategy, and casual games.
- DOM/CSS, Canvas 2D, SVG, and WebGL game interfaces.
- Player controls, movement, physics, and collision handling.
- Menus, pause/resume, scoring, levels, and progression.
- Audio, local storage, responsive layouts, and deployment.
- Browser compatibility, debugging, and performance work.

## Installation

```bash
git clone https://github.com/Brajesh31/claude-web-game-development-skill.git ~/.claude/skills/web-game-development
```

## Development Workflow

1. Define the gameplay loop, player action, feedback, goal, and failure condition.
2. Select the simplest suitable rendering technology.
3. Separate input, simulation, rendering, UI, persistence, and asset loading.
4. Use `requestAnimationFrame` and elapsed time. Use a fixed simulation step when physics stability requires it.
5. Normalize keyboard and Pointer Event input.
6. Keep world and screen coordinates distinct, and implement collisions with appropriate world units.
7. Model explicit states such as loading, title, playing, paused, game-over, and victory.
8. Test pause, resume, restart, win/loss, viewport resize, focus loss, asset failure, and storage failure.
9. Profile before optimizing.
10. Document controls, run steps, browser assumptions, tests, and limitations.

## Supporting Resources

| Path | Purpose |
|---|---|
| `resources/game-architecture.md` | Game architecture and separation of responsibilities |
| `resources/gameplay-testing.md` | Gameplay and lifecycle test scenarios |
| `resources/performance-checklist.md` | Browser game performance review |
| `scripts/smoke_test.mjs` | Static smoke testing for an HTML entry point |
| `scripts/serve.mjs` | Local development server |

## Validation

Run the included static smoke test:

```bash
node scripts/smoke_test.mjs path/to/index.html
```

This is a static check, not an end-to-end browser test. Test the game in a real browser before release.

## Engineering and Safety

- Use delta time rather than frame-count movement.
- Clean up animation frames and event listeners when disposing a game.
- Handle page visibility changes, asset failures, and storage errors.
- Respect browser audio autoplay rules and reduced-motion preferences.
- Validate persisted save data.
- Do not use `eval` or `new Function` for game logic.
- Do not insert untrusted strings through `innerHTML`.
- Never expose secret keys in browser code.

## Creator and maintainer

Created and maintained by **Brajesh Kumar**.
