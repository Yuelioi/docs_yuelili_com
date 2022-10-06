---
title: pcfilter
order: 11
category:
  - houdini
---

## Description

`<type> pcfilter(int handle, string channel_name, ...)`

Filters the points queued up by [pcopen](pcopen.html) "Returns a handle to a
point cloud file.") using a simple reconstruction filter.

This function is roughly equivalent to:

```c
float pcfilter(int handle; string channel) { float sum, w, d;  float
value, result = 0;  while (pciterate(handle))  { pcimport(handle,
"point.distance", d);  pcimport(handle, channel, value);  w = 1 \- smooth(0,
radius, d);  sum += w;  result += w * value;  } result /= sum;  return result;
}
```

`pcfilter` takes the points that were opened by the point cloud and produces a
filtered value. The following equation shows how the individual points are
weighted.

```c
w_i = 1-smooth(0, maxd*1.1, d_i);
```

`maxd` is the farthest point, and `w_i` is the weight for a given point at
distance (`d_i`). Points that are closer to the center will be weighted higher
with that formula, rather than it being an average.

## See also

- [pcopen](pcopen.html)

### ptcloud

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
