---
title: hedge_isprimary
order: 6
category:
  - vex
---

`int hedge_isprimary(string geometry, int hedge)`

`int hedge_isprimary(int opinput, int hendge)`

## Arguments

`geometry`

要参考的几何文件的名称。在 Houdini 中，这可能是`op:full_path_to_sop`来引用一个 SOP。

`hedge`

代表一个半边的整数。

## Returns

如果 "hedge "代表参考几何中的主要半边，则为 "1"，否则为 "0"。

## Examples



```c
int numedges;

// Count the number of edges

if (hedge_isprimary("defgeo.bgeo", 3))
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
