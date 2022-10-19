---
title: primduv
order: 52
category:
  - vex
---

`vector primduv(string geometry, int prim\_number, vector2 uv, int du, int dv)`

## Arguments

`geometry`

一个字符串，指定要读取的几何文件（例如，".bgeo"）。当在 Houdini 内部运行时，这可以是一个`op:/path/to/sop`的引用。

`prim_number`

要测量导数的基元的编号。

`uv`

基元上的参数坐标，用于测量导数。

`du`, `dv`

表示要查询的派生顺序。

在一条曲线上，曲线的方向由`du==1`给出，曲率由`du==2`给出。

这只适用于 NURBS 和贝塞尔曲线基元。

du 目前被忽略了，因为它是为了与参数化的表面一起工作。

## See also

- [getderiv](getderiv.html)
- [Du](Du.html)
- [Dv](Dv.html)

|
deriv

[Du](Du.html)

[Dw](Dw.html)

[primduv](primduv.html)

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
