---
title: primarclen
order: 47
category:
  - vex
---

`float primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num)`

`float primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num, int divs)`

`float primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num, int divs, int primuvmode)`

`float primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num, int divs, int primuvmode, float primuvtol)`

返回给定基元上两个参数化 UV 坐标之间的弧长。这可以让您测量跨越多边形面或沿曲线的距离。

## Arguments

`geometry`

一个字符串，指定要读取的几何文件（例如，".bgeo"）。当在 Houdini 内部运行时，这可以是一个`op:/path/to/sop`的引用。

`uv1`

基元的参数空间中要测量的起始坐标。

`uv2`

基元的参数空间中要测量的末端坐标。

`prim_num`

要测量距离的基元的编号。

`divs`

每段要使用的分割数，如果不提供则为 10。

`primuvmode`

定义 uv1 和 uv2 坐标单位。模式列表见 [primuvconvert](primuvconvert.html) () ("在不同空间之间转换曲线基元上的参数化 UV 位置。") 。

`primuvtol`

计算曲线长度时用于做 uv 坐标转换的公差。

::: tip

你也可以读取`arclength`原始的内在属性来获得曲线的总弧长。

## See also

- [curvearclen](curvearclen.html)
- [primuvconvert](primuvconvert.html)

|
measure

[curvearclen](curvearclen.html)

[distance](distance.html)

[distance2](distance2.html)

[getbbox](getbbox.html)

[getbbox_center](getbbox_center.html)

[getbbox_max](getbbox_max.html)

[getbbox_min](getbbox_min.html)

[getbbox_size](getbbox_size.html)

[getbounds](getbounds.html)

[getpointbbox](getpointbbox.html)

[getpointbbox_center](getpointbbox_center.html)

[getpointbbox_max](getpointbbox_max.html)

[getpointbbox_min](getpointbbox_min.html)

[getpointbbox_size](getpointbbox_size.html)

[length](length.html)

[length2](length2.html)

[mdensity](mdensity.html)

[pcfarthest](pcfarthest.html)

[planepointdistance](planepointdistance.html)

[predicate_orient2d](predicate_orient2d.html)

[predicate_orient3d](predicate_orient3d.html)

[primarclen](primarclen.html)

[qdistance](qdistance.html)

[relbbox](relbbox.html)

[relpointbbox](relpointbbox.html)

[surfacedist](surfacedist.html)

[uvdist](uvdist.html)

[xyzdist](xyzdist.html)

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
