---
title: sqrt
order: 65
category:
  - houdini
---
    
## 描述

Returns the square root of the argument.

```c
float  sqrt(float value)
```

```c
<vector> sqrt(<vector>value)
```

Returns the square root of `value`. For vectors, this is done per-component.

返回 value 的平方根。对于向量，这是按分量进行的。

Note

The square root of a negative number is defined to be zero.

负数的平方根被定义为零。

To quote Edgar Rice Burroughs, Pirates of Venus: _“I saw that argument was
useless and said no more: there is no use arguing with a man who can multiply
anything by the square root of minus one”_

引用《金星海盗》中埃德加-赖斯-巴勒斯的话："我看到争论是没有用的，就不再说了：和一个能把任何东西都乘以负一的平方根的人争论是没有用的"
