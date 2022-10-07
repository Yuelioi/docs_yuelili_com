---
title: pcfind_radius
order: 13
category:
  - vex
---

`int [] pcfind\_radius(<geometry>geometry, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints)`

`int [] pcfind\_radius(<geometry>geometry, string ptgroup, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints)`

`int [] pcfind\_radius(<geometry>geometry, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints, float &distances[])`

`int [] pcfind\_radius(<geometry>geometry, string ptgroup, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints, float &distances[])`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

These functions open a geometry file and return a list of points with the
location P within radius, based on point positions found in
Pchannel. Each of the points will be expanded by their RadChannel
attribute, which will be dilated by radscale. radscale scales the sizes of the `pscale` attribute to scale the spheres you calculate the distance to. A value of `0` turns the spheres into points and distance can only be positive.

Using a radius channel allows intersection detection between spheres of varying radii. In this case you cannot use only your own sphere radius, as the intersecting sphere may have a much larger radius so not be in your search window. Because of this, it is also sensible to use a 0.0 radius with this function just find all the source spheres that your query position is inside of.

Only the maxpoints closest points within the given radius
will be returned. The file name may use the `op:` syntax to reference SOP
geometry in the OP contexts. The Pchannel parameter indicates the
attribute which contains the positions to be searched.

You can also query is the distance to the surface of the found particle. If the particle has a radius, you either clamp at zero when you are inside the particle, or go negative like with a signed distance field. The latter gives you a lot more flexibility for interpreting the results.

The ptgroup is a point group that limits the points to search. This is a [SOP-style group pattern](../../model/groups.html#manual), so can be something like `0-10` or `@Cd.x>0.5`. A blank string is treated as matching all points.

The function also optionally takes a float array `distances`, which it modifies with the distances to each point.

::: info Note

The radius attribute and radius scale apply to the points being searched, not to the point you are doing the searching with!

::: info Note

If the radius attribute does not exist, this becomes equivalent to `pcfind`.

## Examples

[¶](#examples)

Performing a proximity query:

```c
int closept[] = pcfind\_radius(filename, "P", "pscale", 1.0, P, maxdistance, maxpoints);
P = 0;
foreach (int ptnum; closept)
{
 vector closepos = point(filename, "P", ptnum);
 P += closepos;
}
P /= len(closept);

```



## See also

- [nearpoint](nearpoint.html)
- [nearpoints](nearpoints.html)
- [pcfind](pcfind.html)

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

|
ptcloud

[mattrib](mattrib.html)

[mdensity](mdensity.html)

[mspace](mspace.html)

[pcclose](pcclose.html)

[pccone](pccone.html)

[pccone_radius](pccone_radius.html)

[pcconvex](pcconvex.html)

[pcexport](pcexport.html)

[pcfarthest](pcfarthest.html)

[pcfilter](pcfilter.html)

[pcfind](pcfind.html)

[pcfind_radius](pcfind_radius.html)

[pcgenerate](pcgenerate.html)

[pcimport](pcimport.html)

[pcimportbyidx3](pcimportbyidx3.html)

[pcimportbyidx4](pcimportbyidx4.html)

[pcimportbyidxf](pcimportbyidxf.html)

[pcimportbyidxi](pcimportbyidxi.html)

[pcimportbyidxp](pcimportbyidxp.html)

[pcimportbyidxs](pcimportbyidxs.html)

[pcimportbyidxv](pcimportbyidxv.html)

[pciterate](pciterate.html)

[pcline](pcline.html)

[pcline_radius](pcline_radius.html)

[pcnumfound](pcnumfound.html)

[pcopen](pcopen.html)

[pcopenlod](pcopenlod.html)

[pcsampleleaf](pcsampleleaf.html)

[pcsegment](pcsegment.html)

[pcsegment_radius](pcsegment_radius.html)

[pcsize](pcsize.html)

[pcunshaded](pcunshaded.html)

[pcwrite](pcwrite.html)

[pgfind](pgfind.html)

[photonmap](photonmap.html)

[texture3d](texture3d.html)

[texture3dBox](texture3dBox.html)
