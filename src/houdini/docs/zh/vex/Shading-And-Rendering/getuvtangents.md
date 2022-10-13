---
title: getuvtangents
order: 35
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[light](../contexts/light.html)
[shadow](../contexts/shadow.html)
[surface](../contexts/surface.html)

`void getuvtangents(string objName, vector P, vector dir, vector &Tu, vector &Tv)`

内涵(s) 这个变体额外地将 Tn 设置为评估点的表面法线。

`void getuvtangents(string objName, vector P, vector dir, vector &Tu, vector &Tv, vector &Tn)`

::: info Note

该对象必须有一个名为 "uv "的矢量属性。

::: tip

传递""作为`objName`参数将导致该函数使用当前的阴影对象。

## Arguments

`objName`

评估 UV 切线的对象的名称。

`P`

评估 UV 切线的点。

`dir`

用于搜索物体表面的方向。

通过从`P`向这个方向以及相反的方向投射射线来寻找物体的表面。

如果有的话，使用被评估点的正常值是有意义的。

`Tu`

在 U 方向的 UV 切线。

`Tv`

在 V 方向的 UV 切线。

`Tn`

评估切线的点的表面法线。

```c
// Get UV tangent at 'P', searching the surface in the direction of 'N'
vector Tu, Tv;
getuvtangents("/obj/geo1", P, N, Tu, Tv);

```

```c
// Find a surface location using an arbitrary ray.
// In this case the surface normal isn't known beforehand and can be fetched via 'Tn'.
vector Tu, Tv, Tn;
getuvtangents("/obj/geo1", ray\_orig, ray\_dir, Tu, Tv, Tn);

```

## See also

- [Du](Du.html)
- [Dv](Dv.html)
- [getderiv](getderiv.html)

|
shading raytracing
