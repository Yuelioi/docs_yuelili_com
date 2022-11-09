---
title: curvearclen
order: 14
category:
  - vex
---

Since

18.5

`float curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order)`

`float curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order, int divs)`

`float curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order, int divs, int primuvmode)`

`float curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order, int divs, int primuvmode, float primuvtol)`

Returns the arc length between two parametric UV coordinates on a given primitive. This lets you measure the distance across a polygon face or along a curve.

## Arguments

`geometry`

A string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`points`

The array of control points to define the curve.

`uv1`

The start coordinate in the primitive’s parametric space to measure between.

`uv2`

The end coordinate in the primitive’s parametric space to measure between.

`closedflag`

The curve can be closed or open. In a closed curve, the last control point will be connected to the first one.

`fmt`

The curve type to create. You can used constants defined in math.h, or 0 to create a polygon curve, 1 to create a bezier curve or 2 to create a NURBS curve.

`order`

The curve order for NURBS or Bezier curves. This is ignored for polygon curves.

`divs`

The number of divisions per segment to use or 10 if not supplied.

`primuvmode`

Define the uv1 and uv2 coordinates units. See [primuvconvert](primuvconvert.html) ("Convert parametric UV locations on curve primitives between different spaces.") for the list of modes.

`primuvtol`

A tolerance used when computing the curve length to do uv coordinates conversions.

## See also

- [primarclen](primarclen.html)
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
