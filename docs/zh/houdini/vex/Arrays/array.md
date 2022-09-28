---
title: array
order: 3
category:
  - houdini
---
    
## 描述

Efficiently creates an array from its arguments.

有效地从其参数中创建一个数组。

```c
<type>[] array(...)
```

Returns an array of items of the given type.

You should use function-style casting to ensure the array members have the correct type:

返回给定类型的项目数组。应该确保数组成员具有正确类型。

```ad-note
- 可以使用变量
- 可以使用函数
```

```c
vector v[] = vector[](array( 1, {1,2,3}, 3, s, t, Cl, P, N));
float f[] = float[](array(1, 2, s, t, length(P-L), length(N)));

```
