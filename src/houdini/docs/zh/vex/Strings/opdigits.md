---
title: opdigits
order: 18
category:
  - houdini
---
    
## 描述

Returns the integer value of the last sequence of digits of a string

```c
int  opdigits(string str)
```

```c
int  opdigits()
```

Returns the integer value of the last sequence of digits in the input string.

返回输入字符串中最后一串数字的整数值。

If no argument is passed, the code is equivalent to

如果没有传递参数，代码等同于

    string dir, name;splitpath(opfullpath("."), dir, name);return opdigits(name);

## Examples

-

```c
opdigits("/obj/geo34/box21")
```

\- returns 21

opdigits("/obj/geo34/box21")--返回 21

-

```c
opdigits("/obj/geo34/box")
```

\- returns 34

opdigits("/obj/geo34/box")--返回 34

-

```c
opdigits("/obj/geo34/box2.1")
```

\- returns 1 (“.” is not a digit)

opdigits("/obj/geo34/box2.1")--返回 1(". "不是一个数字)
