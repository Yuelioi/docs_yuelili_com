---
title: clip
order: 5
category:
  - houdini
---

## Description

`void clip(int &result, vector &p0, vector &p1, vector4 plane)`

clip the line segment against an arbitrary 3D plane specified by the plane
equation (plane.x*x + plane.y*y + plane.z\*z + plane.w).

`void clip(int &result, vector &p0, vector &p1, vector min, vector max)`

clip the line segment to the bounding box specified by the min and max corner
points.

clip the line segment between p0 and p1.

If the line is entirely clipped out of the result will be set to 0. otherwise,
the values p0 and p1 will be clipped to the constraints specified and the
result will be 1.

### intersect

[clip](clip.html)

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[planesphereintersect](planesphereintersect.html)

[predicate_incircle](predicate_incircle.html)

[predicate_insphere](predicate_insphere.html)

[primfind](primfind.html)

[uvintersect](uvintersect.html)
