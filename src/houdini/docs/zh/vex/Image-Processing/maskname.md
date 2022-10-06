---
title: maskname
order: 28
category:
  - houdini
---
    
## 描述

Returns the default name of the mask plane (as it appears in the  
compositor preferences).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  maskname()
```

Returns the default name of the mask plane (as it appears in thecompositor
preferences). Using this instead of hardcoding the defaultmakes your code more
portable. Default is “M”.

返回遮罩平面的默认名称（就像它出现在
