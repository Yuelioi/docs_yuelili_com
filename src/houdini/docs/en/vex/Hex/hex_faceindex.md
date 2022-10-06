---
title: hex_faceindex
order: 3
category:
  - houdini
---

## Description

`int hex_faceindex(int faceno, int vtxno)`

Returns `-1` if an invalid number is specified.

Returns `0` to `7` to refer to the eight vertices of a generic hexahedron.

## Arguments

`faceno`

The face on the hexahedron. Ranges from `0` to `5`.

`vtxno`

Which vertex on the quadrilateral to return, `0` to `3`. Starts with the
lowest number and follows Houdini’s winding convention.

### hex

[hex_adjacent](hex_adjacent.html)

[hex_faceindex](hex_faceindex.html)

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
