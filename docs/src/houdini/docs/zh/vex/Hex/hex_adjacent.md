---
title: hex_adjacent
order: 2
category:
  - vex
---

`int hex\_adjacent(<geometry>geometry, int primindex, int faceno)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`primindex`

原始的数字。

`faceno`

六面体上的面。范围从`0`到`5`。

## Returns

连接到给定面的六面体的基元编号。如果基元不是六面体或没有相邻的六面体，则返回`-1'。

使用[hex_faceindex](hex_faceindex.html)（"返回六面体每个面的顶点指数。"）来获得六面体每个面的顶点指数。

## See also

- [hex_faceindex](hex_faceindex.html)

|
hex

[hex_adjacent](hex_adjacent.html)

[hex_faceindex](hex_faceindex.html)

|
proximity

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
