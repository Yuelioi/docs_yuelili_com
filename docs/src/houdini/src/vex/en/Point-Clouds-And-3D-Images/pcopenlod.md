---
title: pcopenlod
order: 28
category:
  - vex
---

On this page

- [Distance Queries](#distance-queries)
- [Solid Angle Queries](#solid-angle-queries)
- [Aggregation](#aggregation)
- [Example: Proximity Query](#example-proximity-query)
- [Example: Threshold Solid-angle Query](#example-threshold-solid-angle-query)
- [Example: Limited Solid-angle Query](#example-limited-solid-angle-query)

`int pcopenlod(string filename, string Pchannel, vector P, int min_pts, ...)`

This function opens a point cloud file (`.pc`) and queues up access to the
points contained in it. You can then iterate over the points with
[pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven’t
had any data written to the channel yet.") or [pciterate](pciterate.html "This function can be used to iterate over all the points which were
found in the pcopen query.") and add new data to the point cloud using
[pcexport](pcexport.html) ("Writes data to a point cloud inside a pciterate or a pcunshaded loop.").

While this function is similar to [pcopen](pcopen.html) ("Returns a handle to a point cloud file."), the major difference is the points that it queues up may be aggregates of entire groups of points. In
other words, a single point may represent many points. This allows you to
perform queries at any desired level of detail without ignoring points in the
point cloud. For example, you can perform a query in which points
near the query origin are queued up as usual, but points far from the origin
are averaged. This can lead to dramatic performance increases because entire
groups of points can be processed as if they are a single point.

As in [pcopen](pcopen.html) ("Returns a handle to a point cloud file."), P specifies the query origin and Pchannel
specifies the position channel. During construction, the tree structure
starts out as a single bounding box that encompasses all the points in a
point cloud, and is recursively subdivided until there are fewer than
min_pts points in a node - at which point subdivision stops and a leaf
node is created. A good default for min_pts is 8.

Queries are performed by descending the tree structure from the root node
until some condition is met. Conceptually, you start with a coarse query
and refine it until you decide that it is detailed enough. You use a
`measure` to decide when the query has the desired level of detail. Two
`measure` values are supported: `distance` and `solidangle`.

##

Distance Queries

[¶](#distance-queries)

`distance` mode is provided for compatibility with [pcopen](pcopen.html) ("Returns a handle to a point cloud file.") and does
not queue up aggregate points. Distance queries take a threshold parameter
that indicates the radius within which to accept points.

The `threshold` argument specifies the radius within which points are
accepted - identical to the radius passed to [pcopen](pcopen.html) ("Returns a handle to a point cloud file."). For example,
calling `pcopenlod`(…, `"measure"`, `"distance"`, `"threshold"`, radius, …)
queues up points that lie within the specified radius of the query origin.

##

Solid Angle Queries

[¶](#solid-angle-queries)

Solid angle queries prioritize points by how close they are to the query
point and also by the area of the point, so points that are close to the
query point and that have a large area are given a greater weight. The
query process will tend to split points with a larger contribution by
queueing their children.

The exact equation used to compute point contribution is the following:

Ai /|Pi - P||^2,

where Ai is an aggregate area value, Pi is the closest point to P in the
aggregate box, and P is the query origin. Calling `pcopenlod`(…,
`"measure"`, `"solidangle"`, `"area"`, `"A"`, …) performs a solid-angle query
in which the `A` channel is assumed to hold area values.

There are two different ways to use the solid angle query - an unlimited
(`threshold`) query which returns a different number of points depending on
how many points meet the given threshold, and a limited (`samples`) query
which always returns the same number of points. If a `samples` argument is
present, a limited query is assumed.

Limited queries work by prioritizing rather than thresholding samples - so
that regardless of the total weight of the points being considered, the
same number of points are returned. The algorithm works by iteratively
picking the point that has the greatest contribution and splitting that
point until enough points have been split to meet the desired sample count.
Limited queries are useful when you need a fixed performance or minimum
quality level for the query.

Threshold queries work by comparing the point contribution to a fixed
threshold - and accepting or rejecting the point based on this comparison.
Since different query points lead to different point contributions, a
variable number of points will be queued up for threshold queries.
Threshold queries are useful when it is acceptable to use a lower number of
points for query positions that are far from the point cloud.

##

Aggregation

[¶](#aggregation)

Additional string parameters indicate how point values are aggregated. Each
channel can have a different aggregation mode: `mean`, `sum`, or
`weighted`. Calling `pcopenlod`(…, `aggregate:P`, `sum`) will aggregate
the values in channel `P` by summing them. Calling `pcopenlod`(…,
`aggregate:A`, `weighted`, `weight`, `W`) will aggregate the values in
channel `A` using a weighted mean with weights from channel `W`.

##

Example: Proximity Query

[¶](#example-proximity-query)

```c
int handle = pcopenlod(texturename, "P", P, 8,
"measure", "distance", "threshold", 2.0,
"aggregate:P", "mean",
"aggregate:value", "sum");
Cf = 0;
while (pciterate(handle))
{
pcimport(handle, "value", valueSum);
Cf += valueSum;
}
pcclose(handle);

```

##

Example: Threshold Solid-angle Query

[¶](#example-threshold-solid-angle-query)

```c
handle = pcopenlod(texturename, "P", P, 8,
"measure", "solidangle", "area", "A", "threshold", 0.01,
"aggregate:A", "sum",
"aggregate:irradiance", "weighted", "weight", "A",
"aggregate:P", "mean");
Cf = 0;
while (pciterate(handle))
{
pcimport(handle, "irradiance", irradiance);
Cf += irradiance;
}
pcclose(handle);

```

##

Example: Limited Solid-angle Query

[¶](#example-limited-solid-angle-query)

```c
handle = pcopenlod(texturename, "P", P, 8,
"measure", "solidangle", "area", "A", "samples", 4,
"aggregate:A", "sum",
"aggregate:irradiance", "weighted", "weight", "A",
"aggregate:P", "mean");
Cf = 0;
while (pciterate(handle))
{
pcimport(handle, "irradiance", irradiance);
Cf += irradiance;
}
pcclose(handle);

```

## See also

- [pcopen](pcopen.html)
- [pcgenerate](pcgenerate.html)
- [pcwrite](pcwrite.html)
- [pcfilter](pcfilter.html)
- [pciterate](pciterate.html)
- [pcunshaded](pcunshaded.html)
- [pcimport](pcimport.html)
- [pcclose](pcclose.html)
- [pcsampleleaf](pcsampleleaf.html)

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
