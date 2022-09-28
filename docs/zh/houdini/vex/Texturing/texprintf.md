---
title: texprintf
order: 12
category:
  - houdini
---
    
## 描述

Similar to sprintf, but does expansion of UDIM or UVTILE texture filename
expansion.

```c
string  texprintf(float u, float v, string format, ...)
```

Formats a string like [sprintf](sprintf.html "Formats a string like printf but
returns the result as a stringinstead of printing it."), but scans for special
conversioncharacters to perform either UDIM or UVTILE style filename
expansion.

形成一个像 printf 一样的字符串，但扫描特殊的转换

This can be significantly more efficient than calling sprintf() directly.

字符来执行 UDIM 或 UVTILE 风格的文件名扩展。

The special conversion sequences are:

这比直接调用 sprintf()要有效得多。

`%(UDIM)d`

The UDIM coordinate, as computed by

```c
1000 + int(u)+1 + int(v)*10
```

特殊的转换序列是。

`%(U)d`

The UVTILE style u-coordinate (`int(u)+1`)

UDIM 坐标，由 1000 + int(u)+1 + int(v)\*10 计算出来的

`%(V)d`

The UVTILE style v-coordinate (`int(v)+1`)

UVTILE 风格的 u 坐标(int(u)+1)

`%(UVTILE)d`

Expands to both u and v coordinates in the form `u%d_v%d`.

UVTILE 风格的 v 坐标(int(v)+1)

The `d` conversion specifier for texture identification can be modified
withfield modifiers.For example `%(U)02d` or `%(V)04d`.

以 u%d_v%d 的形式扩展到 u 和 v 坐标。

## Examples

    !vex// Returns "map_1044.rattexprintf(3.1, 4.15, "map_%(UDIM)d.rat");// Returns "map_04_05.rat"texprintf(3.1, 4.15, "map_%(U)02d_%(V)02d.rat");// Returns "map_u4_v12.rat"texprintf(3.14, 11.5, "map_u%(U)d_v%(V)d.rat");// Returns "/path/basename_04_05.rat"texprintf(3.1, 4.1, "%s/%s_%(U)02d_%(V)02d.rat", "/path", "basename");// Returns "/path/basename_u04_v05.rat"texprintf(3.1, 4.1, "%s/%s_%(UVTILE)02d.rat", "/path", "basename")


    string map = texprintf(u, v, "%s/%s_%(UDIM)d.rat", texture_path, texture_base);Cf = texture(map, u, v);
