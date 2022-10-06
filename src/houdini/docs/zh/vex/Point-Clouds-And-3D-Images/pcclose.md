---
title: pcclose
order: 4
category:
  - houdini
---
    
## 描述

This function closes the handle associated with a pcopen  
function.

```c
void  pcclose(int &handle)
```

This function closes the handle associated with a pcopen function. VEXwill
close handles automatically, however, it‘sgood practice to callpcclose.
When there are pcopen calls made from within a loop, VEX mayconsume additional
memory if pcclose isn‘t called when the handle is nolonger required.

这个函数关闭与 pcopen 函数相关的句柄。VEX
