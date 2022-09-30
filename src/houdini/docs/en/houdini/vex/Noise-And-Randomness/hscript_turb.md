---
title: hscript_turb
order: 17
category:
  - houdini
---

## Description

`float hscript_turb(vector pos, int depth)`

Matches the output of [turb](../../expressions/turb.html "Generates spatially
coherent 3D noise."). This function can be useful if you convert a workflow to
VEX, or have VEX work in tandem with Hscript expressions, and need the
turbulence to look the same as in an expression.

## Arguments

`pos`

Position at which to sample the turbulent noise.

`depth`

Number of fractal iterations of noise.

## Returns

The range is usually within -1 to 1, but can exceed it depending on the depth.
The maximum range is -2 to 2 for high depths.

## See also

- [hscript_sturb](hscript_sturb.html)
- [hscript_noise](hscript_noise.html)
- [hscript_snoise](hscript_snoise.html)
- [hscript_rand](hscript_rand.html)

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
