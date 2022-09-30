---
title: volumeindexv
order: 9
category:
  - houdini
---
    
## 描述

Gets the vector value of a specific voxel.

```c
vector  volumeindexv(<geometry>geometry, int primnum, vector voxel)
```

```c
vector  volumeindexv(<geometry>geometry, string volumename, vector voxel)
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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

Returns

The vector value of a specific voxel in a volume primitive.

体积基元中的特定体素的矢量值。

Returns 0 if `primnum` or `inputnum` is out of range, the geometry is invalid,
or the given primitive is not a vector volume primitive.

如果 primnum 或 inputnum 超出范围，几何体无效，或者给定的基元不是一个矢量体基元，则返回 0。
