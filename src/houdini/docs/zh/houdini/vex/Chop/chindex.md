---
title: chindex
order: 7
category:
  - houdini
---
    
## 描述

Returns the channel index from a input given a channel name.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
int  chindex(int opinput, string name)
```

```c
int  chindex(string name)
```

```c
int [] chindex(string names[])
```

Returns the channel index from a input given a channel name or -1 on failure.

从一个给定的通道名称的输入中返回通道索引，如果失败则返回-1。

`opinput`

CHOP Input index or -1 if omitted.

CHOP 输入索引，如果省略则为-1。

`name`

Channel name to lookup.

要查询的通道名称。

`names`

Array of Channel names to lookup.

要查询的通道名称的数组。
