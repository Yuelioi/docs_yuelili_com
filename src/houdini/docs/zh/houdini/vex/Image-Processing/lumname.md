---
title: lumname
order: 27
category:
  - houdini
---
    
## 描述

Returns the default name of the luminaence plane (as it appears in the  
compositor preferences).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  lumname()
```

Returns the default name of the luminaence plane (as it appears in
thecompositor preferences). Using this instead of hardcoding the defaultmakes
your code more portable. Default is “L”.

返回光照平面的默认名称（如它出现在
