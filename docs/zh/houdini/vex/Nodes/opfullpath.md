---
title: opfullpath
order: 22
category:
  - houdini
---
    
## 描述

Returns the full path for the given relative path

```c
string  opfullpath(string relative_path)
```

This function returns the absolute path for a given relative path to the
object being evaluated.

该函数返回被评估对象的给定相对路径的绝对路径。

The function is currently only meaningful in Houdini.

该函数目前只在 Houdini 中具有意义。

## Examples

-

```c
opfullpath(".")
```

\- The full path of the current node being evaluated

opfullpath("...")--正在评估的当前节点的完整路径

-

```c
opfullpath("..")
```

\- The full path of the current node‘sparent

opfullpath("...")--当前节点的父节点的完整路径。
