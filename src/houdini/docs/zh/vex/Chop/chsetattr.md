---
title: chsetattr
order: 22
category:
  - houdini
---
    
## 描述

Sets the value of a CHOP attribute.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

`int chsetattr(string attrclass, string attrname, int channel, int sample, <type>value)`

Sets the attribute to the given value in the current CHOP.

将属性设置为当前 CHOP 中的给定值。

```c
int  chsetattr(string attrname, int channel, int sample, <type>value)
```

This version assumes the attribute class argument to be `""` (guess the class
from the other arguments).

这个版本假定属性的类别参数是""（从其他参数中猜测类别）。

CHOP attributes store metadata on clips, channels, samples, or channel/sample
pairs.

CHOP 属性在片段、通道、采样或通道/采样对上存储元数据。

This function sets the value of a CHOP attribute. Use [chattr](chattr.html "Reads from a CHOP attribute.") to read CHOP attributes.

这个函数设置一个 CHOP 属性的值。使用 chattr 来读取 CHOP 属性。

`attribclass`

The “level” of the attribute:

属性的 "级别"。

`"clip"`

An attribute on a whole clip.

整个片段上的属性。

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

The name of the attribute to write.

要写入的属性的名称。

`channel`

When reading a `channel` or `channelsample` attribute, this is the index of
the channel.If you are reading a `clip` or `sample` attribute, use `-1` here.

当读取 achannelorchannelsampleattribute 时，这是该通道的索引。

`sample`

When reading a `sample` or `channelsample` attribute, this is the sample
number.If you are reading a `clip` or `channel` attribute, use `-1` here.

如果你正在读取 acliporsampleattribute，这里使用 1。

`value`

The new attribute value. The type of the argment determines the type of the
attribute.

当读取 asampleorchannelsampleattribute 时，这是样本的编号。

Returns

Returns `1` if the write succeeded, or `0` otherwise.

如果你正在读取 acliporchannelattribute，在这里使用-1。
