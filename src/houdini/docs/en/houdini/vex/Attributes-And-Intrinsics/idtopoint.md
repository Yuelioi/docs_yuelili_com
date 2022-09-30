---
title: idtopoint
order: 30
category:
  - houdini
---

## Description

`int idtopoint(<geometry>geometry, int id)`

Returns the number of the point with the given value in the `id` attribute.
Returns `-1` if no point has the given ID.

If the geometry doesn’t have an `id` attribute, point numbers are used as ids.
In this case, the function will return the given `id` value, unless it is
greater than the number of points in the source geometry, in which case the
function will return `-1`.

To look up a point by its `name` attribute value, use
[nametopoint](nametopoint.html "Finds a point by its name attribute."). To
look up a point by an arbitrary string or int attribute value, use
[findattribval](findattribval.html "Finds a primitive/point/vertex that has a
certain attribute value.").

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

## See also

- [nametopoint ](nametopoint.html)
- [idtoprim ](idtoprim.html)
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
