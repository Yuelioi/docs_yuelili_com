---
title: wo_space
order: 38
category:
  - houdini
---
    
## 描述

Transforms a position value from World to Object space.

```c
matrix  wo_space()
```

In [shading contexts](../contexts/shading_contexts.html), this transforms the
current position.

在遮蔽的情况下，这将转换当前位置。

```c
vector  wo_space(vector pos)
```

```c
vector4  wo_space(vector4 pos)
```

Transforms a position value from _World_ to _Object_ space.

将一个位置值从 World 转换到 Objectspace。
