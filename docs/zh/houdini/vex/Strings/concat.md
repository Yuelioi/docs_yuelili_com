---
title: concat
order: 3
category:
  - houdini
---
    
## 描述

Concatenate all the strings specified to form a single string.

```c
string  concat(string s1, string s2, ...)
```

Concatenate the arguments to form a single string.

将参数串联起来，形成一个单一的字符串。

This is equivalent to

```c
s1 + s2 + s3 ...
```

.However, `concat()` is slightly more
efficient with more than 2 strings.

这相当于 os1 + s2 + s3 ....
