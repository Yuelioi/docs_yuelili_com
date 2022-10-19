---
title: pointedge
order: 19
category:
  - vex
---

`int pointedge(<geometry>geometry, int point1, int point2)`

Returns `-1` if no such half-edge exists. Otherwise returns the number of a half-edge that either has `point1` as source or has `point2` as desination, or the other way around.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`point1`, `point2`

The point numbers in the geometry for the two endpoints of the returned half-edge. `0` is the first point.

##

Examples

[¶](#examples)

```c
int edge\_count = 0;

// Determine if there is an edge between points 23 and 25:
int h0 = pointedge("defgeo.bgeo", 23, 25);
if (h0 != -1)
{
// Edge exists!
}

```

hedge

[hedge_dstpoint](hedge_dstpoint.html)

[hedge_dstvertex](hedge_dstvertex.html)

[hedge_equivcount](hedge_equivcount.html)

[hedge_isequiv](hedge_isequiv.html)

[hedge_isprimary](hedge_isprimary.html)

[hedge_isvalid](hedge_isvalid.html)

[hedge_next](hedge_next.html)

[hedge_nextequiv](hedge_nextequiv.html)

[hedge_postdstpoint](hedge_postdstpoint.html)

[hedge_postdstvertex](hedge_postdstvertex.html)

[hedge_presrcpoint](hedge_presrcpoint.html)

[hedge_presrcvertex](hedge_presrcvertex.html)

[hedge_prev](hedge_prev.html)

[hedge_prim](hedge_prim.html)

[hedge_primary](hedge_primary.html)

[hedge_srcpoint](hedge_srcpoint.html)

[hedge_srcvertex](hedge_srcvertex.html)

[pointedge](pointedge.html)

[pointhedge](pointhedge.html)

[pointhedgenext](pointhedgenext.html)

[primhedge](primhedge.html)

[vertexhedge](vertexhedge.html)
