---
title: quaternion
order: 49
category:
  - houdini
---
    
## 描述

Creates a vector4 representing a quaternion.

```c
vector4  quaternion(matrix3 rotations)
```

Creates a vector4 representing a quaternion from a 3Ã3 rotational matrix.

从 3Ã3 旋转矩阵创建一个代表四元数的向量 4。

```c
vector4  quaternion(float angle, vector axis)
```

Creates a vector4 representing a quaternion from an angle and axis. The angle
is specified in radians.

从 anangle 和 axis 创建一个代表四元数的向量 4。角度是以弧度指定的。

```c
vector4  quaternion(vector angleaxis)
```

Creates a vector4 representing a quaternion from a combined angle/axis. This
is the normalized rotation axis multiplied by the rotation angle in radians.

从组合角度/轴创建一个代表四元数的向量 4。这是规范化的旋转轴乘以旋转角度（弧度）。

There used to be a fourth form that took a rotation vector.It has been renamed
to

```c
eulertoquaternion
```

and now takes radians.

以前有一个第四种形式，采取旋转向量。 它已经被重新命名为 eulertoquaternion，现在需要弧度。

For more information, see [Data types](../lang.html#data-types) and [Dot
operator](../lang.html#dot-operator).

更多信息，请参阅数据类型和点运算符。
