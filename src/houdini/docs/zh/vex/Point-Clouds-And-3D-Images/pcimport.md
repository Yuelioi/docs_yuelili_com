---
title: pcimport
order: 15
category:
  - vex
---

This function is only valid while looping with `pciterate` or `pcunshaded`.

`int pcimport(int handle, string channel\_name, <type>&value)`

Imports data from the point cloud file into the given variable.

## Arguments

`channel_name`

There are two special channel names you can import:

`point.number`

The number of the point being processed.

`point.distance`

The distance of the point being processed from the query point.
This is only available when iterating over unshaded points.

`value`

If the import succeeds the function overwrites this variable with the channel value.

## Returns

`1` if the import succeeded or `0` if the import failed (usually due to the given channel name not existing).



## See also

- [pcopen](pcopen.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
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
