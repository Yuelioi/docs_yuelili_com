---
title: uvintersect
order: 40
category:
  - vex
---

`int uvintersect(<geometry>geometry, string uvname, vector orig, vector dir, vector &pos, vector &primuv)`

`int uvintersect(<geometry>geometry, string primgroup, string uvname, vector orig, vector dir, vector &pos, vector &primuv)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，`.bgeo'），以便从中读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`primgroup`

基元组的名称或用于生成基元组的模式。使用与 SOP 组相同的语义，因此空字符串将匹配所有基元。也可以使用像`@Cd.x>0`这样的属性组，但注意`@`可能需要在(Snippet VOP](././nodes/vop/snippet.html)（"运行一个 VEX 片段来修改传入值。"）。

此函数计算指定射线与 uv 空间中的几何体的交点。返回原始数字，如果有错误或没有发现交集，则返回-1。

交点位置在 uv 空间中的位置存储在 p 中，交点的相应参数位置存储在 primuv 中。在有多个交点的情况下，使用最接近射线原点的交点。

这个函数并不期望有一个归一化的方向向量。相反，它使用矢量的长度作为最大距离。整数的结果是原始命中。

::: info Note

在三维 UV 空间中，要直观地看到射线的三维交点可能是很困难的。可以使用的一个技巧是在 SOP 中解包几何体以获得更好的空间可视化。这可以通过使用[Split Vertex SOP]Attribute Copy SOP](.../.../nodes/sop/attribcopy.html) ("在顶点组、点或原素之间复制属性。")实现。这将断开 uv 边界的面，并将 uvw 值印在`P`属性之上。

::: info Note

对元宝几何体进行交集时，不可能确定被击中的元宝的基元数目。在这种情况下，该函数会返回相交几何体中的基元数目。

相交

[clip](clip.html)

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[planesphereintersect](planesphereintersect.html)

[predicate_incircle](predicate_incircle.html)

[predicate_insphere](predicate_insphere.html)

[primfind](primfind.html)

[uvintersect](uvintersect.html)

|射线

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[metamarch](metamarch.html)

[uvintersect](uvintersect.html)
