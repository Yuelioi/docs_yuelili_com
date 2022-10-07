---
title: pcgenerate
order: 14
category:
  - vex
---

`int pcgenerate(string filename, int npoints)`

这个函数返回一个具有指定名称的点云的句柄，或者创建一个具有指定名称和点数的新点云。最初，点云没有通道，但是通道可以在[pcunshaded](pcunshaded.html) ("在pciterate或pcunshaded循环中向点云写入数据。")循环中使用[pccexport](pcunshaded.html) ("遍历一个读写通道中尚未有任何数据写入该通道的所有点。")添加。请注意，如果 pcgenerate()被调用时，点云的名称已经存在，那么该点云将不会被重新放大以包含指定的点的数量。

一旦建立了一个位置通道，调用[pcopen](pcopen.html) ()（"返回一个点云文件的句柄。"）来查询生成的点云。请注意，调用[pcopen](pcopen.html)（"返回一个点云文件的句柄。"）将锁定指定的位置通道。一旦一个点云被打开，它就被认为是已经生成了。用已生成的点云的名称调用 pcgenerate()类似于调用 pcopen()并请求 0 点：在[pcunshaded](pcunshaded.html) ("遍历一个读写通道中尚未有任何数据写入该通道的所有点。")或[pciterate](pciterate.html) ("该函数可用于遍历在pcopen查询中发现的所有点。")循环中没有点。

这个函数只在 RAM 中存储点云。要将点写入磁盘，请使用[pcwrite()](pcwrite.html) () ("将数据写入点云文件")。

::: info Note

我们把参数称为文件名，以便与`pcopen()`保持一致。这两个函数共享同一个命名空间。也就是说，如果你调用`pcgenerate("myfile.pc", ...)`，你就可以通过调用`pcopen("myfile.pc", ...)`或`pcopenlod("myfile.pc", ...)`查询`"myfile.pc"`。

这在另一个方面也是可行的。如果你调用`pcopen("myfile.pc", ...)`，然后调用`pcgenerate("myfile.pc", ...)`，`pcgenerate()`调用将使用已经通过`pcopen()`调用载入内存的点云，而不是创建一个新的点云。

## Examples



```c
vector position;
int ohandle, ghandle, rval;

ghandle = pcgenerate(texturename, npoints);
while (pcunshaded(ghandle, "P"))
{
 // Compute 'position'...
 rval = pcexport(ghandle, "P", position);
}

ohandle = pcopen(texturename, "P", P, maxdistance, maxpoints);
while (pciterate(ohandle))
{
 rval = pcimport(ohandle, "P", position);
 // Do something with 'position'...
}

pcclose(ohandle);
pcclose(ghandle);

```

## See also

- [pcopen](pcopen.html)
- [pcwrite](pcwrite.html)
- [pcfilter](pcfilter.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)
- [pcexport](pcexport.html)
- [pcclose](pcclose.html)

|
create

[addpoint](addpoint.html)

[addpointattrib](addpointattrib.html)

[addprim](addprim.html)

[addprimattrib](addprimattrib.html)

[addvertex](addvertex.html)

[addvertexattrib](addvertexattrib.html)

[blackbody](blackbody.html)

[pcgenerate](pcgenerate.html)

[removedetailattrib](removedetailattrib.html)

[removepointattrib](removepointattrib.html)

[removepointgroup](removepointgroup.html)

[removeprimattrib](removeprimattrib.html)

[removeprimgroup](removeprimgroup.html)

[removevertexattrib](removevertexattrib.html)

[removevertexgroup](removevertexgroup.html)

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
