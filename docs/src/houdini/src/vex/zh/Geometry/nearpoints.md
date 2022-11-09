---
title: nearpoints
order: 14
category:
  - vex
---

`int [] nearpoints(<geometry>geometry, vector pt, float maxdist)`

`int [] nearpoints(<geometry>geometry, vector pt, float maxdist, int maxpts)`

`int [] nearpoints(<geometry>geometry, string ptgroup, vector pt, float maxdist)`

`int [] nearpoints(<geometry>geometry, string ptgroup, vector pt, float maxdist, int maxpts)`

## Arguments

`opinput`

当前节点的输入编号，从`0`开始是第一个输入。

`geometry`

要参考的几何文件的名称。在 Houdini 中，这可能是 "op:full_path_to_sop "来引用一个 SOP。

`ptgroup`

一个限制搜索的点组模式。可以是一个 SOP 风格的组模式，如`0-10`或`@Cd.x>0.5`。一个空字符串将匹配所有的点。

`pt`

在空间中找到几何体上最近的点的位置。

`maxdist`

搜索的最大距离。

`maxpts`

要找到的最大数量的点。

## Returns

一个点的数组 这只会搜索点，而不是几何体的表面位置。使用 [xyzdist](xyzdist.html) () ("找出一个点到曲面几何体上最近的位置的距离。") 来寻找曲面或曲线上最近的点。

## See also

- [nearpoint](nearpoint.html)
- [pcfind](pcfind.html)
- [pcfind_radius](pcfind_radius.html)
- [pgfind](pgfind.html)

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
