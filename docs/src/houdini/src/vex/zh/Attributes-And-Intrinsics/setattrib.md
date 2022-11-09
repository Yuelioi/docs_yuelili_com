---
title: setattrib
order: 64
category:
  - vex
---

如果你提前知道属性类别，使用 [setdetailattrib](setdetailattrib.html) () （"在一个几何体中设置一个细节属性。"）， [setprimattrib](setprimattrib.html) （"在一个几何体中设置一个原始属性。"），[setpointattrib](setpointattrib.html) () （"在一个几何体中设置一个点属性。"），或者[setvertexattrib](setvertexattrib.html) （"在一个几何体中设置一个顶点属性。"）可能更快。

`int setattrib(int geohandle, string attribclass, string attribute_name, int element_num, int vertex_num, <type>value, string mode="set")`

`int setattrib(int geohandle, string attribclass, string attribute_name, int element_num, int vertex_num, <type>value[], string mode="set")`

成功时返回`geohandle'的值，失败时返回`-1'。

::: info Note

如果该属性不存在，该函数**创建的属性**的默认值为零、空字符串或空数组。如果你想控制一个数字属性的默认值，请在设置属性之前使用[addattrib](addattrib.html)（"为几何体添加一个属性。"）。

## Arguments

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](geoself.html) () ("返回当前几何体的句柄。")，这意味着当前节点中的几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

`attribclass`

是 "细节"（或 "全局"）、"点"、"基元 "或 "顶点 "之一。

你也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取](.../groups.html)（"你可以在 VEX 中读取 primitive/point/vertex 组的内容，就像它们是属性一样。"）。

`attribute_name`

要改变的属性的名称。

`element_num`

要改变属性的点或原点编号。

对于细节属性，将其设置为`0`（对于细节属性，该参数被忽略）。

对于顶点属性，将此设置为包含顶点的基元编号。

`vertex_num`

对于顶点属性，这是在`element_num`中指定的基元上的顶点的编号。

要使用线性顶点索引，将`element_num`设置为`-1`，并在此使用线性顶点索引。

对于其他细节、基元或点属性，将其设置为`0`（在这些情况下参数被忽略）。

`value`

要设置的值。如果这个参数的类型与属性类型不兼容，设置将失败，函数将返回`-1'。

::: info Note that within a VEX program only one type may be written to a single attribute. Ie, you cannot mix writes of float an integer. This can be surprising as a literal like `1` will be an integer write so be ignored if floats were previously written.

`mode`

(可选）如果给定，这将控制函数如何修改属性中的任何现有值。

`"set"`用给定的值覆盖该属性。| `"add"` 给属性添加值。| `"min", `"minimum"`将属性设置为其本身和值的最小值。|`"max", `"maximum"` 将属性设为其本身和数值的最大值。| `"mult"`, `"multiply"` 将属性值乘以数值。对于矩阵，这将做矩阵乘法。对于向量来说，是分量式的。| `"toggle"`切换属性，与源值无关。对于切换组的成员资格很有用。| `"append"` 对字符串和数组属性有效。将源值附加到原始值的末尾。

## See also

- [setattrib](setattrib.html)
- [setpointattrib](setpointattrib.html)
- [setvertexattrib](setvertexattrib.html)
- [setprimattrib](setprimattrib.html)

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
