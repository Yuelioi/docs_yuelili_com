---
title: velocityname
order: 36
category:
  - houdini
---
    
## 描述

Returns the default name of the velocity plane (as it appears in the  
compositor preferences).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  velocityname()
```

Returns the default name of the velocity plane (as it appears in thecompositor
preferences). Using this instead of hardcoding the defaultmakes your code more
portable. Default is “V”.

返回速度平面的默认名称（就像它出现在
