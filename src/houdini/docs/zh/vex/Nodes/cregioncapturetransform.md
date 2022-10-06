---
title: cregioncapturetransform
order: 18
category:
  - houdini
---
    
## 描述

Returns the capture transform associated with a Capture Region SOP.

| Since | 18.0 |
| ----- | ---- |

```c
matrix  cregioncapturetransform(string path)
```

```c
matrix  cregioncapturetransform(string path, float time)
```

```c
matrix  cregioncapturetransform(int op_id)
```

```c
matrix  cregioncapturetransform(int op_id, float time)
```

Returns the capture transform associated with a Capture Region SOP.The
transform is built from the parameters of the SOP without cooking the SOP.It
is possible to specify the time to evaluate the transform at (in seconds, not
frames).

返回与一个捕获区域 SOP 相关的捕获变换。

Note

The op: syntax can be used to simulate this behavior using the standard
transform functions.

变换是根据 SOP 的参数建立的，不需要对 SOP 进行烹饪。
