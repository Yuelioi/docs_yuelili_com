---
title: nametopoint
order: 32
category:
  - houdini
---

## Description

`int nametopoint(<geometry>geometry, string name)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

## Returns

The number of the point with the given value in the `name` attribute. ## Returns`-1` if no primitive has the given ID, or if the geometry has no `name`
attribute.

To look up a primitive by its `id` attribute value, use
[idtoprim](idtoprim.html "Finds a primitive by its id attribute."). To look up
a point by an arbitrary string or int attribute value, use
[findattribval](findattribval.html "Finds a primitive/point/vertex that has a
certain attribute value.").

## See also

- [idtoprim ](idtoprim.html)
- [nametopoint ](nametopoint.html)
- [findattribval ](findattribval.html)

### point

[addpoint ](addpoint.html)

[addpointattrib ](addpointattrib.html)

[haspointattrib ](haspointattrib.html)

[idtopoint ](idtopoint.html)

[inpointgroup ](inpointgroup.html)

[nametopoint ](nametopoint.html)

[ndcdepth ](ndcdepth.html)

[nearpoint ](nearpoint.html)

[nearpoints ](nearpoints.html)

[neighbour ](neighbour.html)

[neighbourcount ](neighbourcount.html)

[neighbours ](neighbours.html)

[npoints ](npoints.html)

[npointsgroup ](npointsgroup.html)

[planepointdistance ](planepointdistance.html)

[point ](point.html)

[pointattrib ](pointattrib.html)

[pointattribsize ](pointattribsize.html)

[pointattribtype ](pointattribtype.html)

[pointattribtypeinfo ](pointattribtypeinfo.html)

[pointhedge ](pointhedge.html)

[pointhedgenext ](pointhedgenext.html)

[pointprims ](pointprims.html)

[pointvertex ](pointvertex.html)

[pointvertices ](pointvertices.html)

[primpoint ](primpoint.html)

[primpoints ](primpoints.html)

[ptransform ](ptransform.html)

[removeattrib ](removeattrib.html)

[removepoint ](removepoint.html)

[removepointattrib ](removepointattrib.html)

[removepointgroup ](removepointgroup.html)

[setpointattrib ](setpointattrib.html)

[setpointgroup ](setpointgroup.html)

[setvertexpoint ](setvertexpoint.html)

[vertexpoint ](vertexpoint.html)

### search

[findattribval ](findattribval.html)

[findattribvalcount ](findattribvalcount.html)

[idtopoint ](idtopoint.html)

[idtoprim ](idtoprim.html)

[intersect ](intersect.html)

[nametopoint ](nametopoint.html)

[nametoprim ](nametoprim.html)

[nuniqueval ](nuniqueval.html)

[primfind ](primfind.html)

[uniqueval ](uniqueval.html)

[uniquevals ](uniquevals.html)
