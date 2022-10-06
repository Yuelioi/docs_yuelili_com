---
title: nrandom
order: 17
category:
  - houdini
---
    
## 描述

Non-deterministic random number generation function.

```c
float  nrandom(...)
```

```c
vector2  nrandom(...)
```

```c
vector  nrandom(...)
```

```c
vector4  nrandom(...)
```

Returns a random number between 0 and 1, or a random unit vector.

返回一个 0 到 1 之间的随机数，或者一个随机单位向量。

```c
void  nrandom(float &x, float &y, ...)
```

Overwrites the given variables with random numbers between 0 and 1.

用 0 到 1 之间的随机数重写给定的变量。

These random generators will generate the same sequence of random numbers if
called in precisely the same order. However, there is no seed involved so it
is not possible to reproduce the same random number or sequence multiple
times.

如果以精确的顺序调用，这些随机发生器将产生相同的随机数序列。然而，没有涉及到种子，所以不可能多次重现同一个随机数或序列。

`â¦`

You can optionally specify a string argument to choose the random
numbergeneration method. The string may be one of:

你可以选择指定一个字符串参数来选择随机数的

- `default`: Efficient random number generation. This method is backwardcompatible with previous releases of Houdini.

生成方法。该字符串可以是以下之一。

- `mersenne` or `twister`: Uses the Mersenne Twister which has some verynice properties. This code is based of the work of: Copyright (C) 1997

默认。高效的随机数生成。这种方法是向后兼容

- 2002, Makoto Matsumoto and Takuji Nishimura, All rights reserved.

兼容以前的 Houdini 版本。

- `qstrat`: Uses a quasi-stratified random number generator. This tendsto distribute the random numbers evenly, reducing clumping andspacing.

mersenne orwister。使用 Mersenne Twister，它有一些非常好的特性。
