---
title: clip
order: 5
category:
  - vex
---

`void clip(int &result, vector &p0, vector &p1, vector4 plane)`

将线段对着一个由平面方程（plane.x\*x + plane.y\*y + plane.z\*z + plane.w）指定的任意三维平面进行剪辑。

`void clip(int &result, vector &p0, vector &p1, vector min, vector max)`

将线段夹在由最小和最大角点指定的边界框内。

夹住 p0 和 p1 之间的线段。

如果该行完全被剪掉，结果将被设置为 0。否则，值 p0 和 p1 将被剪到指定的约束条件，结果将是 1。

相交

[clip](clip.html)

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[planesphereintersect](planesphereintersect.html)

[predicate_incircle](predicate_incircle.html)

[predicate_insphere](predicate_insphere.html)

[primfind](primfind.html)

[uvintersect](uvintersect.html)
