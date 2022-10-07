---
title: pcexport
order: 9
category:
  - vex
---

`int pcexport(int handle, string channel\_name, <type>value, ...)`

`int pcexport(int handle, string channel\_name, vector value, float radius, ...)`

Returns 1 if the export succeeded or 0 if the export failed.
The export will fail if channel_name is not read-write or if (in the
version of pcexport taking a radius) the point being exported is at a
distance less than the specified radius from a point that is already in the
point cloud.

This function writes to the channels of points opened with [pcopen](pcopen.html) ("Returns a handle to a point cloud file.") or
[pcgenerate](pcgenerate.html) ("Generates a point cloud."). The second version of this function takes a radius parameter and uses it to accept or reject the point being exported according to its distance to the points that are already in the point cloud. It must be separated from all other points by at least the specified radius. To write new point data into a point cloud file, use [pcwrite](pcwrite.html) ("Writes data to a point cloud file.").

##

Storage type

[¶](#storage-type)

If you add the `"storage"` optional keyword, the next argument specifies a storage type for the data.
Storage types are the standard tile based format data types:

`int8, uint8` 8 bit signed/unsigned integers
|
`int16, uint16` 16 bit signed/unsigned integers
|
`int32, uint32` 32 bit signed/unsigned integers
|
`int64, uint64` 64 bit signed/unsigned integers
|
`real16` 16 bit floating point values
|
`real32` 32 bit floating point values
|
`real64` 64 bit floating point values
|
`int`, `uint`, `real` Default precision integer/floating point values

## See also

- [pcwrite](pcwrite.html)
- [pcopen](pcopen.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)

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
