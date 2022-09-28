---
title: usd_makevalidprimname
order: 87
category:
  - houdini
---
    
## 描述

Forces a string to conform to the rules for naming USD primitives.

| Since | 19.0 |
| ----- | ---- |

```c
string  usd_makevalidprimname(string name)
```

This function ensures that a string meets the requirements of a legal
USDprimitive name that can be used as part of a valid primitive path.

此函数确保一个字符串符合合法的 USD

`name`

String that should be turned into a valid primitive name.

基元名称的要求，可作为有效基元路径的一部分。

Returns

A possibly modified version of the original string which conforms to
therequirements for naming USD primitives. Invalid characters such as
spacesand most punctuation will be converted to underscores. Note that this
meansthe translation is not reversible. If the original string is already
alegal primitive name, the string is returned unchanged.

应被转化为有效基元名称的字符串。
