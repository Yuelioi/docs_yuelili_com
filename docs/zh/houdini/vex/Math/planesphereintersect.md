---
title: planesphereintersect
order: 38
category:
  - houdini
---
    
## 描述

Computes the intersection of a 3D sphere and an infinite 3D plane.

`int planesphereintersect(vector plane_pos, vector plane_normal, vector sphere_pos, float sphere_radius, vector &intersect_pos, float &intersect_radius, float &intersect_distance)`

Given a 3D sphere centered at `sphere_pos` with a `sphere_radius` radius, and
a 3D plane with `plane_normal` normal vector passing through a 3D point
`plane_pos`, return 1 if there is an intersection or 0 if there isn‘t.

给出一个以 tsphere_pos 为中心、半径为 asphere_radiusradius 的三维球体，和一个通过三维点 plane_pos 的带有 plane_normalnormal 矢量的三维平面，如果有交点，返回 1，如果没有，返回 0。

The intersection is most often a 2D circle on the intersecting plane centered
at `intersect_pos` with a

```c
intersect_radius
```

radius. It can also be a single
point, in which case

```c
intersect radius
```

is set to 0.The distance between the
`sphere_pos` and the `intersect_pos` is returned even when there is no
intersection.

交点通常是以 intersect_pos 为中心，以 intersect_radiusradius 为中心的相交平面上的一个二维圆。它也可以是一个单点，在这种情况下，交点半径被设置为 0。
