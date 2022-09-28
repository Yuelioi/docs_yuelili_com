---
title: isfinite
order: 28
category:
  - houdini
---
    
## 描述

Checks whether a value is a normal finite number.

```c
int  isfinite(float x)
```

Returns 1 if the given value is a normal, finite, number.

如果给定值是一个正常的、有限的数字，则返回 1。

Returns 0 if it is a NAN or infinite.Note that VEX generallywill not produce
these: 3/0 is defined as 0, for example.

如果它是一个 NAN 或无限的，则返回 0。 请注意，VEX 通常
