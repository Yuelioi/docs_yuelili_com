---
title: has_udim
order: 5
category:
  - houdini
---
    
## 描述

Test string for UDIM or UVTILE patterns.

| Since | 17.5 |
| ----- | ---- |

```c
int  has_udim(string path)
```

Scans the input path for special conversion characters to perform either UDIM
or UVTILE style filename expansion.If the string has any UDIM/UVTILE expansion
patterns, the function returns 1, otherwise the function returns 0.

扫描输入路径中的特殊转换字符，以执行 UDIM 或 UVTILE 风格的文件名扩展。 如果字符串有任何 UDIM/UVTILE 扩展模式，该函数返回 1，否则函数返回 0。
