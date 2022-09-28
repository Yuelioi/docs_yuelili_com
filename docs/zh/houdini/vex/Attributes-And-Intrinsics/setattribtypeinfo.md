---
title: setattribtypeinfo
order: 56
category:
  - houdini
---
    
## 描述

Sets the meaning of an attribute in geometry.

`int setattribtypeinfo(int geohandle, string attribclass, string name, string typeinfo)`

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用来允许写到其他几何体。)

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

详细"（或 "全局"）、"点"、"底层 "或 "顶点 "中的一个。

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read
from groups](../groups.html "You can read the contents of
primitive/point/vertex groups in VEX as if they were attributes.").

你也可以使用 "primgroup"、"pointgroup "或 "vertexgroup "来从组中读取。

`name`

The name of the attribute for which to change the transformation info.

要改变转换信息的属性的名称。

`typeinfo`

The meaning of the attribute, which is used by transform nodes to determine
how to modify the attribute. It is one of:

属性的含义，它被转换节点用来确定如何修改属性。它是其中之一。

`"none"`

|

Don‘t transform.

不要变换。

---|---

`"point"`

|

Apply scales, rotations, and transformations.

应用缩放、旋转和变换。

`"hpoint"`

|

Apply scales, rotations, and transformations to this vector4.

对这个矢量应用缩放、旋转和变换 4。

`"vector"`

|

Apply scales and rotations, but not transformations.

应用缩放和旋转，但不转换。

`"normal"`

|

Apply rotations, apply scales with inverse-transpose.

应用旋转，应用逆向变换的比例。

`"color"`

|

Don‘t transform.

不要变换。

`"matrix"`

|

Apply scales, rotations, and transformations to this matrix.

对这个矩阵应用缩放、旋转和变换。

`"quaternion"`

|

Apply rotations.

应用旋转。

`"indexpair"`

|

Don‘t transform.

不要变换。

`"integer"`

|

Do not blend this value when points are averaged.

当点的平均值时，不要混合这个值。

```c
"integer-blend"
```

|

Integer values that blend when points are averaged.

当点被平均时，混合的整数值。

```c
"texturecoord"
```

|

Don‘t transform, and try to preserve seams when interpolating.Attributes
with this type will show up in the UV viewport menu.

不要变换，并在插值时尽量保留接缝。
