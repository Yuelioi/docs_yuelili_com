---
title: chname
order: 5
category:
  - houdini
---
    
## 描述

Returns the name of a numbered channel.

| Context(s) | [cop](../contexts/cop.html)[ chop](../contexts/chop.html) |
| ---------- | --------------------------------------------------------- |

## COPs

```c
string  chname(int plane_index, int chindex)
```

Returns the name of the channel on the plane (for example, `"r"`, or `"x"`).

返回平面上的通道名称（例如，"r"，或 "x"）。

## CHOPs

```c
string  chname(int channel_index)
```

```c
string  chname(int opinput, int channel_index)
```

Returns the name of the channel, for example `"tx"`.To get a list of all
channel names, use [chnames](chnames.html "Returns all the CHOP channel names
of a given CHOP input.").

返回通道的名称，例如 "tx"。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要获得所有通道名称的列表，使用 echnames。

If you specify `-1`, the function uses the current CHOP node or input `0` if
it is connected.

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。
