---
title: normalname
order: 31
category:
  - houdini
---
    
## 描述

Returns the default name of the normal plane (as it appears in the  
compositor preferences).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  normalname()
```

Returns the default name of the normal plane (as it appears in thecompositor
preferences). Using this instead of hardcoding the defaultmakes your code more
portable. Default is “N”.

返回法线平面的默认名称（就像它出现在
