---
title: agenttransformgroupmemberchannel
order: 40
category:
  - houdini
---
    
## 描述

Returns whether a channel is a member of the specified transform group.

| Since | 18.0 |
| ----- | ---- |

See [Transform Groups](../../crowds/agents.html#xformgroups) for more
information.

更多信息见 Transform Groups。

`int agenttransformgroupmemberchannel(<geometry>geometry, int prim, int transformgroupidx, int channel)`

Returns a non-zero value if the channel is a member of the specified transform
group, and zero otherwise.

如果通道是指定的变换组的成员，返回一个非零值，否则返回零。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入编号（从 0 开始）。

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

```c
transformgroupidx
```

Index of a transform group in the agent‘sdefinition.A transform group‘s
index can be obtained via
[agentfindtransformgroup](agentfindtransformgroup.html "Finds the index of a
transform group in an agent‘sdefinition.").

代理商定义中的变换组的索引。

`channel`

Index of a channel in the agent‘srig.

变换组的索引可以通过 agentfindtransformgroup 获得。
