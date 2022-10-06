---
title: attribdataid
order: 9
category:
  - houdini
---
    
## 描述

Returns the data id of a geometry attribute.

| Since | 17.0 |
| ----- | ---- |

`int [] attribdataid(<geometry>geometry, string attribclass, string attribute_name)`

Returns the data id corresponding to an attribute.Data ids canbe used for
advanced forms of caching.If the data id of an attributeis the same as you've
seen before, you can assume the attributecontains the same data it did
before.This allows accelerationstructures to only be built when necessary.

返回一个属性所对应的数据 ID。 数据 ID 可以

The length and contents of the array are not defined, and no assumptionsshould
be made about the layout.The result will vary from runto run of Houdini, so
only exact equality should be used.

可用于高级形式的缓存。 如果一个属性的数据 ID

In addition to the normal attribute classes, an additionalattribute class of
“meta” is supported.This has the additionaldata ids of

和你以前看到的一样，你可以认为该属性的

topology

The overall wiring of vertices, points and primitives.This will change if any
points are rewired or verticesadded.

包含与之前相同的数据。 这允许加速

primitivelist

This data id changes if the contents of the primitivechange at all.

结构只在必要时被建立。

detail

This data id tracks the entire geometry as a whole.Ifit is unchanged, no
changes occurred in the geometry.

数组的长度和内容没有被定义，也不应该对布局进行假设。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

不应该对布局做出假设。 其结果会因胡迪尼的运行

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

的结果会有所不同，所以只应使用精确的相等。

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

除了正常的属性类之外，还有一个额外的

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read
from groups](../groups.html "You can read the contents of
primitive/point/vertex groups in VEX as if they were attributes.").

属性类，还支持 "元 "属性类。 这有额外的

```c
`attribute_name
```

`

The name of the attribute (or intrinsic) to read.

的数据 id。

Returns

An integer array indicating the data id of the attribute.

顶点、点和基元的整体布线。
