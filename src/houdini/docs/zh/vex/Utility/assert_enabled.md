---
title: assert_enabled
order: 1
category:
  - houdini
---
    
## 描述

Returns 1 if the VEX assertions are enabled (see HOUDINI_VEX_ASSERT) or 0 if
assertions are disabled. Used the implement the assert macro.

```c
int  assert_enabled()
```

Returns 1 if the environment variable

```c
HOUDINI_VEX_ASSERT
```

is set or 0 if the
variable isn‘t set.

如果环境变量 HOUDINI_VEX_ASSERT 被设置，返回 1；如果变量没有被设置，返回 0。

The `assert()` macro uses this function to only execute assertions when

```c
HOUDINI_VEX_ASSERT
```

is set:

assert()宏使用这个函数，只在 HOUDINI_VEX_ASSERT 被设置时执行断言。

    #define assert(EXPR)\if (assert_enabled()) { \if (!(EXPR)) print_once(sprintf('VEX Assertion Failed %s:%d - (%s)\n', \__FILE__, __LINE__, #EXPR)); \}

You could use this function to write your own assert macro (for example, you
might write a macro that used your studio‘slogging infrastructure).

你可以使用这个函数来编写你自己的断言宏（例如，你可以编写一个宏，使用你的工作室的日志基础设施）。

See [using assertions in VEX](../assertions.html "You can use the assert()
macro to print information while you are debugging VEX code.") for more
information.

更多信息请参见在 VEX 中使用断言。
