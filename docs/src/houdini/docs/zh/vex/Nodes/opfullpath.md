---
title: opfullpath
order: 26
category:
  - vex
---

`string opfullpath(string relative\_path)`

该函数返回被评估对象的给定相对路径的绝对路径。

该功能目前只在 Houdini 中是有意义的。

## Examples



- `opfullpath(".")` - 被评估的当前节点的完整路径。
- `opfullpath("...")` - 当前节点的父节点的完整路径。

## See also

- [split](split.html)
- [opdigits](opdigits.html)
- [splitpath](splitpath.html)
- [relativepath](relativepath.html)
