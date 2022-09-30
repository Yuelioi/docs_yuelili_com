---
title: random_sobol
order: 28
category:
  - houdini
---
    
## 描述

Generate a uniformly distributed random number.

```c
float  random_sobol(float seed, int offset)
```

```c
float  random_sobol(int seed, int offset)
```

```c
float  random_sobol(vector4 seed, int offset)
```

```c
float  random_sobol(vector seed, int offset)
```

```c
vector4  random_sobol(float seed, int offset)
```

```c
vector4  random_sobol(int seed, int offset)
```

```c
vector4  random_sobol(vector4 seed, int offset)
```

```c
vector4  random_sobol(vector seed, int offset)
```

```c
vector  random_sobol(float seed, int offset)
```

```c
vector  random_sobol(int seed, int offset)
```

```c
vector  random_sobol(vector4 seed, int offset)
```

```c
vector  random_sobol(vector seed, int offset)
```

When generating a sequence of random numbers you will notice that it tends
toclump.Sometimes you want a bunch of samples that are better
distributed,however.A sobol sequence is a series of random numbers which are
relativelyevenly distributed.

当生成一个随机数的序列时，你会注意到它趋向于

The seed allows you to select different sobol sequences.If it is a
floatingpoint seed, note very small differences will select very different
sequences.

丛生。 有时你想要一堆分布较好的样本。

The offset is which entry in the sequence to extract.This should be aninteger
sequence, like `ptnum`, in order for the distribution property to work.

然而。 一个 sobol 序列是一系列的随机数，它是相对

Each number is in the `[0..1)` range.

均匀分布。
