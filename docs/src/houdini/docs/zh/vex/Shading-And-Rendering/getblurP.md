---
title: getblurP
order: 11
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[light](../contexts/light.html)
[shadow](../contexts/shadow.html)
[surface](../contexts/surface.html)

`vector getblurP(float delta)`

Context(s) 返回当前阴影点在运动模糊曝光中的分数时间 delta 的位置（`P`）。当运动模糊被禁用时，`getblurP()`将总是返回阴影位置`P`。当启用运动模糊时，`getblurP(0)`和`getblurP(1)`将返回阴影位置运动路径范围内的位置，0 和 1 之间的分数值产生其他中间的阴影位置。例如，`getblurP(0.5)`返回点的模糊位置在当前曝光的一半。

当对微多面体进行着色时，`P'将始终存储点的初始位置（在时间=0）。对于光线追踪，`P`将存储被遮蔽的样本在运动转换后的最终位置--在VEX遮蔽上下文中`Time`全局变量所给的时间。如果你想确定其他时间的阴影位置，就必须使用`getblurP`。

当使用在时间=0 时生成的点云时，你应该使用`getblurP(0)`来找到该帧曝光开始时的位置，然后用这个位置在点云中向上看。

比如说。

```c
vector p0 = getblurP(0);
int handle = pcopen("pcloud.pc", p0, ...);
```

blur

[getblurP](getblurP.html)
