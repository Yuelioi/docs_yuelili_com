---
title: chramp
order: 11
category:
  - houdini
---
    
## 描述

Evaluates a ramp parameter and return its value.

```c
float  chramp(string channel, float ramppos)
```

```c
float  chramp(string channel, float ramppos, float time)
```

```c
vector  chramp(string channel, float ramppos)
```

```c
vector  chramp(string channel, float ramppos, float time)
```

Evaluates a ramp parameter and return its value.

评估一个斜坡参数并返回其值。

The ramppos is where on the ramp to evaluate.

ramppos 是指要评估的坡道的位置。

The time parameter can be used if the ramp is animated to evaluateat other
than the current time.

如果斜面被动画化，可以使用时间参数来评估
