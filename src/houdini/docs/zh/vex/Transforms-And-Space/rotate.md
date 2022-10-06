---
title: rotate
order: 21
category:
  - houdini
---
    
## 描述

Applies a rotation to the given matrix.

```c
void  rotate(matrix2 &m, float amount)
```

```c
void  rotate(matrix3 &m, float amount, vector axis)
```

```c
void  rotate(matrix &m, float amount, vector axis)
```

```c
void  rotate(matrix3 &m, vector angles, int xyz)
```

```c
void  rotate(matrix &m, vector angles, int xyz)
```

```c
void  rotate(matrix3 &m, float angle, int axis)
```

```c
void  rotate(matrix &m, float angle, int axis)
```

Applies a rotation to the given matrix. The angles must be given inradians and
the axis must be normalized. The xyz argument is the rotate order.The axis can
also be given as an integer where XAXIS=1, YAXIS=2 and ZAXIS=4.

对给定的矩阵进行旋转。角度的单位必须是
