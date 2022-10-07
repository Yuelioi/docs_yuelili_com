---
title: isbound
order: 7
category:
  - vex
---

`int isbound(string variable\_name)`

Parameters in VEX can be overridden by geometry attributes (if the
attributes exist on the surface being rendered). If the geometry
overrides the default attribute, this function will return 1. Otherwise
it will return 0.

::: info Note

Though this function is defined for all contexts, it is only useful in the Displacement, Surface, and SOP contexts. No other contexts

can currently bind geometry attributes to VEX variables.

Example, in a SOP function:

```c
sop
mycolor(vector uv=0; string map="")
{
if (isbound("uv") && map != "")
{
 // User has texture coordinates here, so create
 // velocity based on a texture map.
 v = colormap(map, uv);
}
else
{
 // No texture coordinates, so use a random value
 v = random(id);
}

```

::: info Note

`isbound` does not tell you if the attribute exists. It tells you if the attribute is bound. If you added an `@a` to a wrangle to bind the `a`, then `isbound` will work as you expect in CVEX. Without an `@a`, there is no parameter in your CVEX function to bind the attribute to, so it will be unbound.

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
