---
title: radians
order: 9
category:
  - houdini
---
    
## 描述

Converts the argument from degrees into radians.

```c
float  radians(float num_in_degs)
```

Converts the number of degrees in the argument to radians.

将参数中的度数转换为弧度。

```c
<vector> radians(<vector>nums_in_degs)
```

Returns a new vector with `atan()` applied to each component.

返回一个新的向量，并将 atan()应用于每个分量。

Tip

The VEX trig functions work with radians, but most users are more comfortable
with degrees. You may want to convert from radians for internal use to degrees
in the UI.

VEX 的三角函数可以使用弧度，但是大多数用户更喜欢使用度。你可能想把内部使用的弧度转换为用户界面中的度。
