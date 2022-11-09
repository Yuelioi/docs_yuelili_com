---
title: planesphereintersect
order: 42
category:
  - vex
---

`int planesphereintersect(vector plane_pos, vector plane_normal, vector sphere_pos, float sphere_radius, vector &intersect_pos, float &intersect_radius, float &intersect_distance)`

Given a 3D sphere centered at `sphere_pos` with a `sphere_radius` radius, and a 3D plane with `plane_normal` normal vector passing through a 3D point `plane_pos`, return 1 if there is an intersection or 0 if there isn’t.

The intersection is most often a 2D circle on the intersecting plane centered at `intersect_pos` with a `intersect_radius` radius. It can also be a single point, in which case `intersect radius` is set to 0.
The distance between the `sphere_pos` and the `intersect_pos` is returned even when there is no intersection.

intersect

[clip](clip.html)

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[planesphereintersect](planesphereintersect.html)

[predicate_incircle](predicate_incircle.html)

[predicate_insphere](predicate_insphere.html)

[primfind](primfind.html)

[uvintersect](uvintersect.html)
