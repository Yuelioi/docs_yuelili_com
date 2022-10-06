---
title: hedge_primary
order: 16
category:
  - houdini
---

## Description

`int hedge_primary(<geometry>geometry, int hedge)`

Each class of equivalent half-edges has precisely one primary half-edge. In
particular, a half-edge which is equivalent to no other half-edges is always
primary. Primary half-edges are useful for accounting for each edge exactly
once as each edge may be realized by any number of equivalent half-edges.

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

The primary half-edge `hedge` that shares the source and destination of
`hedge` (possibly in reverse order). Returns `-1` if the half-edge is not
valid.

## Examples ¶

```c
int primhedge;  // Get the primary half-edge equivalent to half-edge
number 3. primhedge = hedge_primary("defgeo.bgeo", 3);
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
