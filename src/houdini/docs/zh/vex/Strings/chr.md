---
title: chr
order: 3
category:
  - vex
---

`string chr(int value)`

返回一个字符串，将给出的 unicode 编码点编码为 UTF8 值。对于小于 128 的值，这是该值的一个字节的字符串。更高的值将产生多个字节的字符串。

如果给定的代码点不是一个有效的代码点，将返回一个空字符串。

## See also

- [ord](ord.html)
