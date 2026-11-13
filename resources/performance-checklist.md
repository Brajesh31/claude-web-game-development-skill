# Web game performance checklist

- [ ] Measure frame time before optimizing.
- [ ] Keep simulation and render work bounded.
- [ ] Avoid unnecessary allocations in hot update loops.
- [ ] Avoid repeated DOM reads/writes during animation.
- [ ] Cache static drawing only when profiling supports it.
- [ ] Cap Canvas backing resolution on high-DPI displays.
- [ ] Load assets asynchronously and expose progress.
- [ ] Pause or reduce work when the page is hidden.
- [ ] Test on representative low-powered mobile hardware.
- [ ] Keep effects from harming input responsiveness.
