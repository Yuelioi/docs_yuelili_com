---
title: primuvconvert
order: 56
category:
  - vex
---

`vector2 primuvconvert(<geometry>geometry, vector2 uv, int prim\_num, int mode)`

`vector2 primuvconvert(<geometry>geometry, vector2 uv, int prim\_num, int mode, float tolerance)`

`float primuvconvert(<geometry>geometry, float uv, int prim\_num, int mode)`

`float primuvconvert(<geometry>geometry, float uv, int prim\_num, int mode, float tolerance)`

## Arguments

`geometry`

一个字符串，指定要读取的几何文件（例如，".bgeo"）。当在 Houdini 内部运行时，这可以是一个`op:/path/to/sop`的引用。

`uv`

要转换的曲线坐标。可以是一个浮点数或一个向量 2。该函数返回转换后的坐标。

`prim_num`

要转换坐标的曲线的原始编号。

`mode`

下面列出的`PRIMUV_space_TO_space`常量中的一个。你可以从`$HFS/houdini/vex/include/math.h`导入这些常量。

REAL 域是基于曲线段的数量（0 到`nSegments`）。一个段可以根据曲线的程度容纳多个控制点。`UNIT`域是归一化的 REAL 域，适合于 0 到 1。`UNITLEN`域根据曲线的长度来映射曲线，但要归一化（0...1）。`LEN`域根据曲线的长度（0...`CurveLength`）来映射曲线。

| 常数名称 Int 值 | --- -- --| primuv_real_to_unit 0 | primuv_real_to_unitlen 1 | primuv_real_to_len 2 | primuv_unit_to_real 3 | primuv_unit_to_unitlen 4 | primuv_unit_to_len 5primuv_unitlen_to_real 6 | primuv_unitlen_to_unit 7 | primuv_unitlen_to_len 8 | primuv_len_to_real 9 | primuv_len_to_unit 10 | primuv_len_to_unitlen 11

## See also

- [curvearclen](curvearclen.html)
- [primarclen](primarclen.html)

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
prim

[addprim](addprim.html)

[addprimattrib](addprimattrib.html)

[curvearclen](curvearclen.html)

[hasprimattrib](hasprimattrib.html)

[hedge_prim](hedge_prim.html)

[idtoprim](idtoprim.html)

[inprimgroup](inprimgroup.html)

[nametoprim](nametoprim.html)

[nprimitives](nprimitives.html)

[nprimitivesgroup](nprimitivesgroup.html)

[pointprims](pointprims.html)

[prim](prim.html)

[prim_attribute](prim_attribute.html)

[prim_normal](prim_normal.html)

[primarclen](primarclen.html)

[primattrib](primattrib.html)

[primattribsize](primattribsize.html)

[primattribtype](primattribtype.html)

[primattribtypeinfo](primattribtypeinfo.html)

[primduv](primduv.html)

[primfind](primfind.html)

[primhedge](primhedge.html)

[priminteriorweights](priminteriorweights.html)

[primintrinsic](primintrinsic.html)

[primpoint](primpoint.html)

[primpoints](primpoints.html)

[primuv](primuv.html)

[primuvconvert](primuvconvert.html)

[primvertex](primvertex.html)

[primvertexcount](primvertexcount.html)

[primvertices](primvertices.html)

[removeprim](removeprim.html)

[setprimattrib](setprimattrib.html)

[setprimgroup](setprimgroup.html)

[setprimintrinsic](setprimintrinsic.html)

[setprimvertex](setprimvertex.html)

[vertexcurveparam](vertexcurveparam.html)

[vertexindex](vertexindex.html)

[vertexprim](vertexprim.html)

[vertexprimindex](vertexprimindex.html)
