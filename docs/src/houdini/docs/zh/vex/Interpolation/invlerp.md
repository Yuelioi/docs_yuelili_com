---
title: invlerp
order: 10
category:
  - vex
---

自 18.5 以来

`float invlerp(float a, float min, float max)`

`<vector> invlerp(<vector>a, <vector>min, <vector>max)`

返回混合`min'和`max'的数量，以生成输入值`a'。这是`lerp'函数的逆函数。

矢量版的操作是分量式的，所以产生的矢量将是每个维度的独立混合量。

如果`a`在`min`到`max`范围之外，将产生大于`1`或小于`0`的值。

如果 "min "和 "max "相等，混合值为 "0.5"。

## See also

- [lerp](lerp.html)

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
