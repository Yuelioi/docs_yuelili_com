---
title: chrename
order: 20
category:
  - houdini
---
    
## 描述

Renames a CHOP channel.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
int  chrename(int channel_index, string new_name)
```

```c
int  chrename(string channel_name, string new_name)
```

This function renames a CHOP channel . It works only when iterating over Clip,
Channel or Samples, not when iterating over ChannelSample.

这个函数重命名一个 CHOP 通道。它只在遍历 Clip、Channel 或 Samples 时起作用，在遍历 ChannelSample 时不起作用。

Returns 1 if channel was renamed or 0 otherwise.

如果通道被重命名，返回 1，否则返回 0。

`channel_index`

The channel index to rename.

要重命名的通道索引。

`channel_name`

The channel to rename.

要重命名的通道。

`new_name`

The new name.

新的名称。
