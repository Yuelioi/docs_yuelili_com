---
title: getbounds
order: 9
category:
  - houdini
---

## Description

`int getbounds(string filename, vector &min, vector &max)`

`int getbounds(string filename, string group, vector &min, vector &max)`

Returns the bounding box of the geometry specified by the filename. The point
corresponding to the minimum corner of the bounding box will be returned in
min, while the maximum will be in max. Always returns 1.

If a group is specified, only primitives in that group will be used. The group
field’s behavior matches that in SOPs. An empty string will include all
primitives. Ad-hoc patterns like `0-10` and `@Cd.x>0` are also valid.

The `getbbox()` function should likely be used instead.

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
