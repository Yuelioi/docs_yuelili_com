---
title: solvetriangleSSS
order: 62
category:
  - houdini
---
    
## 描述

Finds the angles of a triangle from its sides.

| Since | 18.0 |
| ----- | ---- |

```c
vector  solvetriangleSSS(vector sides)
```

```c
vector  solvetriangleSSS(float a, float b, float c)
```

Returns

The 3 angles of a triangle in radians given the value of its 3 sides using the
Law of Cosines.

用余弦定律给定一个三角形的 3 个角的弧度，它的 3 条边的值。
