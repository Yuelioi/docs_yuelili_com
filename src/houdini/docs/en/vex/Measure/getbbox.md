---
title: getbbox
order: 4
category:
  - houdini
---

## Description

`void getbbox(<geometry>geometry, vector &min, vector &max)`

Sets the vectors to the minimum and maximum corners of the bounding box for
the geometry. This outputs the primitive bounding box, which includes the
extents of spheres and volumes.

`void getbbox(<geometry>geometry, string primgroup, vector &min, vector &max)`

Outputs the bounding box of the primitive in the given group. An empty
primgroup string will include all primitives. The string supports Ad-hoc
patterns like `0-10` and `@Cd.x>0`.

`void getbbox(vector &min, vector &max)`

Warning

This form of `getbbox` is deprecated and may be removed in the future. Use the
other forms as needed.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

## See also

- [getbbox_center](getbbox_center.html)
- [getbbox_max](getbbox_max.html)
- [getbbox_min](getbbox_min.html)
- [getbbox_size](getbbox_size.html)
- [getpointbbox](getpointbbox.html)

### bbox

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

[relbbox](relbbox.html)

[relpointbbox](relpointbbox.html)

[texture3dBox](texture3dBox.html)

### measure

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
