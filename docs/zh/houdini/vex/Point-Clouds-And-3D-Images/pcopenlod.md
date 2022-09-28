---
title: pcopenlod
order: 25
category:
  - houdini
---
    
## 描述

Returns a handle to a point cloud file.

On this page |

- Distance Queries

距离查询

- Solid Angle Queries

实心角查询

- Aggregation

- Example: Proximity Query

例子。近距离查询

- Example: Threshold Solid-angle Query

例子。阈值实角查询

- Example: Limited Solid-angle Query

例子。有限实角查询

---|---

```c
int  pcopenlod(string filename, string Pchannel, vector P, int min_pts, ...)
```

This function opens a point cloud file (`.pc`) and queues up access to
thepoints contained in it.You can then iterate over the points
with[pcunshaded](pcunshaded.html "Iterate over all of the points of a read-
write channel which haven‘thad any data written to the channel yet.") or
[pciterate](pciterate.html "This function can be used to iterate over all the
points which werefound in the pcopen query.") and add new data to the point
cloud using[pcexport](pcexport.html "Writes data to a point cloud inside a
pciterate or a pcunshaded loop.").

这个函数打开一个点云文件(.pc)并排队访问其中的

While this function is similar to [pcopen](pcopen.html "Returns a handle to a
point cloud file."), the major difference is the points that it queues up may
be aggregates of entire groups of points.Inother words, a single point may
represent many points.This allows you toperform queries at any desired level
of detail without ignoring points in thepoint cloud.For example, you can
perform a query in which pointsnear the query origin are queued up as usual,
but points far from the originare averaged.This can lead to dramatic
performance increases because entiregroups of points can be processed as if
they are a single point.

中包含的点。 然后你可以用 pcunshaded 或 citerate 来迭代这些点，并使用 pcexport 将新数据添加到点云中。

As in [pcopen](pcopen.html "Returns a handle to a point cloud file."), P
specifies the query origin and Pchannelspecifies the position channel.During
construction, the tree structurestarts out as a single bounding box that
encompasses all the points in apoint cloud, and is recursively subdivided
until there are fewer thanmin_pts points in a node - at which point
subdivision stops and a leafnode is created.A good default for min_pts is 8.

虽然这个功能类似于 copen，但主要的区别是它排队的点可能是整个点群的集合。 换句话说

Queries are performed by descending the tree structure from the root nodeuntil
some condition is met.Conceptually, you start with a coarse queryand refine it
until you decide that it is detailed enough.You use a`measure` to decide when
the query has the desired level of detail.Two`measure` values are supported:
`distance` and `solidangle`.

换句话说，一个点可以代表许多点。 这使你可以

## Distance Queries

`distance` mode is provided for compatibility with [pcopen](pcopen.html "Returns a handle to a point cloud file.") and doesnot queue up aggregate
points.Distance queries take a threshold parameterthat indicates the radius
within which to accept points.

在任何所需的细节水平上进行查询，而不会忽略点云中的点。

The `threshold` argument specifies the radius within which points areaccepted

- identical to the radius passed to [pcopen](pcopen.html "Returns a handle to
a point cloud file.").For example,calling `pcopenlod`(â¦, `"measure"`,
  `"distance"`, `"threshold"`, radius, â¦)queues up points that lie within the
  specified radius of the query origin.

点云中的点。 例如，你可以执行一个查询，其中靠近查询原点的点

## Solid Angle Queries

Solid angle queries prioritize points by how close they are to the querypoint
and also by the area of the point, so points that are close to thequery point
and that have a large area are given a greater weight.Thequery process will
tend to split points with a larger contribution byqueueing their children.

靠近查询原点的点像往常一样排队，但远离原点的点则被平均。

The exact equation used to compute point contribution is the following:

被平均化。 这可以带来显著的性能提升，因为整个点群可以被处理得如同

Ai / ||Pi - P||^2,

因为整个点群可以被当作一个单一的点来处理。

where Ai is an aggregate area value, Pi is the closest point to P in
theaggregate box, and P is the query origin.Calling
`pcopenlod`(â¦,`"measure"`, `"solidangle"`, `"area"`, `"A"`, â¦) performs a
solid-angle queryin which the `A` channel is assumed to hold area values.

如同在 pcopen 中，P 指定了查询原点，Pchannel 指定了位置通道。 在构建过程中，树状结构

There are two different ways to use the solid angle query - an
unlimited(`threshold`) query which returns a different number of points
depending onhow many points meet the given threshold, and a limited
(`samples`) querywhich always returns the same number of points.If a `samples`
argument ispresent, a limited query is assumed.

在构建过程中，树状结构开始是一个单一的包围盒，包括点云中的所有点。

Limited queries work by prioritizing rather than thresholding samples - sothat
regardless of the total weight of the points being considered, thesame number
of points are returned.The algorithm works by iterativelypicking the point
that has the greatest contribution and splitting thatpoint until enough points
have been split to meet the desired sample count.Limited queries are useful
when you need a fixed performance or minimumquality level for the query.

点云中的所有点，并被递归细分，直到一个节点中的点少于 min_ptspoints--此时，细分停止，一个叶子

Threshold queries work by comparing the point contribution to a fixedthreshold

- and accepting or rejecting the point based on this comparison.Since
  different query points lead to different point contributions, avariable number
  of points will be queued up for threshold queries.Threshold queries are useful
  when it is acceptable to use a lower number ofpoints for query positions that
  are far from the point cloud.

节点。 一个好的默认形式是 8。

## Aggregation

Additional string parameters indicate how point values are
aggregated.Eachchannel can have a different aggregation mode: `mean`, `sum`,
or`weighted`.Calling `pcopenlod`(â¦, `aggregate:P`, `sum`) will aggregatethe
values in channel `P` by summing them.Calling `pcopenlod`(â¦,`aggregate:A`,
`weighted`, `weight`, `W`) will aggregate the values inchannel `A` using a
weighted mean with weights from channel `W`.

查询是通过从根节点开始的树状结构的下降来进行的

## Example: Proximity Query

    int handle = pcopenlod(texturename, "P", P, 8,"measure", "distance", "threshold", 2.0,"aggregate:P", "mean","aggregate:value", "sum");Cf = 0;while (pciterate(handle)){pcimport(handle, "value", valueSum);Cf += valueSum;}pcclose(handle);

## Example: Threshold Solid-angle Query

    handle = pcopenlod(texturename, "P", P, 8,"measure", "solidangle", "area", "A", "threshold", 0.01,"aggregate:A", "sum","aggregate:irradiance", "weighted", "weight", "A","aggregate:P", "mean");Cf = 0;while (pciterate(handle)){pcimport(handle, "irradiance", irradiance);Cf += irradiance;}pcclose(handle);

## Example: Limited Solid-angle Query

    handle = pcopenlod(texturename, "P", P, 8,"measure", "solidangle", "area", "A", "samples", 4,"aggregate:A", "sum","aggregate:irradiance", "weighted", "weight", "A","aggregate:P", "mean");Cf = 0;while (pciterate(handle)){pcimport(handle, "irradiance", irradiance);Cf += irradiance;}pcclose(handle);
