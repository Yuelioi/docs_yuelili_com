---
title: agentclipsample
order: 11
category:
  - houdini
---
    
## 描述

Samples a channel of an agent‘sclip at a specific time.

`float agentclipsample(<geometry>geometry, int prim, string clipname, float time, int channel_index)`

`float agentclipsample(<geometry>geometry, int prim, string clipname, float time, string channel)`

Evaluates the clip at the given time and returns the value of the specified
channel.Returns zero if `clipname` is not one of the agent‘s[animation
clips](agentclipcatalog.html "Returns all of the animation clips that have
been loaded for an agent primitive."),`prim` is out of range, `prim` is not an
agent primitive, `channel_index` is out of range, or `channel` does not exist.

评估给定时间的片段，并返回指定通道的值。

For sampling the clip‘stransform channels, use
[agentclipsamplelocal](agentclipsamplelocal.html "Samples an agent‘s
animation clip at a specific time.") or
[agentclipsampleworld](agentclipsampleworld.html "Samples an agent‘s
animation clip at a specific time.") instead.

如果 clipname 不是 agentâsanimation
clips 之一，prim 超出范围，prim 不是 agent 的 primitive，channel_index 超出范围，或者 channeldo 不存在，则返回 0。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

对于剪辑的变换通道的采样，使用 agentclipsamplelocal 或 agentclipsampleworld 来代替。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（如 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

`prim`

The primitive number.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`clipname`

The name of the animation clip.

基质编号。

`time`

The time (in seconds) to evaluate the clip at. If this time is greater than
the [clip‘slength](agentcliplength.html "Returns the length (in seconds)
of an agent‘sanimation clip."), it will be wrapped around.

动画片段的名称。

`channel_index`

Index of a channel in the animation clip, as returned by
[agentclipchannel](agentclipchannel.html "Finds the index of a channel in an
agent‘sanimation clip.").

评估该片段的时间（以秒为单位）。如果这个时间大于片段的长度，它将被包裹起来。

`channel`

Name of a channel in the animation clip.

动画片断中一个通道的索引，由 agentclipchannel 返回。

## Examples

Sample a channel of the walk clip after 1.2 seconds.

动画片段中一个通道的名称。

    float value = agentclipsample(0, @primnum, "walk", 1.2, "latch_leftfoot");
