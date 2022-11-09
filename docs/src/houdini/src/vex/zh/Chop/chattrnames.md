---
title: chattrnames
order: 4
category:
  - vex
---

[chop](../contexts/chop.html)

`string [] chattrnames(int opinput, string attribclass)`

`string [] chattrnames(string attrclass)`

Context(s) 从 CHOP 输入中返回一个给定属性类的所有 CHOP 属性名称。

CHOP 属性存储了片段、通道、采样或通道/采样对的元数据。

## Arguments

`opinput`

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

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

## Returns

作为一个字符串数组的属性名称。

## See also

- [chattr](chattr.html)
- [chsetattr](chsetattr.html)

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
