---
title: hscript_rand
order: 8
category:
  - houdini
---
    
## 描述

Produces the exact same results as the Houdini expression function of  
the same name.

```c
float|vector|vector4 hscript_rand(float seed)
```

Produces the exact same results as the Houdini expression function ofthe same
name. This function will generate different random values forevery floating
point seed. This is different that the[random](random.html "Generate a random
number based on the integer position in 1-4D space.") function which converts
the floating point argumentto an integer seed. The

```c
hscript_rand()
```

function
may produce differentresults on different hardware or operating systems.

产生的结果与 Houdini 的同名表达函数完全相同。
