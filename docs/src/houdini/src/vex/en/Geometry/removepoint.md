---
title: removepoint
order: 34
category:
  - vex
---

`int removepoint(int geohandle, int point_number)`

`int removepoint(int geohandle, int point_number, int and_prims)`

## Arguments

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or [geoself](geoself.html) ("Returns a handle to the current geometry."), which means the current geometry in a node. (This argument may be used in the future to allow writing to other geometries.)

`point_number`

If this is `-1`, the function has no effect.

`and_prims`

If this is `1`, the function deletes any _degenerate_ primitives that referred to the removed point (for example, closed polygons with fewer than 3 vertices or open polygons with fewer than 2 vertices).

If this is `0`, the function only deletes primitives that become invalid because of the removed point (for example, tetrahedra with fewer than 4 vertices, or volumes with zero vertices).

## See also

- [addpoint](addpoint.html)

|
delete

[removeattrib](removeattrib.html)

[removepoint](removepoint.html)

[removeprim](removeprim.html)

[removevertex](removevertex.html)

|
point

[addpoint](addpoint.html)

[addpointattrib](addpointattrib.html)

[haspointattrib](haspointattrib.html)

[idtopoint](idtopoint.html)

[inpointgroup](inpointgroup.html)

[nametopoint](nametopoint.html)

[ndcdepth](ndcdepth.html)

[nearpoint](nearpoint.html)

[nearpoints](nearpoints.html)

[neighbour](neighbour.html)

[neighbourcount](neighbourcount.html)

[neighbours](neighbours.html)

[npoints](npoints.html)

[npointsgroup](npointsgroup.html)

[planepointdistance](planepointdistance.html)

[point](point.html)

[pointattrib](pointattrib.html)

[pointattribsize](pointattribsize.html)

[pointattribtype](pointattribtype.html)

[pointattribtypeinfo](pointattribtypeinfo.html)

[pointhedge](pointhedge.html)

[pointhedgenext](pointhedgenext.html)

[pointprims](pointprims.html)

[pointvertex](pointvertex.html)

[pointvertices](pointvertices.html)

[primpoint](primpoint.html)

[primpoints](primpoints.html)

[ptransform](ptransform.html)

[removeattrib](removeattrib.html)

[removepoint](removepoint.html)

[removepointattrib](removepointattrib.html)

[removepointgroup](removepointgroup.html)

[setpointattrib](setpointattrib.html)

[setpointgroup](setpointgroup.html)

[setvertexpoint](setvertexpoint.html)

[vertexpoint](vertexpoint.html)
