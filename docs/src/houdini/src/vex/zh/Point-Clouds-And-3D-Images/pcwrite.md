---
title: pcwrite
order: 34
category:
  - vex
---

`int pcwrite(string filename, ...)`

将当前阴影点的数据写到点云文件中。

## Arguments

`filename`

要写入的文件的名称。您可以用(文件表面节点](.../.../nodes/sop/file.html)（"在磁盘上读取、写入或缓存几何图形"）将生成的文件读入几何网络。这个文件应该有一个`.pc`扩展名（Houdini 会使用扩展名来决定如何导入该文件）。

`…`

后续的参数指定一个或多个通道名称（命名你要保存的属性的字符串，如 "P"、"N"、"v"、"区域"、"u "等）和值（你希望存储的值）对。

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



```c
surface
dumpsomepoints(string fname = "points.$F4.pc"; int do_cull = 0; float keepamt = 0.05)
{
 vector nn = normalize(frontface(N, I));
 int rval=0;
 float A = area(P,"smooth",0); // area without smoothed derivs

 if( !do_cull| do_cull & (nrandom()<keepamt) )
 {
 if( do_cull && keepamt > 0 )
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
