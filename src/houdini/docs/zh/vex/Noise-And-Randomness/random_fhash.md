---
title: random_fhash
order: 24
category:
  - houdini
---
    
## 描述

Hashes floating point numbers to integers.

```c
int  random_fhash(float seed)
```

```c
int  random_fhash(float seed, float seed2)
```

```c
int  random_fhash(vector seed)
```

```c
int  random_fhash(vector4 seed)
```

```c
int  random_fhash(vector2 seed)
```

Hashes the given number into an integer value.The hash may varyfor even the
smallest differences in inputs.

将给定的数字散列成一个整数值。 哈希值可能会有变化
