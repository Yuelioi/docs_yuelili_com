---
title: getfogname
order: 13
category:
  - houdini
---
    
## 描述

Returns the name of the current object whose shader is being run.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
string  getfogname()
```

Returns the name of the current fog object whose shader is being run, or the
empty string if there is no current fog object.

返回当前雾化对象的名称，其着色器正在运行，如果没有当前雾化对象，则返回空字符串。
