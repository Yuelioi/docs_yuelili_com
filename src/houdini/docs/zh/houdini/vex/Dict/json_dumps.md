---
title: json_dumps
order: 1
category:
  - houdini
---
    
## 描述

Converts a VEX dictionary into a JSON string.

| Since | 18.5 |
| ----- | ---- |

```c
string  json_dumps(dict d, int flags)
```

Converts the dictionary into a JSON-compatible string.Because JSONis not
typed, but VEX dictionaries are, there are two formats to convertto. The
fully-typed format has each dictionary value correspond toa map with a “type”
and “value” explicitly provided, allowing fullround tripping.The compact
format omits this, which means whenconverting back guesses have to be
performed, so things like vectorswill become float arrays.

将字典转换为与 JSON 兼容的字符串。 因为 JSON

The possible flag values are:

不是类型化的，但 VEX 字典是类型化的，有两种格式可以转换为

`0`

|

Fully typed JSON on a single line.

转换为。完全类型化的格式使每个字典值对应于

---|---

`1`

|

Fully typed JSON on multiple lines.

一个明确提供了 "类型 "和 "值 "的地图，允许全

`2`

|

Compact typeless JSON on a single line.

绕行。 紧凑格式省略了这一点，这意味着当

`3`

|

Compact typeless JSON on multiple lines.

转换时必须进行猜测，所以像向量的东西
