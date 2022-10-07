---
title: chattr
order: 3
category:
  - vex
---

[chop](../contexts/chop.html)

`<type> chattr(string attrname, int &success)`

`<type> chattr(int opinput, string attrname, int &success)`

上下文(s) 获取一个片段级属性的值。没有`opinput'的版本假定是第一个输入（0）。

`<type> chattr(string attrname, int channel, int &success)`

`<type> chattr(int opinput, string attrname, int channel, int &success)`

获取一个通道级属性的值。没有`opinput'的版本假设是第一个输入（0）。

`<type> chattr(string attrname, int channel, int sample, int &success)`

`<type> chattr(int opinput, string attrname, int channel, int sample, int &success)`

获取一个属性的值。该函数从其他参数中猜测属性的类别。没有`opinput`的版本假设第一个输入（0）。

`<type> chattr(string attrclass, string attrname, int channel, int sample, int &success)`

`<type> chattr(int opinput, string attribclass, string attrname, int channel, int sample, int &success)`

获取一个特定类别的属性值。没有`opinput'的版本假设是第一个输入（0）。

CHOP 属性存储了片段、通道、采样或通道/采样对的元数据。

这个函数读取一个 CHOP 属性的值。使用 [chsetattr](chsetattr.html) () ("Set the value of a CHOP attribute.") 来设置 CHOP 属性。

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

没有这个参数的签名与你传递空字符串的行为是一样的。

`attrname`

要读取的属性的名称。

`channel`

当读取一个`通道'或`通道样本'属性时，这是该通道的索引。如果你正在读取一个`clip'或`sample'属性，在这里使用`-1'。

`sample`

当读取一个`sample'或`channelsample'属性时，这就是样本号。如果你正在读取一个`clip'或`channel'属性，在这里使用`-1'。

`success`

如果给定的属性存在并且可以被读取，该函数将这个变量设置为`1'。否则，它将这个变量设置为`0'。

## Returns

属性的值。

## Examples



读取一个通道的 "出口 "属性

```c
int success = 0
int input = 0;
string attrname = "export";
string attrclass = "channel";
int channel = 0; // Or use C global variable for current channel index.
int sample = -1; // Or use I global variable for current sample index.
string s = chattr(input, attrname, attrclass, channel, sample, success )
if (success) {
 // Do something with s
 printf("s=%s\n", s);
} else {
 // Couldn't read attribute, usually because an attribute with that
 // name doesn't exist
}

```

## See also

- [chsetattr](chsetattr.html)
- [chattrnames](chattrnames.html)

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
