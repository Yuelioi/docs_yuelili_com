---
title: ch2
order: 4
category:
  - vex
---

`matrix2 ch2(string channel)`

`matrix2 ch2(string channel, float time)`

如果由`通道`引用的节点参数是一个矩阵类型，那么基本参数的名称可以被用来返回所有的组件作为一个矩阵。

评估一个通道（或参数）并返回其值。时间的单位是_秒，而不是帧。如果你不指定时间，函数会返回当前时间的值。

Houdini 包括几个函数来评估不同类型的通道/参数。

- 要获得一个浮点数或字符串而不需要知道参数类型，使用[ch](ch.html)（"评估一个通道（或参数）并返回其值"）。
- 要得到一个浮点数，使用[chf](chf.html)（"评估一个通道（或参数）并返回其值"）。
- 要获得一个字符串，使用[chs](chs.html)（"评估一个通道（或参数）并返回其值"）。
- 对于整数参数，使用[chi](chi.html) () ("评估一个通道（或参数）并返回其值。")
- 对于矩阵型参数，使用 [ch3](ch3.html) () （"评估一个通道（或参数）并返回其值。"）或 [ch4](ch4.html) （"评估一个通道（或参数）并返回其值。"）。
- 对于斜坡参数，使用[chramp](chramp.html) ()（"评估一个斜坡参数并返回其值。"）或[chrampderiv](chrampderiv.html)（"评估一个参数相对于位置的导数。"）。
- 使用[chid](chid.html) () ("解析一个通道的字符串（或参数）并返回 op_id, parm_index 和 vector_index.")来获得一个`op_id`, `parm_index`和`vector_index`来评估通道，而不必做字符串解析。

## See also

- [ch](ch.html)
- [chf](chf.html)
- [chs](chs.html)
- [chi](chi.html)
- [chu](chu.html)
- [chv](chv.html)
- [chp](chp.html)
- [ch3](ch3.html)
- [ch4](ch4.html)
- [chramp](chramp.html)
- [chrampderiv](chrampderiv.html)

|
utility

[assert_enabled](assert_enabled.html)

[ch](ch.html)

[ch2](ch2.html)

[ch3](ch3.html)

[ch4](ch4.html)

[chdict](chdict.html)

[chexpr](chexpr.html)

[chexprf](chexprf.html)

[chexprt](chexprt.html)

[chf](chf.html)

[chi](chi.html)

[chid](chid.html)

[chp](chp.html)

[chramp](chramp.html)

[chrampderiv](chrampderiv.html)

[chs](chs.html)

[chsop](chsop.html)

[chsraw](chsraw.html)

[chu](chu.html)

[chv](chv.html)

[error](error.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[isbound](isbound.html)

[isconnected](isconnected.html)

[ninputs](ninputs.html)

[opid](opid.html)

[print_once](print_once.html)

[printf](printf.html)

[select](select.html)

[sleep](sleep.html)

[sprintf](sprintf.html)

[texprintf](texprintf.html)

[warning](warning.html)
