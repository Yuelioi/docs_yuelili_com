---
title: opprerawparmtransform
order: 29
category:
  - houdini
---
    
## 描述

Returns the pre and raw parm transform associated with an OP.

| Since | 18.0 |
| ----- | ---- |

```c
matrix  opprerawparmtransform(string path)
```

```c
matrix  opprerawparmtransform(string path, float time)
```

```c
matrix  opprerawparmtransform(int opid)
```

```c
matrix  opprerawparmtransform(int opid, float time)
```

`matrix opprerawparmtransform(int opid, int trsorder, int xyzorder, int mask)`

Returns the pre and raw parm transform associated with an OP. If the specified
OP has notransform associated with it (such as a COP), then an identity matrix
is returned. It is possible to specify the time at which to evaluate the
transform (in seconds, not frames).

返回与一个 OP 相关的 pre 和 raw parm 变换。如果指定的 OP 没有

The raw parameter transform is built from the transform parameters and does
not include the effect of the CHOP IK solver.

变换（例如 COP），那么将返回一个相同的矩阵。可以指定评估变换的时间（单位是秒，不是帧）。

Note

The op: syntax can be used to simulate this behavior using the standard
transform functions.

原始参数变换是由变换参数建立的，不包括 CHOP IK 求解器的效果。
