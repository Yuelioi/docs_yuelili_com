---
title: hedge_equivcount
order: 4
category:
  - vex
---

`int hedge\_equivcount(<geometry>geometry, int hedge)`

::: info Note

Equivalent half-edges may be oppositely oriented, i.e. the source of one can be the destination of the other and vice versa.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`hedge`

Input half-edge.

## Returns

The number of half-edges that have the same endpoint as `hedge` (including `hedge`), or `-1` if the half-edge is not valid.

## Examples

[¶](#examples)

```c
int is\_boundary = 0;
int is\_interior = 0;
int is\_nonmanifold = 0;

// Determine the type of edge represented by half-edge number 3:
int numeq;
numeq = hedge\_equivcount("defgeo.bgeo", 3);
if (numeq == 1)
is\_boundary = 1;
else if (numeq >= 3)
is\_nonmanifold = 1;
else
is\_interior = 1;

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
