---
title: nearpoints
order: 14
category:
  - houdini
---

## Description

`int [] nearpoints(<geometry>geometry, vector pt, float maxdist)`

`int [] nearpoints(<geometry>geometry, vector pt, float maxdist, int maxpts)`

`int [] nearpoints(<geometry>geometry, string ptgroup, vector pt, float maxdist)`

`int [] nearpoints(<geometry>geometry, string ptgroup, vector pt, float maxdist, int maxpts)`

## Arguments

`opinput`

The number of the input to the current node, starting with `0` being the first
input.

`geometry`

The name of the geometry file to reference. Inside Houdini, this may be
“op:full_path_to_sop” to reference a SOP.

`ptgroup`

A point group pattern to limit the search to. Can be a SOP-style group pattern
such as `0-10` or `@Cd.x>0.5`. An empty string will match all points.

`pt`

The position in space to find the closest point on the geometry to.

`maxdist`

The maximum distance to search.

`maxpts`

The maximum number of points to find.

## Returns

An array of point numbers This will only search against points, not the
surface locations of the geometry. Use [xyzdist](xyzdist.html "Finds the
distance from a point to the closest location on surface geometry.") to find
the closest point on surfaces or curves.

## See also

- [nearpoint](nearpoint.html)
- [pcfind](pcfind.html)
- [pcfind_radius](pcfind_radius.html)
- [pgfind](pgfind.html)

### point

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

### proximity

[hex_adjacent](hex_adjacent.html)

[minpos](minpos.html)

[nearpoint](nearpoint.html)

[nearpoints](nearpoints.html)

[neighbour](neighbour.html)

[neighbourcount](neighbourcount.html)

[neighbours](neighbours.html)

[pccone](pccone.html)

[pccone_radius](pccone_radius.html)

[pcfarthest](pcfarthest.html)

[pcfind](pcfind.html)

[pcfind_radius](pcfind_radius.html)

[pcline](pcline.html)

[pcline_radius](pcline_radius.html)

[pcsegment](pcsegment.html)

[pcsegment_radius](pcsegment_radius.html)

[pgfind](pgfind.html)

[polyneighbours](polyneighbours.html)

[ptlined](ptlined.html)

[surfacedist](surfacedist.html)

[tet_adjacent](tet_adjacent.html)

[xyzdist](xyzdist.html)
