---
title: findattribval
order: 20
category:
  - houdini
---
    
## 描述

Finds a primitive/point/vertex that has a certain attribute value.

`int findattribval(<geometry>geometry, string attribclass, string attribute_name, int|stringvalue, int which=0)`

`int [] findattribval(<geometry>geometry, string attribclass, string attribute_name, int|stringvalue)`

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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 op:/path/to/sopreference。

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

细节"（或 "全局"）、"点"、"底层 "或 "顶点 "中的一个。

```c
`attribute_name
```

`

The name of the attribute to read.

要读取的属性的名称。

`value`

The value to look for in the attribute.

要在该属性中寻找的值。

`which`

If multiple elements have the given value in the attribute, this controls
which match to return.

如果多个元素在属性中都有给定的值，这将控制返回哪个匹配。

If you're searching for multiple elements with the same attribute value, you
can use [findattribvalcount](findattribvalcount.html "Returns number of
elements where an integer or string attribute has a certain value.") to get
the total number of matches and then iterate through them by increasing the
`which` argument to this function in a loop. See the examples below.The array
signature can also be used to return a list of all of the matching elements.

如果你正在搜索具有相同属性值的多个元素，你可以使用 efindattribvalcount 来获得匹配的总数，然后通过在一个循环中增加这个函数的 which 参数来迭代它们。请看下面的例子。

Returns

The number of the first point/primitive/vertex where the named attribute
matches the given `value`. Returns `-1` if no element has the given attribute
value.The array signature returns the numbers of all of the
points/primitives/vertices where the named attribute matches the given
`value`.

数组签名也可以用来返回所有匹配元素的列表。

Tip

The most common use cases (finding an point/primitive by its `name` or `id`
attribute) have easier-to-use dedicated wrapper functions:
[nametopoint](nametopoint.html "Finds a point by its name attribute."),
[nametoprim](nametoprim.html "Finds a primitive by its name attribute."),
[idtopoint](idtopoint.html "Finds a point by its id attribute."), and
[idtoprim](idtoprim.html "Finds a primitive by its id attribute.").

指定属性与给定值匹配的第一个点/原始点/顶点的编号。如果没有元素具有给定的属性值，则返回-1。

- You can only search for integer or string values.

数组签名返回命名属性与给定值相匹配的所有点/基元/顶点的数字。

## Examples

Find the primitive with `@id` == 10

最常见的使用情况（通过其名称或 id 属性查找一个点/基元）有更容易使用的专用封装函数：nametopoint、nametoprim、idtopoint 和 idtoprim。

    int prim_num = findattribval(0, "prim", "id", 10);// Note: you can use idtoprim(0, 10) instead

Find all points with `@age` == 10

您只能搜索整数或字符串值。

    for (int point_num : findattribval(0, "point", "age", 10)){// ...do something with the point...}

Find all points with `@age` == 10, using
[findattribvalcount](findattribvalcount.html "Returns number of elements where
an integer or string attribute has a certain value.").

查找带有@id==10 的原始点

    int count = findattribvalcount(0, "point", "age", 10);int point_num;for (int i = 0; i < count; i++) {  point_num = findattribval(0, "point", "age", 10, i);  // ...do something with the point...}
