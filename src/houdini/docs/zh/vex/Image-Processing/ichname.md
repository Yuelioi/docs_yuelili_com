---
title: ichname
order: 14
category:
  - houdini
---
    
## 描述

Returns the channel name of the indexed plane of the given input.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  ichname(int inputnum, int plane_index, int component_index)
```

Returns the component name (for example, “r” or “x”) of a component of a
plane.

返回一个平面的一个分量的名称（例如，"r "或 "x"）。
