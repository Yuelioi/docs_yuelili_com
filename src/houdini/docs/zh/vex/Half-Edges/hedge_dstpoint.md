---
title: hedge_dstpoint
order: 2
category:
  - vex
---

`int hedge\_dstpoint(<geometry>geometry, int hedge)`

如果半边对冲无效，则返回`-1'。否则，返回半边形`对冲'的目标点的点号。

## Arguments

`geometry`

要参考的几何文件的名称。在 Houdini 中，这可能是`op:full_path_to_sop`来引用一个 SOP。

`hedge`

输入半边缘。

## Examples

```c
int dstpt;

// Get vertex number of half-edge number 3.
dstpt = hedge\_dstpoint("defgeo.bgeo", 3);

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
