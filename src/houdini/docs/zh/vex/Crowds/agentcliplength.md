---
title: agentcliplength
order: 9
category:
  - houdini
---
    
## 描述

Returns the length (in seconds) of an agent‘sanimation clip.

```c
float  agentcliplength(<geometry>geometry, int prim, string clipname)
```

Returns `0` if `prim` is out of range or is not an agent primitive, or if
`clipname` is not one of the agent‘s[animation clips](agentclipcatalog.html) "Returns all of the animation clips that have been loaded for an agent
primitive.").

如果 prim 超出范围或不是一个代理基元，或如果 clipname 不是代理的 animation clips 之一，则返回 0。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

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
