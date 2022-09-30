---
title: shr
order: 53
category:
  - houdini
---
    
## 描述

Bit-shifts an integer right.

```c
int  shr(int a, int bits)
```

Bit-shifts `a` to the right by `bits`.

位向右移位。

This is an arithmetic shift, the sign is shifted with it.Thus, `shr(-1, 2)`will give -1, not zero.

这是一个算术移位，符号也随之移位。 因此，shr(-1, 2)将给出-1，而不是 0。
