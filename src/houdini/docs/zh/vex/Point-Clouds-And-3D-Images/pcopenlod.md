---
title: pcopenlod
order: 28
category:
  - vex
---

在这一页

- 距离查询](#distance-queries)
- [实心角查询](#实心角查询)
- [聚合](#aggregation)
- [示例：近似查询](#示例-近似-查询)
- [例子：阈值实角查询](#example-threshold-solid-angle-query)
- [例子：有限的实体角度查询](#example-limited-solid-angle-query)

`int pcopenlod(string filename, string Pchannel, vector P, int min\_pts, ...)`

这个函数打开一个点云文件（`.pc`）并排队访问其中的点。然后你可以用 [pcunshaded](pcunshaded.html) ("遍历一个读写通道中所有还没有任何数据写入该通道的点。") 或 [pciterate](pciterate.html) ("这个函数可以用来遍历所有在 pcopen 查询中发现的点。"）并使用[pcexport](pcexport.html)（"在 pciterate 或 pcunshaded 循环中向点云写入数据。"）向点云添加新数据。

虽然这个函数与[pcopen](pcopen.html)相似（"返回一个点云文件的句柄。"），但主要区别在于它排队的点可能是整个点群的集合。换句话说，一个点可以代表许多点。这使你可以在任何需要的细节水平上进行查询，而不会忽略点云中的点。例如，你可以执行一个查询，其中靠近查询原点的点像往常一样排队，但远离原点的点被平均化了。这可以导致性能的大幅提高，因为整个点群可以被当作一个单一的点来处理。

如同[pcopen](pcopen.html)（"返回一个点云文件的句柄。"），P 指定查询原点，Pchannel 指定位置通道。在构建过程中，树状结构一开始是一个包含点云中所有点的单一边界框，并被递归细分，直到一个节点中的点少于 min_pts--此时，细分停止，一个叶子节点被创建。min_pts 的一个好的默认值是 8。

查询是通过从根节点开始的树状结构的下降来进行的，直到满足某些条件。从概念上讲，你从一个粗略的查询开始，然后细化它，直到你决定它足够详细。你使用一个 "测量 "来决定查询何时达到所需的详细程度。支持两个 "度量 "值。距离 "和 "实体角"。

## 距离查询

[¶](#distance-queries)

`distance`模式是为了与[pcopen](pcopen.html)兼容而提供的（"返回一个点云文件的句柄。"），并且不排队集合点。距离查询需要一个阈值参数，表示接受点的半径。

阈值 "参数指定了接受点的半径--与传递给[pcopen](pcopen.html) ()的半径相同（"返回一个点云文件的句柄"）。例如，调用`pcopenlod`(..., `"measure"`, `"distance"`, `"threshold"`, radius, ...)排队等待位于查询原点的指定半径内的点。

## 实心角查询

[¶](#solid-angle-queries)

实心角查询会根据点与查询点的距离以及点的面积来确定其优先级，因此离查询点近且面积大的点会被赋予更大的权重。查询过程将倾向于通过排队等候其子女来分割贡献较大的点。

用来计算点贡献的确切方程式如下。

Ai /|Pi - P||^2。

其中 Ai 是一个集合面积值，Pi 是集合框中离 P 最近的点，P 是查询原点。调用`pcopenlod`(..., `"measure"`, `"solidangle"`, `"area"`, `"A"`, ...)可以执行一个实体角度的查询，其中`A`通道被假定为持有面积值。

有两种不同的方式来使用实心角查询--无限制的（`threshold`）查询，根据满足给定阈值的点的数量来返回不同的点，以及有限的（`samples`）查询，总是返回相同数量的点。如果出现`samples'参数，则假定是有限查询。

有限查询的工作方式是对样本进行优先排序，而不是阈值化--因此，无论考虑的点的总权重如何，都会返回相同数量的点。该算法的工作方式是反复挑选贡献最大的点，并分割该点，直到有足够的点被分割，以满足所需的样本数。当你需要一个固定的性能或最低质量水平的查询时，有限查询很有用。

阈值查询的工作方式是将点的贡献与一个固定的阈值进行比较--并根据这一比较接受或拒绝该点。由于不同的查询点会导致不同的点贡献，所以会有不同数量的点被排在阈值查询的队伍中。当使用较少的点来查询远离点云的位置是可以接受的，那么阈值查询就很有用。

## 聚合

[¶](#aggregation)

额外的字符串参数表明点值是如何聚合的。每个通道可以有不同的聚合模式。平均值"，"总和"，或 "加权"。调用`pcopenlod`(..., `aggregate:P`, `sum`)将对通道`P`中的值进行汇总。调用`pcopenlod`(..., `aggregate:A`, `weighted`, `weight`, `W`)将使用通道`W`的权重加权平均来汇总通道`A`中的值。

## 例子。近距离查询

[¶](#example-proximity-query)

```c
int handle = pcopenlod(texturename, "P", P, 8,
"measure", "distance", "threshold", 2.0,
"aggregate:P", "mean",
"aggregate:value", "sum");
Cf = 0;
while (pciterate(handle))
{
pcimport(handle, "value", valueSum);
Cf += valueSum;
}
pcclose(handle);

```

## Example: Threshold Solid-angle Query

[¶](#example-threshold-solid-angle-query)

```c
handle = pcopenlod(texturename, "P", P, 8,
"measure", "solidangle", "area", "A", "threshold", 0.01,
"aggregate:A", "sum",
"aggregate:irradiance", "weighted", "weight", "A",
"aggregate:P", "mean");
Cf = 0;
while (pciterate(handle))
{
pcimport(handle, "irradiance", irradiance);
Cf += irradiance;
}
pcclose(handle);

```

## Example: Limited Solid-angle Query

[¶](#example-limited-solid-angle-query)

```c
handle = pcopenlod(texturename, "P", P, 8,
"measure", "solidangle", "area", "A", "samples", 4,
"aggregate:A", "sum",
"aggregate:irradiance", "weighted", "weight", "A",
"aggregate:P", "mean");
Cf = 0;
while (pciterate(handle))
{
pcimport(handle, "irradiance", irradiance);
Cf += irradiance;
}
pcclose(handle);

```

## See also

- [pcopen](pcopen.html)
- [pcgenerate](pcgenerate.html)
- [pcwrite](pcwrite.html)
- [pcfilter](pcfilter.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)
- [pcclose](pcclose.html)
- [pcsampleleaf](pcsampleleaf.html)

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
