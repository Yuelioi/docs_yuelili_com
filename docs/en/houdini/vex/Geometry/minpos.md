---
title: minpos
order: 12
category:
  - houdini
---

## Description

`vector minpos(<geometry>geometry, vector point)`

Returns the position of the closest point in the given geometry to the point.

`vector minpos(<geometry>geometry, vector point, float maxdist)`

Returns the position of the closest point in the given geometry to the point,
within the maxdist radius.

`vector minpos(<geometry>geometry, string primgroup, vector point)`

Returns the position of the closest point in the given geometry to the point,
limiting the search to primitives in the named group.

`vector minpos(<geometry>geometry, string primgroup, vector point, float maxdist)`

Returns the position of the closest point in the given geometry to the point,
limiting the search to primitives in the named group and to the maxdist
radius.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

`primgroup`

If specified, only report points on You can also use group specification
syntax like `@Cd.x>0`, but note that the `@` may need to be escaped with a
backslash in a Wrangle snippet. An empty string matches all primitives.

`point`

The point in world space to start looking for the closest point on the
geometry.

`maxdist`

The maximum distance to search. Specifying this can speed up the function
since it may allow quitting the search early.

## Returns

The position of the nearest point on the geometry, or point if no nearest
point was found.

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
