---
title: random_shash
order: 27
category:
  - houdini
---
    
## 描述

Hashes a string to an integer.

```c
int  random_shash(string seed)
```

Hashes the given string into an integer value.

将给定的字符串散列成一个整数值。

Note

Two different strings may hash to the same value.

两个不同的字符串可能哈希成相同的值。

Note

The returned value may be very large and can cause an overflow when further
multiplied or is cast to float.

返回的值可能非常大，当进一步乘以或投以浮点数时，可能会导致溢出。
