---
title: volumesample
order: 12
category:
  - houdini
---
    
## 描述

Samples the volume primitive‘svalue.

```c
float  volumesample(<geometry>geometry, int primnum, vector pos)
```

```c
float  volumesample(<geometry>geometry, string volumename, vector pos)
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

The volume primitive‘ssampled value at the given position.Values between
voxels will be trilinearly interpolated.

体积基元在给定位置的采样值。 体素之间的值将被三线插值。

Returns 0 if `primnum` or `inputnum` is out of range, the geometry is invalid,
or the given primitive is not a volume or vdb primitive.

如果 primnum 或 inputnum 超出范围，几何图形无效，或者给定的基元不是一个体积或 vdb 基元，则返回 0。

![](../../images/vex/volumesample.png)

Example of interpolation of one and two dimensional data using `volumesample`.
The visualized normal is computed using the

```c
volumegradient
```

function.

使用 volumesample 对一维和二维数据进行插值的示例。使用 volumegradient 函数来计算可视化的法线。
