---
title: depthname
order: 8
category:
  - houdini
---
    
## 描述

Returns the default name of the depth plane (as it appears in the  
compositor preferences).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  depthname()
```

Returns the default name of the depth plane (as it appears in thecompositor
preferences). Using this instead of hardcoding the defaultmakes your code more
portable. Default is “Z”.

返回深度平面的默认名称（就像它出现在
