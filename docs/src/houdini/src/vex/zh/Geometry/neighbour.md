---
title: neighbour
order: 16
category:
  - vex
---

这个函数让你行走与一个点相连的点（由一条边分开）。要想一次获得所有连接点的列表，请使用[neighbours](neighbours.html)（"返回一个点的邻居的点号的数组。"）。

`int neighbour(<geometry>geometry, int point_num, int neighbour_num)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`point_num`

你想找到其邻居的点的编号。

`neighbour_num`

找哪个邻居。邻居没有特定的顺序。使用[neighbourbourcount](neighbourbourcount.html) () ("返回与指定点相连的点的数量。")来获取相连点的总数。

## Returns

该点的邻居的点索引。顺序是未定义的，但是对于一致的几何图形来说，顺序是一致的。如果 "邻居 "超出了该点的范围，或者该点超出了该输入的范围，或者该输入不存在，则返回 "1"。

## See also

- [neighbourcount](neighbourcount.html)
- [neighbours](neighbours.html)

|
point

[addpoint](addpoint.html)

[addpointattrib](addpointattrib.html)

[haspointattrib](haspointattrib.html)

[idtopoint](idtopoint.html)

[inpointgroup](inpointgroup.html)

[nametopoint](nametopoint.html)

[ndcdepth](ndcdepth.html)

[nearpoint](nearpoint.html)

[nearpoints](nearpoints.html)

[neighbour](neighbour.html)

[neighbourcount](neighbourcount.html)

[neighbours](neighbours.html)

[npoints](npoints.html)

[npointsgroup](npointsgroup.html)

[planepointdistance](planepointdistance.html)

[point](point.html)

[pointattrib](pointattrib.html)

[pointattribsize](pointattribsize.html)

[pointattribtype](pointattribtype.html)

[pointattribtypeinfo](pointattribtypeinfo.html)

[pointhedge](pointhedge.html)

[pointhedgenext](pointhedgenext.html)

[pointprims](pointprims.html)

[pointvertex](pointvertex.html)

[pointvertices](pointvertices.html)

[primpoint](primpoint.html)

[primpoints](primpoints.html)

[ptransform](ptransform.html)

[removeattrib](removeattrib.html)

[removepoint](removepoint.html)

[removepointattrib](removepointattrib.html)

[removepointgroup](removepointgroup.html)

[setpointattrib](setpointattrib.html)

[setpointgroup](setpointgroup.html)

[setvertexpoint](setvertexpoint.html)

[vertexpoint](vertexpoint.html)

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
