## 描述

Renames a CHOP channel.

Context(s) | [chop](../contexts/chop.html)  
---|---  
  

```c
int  chrename(int channel_index, string new_name)
```



```c
int  chrename(string channel_name, string new_name)
```


This function renames a CHOP channel . It works only when iterating over Clip,
Channel or Samples, not when iterating over ChannelSample.

这个函数重命名一个CHOP通道。它只在遍历Clip、Channel或Samples时起作用，在遍历ChannelSample时不起作用。

Returns 1 if channel was renamed or 0 otherwise.

如果通道被重命名，返回1，否则返回0。

`channel_index`

The channel index to rename.

要重命名的通道索引。

`channel_name`

The channel to rename.

要重命名的通道。

`new_name`

The new name.

新的名称。

