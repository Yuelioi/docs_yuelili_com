---
title: chattr
order: 2
category:
  - houdini
---
    
## 描述

Reads from a CHOP attribute.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
<type> chattr(string attrname, int &success)
```

```c
<type> chattr(int opinput, string attrname, int &success)
```

Get the value of a clip-level attribute.The version without `opinput` assumes
the first input (0).

获取一个剪辑级属性的值。

```c
<type> chattr(string attrname, int channel, int &success)
```

```c
<type> chattr(int opinput, string attrname, int channel, int &success)
```

Get the value of a channel-level attribute.The version without `opinput`
assumes the first input (0).

没有 opinput 的版本假定为第一个输入（0）。

```c
<type> chattr(string attrname, int channel, int sample, int &success)
```

`<type> chattr(int opinput, string attrname, int channel, int sample, int &success)`

Get the value of an attribute.The function guesses the attribute class from
the other arguments.The version without `opinput` assumes the first input (0).

获取一个通道级属性的值。

`<type> chattr(string attrclass, string attrname, int channel, int sample, int &success)`

`<type> chattr(int opinput, string attribclass, string attrname, int channel, int sample, int &success)`

Get the value of an attribute of a specific class.The version without
`opinput` assumes the first input (0).

没有 opinput 的版本假设是第一个输入（0）。

CHOP attributes store metadata on clips, channels, samples, or channel/sample
pairs.

获取一个属性的值。

This function reads the value of a CHOP attribute. Use
[chsetattr](chsetattr.html "Sets the value of a CHOP attribute.") to set CHOP
attributes.

该函数从其他参数中猜测属性类别。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

没有 opinput 的版本假设是第一个输入（0）。

`attribclass`

The “level” of the attribute:

获取一个特定类别的属性的值。

`"clip"`

An attribute on a whole clip.

没有 opinput 的版本假设是第一个输入（0）。

`"channel"`

An attribute on a whole channel.

CHOP 属性存储片段、通道、采样或通道/采样对的元数据。

`"sample"`

An attribute on a sample (across all channels).

这个函数读取一个 CHOP 属性的值。使用 chsetattr 来设置 CHOP 属性。

```c
"channelsample"
```

An attribute on a specific channel/sample pair.

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

`""`

Pass an empty string to have the function figure out the class based on the
other arguments.

属性的 "级别"。

Signatures that don‘t have this parameter act the same as if you passed the
empty string.

一个属性在整个片段上。

`attrname`

The name of the attribute to read.

整个通道上的属性。

`channel`

When reading a `channel` or `channelsample` attribute, this is the index of
the channel.If you are reading a `clip` or `sample` attribute, use `-1` here.

一个样本上的属性（跨越所有通道）。

`sample`

When reading a `sample` or `channelsample` attribute, this is the sample
number.If you are reading a `clip` or `channel` attribute, use `-1` here.

一个特定通道/样本对上的属性。

`success`

If the given attribute exists and can be read, the function sets this variable
to `1`. Otherwise, it sets this variable to `0`.

传递一个空字符串，让函数根据其他参数计算出类别。

Returns

The value of the attribute.

没有这个参数的签名与你传递空字符串的行为相同。

## Examples

Read the “export” attribute on a channel

要读取的属性的名称。

    int success = 0int input = 0;string attrname = "export";string attrclass = "channel";int channel = 0; // Or use C global variable for current channel index.int sample = -1; // Or use I global variable for current sample index.string s = chattr(input, attrname, attrclass, channel, sample, success )if (success) {  // Do something with s  printf("s=%s\n", s);} else {  // Couldn't read attribute, usually because an attribute with that  // name doesn't exist}
