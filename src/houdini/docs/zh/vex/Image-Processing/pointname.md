---
title: pointname
order: 35
category:
  - houdini
---
    
## 描述

Returns the default name of the point plane (as it appears in the  
compositor preferences).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  pointname()
```

Returns the default name of the point plane (as it appears in thecompositor
preferences). Using this instead of hardcoding the defaultmakes your code more
portable. Default is “P”.

返回点平面的默认名称（就像它出现在
