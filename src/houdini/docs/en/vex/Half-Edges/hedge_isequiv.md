---
title: hedge_isequiv
order: 5
category:
  - houdini
---

## Description

`int hedge_isequiv(<geometry>geometry, int hedge1, int hedge2)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

`hedge1`

The integer representing the first half-edge.

`hedge2`

The integer representing the second half-edge.

## Returns

`1` if `hedge1` and `hedge2` are equivalent, i.e. represent the same edge in
the geometry. This is the case when either source and destination points of
`hedge1` and `hedge2` are respectively the same, or source of each of `hedge1`
and `hedge2` is the same as the destination of the other.

## Examples ¶

```c
int opposite = 0;  // test if hedges 2 and 3 are oppositely oriented
equivalent half-edges if (hedge_isequiv("defgeo.bgeo", 2, 3)) { if
(hedge_srcpoint("defgeo.bgeo", 2) == hedge_dstpoint("defgeo.bgeo", 3))
opposite = 1; }
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
