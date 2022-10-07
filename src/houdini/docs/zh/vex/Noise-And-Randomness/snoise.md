---
title: snoise
order: 37
category:
  - vex
---

`float snoise(vector pos)`

`vector snoise(vector pos)`

`float snoise(vector pos, int turbulence, float rough, float atten)`

`vector snoise(vector pos, int turbulence, float rough, float atten)`

`float snoise(vector pos, int periodX, int periodY, int periodZ)`

`vector snoise(vector pos, int periodX, int periodY, int periodZ)`

`float snoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector snoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

These functions are similar to [wnoise](wnoise.html "Generates Worley (cellular) noise."). The noise returned
is based on the weights of all of the closest points, with each point’s
contribution based on a meta-ball like rolloff curve. That is, if the
sample point is close to the sphere, its contribution will be greater.

The bounds on the noise are roughly (-1.7, 1.7). Only 3D noise is
supported. However, this noise has the ability to compute turbulence
with roughness and attenuation on the noise.



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
