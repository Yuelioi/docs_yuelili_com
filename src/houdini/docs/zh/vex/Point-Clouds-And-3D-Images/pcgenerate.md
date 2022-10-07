---
title: pcgenerate
order: 14
category:
  - vex
---

`int pcgenerate(string filename, int npoints)`

This function returns a handle to the point cloud with the specified name or
creates a new point cloud with the specified name and number of points.
Initially, the point cloud has no channels, but channels can be added using
[pcexport](pcexport.html "Writes data to a point cloud inside a pciterate or a pcunshaded loop.") in a [pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven’t
had any data written to the channel yet.") loop. Note that if pcgenerate() is called
with the name of a point cloud that already exists, that point cloud will not
be re-sized to contain the specified number of points.

Once a position channel has been established, call [pcopen](pcopen.html "Returns a handle to a point cloud file.") to query the
generated point cloud. Note that calling [pcopen](pcopen.html "Returns a handle to a point cloud file.") will lock the specified
position channel. Once a point cloud has been opened, it is considered to be
generated. Calling pcgenerate() with the name of a generated point cloud is
similar to calling pcopen() and requesting 0 points: no points will be available
in a [pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven’t
had any data written to the channel yet.") or [pciterate](pciterate.html "This function can be used to iterate over all the points which were
found in the pcopen query.") loop.

This function only stores a point cloud in RAM. To write points to disk, use [pcwrite()](pcwrite.html "Writes data to a point cloud file.").

::: info Note

We refer to the parameter as a filename to be consistent with `pcopen()`. The two functions share the same namespace. That is, if you call `pcgenerate("myfile.pc", ...)`, you can then query `"myfile.pc"` by calling `pcopen("myfile.pc", ...)` or `pcopenlod("myfile.pc", ...)`.

This works the other way as well. If you call `pcopen("myfile.pc", ...)` and then call `pcgenerate("myfile.pc", ...)`, the `pcgenerate()` call will use the point cloud that is already loaded into memory through the `pcopen()` call rather than creating a new point cloud.

## Examples

[¶](#examples)

```c
vector position;
int ohandle, ghandle, rval;

ghandle = pcgenerate(texturename, npoints);
while (pcunshaded(ghandle, "P"))
{
 // Compute 'position'...
 rval = pcexport(ghandle, "P", position);
}

ohandle = pcopen(texturename, "P", P, maxdistance, maxpoints);
while (pciterate(ohandle))
{
 rval = pcimport(ohandle, "P", position);
 // Do something with 'position'...
}

pcclose(ohandle);
pcclose(ghandle);

```



## See also

- [pcopen](pcopen.html)
- [pcwrite](pcwrite.html)
- [pcfilter](pcfilter.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)
- [pcexport](pcexport.html)
- [pcclose](pcclose.html)

|
create

[addpoint](addpoint.html)

[addpointattrib](addpointattrib.html)

[addprim](addprim.html)

[addprimattrib](addprimattrib.html)

[addvertex](addvertex.html)

[addvertexattrib](addvertexattrib.html)

[blackbody](blackbody.html)

[pcgenerate](pcgenerate.html)

[removedetailattrib](removedetailattrib.html)

[removepointattrib](removepointattrib.html)

[removepointgroup](removepointgroup.html)

[removeprimattrib](removeprimattrib.html)

[removeprimgroup](removeprimgroup.html)

[removevertexattrib](removevertexattrib.html)

[removevertexgroup](removevertexgroup.html)

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
