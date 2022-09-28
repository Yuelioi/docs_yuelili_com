---
title: agentrigfindchannel
order: 35
category:
  - houdini
---
    
## 描述

Finds the index of a channel in an agent primitive‘srig.

| Since | 18.0 |
| ----- | ---- |

```c
int  agentrigfindchannel(<geometry>geometry, int prim, string channelname)
```

Returns `-1` if `channelname` was not found in the rig, `prim` is out of
range, or `prim` is not an agent primitive.This index can be used to access an
agent‘scurrent channel value using
[agentchannelvalue](agentchannelvalue.html "Returns the current value of an
agent primitive‘schannel.") and
[setagentchannelvalue](setagentchannelvalue.html "Overrides the value of an
agent primitive‘schannel."), or to sample the channel value from any clip
using [agentclipsample](agentclipsample.html "Samples a channel of an
agent‘sclip at a specific time.").

如果在装备中没有找到通道名称，或者基元超出范围，或者基元不是一个代理基元，则返回 1。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

这个索引可用于使用 agentchannelvalue 和 setagentchannelvalue 访问代理的当前通道值，或使用 agentclipsample 从任何片段中采样通道值。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

`prim`

The primitive number.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`channelname`

The name of a channel in the agent‘srig.

原始编号。
