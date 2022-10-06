---
title: pcunshaded
order: 30
category:
  - houdini
---
    
## 描述

Iterate over all of the points of a read-write channel which haven‘t  
had any data written to the channel yet.

```c
int  pcunshaded(int handle, string channel_name)
```

Like [pciterate](pciterate.html "This function can be used to iterate over all
the points which werefound in the pcopen query."), this function can be used
to iterate overpoints which were found in a [pcopen](pcopen.html) "Returns a
handle to a point cloud file.") query. The first argument isthe handle
returned by `pcopen`.

和 epciterate 一样，这个函数可以用来遍历

However, where `pciterate` iterates over all the points, this functiononly
iterates over points where the channel in channel_name hasnot yet been written
to.

迭代在 apcopenquery 中发现的点。第一个参数是

The function returns 1 while there are points left in the iteration loop,or 0
when there are no further points. This lets you use the function asthe
condition in a [while loop](../statement.html).

由 copen 返回的 handler。

Warnings:

- This function will not work correctly when used in multi-threaded OPs.It is not possible to nest `pcunshaded` or [pciterate](pciterate.html "This function can be used to iterate over all the points which werefound in the pcopen query.")loops for the same handle. That is, for a single [pcopen](pcopen.html) "Returns a handle to a point cloud file.")call, only one `pcunshaded` or [pciterate](pciterate.html "This function can be used to iterate over all the points which werefound in the pcopen query.") loop may beentered.

然而，与 epciterate 遍历所有的点相比，这个函数

- Computations involving derivatives inside `pcunshaded` loops may haveslightly different results. If derivatives are required for variableswhich aren‘t set by [pcimport](pcimport.html "Imports channel data from a point cloud inside a pciterate or a pcunshaded loop.") it may be better topre-compute the derivatives before the `pcunshaded` loop is entered.

这个函数只遍历那些通道 inchannel_namehas
