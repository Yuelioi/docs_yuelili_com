---
title: frontface
order: 8
category:
  - houdini
---
    
## 描述

If dot(I, Nref) is less than zero, N will be negated.

```c
vector  frontface(vector N, vector I)
```

This form (which doesn‘t take a reference vector) is only available inthe
shading contexts, where the Ng variable is used.

这种形式（不需要参考向量）只在使用 Ngvariable 的情况下可用。

```c
vector  frontface(vector N, vector I, vector Nref)
```

If [dot](dot.html) "Returns the dot product between the arguments.")(I, Nref)
is less than zero, N will be negated.

使用 Ng 变量的情况下可用。
