---
title: chremove
order: 18
category:
  - houdini
---
    
## 描述

Removes channels from a CHOP node.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
int  chremove(int channel_index)
```

```c
int  chremove(int channel_indices[])
```

```c
int  chremove(string channel_name)
```

```c
int  chremove(string channel_names[])
```

This function removeschannels from a CHOP node. It works only when iterating
over Clip, Channel or Samples, not when iterating over ChannelSample.

这个函数从一个 CHOP 节点中移除通道。它只在迭代 Clip、Channel 或 Samples 时起作用，在迭代 ChannelSample 时不起作用。

Returns 1 if all channels were removed or 0 otherwise.

如果所有通道都被移除，返回 1，否则返回 0。

`channel_index`

The channel index to remove.

要删除的通道索引。

```c
channel_indices
```

The array of channel indices to remove.

要删除的通道索引的数组。

`channel_name`

The channel name to remove.

要移除的通道名称。

`channel_names`

The array of channel names to remove.

要删除的通道名称的数组。
