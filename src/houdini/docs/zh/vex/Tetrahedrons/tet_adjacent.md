---
title: tet_adjacent
order: 2
category:
  - vex
---

`int tet\_adjacent(<geometry>geometry, int primindex, int faceno)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`primindex`

The primitive number.

`faceno`

The face on the tetrahedron. Face 0 is the triangle that doesn’t
have vertex 0.

## Returns

The primitive number of the tetrahedron opposite the given vertex.
Returns `-1` f the primitive is not a tet or doesn’t have an adjacent tetrahedron.

Use [tet_faceindex](tet_faceindex.html "Returns vertex indices of each face of a tetrahedron.") to get the vertex indices of each face of a tetrahedron.



## See also

- [tet_faceindex](tet_faceindex.html)

|
proximity

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

|
tet

[tet_adjacent](tet_adjacent.html)

[tet_faceindex](tet_faceindex.html)
