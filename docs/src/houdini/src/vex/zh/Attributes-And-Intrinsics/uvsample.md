---
title: uvsample
order: 77
category:
  - vex
---

这个函数使用 UV 属性的 UV 来指定位置。要使用*内在的原始 UV*，请使用[primuv](primuv.html) () ("在某个参数(uvw)位置内插一个属性的值。")代替。

`<type> uvsample(<geometry>geometry, string attr_name, string uv_attr_name, vector uvw)`

`<type>[] uvsample(<geometry>geometry, string attr_name, string uv_attr_name, vector uvw)`

`<type> uvsample(<geometry>geometry, string primgroup, string attr_name, string uv_attr_name, vector uvw)`

`<type>[] uvsample(<geometry>geometry, string primgroup, string attr_name, string uv_attr_name, vector uvw)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`primgroup`

基元组的名称或用于生成基元组的模式。使用与 SOP 组相同的语义，因此空字符串将匹配所有基元。也可以使用像`@Cd.x>0`这样的属性组，但注意`@`可能需要在Snippet VOP（"运行一个 VEX 片段来修改传入值。"）。

`attr_name`

要采样的点或顶点属性的名称。对于基元属性，其值取自给定 UV 下的基元。**对于点和顶点属性，给定的 UV 坐标处的值将从周围的点/顶点插值**。这些值取自具有此名称的属性存在的 "最低 "级别。

这必须是一个 3-float 属性。

`uv_attr_name`

包含 UVs 的点或顶点属性的名称。Houdini 创建的默认 UV 是在一个名为 "uv "的属性中。这个命名的属性可以是任何矢量类型的 2D（UV）或 3D（UVW）。

`uvw`

在 UV(W)空间中，对属性进行采样的位置。

## See also

- [primuv](primuv.html)
- [prim_attribute](prim_attribute.html)

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
