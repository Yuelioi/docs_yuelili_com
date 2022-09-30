---
title: relpath
order: 22
category:
  - houdini
---
    
## 描述

Returns the relative path to a file.

| Since | 18.0 |
| ----- | ---- |

```c
string  relpath(string abspath)
```

Returns the supplied path converted to a relative path, expressed asrelative
to Houdini‘scurrent working directory. The file does not need toexist.

返回所提供的路径转换为相对路径，表示为
