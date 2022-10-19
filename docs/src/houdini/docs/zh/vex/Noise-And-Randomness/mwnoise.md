---
title: mwnoise
order: 18
category:
  - vex
---

`void mwnoise(float position, int &seed, float &f1, float &f2)`

`void mwnoise(float position, int &seed, float &f1, float &f2, float &f3, float &f4)`

产生 1D 噪音。

`void mwnoise(float position, int &seed, float &f1, float &f2, int peiod)`

`void mwnoise(float position, int &seed, float &f1, float &f2, float &f4, float &f4, int period)`

产生周期性的一维噪声。

`void mwnoise(float posx, float posy, int &seed, float &f1, float &f2)`

`void mwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成二维噪声。这与其他形式类似，但使用成对的浮点，而不是一个矢量。

`void mwnoise(float posx, float posy, int &seed, float &f1, float &f2, int periodx, int periody)`

`void mwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

产生周期性的 2D 噪音。

`void mwnoise(vector2 position, int &seed, float &f1, float &f2)`

`void mwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

产生 2D 噪音。

`void mwnoise(vector2 position, int &seed, float &f1, float &f2, int periodx, int periody)`

`void mwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

产生周期性的 2D 噪音。

`void mwnoise(vector position, int &seed, float &f1, float &f2)`

`void mwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4)`

产生 3D 噪音。

`void mwnoise(vector position, int &seed, float &f1, float &f2, int periodx, int periody, int periodx)`

`void mwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz)`

产生周期性的 3D 噪音。

`void mwnoise(vector4 position, int &seed, float &f1, float &f2)`

`void mwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

产生 4D 噪音。

`void mwnoise(vector4 position, int &seed, float &f1, float &f2, int periodx, int periody, int periodz, int periodw)`

`void mwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz, int periodw)`

产生周期性的 4D 噪声。

## Arguments

`position`

对噪声进行采样的位置。

`seed`

输出一个与最近的种子点相关的整数值。这个种子几乎可以保证对每一个点都是唯一的（意味着不太可能有两个相近的点有相同的种子关联）。

`f1`, `f2`, `f3`, `f4`

这些变量被覆盖为与最近的种子点的距离，按接近程度排序。

你可以将这些距离结合起来，产生噪声模式。产生的噪声在本质上往往是非常 "单元 "的。事实上，其中一个好处是，你可以通过使用表达式来确定 "单元 "的边界：`if (f2 - f1)`，如果空间中的点跨越两个单元之间的边界，这将是真的。

`period`, `periodx`, `periody`, `periodz`, `periodw`

如果你包括周期参数，该函数就会产生重复的（周期性）噪声。

沃利噪声使种子点在空间中随机散布（根据一个漂亮的泊松分布）。该函数输出离样本位置最近的两个（或四个）种子点的距离。

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
