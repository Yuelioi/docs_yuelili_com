---
title: volumevoxeldiameter
order: 16
category:
  - houdini
---
    
## 描述

Computes the approximate diameter of a voxel.

```c
float  volumevoxeldiameter(<geometry>geometry, int primnum)
```

```c
float  volumevoxeldiameter(<geometry>geometry, string primname)
```

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。

Returns

The diameter of a voxel in the given primitive.To find the length of a side of
a voxel, divide by `sqrt(3)`.

给定基元中一个体素的直径。

Returns 0 if `primnum` or `inputnum` is out of range, the geometry is invalid,
or the given primitive is not a vector volume primitive.

要查找体素的边长，请除以 ysqrt(3)。
