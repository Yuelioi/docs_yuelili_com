---
title: encodeutf8
order: 41
category:
  - houdini
---
    
## 描述

Encodes a UTF8 string from a series of codepoints.

| Since | 19.0 |
| ----- | ---- |

```c
string  encodeutf8(int codepoints[])
```

Converts a series of code points into a UTF8 string. VEX treats its strings as
UTF8 by default, but this means indexing into strings can have unusual
behavior. Generating code points ensures thereis one index for each logical
character.

将一系列的代码点转换为 UTF8 字符串。VEX 默认将其字符串视为 UTF8，但这意味着对字符串进行索引会有不寻常的行为。生成代码点可以确保
