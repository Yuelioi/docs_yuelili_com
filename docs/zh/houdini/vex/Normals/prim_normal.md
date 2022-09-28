---
title: prim_normal
order: 2
category:
  - houdini
---
    
## 描述

Returns the normal of the primitive (prim_number) at parametric location u, v.

```c
vector  prim_normal(<geometry>geometry, int prim_number, vector uvw)
```

```c
vector  prim_normal(<geometry>geometry, int prim_number, float u, float v)
```

`vector prim_normal(<geometry>geometry, int prim_number, float u, float v, float w)`

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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是一个 op:/path/to/sopreference。

`uvw`, `u`, `v`, `w`

When w is not given, it is treated as zero.

如果没有给出，它将被视为零。

Returns

The normal of the primitive (prim_number) at parametric location u, v, w.

基元（prim_number）在参数位置 u,v,w 的法线。
