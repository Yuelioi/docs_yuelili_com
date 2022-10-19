---
title: surfacedist
order: 18
category:
  - vex
---

自 17.0 以来

`float surfacedist(<geometry>geometry, string ptgroup, string P\_attribute, int search\_pt, int &closest\_pt, string distance\_metric)`

`float surfacedist(<geometry>geometry, string ptgroup, string P\_attribute, int search\_pt, float max\_radius, int &closest\_pt, string distance\_metric)`

返回从搜索点到点组中最近的点的距离。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`ptgroup`

一个点组的名称或生成一个点组的模式。使用与 SOP 组相同的语义，所以空字符串将匹配所有的点。也可以使用像`@Cd.x>0`这样的属性组，但注意`@`可能需要在(Snippet VOP](././nodes/vop/snippet.html)（"运行一个 VEX 片段来修改传入值。"）。

`P_attribrute`

用来测量连接点之间距离的矢量属性名称。使用 "P "将给出沿表面的世界距离，但可以使用一个自定义属性来测量不同的度量。

`search_pt`

要测量距离的点。

`max_radius`

测量表面距离的最大距离。如果点不在半径范围内，这可以让搜索提前退出，从而加快事情的进展。半径以外的点将返回一个`-1`的值，用于测量距离和引导点。

`&closest_pt`

源组中最接近的点的索引。

`-1`如果没有找到最近的点。

`distance_metric`

用来测量距离的方法。可接受的值是`边缘`和`表面`。边缘距离是沿着模型的边缘测量的，而表面距离是沿着边缘和跨越单个多边形测量的。表面距离是对真实测地线距离的更好的近似，但计算起来也更昂贵。

## Returns

从搜索点到点组中最近的点的距离。

如果没有找到最近的点，则返回`-1'。

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
