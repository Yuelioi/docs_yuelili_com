---
title: decodeattrib
order: 5
category:
  - houdini
---
    
## 描述

Decodes a geometry attribute name that was previously encoded.

| Since | 18.0 |
| ----- | ---- |

```c
string  decodeattrib(string str)
```

Houdini geometry attributes and group names are only allowed to
containletters, numbers, and underscores, and must not begin with a number.
Arbitrarystrings can be passed through the `encodeattrib` function to generate
a stringthat obeys these restriction. This function takes one of these
encodedstrings, and returns the original string. A string that has not been
encodedwill be returned unmodified.

Houdini 几何属性和组的名称只允许包含
