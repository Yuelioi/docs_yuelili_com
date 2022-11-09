---
title: getattribute
order: 24
category:
  - vex
---

`int getattribute(string geometry, <type>&value, string attribclass, string attribute_name, int element_number, int vertex_number)`

`int getattribute(string geometry, <type>&value[], string attribclass, string attribute_name, int element_number, int vertex_number)`

警告

这个函数不允许从节点上下文的输入中读取，而且比其他属性函数更难使用。你可能想用其他的属性函数来代替，比如[getattrib](getattrib.html)（"从几何图形中读取属性值，并进行有效性检查。"）。

如果属性不存在或不能被读取，返回 "0"，成功时返回 "1"。如果函数返回`0`（失败），给定的变量可能保持未初始化状态。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，`.bgeo'），以便从中读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`value`

要用属性值覆盖的变量。

`attribclass`

是 "细节"（或 "全局"）、"点"、"基元 "或 "顶点 "之一。

你也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取](.../groups.html)（"你可以在 VEX 中读取 primitive/point/vertex 组的内容，就像它们是属性一样。"）。

`attribute_name`

要读取的属性（或内在属性）的名称。

`element_number`

点或原始数。如果你正在读取一个细节属性，在这里使用`0`。

`vertex_number`

- 读取顶点属性时，可以在`element_number`参数中指定基元编号，并在此指定基元的顶点编号。
- 要使用线性顶点索引，请使用`-1`作为`元素_编号`，并在此使用顶点索引。
- 如果你不是在读取顶点属性，这个参数将被忽略。

## Examples



```c
vector pos, uv, clr;
// Get the position of point 3 in "defgeo.bgeo"
getattribute("defgeo.bgeo", pos, "point", "P", 3, 0);

// Get the value of the "uv" attribute for vertex 2 of primitive
// number 3 in the file defgeo.bgeo
getattribute("defgeo.bgeo", uv, "vertex", "uv", 3, 2);

// Get the value of the "Cd" attribute for primitive 7
// in the SOP specified by the path "/obj/geo1/color1" (Houdini
// only)
getattribute("op:/obj/geo1/color1", clr, "primitive", "Cd", 7);

```

## See also

- [getattrib](getattrib.html)
- [detailattrib](detailattrib.html)
- [primattrib](primattrib.html)
- [pointattrib](pointattrib.html)
- [vertexattrib](vertexattrib.html)

### attrib

[addattrib](addattrib.html)

[adddetailattrib](adddetailattrib.html)

[addpointattrib](addpointattrib.html)

[addprimattrib](addprimattrib.html)

[addvertexattrib](addvertexattrib.html)

[addvisualizer](addvisualizer.html)

[attrib](attrib.html)

[attribclass](attribclass.html)

[attribdataid](attribdataid.html)

[attribsize](attribsize.html)

[attribtype](attribtype.html)

[attribtypeinfo](attribtypeinfo.html)

[detail](detail.html)

[detailattrib](detailattrib.html)

[detailattribsize](detailattribsize.html)

[detailattribtype](detailattribtype.html)

[detailattribtypeinfo](detailattribtypeinfo.html)

[detailintrinsic](detailintrinsic.html)

[findattribval](findattribval.html)

[findattribvalcount](findattribvalcount.html)

[getattrib](getattrib.html)

[getattribute](getattribute.html)

[hasattrib](hasattrib.html)

[hasdetailattrib](hasdetailattrib.html)

[haspointattrib](haspointattrib.html)

[hasprimattrib](hasprimattrib.html)

[hasvertexattrib](hasvertexattrib.html)

[nuniqueval](nuniqueval.html)

[point](point.html)

[pointattrib](pointattrib.html)

[pointattribsize](pointattribsize.html)

[pointattribtype](pointattribtype.html)

[pointattribtypeinfo](pointattribtypeinfo.html)

[pointlocaltransforms](pointlocaltransforms.html)

[pointtransform](pointtransform.html)

[pointtransformrigid](pointtransformrigid.html)

[pointtransforms](pointtransforms.html)

[pointtransformsrigid](pointtransformsrigid.html)

[prim](prim.html)

[prim_attribute](prim_attribute.html)

[primattrib](primattrib.html)

[primattribsize](primattribsize.html)

[primattribtype](primattribtype.html)

[primattribtypeinfo](primattribtypeinfo.html)

[priminteriorweights](priminteriorweights.html)

[primintrinsic](primintrinsic.html)

[primuv](primuv.html)

[primuvconvert](primuvconvert.html)

[removedetailattrib](removedetailattrib.html)

[removepointattrib](removepointattrib.html)

[removeprimattrib](removeprimattrib.html)

[removevertexattrib](removevertexattrib.html)

[setattrib](setattrib.html)

[setattribtypeinfo](setattribtypeinfo.html)

[setdetailattrib](setdetailattrib.html)

[setpointattrib](setpointattrib.html)

[setpointlocaltransforms](setpointlocaltransforms.html)

[setpointtransform](setpointtransform.html)

[setpointtransforms](setpointtransforms.html)

[setprimattrib](setprimattrib.html)

[setvertexattrib](setvertexattrib.html)

[uniqueval](uniqueval.html)

[uniquevals](uniquevals.html)

[uvsample](uvsample.html)

[vertex](vertex.html)

[vertexattrib](vertexattrib.html)

[vertexattribsize](vertexattribsize.html)

[vertexattribtype](vertexattribtype.html)

[vertexattribtypeinfo](vertexattribtypeinfo.html)

|
donotuse

[getattribute](getattribute.html)
