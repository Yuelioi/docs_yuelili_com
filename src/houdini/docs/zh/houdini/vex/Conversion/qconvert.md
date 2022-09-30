---
title: qconvert
order: 7
category:
  - houdini
---
    
## 描述

Converts a quaternion represented by a vector4 to a matrix3 representation.

```c
matrix3  qconvert(vector4 quaternion)
```

Converts a quaternion represented by a vector4 to a matrix3 representation.

将一个由矢量 4 表示的四元数转换为矩阵 3 表示。

```c
matrix  qconvert(vector4 quaternion, vector offset)
```

Converts a quaternion represented by a vector4 to a matrix
representation.Applies the offset as a post-translation, so the resulting
matrix willfirst rotate a point by the quaternion and then add the offset.

将一个由矢量 4 表示的四元数转换为矩阵表示。

```c
vector  qconvert(vector4 quaternion)
```

Converts a quaternion represented by a vector4 into a angle/axis vector.

将偏移量作为一个后置翻译，因此产生的矩阵将
