---
title: photonmap
order: 33
category:
  - houdini
---
    
## 描述

Samples a color from a photon map.

On this page |

- Variadic arguments

变量参数

- Examples

---|---

```c
vector  photonmap(string mapname, vector position, vector normal, ...)
```

`void photonmap(string mapname, vector position, vector normal, vector &color, float &area, ...)`

## Variadic arguments

You can specify additional keyword,value argument pairs to set thebehavior of
the evaluation. These arguments must be defined at loadtime (literals or
parameters).

你可以指定额外的关键字，值参数对来设置

To specify one of the additional arguments, pass the keyword as astring, with
the next argument being the value for the keyword. Forexample `..., "wrap", "clamp", "border", {.1,1,1})`.

评估的行为。这些参数必须在加载时被定义

Keyword

|

Type

|

Value

---|---|---

`"nphotons"`

|

`int`

|

Maximum number of photons to filter to produce the final color.Default is
`50`.

时定义（字面意思或参数）。

`"type"`

|

`string`

|

How to interpret the photons.

要指定一个额外的参数，将关键字作为一个

`"diffuse"` (the default)

字符串，下一个参数是该关键词的值。例如

Scale each photon by the Lambertian cosine law.

例如..., "wrap", "clamp", "border", {.1,1,1}）。

`"irradiance"`

Use the raw energy of each photon without filtering.

过滤产生最终颜色的最大光子数。

`"error"`

|

`float`

|

The amount of error allowed in the evaluation.Larger numbers give less
accurate evaluations (i.e. smaller areas of the map will be scanned),while
smaller number will result in larger areas of the map being scanned.Render
time goes up as the error tolerance goes down.

默认为 50。

Default `0.001`.

`"filter"`

|

`string`

|

Specifies the “filter” for computing the irradiance fromphotons. When
evaluating photon contributions, the incomingradiance is divided by the area
that the photons cover (todetermine the flux). The area can be computed in
threedifferent fashions:

如何解释这些光子。

`sphere` (default)

The minimum bounding sphere of all photons will be usedto estimate the area.
This estimator will result in softblobby looking photon evaluation. It can be
inaccuratenear edges of primitives.

"diffuse"（默认）。

`volume`

Like sphere, but uses the volume of the minimum boundingsphere rather than
area to normalize photon tracingresults.When using volume filtering it is
usuallynecessary to divide the photon lookup result by the volumedensity to
correct for the density-weighted photondistribution that occurs in volumes.

用朗伯氏余弦法对每个光子进行缩放。

When using volume filtering, the normal passed to the`photonmap` function is
ignored.

使用每个光子的原始能量而不进行过滤。

`convex`

Use the convex hull of all photons is to estimate thearea. This estimator will
result in slightly “sharper”edges in the photon evaluation, and can be more
accuratenear edges of primitives. However, since there aresharper edges, this
estimator can produce very noisyevaluations.

评估中允许的误差量。

`direct`

This filter should be used for photon maps that have beenpre-filtered (for
example, for maps that have already beenfiltered by the pcfilter utility).It
will cause thephoton energies to be averaged without area estimation.

数字越大，评估就越不准确（也就是说，地图上较小的区域会被扫描到）。

## Examples

    Cf = photonmap(map, P, normalize(frontface(N, I)),"nphotons", 100,"type", "diffuse","error", 0.05,"filter", "convex);


    vector    clr;float    area;photonmap(map, P, normalize(frontface(N, I)), clr, area,"nphotons", 100,"type", "diffuse","error", 0.05,"filter", "convex);Cf = clr;
