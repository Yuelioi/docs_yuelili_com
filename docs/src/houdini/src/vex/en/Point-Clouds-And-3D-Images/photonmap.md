---
title: photonmap
order: 36
category:
  - vex
---

On this page

- [Variadic arguments](#variadic-arguments)
- [Examples](#examples)

`vector photonmap(string mapname, vector position, vector normal, ...)`

`void photonmap(string mapname, vector position, vector normal, vector &color, float &area, ...)`

##

Variadic arguments

[¶](#variadic-arguments)

You can specify additional keyword,value argument pairs to set the
behavior of the evaluation. These arguments must be defined at load
time (literals or parameters).

To specify one of the additional arguments, pass the keyword as a
string, with the next argument being the value for the keyword. For
example `..., "wrap", "clamp", "border", {.1,1,1})`.

|
Keyword  
 Type  
 Value
| --- --- ---
|
`"nphotons"`  
`int` Maximum number of photons to filter to produce the final color.
Default is `50`.
|
`"type"`  
`string` How to interpret the photons.

`"diffuse"` (the default)

Scale each photon by the Lambertian cosine law.

`"irradiance"`

Use the raw energy of each photon without filtering.

|
`"error"`  
`float` The amount of error allowed in the evaluation.
Larger numbers give less accurate evaluations (i.e. smaller areas of the map will be scanned),
while smaller number will result in larger areas of the map being scanned.
Render time goes up as the error tolerance goes down.
Default `0.001`.
|
`"filter"`  
`string` Specifies the “filter” for computing the irradiance from
photons. When evaluating photon contributions, the incoming
radiance is divided by the area that the photons cover (to
determine the flux). The area can be computed in three
different fashions:

`sphere` (default)

The minimum bounding sphere of all photons will be used
to estimate the area. This estimator will result in soft
blobby looking photon evaluation. It can be inaccurate
near edges of primitives.

`volume`

Like sphere, but uses the volume of the minimum bounding
sphere rather than area to normalize photon tracing
results. When using volume filtering it is usually
necessary to divide the photon lookup result by the volume
density to correct for the density-weighted photon
distribution that occurs in volumes.
When using volume filtering, the normal passed to the
`photonmap` function is ignored.

`convex`

Use the convex hull of all photons is to estimate the
area. This estimator will result in slightly “sharper”
edges in the photon evaluation, and can be more accurate
near edges of primitives. However, since there are
sharper edges, this estimator can produce very noisy
evaluations.

`direct`

This filter should be used for photon maps that have been
pre-filtered (for example, for maps that have already been
filtered by the pcfilter utility). It will cause the
photon energies to be averaged without area estimation.

##

Examples

[¶](#examples)

```c
Cf = photonmap(map, P, normalize(frontface(N, I)),
"nphotons", 100,
"type", "diffuse",
"error", 0.05,
"filter", "convex);

```

```c
vector clr;
float area;
photonmap(map, P, normalize(frontface(N, I)), clr, area,
"nphotons", 100,
"type", "diffuse",
"error", 0.05,
"filter", "convex);
Cf = clr;

```

photon

[photonmap](photonmap.html)

[sensor_panorama_create](sensor_panorama_create.html)

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

|
texture

[colormap](colormap.html)

[environment](environment.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[photonmap](photonmap.html)

[rawcolormap](rawcolormap.html)

[texprintf](texprintf.html)

[uvdist](uvdist.html)
