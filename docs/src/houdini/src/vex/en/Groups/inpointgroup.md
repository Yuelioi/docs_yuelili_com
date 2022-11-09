---
title: inpointgroup
order: 5
category:
  - vex
---

`int inpointgroup(<geometry>geometry, string groupname, int pointnum)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

## Returns

`1` if the group exists and the point is in the group, or `0` otherwise.

This can use ad-hoc groups, like `0-3` or `@Cd.x>0.5`. It matches the SOP
group naming convention, in particular that an empty string means all points.

groups

[expandpointgroup](expandpointgroup.html)

[expandprimgroup](expandprimgroup.html)

[expandvertexgroup](expandvertexgroup.html)

[inpointgroup](inpointgroup.html)

[inprimgroup](inprimgroup.html)

[invertexgroup](invertexgroup.html)

[npointsgroup](npointsgroup.html)

[nprimitivesgroup](nprimitivesgroup.html)

[nverticesgroup](nverticesgroup.html)

[setpointgroup](setpointgroup.html)

[setprimgroup](setprimgroup.html)

[setvertexgroup](setvertexgroup.html)

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
