---
title: agentclipchannelnames
order: 8
category:
  - houdini
---
    
## 描述

Returns the names of the channels in an agent‘sanimation clip.

`string [] agentclipchannelnames(<geometry>geometry, int prim, string clipname)`

Returns an empty array if `clipname` is not one of the agent‘s[animation
clips](agentclipcatalog.html "Returns all of the animation clips that have
been loaded for an agent primitive."),`prim` is out of range, or `prim` is not
an agent primitive.

如果 clipname 不是 agentâsanimation clips 之一，prim 超出范围，或者 prim 不是 agent 的 prim，返回一个空数组。

For a list of the agent‘stransforms, use
[agenttransformnames](agenttransformnames.html "Returns the name of each
transform in an agent primitive‘srig.").

对于代理的变换列表，使用 agenttransformnames。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（如 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`prim`

The primitive number.

基质编号。

`clipname`

The name of the animation clip.

动画片段的名称。
