---
title: chp
order: 10
category:
  - houdini
---
    
## 描述

Evaluates a channel (or parameter) and return its value.

```c
vector4  chp(string channel)
```

```c
vector4  chp(string channel, float time)
```

Evaluates a channel (or parameter) and return its value.

评估一个通道（或参数）并返回其值。

If the parameter is a vector parameter, the base parameter namecan be used to
return the all components as a vector.

如果参数是一个矢量参数，那么基数参数名

The time is specified in seconds, not in frames.

可以用来作为一个向量返回所有成分。
