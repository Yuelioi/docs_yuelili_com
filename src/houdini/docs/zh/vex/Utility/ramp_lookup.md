---
title: ramp_lookup
order: 13
category:
  - houdini
---
    
## 描述

Evaluates a Houdini-style ramp at a specific location.

| Since | 18.5 |
| ----- | ---- |

```c
float  ramp_lookup(float pos, string ramp)
```

```c
vector  ramp_lookup(float pos, string ramp)
```

```c
float  ramp_lookup(float pos, string basis[], float key[], float val[])
```

```c
vector  ramp_lookup(float pos, string basis[], float key[], vector val[])
```

Evaluates a provided ramp at the given position.The ramp can be an encoded
string or a triple of basis, key, and value arrays.

在给定的位置评估一个提供的斜面。 斜坡可以是一个编码的字符串，也可以是一个由基础、关键和值组成的三重数组。
