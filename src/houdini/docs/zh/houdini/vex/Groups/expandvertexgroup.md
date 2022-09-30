---
title: expandvertexgroup
order: 3
category:
  - houdini
---
    
## 描述

Returns an array of linear vertex numbers corresponding to a group string.

| Since | 17.0 |
| ----- | ---- |

```c
int [] expandvertexgroup(<geometry>geometry, string groupname)
```

```c
int [] expandvertexgroup(<geometry>geometry, string groupname, string mode)
```

This can use ad-hoc groups, like `0v3 1v2`.This uses the SOP group naming
convention, in particular that an empty string means _all_.

这可以使用特设组，如 0v3 1v2。

`mode` can be `ordered`, `unordered` or `split`.`ordered` is the default mode
and will return numbers in the order of appearance in the string, but only for
numbers. The order won‘t be kept when using expressions such as `@Cd.x>0.5`.
The same number won‘t appear twice in returned array.`unordered` mode
returns the resolved group following sorted point numbers order.`split` mode
starts by splitting the `groupname` string on `@` characters and then does one
resolution per sub string. The order is kept between the sub strings, but will
fallback to unordered when resolving a group expression. This same number can
appear multiple time when resolving using this mode.

这使用了 SOP 组的命名惯例，特别是空字符串意味着全部。
