---
title: uvunwrap
order: 78
category:
  - houdini
---
    
## 描述

Computes the position and normal at given (u, v) coordinates, for use in a
lens shader.

`int uvunwrap(string object_path, float u, float v, float time, vector &P, vector &I)`

`int uvunwrap(string object_path, float u, float v, float time, vector &P, vector &I, vector &mikkelsenUtan, vector &mikkelsenVtan)`

This function **only makes sense in a Mantra context** , for use in **texture
baking** or in a **lens shader**. The function unfortunately must be “context-
less” so it‘savailable to the CVEX lens shader, but in any other context it
will fail and return `0`.

这个函数只在 Mantra 上下文中才有意义，用于 texture baking 或 alens shader 中。不幸的是，这个函数必须是 "无上下文
"的，所以它可以用于 CVEX 镜头着色器，但在任何其他上下文中，它都会失败并返回 0。

For any other kind of texture sampling, use the superior
[uvsample](uvsample.html "Interpolates the value of an attribute at certain UV
coordinates using a UV attribute.") or [uvintersect](uvintersect.html "This
function computes the intersection of the specified ray with the geometry in
uv space.") functions instead of this.

对于任何其他类型的纹理取样，请使用 superioruvsample 或 uvintersect 函数来代替这个函数。

`object_path`

The object being unwrapped.

被解包的物体。

`u`, `v`

The UV coordinates specifying where on the surface to get the position and
normal.

UV 坐标，指定在表面上获取位置和法线。

`time`

The time along the timeline at which to measure the geometry, in seconds.

在时间轴上测量几何体的时间，单位是秒。

`&P`

If it succeeds, the function overwrites this variable with the world space
position of the given point.

如果成功的话，函数会用给定点的世界空间位置覆盖这个变量。

`&I`

If it succeeds, the function overwrites this variable with the normal at the
given point.

如果成功，该函数会用给定点的法线覆盖这个变量。

```c
&mikkelsenUtan
```

,

```c
&mikkelsenVtan
```

The function overwrites these variables with the Mikkelsen tangent vectors.

该函数用 Mikkelsen 切线向量覆盖这些变量。

Returns

`1` if the UV coordinates specified a valid point on the surface, or `0`
otherwise.

如果 UV 坐标指定了曲面上的一个有效点，则为 1，否则为 0。
