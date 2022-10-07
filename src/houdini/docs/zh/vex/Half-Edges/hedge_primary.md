---
title: hedge_primary
order: 16
category:
  - vex
---

`int hedge\_primary(<geometry>geometry, int hedge)`

每一类等价半边都恰好有一个主半边。特别是，一个不与其他半边等价的半边总是主要的。主半边对于每条边的核算都很有用，因为每条边可以由任何数量的等价半边实现。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`hedge`

输入半边缘。

## Returns

与`hedge`的源点和终点共享的主要半边形`hedge`（可能以相反的顺序）。如果该半边形无效，则返回`-1'。

## Examples



```c
int primhedge;

// Get the primary half-edge equivalent to half-edge number 3.
primhedge = hedge\_primary("defgeo.bgeo", 3);

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
