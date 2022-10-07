---
title: chrampderiv
order: 16
category:
  - vex
---



Since 18.0

`float chrampderiv(string channel, float ramppos)`

`float chrampderiv(string channel, float ramppos, float time)`

`vector chrampderiv(string channel, float ramppos)`

`vector chrampderiv(string channel, float ramppos, float time)`

Evaluates the derivative of a parm parameter with respect to position.

The ramppos is where on the ramp to evaluate. The ramppos is clamped to the range `[0,1]`

The time parameter can be used if the ramp is animated to evaluate
at other than the current time.
::: info Note that this does not take a derivative with respect to time.



## See also

- [chramp](chramp.html)
- [ch](ch.html)
- [chf](chf.html)
- [chi](chi.html)
- [chv](chv.html)
- [chs](chs.html)
- [ch3](ch3.html)
- [ch4](ch4.html)

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
