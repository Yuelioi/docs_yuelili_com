---
title: abspath
order: 2
category:
  - vex
---

自 18.0 以来

`string abspath(string relpath)`

返回所提供的路径转换为绝对路径。相对路径被视为相对于 Houdini 的当前工作目录。如果提供的路径已经是绝对路径，那么返回的路径将不会改变。该文件不需要存在。

## See also

- [relpath](relpath.html)
