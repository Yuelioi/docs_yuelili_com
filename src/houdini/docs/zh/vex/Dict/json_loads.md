---
title: json_loads
order: 2
category:
  - houdini
---
    
## 描述

Converts a JSON string into a VEX dictionary.

| Since | 18.5 |
| ----- | ---- |

```c
dict  json_loads(string json, int flags)
```

Tries to create a dictionary out of a JSON-style string.If a parsingerror
occurs, an empty dictionary is created.There are two formatsfor JSON
recognized.The fully typed format consists of maps foreach element that stores
the type and value.This allows properround-tripping of VEX dictionaries, but
is verbose.The compactformat requires the dictionary to guess the type of JSON
elements,so things like vectors will be created as float arrays.

试图从一个 JSON 风格的字符串中创建一个字典。 如果解析的

The VEX dictionaries need to have arrays of uniform type.If anarray has
varying type, the elements will be created as stringsof the raw JSON values.

错误，就会创建一个空的字典。 有两种格式

The possible flag values are:

来识别 JSON。 完全类型化的格式包括每个元素的映射

`0`

|

Auto-detect if the string is a typed or typeless JSON

每个元素的映射，存储类型和值。 这允许正确的

---|---

`1`

|

Require a fully typed JSON

绕过 VEX 字典，但很冗长。 紧凑的

`2`

|

Require a typeless JSON.If a fully-typed JSON is read, an extra layer of
dictionaries will be created.

格式需要字典来猜测 JSON 元素的类型。
