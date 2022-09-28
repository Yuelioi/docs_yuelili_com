---
title: idtopoint
order: 29
category:
  - houdini
---
    
## 描述

Finds a point by its id attribute.

```c
int  idtopoint(<geometry>geometry, int id)
```

Returns the number of the point with the given value in the `id` attribute.
Returns `-1` if no point has the given ID.

返回具有 idattribute 中给定值的点的编号。如果没有点有给定的 ID，则返回-1。

If the geometry doesn‘t have an `id` attribute, point numbers are used as
ids.In this case, the function will return the given `id` value, unless it is
greater than the number of points in the source geometry, in which case the
function will return `-1`.

如果几何体没有 idattribute，则使用点的编号作为 id。
在这种情况下，该函数将返回给定的 id 值，除非它大于源几何体中的点的数量，在这种情况下，该函数将返回-1。

To look up a point by its `name` attribute value, use
[nametopoint](nametopoint.html "Finds a point by its name attribute."). To
look up a point by an arbitrary string or int attribute value, use
[findattribval](findattribval.html "Finds a primitive/point/vertex that has a
certain attribute value.").

要通过其名称属性值查找一个点，使用 enametopoint。要通过一个任意的字符串或 int 属性值查找一个点，使用 efindattribval。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。
