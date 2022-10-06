---
title: inprimgroup
order: 5
category:
  - houdini
---
    
## 描述

Returns 1 if the primitive specified by the primitive number is in the group
specified by the string.

```c
int  inprimgroup(<geometry>geometry, string groupname, int primnum)
```

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是一个 op:/path/to/sopreference。

Returns

`1` if the groups exists and the primitive is in the group, or `0` otherwise.

如果组存在且基元在组内，则为 1，否则为 0。

This can use ad-hoc groups, like `0-3` or `@Cd.x>0.5`.It matches the SOPgroup
naming convention, in particular that an empty string means allprimitives.

这可以使用特设的组，like0-3or@Cd.x>0.5。 它与 SOP
