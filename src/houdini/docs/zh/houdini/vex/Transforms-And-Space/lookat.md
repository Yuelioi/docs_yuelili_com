---
title: lookat
order: 6
category:
  - houdini
---
    
## 描述

Computes a rotation matrix or angles to orient the negative z-axis along the
vector (to-from) under the transformation.

```c
matrix3  lookat(vector from, vector to)
```

```c
matrix3  lookat(vector from, vector to, float roll)
```

```c
matrix3  lookat(vector from, vector to, vector up)
```

```c
vector  lookat(vector from, vector to, float roll, int xyz)
```

```c
vector  lookat(vector from, vector to, vector up, int xyz)
```

Computes a rotation matrix or angles to orient the negative z-axis along
thevector (to-from) under the transformation. If an up vector is specified,
thiswill determine the roll.

计算一个旋转矩阵或角度，使负的 Z 轴沿着变换后的矢量（从）方向旋转。

`xyz` is a rotation order defined in

```c
$HFS/houdini/support/vex/include/math.h
```

.

矢量的方向（从头到尾）进行变换。如果指定了一个向上的矢量，这
