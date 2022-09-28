---
title: agentaddclip
order: 1
category:
  - houdini
---
    
## 描述

Add a clip into an agent‘sdefinition.

`int agentaddclip(int geohandle, int prim, string clipname, string clippath, int keepref)`

This function adds a `.clip` or `.bclip` file saved from a CHOP (or
generatedby an
[![](../../icons/CROWDS/agent.svg)Agent](../../nodes/out/agent.html "This
output operator is used to write agent definition files.") ROP) to the
definition of the given agent primitive.Clips in an agent definition contains
transform animation for driving theagent‘sskeleton.

此函数将从 CHOP 保存的（或由 AgentROP 生成的）a.clipor.bclipfile 添加到给定的代理基元的定义。

The channels within the clip should of the form

```c
transform_name:channel_name
```

where _transform_name_ is a string matching the
values returned by[agenttransformnames](agenttransformnames.html "Returns the
name of each transform in an agent primitive‘srig.") and _channel_name_ is
one of `tx`, `ty`, `tz`, `rx`,`ry`, `rz`, `sx`, `sy`, or `sz`. The channels
starting with `t` denotetranslation, `r` denote rotation, and `s` denote
scale. The resultingtransforms will be treated as _local_ transforms, such as
those returned by[agentlocaltransform](agentlocaltransform.html "Returns the
current local space transform of an agent primitive‘sbone.") (ie. they are
relative to the corresponding parenttransform in the agent‘sskeleton).

生成的）添加到给定代理基元的定义中。

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

代理定义中的剪辑包含用于驱动代理骨架的转换动画。

`prim`

The primitive number of the agent primitive whose definition is to bemodified.

代理人的骨架。

`clipname`

The name to identify the clip. All clips in an agent definition must
haveunique names.

剪辑中的通道应该是 transform*name:channel_nam 的形式，其中\_transform_name*是与 agenttransformnames 返回的值相匹配的字符串，*channel_name*是 x、ty、tz、rx、ry、rz、sx、sy 或 sz 中的一个。以 ht 开头的通道表示

`clippath`

The filename of the `.clip` or `.bclip` file saved from a CHOP or generatedby
the [![](../../icons/CROWDS/agent.svg)Agent](../../nodes/out/agent.html "This
output operator is used to write agent definition files.") ROP. Use

```c
op:full_path_to_chop
```

to directly referto a CHOP in the scene.

平移，r 表示旋转，而 s 表示缩放。产生的

`keepref`

When `clippath` refers to a filename on disk, this boolean flag
indicateswhether the external reference should be maintained when the geometry
willbe saved. If the reference is maintained, then the original source of
theclip needs to be available when the saved geometry is used. Otherwise,
acopy of the clip will be inlined when saving out the geometry so that
theoriginal clip is no longer needed.

变换将被视为局部变换，例如那些由 agentlocaltransform 返回的变换（即，它们是相对于代理骨架中相应的父变换而言的）。
