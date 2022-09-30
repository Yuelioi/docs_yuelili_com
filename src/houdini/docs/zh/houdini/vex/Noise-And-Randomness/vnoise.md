---
title: vnoise
order: 30
category:
  - houdini
---
    
## 描述

Generates Voronoi (cellular) noise.

`void vnoise(float position, float jitter, int &seed, float &f1, float &f2, float &pos1, float &pos2)`

Generates 1D noise.

生成一维噪声。

`void vnoise(float position, float jitter, int &seed, float &f1, float &f2, float &pos1, float &pos2, int period)`

Generates periodic 1D noise.

生成周期性的一维噪声。

`void vnoise(float posx, float posy, float jittx, float jitty, int &seed, float &f1, float &f2, float &pos1x, float &pos1y, float &pos2x, float &pos2y)`

Generates 2D noise. This is similar to the other forms but uses pairs of
floats instead of a vector.

生成二维噪声。这与其他形式类似，但使用成对的浮点，而不是一个矢量。

`void vnoise(float posx, float posy, float jittx, float jitty, int &seed, float &f1, float &f2, float &pos1x, float &pos1y, float &pos2x, float &pos2, int periodx, int periody)`

Generates periodic 2D noise.

生成周期性二维噪声。

`void vnoise(vector position, vector jitter, int &seed, float &f1, float &f2, vector &pos1, vector &pos2)`

Generates 3D noise.

生成 3D 噪声。

`void vnoise(vector position, vector jitter, int &seed, float &f1, float &f2, vector &pos1, vector &pos2, int periodx, int periody, int periodz)`

`void vnoise(vector position, vector jitter, int &seed, float &f1, float &f2, vector &pos1, vector &pos2, vector period)`

Generates periodic 3D noise.

生成周期性三维噪声。

`void vnoise(vector4 position, vector4 jitter, int &seed, float &f1, float &f2, vector4 &pos1, vector4 &pos2)`

Generates 4D noise.

生成 4D 噪声。

`void vnoise(vector4 position, vector4 jitter, int &seed, float &f1, float &f2, vector4 &pos1, vector4 &pos2, int periodx, int periody, int periodz, int periodw)`

`void vnoise(vector4 position, vector4 jitter, int &seed, float &f1, float &f2, vector4 &pos1, vector4 &pos2, vector4 period)`

Generates periodic 4D noise.

生成周期性 4D 噪声。

`position`

The position at which to sample the noise.

对噪声进行采样的位置。

`jitter`

The amount of randomness to add to the noise in each axis.

添加到每个轴的噪声中的随机性数量。

`seed`

Outputs an integer value associated with the nearest seed point. This seed is
pretty much guaranteed to be unique for every point (meaning that it‘s
unlikely that two points close by have the same seed associated with them).

输出一个与最近的种子点相关的整数值。这个种子几乎可以保证对每一个点都是唯一的（这意味着不太可能有两个相近的点有相同的种子与它们相关联）。

`pos1`, `pos2`

These variables are overwritten with the positions of the two nearest seed
points, in order of closeness.

这些变量被覆盖了两个最近的种子点的位置，按接近程度排序。

`f1`, `f2`

These variables are overwritten with the distances to the nearest seed points,
in order of closeness.

这些变量会被覆盖上与最近的种子点的距离，按接近程度排序。

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

Voronoi noise gives almost identical results to the Worley noise function
([wnoise](wnoise.html "Generates Worley (cellular) noise.")). However, this
function has controls over jittering (i.e. how randomly the points are
scattered through space) and also return the actual locations of the two
nearest seed points, whereas [wnoise](wnoise.html "Generates Worley
(cellular) noise.") only returns the distances to the two nearest seed
points.

Voronoi 噪声给出的结果与 Worley 噪声函数（wnoise）几乎相同。然而，这个函数可以控制抖动（即点在空间中的随机散布程度），也可以返回两个最近的种子点的实际位置，而 wnoise 只返回到两个最近的种子点的距离。

Though this function is slightly more expensive than [wnoise](wnoise.html "Generates Worley (cellular) noise."), since it returns the actual point
positions, you can overcome some of the artifacts of Worley noise. For
example, to get even boundaries along the cell boundaries:

尽管这个函数比 wnoise 略微昂贵，但由于它返回实际的点的位置，你可以克服 Worley 噪声的一些缺陷。例如，沿着单元格的边界得到均匀的边界。

    if (f2 - f1 < tolerance * (distance(p1, p2) / (f1 + f2)) ...

This will “normalize” the boundary width based on the distance between the two
random points in space.

这将根据空间中两个随机点之间的距离对边界宽度进行 "标准化"。

There are also periodic forms of vnoise().

还有 vnoise()的周期形式。

## Examples

    // 1D noisefloat fp0, fp1, p1x, p1y, p2x, p2y;vector vp0, vp1;vnoise(s*10, 0.8, seed, f1, f2, fp0, fp1);vnoise(s*10, t*10, 0.8, 0.8, seed, f1, f2, p1x, p1y, p2x, p2y);vnoise(P*10, {.8, .8, .8}, seed, f1, f2, vp0, vp1);
