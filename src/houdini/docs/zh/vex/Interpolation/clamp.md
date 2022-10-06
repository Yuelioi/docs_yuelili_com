---
title: clamp
order: 2
category:
  - houdini
---
    
## 描述

Returns value clamped between min and max.

```c
int  clamp(int value, int min, int max)
```

```c
float  clamp(float value, float min, float max)
```

Returns value clamped between min and max.

返回 min 和 max 之间的钳制值。

```c
vector2  clamp(vector2 value, vector2 min, vector2 max)
```

```c
vector  clamp(vector value, vector min, vector max)
```

```c
vector4  clamp(vector4 value, vector4 min, vector4 max)
```

Returns a new vector containing the clamped value of each component.

返回一个包含每个分量的钳制值的新向量。
