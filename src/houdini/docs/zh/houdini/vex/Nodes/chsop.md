---
title: chsop
order: 14
category:
  - houdini
---
    
## 描述

Evaluates an operator path parameter and return the path to the operator.

| Since | 18.0 |
| ----- | ---- |

```c
string  chsop(string channel)
```

```c
string  chsop(string channel, float time)
```

Evaluates an operator path parameter and return the path to the operator.

评估一个操作者路径参数，并将路径返回给操作者。

The time is specified in seconds, not in frames.

时间的单位是秒，而不是帧。
