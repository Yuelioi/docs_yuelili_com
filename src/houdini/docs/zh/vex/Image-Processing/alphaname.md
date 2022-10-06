---
title: alphaname
order: 2
category:
  - houdini
---
    
## 描述

Returns the default name of the alpha plane (as it appears in the  
compositor preferences).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  alphaname()
```

Returns the default name of the alpha plane (as it appears in thecompositor
preferences). Using this instead of hardcoding the defaultmakes your code more
portable. Default is “A”.

返回 alpha 平面的默认名称（就像它出现在
