---
title: hscript_noise
order: 7
category:
  - houdini
---
    
## 描述

Generates noise matching the output of the Hscript noise() expression
function.

```c
float  hscript_noise(vector pos)
```

Matches the output of [noise](../../expressions/noise.html "Generates 3D
noise."). This function can be useful if you convert a workflow to VEX, or
have VEX work in tandem with Hscript expressions, and need the noise to look
the same as in an expression.

与 noise 的输出相匹配。如果你将一个工作流程转换为 VEX，或者让 VEX 与 Hscript 表达式一起工作，并且需要噪声看起来与表达式相同，那么这个函数就很有用。

`pos`

Position at which to sample the noise.

对噪声进行采样的位置。
