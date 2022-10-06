---
title: getblurP
order: 10
category:
  - houdini
---
    
## 描述

Returns the blurred point position (`P`) vector at a fractional time within
the motion blur exposure.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
vector  getblurP(float delta)
```

Returns the position (`P`) of the current shading point at fractional time
delta within the motion blur exposure. When motion blur is disabled,
`getblurP() `will always return the shading position `P`.When motion blur is
enabled, `getblurP(0)` and `getblurP(1)` will return the positions at the
extent of the shading position‘smotion path, with fractional values between
0 and 1 generating other intermediate shading positions.For example,
`getblurP(0.5)` returns the point‘sblurred position half-way through the
current exposure.

返回当前阴影点在运动模糊曝光中的分数时间点的位置（P）。当运动模糊被禁用时，getblurP()将总是返回阴影位置 P。
当运动模糊启用时，getblurP(0)和 getblurP(1)将返回阴影位置的运动路径范围内的位置，0 和 1 之间的分数值产生其他中间的阴影位置。
例如，getblurP(0.5)返回点的模糊位置在当前曝光的一半。

When shading micropolygons, `P` will always store the initial position of the
point (at time = 0). For raytracing, `P` will store the final position after
motion transformation for the sample being shaded - at the time given by the
`Time` global variable in the VEX shading context.If you want to determine the
shading position at other times it is necessary to use `getblurP`.

当对微多面体进行着色时，P 将始终存储点的初始位置（在时间=0）。对于光线追踪，P 将存储被着色的样本在运动转换后的最终位置--
在 VEX 着色上下文中 Timeglobal 变量给出的时间。 如果你想确定其他时间的阴影位置，就必须使用 egetblurP。

When using point clouds that were generated at time = 0, you should use
`getblurP(0)` to find the position at the start of the frame‘sexposure and
then use this position to look up in the point cloud.

当使用在时间=0 时产生的点云时，你应该使用 egetblurP(0)来找到该帧曝光开始时的位置，然后使用这个位置来查找点云。

For example:

比如说。

    vector p0 = getblurP(0);int handle = pcopen("pcloud.pc", p0, ...);
