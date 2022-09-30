---
title: chresizebuf
order: 21
category:
  - houdini
---
    
## 描述

Resize the CHOP context temporary buffer

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
int  chresizebuf(int size)
```

Resizes the CHOP context temporary buffer.Return 1 if the resize succeeded, 0
otherwise.

调整 CHOP 上下文临时缓冲区的大小。
