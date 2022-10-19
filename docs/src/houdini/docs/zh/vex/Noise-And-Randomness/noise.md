---
title: noise
order: 23
category:
  - vex
---

`float noise(float pos)`

`vector noise(float pos)`

在给定的位置从一维噪声中抽取一个或三个数字。

`float noise(float posx, float posy)`

`vector noise(float posx, float posy)`

在给定的位置从二维噪声中抽取一个或三个数字。

`float noise(vector pos)`

`vector noise(vector pos)`

在给定的位置从三维噪声中抽出一个或三个数字。

`float noise(vector4 pos)`

`vector noise(vector4 pos)`

在给定的位置从 4D 噪声中抽取一个或三个数字。

有两种形式的佩林式噪声：一种是在整个 N 维空间随机变化的非周期性噪声，另一种是在特定空间范围内重复的周期性形式。

::: info Note

这个函数生成非周期性噪声。使用[pnoise](pnoise.html) ("有两种形式的佩林式噪声：一种是在整个N维空间随机变化的非周期性噪声，另一种是在给定空间范围内重复的周期性形式。")函数来生成周期性佩林噪声。

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
