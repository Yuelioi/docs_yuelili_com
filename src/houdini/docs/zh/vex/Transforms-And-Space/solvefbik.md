---
title: solvefbik
order: 28
category:
  - houdini
---
    
## 描述

Applies a full-body inverse kinematics algorithm to a skeleton.

| Since | 17.0 |
| ----- | ---- |

`matrix [] solvefbik(matrix xforms[], int parents[], dict jointoptions[], matrix targetxforms[], int targets[], dict targetoptions[], int iters, float tolerance, int pinroot)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], matrix goalxforms[], vector4 constrainedxforms[], vector jointlimits[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[], matrix goalxforms[], vector4 constrainedxforms[], vector jointlimits[])`

Returns an empty array if:

返回一个空数组，如果。

- `xforms` is not the same size as `parents`

xforms 与 arents 的大小不一样

- `targets` is not the same size as `targetxforms`

targets 与 targetxforms 的大小不一样。

- The `goalxforms`,

```c
constrainedxforms
```

, and `jointlimits` arrays aren‘t empty, but are not the same size as `xforms`

GOALXFORM、CONTIMITEDXFORM 和 Jointlimits 数组不是空的，但与 XFORM 的大小不一致。

The `goalxforms`,

```c
constrainedxforms
```

, and `jointlimits` parameters should be
in the form produced by the
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure Joints
SOP](../../nodes/sop/agentconfigurejoints.html "Creates point attributes that
specify the rotation limits of an agent‘sjoints.").

目标形态、受限形态和联合限制参数应该是由 Agent 配置联合 SOP 产生的形式。

`xforms`

The world transforms of all the transforms in the rig being solved.

被解决的钻机中所有变换的世界变换。

`parents`

The parent transform index for each transform.A value of -1 indicates a root.

每个变换的父变换索引。 值为-1 表示根。

`jointoptions`

Specifies optional parameters for the joints. The valid keys are:

指定关节的可选参数。有效的键是。

```c
limit_goalxform
```

A `matrix` specifying the position and orientation of the cone in the space of
the parent transform.This can be set from the attributes produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent‘sjoints.").

Amatrix，指定锥体在父变换空间中的位置和方向。

```c
limit_constrainedxform
```

A `vector4` (quaternion) specifying the orientation of the twist axis, up
axis, and out axis in the space of the child transform.This can be set from
the attributes produced by [![](../../icons/SOP/agentconfigurejoints.svg)Agent
Configure Joints](../../nodes/sop/agentconfigurejoints.html "Creates point
attributes that specify the rotation limits of an agent‘sjoints.").

这可以从 Agent Configure Joints 产生的属性中设置。

`limit_angles`

A `vector` specifying the maximum rotation around each axis, in degrees.This
can be set from the attributes produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent‘sjoints.").

Avector4（四元数）指定子变换空间中的扭转轴、向上轴和向外轴的方向。

`targets`

A list of the transform indices of the end effectors in the skeleton.

这可以从 Agent Configure Joints 产生的属性中设置。

`targetxforms`

A list of the target world transforms for the end effectors, in the same order
as `targets`.

向量（Avector）指定围绕每个轴的最大旋转，单位是度。

`targetoptions`

Specifies optional parameters for the targets. The valid keys are:

这可以从 Agent Configure Joints 产生的属性中设置。

`weight`

A `float` specifying the importance of the target.When multiple targets have
the same priority level, targets with a higher relative weight are more likely
to be reached.The default value is `1.0`.

骨架中末端效应器的变换指数的列表。

`priority`

An `int` specifying the target‘spriority level.Targets from a lower
priority level cannot interfere with targets from a higher priority level.For
example, priority levels can be used to ensure that the feet remain planted
when manipulating the upper body of a skeleton.The default value is `0`.

末端效应器的目标世界变换的列表，其顺序与目标相同。

`depth`

An `int` specifying the number of parent joints that can be adjusted to
achieve the goal transform.A negative depth indicates that the entire chain
can be affected.The default value is `-1`.

指定目标的可选参数。有效的键是。

`target_type`

An `int` specifying how the end effector matches the position or orientation
of its target transform.A value of `0` (default) indicates a position-only
target, `1` indicates an orientation-only target, and `2` matches both
position and orientation.A value of `3` indicates a target that controls the
center of mass of the skeleton (the transform index from `targets` is not
used).Only one center of mass target can be provided.

Afloat 指定目标的重要性。

`joint_offset`

A `matrix` specifying a local space transform that is combined with the joint
transform to produce the transform that the solver attempts to align with the
goal transform.This can be used to place the target at an offset from the
joint (for example, at the end of a bone).

当多个目标具有相同的优先级时，相对权重高的目标更有可能被达成。

`iters`

The maximum number of iterations to perform.The solver may terminate early if
the `tolerance` parameter is used.

默认值是 1.0。

`tolerance`

The tolerance to use when checking for convergence, defaults to 1e-5.If
positions converge to within this tolerance, the algorithm will stop.If 0, the
solver will always perform exactly `iters` iterations.

检查收敛时使用的公差，默认为 1e-5。

`pinroot`

Whether to pin the root to its start position, instead of allowing it to
translate.This can be useful when, for example, solving a subset of an
agent‘sskeleton.Defaults to 0 (off).

如果位置收敛在这个公差范围内，算法将停止。

```c
`targetweights
```

`

A list containing the weight of each end effector, in the same order as
`targets`.For joints with multiple children, the normalized weights will be
used to determine their position - this means that a target with a higher
weight than other targets will be more likely to be reached.The default weight
is 1.0.

如果是 0，解算器将始终执行精确迭代。

```c
`targetpriorities
```

`

A list containing the priority level of each end effector, in the same order
as `targets`.Targets from a lower priority level will not influence targets
with higher priority.For example, priority levels can be used to ensure that
the targets for the feet are always satisfied, while still controlling the
relative weights of the upper body targets.The default priority is 0 (i.e. all
targets are equal priority).

是否将根钉在它的起始位置，而不是让它平移。

`targetdepths`

For each end effector, specifies how many joints above it in the chain can be
adjusted to achieve the target transform.A negative depth can be used to
specify that all joints above the target are affected.The default depth is -1.

这在解决一个代理骨架的子集时是有用的，例如。

`targettypes`

A list containing the target type for each end effector, in the same order as
`targets`.The target type can be used to specify how the end effector matches
the position or orientation of its target transform (from `targetxforms`).A
value of `0` indicates a position-only target, `1` indicates an orientation-
only target, and `2` matches both position and orientation (default).

默认为 0（关闭）。

```c
`targetoffsets
```

`

A list containing an additional local space transform for each end effector,
in the same order as `targets`.This transform is combined with the end
effector‘sjoint transform to produce the transform that the solver attempts
to align with the target transform.This can be used to place the target at an
offset from the joint (for example, at the end of a bone).

一个包含每个末端效应器的重量的列表，顺序与目标相同。

`goalxforms`

Part of the joint constraints as produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent‘sjoints.").An empty array
indicates no joint constraints.

对于有多个子体的关节，将使用归一化的权重来确定它们的位置--这意味着权重高于其他目标的目标将更有可能被到达。

```c
constrainedxforms
```

Part of the joint constraints as produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent‘sjoints.").An empty array
indicates no joint constraints.

默认的权重是 1.0。

`jointlimits`

Part of the joint constraints as produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent‘sjoints.").An empty array
indicates no joint constraints.

一个包含每个终端效应器的优先级的列表，其顺序与目标相同。
