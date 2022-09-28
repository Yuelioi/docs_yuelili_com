---
title: planepointdistance
order: 13
category:
  - houdini
---
    
## 描述

Computes the distance and closest point of a point to an infinite plane.

`float planepointdistance(vector plane_pos, vector plane_normal, vector point_pos, vector &intersect_pos)`

Given a 3D point `point_pos`, and a 3D plane with `plane_normal` normal vector
passing through a 3D point `plane_pos`, return the closest distance and
closest position between the plane and the point.

给定一个三维点\_pos，和一个通过三维点 plane_pos 的带 plane_normalnormal 矢量的三维平面，返回平面和点之间的最近距离和最近位置。
