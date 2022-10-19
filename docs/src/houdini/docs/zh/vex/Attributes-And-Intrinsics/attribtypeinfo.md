---
title: attribtypeinfo
order: 13
category:
  - vex
---

`string attribtypeinfo(<geometry>geometry, string attribclass, string attribute\_name)`

这种一般的形式让你在运行时指定 "类 "的属性。这对于编写可以在不同类上工作的一般代码来说是很有用的。如果你提前知道了属性类别，使用 [detailattribtypeinfo](detailattribtypeinfo.html) () ("返回一个几何属性的类型信息。"), [primattribtypeinfo](primattribtypeinfo.html) () ("返回一个几何属性的类型信息。"）、[pointattribtypeinfo](pointattribtypeinfo.html)（"返回一个几何属性的类型信息。"）或者[vertexattribtypeinfo](vertexattribtypeinfo.html)（"返回一个几何属性的类型信息。"）可能更快。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`attribclass`

是 "细节"（或 "全局"）、"点"、"基元 "或 "顶点 "之一。

你也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取]（.../groups.html）（"你可以在 VEX 中读取 primitive/point/vertex 组的内容，就像它们是属性一样。"）。

`attribute_name`

要读取的属性（或内在属性）的名称。

## Returns

表示给定几何属性的元数据的字符串，如果该属性不存在，则为空字符串（`""）。

`"无"`不要变换。| `"point"`应用缩放、旋转和变换。| `"hpoint"`对这个向量 4 应用缩放、旋转和变换。| `"vector"`应用缩放和旋转，但不应用变换。| `"法线"`应用旋转，用反转法应用缩放。| `"颜色"` 不要变换。| `"矩阵"` 对这个矩阵应用缩放、旋转和变换。| `"四元数"`应用旋转。| `"indexpair"`不要变换。| `"整数"`在对点进行平均时不要混合这个值。| `"integer-blend"`当点被平均化时，整数值被混合。| `"texturecoord"` 不要变换，在插值时尽量保留接缝。具有这种类型的属性将显示在 UV 视口菜单中。

附注

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
