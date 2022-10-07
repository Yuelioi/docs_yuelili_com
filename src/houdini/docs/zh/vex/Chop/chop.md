---
title: chop
order: 13
category:
  - vex
---

自 17.0 以来

`float chop(string filename, int|stringchannel, float|intsample)`

`vector2 chop(string filename, int|stringchannel, float|intsample)`

`vector chop(string filename, int|stringchannel, float|intsample)`

`vector4 chop(string filename, int|stringchannel, float|intsample)`

`matrix chop(string filename, int|stringchannel, float|intsample)`

在给定的索引处从通道中读取一个样本。

## Arguments

`filename`

使用 op: 语法查询的 CHOP 节点路径。还不支持直接从 CHOP 文件中读取。

`channel`

要查询的频道索引或频道名称。

`sample`

如果是小数，则从两个最近的点进行线性插值。

## Returns

在 CHOP 节点中，指定样本的通道值。

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
