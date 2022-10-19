---
title: ord
order: 23
category:
  - vex
---

`int ord(string value)`

返回给定字符串中第一个 UTF8 字符的代码点。

如果字符串的前缀不是有效的 UTF8 编码，或为空，则返回-1。

过长的 UTF8 编码将返回-1。

## See also

- [chr](chr.html)
