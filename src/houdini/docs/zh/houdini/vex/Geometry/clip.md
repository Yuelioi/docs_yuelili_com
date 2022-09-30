---
title: clip
order: 4
category:
  - houdini
---
    
## 描述

Clip the line segment between p0 and p1.

```c
void  clip(int &result, vector &p0, vector &p1, vector4 plane)
```

clip the line segment against an arbitrary 3D plane specified by theplane
equation (plane.x*x + plane.y*y + plane.z\*z + plane.w).

将线段对着一个任意的三维平面进行剪裁，该平面由

```c
void  clip(int &result, vector &p0, vector &p1, vector min, vector max)
```

clip the line segment to the bounding box specified by the min and maxcorner
points.

平面方程式（plane.x*x + plane.y*y + plane.z\*z + plane.w）。

clip the line segment between p0 and p1.

将线段夹在由最小和最大角点指定的边界框内。

If the line is entirely clipped out of the result will be set to 0.otherwise,
the values p0 and p1 will be clipped to the constraintsspecified and the
result will be 1.

角点指定的包围盒。
