---
title: agentrigfind
order: 34
category:
  - houdini
---
    
## 描述

Finds the index of a transform in an agent primitive‘srig.

```c
int  agentrigfind(<geometry>geometry, int prim, string transformname)
```

Returns `-1` if `transformname` was not found in the rig, `prim` is out of
range, or `prim` is not an agent primitive.

如果在钻机中没有找到转移量，基元超出范围，或者基元不是代理基元，则返回 1。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

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

`transformname`

The name of a transform in the agent‘srig.

Agentâs rig 中的变换名称。

## Examples

Find the current local transform of a given bone.

查找某个给定骨骼的当前局部变换。

    int idx = agentrigfind(0, @primnum, "Hips");if (idx >= 0) {matrix local_xforms[] = agentlocaltransforms(0, @primnum);matrix xform = local_xforms[idx];}
