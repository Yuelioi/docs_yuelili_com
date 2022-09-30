---
title: ramp_pack
order: 14
category:
  - houdini
---
    
## 描述

Packs a set of arrays into a string-encoded ramp.

| Since | 19.0 |
| ----- | ---- |

```c
string  ramp_pack(string basis[], float pos[], float value[])
```

```c
string  ramp_pack(string basis[], float pos[], vector value[])
```

```c
string  ramp_pack(string basis[], float pos[], vector4 value[])
```

Ramps are commonly packed as JSON formatted strings by Houdini operations.This
will pack them three arrays of basis, position, and value into
thecorresponding string.

匝道通常被胡迪尼操作打包成 JSON 格式的字符串。
