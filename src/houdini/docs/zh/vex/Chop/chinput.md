---
title: chinput
order: 9
category:
  - vex
---

[chop](../contexts/chop.html)

`<type> chinput(int channel\_index, float|intsample)`

`<type> chinput(int opinput, int channel\_index, float|intsample)`

Context(s) 从给定索引的通道上读取一个样本。没有`opinput'的版本假设是第一个输入（0）。

`<type> chinput(string channel\_name, float|intsample)`

`<type> chinput(int opinput, string channel\_name, float|intsample)`

从给定名称的通道上读取一个样本。没有`opinput'的版本假设是第一个输入（0）。

`int chinput(int channel\_index, float|intsample, vector &t, vector &r, vector &s)`

`int chinput(int opinput, int channel\_index, float|intsample, vector &t, vector &r, vector &s)`

读取从给定索引开始的 9 个通道的样本。这些样本将在 3 个矢量输出参数中返回。成功时返回 1，失败时返回 0。没有`opinput`的版本假设第一个输入（0）。

`int chinput(string channel\_name, float|intsample, vector &t, vector &r, vector &s)`

`int chinput(int opinput, string channel\_name, float|intsample, vector &t, vector &r, vector &s)`

读取从给定的通道名称开始的 9 个通道的样本。这些样本将在 3 个矢量输出参数中返回。成功时返回 1，失败时返回 0。没有`opinput`的版本假设第一个输入（0）。

## Arguments

`opinput`

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

`sample`

如果是小数，则从两个最近的点进行线性插值。

## Returns

在一个输入中的指定样本处的通道值。

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
