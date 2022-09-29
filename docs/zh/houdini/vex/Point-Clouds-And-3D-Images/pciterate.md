---
title: pciterate
order: 20
category:
  - houdini
---
    
## 描述

This function can be used to iterate over all the points which were  
found in the pcopen query.

```c
int  pciterate(int handle)
```

This function can be used to iterate over all the points which werefound in a
[pcopen](pcopen.html) "Returns a handle to a point cloud file.") query. The
first argument is the handlereturned by `pcopen`.The function returns 1 while
there are points left in the iteration loop,or 0 when there are no further
points. This lets you use the function asthe condition in a [while
loop](../statement.html).

这个函数可以用来遍历 apcopenquery 中发现的所有点。

Warnings:

- It is not possible to nest pcunshaded or pciterate loops for the samehandle. That is, for a single [pcopen](pcopen.html) "Returns a handle to a point cloud file.") call, only one[pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven‘thad any data written to the channel yet.") or `pciterate` loop may be entered.

中发现的所有点。第一个参数是由 copen 返回的 handler。

- Computations involving derivatives inside [pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven‘thad any data written to the channel yet.")loops may have slightly different results. If derivatives are requiredfor variables which aren‘t set by [pcimport](pcimport.html "Imports channel data from a point cloud inside a pciterate or a pcunshaded loop.") it may bebetter to pre-compute the derivatives before the[pcunshaded](pcunshaded.html "Iterate over all of the points of a read-write channel which haven‘thad any data written to the channel yet.") loop is entered.

当迭代循环中有剩余的点时，该函数返回 1。
