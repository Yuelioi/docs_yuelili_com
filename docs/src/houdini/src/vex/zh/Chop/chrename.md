---
title: chrename
order: 21
category:
  - vex
---

[chop](../contexts/chop.html)

`int chrename(int channel_index, string new_name)`

`int chrename(string channel_name, string new_name)`

Context(s) 这个函数重命名一个 CHOP 通道。它只在迭代 Clip、Channel 或 Samples 时起作用，在迭代 ChannelSample 时不起作用。

如果通道被重新命名，返回 1，否则返回 0。

## Arguments

`channel_index`

要重命名的通道索引。

`channel_name`

要重命名的通道。

`new_name`

新的名字。

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
