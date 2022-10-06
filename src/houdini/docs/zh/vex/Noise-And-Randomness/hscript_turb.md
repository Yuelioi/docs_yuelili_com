---
title: hscript_turb
order: 11
category:
  - houdini
---
    
## 描述

Generates turbulence matching the output of the HScript turb() expression
function.

```c
float  hscript_turb(vector pos, int depth)
```

Matches the output of [turb](../../expressions/turb.html "Generates spatially
coherent 3D noise."). This function can be useful if you convert a workflow to
VEX, or have VEX work in tandem with Hscript expressions, and need the
turbulence to look the same as in an expression.

匹配输出的 ofturb。如果你将工作流转换为 VEX，或者让 VEX 与 Hscript 表达式协同工作，并且需要湍流看起来与表达式中的一样，那么这个函数就很有用。

`pos`

Position at which to sample the turbulent noise.

对湍流噪声进行采样的位置。

`depth`

Number of fractal iterations of noise.

噪声的分形迭代次数。

Returns

The range is usually within -1 to 1, but can exceed it depending on the depth.
The maximum range is -2 to 2 for high depths.

这个范围通常在-1 到 1 之内，但根据深度的不同可以超过这个范围。高深度的最大范围是-2 到 2。
