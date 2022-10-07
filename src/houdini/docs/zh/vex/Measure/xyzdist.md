---
title: xyzdist
order: 20
category:
  - vex
---

`float xyzdist(<geometry>geometry, vector origin)`

计算从原点到给定几何体上最近的位置的距离。

`float xyzdist(<geometry>geometry, vector origin, int &prim, vector &uv)`

`float xyzdist(<geometry>geometry, vector origin, int &prim, vector &uv, float maxdist)`

计算从原点到几何体上最近的位置的距离，并将最近的位置的基元数和 UV 坐标写入输出参数。

`float xyzdist(<geometry>geometry, string primgroup, vector origin)`

`float xyzdist(<geometry>geometry, string primgroup, vector origin, int &prim, vector &uv)`

`float xyzdist(<geometry>geometry, string primgroup, vector origin, int &prim, vector &uv, float maxdist)`

计算从原点到给定几何体上给定基元组中最近的位置的距离，并将最近的位置的基元编号和 UV 坐标写入输出参数。

::: info Note: Distances to packed primitives and sphere/tube/circle primitives with
非统一尺度可能不代表实际最近的点，因为最近的点是在未转换的空间中找到的。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`primgroup`

基元组的名称或用于生成基元组的模式。使用与 SOP 组相同的语义，因此空字符串将匹配所有基元。也可以使用像`@Cd.x>0`这样的属性组，但注意`@`可能需要在(Snippet VOP](././nodes/vop/snippet.html)（"运行一个 VEX 片段来修改传入值。"）。

`origin`

在空间中寻找几何体上最接近的位置。

`&prim`

该函数用最接近的基元的数字覆盖此变量，如果没有找到基元，则用`-1`覆盖。

`&uv`

该函数用最接近的基元上最接近的点的 UV 坐标来覆盖此变量。您可以使用 [primuv](primuv.html) () ("插值某个参数(uvw)位置的属性值。")来对这个位置的属性值进行采样。

`maxdist`

搜索的最大距离。指定这个可以通过允许它提前退出来加快函数的速度。

## Returns

从原点到几何体上最近的位置的距离。

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

| 靠近

[hex_adjacent](hex_adjacent.html)

[minpos](minpos.html)

[nearpoint](nearpoint.html)

[nearpoints](nearpoints.html)

[neighbour](neighbour.html)

[neighbourcount](neighbourcount.html)

[neighbours](neighbours.html)

[pccone](pccone.html)

[pccone_radius](pccone_radius.html)

[pcfarthest](pcfarthest.html)

[pcfind](pcfind.html)

[pcfind_radius](pcfind_radius.html)

[pcline](pcline.html)

[pcline_radius](pcline_radius.html)

[pcsegment](pcsegment.html)

[pcsegment_radius](pcsegment_radius.html)

[pgfind](pgfind.html)

[polyneighbours](polyneighbours.html)

[ptlined](ptlined.html)

[surfacedist](surfacedist.html)

[tet_adjacent](tet_adjacent.html)

[xyzdist](xyzdist.html)
