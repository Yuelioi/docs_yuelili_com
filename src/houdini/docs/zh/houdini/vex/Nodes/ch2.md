---
title: ch2
order: 33
category:
  - houdini
---
    
## 描述

Evaluates a channel (or parameter) and return its value.

```c
matrix2  ch2(string channel)
```

```c
matrix2  ch2(string channel, float time)
```

If the node parameter referenced by `channel` is a matrix type, the base
parameter namecan be used to return the all components as a matrix.

如果 channel 引用的节点参数是一个矩阵类型，基本参数名

Evaluates a channel (or parameter) and return its value. The time is specified
in _seconds_ , not in frames. If you don‘t specify the time, the function
returns the value at the current time.

可以用来返回所有组件的矩阵。

Houdini includes several functions to evaluate channels/parameters of
different types.

评估一个通道（或参数）并返回其值。时间是以秒为单位指定的，而不是以帧为单位。如果您不指定时间，该函数将返回当前时间的值。

- To get a float or string without needing to know the parameter type, use [ch](ch.html "Evaluates a channel (or parameter) and return its value.").

Houdini 包括几个函数来评估不同类型的通道/参数。

- To get a float, use [chf](chf.html "Evaluates a channel (or parameter) and return its value.").

要获得一个浮点数或字符串而不需要知道参数的类型，使用 ech。

- To get a string, use [chs](chs.html "Evaluates a channel (or parameter) and return its value.").

要获得一个浮点数，请使用 echf。

- For integer parameters, use [chi](chi.html "Evaluates a channel (or parameter) and return its value.")

要获得一个字符串，使用 echs。

- For matrix type parameters, use [ch3](ch3.html "Evaluates a channel (or parameter) and return its value.") or [ch4](ch4.html "Evaluates a channel (or parameter) and return its value.").

对于整数参数，使用 echi

- For a ramp parameter, use [chramp](chramp.html "Evaluates a ramp parameter and return its value.") or [chrampderiv](chrampderiv.html "Evaluates the derivative of a parm parameter with respect to position.").

对于矩阵型参数，使用 ech3 或 ch4。

- Use [chid](chid.html "Resolves a channel string (or parameter) and return op_id, parm_index and vector_index.") to get an `op_id`, `parm_index` and `vector_index` to evaluate the channel without having to do string resolution.

对于斜率参数，使用 echramporchrampderiv。
