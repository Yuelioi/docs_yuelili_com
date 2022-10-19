---
title: pcunshaded
order: 33
category:
  - vex
---

`int pcunshaded(int handle, string channel\_name)`

像 [pciterate](pciterate.html) ("这个函数可以用来遍历在pcopen查询中发现的所有点。") 一样，这个函数可以用来遍历在 [pcopen](pcopen.html) () ("返回一个点云文件的句柄。") 查询中发现的点。第一个参数是由`pcopen`返回的句柄。

然而，当`pciterate`遍历所有的点时，这个函数只遍历 channel_name 中的通道还没有被写入的点。

当迭代循环中有剩余的点时，该函数返回 1，当没有更多的点时返回 0。这使你可以在[while 循环](.../statement.html)中使用该函数作为条件。

警告。

- 当在多线程的 OP 中使用时，这个函数将不能正确工作。
- 在 "pcunshaded "循环中涉及导数的计算可能有
  不可能为同一个句柄嵌套`pcunshaded`或[pciterate](pciterate.html) ("这个函数可以用来遍历所有在pcopen查询中发现的点。")循环。也就是说，对于一个[pcopen](pcopen.html) () ("返回一个点云文件的句柄。")的调用，只能输入一个`pcunshaded'或[pciterate](pciterate.html) ("这个函数可以用来迭代在pcopen查询中发现的所有点。")循环。 结果略有不同。如果变量需要导数，而这些变量不是由[pcimport](pcimport.html)设置的（"在pciterate或pcunshaded循环中从点云中导入通道数据。"），在进入`pcunshaded`循环之前预先计算导数可能更好。

## See also

- [pcopen](pcopen.html)
- [pciterate](pciterate.html)
- [pcimport](pcimport.html)
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
