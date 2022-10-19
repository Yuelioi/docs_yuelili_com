---
title: addattrib
order: 2
category:
  - vex
---

如果你提前知道你要添加的属性类别，使用 [adddetailattrib](adddetailattrib.html) () ("给几何体添加一个细节属性。"), [addprimattrib](addprimattrib.html) () ("给几何体添加一个原始属性。")html）（"给几何体添加一个基元属性。"），[addpointattrib](addpointattrib.html) ()（"给几何体添加一个点属性。"），或者[addvertexattrib](addvertexattrib.html)（"给几何体添加一个顶点属性。"）可能更快。

`int addattrib(int geohandle, string attribclass, string name, <type>defvalue)`

`int addattrib(int geohandle, string attribclass, string name, <type>defvalue[])`

## Arguments

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](geoself.html) () ("返回当前几何体的句柄。")，这意味着当前节点中的几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

`attribclass`

是 "细节"（或 "全局"）、"点"、"基元 "或 "顶点 "之一。

你也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取](.../groups.html)（"你可以在 VEX 中读取 primitive/point/vertex 组的内容，就像它们是属性一样。"）。

`name`

要创建的属性的名称。

`defvalue`

属性的默认值，决定了要创建的属性的类型。字符串和数组属性不能有默认值，所以在这些情况下只使用类型。

## Returns

成功时为 "geohandle"，失败时为"-1"。

- 如果一个同名的属性已经存在，该函数将尝试将其转换为新的类型。

## See also

- [adddetailattrib](adddetailattrib.html)
- [addprimattrib](addprimattrib.html)
- [addpointattrib](addpointattrib.html)
- [addvertexattrib](addvertexattrib.html)

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
