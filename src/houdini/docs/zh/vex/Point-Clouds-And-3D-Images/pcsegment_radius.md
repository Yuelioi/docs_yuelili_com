---
title: pcsegment_radius
order: 31
category:
  - vex
---

自 18.0 以来

`int [] pcsegment\_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max\_distance, int maxpoints)`

`int [] pcsegment\_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max\_distance, int maxpoints)`

`int [] pcsegment\_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max\_distance, int maxpoints, float &distances[])`

`int [] pcsegment\_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max\_distance, int maxpoints, float &distances[])`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

这些函数打开一个几何文件，并返回从 P0 到 P1 的线段的 max_distance 内的点的列表（被视为球体）。每个点都被视为半径等于其 RadChannel 属性的球体。

`ptgroup`是一个点组，限制了搜索的点。这是一个 SOP 风格的组模式，所以可以是像`0-10`或`@Cd.x>0.5`。空白字符串被视为匹配所有点。

该函数也可以选择接受一个浮点数组`distances`，它用每个点的距离来修改。

## See also

- [nearpoint](nearpoint.html)
- [nearpoints](nearpoints.html)
- [pccone_radius](pccone_radius.html)
- [pcfind](pcfind.html)
- [pcfind_radius](pcfind_radius.html)
- [pgfind](pgfind.html)

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

|
ptcloud

[mattrib](mattrib.html)

[mdensity](mdensity.html)

[mspace](mspace.html)

[pcclose](pcclose.html)

[pccone](pccone.html)

[pccone_radius](pccone_radius.html)

[pcconvex](pcconvex.html)

[pcexport](pcexport.html)

[pcfarthest](pcfarthest.html)

[pcfilter](pcfilter.html)

[pcfind](pcfind.html)

[pcfind_radius](pcfind_radius.html)

[pcgenerate](pcgenerate.html)

[pcimport](pcimport.html)

[pcimportbyidx3](pcimportbyidx3.html)

[pcimportbyidx4](pcimportbyidx4.html)

[pcimportbyidxf](pcimportbyidxf.html)

[pcimportbyidxi](pcimportbyidxi.html)

[pcimportbyidxp](pcimportbyidxp.html)

[pcimportbyidxs](pcimportbyidxs.html)

[pcimportbyidxv](pcimportbyidxv.html)

[pciterate](pciterate.html)

[pcline](pcline.html)

[pcline_radius](pcline_radius.html)

[pcnumfound](pcnumfound.html)

[pcopen](pcopen.html)

[pcopenlod](pcopenlod.html)

[pcsampleleaf](pcsampleleaf.html)

[pcsegment](pcsegment.html)

[pcsegment_radius](pcsegment_radius.html)

[pcsize](pcsize.html)

[pcunshaded](pcunshaded.html)

[pcwrite](pcwrite.html)

[pgfind](pgfind.html)

[photonmap](photonmap.html)

[texture3d](texture3d.html)

[texture3dBox](texture3dBox.html)
