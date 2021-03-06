## 描述

Returns the size of the bounding box for the geometry.


```c
vector  getpointbbox_size(<geometry>geometry)
```



```c
vector  getpointbbox_size(<geometry>geometry, string pointgroup)
```


This is the same as [getbbox_size](getbbox_size.html "Returns the size of the
bounding box for the geometry.") except it only computes the bounding box of
the _points_. So if a primitive has extents that don‘t have points (for
example, the boundary of a primitive sphere), they will not be included in the
box.

这与getb_sizee相同，但它只计算点的边界框。因此，如果一个基元有没有点的外延（例如，基元球体的边界），它们就不会被包括在框内。

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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在Houdini内部运行时，这个参数可以是anop:/path/to/sopreference。

