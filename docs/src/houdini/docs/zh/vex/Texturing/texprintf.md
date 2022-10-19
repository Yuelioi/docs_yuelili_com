---
title: texprintf
order: 13
category:
  - vex
---

`string texprintf(float u, float v, string format, ...)`

像[sprintf](sprintf.html) ("像printf一样形成一个字符串，但将结果作为一个字符串返回，而不是打印出来。")一样形成一个字符串，但扫描特殊的转换字符，以执行 UDIM 或 UVTILE 风格的文件名扩展。

这比直接调用 sprintf()要有效得多。

特殊的转换序列是。

`%(UDIM)d`

UDIM 坐标，由`1000 + int(u)+1 + int(v)*10`计算得出。

`%(U)d`

UVTILE 风格的 u 坐标（`int(u)+1`）。

`%(V)d`

UVTILE 风格的 v 坐标（`int(v)+1`）。

`%(UVTILE)d`

以`u%d_v%d`的形式扩展到 u 和 v 坐标。

纹理识别的`d`转换指定器可以用字段修改。例如`%(U)02d`或`%(V)04d`。

## Examples



```c
!vex
// Returns "map_1044.rat
texprintf(3.1, 4.15, "map_%(UDIM)d.rat");

// Returns "map_04_05.rat"
texprintf(3.1, 4.15, "map_%(U)02d_%(V)02d.rat");

// Returns "map_u4_v12.rat"
texprintf(3.14, 11.5, "map_u%(U)d_v%(V)d.rat");

// Returns "/path/basename_04_05.rat"
texprintf(3.1, 4.1, "%s/%s_%(U)02d_%(V)02d.rat", "/path", "basename");

// Returns "/path/basename_u04_v05.rat"
texprintf(3.1, 4.1, "%s/%s_%(UVTILE)02d.rat", "/path", "basename")
```

```c
string map = texprintf(u, v, "%s/%s\_%(UDIM)d.rat", texture\_path, texture\_base);
Cf = texture(map, u, v);

```

## See also

- [sprintf](sprintf.html)
- [expand_udim](expand_udim.html)
- [texture](texture.html)

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
texture

[colormap](colormap.html)

[environment](environment.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[photonmap](photonmap.html)

[rawcolormap](rawcolormap.html)

[texprintf](texprintf.html)

[uvdist](uvdist.html)

|
udim

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[texprintf](texprintf.html)

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
