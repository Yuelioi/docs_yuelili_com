---
title: oppreconstrainttransform
order: 27
category:
  - houdini
---
    
## 描述

Returns the preconstraint transform associated with an OP.

```c
matrix  oppreconstrainttransform(string path)
```

```c
matrix  oppreconstrainttransform(string path, float time)
```

```c
matrix  oppreconstrainttransform(int opid)
```

```c
matrix  oppreconstrainttransform(int opid, float time)
```

Returns the preconstraint transform associated with an OP. If the specified OP
has notransform associated with it (such as a COP), then an identity matrix is
returned. It is possible to specify the time at which to evaluate the
transform (in seconds, not frames).

返回与一个 OP 相关的预约束变换。如果指定的 OP 没有

Note

The op: syntax can be used to simulate this behavior using the standard
transform functions.

变换（比如 COP），那么将返回一个相同的矩阵。可以指定评估变换的时间（单位是秒，而不是帧）。
