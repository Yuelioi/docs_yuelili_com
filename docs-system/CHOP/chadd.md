## 描述

Adds new channels to a CHOP node.

Context(s) | [chop](../contexts/chop.html)  
---|---  
  

```c
int  chadd(string channel_names)
```



```c
int  chadd(string channel_names[])
```


This function adds new channels to a CHOP node. It works only when iterating
over Clip, Channel or Samples, not when iterating over ChannelSample. You
can‘t control the default channel values when adding channels using this
function. You need to add another 
```c
Channel Wrangle
```
 and compute the channel
data inside it.

这个函数向CHOP节点添加新的通道。它只在迭代Clip、Channel或Samples时起作用，在迭代ChannelSample时不起作用。当使用这个函数添加通道时，你不能控制默认的通道值。你需要添加另一个Channel
Wrangle并计算其中的通道数据。

Returns 1 on success, 0 otherwise.

成功时返回1，否则返回0。

`channel_names`

The names of the attributes to add. Can be an array or a space separated list
of channel names.

要添加的属性的名称。可以是一个数组或一个空格分隔的通道名称的列表。

