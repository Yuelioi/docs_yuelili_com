---
title: relpointbbox
order: 15
category:
  - houdini
---
    
## 描述

Returns the relative position of the point given with respect to the bounding
box of the geometry.

```c
vector  relpointbbox(<geometry>geometry, vector position)
```

Returns the relative position of the point given with respect to thebounding
box of the points in the geometry.

返回给定点的相对位置，相对于几何体中的点的包围盒而言。

```c
vector  relpointbbox(<geometry>geometry, string pointgroup, vector position)
```

Use the bounding box of the primitives in the named point group.

几何图形中的点的包围盒。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

使用命名的点组中的基元的边界盒。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。
