---
title: flownoise
order: 10
category:
  - vex
---

`float flownoise(vector xyz, float flow)`

`vector flownoise(vector xyz, float flow)`

`float flownoise(vector4 xyzt, float flow)`

`vector flownoise(vector4 xyzt, float flow)`

`float flownoise(float x, float y, float flow)`

`vector flownoise(float x, float y, float flow)`

This operator generates 1D and 3D Perlin Flow noise from 3D and 4D data.
There are two forms of Perlin flow noise: a non-periodic noise which changes
randomly throughout the N-dimensional space, and a periodic form which
repeats itself over a given range of the space. The periodic form can be
used to generate patterns which tile over N-dimensional space, such as a
noise-based texture map which repeats seamlessly.

The noise has a range of (0, 1) with a median value of 0.5. The
distribution of the noise depends on the dimension, with higher
dimensions approaching a Gaussian distribution of noise values.

Flow noise is very similar to Perlin noise, as in
[![](../../icons/VOP/periodicnoise.svg)Periodic Noise](../../nodes/vop/periodicnoise.html) ("Generates 1D and 3D Perlin noise from 1D, 3D and 4D data."), but with an extra flow parameter. The flow
parameter can be thought of as an extra dimension, but a dimension
whose period is always 1. Moving through the flow dimension rotates
the noise vectors rather than adjusting slices through a noise space, which generates a more flowing appearance to the animation.

## See also

- [Noise and randomness](../random.html)
- [anoise](anoise.html)
- [curlnoise](curlnoise.html)
- [flownoise](flownoise.html)
- [noise](noise.html)
- [onoise](onoise.html)
- [pnoise](pnoise.html)
- [snoise](snoise.html)
- [vnoise](vnoise.html)
- [wnoise](wnoise.html)
- [xnoise](xnoise.html)

|
noise

[anoise](anoise.html)

[curlnoise](curlnoise.html)

[curlnoise2d](curlnoise2d.html)

[curlxnoise](curlxnoise.html)

[curlxnoise2d](curlxnoise2d.html)

[cwnoise](cwnoise.html)

[flownoise](flownoise.html)

[flowpnoise](flowpnoise.html)

[hscript_noise](hscript_noise.html)

[hscript_rand](hscript_rand.html)

[hscript_snoise](hscript_snoise.html)

[hscript_sturb](hscript_sturb.html)

[hscript_turb](hscript_turb.html)

[mwnoise](mwnoise.html)

[noise](noise.html)

[noised](noised.html)

[onoise](onoise.html)

[pnoise](pnoise.html)

[xnoise](pxnoise.html)

[pxnoised](pxnoised.html)

[snoise](snoise.html)

[vnoise](vnoise.html)

[wnoise](wnoise.html)

[xnoise](xnoise.html)

[xnoised](xnoised.html)
