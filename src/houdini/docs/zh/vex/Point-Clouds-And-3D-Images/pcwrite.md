---
title: pcwrite
order: 34
category:
  - vex
---

`int pcwrite(string filename, ...)`

Writes data for the current shading point out to a point cloud file.

## Arguments

`filename`

The name of the file to write to. You can read the resulting file into a geometry network with the [![](../../icons/COMMON/file.svg)File surface node](../../nodes/sop/file.html "Reads, writes, or caches geometry on disk."). This file should have a `.pc` extension (Houdini will use the extension to determine how to import the file).

`…`

Subsequent arguments specify one or more pairs of a channel name (a string naming the attribute you're saving, such as `"P"`, `"N"`, `"v"`, `"area"`, `"u"`, etc.) and value (the value you wish to store).

```c
pcwrite("out.pc", "P", P, "N", N)

```

To write a variable as a vector type instead of a triple, append `:vector` to the channel name.

```c
pcwrite("out.pc", "P", P, "N:vector", N)

```

In micropolygon rendering, points are interpolated with neighbor points so that duplicate vertices on corners and edges are eliminated in the point cloud. If you want to disable this behavior, use the `"interpolate"` argument described below.

"interpolate",
`int`
`=1`

When you pass this argument a value of `1` (the default), one interpolated point is written representing the four corners of a micropolygon. This prevents writing out overlapping values.

```c
pcwrite("out.pc", "P", P, "interpolate", 1)

```

Using a value of `0` will disable interpolation, which can be useful when writing points that are not based on `P`. Interpolation will have no effect in ray tracing mode.

(Note that this means you can’t use `interpolate` as the name of a data channel.)

"countphotons",
`int`

For photon generation modes, add the number of points stored
to the total number of photons, for the purposes of progress reporting and termination
of photon map generation.

"mkdir",
`int`
`=0`

When you pass an argument of `1`, the function will automatically create missing sub-directories/paths.

## Examples

[¶](#examples)

```c
surface
dumpsomepoints(string fname = "points.$F4.pc"; int do\_cull = 0; float keepamt = 0.05)
{
 vector nn = normalize(frontface(N, I));
 int rval=0;
 float A = area(P,"smooth",0); // area without smoothed derivs

 if( !do\_cull| do\_cull & (nrandom()<keepamt) )
 {
 if( do\_cull && keepamt > 0 )
 {
 A = A/keepamt;
 }
 rval = pcwrite(fname, "interpolate", 1,
 "P", ptransform("space:camera","space:world", P),
 "N", ntransform("space:camera","space:world", normalize(N)),
 "area", A); // output an "area" channel in pc
 }
 Cf =abs(nn)\*rval;
}

```



## See also

- [pcopen](pcopen.html)
- [pcexport](pcexport.html)
- [File node](../../nodes/sop/file.html)

|
file

[colormap](colormap.html)

[depthmap](depthmap.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[filter_remap](filter_remap.html)

[importance_remap](importance_remap.html)

[pcclose](pcclose.html)

[pcexport](pcexport.html)

[pcopen](pcopen.html)

[pcopenlod](pcopenlod.html)

[pcsampleleaf](pcsampleleaf.html)

[pcwrite](pcwrite.html)

[ptexture](ptexture.html)

[rawcolormap](rawcolormap.html)

[sensor_panorama_create](sensor_panorama_create.html)

[shadowmap](shadowmap.html)

[teximport](teximport.html)

[texture](texture.html)

[texture3d](texture3d.html)

[writepixel](writepixel.html)

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
