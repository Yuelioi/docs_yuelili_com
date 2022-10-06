---
title: mx_perlin
order: 14
category:
  - houdini
---
    
## 描述

MaterialX compatible Worley noise

```c
float|vector|vector2 mx_worley(vector2 pos, float jitter, int metric)
```

```c
float|vector|vector2 mx_worley(vector pos, float jitter, int metric)
```

Returns a Worley Noise value that matches the values as in the standard
MaterialX library.

返回一个与标准 MaterialX 库中的数值相匹配的沃利噪声值。

Jitter should normally be clamped between 0 and 1.

抖动通常应该被钳制在 0 到 1 之间。

The metric is an integer representing how the distance is measured for Worley
noise

指标是一个整数，代表 Worley 噪声的距离是如何测量的

- 0 - Euclidean Distance

0 - 欧几里得距离

- 1 - Distance Squared

1 - 距离的平方

- 2 - Manhattan Distance

2 - 曼哈顿距离

- 3 - Chebyshev Distance

3 - Chebyshev 距离
