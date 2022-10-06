---
title: pcopen
order: 24
category:
  - houdini
---
    
## 描述

Returns a handle to a point cloud file.

```c
int  pcopen(string filename, string channel, int shaded, ...)
```

```c
int  pcopen (string filename, string Pchannel, vector P, float radius, int
maxpoints, ...)
```

```c
int  pcopen (string filename, string Pchannel, vector P, string Nchannel,
vector N, float radius, int maxpoints, ...)
```

```c
int  pcopen(int opinput, string Pchannel, vector P, float radius, int
maxpoints)
```

This function opens a point cloud file (`.pc`) and queues up access to
thepoints contained in it.You can then iterate over the points
with[pcunshaded](pcunshaded.html "Iterate over all of the points of a read-
write channel which haven‘thad any data written to the channel yet.") or
[pciterate](pciterate.html "This function can be used to iterate over all the
points which werefound in the pcopen query.").

这个函数打开一个点云文件（.pc）并排队访问其中包含的点。然后可以用 [[pcunshaded]] 和 [[pciterate]] 来迭代这些点。

The first two versions of this function queue up points centered around
acertain location P within radius, based on point positions found inPchannel.
Only the maxpoints closest points within the givenradius will be queued. When
using `pcopen()` with `pciterate()`, points willbe sorted from nearest to
farthest. The file name may use the `op:` syntaxto reference SOP geometry in
the OP contexts. The Pchannel parameterindicates the channel in the texture
which contains the positions to besearched. Pchannel will be made read-only if
it is not already. Anysubsequent attempts to use the channel with
[pcexport](pcexport.html "Writes data to a point cloud inside a pciterate or a
pcunshaded loop.") or[pcunshaded](pcunshaded.html "Iterate over all of the
points of a read-write channel which haven‘thad any data written to the
channel yet.") will fail. Optionally, the Nchannel specifies adirection
channel and the N vector specifies a search direction. Onlypoints which are
pointed in the same direction (i.e.
`dot(N, Npoint) > 0`)will be queued.

In some cases, you may need to add additional channels to a point cloud.You
can do this by using [pcexport](pcexport.html "Writes data to a point cloud
inside a pciterate or a pcunshaded loop.") and [pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven‘thad any
data written to the channel yet.").Often,you will not need to add extra
channel data to every point in the point cloud. For example, if only part of
the point cloud is inside the camera‘sfrustum.In these cases, it is best to
only add channel data to points returned bya proximity query.However,
sometimes all points in a point cloud mustreceive extra channel data before
meaningful queries can be made. For example, when adding a position channel.In
these cases, the third version of this function can be used to queue up all
shaded (shaded != 0) or unshaded (shaded == 0) points of a certain channel,channel.If channel does not exist, all points will be queued.This function,
unlike the first two, does not lock channel.

You can specify an additional string parameter `"prefix"`, with the
nextparameter being a channel prefix string, used to reference tiled
blockfiles.

Note

The preload option loads the entire point cloud into memory. Disabling this
option will cause it to use a tile cache.

## Examples

Performing a proximity query

    int handle = pcopen(texturename, "P", P, maxdistance, maxpoints);while (pcunshaded(handle, "irradiance")){pcimport(handle, "P", cloudP);pcimport(handle, "N", cloudN);ir = computeIrraciance(cloudP, cloudN);pcexport(handle, "irradiance", ir);}pcfilter(handle, radius, "irradiance", ir);

Shading an entire channel

    vector sample;int rval, handle;handle = pcopen(texturename, "P", 0);while (pcunshaded(handle, "P")){sample = set(nrandom("qstrat"), nrandom("qstrat"), 0.0);rval = sample_geometry(sample, sample, Time,"scope", getobjectname(),"pipeline", "displacement","P", pos);if (rval)rval = pcexport(handle, "P", pos);}pcclose(handle);

Controlling the minimum dot product between the point normal and the normal
passed to `pcopen()` for points to be filtered

    // This will only return points where dot(N, Npoint) > 0.8int handle = pcopen("test.pc", "P", P, "N", N, 1e6, 100, "ndot", 0.8);
