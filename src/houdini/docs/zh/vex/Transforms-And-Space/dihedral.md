---
title: dihedral
order: 1
category:
  - houdini
---
    
## 描述

Computes the rotation matrix or quaternion which rotates the vector a onto the
vector b.

```c
matrix3  dihedral(vector a, vector b)
```

Computes the rotation matrix which rotates the vector a onto the vector b.

计算将矢量 a 旋转到矢量 b 的旋转矩阵。

```c
vector4  dihedral(vector a, vector b)
```

Computes the quaternion which rotates the vector a onto the vector b.

计算将矢量 a 旋转到矢量 b 的四元数。
