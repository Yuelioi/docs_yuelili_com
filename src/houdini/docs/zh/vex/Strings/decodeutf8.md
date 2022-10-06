---
title: decodeutf8
order: 40
category:
  - houdini
---
    
## 描述

Decodes a UTF8 string into a series of codepoints.

| Since | 19.0 |
| ----- | ---- |

```c
int [] decodeutf8(string str)
```

Converts a UTF8 string into a series of code points. VEX treats its strings as
UTF8 by default, but this means indexing into strings can have unusual
behavior. Generating code points ensures thereis one index for each logical
character.

将一个 UTF8 字符串转换为一系列的代码点。VEX 默认将其字符串视为 UTF8，但这意味着对字符串进行索引会有不寻常的行为。生成代码点可以确保
