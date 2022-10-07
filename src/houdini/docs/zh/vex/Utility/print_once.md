---
title: print_once
order: 12
category:
  - vex
---

`void print\_once(string msg, ...)`

Prints the string passed to the function exactly one time, even in a loop.
This is useful to print a message before the first iteration of a loop, without having to count iterations.

## Arguments

`msg`

The string to print. This string does support interpolating values.
Use [sprintf](sprintf.html "Formats a string like printf but returns the result as a string
instead of printing it.") to generate the msg string if you need to include values.

"global",
`int`
`=0`

Normally, multiple instances of `print_once()` call sites
will work independently of each other. That is, if two separate
call sites to `print_once()` are passed the same string, the string will be
printed twice (once per call site). With the “global” flag turned on, strings
are checked across all instances of the `print_once()` functions.

## Examples



```c
// Only print "Hello world" one time
for (int i = 0; i < 100; ++i)
 print\_once("Hello world\n");

// Print a missing texture warning, just one time across all shaders
print\_once( sprintf("Missing texture map: %s\n", texture\_map), "global", 1);

```

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
