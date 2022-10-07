---
title: vnoise
order: 38
category:
  - vex
---

`void vnoise(float position, float jitter, int &seed, float &f1, float &f2, float &pos1, float &pos2)`

产生 1D 噪音。

`void vnoise(float position, float jitter, int &seed, float &f1, float &f2, float &pos1, float &pos2, int period)`

产生周期性的一维噪声。

`void vnoise(float posx, float posy, float jittx, float jitty, int &seed, float &f1, float &f2, float &pos1x, float &pos1y, float &pos2x, float &pos2y)`

生成二维噪声。这与其他形式类似，但使用成对的浮点，而不是一个矢量。

`void vnoise(float posx, float posy, float jittx, float jitty, int &seed, float &f1, float &f2, float &pos1x, float &pos1y, float &pos2x, float &pos2, int periodx, int periody)`

产生周期性的 2D 噪音。

`void vnoise(vector position, vector jitter, int &seed, float &f1, float &f2, vector &pos1, vector &pos2)`

产生 3D 噪音。

`void vnoise(vector position, vector jitter, int &seed, float &f1, float &f2, vector &pos1, vector &pos2, int periodx, int periody, int periodz)`

`void vnoise(vector position, vector jitter, int &seed, float &f1, float &f2, vector &pos1, vector &pos2, vector period)`

产生周期性的 3D 噪音。

`void vnoise(vector4 position, vector4 jitter, int &seed, float &f1, float &f2, vector4 &pos1, vector4 &pos2)`

产生 4D 噪音。

`void vnoise(vector4 position, vector4 jitter, int &seed, float &f1, float &f2, vector4 &pos1, vector4 &pos2, int periodx, int periody, int periodz, int periodw)`

`void vnoise(vector4 position, vector4 jitter, int &seed, float &f1, float &f2, vector4 &pos1, vector4 &pos2, vector4 period)`

产生周期性的 4D 噪声。

## Arguments

`position`

对噪声进行采样的位置。

`jitter`

在每个轴的噪声中加入随机性的量。

`seed`

输出一个与最近的种子点相关的整数值。这个种子几乎可以保证对每一个点都是唯一的（意味着不太可能有两个相近的点有相同的种子关联）。

`pos1`, `pos2`

这些变量被覆盖为两个最近的种子点的位置，按接近程度排序。

`f1`, `f2`

这些变量被覆盖为与最近的种子点的距离，按接近程度排序。

你可以将这些距离结合起来，产生噪声模式。产生的噪声在本质上往往是非常 "单元 "的。事实上，其中一个好处是，你可以通过使用表达式来确定 "单元 "的边界：`if (f2 - f1)`，如果空间中的点跨越两个单元之间的边界，这将是真的。

`period`, `periodx`, `periody`, `periodz`, `periodw`

如果你包括周期参数，该函数就会产生重复的（周期性）噪声。

Voronoi 噪声给出的结果与 Worley 噪声函数（[wnoise](wnoise.html) () ("Generates Worley (cellular) noise.")）几乎相同。然而，这个函数可以控制抖动（即点在空间中的随机散布程度），也可以返回两个最近的种子点的实际位置，而[wnoise](wnoise.html)（"生成沃利（细胞）噪声。"）只返回两个最近的种子点的距离。

虽然这个函数比[wnoise](wnoise.html) ()("生成沃利（细胞）噪声。")稍微贵一些，但由于它返回实际的点位置，你可以克服沃利噪声的一些假象。例如，为了得到沿细胞边界的均匀边界。

```c
if (f2 - f1 < tolerance \* (distance(p1, p2) / (f1 + f2)) ...

```

This will “normalize” the boundary width based on the distance between the two random points in space.

There are also periodic forms of vnoise().

## Examples



```c
// 1D noise
float fp0, fp1, p1x, p1y, p2x, p2y;
vector vp0, vp1;
vnoise(s\*10, 0.8, seed, f1, f2, fp0, fp1);
vnoise(s\*10, t\*10, 0.8, 0.8, seed, f1, f2, p1x, p1y, p2x, p2y);
vnoise(P\*10, {.8, .8, .8}, seed, f1, f2, vp0, vp1);

```

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
