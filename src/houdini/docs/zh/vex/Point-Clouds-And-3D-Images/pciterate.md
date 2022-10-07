---
title: pciterate
order: 23
category:
  - vex
---

`int pciterate(int handle)`

This function can be used to iterate over all the points which were
found in a [pcopen](pcopen.html "Returns a handle to a point cloud file.") query. The first argument is the handle
returned by `pcopen`.
The function returns 1 while there are points left in the iteration loop,
or 0 when there are no further points. This lets you use the function as
the condition in a [while loop](../statement.html).

Warnings:

- It is not possible to nest pcunshaded or pciterate loops for the same
  handle. That is, for a single [pcopen](pcopen.html "Returns a handle to a point cloud file.") call, only one
  [pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven’t
had any data written to the channel yet.") or `pciterate` loop may be entered.
- Computations involving derivatives inside [pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven’t
had any data written to the channel yet.")
  loops may have slightly different results. If derivatives are required
  for variables which aren’t set by [pcimport](pcimport.html "Imports channel data from a point cloud inside a pciterate or a pcunshaded loop.") it may be
  better to pre-compute the derivatives before the
  [pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven’t
had any data written to the channel yet.") loop is entered.



## See also

- [pcopen](pcopen.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)

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
