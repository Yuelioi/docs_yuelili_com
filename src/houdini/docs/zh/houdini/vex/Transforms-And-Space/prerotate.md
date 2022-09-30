---
title: prerotate
order: 17
category:
  - houdini
---
    
## 描述

Applies a pre rotation to the given matrix.

| Since | 17.5 |
| ----- | ---- |

```c
void  prerotate(matrix3 &m, float amount, vector axis)
```

```c
void  prerotate(matrix &m, float amount, vector axis)
```

```c
void  prerotate(matrix3 &m, vector angles, int xyz)
```

```c
void  prerotate(matrix &m, vector angles, int xyz)
```

```c
void  prerotate(matrix3 &m, float angle, int axis)
```

```c
void  prerotate(matrix &m, float angle, int axis)
```

Applies a prerotation to the given matrix. The angles must be given inradians
and the axis must be normalized. The xyz argument is the rotate order.The axis
can also be given as an integer where XAXIS=1, YAXIS=2 and ZAXIS=4.

对给定的矩阵应用一个预旋转。角度的单位必须是
