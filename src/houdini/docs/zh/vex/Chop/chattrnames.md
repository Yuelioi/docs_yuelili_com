---
title: chattrnames
order: 3
category:
  - houdini
---
    
## 描述

Reads CHOP attribute names of a given attribute class from a CHOP input.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
string [] chattrnames(int opinput, string attribclass)
```

```c
string [] chattrnames(string attrclass)
```

Returns all the CHOP attribute names of a given attribute class from a CHOP
input.

从 CHOP 输入中返回一个给定属性类的所有 CHOP 属性名称。

CHOP attributes store metadata on clips, channels, samples, or channel/sample
pairs.

CHOP 属性存储在片段、通道、样本或通道/样本对上的元数据。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入编号，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

`attribclass`

The “level” of the attribute:

属性的 "级别"。

`"clip"`

An attribute on a whole clip.

一个属性在整个片段上。

`"channel"`

An attribute on a whole channel.

整个通道上的属性。

`"sample"`

An attribute on a sample (across all channels).

一个样本上的属性（跨越所有通道）。

```c
"channelsample"
```

An attribute on a specific channel/sample pair.

一个特定通道/样本对上的属性。

`""`

Pass an empty string to have the function figure out the class based on the
other arguments.

传递一个空字符串，让函数根据其他参数计算出类别。

Returns

The attribute names as a string array.

属性名称是一个字符串数组。
