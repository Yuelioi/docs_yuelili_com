---
title: relbbox
order: 14
category:
  - houdini
---
    
## 描述

Returns the relative position of the point given with respect to the bounding
box of the geometry.

```c
vector  relbbox(<geometry>geometry, vector position)
```

Returns the relative position of the point given with respect to thebounding
box of the primitives in the geometry.

返回给定的点相对于几何体中的基元包围盒的相对位置。

```c
vector  relbbox(<geometry>geometry, string primgroup, vector position)
```

Use the bounding box of the primitives in the named primitive group.

边界盒的相对位置。

```c
vector  relbbox(vector position)
```

Warning

This form of `relbbox` is deprecated and may be removed in the future. Use the
other forms as needed.

使用命名的基元组中的基元的包围盒。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

这种形式的边界框已被废弃，将来可能会被删除。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

根据需要使用其它形式。
