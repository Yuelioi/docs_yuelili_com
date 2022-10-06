---
title: lightid
order: 48
category:
  - houdini
---
    
## 描述

Returns the light id for a light struct.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
int  lightid(light lp)
```

Returns the integer light identifier of the light struct passed in.The
function returns -1 if the argument is invalid.

返回传入的灯光结构的整数灯光标识符。 如果参数无效，该函数返回-1。
