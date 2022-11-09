---
title: minpos
order: 12
category:
  - vex
---

`vector minpos(<geometry>geometry, vector point)`

返回给定几何体中离该点最近的点的位置。

`vector minpos(<geometry>geometry, vector point, float maxdist)`

返回给定几何体中离该点最近的点的位置，在 maxdist 半径内。

`vector minpos(<geometry>geometry, string primgroup, vector point)`

返回给定几何体中离该点最近的点的位置，将搜索限制在指定组中的基元。

`vector minpos(<geometry>geometry, string primgroup, vector point, float maxdist)`

返回给定几何体中离该点最近的点的位置，将搜索限制在指定组中的基元和 maxdist 半径内。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`primgroup`

如果指定了，只报告上的点 你也可以使用像`@Cd.x>0`这样的组规范语法，但注意`@`在 Wrangle 片段中可能需要用反斜杠转义。一个空字符串匹配所有基元。

`point`

世界空间中的点，开始寻找几何体上最近的点。

`maxdist`

搜索的最大距离。指定这一点可以加快函数的速度，因为它可能允许提前退出搜索。

## Returns

几何体上最近的点的位置，如果没有找到最近的点，则为点。

近距离

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
