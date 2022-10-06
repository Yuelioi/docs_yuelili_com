---
title: usd_makevalidprimpath
order: 88
category:
  - houdini
---
    
## 描述

Forces a string to conform to the rules for paths to USD primitives.

| Since | 19.0 |
| ----- | ---- |

```c
string  usd_makevalidprimpath(string path, int allow_relative)
```

This function ensures that a string meets the requirements of a legal
USDprimitive path that can be passed to other USD functions.

这个函数确保一个字符串符合合法的 USD

`path`

String that should be turned into a valid primitive path.

原始路径的要求，可以传递给其他 USD 函数。

```c
allow_relative
```

If this value is non-zero, the string is allowed to represent a
relativeprimitive path. A relative path is one that starts with `./` or `../`.
Ifthis argument is zero, only absolute paths (which start with `/`)
areallowed. Relative prefixes are simply removed from the path and thereturned
path will always start with a `/`.

应转为有效原始路径的字符串。

Returns

A possibly modified version of the original string which conforms to
therequirements for USD primitive paths. Invalid characters such as spacesand
most punctuation will be converted to underscores. Note that this meansthe
translation is not reversible. If the original string is already alegal
primitive path, the string is returned unchanged.

如果此值为非零，则允许该字符串代表一个相对的
