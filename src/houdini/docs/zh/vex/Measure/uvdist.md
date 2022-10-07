---
title: uvdist
order: 19
category:
  - vex
---

`float uvdist(<geometry>geometry, string uvname, vector uv, int &prim, vector &primuv)`

`float uvdist(<geometry>geometry, string uvname, vector uv, int &prim, vector &primuv, float maxdist)`

`float uvdist(<geometry>geometry, string primgroup, string uvname, vector uv, int &prim, vector &primuv)`

`float uvdist(<geometry>geometry, string primgroup, string uvname, vector uv, int &prim, vector &primuv, float maxdist)`

Returns the distance to the closest uv coordinate on the geometry in uv space. This will find
positions on the surfaces of the geometry, not just point positions.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`primgroup`

The name of a primitive group or a pattern to generate a primitive
group. Uses the same semantics as a SOP group, so empty strings
will match all primitives. Attribute groups like `@Cd.x>0` can
also be used, but note that the `@` may need to be escaped with
a backslash in a [![](../../icons/COMMON/wrangle.svg)Snippet VOP](../../nodes/vop/snippet.html "Runs a VEX snippet to modify the incoming values.").

`uvname`

The name of a point or vertex attribute on the geometry to
use as the uv space. The geometry will be unwrapped inplace based
on this attribute.
The attribute can be a 2D UV, 3D UVW, but also any vector attribute.

`uv`

The position in uv space to find the closest position on the geometry to.

`prim`

The number of the closest primitive. -1 if no primitive found.

`primuv`

The primitive uv coordinates the closest primitive. The `primuv` function
can be used to evaluate attributes at that location.

`maxdist`

The maximum distance to search in uv space. The operation can be sped up if it
is allowed to quit early.


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
texture

[colormap](colormap.html)

[environment](environment.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[photonmap](photonmap.html)

[rawcolormap](rawcolormap.html)

[texprintf](texprintf.html)

[uvdist](uvdist.html)
