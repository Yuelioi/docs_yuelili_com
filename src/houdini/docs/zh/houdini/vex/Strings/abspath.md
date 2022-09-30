---
title: abspath
order: 1
category:
  - houdini
---
    
## 描述

Returns the full path of a file.

| Since | 18.0 |
| ----- | ---- |

```c
string  abspath(string relpath)
```

Returns the supplied path converted to an absolute path. Relative pathsare
treated as relative to Houdini‘scurrent working directory. If thesupplied
path is already absolute, the path is returned unchanged. The filedoes not
need to exist.

返回所提供的路径转换为绝对路径。相对路径
