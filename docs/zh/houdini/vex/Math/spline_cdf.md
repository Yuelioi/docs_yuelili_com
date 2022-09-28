---
title: spline_cdf
order: 64
category:
  - houdini
---
    
## 描述

Generate a cumulative distribution function (CDF) by sampling a spline curve.

On this page |

- Overview

- Usage

---|---  
Since | 18.5

## Overview

Whereas the [create_cdf](create_cdf.html "Creates a cumulative distribution
function (CDF) from an array of probability density function (PDF)
values.") function creates a CDF from sample values, this functions creates a
CDF by randomly sampling a curve defined by a list of `values` and
corresponding `positions` (similar to a Ramp parameter).

create_cdffunction 从样本值中创建一个 CDF，而这个函数通过随机抽样创建一个 CDF，该曲线由一列值和相应位置定义（类似于 Ramp 参数）。

See the [create_cdf](create_cdf.html "Creates a cumulative distribution
function (CDF) from an array of probability density function (PDF)
values.") function docs for example code using a CDF.

有关使用 CDF 的示例代码，请参见 create_cdffunction 文档。

## Usage

```c
float [] spline_cdf(string bases[], float values[], float positions[], ...)
```

Takes an array of bases, an array of key values, a corresponding array of
keypositions, and an optionally an int, res (resolution), corresponding to the
number of samplesto build the CDF with. Function samples the spline according
to the resolution,then creates and returns a CDF from said samples. Note that
there is only supportfor single dimension splines.

接收一个基数数组，一个键值数组，一个相应的键值数组，以及一个可选的 int。

`bases`

An array of strings describing how to interpret the corresponding `values`:
each string can be `"constant"`, `"linear"`, `"cubic"` (or `"catmullrom"`,
`"cspline"`), `"linearsolve"` (or `"solvelinear"`), or

```c
"monotonecubic"
```

. See
the [spline](spline.html "Samples a value along a polyline or spline curve.")
function docs for information on how these options control the interpretation
of the values.

和一个 int，res (resolution)，对应的样本数。

"res",`=128`

When building a CDF, some splines may require more samples to accurately
represent the spline. The `res` (resolution) controls how many samples the
function takes when constructing the CDF (and consequently the size of the
CDF). The default is 128.

来建立 CDF。函数根据分辨率对花键进行采样。

Returns

A float array representing a CDF (like the array returned by
[create_cdf](create_cdf.html "Creates a cumulative distribution function
(CDF) from an array of probability density function (PDF) values.")).

然后从所述样本创建并返回一个 CDF。请注意，只支持
