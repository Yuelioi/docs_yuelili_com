---
title: decodeparm
order: 6
category:
  - houdini
---
    
## 描述

Decodes a node parameter name that was previously encoded.

| Since | 18.0 |
| ----- | ---- |

```c
string  decodeparm(string str)
```

Houdini parameter names are only allowed to contain letters, numbers,
hashcharacters (for multiparms), and underscores, and must not begin with
anumber. Arbitrary strings can be passed through the `encodeparm` function
togenerate a string that obeys these restriction. This function takes one
ofthese encoded strings, and returns the original string. A string that has
notbeen encoded will be returned unmodified.

胡迪尼参数名称只允许包含字母、数字、哈希字符（对于多参数），并且不能以下划线开头。
