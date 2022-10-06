---
title: random
order: 22
category:
  - houdini
---
    
## 描述

Generate a random number based on the integer position in 1-4D space.

```c
float  random(float|intposition)
```

```c
vector  random(float|intposition)
```

```c
vector2  random(int position)
```

```c
vector4  random(float|intposition)
```

Generate 1D, 2D, 3D, or 4D noise based on a 1D position.

根据一个一维位置生成一维、二维、三维或四维噪声。

```c
float  random(float|intxpos, float|intypos)
```

```c
vector  random(float|intxpos, float|intypos)
```

```c
vector4  random(float|intxpos, float|intypos)
```

Specify a 2D position in the noise field using two numbers.

用两个数字指定噪声场中的二维位置。

```c
float  random(vector position)
```

```c
vector  random(vector position)
```

```c
vector4  random(vector position)
```

Specify a 3D position in the noise field using a vector.

用一个矢量来指定噪声场中的三维位置。

```c
float  random(vector4 position)
```

```c
vector  random(vector4 position)
```

```c
vector4  random(vector4 position)
```

Specify a 4D position in the noise field using a vector4.

用一个矢量 4 指定噪声场中的 4D 位置。

Generate a random number based on the integer position in `N` dimensional
space(where N is 1 to 4 dimensions). Unlike the noise functions, the
randomfunctions do not smoothly interpolate the random values between
integerlattice points. The `random()` functions are very efficient ways of
doingsomething like

```c
noise(floor(position))
```

.

根据 N 维空间中的整数位置生成一个随机数

While `random()` takes floats, it only varies the random effect forinteger
changes.To have a random result that varies with even thesmallest float
changes, use `rand()`.

(其中 N 为 1 到 4 维)。与噪声函数不同，随机

The result of this is in the half-open interval [0, 1).

函数不会在整数点之间平滑地插值随机值。
