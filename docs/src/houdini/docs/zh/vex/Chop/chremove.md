---
title: chremove
order: 19
category:
  - vex
---

[chop](../contexts/chop.html)

`int chremove(int channel\_index)`

`int chremove(int channel\_indices[])`

`int chremove(string channel\_name)`

`int chremove(string channel\_names[])`

Context(s) 这个函数从一个 CHOP 节点中移除通道。它只在迭代 Clip、Channel 或 Samples 时起作用，在迭代 ChannelSample 时不起作用。

如果所有通道都被移除，则返回 1，否则返回 0。

## Arguments

`channel_index`

要删除的通道索引。

`channel_indices`

要删除的通道索引数组。

`channel_name`

要删除的频道名称。

`channel_names`

要删除的通道名称数组。

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
