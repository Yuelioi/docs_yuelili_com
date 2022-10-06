---
title: bumpname
order: 4
category:
  - houdini
---
    
## 描述

Returns the default name of the bump plane (as it appears in the  
compositor preferences).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  bumpname()
```

Returns the default name of the bump plane (as it appears in thecompositor
preferences). Using this instead of hardcoding the defaultmakes your code more
portable. Default is “B”.

返回凸起平面的默认名称（正如它在
