---
title: hedge_isequiv
order: 5
category:
  - vex
---

`int hedge\_isequiv(<geometry>geometry, int hedge1, int hedge2)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`hedge1`

代表第一个半边的整数。

`hedge2`

代表第二条半边的整数。

## Returns

如果 "hedge1 "和 "hedge2 "是等价的，即代表几何体中的同一条边。当 "hedge1 "和 "hedge2 "的源点和目的点分别相同，或者 "hedge1 "和 "hedge2 "的源点与另一条的目的点相同，就属于这种情况。

## Examples



```c
int opposite = 0;

// test if hedges 2 and 3 are oppositely oriented equivalent half-edges
if (hedge\_isequiv("defgeo.bgeo", 2, 3))
{
if (hedge\_srcpoint("defgeo.bgeo", 2) == hedge\_dstpoint("defgeo.bgeo", 3))
opposite = 1;
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
