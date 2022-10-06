---
title: agentchannelvalue
order: 4
category:
  - houdini
---
    
## 描述

Returns the current value of an agent primitive‘schannel.

| Since | 18.0 |
| ----- | ---- |

```c
float  agentchannelvalue(<geometry>geometry, int prim, int channel)
```

Returns zero if `prim` is out of range, `prim` is not an agent primitive, or
`channel` is out of range.

如果 prim 超出范围，prim 不是代理 prim，或者 channel 超出范围，则返回 0。

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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`prim`

The primitive number.

原始编号。

`channel`

Index of a channel in the agent‘srig.

Agentâs rig 中的一个通道的索引。
