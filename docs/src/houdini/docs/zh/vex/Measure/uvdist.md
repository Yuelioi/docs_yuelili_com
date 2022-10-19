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

返回几何体上最近的 uv 坐标在 uv 空间的距离。这将找到几何体表面上的位置，而不仅仅是点的位置。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`primgroup`

基元组的名称或用于生成基元组的模式。使用与 SOP 组相同的语义，因此空字符串将匹配所有基元。也可以使用像`@Cd.x>0`这样的属性组，但注意`@`可能需要在(Snippet VOP](././nodes/vop/snippet.html)（"运行一个 VEX 片段来修改传入值。"）。

`uvname`

几何体上的点或顶点属性的名称，作为 uv 空间使用。几何体将根据这个属性被就地解包。该属性可以是 2D UV、3D UVW，也可以是任何矢量属性。

`uv`

在 uv 空间中寻找几何体上最接近的位置。

`prim`

最接近的基元的编号。如果没有找到基元，则为-1。

`primuv`

基元 uv 的坐标是最接近的基元。可以使用`primuv`函数来评估该位置的属性。

`maxdist`

在 uv 空间中搜索的最大距离。如果允许提前退出，可以加快操作的速度。

衡量

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

| 纹理

[colormap](colormap.html)

[environment](environment.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[photonmap](photonmap.html)

[rawcolormap](rawcolormap.html)

[texprintf](texprintf.html)

[uvdist](uvdist.html)
