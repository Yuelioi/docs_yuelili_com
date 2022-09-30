---
title: solvephysfbik
order: 30
category:
  - houdini
---
    
## 描述

Applies a full-body inverse kinematics algorithm to a skeleton, with optional
control over the center of mass.

| Since | 18.5 |
| ----- | ---- |

`matrix [] solvephysfbik(matrix xforms[], int parents[], dict jointoptions[], matrix targetxforms[], int targets[], dict targetoptions[], int iters, float damping, float tolerance)`

This solver uses a different algorithm than [solvefbik](solvefbik.html "Applies a full-body inverse kinematics algorithm to a skeleton.") \- it
typically performs somewhat slower, but provides more control over the
skeleton‘sbehavior and can produce higher-quality results.The solver can
also use the optional per-joint masses and center of mass positions to achieve
a target position for the skeleton‘scenter of mass, allowing for physics-
based behavior such as maintaining balance.

这个求解器使用了一种不同于 olvefbik 的算法--它通常执行得比较慢，但对骨架的行为提供了更多的控制，可以产生更高质量的结果。

Compared to [solvefbik](solvefbik.html "Applies a full-body inverse kinematics
algorithm to a skeleton."), this solver has more stable behavior when joint
limits are enabled, and produces more accurate results when there are targets
at different priority levels.This solver also tends to distribute joint angle
changes more evenly along the chain (particularly when orientation targets are
being used), rather than producing large joint angle changes for one or two
joints.

解算器还可以使用可选的各关节质量和质心位置来实现骨架质心的目标位置，允许基于物理学的行为，如保持平衡。

The rotation and translation weight parameters provide control over how each
joint axis behaves during the solve. This can be used to ensure that certain
joints rotate more than others, to lock a specific joint axis, or to enable
translating (stretchy) joints.

与 solvefbik 相比，这个求解器在启用关节限制时有更稳定的行为，并且在有不同优先级的目标时产生更准确的结果。

Returns an empty array if:

这个求解器也倾向于沿着链条更均匀地分配关节角度的变化（特别是在使用方向目标时），而不是在一两个关节产生大的关节角度变化。

- `xforms` or `jointoptions` are not the same size as `parents`.

旋转和平移权重参数提供了对每个关节轴在求解过程中的行为方式的控制。这可以用来确保某些关节比其他关节旋转得更多，锁定一个特定的关节轴，或者启用平移（拉伸）关节。

- `targetxforms` or `targetoptions` are not the same size as `targets`.

如果返回一个空数组。

`xforms`

The world transforms of all the transforms in the rig being solved.

xforms 或 jointoptions 的大小与父母不一样。

`parents`

The parent transform index for each transform.A value of -1 indicates a root.

targetxforms 和 targetoptions 的大小与 target 不一样。

`jointoptions`

Specifies optional parameters for the joints. The valid keys are:

被解决的钻机中所有变换的世界变换。

```c
rotation_weights
```

A `vector` specifying weights for the joint‘srotation axes.Given a larger
relative weight, the solution will tend to be achieved by rotating around that
axis.A weight of zero will disable the rotation axis.The default value is
`{1,1,1}`.

每个变换的父变换索引。 值为-1 表示根。

```c
translation_weights
```

A `vector` specifying weights for the joint‘stranslation axes.Given a
larger relative weight, the solution will tend to be achieved by translating
along that axis.A weight of zero will disable the translation axis.To achieve
an unpinned root joint, the root‘stranslation weight should be non-zero
(e.g. `{1,1,1}`).The default value is `{0,0,0}`.

指定关节的可选参数。有效的键是。

```c
rotation_order
```

An `int` specifying the joint‘srotation order.The valid values can be found
in

```c
$HFS/houdini/vex/include/math.h
```

, and the default is `XFORM_XYZ`.

指明关节旋转轴的权重的矢量。

```c
rotation_lower_limits
```

A `vector` specifying the lower rotation limits (in radians) for the joint‘s
rotation axes.The rotation limits are applied relative to the joint‘slocal
rest transform, if specified.

给出一个较大的相对权重，解决方案将倾向于通过围绕该轴旋转来实现。

Note

To prevent a particular axis from rotating, it is much more efficient to set
its weight to zero instead of setting its rotation limits to zero.

如果权重为零，将禁用该旋转轴。

```c
rotation_upper_limits
```

A `vector` specifying the upper rotation limits (in radians) for the joint‘s
rotation axes.

默认值是{1,1,1}。

```c
translation_lower_limits
```

A `vector` specifying the lower translation limits for the joint‘s
translation axes.

指定关节平移轴权重的向量。

```c
translation_upper_limits
```

A `vector` specifying the upper translation limits for the joint‘s
translation axes.

给定一个较大的相对权重，解决方案将倾向于通过沿该轴的平移来实现。

`rest_xform`

A local space `matrix` specifying the joint‘srest pose.The default value is
the identity matrix.

一个零的权重将使平移轴失效。

```c
rest_rotation_weights
```

A `vector` specifying how strongly the solver attempts to match the rest
transform for the rotation axes.This has a priority lower than any of the end
effector targets.A value of `0.1` is typically a suitable value when enabling
the rest transform constraint, and a value of 0 will disable it.The default
value is `{0,0,0}`.

为了实现无钉的根关节，根关节的平移权重应该是非零的（例如{1,1,1}）。

```c
rest_translation_weights
```

A `vector` specifying how strongly the solver attempts to match the rest
transform for the translation axes.This has a priority lower than any of the
end effector targets.A value of `0.1` is typically a suitable value when
enabling the rest transform constraint, and a value of 0 will disable it.The
default value is `{0,0,0}`.

默认值是{0,0,0}。

`mass`

A `float` specifying the mass of the body associated with the joint.This
parameter is only used when a center of mass target is provided.The default
value is `1.0`.

Afloat 指定与关节相关的身体的质量。

`local_com`

A `vector` specifying the position of the joint‘scenter of mass, in local
space.An value of `{0,0,0}` (default) will position the center of mass at the
joint‘sposition.

这个参数只在提供质心目标时使用。

`targets`

A list of the transform indices of the end effectors in the skeleton.

默认值是 1.0。

`targetxforms`

A list of the target world transforms for the end effectors, in the same order
as `targets`.

矢量（Avector）指定关节的质心位置，在本地空间。

```c
`targetoptions
```

`

Specifies optional parameters for the targets. The valid keys are:

一个{0,0,0}的值（默认）将把质心定位在关节的位置。

`weight`

A `float` specifying the importance of the target.When multiple targets have
the same priority level, targets with a higher relative weight are more likely
to be reached.The default value is `1.0`.

骨架中末端效应器的变换指数列表。

`priority`

An `int` specifying the target‘spriority level.Targets from a lower
priority level cannot interfere with targets from a higher priority level.For
example, priority levels can be used to ensure that the feet remain planted
when manipulating the upper body of a skeleton.The default value is `0`.

末端效应器的目标世界变换的列表，顺序与目标相同。

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

`damping`

Damping factor for the solver.Larger values will produce more stable results
when, for example, a target is unreachable.A value that is too large, however,
will require more iterations to converge.Around 0.5 is typically a suitable
initial value.

指明目标的优先级别。

`tolerance`

The tolerance to use when checking for convergence, defaults to 1e-5.If
positions converge to within this tolerance, the algorithm will stop.If 0, the
solver will always perform exactly `iters` iterations.

来自较低优先级的目标不能干扰来自较高优先级的目标。
