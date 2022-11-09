---
title: pxnoised
order: 28
category:
  - vex
---

自 17.0 以来

`void pxnoised(float x, int px, float &v, float &dvdx)`

`void pxnoised(float x, int px, vector &v, vector &dvdx)`

`void pxnoised(float x, float y, int px, int py, float &v, float &dvdx, float &dvdy)`

`void pxnoised(float x, float y, int px, int py, vector &v, vector &dvdx, vector &dvdy)`

`void pxnoised(vector xyz, int px, int py, int pz, float &v, float &dvdx, float &dvdy, float &dvdz)`

`void pxnoised(vector xyz, int px, int py, int pz, vector &v, vector &dvdx, vector &dvdy, vector &dvdz)`

`void pxnoised(vector4 xyzw, int px, int py, int pz, int pw, float &v, float &dvdx, float &dvdy, float &dvdz, float &dvdw)`

`void pxnoised(vector4 xyzw, int px, int py, int pz, int pw, vector &v, vector &dvdx, vector &dvdy, vector &dvdz, vector &dvdw)`

这将计算单纯的噪声值，以及沿每个轴的噪声导数。这可以相当有效地进行，因为有分析性导数可用。

见[xnoise](xnoise.html) ()（"Simplex 噪声与 Perlin 噪声非常接近，只是样本在一个 Simplex 网格而不是网格上。这导致较少的网格伪影。它还使用更高阶的 bspline 来提供更好的导数。"）和[pxnoise](pxnoise.html) （"Simplex 噪声非常接近于 Perlin 噪声，除了样本在一个单纯的网格而不是网格上。这导致较少的网格伪影。它还使用高阶 bspline 来提供更好的导数。这就是周期性的单线噪声"）用于其他版本的 xnoise。

参见 VEX 语言指南中的[噪声和随机性](.../random.html)以获得更多信息。

## See also

- [xnoised](xnoised.html)

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
