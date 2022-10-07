---
title: xnoise
order: 41
category:
  - vex
---

`float xnoise(float x)`

`vector xnoise(float x)`

`float xnoise(float x, float y)`

`vector xnoise(float x, float y)`

`float xnoise(vector xyz)`

`vector xnoise(vector xyz)`

`float xnoise(vector4 xyzt)`

`vector xnoise(vector4 xyzt)`

Simplex noise is very close to Perlin noise, except with the samples on a
simplex mesh rather than a grid. This results in less grid artifacts. It also
uses a higher order `bspline` to provide better derivatives.

The various functions return the noise value at a 4D (vector4 argument),
3D (vector argument), 2D (two float arguments) or 1D (float argument)
position. You can get a random float value or a vector of three random
values.

The noise is in the range 0-1 with a median of 0.5. The distribution of
the noise depends on the dimension, with higher dimensions approaching a
Gaussian distribution of noise values.



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
