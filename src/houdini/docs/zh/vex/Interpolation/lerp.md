---
title: lerp
order: 11
category:
  - vex
---

`float lerp(float value1, float value2, float amount)`

在数值之间执行线性插值。

`<vector> lerp(<vector>value1, <vector>value2, float amount)`

在相应的组件之间进行线性插值。

`<vector> lerp(<vector>value1, <vector>value2, <vector>amount)`

在相应的组件之间按每个组件对的特定数量进行线性内插。

`bsdf lerp(bsdf bsdf1, bsdf bsdf2, float amount)`

返回一个 BSDF，它在两个给定的 BSDFS 的输出之间进行线性插值。

## Arguments

`amount`

如果金额在 0 到 1 的范围之外，数值将被线性推断。

如果金额为 0，则返回第一个值。如果它是 1，则返回第二个值。

## See also

- [slerp](slerp.html)
- [invlerp](invlerp.html)

|
interp

[ckspline](ckspline.html)

[clamp](clamp.html)

[cspline](cspline.html)

[efit](efit.html)

[fit](fit.html)

[fit01](fit01.html)

[fit10](fit10.html)

[fit11](fit11.html)

[invlerp](invlerp.html)

[lerp](lerp.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[slerp](slerp.html)

[smooth](smooth.html)
