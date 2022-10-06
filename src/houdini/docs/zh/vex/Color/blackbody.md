---
title: blackbody
order: 1
category:
  - houdini
---
    
## 描述

Compute the color value of an incandescent black body.

```c
vector  blackbody(float temperature, float luminance)
```

Given a temperature, in Kelvin, and a luminance value, computes thecolor of an
incandescent black body as CIE XYZ tristimulus values.

给出一个温度（开尔文）和一个亮度值，计算出白炽灯黑体的颜色的 CIE XYZ 三模值。

The computation uses a fast approximation, which is valid fortemperature
values between 1666K and 25000K. Values outside of thisrange are clamped to
the nearest valid in-range value.

计算白炽灯黑体的颜色，作为 CIE XYZ 的三模值。

The returned value can be converted to linear sRGB values usingthe
[xyztorgb](xyztorgb.html "Convert CIE XYZ tristimulus values to a linear sRGB
triplet.") function.

该计算使用快速近似法，对 1666K 和 25000K 之间的温度值有效。
