---
title: hedge_nextequiv
order: 9
category:
  - houdini
---

## Description

`int hedge_nextequiv(<geometry>geometry, int hedge)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

`hedge`

Input half-edge.

## Returns

The next half-edge equivalent to `hedge`, or `hedge` if there are no other
half-edges equivalent to it. Successive calls to `hedge_nextequiv()` cycle
through all the equivalent half-edges. Returns `-1` if the half-edge is not
valid.

## Examples ¶

```c
// Determine the number of half-edges equivalent to half-edge number 3
(including itself) int num_equiv = 0; int h = 3; do { h =
hedge_nextequiv("defgeo.bgeo", h); num_equiv++; } while (h != 3);
```

### hedge

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
