---
title: lerp
order: 7
category:
  - houdini
---
    
## 描述

Performs linear interpolation between the values.

```c
float  lerp(float value1, float value2, float amount)
```

Performs linear interpolation between the values.

在数值之间执行线性插值。

```c
<vector> lerp(<vector>value1, <vector>value2, float amount)
```

Performs linear interpolation between corresponding components.

在相应的组件之间执行线性插值。

```c
<vector> lerp(<vector>value1, <vector>value2, <vector>amount)
```

Performs linear interpolation between corresponding components by specific
amounts for each component pair.

在相应的分量之间对每个分量对进行特定数量的线性内插。

```c
bsdf  lerp(bsdf bsdf1, bsdf bsdf2, float amount)
```

Returns a BSDF that linearly interpolates between the output of the two given
BSDFS.

返回一个 BSDF，在两个给定的 BSDFS 的输出之间进行线性内插。

`amount`

If the amount is outside the range 0 to 1, the values will be extrapolated
linearly.

如果量在 0 到 1 的范围之外，值将被线性外推。

If amount is 0, the first value is returned.If it is 1, the second value is
returned.

如果金额为 0，返回第一个值。 如果它是 1，则返回第二个值。
