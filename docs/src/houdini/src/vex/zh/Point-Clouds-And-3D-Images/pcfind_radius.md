---
title: pcfind_radius
order: 13
category:
  - vex
---

`int [] pcfind_radius(<geometry>geometry, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints)`

`int [] pcfind_radius(<geometry>geometry, string ptgroup, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints)`

`int [] pcfind_radius(<geometry>geometry, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints, float &distances[])`

`int [] pcfind_radius(<geometry>geometry, string ptgroup, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints, float &distances[])`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

这些函数打开一个几何文件，并根据在 Pchannel 中找到的点的位置，返回一个半径内位置为 P 的点的列表。每个点都会被它们的 RadChannel 属性所扩展，而 Radscale 会对其进行扩张。radscale 会对`pscale`属性的大小进行缩放，以扩大你计算的距离的球体。`0'的值将球体变成点，距离只能是正数。

使用半径通道可以检测不同半径的球体之间的交集。在这种情况下，你不能只使用自己的球体半径，因为相交的球体可能有更大的半径，所以不在你的搜索窗口中。正因为如此，用这个函数使用 0.0 的半径也是明智的，只需找到你的查询位置在其中的所有源球体。

只有在给定半径内最接近的 maxpoints 才会被返回。文件名可以使用`op:`语法来引用 OP 上下文中的 SOP 几何图形。Pchannel 参数表示包含要搜索的位置的属性。

你也可以查询到的是到所找到的粒子的表面的距离。如果粒子有一个半径，当你在粒子内部时，你可以夹在零点上，或者像有符号的距离场那样去做负数。后者为你解释结果提供了更大的灵活性。

ptgroup 是一个点组，它限制了要搜索的点。这是一个[SOP-style group pattern](.../.../model/groups.html) ()(#manual)，所以可以是像`0-10`或`@Cd.x>0.5`。空白的字符串被视为匹配所有点。

该函数也可以选择接受一个浮点数组`distances`，它用每个点的距离来修改。

::: info Note

半径属性和半径比例适用于被搜索的点，而不是你正在进行搜索的点。

::: info Note

如果半径属性不存在，这就等同于`pcfind`。

## Examples



进行近似查询。

```c
int closept[] = pcfind_radius(filename, "P", "pscale", 1.0, P, maxdistance, maxpoints);
P = 0;
foreach (int ptnum; closept)
{
 vector closepos = point(filename, "P", ptnum);
 P += closepos;
}
P /= len(closept);

```

## See also

- [nearpoint](nearpoint.html)
- [nearpoints](nearpoints.html)
- [pcfind](pcfind.html)

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
