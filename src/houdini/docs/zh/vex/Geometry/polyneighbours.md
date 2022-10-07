---
title: polyneighbours
order: 26
category:
  - vex
---



Since 17.0

`int [] polyneighbours(<geometry>geometry, int primnum)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

This returns an array of primitive numbers of polygons that share an
edge with this polygon. It uses the Half-Edge data structure so will
work with geometry that supports that (ie, polygons)

## Examples

[¶](#examples)

This is roughly equivalent to the following code:

```c
int[] polyneighbours(const string opname; const int primnum)
{
 int result[] = {};

 int start = primhedge(opname, primnum);

 for (int hedge = start; hedge != -1; )
 {
 for (int nh = hedge\_nextequiv(opname, hedge);
 nh != hedge;
 nh = hedge\_nextequiv(opname, nh))
 {
 int prim = hedge\_prim(opname, nh);
 if (prim != -1 && prim != primnum)
 {
 append(result, prim);
 }
 }
 hedge = hedge\_next(opname, hedge);
 if (hedge == start)
 break;
 }

 return result;
}

```



## See also

- [neighbours](neighbours.html)

|
proximity

[hex_adjacent](hex_adjacent.html)

[minpos](minpos.html)

[nearpoint](nearpoint.html)

[nearpoints](nearpoints.html)

[neighbour](neighbour.html)

[neighbourcount](neighbourcount.html)

[neighbours](neighbours.html)

[pccone](pccone.html)

[pccone_radius](pccone_radius.html)

[pcfarthest](pcfarthest.html)

[pcfind](pcfind.html)

[pcfind_radius](pcfind_radius.html)

[pcline](pcline.html)

[pcline_radius](pcline_radius.html)

[pcsegment](pcsegment.html)

[pcsegment_radius](pcsegment_radius.html)

[pgfind](pgfind.html)

[polyneighbours](polyneighbours.html)

[ptlined](ptlined.html)

[surfacedist](surfacedist.html)

[tet_adjacent](tet_adjacent.html)

[xyzdist](xyzdist.html)
