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

单纯噪声与佩林噪声非常接近，只是样本在单纯网格而不是网格上。这导致了较少的网格伪影。它还使用更高阶的 "bspline "来提供更好的导数。

各种函数返回 4D（vector4 参数）、3D（vector 参数）、2D（两个浮点参数）或 1D（浮点参数）位置的噪声值。你可以得到一个随机的浮点值或三个随机值的矢量。

噪声的范围是 0-1，中位数是 0.5。噪声的分布取决于维度，维度越高，噪声值的分布越接近高斯分布。

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
