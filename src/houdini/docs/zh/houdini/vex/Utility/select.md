---
title: select
order: 16
category:
  - houdini
---
    
## 描述

Returns one of two parameters based on a conditional.

```c
<type> select(int conditional, <type>a, <type>b)
```

```c
<type>[] select(int conditional, <type>a[], <type>b[])
```

Returns `a` if the conditional is true, and returns `b` if it is false.

如果条件为真则返回 a，如果条件为假则返回 b。

The difference between select and an `if` statement is that select
willevaluate both a and b, regardless of the value of the
conditional.Judicioususe of `select` can avoid comparisons, allowing larger
sections of code to beconverted to native code.

select 和 ifstatement 之间的区别是，select 将
