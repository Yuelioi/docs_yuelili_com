---
title: chwritebuf
order: 29
category:
  - houdini
---
    
## 描述

Writes a value of CHOP context temporary buffer at the specified index.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
int  chwritebuf(int index, float value)
```

```c
int  chwritebuf(int index, vector t, vector r, vector s)
```

Writes a value of a CHOP context temporary buffer at the specified
index.Return 1 if the write succeeded, 0 otherwise.

在指定的索引处写入一个 CHOP 上下文临时缓冲区的值。
