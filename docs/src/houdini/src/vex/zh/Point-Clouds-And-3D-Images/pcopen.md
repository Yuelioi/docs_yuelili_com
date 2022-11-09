---
title: pcopen
order: 27
category:
  - vex
---

`int pcopen(string filename, string channel, int shaded, ...)`

`int pcopen(string filename, string Pchannel, vector P, float radius, int maxpoints, ...)`

`int pcopen(string filename, string Pchannel, vector P, string Nchannel, vector N, float radius, int maxpoints, ...)`

`int pcopen(int opinput, string Pchannel, vector P, float radius, int maxpoints)`

这个函数打开一个点云文件（`.pc`）并排队访问其中的点。然后你可以用[pcunshaded](pcunshaded.html) ("遍历一个读写通道中尚未有任何数据写入该通道的所有点。")或[pciterate](pciterate.html) ("这个函数可以用来遍历在pcopen查询中发现的所有点。")来迭代这些点。

这个函数的前两个版本是根据在 Pchannel 中找到的点的位置，在半径范围内排队等待以某个位置 P 为中心的点。只有在给定半径内最接近的点的 maxpoints 才会被排队。当使用`pcopen()`和`pciterate()`时，点将从最近的到最远的排序。文件名可以使用`op:`语法来引用 OP 上下文中的 SOP 几何图形。Pchannel 参数表示纹理中包含要搜索的位置的通道。如果 Pchannel 还没有被设置为只读，它将被设置为只读。之后任何试图使用[pcexport](pcexport.html) ()("将数据写入 pciterate 或 pcunshaded 循环中的点云")或[pcunshaded](pcunshaded.html) ("遍历一个读写通道中尚未有任何数据写入该通道的所有点")来使用该通道的尝试将会失败。可选的是，Nchannel 指定了一个方向通道，N 向量指定了一个搜索方向。只有指向同一方向的点（即`dot(N, Npoint) > 0`）将被排队。

在某些情况下，你可能需要向点云添加额外的通道。你可以通过使用[pcexport](pcexport.html) () ("在 pciterate 或 pcunshaded 循环内将数据写入点云。") 和[pcunshaded](pcunshaded.html) ("遍历一个读写通道的所有点，这些点还没有任何数据写入通道。") 来实现。通常，你不需要为点云中的每一个点添加额外的通道数据。例如，如果只有部分点云是在摄像机的范围内。在这些情况下，最好只将通道数据添加到接近查询所返回的点上。然而，有时点云中的所有点都必须在进行有意义的查询之前接受额外的通道数据。例如，当添加一个位置通道时。在这些情况下，这个函数的第三个版本可以用来排队等候某个通道的所有有阴影（shaded != 0）或无阴影（shaded == 0）的点，通道。如果通道不存在，所有的点都将被排队。这个函数与前两个不同，不锁定通道。

你可以指定一个额外的字符串参数`"prefix"`，下一个参数是通道前缀字符串，用于引用平铺块文件。

::: info Note

预加载选项将整个点云加载到内存中。禁用这个选项将导致它使用一个瓦片缓存。

## Examples



进行近似查询

```c
int handle = pcopen(texturename, "P", P, maxdistance, maxpoints);
while (pcunshaded(handle, "irradiance"))
{
 pcimport(handle, "P", cloudP);
 pcimport(handle, "N", cloudN);
 ir = computeIrraciance(cloudP, cloudN);
 pcexport(handle, "irradiance", ir);
}
pcfilter(handle, radius, "irradiance", ir);

```

Shading an entire channel

```c
vector sample;
int rval, handle;

handle = pcopen(texturename, "P", 0);
while (pcunshaded(handle, "P"))
{
 sample = set(nrandom("qstrat"), nrandom("qstrat"), 0.0);
 rval = sample_geometry(
 sample, sample, Time,
 "scope", getobjectname(),
 "pipeline", "displacement",
 "P", pos);
 if (rval)
 rval = pcexport(handle, "P", pos);
}
pcclose(handle);

```

Controlling the minimum dot product between the point normal and the normal passed to `pcopen()` for points to be filtered

```c
// This will only return points where dot(N, Npoint) > 0.8
int handle = pcopen("test.pc", "P", P, "N", N, 1e6, 100, "ndot", 0.8);

```

## See also

- [pcgenerate](pcgenerate.html)
- [pcwrite](pcwrite.html)
- [pcfilter](pcfilter.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)
- [pcclose](pcclose.html)

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
