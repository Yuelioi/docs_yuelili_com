---
title: hedge_isprimary
order: 6
category:
  - vex
---

`int hedge\_isprimary(string geometry, int hedge)`

`int hedge\_isprimary(int opinput, int hendge)`

## Arguments

`geometry`

The name of the geometry file to reference. Inside Houdini, this may be `op:full_path_to_sop` to reference a SOP.

`hedge`

The integer representing a half-edge.

## Returns

`1` if `hedge` represents a primary half-edge in the referenced geometry, or `0` otherwise.

## Examples

[¶](#examples)

```c
int numedges;

// Count the number of edges

if (hedge\_isprimary("defgeo.bgeo", 3))
numedges++;

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
