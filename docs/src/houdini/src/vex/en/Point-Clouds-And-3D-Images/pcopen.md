---
title: pcopen
order: 27
category:
  - vex
---

`int pcopen(string filename, string channel, int shaded, ...)`

`int pcopen(string filename, string Pchannel, vector P, float radius, int maxpoints, ...)`

`int pcopen(string filename, string Pchannel, vector P, string Nchannel, vector N, float radius, int maxpoints, ...)`

`int pcopen(int opinput, string Pchannel, vector P, float radius, int maxpoints)`

This function opens a point cloud file (`.pc`) and queues up access to the
points contained in it. You can then iterate over the points with
[pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven’t
had any data written to the channel yet.") or [pciterate](pciterate.html "This function can be used to iterate over all the points which were
found in the pcopen query.").

The first two versions of this function queue up points centered around a
certain location P within radius, based on point positions found in
Pchannel. Only the maxpoints closest points within the given
radius will be queued. When using `pcopen()` with `pciterate()`, points will
be sorted from nearest to farthest. The file name may use the `op:` syntax
to reference SOP geometry in the OP contexts. The Pchannel parameter
indicates the channel in the texture which contains the positions to be
searched. Pchannel will be made read-only if it is not already. Any
subsequent attempts to use the channel with [pcexport](pcexport.html) ("Writes data to a point cloud inside a pciterate or a pcunshaded loop.") or
[pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven’t
had any data written to the channel yet.") will fail. Optionally, the Nchannel specifies a
direction channel and the N vector specifies a search direction. Only
points which are pointed in the same direction (i.e. `dot(N, Npoint) > 0`)
will be queued.

In some cases, you may need to add additional channels to a point cloud. You can do this by using [pcexport](pcexport.html) ("Writes data to a point cloud inside a pciterate or a pcunshaded loop.") and [pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven’t
had any data written to the channel yet."). Often,
you will not need to add extra channel data to every point in the point cloud. For example, if only part of the point cloud is inside the camera’s frustum.
In these cases, it is best to only add channel data to points returned by
a proximity query. However, sometimes all points in a point cloud must
receive extra channel data before meaningful queries can be made. For example, when adding a position channel. In these cases, the third version of this function can be used to queue up all shaded (shaded != 0) or unshaded (shaded == 0) points of a certain channel, channel. If channel does not exist, all points will be queued. This function, unlike the first two, does not lock channel.

You can specify an additional string parameter `"prefix"`, with the next
parameter being a channel prefix string, used to reference tiled block
files.

::: info Note

The preload option loads the entire point cloud into memory. Disabling this option will cause it to use a tile cache.

##

Examples

[¶](#examples)

Performing a proximity query

```c
int handle = pcopen(texturename, "P", P, maxdistance, maxpoints);
while (pcunshaded(handle, "irradiance"))
{
 pcimport(handle, "P", cloudP);
 pcimport(handle, "N", cloudN);
 ir = computeIrraciance(cloudP, cloudN);
 pcexport(handle, "irradiance", ir);
}
pcfilter(handle, radius, "irradiance", ir);

```

Shading an entire channel

```c
vector sample;
int rval, handle;

handle = pcopen(texturename, "P", 0);
while (pcunshaded(handle, "P"))
{
 sample = set(nrandom("qstrat"), nrandom("qstrat"), 0.0);
 rval = sample_geometry(
 sample, sample, Time,
 "scope", getobjectname(),
 "pipeline", "displacement",
 "P", pos);
 if (rval)
 rval = pcexport(handle, "P", pos);
}
pcclose(handle);

```

Controlling the minimum dot product between the point normal and the normal passed to `pcopen()` for points to be filtered

```c
// This will only return points where dot(N, Npoint) > 0.8
int handle = pcopen("test.pc", "P", P, "N", N, 1e6, 100, "ndot", 0.8);

```

## See also

- [pcgenerate](pcgenerate.html)
- [pcwrite](pcwrite.html)
- [pcfilter](pcfilter.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)
- [pcclose](pcclose.html)

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
