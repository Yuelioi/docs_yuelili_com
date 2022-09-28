---
title: ch
order: 2
category:
  - houdini
---
    
## 描述

Evaluates a channel (or parameter) and return its value.
获取一个通道（或参数）的值

```c
float  ch(string channel)
float  ch(string channel, float time_in_sec)
```

```c
string  ch(string channel)
string  ch(string channel, float time_in_sec)
```

```c
float  ch(int op_id, int parm_index, int vector_index)
float  ch(int op_id, int parm_index, int vector_index, float time_in_sec)
```

Evaluates a channel (or parameter) and return its value. The time is specified
in _seconds_ , not in frames. If you don‘t specify the time, the function
returns the value at the current time.

Evaluates 一个通道（或参数）并返回其值。时间是以秒为单位（不是帧）。如果不指定时间，则返回当前时间的值。

---

Houdini includes several functions to evaluate channels/parameters of
different types.

Houdini 包括几个函数来评估不同类型的通道/参数。

```ad-note
ch 一般不知道是浮点还是字符串再用
```

| 类型                | 使用函数                     |
| ------------------- | ---------------------------- |
| 浮点数或字符串      | [[ch]]                       |
| 浮点                | [[chf]]                      |
| 字符串              | [[chs]]                      |
| 整数                | [[chi]]                      |
| 矩阵                | [[ch3]]、[[ch4]]             |
| 斜率                | [[chramp]] 、[[chrampderiv]] |
| op_id、vector_index | [[chid]]                     |

## 示例

```c
// 获取 SOP box1 在 1.5s 的tx属性浮点值
 tx = ch("/obj/geo1/box1/tx", 1.5)
```

```ad-tip
获取属性名，如 tx，可以在属性上右键 copy parameter，然后在其他属性上 paste relativeed refer


```
