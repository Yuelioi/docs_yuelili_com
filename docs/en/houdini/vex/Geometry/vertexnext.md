---
title: vertexnext
order: 43
category:
  - houdini
---

## Description

`int vertexnext(<geometry>geometry, int linearvertex)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

`linearvertex`

The linear index of a vertex. If you have a point number and point vertex
number, you can use [vertexindex](vertexindex.html "Converts a
primitive/vertex pair into a linear vertex.") to convert them to a linear
index.

## Returns

The linear index of the next vertex sharing the same point with the given
vertex, or `-1` if the vertex has no later shared vertices. (To go in the
other direction, use [vertexprev](vertexprev.html) "Returns the linear vertex
number of the previous vertex sharing a point with a given vertex.").)

## Examples ¶

```c
int vtx;  // Get the next vertex of vertex 3 vtx =
vertexnext("defgeo.bgeo", 3);
```

## See also

- [pointvertex](pointvertex.html)
- [vertexprev](vertexprev.html)
- [vertexindex](vertexindex.html)

### vertex

[addvertex](addvertex.html)

[addvertexattrib](addvertexattrib.html)

[hasvertexattrib](hasvertexattrib.html)

[hedge_postdstvertex](hedge_postdstvertex.html)

[hex_faceindex](hex_faceindex.html)

[invertexgroup](invertexgroup.html)

[nvertices](nvertices.html)

[nverticesgroup](nverticesgroup.html)

[osd_limitsurfacevertex](osd_limitsurfacevertex.html)

[pointvertex](pointvertex.html)

[pointvertices](pointvertices.html)

[primvertex](primvertex.html)

[primvertexcount](primvertexcount.html)

[primvertices](primvertices.html)

[removevertex](removevertex.html)

[removevertexattrib](removevertexattrib.html)

[removevertexgroup](removevertexgroup.html)

[setprimvertex](setprimvertex.html)

[setvertexattrib](setvertexattrib.html)

[setvertexgroup](setvertexgroup.html)

[setvertexpoint](setvertexpoint.html)

[tet_faceindex](tet_faceindex.html)

[vertex](vertex.html)

[vertexattrib](vertexattrib.html)

[vertexattribsize](vertexattribsize.html)

[vertexattribtype](vertexattribtype.html)

[vertexattribtypeinfo](vertexattribtypeinfo.html)

[vertexcurveparam](vertexcurveparam.html)

[vertexhedge](vertexhedge.html)

[vertexindex](vertexindex.html)

[vertexnext](vertexnext.html)

[vertexpoint](vertexpoint.html)

[vertexprev](vertexprev.html)

[vertexprim](vertexprim.html)

[vertexprimindex](vertexprimindex.html)
