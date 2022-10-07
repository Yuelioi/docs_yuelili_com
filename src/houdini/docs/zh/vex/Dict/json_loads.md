---
title: json_loads
order: 3
category:
  - vex
---

自 18.5 以来

`dict json\_loads(string json, int flags)`

试图从一个 JSON 风格的字符串中创建一个字典。如果发生解析错误，就会创建一个空的字典。有两种格式的 JSON 被认可。完全类型化的格式由存储类型和值的每个元素的映射组成。这允许对 VEX 字典进行适当的绕行，但很冗长。紧凑格式要求字典猜测 JSON 元素的类型，所以像向量这样的东西将被创建为浮点数组。

VEX 字典需要有统一类型的数组。如果一个数组有不同的类型，元素将被创建为原始 JSON 值的字符串。

可能的标志值是：。

`0`自动检测字符串是有类型还是无类型的 JSON | `1`要求完全有类型的 JSON | `2`要求无类型的 JSON。如果读取的是全类型的 JSON，将创建一个额外的字典层。

## See also

- [json_dumps](json_dumps.html)
