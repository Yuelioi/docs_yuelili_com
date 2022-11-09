---
title: error
order: 4
category:
  - vex
---

`void error(string format, ...)`

Reports a custom runtime VEX error. This uses the same format string syntax as [printf](printf.html) () ("Prints values to the console which started the VEX program.").

If something can still be done as an acceptable fallback, instead of outright failing,
it may be worth reporting a [warning](warning.html) () ("Reports a custom runtime VEX warning."), instead of an error.

## Examples



```c
if (!pointattribtype(0,chs("nameattrib")) != 2) {
 error("Name attribute %s must be a string attribute!", chs("nameattrib"));
 return;
}
if (chf("distance") < 0) {
 error("")
}
float minimumValue = chf("min");
float maximumValue = chf("max");
if (minimumValue >= maximumValue) {
 error("Minimum (%f) must be strictly less than maximum (%f)! It's unclear what should be done.", minimumValue, maximumValue);
 return;
}

```

## See also

- [warning](warning.html)
- [printf](printf.html)

|
print

[error](error.html)

[print_once](print_once.html)

[printf](printf.html)

[sprintf](sprintf.html)

[warning](warning.html)

|
string

[atof](atof.html)

[atoi](atoi.html)

[concat](concat.html)

[decode](decode.html)

[decodeattrib](decodeattrib.html)

[decodeparm](decodeparm.html)

[decodeutf8](decodeutf8.html)

[encode](encode.html)

[encodeattrib](encodeattrib.html)

[encodeparm](encodeparm.html)

[encodeutf8](encodeutf8.html)

[error](error.html)

[expand_udim](expand_udim.html)

[find](find.html)

[has_udim](has_udim.html)

[insert](insert.html)

[isvalidindex](isvalidindex.html)

[itoa](itoa.html)

[join](join.html)

[lstrip](lstrip.html)

[makevalidvarname](makevalidvarname.html)

[match](match.html)

[pluralize](pluralize.html)

[print_once](print_once.html)

[printf](printf.html)

[relativepath](relativepath.html)

[replace](replace.html)

[replace_match](replace_match.html)

[rstrip](rstrip.html)

[split](split.html)

[splitpath](splitpath.html)

[sprintf](sprintf.html)

[strip](strip.html)

[strlen](strlen.html)

[texprintf](texprintf.html)

[warning](warning.html)

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
