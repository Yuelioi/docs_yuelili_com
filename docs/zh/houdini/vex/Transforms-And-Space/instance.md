---
title: instance
order: 5
category:
  - houdini
---
    
## 描述

Creates an instance transform matrix.

```c
matrix  instance(vector P, vector N)
```

```c
matrix  instance(vector P, vector N, vector scale)
```

```c
matrix  instance(vector P, vector N, vector scale, vector pivot)
```

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector up)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector up, vector pivot)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector4 orient)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector4 orient, vector pivot)`

Creates a transform matrix from the given arguments, using the samemethod that
the [![](../../icons/SOP/copy.svg)Copy SOP](../../nodes/sop/copy.html "Creates
multiple copies of the input geometry, or copies the geometryonto the points
of the second input.") uses to transform itsoutput instances. The instance is
placed at point `P`, orientedalong the normal direction `N`, and, optionally,
scaled by `scale`.Anoptional `pivot` parameter can be supplied as the local
transformation pointfor the instance.

从给定的参数中创建一个转换矩阵，使用与复制 SOP 用于转换的方法相同的

The function supports two methods for setting rotation. The first
methodrequires an explicit `up` vector, which should be tangent to `N`.
This`up` vector, along with `N`, is used to construct an orthonormal framein
which the rotation takes place.The second method uses an explicit orientation
relative to the XYZ axisto construct the frame.

使用与 Copy SOP 相同的方法来转换其
