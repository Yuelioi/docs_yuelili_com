---
title: pcimport
order: 15
category:
  - vex
---

这个函数只在用`pciterate`或`pcunshaded`循环时有效。

`int pcimport(int handle, string channel\_name, <type>&value)`

将点云文件中的数据导入给定的变量。

## Arguments

`channel_name`

有两个特殊的通道名称可以导入。

`point.number`

被处理的点的编号。

`point.distance`

被处理的点与查询点的距离。这只有在对无阴影的点进行迭代时才可用。

`value`

如果导入成功，该函数将用通道的值覆盖这个变量。

## Returns

`1`如果导入成功或`0`如果导入失败（通常是由于给定的通道名称不存在）。

## See also

- [pcopen](pcopen.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
- [pcexport](pcexport.html)

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
