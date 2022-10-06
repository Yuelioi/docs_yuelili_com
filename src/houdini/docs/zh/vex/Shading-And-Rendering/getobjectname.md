---
title: getobjectname
order: 25
category:
  - houdini
---
    
## 描述

Returns the name of the current object whose shader is being run.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
string  getobjectname()
```

Returns the name of the current object whose shader is being run, or theempty
string if there is no current object.

返回当前对象的名称，该对象的着色器正在被运行，如果没有当前对象，则返回空字符串。
