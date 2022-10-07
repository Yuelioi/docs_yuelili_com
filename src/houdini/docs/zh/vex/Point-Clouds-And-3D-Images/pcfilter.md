---
title: pcfilter
order: 11
category:
  - vex
---

`<type> pcfilter(int handle, string channel\_name, ...)`

使用一个简单的重建过滤器过滤由[pcopen](pcopen.html)（"返回一个点云文件的句柄"）排队的点。

这个函数大致相当于。

```c
float pcfilter(int handle; string channel)
{
 float sum, w, d;
 float value, result = 0;
 while (pciterate(handle))
 {
 pcimport(handle, "point.distance", d);
 pcimport(handle, channel, value);
 w = 1 - smooth(0, radius, d);
 sum += w;
 result += w \* value;
 }
 result /= sum;
 return result;
}

```

`pcfilter` takes the points that were opened by the point cloud and produces a filtered value. The following equation shows how the individual points are weighted.

```c
w\_i = 1-smooth(0, maxd\*1.1, d\_i);

```

`maxd` is the farthest point, and `w_i` is the weight for a given point at distance (`d_i`). Points that are closer to the center will be weighted higher with that formula, rather than it being an average.

## See also

- [pcopen](pcopen.html)

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
