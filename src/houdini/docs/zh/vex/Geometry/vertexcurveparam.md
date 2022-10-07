---
title: vertexcurveparam
order: 41
category:
  - vex
---

`float vertexcurveparam(<geometry>geometry, int linearindex)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`linearindex`

一个顶点的线性指数

## Returns

沿着基元的周长的参数化坐标。基元被假定为是一个多边形。这是在单位空间内（参见 [primuv](primuv.html) () （"在某个参数化 (uvw) 位置插值一个属性的值。"），了解参数空间的描述）。

对于开放的多边形（换句话说就是多边形曲线），返回的值可以直接使用[primuv](primuv.html)（"在某个参数（uvw）的位置插值一个属性的值。"）。它的范围是`[0,1]`。

对于封闭的多边形，其值在`[0, (numvtx-1)/numvtx]`的范围内，所以没有值为 1 的顶点。该值不能直接用于[primuv](primuv.html)（"插值某个参数（uvw）位置的属性值。"），但在你需要一个围绕多边形周长的归一化值时可能很有用。

## Examples



这大致相当于以下代码。

```c
int closed = primintrinsic(0, "closed", @primnum);
float u = float(vertexprimindex(opname, @vtxnum)) / (closed ? @numvtx : @numvtx-1);

```

Look up a ramp using the current point’s location on the curve:

```c
// Find the curve parameter of the current vertex and use it
// to look up a ramp parameter.
// Note that @vtxnum also works when iterating over points.
float u = vertexcurveparam(0, @vtxnum);
// convert to unitlen space, to correct for points unevenly distributed along
// the curve
u = primuvconvert(0, u, @primnum, PRIMUV\_UNIT\_TO\_UNITLEN);
@width = chramp("width", u);

```

Look up an attribute on another curve, at the equivalent location. This
corrects for unevenly distributed points on either curve.

```c
// Note that @vtxnum also works when iterating over points.
float u = vertexcurveparam(0, @vtxnum);
// convert to unit length space, to correct for points unevenly distributed
// along the curve
u = primuvconvert(0, u, @primnum, PRIMUV\_UNIT\_TO\_UNITLEN);

// convert back to unit space on another curve. We're using the equivalent
// curve in the second input.
int otherinput = 1;
int otherprim = @primnum;
u = primuvconvert(otherinput, u, otherprim, PRIMUV\_UNITLEN\_TO\_UNIT);

// look up the value using the correct u coordinate.
@P = primuv(otherinput, "P", otherprim, u);

```

## See also

- [vertexprim](vertexprim.html)
- [vertexindex](vertexindex.html)

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

|
vertex

[addvertex](addvertex.html)

[addvertexattrib](addvertexattrib.html)

[hasvertexattrib](hasvertexattrib.html)

[hedge_postdstvertex](hedge_postdstvertex.html)

[hex_faceindex](hex_faceindex.html)

[invertexgroup](invertexgroup.html)

[nvertices](nvertices.html)

[nverticesgroup](nverticesgroup.html)

[osd_limitsurfacevertex](osd_limitsurfacevertex.html)

[pointvertex](pointvertex.html)

[pointvertices](pointvertices.html)

[primvertex](primvertex.html)

[primvertexcount](primvertexcount.html)

[primvertices](primvertices.html)

[removevertex](removevertex.html)

[removevertexattrib](removevertexattrib.html)

[removevertexgroup](removevertexgroup.html)

[setprimvertex](setprimvertex.html)

[setvertexattrib](setvertexattrib.html)

[setvertexgroup](setvertexgroup.html)

[setvertexpoint](setvertexpoint.html)

[tet_faceindex](tet_faceindex.html)

[vertex](vertex.html)

[vertexattrib](vertexattrib.html)

[vertexattribsize](vertexattribsize.html)

[vertexattribtype](vertexattribtype.html)

[vertexattribtypeinfo](vertexattribtypeinfo.html)

[vertexcurveparam](vertexcurveparam.html)

[vertexhedge](vertexhedge.html)

[vertexindex](vertexindex.html)

[vertexnext](vertexnext.html)

[vertexpoint](vertexpoint.html)

[vertexprev](vertexprev.html)

[vertexprim](vertexprim.html)

[vertexprimindex](vertexprimindex.html)
