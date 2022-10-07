---
title: chid
order: 13
category:
  - vex
---

自 17.5 以来

`void chid(string channel\_path, int &op\_id, int &parm\_index, int &vector\_index)`

`void chid(string op\_path, string channel\_name, int &op\_id, int &parm\_index, int &vector\_index)`

`int chid(int op\_id, int parm\_index, int vector\_index)`

解决一个由通道路径或操作者路径给出的通道，并返回

其对应的运算符 id、参数 id 和 vector*index 通过输出参数。失败时返回-1 值。你也可以使用最后一个不接受通道*路径的重载函数来测试键的有效性。如果 id 是有效的，返回 1，否则返回 0。

## See also

- [ch](ch.html)
- [chf](chf.html)
- [chs](chs.html)
- [chi](chi.html)
- [chv](chv.html)
- [ch3](ch3.html)
- [ch4](ch4.html)
- [chramp](chramp.html)
- [chrampderiv](chrampderiv.html)
- [opid](opid.html)

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
