---
title: chramp
order: 15
category:
  - vex
---

`float chramp(string channel, float ramppos)`

`float chramp(string channel, float ramppos, float time)`

`vector chramp(string channel, float ramppos)`

`vector chramp(string channel, float ramppos, float time)`

Evaluates a ramp parameter and return its value.

The ramppos is where on the ramp to evaluate. The ramppos is clamped to the range `[0,1]`.

The time parameter can be used if the ramp is animated to evaluate
at other than the current time.

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
