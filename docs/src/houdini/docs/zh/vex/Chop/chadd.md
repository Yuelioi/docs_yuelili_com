---
title: chadd
order: 2
category:
  - vex
---

[chop](../contexts/chop.html)

`int chadd(string channel\_names)`

`int chadd(string channel\_names[])`

Context(s) 这个函数向 CHOP 节点添加新的通道。它只在迭代 Clip、Channel 或 Samples 时有效，在迭代 ChannelSample 时无效。使用这个函数添加通道时，你不能控制默认的通道值。你需要添加另一个 "Channel Wrangle "并在其中计算通道数据。

成功时返回 1，否则返回 0。

## Arguments

`channel_names`

要添加的属性的名称。可以是一个数组或一个空格分隔的通道名称列表。

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
