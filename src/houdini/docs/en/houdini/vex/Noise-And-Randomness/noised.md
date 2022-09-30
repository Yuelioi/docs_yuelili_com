---
title: noised
order: 24
category:
  - houdini
---

## Description

`void noised(float x, float &v, float &dvdx)`

`void noised(float x, vector &v, vector &dvdx)`

`void noised(float x, float y, float &v, float &dvdx, float &dvdy)`

`void noised(float x, float y, vector &v, vector &dvdx, vector &dvdy)`

`void noised(vector xyz, float &v, float &dvdx, float &dvdy, float &dvdz)`

`void noised(vector xyz, vector &v, vector &dvdx, vector &dvdy, vector &dvdz)`

`void noised(vector4 xyzw, float &v, float &dvdx, float &dvdy, float &dvdz, float &dvdw)`

`void noised(vector4 xyzw, vector &v, vector &dvdx, vector &dvdy, vector &dvdz, vector &dvdw)`

This computes both the perlin noise value, and the derivatives of the noise
along each axis. This can be performed quite efficiently as there are analytic
derivatives available.

See [noise and randomness](../random.html) in the VEX language guide for more
information.

## See also

- [noise](noise.html)

### noise

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
