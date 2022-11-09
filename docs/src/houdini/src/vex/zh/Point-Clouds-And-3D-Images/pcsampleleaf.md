---
title: pcsampleleaf
order: 29
category:
  - vex
---

`void pcsampleleaf(int handle, float sample)`

这个函数只能与 pcopenlod()函数一起使用，而且只能在 pciterate()循环中使用。它将当前迭代点替换为该点的一个重要性取样叶子的后裔。用于选择叶子点的权重是提供给 pcopenlod()函数的 "measure "参数的 "面积 "通道，如果在打开点云时没有指定面积通道，则为统一权重。样本参数预计是一个在 0 到 1 之间的统一随机值。

如果当前的迭代点已经是一个叶点，或者点云没有用 pcopenlod()打开，pcampleleaf()就没有作用。

当聚合点信息不能以有意义的方式使用时，这个函数是有用的，它提供了一种机制来访问点树中的子节点所包含的信息。例如，从一个平均的点的位置追踪阴影射线是没有意义的，但是选择其中一个子点，然后将阴影射线发送到该点是很有用的。

## 例子。影子射线

[¶](#example-shadow-rays)

```c
// Open a point cloud and retrieve a single aggregate point representing the
// entire cloud
string texturename = "points.pc";
int handle = pcopenlod(texturename, "P", P, 8,
"measure", "solidangle",
"area", "A",
"samples", 1,
"aggregate:A", "sum",
"aggregate:P", "mean");

Cf = 0;

// This loop will iterate only once
while (pciterate(handle))
{
 // Query A from the averaged point
 float ptarea;
 pcimport(handle, "A", ptarea);

 pcsampleleaf(handle, nrandom());

 // Query P from a sampled leaf point
 vector pos;
 pcimport(handle, "P", pos);

 if (trace(pos, P-pos, Time))
 Cf += ptarea / length2(P-pos);
}

```

## See also

- [pcopenlod](pcopenlod.html)
- [pciterate](pciterate.html)

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
