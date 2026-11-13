# Gameplay and browser test checklist

## Core loop
- [ ] New game starts cleanly.
- [ ] Player actions produce clear feedback.
- [ ] Win and loss conditions work.
- [ ] Score and progression update correctly.
- [ ] Restart resets all relevant state.

## State transitions
- [ ] Pause stops simulation.
- [ ] Resume does not start a duplicate loop.
- [ ] Menu navigation removes gameplay-only listeners.
- [ ] Game-over and victory screens appear once.

## Input
- [ ] Keyboard controls work without unwanted repeat effects.
- [ ] Pointer and touch controls work on target devices.
- [ ] Inputs do not remain stuck after focus loss.
- [ ] Essential UI actions are keyboard accessible.

## Browser behavior
- [ ] Resize is handled.
- [ ] Returning from a hidden tab does not cause a physics jump.
- [ ] Audio starts only after a permitted user gesture.
- [ ] Storage failures do not crash the game.
- [ ] Failed assets show a useful fallback.

## Regression
- [ ] Repeated restarts do not duplicate listeners.
- [ ] Repeated pause/resume does not change game speed.
- [ ] Collision boundaries behave correctly.
- [ ] Reduced-motion preferences are respected where practical.
