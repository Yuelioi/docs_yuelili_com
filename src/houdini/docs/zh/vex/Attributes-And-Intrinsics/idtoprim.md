---
title: idtoprim
order: 30
category:
  - houdini
---
    
## 描述

Finds a primitive by its id attribute.

```c
int  idtoprim(<geometry>geometry, int id)
```

Returns the number of the primitive with the given value in the `id`
attribute. Returns `-1` if no primitive has the given ID.

返回具有 idattribute 中给定值的基元的编号。如果没有基元有给定的 ID，则返回 1。

If the geometry doesn‘t have an `id` attribute, primitive numbers are used
as ids.In this case, the function will return the given `id` value, unless it
is greater than the number of points in the source geometry, in which case the
function will return `-1`.

如果几何体没有 idattribute，则使用基元编号作为 id。
在这种情况下，函数将返回给定的 id 值，除非它大于源几何体中的点的数目，在这种情况下，函数将返回 1。

To look up a primitive by its `name` attribute value, use
[nametoprim](nametoprim.html "Finds a primitive by its name attribute."). To
look up a primitive by an arbitrary string or int attribute value, use
[findattribval](findattribval.html "Finds a primitive/point/vertex that has a
certain attribute value.").

要按其名称属性值查找基元，请使用 enametoprim。要按任意字符串或 int 属性值查找基元，请使用 efindattribval。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

在节点的上下文中运行时（如 wrangle SOP），此参数可以是一个整数，代表要从中读取几何图形的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。
