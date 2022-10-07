---
title: pcunshaded
order: 33
category:
  - vex
---

`int pcunshaded(int handle, string channel\_name)`

Like [pciterate](pciterate.html "This function can be used to iterate over all the points which were
found in the pcopen query."), this function can be used to iterate over
points which were found in a [pcopen](pcopen.html "Returns a handle to a point cloud file.") query. The first argument is
the handle returned by `pcopen`.

However, where `pciterate` iterates over all the points, this function
only iterates over points where the channel in channel_name has
not yet been written to.

The function returns 1 while there are points left in the iteration loop,
or 0 when there are no further points. This lets you use the function as
the condition in a [while loop](../statement.html).

Warnings:

- This function will not work correctly when used in multi-threaded OPs.
  It is not possible to nest `pcunshaded` or [pciterate](pciterate.html "This function can be used to iterate over all the points which were
found in the pcopen query.")
  loops for the same handle. That is, for a single [pcopen](pcopen.html "Returns a handle to a point cloud file.")
  call, only one `pcunshaded` or [pciterate](pciterate.html "This function can be used to iterate over all the points which were
found in the pcopen query.") loop may be
  entered.
- Computations involving derivatives inside `pcunshaded` loops may have
  slightly different results. If derivatives are required for variables
  which aren’t set by [pcimport](pcimport.html "Imports channel data from a point cloud inside a pciterate or a pcunshaded loop.") it may be better to
  pre-compute the derivatives before the `pcunshaded` loop is entered.



## See also

- [pcopen](pcopen.html)
- [pciterate](pciterate.html)
- [pcimport](pcimport.html)
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
