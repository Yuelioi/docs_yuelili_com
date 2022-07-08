## 描述

Samples an agent‘sanimation clip at a specific time.

`matrix [] agentclipsamplelocal(<geometry>geometry, int prim, string clipname,
float time)`

`matrix  agentclipsamplelocal(<geometry>geometry, int prim, string clipname,
float time, int transform)`

Evaluates the clip at the given time and returns the local transforms of the
agent‘srig.Returns an empty array if `clipname` is not one of the agent‘s
[animation clips](agentclipcatalog.html "Returns all of the animation clips
that have been loaded for an agent primitive."),`prim` is out of range, `prim`
is not an agent primitive, or `transform` is [out of
range](agenttransformcount.html "Returns the number of transforms in an agent
primitive‘srig.").The `matrix` signature is more efficient than the
`matrix[]` signature for sampling a single transform.

评估给定时间的片段，并返回代理装备的局部变换。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

如果clipname不是agentâsanimation
clips之一，prim超出范围，prim不是agent的primitive，或者transform超出范围，返回一个空数组。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```
 reference.

矩阵签名比矩阵[]签名对单个变换进行采样更有效。

`prim`

The primitive number.

当在一个节点的上下文中运行时（比如wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从0开始）。

`clipname`

The name of the animation clip.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在Houdini内部运行时，这可以是anop:/path/to/sopreference。

`time`

The time (in seconds) to evaluate the clip at. If this time is greater than
the [clip‘slength](agentcliplength.html "Returns the length \(in seconds\)
of an agent‘sanimation clip."), it will be wrapped around.

基质编号。

`transform`

Index of a transform in the agent‘srig.

动画片段的名称。

##  Examples  #

Sample the local transforms of the walk clip after 1.2 seconds.

评估该片段的时间（以秒为单位）。如果这个时间大于片段的长度，它将被包裹起来。

    
    
    matrix xforms[] = agentclipsamplelocal(0, @primnum, "agent1_clip.walk", 1.2);

