---
title: getbbox_min
order: 5
category:
  - houdini
---
    
## 描述

Returns the minimum of the bounding box for the geometry.

```c
vector  getbbox_min(<geometry>geometry)
```

Computes the minimum of the bounding box for the geometry.

计算几何体的包围盒的最小值。

```c
vector  getbbox_min(<geometry>geometry, string primgroup)
```

Computes the minimum of the bounding box of the primitives in the given group.

计算给定组中的基元的边界盒的最小值。

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
