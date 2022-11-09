---
title: vertexcurveparam
order: 41
category:
  - vex
---

`float vertexcurveparam(<geometry>geometry, int linearindex)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`linearindex`

The linear index of a vertex

## Returns

The parametric coordinate along the perimeter of the primitive. The
primitive is assumed to be a polygon. This is in unit space (See
[primuv](primuv.html) ("Interpolates the value of an attribute at a certain parametric (uvw) position.") for a distription of parameter spaces).

For open polygons (polygon curves in other words), the returned value can
be used directly with [primuv](primuv.html) ("Interpolates the value of an attribute at a certain parametric (uvw) position."). It is in the range of `[0,1]`.

For closed polygons the value is in the range of `[0, (numvtx-1)/numvtx]`, so
there’s no vertex with value 1. The value cannot be used directly with
[primuv](primuv.html) ("Interpolates the value of an attribute at a certain parametric (uvw) position."), but may be useful wherever you need a normalized value around
the perimeter of a polygon.

##

Examples

[¶](#examples)

This is roughly equivalent to the following code:

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
u = primuvconvert(0, u, @primnum, PRIMUV_UNIT_TO_UNITLEN);
@width = chramp("width", u);

```

Look up an attribute on another curve, at the equivalent location. This
corrects for unevenly distributed points on either curve.

```c
// Note that @vtxnum also works when iterating over points.
float u = vertexcurveparam(0, @vtxnum);
// convert to unit length space, to correct for points unevenly distributed
// along the curve
u = primuvconvert(0, u, @primnum, PRIMUV_UNIT_TO_UNITLEN);

// convert back to unit space on another curve. We're using the equivalent
// curve in the second input.
int otherinput = 1;
int otherprim = @primnum;
u = primuvconvert(otherinput, u, otherprim, PRIMUV_UNITLEN_TO_UNIT);

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
