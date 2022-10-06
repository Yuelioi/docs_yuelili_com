---
title: shrz
order: 54
category:
  - houdini
---
    
## 描述

Bit-shifts an integer right.

```c
int  shrz(int a, int bits)
```

Bit-shifts `a` to the right by `bits`.This is a zero-extend shift, sonew bits
are always zero.Thus, `shrz(-1, 2)` is zero, not -1.

位向右移位。 这是一个零扩展的移位，所以
