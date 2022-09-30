---
title: agentclipchannel
order: 7
category:
  - houdini
---
    
## 描述

Finds the index of a channel in an agent‘sanimation clip.

`int agentclipchannel(<geometry>geometry, int prim, string clipname, string channel)`

Returns the index of a channel in the specified animation clip.Returns -1 if
`clipname` is not one of the agent‘s[animation clips](agentclipcatalog.html) "Returns all of the animation clips that have been loaded for an agent
primitive."),`prim` is out of range, `prim` is not an agent primitive, or
`channel` does not exist.

返回指定动画片段中的通道索引。

For sampling the clip‘stransform channels, use
[agentrigfind](agentrigfind.html "Finds the index of a transform in an agent
primitive‘srig.") and either
[agentclipsamplelocal](agentclipsamplelocal.html "Samples an agent‘s
animation clip at a specific time.") or
[agentclipsampleworld](agentclipsampleworld.html "Samples an agent‘s
animation clip at a specific time.").

如果 clipname 不是代理的动画片段之一，prim 不在范围内，prim 不是代理的 primitive，或者通道不存在，则返回 1。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

为了对片段的变换通道进行采样，请使用 agentrigfind 和 agentclipsamplelocal 或 agentclipsampleworld。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入号码（从 0 开始）。

`prim`

The primitive number.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`clipname`

The name of the animation clip.

基质编号。

`channel`

Name of a channel in the animation clip.

动画片段的名称。
