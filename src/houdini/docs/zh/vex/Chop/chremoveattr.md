---
title: chremoveattr
order: 20
category:
  - vex
---

[chop](../contexts/chop.html)

`int chremoveattr(string attrclass, string attrname)`

`int chremoveattr(string attrclass, string attrnames[])`

`int chremoveattr(string attrname)`

`int chremoveattr(string attrnames[])`

Context(s) CHOP 属性存储片段、通道、样本或通道/样本对的元数据。

该函数删除了 CHOP 属性。

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

要删除的属性的名称。

`attrnames`

要删除的属性的名称。

## Returns

如果操作成功，返回`1'，否则返回`0'。

## See also

- [chattr](chattr.html)

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
