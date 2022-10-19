---
title: chname
order: 6
category:
  - vex
---

[cop](../contexts/cop.html)
[chop](../contexts/chop.html)

## 背景(s) COPs

[¶](#cops)

`string chname(int plane\_index, int chindex)`

返回平面上的通道名称（例如，`"r"`，或`"x"`）。

## 胆固醇

[¶](#chops)

`string chname(int channel\_index)`

`string chname(int opinput, int channel\_index)`

返回通道的名称，例如`"tx"`。要获得所有通道名称的列表，请使用[chnames](chnames.html) () ("返回一个给定的 CHOP 输入的所有 CHOP 通道名称。") 。

## Arguments

`opinput`

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

如果你指定`-1`，函数使用当前的 CHOP 节点或输入`0`，如果它是连接的。

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

| 输出平面

[alphaname](alphaname.html)

[bumpname](bumpname.html)

[chname](chname.html)

[colorname](colorname.html)

[depthname](depthname.html)

[hasplane](hasplane.html)

[lumname](lumname.html)

[maskname](maskname.html)

[normalname](normalname.html)

[planeindex](planeindex.html)

[planename](planename.html)

[planesize](planesize.html)

[pointname](pointname.html)

[velocityname](velocityname.html)
