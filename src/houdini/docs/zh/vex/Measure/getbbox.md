---
title: getbbox
order: 2
category:
  - houdini
---
    
## 描述

Sets two vectors to the minimum and maximum corners of the bounding box for
the geometry.

```c
void  getbbox(<geometry>geometry, vector &min, vector &max)
```

Sets the vectors to the minimum and maximum corners of the bounding boxfor the
geometry. This outputs the primitive bounding box, which includesthe extents
of spheres and volumes.

设置向量为几何体的包围盒的最小角和最大角

`void getbbox(<geometry>geometry, string primgroup, vector &min, vector &max)`

Outputs the bounding box of the primitive in the given group.An empty
primgroup string will include all primitives.The string supports Ad-hoc
patterns like `0-10` and `@Cd.x>0`.

的最小和最大角。 这将输出原始的边界盒，其中包括

```c
void  getbbox(vector &min, vector &max)
```

Warning

This form of `getbbox` is deprecated and may be removed in the future. Use the
other forms as needed.

球体和体积的外延。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

输出给定组中的基元的包围盒。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

一个空的 primgroup 字符串会包括所有基元。
