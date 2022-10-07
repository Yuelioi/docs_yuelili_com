---
title: expand_udim
order: 5
category:
  - vex
---

`string expand\_udim(float u, float v, string path, ...)`

扫描输入路径的特殊转换字符，以执行 UDIM 或 UVTILE 风格的文件名扩展。

这与[texprintf](texprintf.html) ()("类似于 sprintf，但做 UDIM 或 UVTILE 纹理文件名的扩展。")相似，有两个明显的区别。

- 没有可变的打印参数。只进行 UDIM/UVTILE 扩展。
- 如果执行了 UDIM/UVTILE 扩展，该函数将检查纹理是否存在并可以访问。

## Arguments

`u`, `v`

要翻译成 UDIM 瓦片规格的纹理坐标。

`path`

一个文件路径。路径中的特殊字符序列将根据给定的 UV 坐标扩展成 UDIM 指定符。特殊的转换序列是：。

`%(UDIM)d` or `<UDIM>` The UDIM coordinate, as computed by `1000 + int(u)+1 + int(v)*10`
| `%(U)d` UVTILE 风格的 u 坐标(`int(u)+1`)| `%(V)d` UVTILE 风格的 v 坐标(`int(v)+1`)| `%(UVTILE)d`或`<UVTILE>`以`u%d_v%d`的形式展开 u 和 v 坐标。

纹理识别的`d`转换指定器可以用字段修改。例如`%(U)02d`或`%(V)04d`。

`int`
`=1`

"checkfile", 通常情况下，函数会检查扩展后的路径是否存在并可读。如果你传递`"checkfile", 0`对，函数将不执行这个检查。

## Returns

替换了任何 UDIM 控制序列的路径。

如果扩展的文件路径不存在或不可读，该函数将返回一个空字符串，除非你关闭`checkfile`变量参数。

## Examples



- `expand_udim(3.1, 4.15, "map_%(UDIM)d.rat")` - 返回 "map_1044.rat"
- `expand_udim(3.1, 4.15, "map_%(U)02d_%(V)02d.rat")` - 返回 "map_04_05.rat"
- `expand_udim(3.14, 11.5, "map_u%(U)d_v%(V)d.rat")` - 返回 "map_u4_v12.rat"
- `expand_udim(3.14, 11.5, "missing_file%(UDIM)d.rat")` - 缺少文件时返回""。
- `expand_udim(3.14, 11.5, "missing_file%(UDIM)d.rat", "checkfile", 0)` - 返回 "missing_file1044.rat"，因为 "checkfile "被禁用。
- `expand_udim(3.14, 11.5, "/path/file.rat")` - 返回"/path/file.rat"，无论该文件是否存在，因为没有 UDIM/UVTILE 扩展。

```c
// sprintf() will leave the %(UDIM)d format sequence unmodified.
string map = sprintf("%s/%s\_%(UDIM)d.rat", texture\_path, texture\_base);
// Expand the %(UDIM)d, returning an empty string if the map doesn't exist.
map = expand\_udim(u, v, map);
if (map != "")
Cf = texture(map, u, v);

```

## See also

- [texprintf](texprintf.html)
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
