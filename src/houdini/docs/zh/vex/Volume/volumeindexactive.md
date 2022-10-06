---
title: volumeindexactive
order: 6
category:
  - houdini
---
    
## 描述

Gets the active setting of a specific voxel.

| Since | 17.5 |
| ----- | ---- |

```c
int  volumeindexactive(<geometry>geometry, int primnum, vector voxel)
```

```c
int  volumeindexactive(<geometry>geometry, string volumename, vector voxel)
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

Whether a specific voxel in a volume primitive is active.

体积基元中的特定体素是否被激活。

While `volumesample` and `volumeindex` will always return values for any
location in space, the actual voxel array is only defined for a subset of
space.For volumes, this is a square grid. For VDBs, the shape of the active
area can be arbitrary.

虽然 volumesample 和 dvolumeindex 总是会返回空间中任何位置的值，但实际的体素阵列只为空间的一个子集定义。
对于体块来说，这是一个方形网格。对于 VDB 来说，活动区域的形状可以是任意的。

Returns 0 if `primnum` is out of range, the geometry is invalid, or the given
primitive is not a volume primitive.

如果 primnum 超出范围，几何体无效，或者给定的基元不是体积基元，则返回 0。
