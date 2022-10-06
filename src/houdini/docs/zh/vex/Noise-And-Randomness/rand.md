---
title: rand
order: 21
category:
  - houdini
---
    
## 描述

Creates a random number between 0 and 1 from a seed.

基于种子值，返回 0~1 的随机数 [0, 1)

- 1 个种子值

```c
float  rand(float seed)
vector2  rand(float seed)
vector  rand(float seed)
vector4  rand(float seed)
```

- 2 个种子值

```c
float  rand(float seed, float seed2)
vector2  rand(float seed, float seed2)
vector  rand(float seed, float seed2)
vector4  rand(float seed, float seed2)
```

- 种子值也可以用多维

```c
float  rand (vector2 seed)
vector2  rand (vector2 seed)
vector  rand (vector2 seed)
vector4  rand (vector2 seed)

float  rand (vector seed)
vector2  rand (vector seed)
vector  rand (vector seed)
vector4  rand (vector seed)

float  rand(vector4 seed)
vector2  rand(vector4 seed)
vector  rand(vector4 seed)
vector4  rand(vector4 seed)
```

Creates a random number based on the provided seed.The number willbe in the
range of 0 to 1.In particular, it will be in the half-open interval [0, 1).The
same number is produced for the sameseed, so to vary the random number the
seed should be varied.

根据提供的种子创建一个随机数。这个数字将在 0 到 1 的范围内。

Note that even the smallest changes in the seed value will produce completely
different numbers, so it may produce different resultson different operating
systems or compilers.

请注意，即使种子值的最小变化也会产生完全不同的数字。
特别是，它将在半开区间[0, 1]内。相同的种子会产生相同的数字。所以要改变随机数，应该改变种子。

If the result is a vector2, vector, or vector4, each component will be
a different random number.Thus, if you have the code:

对于多维值，每个维度都会随机产生

```c
vector pos = 1;
float seed = 0;
pos *= rand (seed);
```

`pos` will get different values in its `.x`, `.y`, and `.z` components. If you
wish a uniform scale, use the `float()` cast:

此时 `pos` 不同分轴 x、y、z 都不一样，如果想让他们一样，请使用 `float` 投射

```c
vector pos = 1;
float seed = 0;
pos *= float (rand (seed));
```
