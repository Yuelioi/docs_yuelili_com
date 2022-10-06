---
title: decode
order: 4
category:
  - houdini
---
    
## 描述

Decodes a variable name that was previously encoded.

| Since | 17.5 |
| ----- | ---- |

```c
string  decode(string str)
```

Houdini VEX variable names are only allowed to contain letters, numbers,
andunderscores, and must not begin with a number. Arbitrary strings can be
passedthrough the `encode` function to generate a string that obeys
theserestriction. This function takes one of these encoded strings, and
returns theoriginal string. A string that has not been encoded will be
returnedunmodified.

Houdini VEX 的变量名只允许包含字母、数字和下划线。
