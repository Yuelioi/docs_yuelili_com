---
title: random_brj
order: 23
category:
  - houdini
---
    
## 描述

Generate a uniformly distributed random number.

| Since | 18.5 |
| ----- | ---- |

```c
float  random_brj(float seed, int offset)
```

```c
float  random_brj(int seed, int offset)
```

```c
float  random_brj(vector4 seed, int offset)
```

```c
float  random_brj(vector seed, int offset)
```

```c
vector2  random_brj(float seed, int offset)
```

```c
vector2  random_brj(int seed, int offset)
```

```c
vector2  random_brj(vector4 seed, int offset)
```

```c
vector2  random_brj(vector seed, int offset)
```

```c
vector  random_brj(float seed, int offset)
```

```c
vector  random_brj(int seed, int offset)
```

```c
vector  random_brj(vector4 seed, int offset)
```

```c
vector  random_brj(vector seed, int offset)
```

When generating a sequence of random numbers you will notice that it tends
toclump.However, sometimes you want a bunch of samples that are better
distributed.A binary random jittered (BRJ) sample is a series of random
numbers which are relatively evenly distributed, similar to

```c
random_sobol()
```

.

当生成一个随机数的序列时，你会注意到它趋向于

The seed allows you to generate different sequences.If it is a floating point
seed, note very small differences will select very different sequences.

丛生。 然而，有时你想要一串分布更好的样本。 二进制随机抖动（BRJ）样本是一系列分布相对均匀的随机数，类似于 andom_sobol()。

The offset is which entry in the sequence to extract.This should be an integer
sequence, like `ptnum`, in order for the distribution property to work.

种子允许你生成不同的序列。 如果它是一个浮点数的种子，注意非常小的差异会选择非常不同的序列。

Each number is in the `[0..1)` range.

偏移量是要提取序列中的哪个条目。 这应该是一个整数序列，如 eptnum，以便使分布属性发挥作用。
