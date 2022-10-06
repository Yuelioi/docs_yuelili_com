---
title: agentsolvefbik
order: 37
category:
  - houdini
---
    
## 描述

Applies a full-body inverse kinematics algorithm to an agent‘sskeleton.

| Since | 17.0 |
| ----- | ---- |

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters)`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot)`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[])`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[])`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], string goalxformattrib, string constrainedxformattrib, string jointlimitsattrib)`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[], string goalxformattrib, string constrainedxformattrib, string jointlimitsattrib)`

Returns `-1` if `prim` is out of range or is not an agent primitive, or
targets and targetxforms are not the same length.

如果 prim 超出范围或不是一个代理基元，或者 target 和 targetxforms 的长度不一样，则返回-1。

If “agent_jointgoalxforms”, “agent_jointconstrainedxforms”, and
“agent_jointlimits” attributes are present on the agent, as produced by the
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure Joints
SOP](../../nodes/sop/agentconfigurejoints.html "Creates point attributes that
specify the rotation limits of an agent‘sjoints."), then they will be
interpreted as joint limits to use while solving.

如果 "agent_jointgoalxforms"、"agent_jointconstrainedxforms "和 "agent_jointlimits
"属性存在于代理上，正如 Agent Configure Joints SOP 所产生的那样，那么它们将被解释为求解时使用的联合限制。

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

`outgeo`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

geoself()可以用来获取当前几何体的句柄。

`prim`

The primitive number of the agent primitive.

代理基元的基元编号。

`targets`

A list of the transform indexes of the end effectors in the agent.

代理中终端效应器的变换索引的列表。

`targetxforms`

A list of the target world transforms for the end effectors, in the same order
as `targets`.

末端效应器的目标世界变换的列表，顺序与目标相同。

`xformgroup`

The index of a transform group, which specifies the joints to be used for the
IK solver (all transforms not in the transform group will be
ignored).[agentfindtransformgroup](agentfindtransformgroup.html "Finds the
index of a transform group in an agent‘sdefinition.") can be used to look
up a transform group by name, and a value of -1 indicates that all the
transforms in the agent should be included.It‘srecommended to use a
transform group that includes only transforms that correspond to the agent‘s
bone structure.

变换组的索引，它指定了用于 IK 求解器的关节（不在变换组中的所有变换将被忽略）。agentfindtransformgroup 可用于按名称查找变换组，值为-1 表示应包括代理中的所有变换。

`iters`

The maximum number of iterations to perform.The solver may terminate early if
the `tolerance` parameter is used.

建议使用一个只包括与代理的骨骼结构相对应的变换的变换组。

`tolerance`

The tolerance to use when checking for convergence, defaults to 1e-5.If
positions converge to within this tolerance, the algorithm will stop.If 0, the
solver will always perform exactly `iters` iterations.

要执行的最大迭代次数。

`pinroot`

Whether to pin the root to its start position, instead of allowing it to
translate.This can be useful when, for example, solving a subset of an
agent‘sskeleton.Defaults to 0 (off).

如果使用公差参数，求解器可能会提前终止。

`targetweights`

A list containing the weight of each end effector, in the same order as
`targets`.For joints with multiple children, the normalized weights will be
used to determine their position - this means that a target with a higher
weight than other targets will be more likely to be reached.The default weight
is 1.0.

检查收敛时使用的公差，默认为 1e-5。

```c
targetpriorities
```

A list containing the priority level of each end effector, in the same order
as `targets`.Targets from a lower priority level will not influence targets
with higher priority.For example, priority levels can be used to ensure that
the targets for the feet are always satisfied, while still controlling the
relative weights of the upper body targets.The default priority is 0 (i.e. all
targets are equal priority).

如果位置收敛在这个公差之内，算法将停止。

`targetdepths`

For each end effector, specifies how many joints above it in the chain can be
adjusted to achieve the target transform.A negative depth can be used to
specify that all joints above the target are affected.The default depth is -1.

如果是 0，求解器将始终执行精确迭代。

`targettypes`

A list containing the target type for each end effector, in the same order as
`targets`.The target type can be used to specify how the end effector matches
the position or orientation of its target transform (from `targetxforms`).A
value of `0` indicates a position-only target, `1` indicates an orientation-
only target, and `2` matches both position and orientation (default).

是否将根钉在它的起始位置，而不是让它平移。

`targetoffsets`

A list containing an additional local space transform for each end effector,
in the same order as `targets`.This transform is combined with the end
effector‘sjoint transform to produce the transform that the solver attempts
to align with the target transform.This can be used to place the target at an
offset from the joint (for example, at the end of a bone).

这在解决一个代理骨架的子集时是有用的，例如。

```c
goalxformattrib
```

An optional parameter specifying an alternative attribute to use instead of
“agent_jointgoalxforms”.

默认为 0（关闭）。

```c
constraintedxformattrib
```

An optional parameter specifying an alternative attribute to use instead of
“agent_jointconstrainedxforms”.

一个包含每个末端效应器的重量的列表，顺序与目标相同。

```c
jointlimitsattrib
```

An optional parameter specifying an alternative attribute to use instead of
“agent_jointlimits”.

对于有多个子体的关节，将使用归一化的权重来确定它们的位置--这意味着权重高于其他目标的目标将更有可能被到达。
