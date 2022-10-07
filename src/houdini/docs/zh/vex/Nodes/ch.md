---
title: ch
order: 3
category:
  - vex
---

`float ch(string channel)`

`float ch(string channel, float time\_in\_sec)`

`string ch(string channel)`

`string ch(string channel, float time\_in\_sec)`

`string ch(string channel, float time\_in\_sec)`

`float ch(int op\_id, int parm\_index, int vector\_index)`

`float ch(int op\_id, int parm\_index, int vector\_index, float time\_in\_sec)`

Evaluates a channel (or parameter) and return its value. The time is specified in _seconds_, not in frames. If you don’t specify the time, the function returns the value at the current time.

Houdini includes several functions to evaluate channels/parameters of different types.

- To get a float or string without needing to know the parameter type, use [ch](ch.html "Evaluates a channel (or parameter) and return its value.").
- To get a float, use [chf](chf.html "Evaluates a channel (or parameter) and return its value.").
- To get a string, use [chs](chs.html "Evaluates a channel (or parameter) and return its value.").
- For integer parameters, use [chi](chi.html "Evaluates a channel (or parameter) and return its value.")
- For matrix type parameters, use [ch3](ch3.html "Evaluates a channel (or parameter) and return its value.") or [ch4](ch4.html "Evaluates a channel (or parameter) and return its value.").
- For a ramp parameter, use [chramp](chramp.html "Evaluates a ramp parameter and return its value.") or [chrampderiv](chrampderiv.html "Evaluates the derivative of a parm parameter with respect to position.").
- Use [chid](chid.html "Resolves a channel string (or parameter) and return op_id, parm_index and vector_index.") to get an `op_id`, `parm_index` and `vector_index` to evaluate the channel without having to do string resolution.

## Examples

[¶](#examples)

```c
// Get the X transform of the box1 SOP at 1.5s into the animation
float tx = ch("/obj/geo1/box1/tx", 1.5)

```



## See also

- [attrib](attrib.html)
- [chf](chf.html)
- [chs](chs.html)
- [chi](chi.html)
- [chv](chv.html)
- [ch3](ch3.html)
- [ch4](ch4.html)
- [chramp](chramp.html)
- [chid](chid.html)
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
