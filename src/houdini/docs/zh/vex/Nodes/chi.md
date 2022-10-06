---
title: chi
order: 8
category:
  - houdini
---
    
## 描述

Evaluates a channel (or parameter) and return its value.

```c
int  chi(string channel)
```

```c
int  chi(string channel, float time)
```

Evaluates a channel (or parameter) and return its value. The time is specified
in _seconds_ , not in frames. If you don‘t specify the time, the function
returns the value at the current time.

评估一个通道（或参数）并返回其值。时间是以秒为单位指定的，而不是以帧为单位。如果您不指定时间，该函数将返回当前时间的值。

Houdini includes several functions to evaluate channels/parameters of
different types.

Houdini 包括几个函数来评估不同类型的通道/参数。

- To get a float or string without needing to know the parameter type, use [ch](ch.html "Evaluates a channel (or parameter) and return its value.").

要获得一个浮点数或字符串而不需要知道参数的类型，使用 ech。

- To get a float, use [chf](chf.html "Evaluates a channel (or parameter) and return its value.").

要获得一个浮点数，请使用 echf。

- To get a string, use [chs](chs.html "Evaluates a channel (or parameter) and return its value.").

要获得一个字符串，使用 echs。

- For integer parameters, use [chi](chi.html "Evaluates a channel (or parameter) and return its value.")

对于整数参数，使用 echi

- For matrix type parameters, use [ch3](ch3.html "Evaluates a channel (or parameter) and return its value.") or [ch4](ch4.html "Evaluates a channel (or parameter) and return its value.").

对于矩阵型参数，使用 ech3 或 ch4。

- For a ramp parameter, use [chramp](chramp.html "Evaluates a ramp parameter and return its value.") or [chrampderiv](chrampderiv.html "Evaluates the derivative of a parm parameter with respect to position.").

对于斜率参数，使用 echramporchrampderiv。

- Use [chid](chid.html "Resolves a channel string (or parameter) and return op_id, parm_index and vector_index.") to get an `op_id`, `parm_index` and `vector_index` to evaluate the channel without having to do string resolution.

使用 chid 来获取 op_id、parm_index 和 vector_index 来评估通道，而不需要做字符串解析。
