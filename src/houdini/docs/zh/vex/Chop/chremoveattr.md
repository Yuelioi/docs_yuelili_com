---
title: chremoveattr
order: 19
category:
  - houdini
---
    
## 描述

Removes a CHOP attribute.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
int  chremoveattr(string attrclass, string attrname)
```

```c
int  chremoveattr(string attrclass, string attrnames[])
```

```c
int  chremoveattr(string attrname)
```

```c
int  chremoveattr(string attrnames[])
```

CHOP attributes store metadata on clips, channels, samples, or channel/sample
pairs.

CHOP 属性存储了片段、通道、样本或通道/样本对上的元数据。

This function removes CHOP attribute.

这个函数删除 CHOP 属性。

`attribclass`

The “level” of the attribute:

属性的 "级别"。

`"clip"`

An attribute on a whole clip.

整个片段上的一个属性。

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

Signatures that don‘t have this parameter act the same as if you passed the
empty string.

没有这个参数的签名与你传递空字符串的行为相同。

`attrname`

The name of the attribute to remove.

要删除的属性的名称。

`attrnames`

The names of the attributes to remove.

要删除的属性的名称。

Returns

Returns `1` if the operation succeeded, or `0` otherwise.

如果操作成功，则返回 1，否则返回 0。
