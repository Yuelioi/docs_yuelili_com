---
title: chinputlimits
order: 10
category:
  - vex
---

[chop](../contexts/chop.html)

`int chinputlimits(int opinput, int channel, float &channel_min, float &channel_max)`

## Arguments

`opinput`

Context(s) CHOP 输入索引，如果省略则为-1。

`channel`

当读取一个`通道'或`通道样本'属性时，这是该通道的索引。如果你正在读取一个`clip'或`sample'属性，在这里使用`-1'。

`channel_min`

计算出的最小通道值。

`channel_max`

计算出的最大通道值。

## Returns

成功时返回 1，失败时返回 0。

劈劈啪啪

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
