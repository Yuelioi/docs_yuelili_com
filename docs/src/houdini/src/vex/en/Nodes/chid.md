---
title: chid
order: 13
category:
  - vex
---

Since

17.5

`void chid(string channel_path, int &op_id, int &parm_index, int &vector_index)`

`void chid(string op_path, string channel_name, int &op_id, int &parm_index, int &vector_index)`

`int chid(int op_id, int parm_index, int vector_index)`

Resolves a channel given by a channel path or operator path and returns

its corresponding operator id, parameter id and vector_index through output
arguments. Return -1 values on failure. You can also use the last overloaded
function that doesn’t take a channel_path to test for validity of the keys.
Returns 1 if the ids are valid, otherwise returns 0.

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
