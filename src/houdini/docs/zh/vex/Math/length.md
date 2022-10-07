---
title: length
order: 33
category:
  - vex
---

要获得一个字符串的长度，或一个数组中的项目数，请使用[len](len.html)（"返回一个数组的长度"）。

`float length(float f)`

简单地返回给定的数字。

`float length(vector2 v)`

`float length(vector v)`

`float length(vector4 v)`

返回向量或向量 4 与原点的距离。

如果你想要长度的平方，使用[length2](length2.html) ()("返回向量或向量 4 的平方距离。")比将这个函数的结果平方化要快。

## Examples



```c
length({1.0, 0, 0}) == 1.0;
length({1.0, 1.0, 0}) == 1.41421;

```

## See also

- [length2](length2.html)

|
measure

[curvearclen](curvearclen.html)

[distance](distance.html)

[distance2](distance2.html)

[getbbox](getbbox.html)

[getbbox_center](getbbox_center.html)

[getbbox_max](getbbox_max.html)

[getbbox_min](getbbox_min.html)

[getbbox_size](getbbox_size.html)

[getbounds](getbounds.html)

[getpointbbox](getpointbbox.html)

[getpointbbox_center](getpointbbox_center.html)

[getpointbbox_max](getpointbbox_max.html)

[getpointbbox_min](getpointbbox_min.html)

[getpointbbox_size](getpointbbox_size.html)

[length](length.html)

[length2](length2.html)

[mdensity](mdensity.html)

[pcfarthest](pcfarthest.html)

[planepointdistance](planepointdistance.html)

[predicate_orient2d](predicate_orient2d.html)

[predicate_orient3d](predicate_orient3d.html)

[primarclen](primarclen.html)

[qdistance](qdistance.html)

[relbbox](relbbox.html)

[relpointbbox](relpointbbox.html)

[surfacedist](surfacedist.html)

[uvdist](uvdist.html)

[xyzdist](xyzdist.html)

|
vector

[Du](Du.html)

[Dw](Dw.html)

[avg](avg.html)

[cross](cross.html)

[distance2](distance2.html)

[dot](dot.html)

[length](length.html)

[length2](length2.html)

[normalize](normalize.html)

[outerproduct](outerproduct.html)

[pretranslate](pretranslate.html)

[rotate_x_to](rotate_x_to.html)

[smoothrotation](smoothrotation.html)

[swizzle](swizzle.html)

[translate](translate.html)
