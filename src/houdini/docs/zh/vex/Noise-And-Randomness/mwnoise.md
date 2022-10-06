---
title: mwnoise
order: 12
category:
  - houdini
---
    
## 描述

Generates Worley (cellular) noise using a Manhattan distance metric.

```c
void  mwnoise(float position, int &seed, float &f1, float &f2)
```

`void mwnoise(float position, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 1D noise.

生成一维噪声。

```c
void  mwnoise(float position, int &seed, float &f1, float &f2, int peiod)
```

`void mwnoise(float position, int &seed, float &f1, float &f2, float &f4, float &f4, int period)`

Generates periodic 1D noise.

生成周期性的一维噪声。

```c
void  mwnoise(float posx, float posy, int &seed, float &f1, float &f2)
```

`void mwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 2D noise. This is similar to the other forms but uses pairs of
floats instead of a vector.

生成二维噪声。这与其他形式类似，但使用成对的浮点，而不是一个矢量。

`void mwnoise(float posx, float posy, int &seed, float &f1, float &f2, int periodx, int periody)`

`void mwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

Generates periodic 2D noise.

生成周期性二维噪声。

```c
void  mwnoise(vector2 position, int &seed, float &f1, float &f2)
```

`void mwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 2D noise.

生成二维噪声。

`void mwnoise(vector2 position, int &seed, float &f1, float &f2, int periodx, int periody)`

`void mwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

Generates periodic 2D noise.

生成周期性二维噪声。

```c
void  mwnoise(vector position, int &seed, float &f1, float &f2)
```

`void mwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 3D noise.

生成 3D 噪声。

`void mwnoise(vector position, int &seed, float &f1, float &f2, int periodx, int periody, int periodx)`

`void mwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz)`

Generates periodic 3D noise.

生成周期性 3D 噪声。

```c
void  mwnoise(vector4 position, int &seed, float &f1, float &f2)
```

`void mwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 4D noise.

生成 4D 噪声。

`void mwnoise(vector4 position, int &seed, float &f1, float &f2, int periodx, int periody, int periodz, int periodw)`

`void mwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz, int periodw)`

Generates periodic 4D noise.

生成周期性 4D 噪声。

`position`

The position at which to sample the noise.

对噪声进行采样的位置。

`seed`

Outputs an integer value associated with the nearest seed point. This seed is
pretty much guaranteed to be unique for every point (meaning that it‘s
unlikely that two points close by have the same seed associated with them).

输出一个与最近的种子点相关的整数值。这个种子几乎可以保证对每一个点都是唯一的（也就是说，不太可能有两个相近的点有相同的种子）。

`f1`, `f2`, `f3`, `f4`

These variables are overwritten with the distances to the nearest seed points,
in order of closeness.

这些变量被覆盖了与最近的种子点的距离，按接近程度排序。

You can combine these distances to generate noise patterns. The noise
generated tends to be very “cellular” in nature. In fact, one of the nice
things is that you can determine “cell” boundaries by using the expression:
`if (f2 - f1)` which will be true if the point in space is crossing the
boundary between two cells.

你可以结合这些距离来产生噪声模式。产生的噪声在本质上往往是非常 "细胞 "的。事实上，其中一个好处是，你可以通过使用表达式：if (f2 - f1)来确定
"单元 "边界，如果空间中的点跨越两个单元之间的边界，则表达式为真。

`period`, `periodx`, `periody`, `periodz`, `periodw`

If you include the period argument(s), the function generates repeating
(periodic) noise.

如果你包括周期参数，该函数会产生重复（周期性）噪声。

Worley noise scatters seed points randomly through space (according to a nice
Poisson distribution). The functions outputs the distances to the 2 (or 4)
seed points nearest to the sample position.

沃利噪声将种子点随机地散布在空间中（根据一个漂亮的泊松分布）。该函数输出离样本位置最近的两个（或四个）种子点的距离。
