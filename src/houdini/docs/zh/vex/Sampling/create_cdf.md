---
title: create_cdf
order: 1
category:
  - houdini
---
    
## 描述

Creates a cumulative distribution function (CDF) from an array of probability
density function (PDF) values.

On this page |

- Overview

- Usage

- Examples

---|---

## Overview

CDFs are useful when sampling from distributions. For example, you could
create a CDF of light source power. This would allow sampling of lights with a
probability based on power. This is an example of a discrete CDF, where
sampling selects among a fixed set of probabilities. (See the example below.)

当从分布中取样时，CDF 很有用。例如，你可以创建一个光源功率的 CDF。这将允许以基于功率的概率对灯光进行采样。这是一个离散 CDF 的例子，取样是在一组固定的概率中选择。(见下面的例子）。

Use the [sample_cdf](sample_cdf.html "Samples a cumulative distribution
function (CDF).") function to sample values from the returned CDF array.

使用 sample_cdffunction 从返回的 CDF 数组中采样。

## Usage

```c
float [] create_cdf(float pdf[])
```

Returns a CDF for the input PDF as an array of floats.

返回输入 PDF 的 CDF，作为一个浮点数的数组。

`pdf`

Array of PDF values to create the CDF for.

用于创建 CDF 的 PDF 值数组。

## Examples

    // Iterate over all lights, sampling their powerint[] li = getlights();float values[];resize(values, len(li));int nsamples = 256;int sid = israytrace ? SID : newsampler();vector s, pos, clr;float scale;for (int i = 0; i < len(li); i++){  for (int j = 0; j < nsamples; j++)  {    nextsample(sid, s.x, s.y, "mode", "nextpixel");    sample_light(li[i], P, s, Time, pos, clr, scale);    values[i] += luminance(clr);  }  values[i] /= nsamples;}// Create a CDF of the power distributionfloat cdf[] = create_cdf(values);// Randomly select a light based on power distributionnextsample(sid, s.x, s.y, "mode", "nextpixel");int index = 0;sample_cdf(cdf, s.x, index);// Do something with the selected light// li[index] ...
