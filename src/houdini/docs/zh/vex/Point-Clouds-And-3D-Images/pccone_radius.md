---
title: pccone_radius
order: 7
category:
  - vex
---

自 18.0 以来

`int [] pccone\_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P, vector dir, float angle, float max\_distance, int maxpoints)`

`int [] pccone\_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P, vector dir, float angle, float max\_distance, int maxpoints)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

这些函数打开一个几何文件，并返回一个圆锥体内的点的列表，该圆锥体的顶点是 P，在矢量方向 dir 打开，角度与 dir 成正比。此外，它只返回距离 P 的 max_distance 内最近的 maxpoints 点。每个点都会被它们的 RadChannel 属性所扩展，并被 radscale 所扩张。

使用半径通道可以检测不同半径的球体之间的交集。在这种情况下，你不能只使用自己的球体半径，因为相交的球体可能有更大的半径，所以不在你的搜索窗口中。正因为如此，在这个函数中使用 0.0 的半径也是明智的，只是为了找到你的查询位置在其中的所有源球体。

`ptgroup`是一个点组，限制了搜索的点。这是一个 SOP 风格的组模式，所以可以是像`0-10`或`@Cd.x>0.5`。空白字符串被视为匹配所有点。

## See also

- [nearpoint](nearpoint.html)
- [nearpoints](nearpoints.html)
- [pccone](pccone.html)
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
