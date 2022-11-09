---
title: pcexport
order: 9
category:
  - vex
---

`int pcexport(int handle, string channel_name, <type>value, ...)`

`int pcexport(int handle, string channel_name, vector value, float radius, ...)`

如果导出成功则返回 1，如果导出失败则返回 0。如果 channel_name 不是可读可写的，或者（在 pcexport 获取半径的版本中）被导出的点与已经在点云中的点的距离小于指定的半径，导出将失败。

这个函数写入用 [pcopen](pcopen.html) () ("返回一个点云文件的句柄。") 或 [pcgenerate](pcgenerate.html) () ("生成一个点云。") 打开的点的通道。这个函数的第二个版本需要一个半径参数，并根据它与已经在点云中的点的距离来接受或拒绝被导出的点。它必须与所有其他的点相隔至少有指定的半径。要将新的点数据写入点云文件，请使用[pcwrite](pcwrite.html)（"将数据写入点云文件。"）。

## 存储类型

[¶](#storage-type)

如果你添加了""存储""可选关键字，下一个参数将为数据指定一个存储类型。存储类型是标准的基于瓦片的格式数据类型。

`int8, uint8` 8 位有符号/无符号整数 | `int16, uint16` 16 位有符号/无符号整数 | `int32, uint32` 32 位有符号/无符号整数 | `int64, uint64` 64 位有符号/无符号整数 | `real16` 16 位浮点值 | `real32` 32 位浮点值 | `real64` 64 位浮点值 | `int`, `uint`, `real` 默认精度整数/浮点值

## See also

- [pcwrite](pcwrite.html)
- [pcopen](pcopen.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)

|
file

[colormap](colormap.html)

[depthmap](depthmap.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[filter_remap](filter_remap.html)

[importance_remap](importance_remap.html)

[pcclose](pcclose.html)

[pcexport](pcexport.html)

[pcopen](pcopen.html)

[pcopenlod](pcopenlod.html)

[pcsampleleaf](pcsampleleaf.html)

[pcwrite](pcwrite.html)

[ptexture](ptexture.html)

[rawcolormap](rawcolormap.html)

[sensor_panorama_create](sensor_panorama_create.html)

[shadowmap](shadowmap.html)

[teximport](teximport.html)

[texture](texture.html)

[texture3d](texture3d.html)

[writepixel](writepixel.html)

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
