---
title: pcgenerate
order: 13
category:
  - houdini
---
    
## 描述

Generates a point cloud.

```c
int  pcgenerate(string filename, int npoints)
```

This function returns a handle to the point cloud with the specified name
orcreates a new point cloud with the specified name and number of
points.Initially, the point cloud has no channels, but channels can be added
using[pcexport](pcexport.html "Writes data to a point cloud inside a pciterate
or a pcunshaded loop.") in a [pcunshaded](pcunshaded.html "Iterate over all of
the points of a read-write channel which haven‘thad any data written to the
channel yet.") loop.Note that if pcgenerate() is calledwith the name of a
point cloud that already exists, that point cloud will notbe re-sized to
contain the specified number of points.

该函数返回一个指定名称的点云的句柄，或

Once a position channel has been established, call [pcopen](pcopen.html) "Returns a handle to a point cloud file.") to query thegenerated point
cloud.Note that calling [pcopen](pcopen.html) "Returns a handle to a point
cloud file.") will lock the specifiedposition channel.Once a point cloud has
been opened, it is considered to begenerated.Calling pcgenerate() with the
name of a generated point cloud issimilar to calling pcopen() and requesting 0
points: no points will be availablein a [pcunshaded](pcunshaded.html "Iterate
over all of the points of a read-write channel which haven‘thad any data
written to the channel yet.") or [pciterate](pciterate.html "This function can
be used to iterate over all the points which werefound in the pcopen query.")
loop.

创建一个具有指定名称和点数的新点云。

This function only stores a point cloud in RAM. To write points to disk, use
[pcwrite()](pcwrite.html "Writes data to a point cloud file.").

最初，点云没有通道，但是可以使用 apcunshadedloop 中的 pcexport 添加通道。 请注意，如果 pcgenerate()被调用时，点云的名称是

Note

We refer to the parameter as a filename to be consistent with `pcopen()`. The
two functions share the same namespace. That is, if you call

```c
pcgenerate("myfile.pc", ...)
```

, you can then query `"myfile.pc"` by calling

```c
pcopen("myfile.pc", ...)
```

or

```c
pcopenlod("myfile.pc", ...)
```

.

时，该点云将不会被重新调整为包含指定数量的点。

This works the other way as well. If you call

```c
pcopen("myfile.pc", ...)
```

and
then call

```c
pcgenerate("myfile.pc", ...)
```

, the `pcgenerate()` call will use the
point cloud that is already loaded into memory through the `pcopen()` call
rather than creating a new point cloud.

将不会被重新调整以包含指定的点的数量。

## Examples

    vector position;int ohandle, ghandle, rval;ghandle = pcgenerate(texturename, npoints);while (pcunshaded(ghandle, "P")){  // Compute 'position'...  rval = pcexport(ghandle, "P", position);}ohandle = pcopen(texturename, "P", P, maxdistance, maxpoints);while (pciterate(ohandle)){  rval = pcimport(ohandle, "P", position);  // Do something with 'position'...}pcclose(ohandle);pcclose(ghandle);
