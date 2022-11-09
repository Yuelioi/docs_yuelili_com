---
title: assert_enabled
order: 2
category:
  - vex
---

`int assert_enabled()`

Returns 1 if the environment variable `HOUDINI_VEX_ASSERT` is set or 0 if the variable isn’t set.

The `assert()` macro uses this function to only execute assertions when `HOUDINI_VEX_ASSERT` is set:

```c
#define assert(EXPR) \
 if (assert_enabled()) { \
 if (!(EXPR)) print_once(sprintf('VEX Assertion Failed %s:%d - (%s)\n', \
 __FILE__, __LINE__, #EXPR)); \
 }

```

You could use this function to write your own assert macro (for example, you might write a macro that used your studio’s logging infrastructure).

See [using assertions in VEX](../assertions.html) () ("You can use the assert() macro to print information while you are debugging VEX code.") for more information.

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
