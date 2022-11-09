---
title: hedge_prev
order: 14
category:
  - vex
---

`int hedge_prev(<geometry>geometry, int hedge)`

如果`hedge`是无效的，返回`-1`。否则，返回包含`hedge`的多边形中先于`hedge`的半边的编号（其目的地是来源）。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`hedge`

输入半边缘。

## Returns

在包含它的多边形中，先于`hedge`的半边的编号（它的目的地是源头）。如果半边无效，则返回`-1'。

## Examples



```c
int prev;

// Get the previous half-edge of half-edge number 3.
prevhedge = hedge_prev("defgeo.bgeo", 3);

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
