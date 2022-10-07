---
title: pciterate
order: 23
category:
  - vex
---

`int pciterate(int handle)`

这个函数可以用来遍历在[pcopen](pcopen.html) ()（"返回一个点云文件的句柄。"）查询中发现的所有点。第一个参数是由`pcopen`返回的句柄。当迭代循环中有剩余的点时，该函数返回 1，当没有更多的点时返回 0。这使你可以在[while 循环]中使用该函数作为条件(.../statement.html)。

警告。

- 不可能在同一时间对 pcunshaded 或 pciterate 循环进行嵌套。
- 涉及导数的计算在[pcunshaded](pcunshaded.html "遍历一个读写通道的所有点，这些点没有
  柄。也就是说，对于一个[pcopen](pcopen.html) () ("返回一个点云文件的句柄。")的调用，只能输入一个[pcunshaded](pcunshaded.html) ("遍历一个读写通道中尚未有任何数据写入该通道的所有点。")或`pciterate`循环可能有稍微不同的结果。如果变量需要导数，而这些变量不是由[pcimport](pcimport.html) ()设置的（"在 pciterate 或 pcunshaded 循环中从点云中导入通道数据。"），在进入[pcunshaded](pcunshaded.html "遍历一个读写通道中所有尚未有数据写入该通道的点。")循环之前预先计算导数可能更好。

## See also

- [pcopen](pcopen.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)

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
