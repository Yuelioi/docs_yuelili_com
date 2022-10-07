---
title: chstart
order: 27
category:
  - vex
---

[chop](../contexts/chop.html)

`int chstart()`

上下文 使用`-1`作为`opinput`。

`int chstart(int opinput)`

返回给定的 CHOP 输入中的通道数据的第一个样本的索引。

## Arguments

`opinput`

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

如果你指定`-1`，函数使用当前的 CHOP 节点或输入`0`，如果它是连接的。

要获得起始帧，使用[chstartf](chstartf.html) ("返回与指定输入的第一个样本对应的帧。")。要获得以秒为单位的开始时间，使用[chstartt](chstartt.html) ("返回与指定输入的第一个样本相对应的时间。")。

## See also

- [chstartf](chstartf.html)
- [chstartt](chstartt.html)

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
