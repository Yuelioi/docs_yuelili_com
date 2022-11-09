---
title: pnoise
order: 27
category:
  - vex
---

`float|vector pnoise(float x, int px)`

`float|vector pnoise(vector x, vector p)`

`float|vector pnoise(vector4 xyzt, vector4 p)`

`float|vector pnoise(float x, float y, int px, int py)`

`float|vector pnoise(vector xyz, int px, int py, int pz)`

`float|vector pnoise(vector4 xyzt, int px, int py, int pz, int pt)`

有两种形式的佩林式噪声：一种是在整个 N 维空间随机变化的非周期性噪声，另一种是在特定空间范围内重复的周期性形式。

这个函数产生周期性噪声。使用[noise](noise.html) ("有两种形式的佩林式噪声：一种是在整个N维空间随机变化的非周期性噪声，另一种是在特定空间范围内重复的周期性形式。")函数来生成非周期性佩林噪声。

各种函数返回 4D（vector4 参数）、3D（vector 参数）、2D（两个浮点参数）或 1D（浮点参数）位置的噪声值。你可以得到一个随机的浮点值或三个随机值的矢量。

p "int 或 vector 参数指定了周期性的范围。例如，如果你正在制作一个二维图像，你想让它平铺。

```c
clr = pnoise(X \* 4, Y \* 5, _4, 5_)

```

In this example, X is in the range 0-4, Y is in the range 0-5, and the
noise is periodic within that segment.

If a period argument is 0, VEX treats that as _no_ periodicity. Use
this to make the noise periodic in one dimension but not another.

The distribution of the noise depends on the dimension, with higher
dimensions approaching a Gaussian distribution of noise values.

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
