---
title: chrampderiv
order: 12
category:
  - houdini
---
    
## 描述

Evaluates the derivative of a parm parameter with respect to position.

| Since | 18.0 |
| ----- | ---- |

```c
float  chrampderiv(string channel, float ramppos)
```

```c
float  chrampderiv(string channel, float ramppos, float time)
```

```c
vector  chrampderiv(string channel, float ramppos)
```

```c
vector  chrampderiv(string channel, float ramppos, float time)
```

Evaluates the derivative of a parm parameter with respect to position.

评估 parm 参数相对于位置的导数。

The ramppos is where on the ramp to evaluate.

ramppos 是指在斜坡上评估的位置。

The time parameter can be used if the ramp is animated to evaluateat other
than the current time.Note that this does not take a derivative with respect
to time.

如果斜面的动画是在当前时间以外的时间评估，可以使用时间参数。
