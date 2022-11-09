---
title: chsetattr
order: 23
category:
  - vex
---

[chop](../contexts/chop.html)

`int chsetattr(string attrclass, string attrname, int channel, int sample, <type>value)`

Context(s) 将属性设置为当前 CHOP 中的给定值。

`int chsetattr(string attrname, int channel, int sample, <type>value)`

这个版本假设属性类的参数是`""`（从其他参数中猜测类）。

CHOP 属性存储了片段、通道、采样或通道/采样对的元数据。

这个函数设置一个 CHOP 属性的值。使用 [chattr](chattr.html) () ("Reads from a CHOP attribute.") 来读取 CHOP 属性。

## Arguments

`attribclass`

属性的 "级别"。

`"clip"`

整个片段上的一个属性。

`"channel"`

整个通道上的一个属性。

`"sample"`

一个样本上的属性（跨越所有通道）。

`"channelsample"`

一个特定通道/采样对上的属性。

`""`

传递一个空字符串，让函数根据其他参数计算出类。

没有这个参数的签名与你传递空字符串的行为是一样的。

`attrname`

要写入的属性的名称。

`channel`

当读取一个`通道'或`通道样本'属性时，这是该通道的索引。如果你正在读取一个`clip'或`sample'属性，在这里使用`-1'。

`sample`

当读取一个`sample'或`channelsample'属性时，这就是样本号。如果你正在读取一个`clip'或`channel'属性，在这里使用`-1'。

`value`

新的属性值。argment 的类型决定了属性的类型。

## Returns

如果写入成功，返回 "1"，否则返回 "0"。

## See also

- [chattr](chattr.html)
- [chattrnames](chattrnames.html)

|
chop

[chadd](chadd.html)

[chattr](chattr.html)

[chattrnames](chattrnames.html)

[chend](chend.html)

[chendf](chendf.html)

[chendt](chendt.html)

[chindex](chindex.html)

[chinput](chinput.html)

[chinputlimits](chinputlimits.html)

[chname](chname.html)

[chnames](chnames.html)

[chnumchan](chnumchan.html)

[chop](chop.html)

[choplocal](choplocal.html)

[choplocalt](choplocalt.html)

[chopt](chopt.html)

[chrate](chrate.html)

[chreadbuf](chreadbuf.html)

[chremove](chremove.html)

[chremoveattr](chremoveattr.html)

[chrename](chrename.html)

[chresizebuf](chresizebuf.html)

[chsetattr](chsetattr.html)

[chsetlength](chsetlength.html)

[chsetrate](chsetrate.html)

[chsetstart](chsetstart.html)

[chstart](chstart.html)

[chstartf](chstartf.html)

[chstartt](chstartt.html)

[chwritebuf](chwritebuf.html)

[isframes](isframes.html)

[issamples](issamples.html)

[isseconds](isseconds.html)
