---
title: primfind
order: 27
category:
  - vex
---

`int [] primfind(<geometry>geometry, vector min, vector max)`

Find all the primitives whose bounding boxes overlap the given box.

`int [] primfind(<geometry>geometry, string group, vector min, vector max)`

Find all primitives in a group whose bounding boxes overlap the given box.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`min`, `max`

These vectors define the minimum and maximum corners of the bounding box to search.

`group`

If given, only match primitives in this group.
An empty group string will include all primitives.
The string supports Ad-hoc patterns like `0-10` and `@Cd.x>0`.

## Returns

An array of primitive numbers.

::: info Note

These functions are intended to be used as an optimization to finding primitives
in a particular area for processing. For instance, to find all the curves
from one input intersecting polygons on another input, we may naively iterate
over all polygons for each curve to determine their intersection. To speed this
process, we may find which primitives may intersect a particular curve using
these functions, and iterate solely over the potentially intersecting
primitives. This significantly improves performance since `primfind` uses an
underlying tree structure to speed up search.

## Examples

[¶](#examples)

Remove primitives that may be intersecting the unit box centered at the origin:

```c
int[] prims = primfind(geometry, {-0.5, -0.5, -0.5}, {0.5, 0.5, 0.5});
foreach ( int prim; prims )
{
 removeprim("primitives.bgeo", prim, 1);
}

```

Alternatively, we can use a query bounding box from an auxiliary source:

```c
vector min, max;
getbbox("bbox.bgeo", min, max);
int[] prims = primfind(geometry, min, max);
foreach ( int prim; prims )
{
 removeprim("primitives.bgeo", prim, 1);
}

```

To see the performance benefit of `primfind`, compare it to the following equivalent
implementation of the function above:

```c
float tol = 1e-5;
vector min, max;
getbbox("bbox.bgeo",min,max);
int n = nprimitives(0);
for ( int prim = 0; prim < n; ++prim )
{
 int[] verts = primvertices("primitives.bgeo", prim);

 // compute primitive bounding box and store it in prim\_min and prim\_max
 vector vert\_pos = point("primitives.bgeo", "P", vertexpoint("primitives.bgeo", verts[0]));
 vector prim\_min = vert\_pos, prim\_max = vert\_pos;
 for ( int v = 1; v < len(verts); ++v )
 {
 vert\_pos = point("primitives.bgeo", "P", vertexpoint("primitives.bgeo", verts[v]));
 prim\_min = min(prim\_min, vert\_pos);
 prim\_max = max(prim\_max, vert\_pos);
 }

 // bounding box intersection test
 if ( prim\_max.x - min.x < -tol ) continue;
 if ( prim\_max.y - min.y < -tol ) continue;
 if ( prim\_max.z - min.z < -tol ) continue;
 if ( prim\_min.x - max.x > tol ) continue;
 if ( prim\_min.y - max.y > tol ) continue;
 if ( prim\_min.z - max.z > tol ) continue;
 removeprim("primitives.bgeo", prim, 1);
}

```



## See also

- [getbbox](getbbox.html)
- [pcfind](pcfind.html)

|
intersect

[clip](clip.html)

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[planesphereintersect](planesphereintersect.html)

[predicate_incircle](predicate_incircle.html)

[predicate_insphere](predicate_insphere.html)

[primfind](primfind.html)

[uvintersect](uvintersect.html)

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
search

[findattribval](findattribval.html)

[findattribvalcount](findattribvalcount.html)

[idtopoint](idtopoint.html)

[idtoprim](idtoprim.html)

[intersect](intersect.html)

[nametopoint](nametopoint.html)

[nametoprim](nametoprim.html)

[nuniqueval](nuniqueval.html)

[primfind](primfind.html)

[uniqueval](uniqueval.html)

[uniquevals](uniquevals.html)
