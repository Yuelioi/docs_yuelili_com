---
title: opfullpath
order: 26
category:
  - houdini
---

## Description

`string opfullpath(string relative_path)`

This function returns the absolute path for a given relative path to the
object being evaluated.

The function is currently only meaningful in Houdini.

## Examples ¶

- `opfullpath(".")` \- The full path of the current node being evaluated

- `opfullpath("..")` \- The full path of the current node’s parent

## See also

- [split](split.html)
- [opdigits](opdigits.html)
- [splitpath](splitpath.html)
- [relativepath](relativepath.html)
