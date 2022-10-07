---
title: printf
order: 13
category:
  - vex
---

`void printf(string format, ...)`

The format string is a simpler version of the C `printf` format string.
When a `%` symbol is found in the string, an argument will be printed
out in a format specified by the characters following the `%` symbol.
The conversion of the argument is specified by a single letter: `g`, `f`,
`s`, `d`, `x`, `c`, `p`.

You can prefix the format option with an optional prefix characters to control
the formatting of the output. The general form of a prefix is
`[flags][width][.precision][format]`, where Flags can be:

- `-`: The result will be left justified in the field
- `+`: A numeric value will be prefixed with either `+` for positive
  values. A non-standard behavior of this flag is that string
  arguments will be quoted when the `+` flag is set.
- `0`: For numeric values, leading zeros are used to pad the field.

Width

The width can be specified by one or more decimal digits. Alternately, if
an asterisk (`*`) is given, the width will be taken from the next value
in the `printf` argument list.

Precision

The precision can be specified by one or more decimal digits. Alternately,
if an asterisk (`*`) is given, the width will be taken from the next value
in the `printf` argument list.

The different format characters supported are

`%g`, `%p`, `%c`

Print an integer float, vector, vector4, matrix3, matrix or string
in “general” form.

`%f`, `%e`, `%E`

Print a float, vector, vector4, matrix3 or matrix in floating point
form.

`%s`

Print a string.

`%d`, `%i`

Print an integer variable in decimal.

`%x`, `%X`

Print an integer variable in hexidecimal. The value will be prefixed with
“0x” (i.e. 0×42).

`%o`

Print an integer variable in octal.

`%%`

Print a percent sign (%).

## Examples



```c
printf("P = %g, dot(N, P) = %g, %d = %x\n", P, dot(N, P), ptnum, ptnum);
printf("RGB = {%g,%g,%g}\n", clr.r, clr.g, clr.b);
printf("P = %20s\n", "20 chars");
printf("%-+20s\n", "Left justified and quoted");
printf("%+08.3g\n", velocity);
printf("%\*.\*g\n", width, precision, value);
Cf = texture(sprintf("/maps/map%d.rat", i));
Cf = texture(sprintf("/maps/map%04d.rat", i));

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
