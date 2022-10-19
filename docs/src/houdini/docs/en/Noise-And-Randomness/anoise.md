---
title: anoise
order: 2
category:
  - vex
---

`float anoise(vector pos)`

`vector anoise(vector pos)`

`float anoise(vector pos, int turbulence, float rough, float atten)`

`vector anoise(vector pos, int turbulence, float rough, float atten)`

`float anoise(vector pos, int periodX, int periodY, int periodZ)`

`vector anoise(vector pos, int periodX, int periodY, int periodZ)`

`float anoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector anoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

These functions generate “alligator” noise, a type of cellular noise similar to
Worley noise ([wnoise](wnoise.html) ("Generates Worley (cellular) noise.")). It is currently not possible to simulate alligator noise
using the Worley functions, but it’s possible to get a very similar “look”.

The bounds on the noise are roughly (0, 1). This function only supports 3D noise.

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
