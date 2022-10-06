---
title: islpeactive
order: 42
category:
  - houdini
---
    
## 描述

Returns 1 if Light Path Expressions are enabled. 0 Otherwise.

| Context(s) | [surface](../contexts/surface.html) |
| ---------- | ----------------------------------- |

```c
int  islpeactive()
```

Returns 1 if there are any image planes with vex variable that starts
with`"lpe:"`, which indicates that Light Path Expression (LPE) is enabled.
Returns 0if no such image plane exists.

如果有任何图像平面的 vex 变量以 "lpe: "开头，则返回 1，这表明光路表达（LPE）被启用。返回 0

This function is used to optimize out any LPE related function calls if
thecurrent render doesn‘t have any AOVs that uses LPE.

如果没有这样的图像平面存在。
