---
title: expandedgegroup
order: 5
category:
  - houdini
---
    
    [  
Houdini 19.0  
](../../index.html)  
**  
[  
VEX  
](../index.html)  
**  
[  
VEX Functions  
](index.html)  
\_\_

# expandedgegroup

VEX function

#

```c
int [] expandedgegroup(<geometry>geometry, string groupname)
```

```c
int [] expandedgegroup(<geometry>geometry, string groupname, string mode)
```

Returns a list of point pairs of the edges in the specified group of a
geometry file.

返回一个几何文件的指定组中的边的点对列表。

This can use ad-hoc groups, like `0` or `p0-1`.It matches the SOP group naming
convention, in particular that an empty string means all edges.

这可以使用特设的组，如 0orp0-1。 它符合 SOP 组的命名惯例，特别是空字符串意味着所有的边。

`mode` can be `ordered`, `unordered` or `split`.`ordered` is the default mode
and will return numbers in the order of appearance in the string, but only for
numbers. The order won‘t be kept when using expressions such as `@Cd.x>0.5`.
The same number won‘t appear twice in returned array.`unordered` mode
returns the resolved group following sorted point numbers order.`split` mode
starts by splitting the `groupname` string on `@` characters and then does one
resolution per sub string. The order is kept between the sub strings, but will
fallback to unordered when resolving a group expression. This same number can
appear multiple time when resolving using this mode.

modecan be ordered, unordered
orsplit.ordered 是默认模式，将按照字符串中出现的顺序返回数字，但只针对数字。当使用表达式如as@Cd.x>0.5 时，顺序不会被保留。unorderedmode 按照排序后的数字顺序返回已解析的组。splitmode 开始时在@字符上分割 groupnamestring，然后对每个子字符串进行一次解析。顺序在子字符串之间保持不变，但是当解析一个组的表达式时，会退回到无序的状态。在使用这种模式进行解析时，同一个数字可以出现多次。
