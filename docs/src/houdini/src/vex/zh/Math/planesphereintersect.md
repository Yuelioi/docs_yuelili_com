---
title: planesphereintersect
order: 42
category:
  - vex
---

`int planesphereintersect(vector plane_pos, vector plane_normal, vector sphere_pos, float sphere_radius, vector &intersect_pos, float &intersect_radius, float &intersect_distance)`

给出一个以`sphere_pos`为中心、`sphere_radius`为半径的三维球体，和一个通过三维点`plane_pos`的`plane_normal`法线矢量的三维平面，如果有交集，返回 1，如果没有，返回 0。

交点通常是相交平面上以`intersect_pos`为中心的二维圆，半径为`intersect_radius`。它也可以是一个单点，在这种情况下，`intersect radius'被设置为0。即使没有交点，`sphere_pos'和`intersect_pos'之间的距离也会返回。

相交

[clip](clip.html)

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[planesphereintersect](planesphereintersect.html)

[predicate_incircle](predicate_incircle.html)

[predicate_insphere](predicate_insphere.html)

[primfind](primfind.html)

[uvintersect](uvintersect.html)
