---
title: expand_udim
order: 4
category:
  - houdini
---
    
## 描述

Perform UDIM or UVTILE texture filename expansion.

```c
string  expand_udim(float u, float v, string path, ...)
```

Scans the input path for special conversion characters to perform either
UDIMor UVTILE style filename expansion.

扫描输入路径中的特殊转换字符，以执行 UDIM

This is similar to [texprintf](texprintf.html "Similar to sprintf, but does
expansion of UDIM or UVTILE texture filename expansion."), with two
significant differences:

或 UVTILE 风格的文件名扩展。

- There are no variadic print arguments. Only UDIM/UVTILE expansion is performed.

这与 otexprintf 相似，但有两个明显的区别。

- If UDIM/UVTILE expansion was performed, the function checks to see if the texture exists and is accessible.

没有可变的打印参数。只执行 UDIM/UVTILE 扩展。

`u`, `v`

The texture coordinates to translate into a UDIM tile specification.

如果执行了 UDIM/UVTILE 扩展，该函数将检查纹理是否存在并且可以访问。

`path`

A file path. Special character sequences in the path will be expanded into
UDIM specifiers based on the given UV coordinates. The special conversion
sequences are:

要翻译成 UDIM 瓦片规格的纹理坐标。

`%(UDIM)d` or `<UDIM>`

|

The UDIM coordinate, as computed by

```c
1000 + int(u)+1 + int(v)*10
```

一个文件路径。路径中的特殊字符序列将根据给定的 UV 坐标扩展成 UDIM 规范。特殊的转换序列是。

---|---

`%(U)d`

|

The UVTILE style u-coordinate (`int(u)+1`)

UDIM 坐标，由 1000 + int(u)+1 + int(v)\*10 计算得出。

`%(V)d`

|

The UVTILE style v-coordinate (`int(v)+1`)

UVTILE 风格的 u 坐标(int(u)+1)

`%(UVTILE)d` or `<UVTILE>`

|

Expands both u and v coordinates in the form `u%d_v%d`.

UVTILE 风格的 v 坐标(int(v)+1)

The `d` conversion specifier for texture identification can be modified
withfield modifiers.For example `%(U)02d` or `%(V)04d`.

以 u%d_v%d 的形式扩展 u 和 v 坐标。

"checkfile",` int``=1 `

Normally, the function checks whether the expanded path exists and is
readable. If you pass the

```c
"checkfile", 0
```

pair, the function will not perform
this check.

用于识别纹理的 conversion 指定器可以用

Returns

The path with any UDIM control sequences replaced.

字段修改器。 例如，%(U)02d 或%(V)04d。

If the expanded file path does not exist or is not readable, the function will
return an empty string, unless you turn off the `checkfile` variadic argument.

通常情况下，该函数会检查扩展的路径是否存在并可读。如果你传递 "checkfile"，0 对，函数将不执行这个检查。

## Examples

-

```c
expand_udim(3.1, 4.15, "map_%(UDIM)d.rat")
```

\- Returns “map_1044.rat”

替换带有任何 UDIM 控制序列的路径。

-

```c
expand_udim(3.1, 4.15, "map_%(U)02d_%(V)02d.rat")
```

\- Returns “map_04_05.rat”

如果扩展后的文件路径不存在或不可读，该函数将返回一个空字符串，除非你关闭 checkfilevariadic 参数。

-

```c
expand_udim(3.14, 11.5, "map_u%(U)d_v%(V)d.rat")
```

\- Returns “map_u4_v12.rat”

expand*udim(3.1, 4.15, "map*%(UDIM)d.rat")-返回 "map_1044.rat"

-

```c
expand_udim(3.14, 11.5, "missing_file%(UDIM)d.rat")
```

\- Returns “” for missing files.

expand*udim(3.1, 4.15, "map*%(U)02d\_%(V)02d.rat")--返回 "map_04_05.rat"

-

```c
expand_udim(3.14, 11.5, "missing_file%(UDIM)d.rat", "checkfile", 0)
```

\- Returns “missing_file1044.rat” since “checkfile” is disabled.

expand_udim(3.14, 11.5, "map_u%(U)d_v%(V)d.rat")--返回 "map_u4_v12.rat"

-

```c
expand_udim(3.14, 11.5, "/path/file.rat")
```

\- Returns “/path/file.rat” whether the file exists or not since there are no UDIM/UVTILE expansions.

expand_udim(3.14, 11.5, "missing_file%(UDIM)d.rat")--如果文件丢失，返回""。

    // sprintf() will leave the %(UDIM)d format sequence unmodified.string map = sprintf("%s/%s_%(UDIM)d.rat", texture_path, texture_base);// Expand the %(UDIM)d, returning an empty string if the map doesn't exist.map = expand_udim(u, v, map);if (map != "")Cf = texture(map, u, v);
