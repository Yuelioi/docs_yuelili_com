---
title: json_dumps
order: 2
category:
  - vex
---

自 18.5 以来

`string json\_dumps(dict d, int flags)`

将字典转换为一个与 JSON 兼容的字符串。因为 JSON 不是类型化的，但 VEX 字典是类型化的，有两种格式可以转换。完全类型化的格式使每个字典的值对应于一个明确提供 "类型 "和 "值 "的映射，允许完全的往返。紧凑格式省略了这一点，这意味着在转换时必须进行猜测，所以像向量会变成浮点数组。

可能的标志值是：。

`0` 单行完全输入的 JSON。| `1`在多行上完全打字的 JSON。| `2`单行紧凑无类型的 JSON。| `3`多行紧凑无类型的 JSON。

## See also

- [json_loads](json_loads.html)
