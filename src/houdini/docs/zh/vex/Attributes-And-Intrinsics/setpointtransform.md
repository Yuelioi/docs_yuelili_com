---
title: setpointtransform
order: 61
category:
  - houdini
---
    
## 描述

Sets the world space transform of a given point

| Since | 18.5 |
| ----- | ---- |

```c
int  setpointtransform(int geometry, int pt, matrix transform)
```

`int setpointtransform(int geometry, int pt, matrix transform, int constrain)`

Sets the `v@P` and the `3@transform` attributes on the given point from the
given 4Ã4 matrix.

从给定的 4-4 矩阵中设置给定点的 v@P 和 3@transform 属性。

`pt`

The point index to modify.

要修改的点的索引。

`transform`

The 4Ã4 transform.

4×4 变换。

`constrain`

When True, update the children point transforms when modifying a point world
transform. When False, the children points stay in place like when using Child
Compensation on a transform handle. Defaults to True;

当 "真 "时，在修改一个点的世界变换时，更新子点的变换。
