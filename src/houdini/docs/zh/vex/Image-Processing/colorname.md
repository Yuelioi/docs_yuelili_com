---
title: colorname
order: 7
category:
  - houdini
---
    
## 描述

Returns the default name of the color plane (as it appears in the  
compositor preferences).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  colorname()
```

Returns the default name of the color plane (as it appears in thecompositor
preferences). Using this instead of hardcoding the defaultmakes your code more
portable. Default is “C”.

返回颜色平面的默认名称（就像它出现在
