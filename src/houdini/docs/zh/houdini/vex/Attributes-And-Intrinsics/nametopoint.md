---
title: nametopoint
order: 31
category:
  - houdini
---
    
## 描述

Finds a point by its name attribute.

```c
int  nametopoint(<geometry>geometry, string name)
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

The number of the point with the given value in the `name` attribute. Returns
`-1` if no primitive has the given ID, or if the geometry has no `name`
attribute.

在 thename 属性中具有给定值的点的编号。如果没有基元具有给定的 ID，或者如果几何体具有非名称属性，则返回 1。

To look up a primitive by its `id` attribute value, use
[idtoprim](idtoprim.html "Finds a primitive by its id attribute."). To look up
a point by an arbitrary string or int attribute value, use
[findattribval](findattribval.html "Finds a primitive/point/vertex that has a
certain attribute value.").

要通过它的侧面属性值来查找一个基元，请使用 idtoprim。要通过一个任意的字符串或 int 属性值来查找一个点，请使用 efindattribval。
