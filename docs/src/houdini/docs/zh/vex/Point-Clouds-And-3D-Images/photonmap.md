---
title: photonmap
order: 36
category:
  - vex
---

在这一页

- [变量参数](#variadic-arguments)
- [例子](#例子)

`vector photonmap(string mapname, vector position, vector normal, ...)`

`void photonmap(string mapname, vector position, vector normal, vector &color, float &area, ...)`

## 变量论证

[¶](#variadic-arguments)

你可以指定额外的关键字，值参数对来设置评估的行为。这些参数必须在加载时定义（字面意思或参数）。

要指定一个额外的参数，请将关键词作为一个字符串传递，下一个参数是该关键词的值。例如`..., "wrap", "clamp", "border", {.1,1,1})`。

默认为 50。| `"类型" `string` 如何解释光子。

"扩散"（默认）。

用兰伯斯余弦律对每个光子进行缩放。

`"irradiance"`

使用每个光子的原始能量，而不进行过滤。

| ` "误差"``float ` 评估中允许的误差量。数字越大，评估就越不准确（也就是说，扫描的地图区域越小），而数字越小，扫描的地图区域就越大。渲染时间会随着误差容忍度的降低而增加。默认为 0.001。| `"过滤器"`string` 指定计算光子辐照度的 "过滤器"。在评估光子贡献时，传入的辐射度除以光子覆盖的面积（以确定流量）。面积可以用三种不同的方式计算。

球体"（默认）。

所有光子的最小边界球将被用来估计面积。这个估计器将导致看起来软塌塌的光子评估。在基元的边缘附近，它可能是不准确的。

`volume`

与球体类似，但使用最小边界球体的体积而不是面积来规范光子追踪结果。当使用体积滤波时，通常需要将光子查找结果除以体积密度，以纠正体积中出现的密度加权的光子分布。当使用体积滤波时，传递给`photonmap`函数的法线被忽略了。

`convex`

使用所有光子的凸壳来估计面积。这个估计器将导致光子评估中略微 "尖锐 "的边缘，并且在基元的边缘附近可以更加准确。然而，由于有更尖锐的边缘，这个估计器会产生非常嘈杂的评价。

`direct`

这个过滤器应该用于已经预先过滤过的光子图（例如，已经被 pcfilter 工具过滤过的图）。它将导致光子能量被平均化，而不需要进行面积估计。

## Examples



```c
Cf = photonmap(map, P, normalize(frontface(N, I)),
"nphotons", 100,
"type", "diffuse",
"error", 0.05,
"filter", "convex);

```

```c
vector clr;
float area;
photonmap(map, P, normalize(frontface(N, I)), clr, area,
"nphotons", 100,
"type", "diffuse",
"error", 0.05,
"filter", "convex);
Cf = clr;

```

photon

[photonmap](photonmap.html)

[sensor_panorama_create](sensor_panorama_create.html)

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

|
texture

[colormap](colormap.html)

[environment](environment.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[photonmap](photonmap.html)

[rawcolormap](rawcolormap.html)

[texprintf](texprintf.html)

[uvdist](uvdist.html)
