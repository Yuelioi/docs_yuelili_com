---
title: osd_limitsurfacevertex
order: 4
category:
  - houdini
---
    
## 描述

Evaluates a vertex attribute at the subdivision limit surface using Open
Subdiv.

This is like [osd_limitsurface](osd_limitsurface.html "Evaluates a point
attribute at the subdivision limit surface using Open Subdiv.") but for vertex
attributes instead of point attributes.See
[osd_limitsurface](osd_limitsurface.html "Evaluates a point attribute at the
subdivision limit surface using Open Subdiv.") for more information.

这就像 osd_limitsurface，但是是针对顶点属性而不是点属性。

`int osd_limitsurfacevertex(<geometry>geometry, string attrib_name, int face_id, float u, float v, <type>&result)`

`int osd_limitsurfacevertex(<geometry>geometry, string attrib_name, int face_id, float u, float v, float &result[])`

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

参见 osd_limitsurface 获取更多信息。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。
