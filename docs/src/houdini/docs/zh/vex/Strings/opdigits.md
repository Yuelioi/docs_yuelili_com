---
title: opdigits
order: 22
category:
  - vex
---

`int opdigits(string str)`

`int opdigits()`

返回输入字符串中最后一串数字的整数值。

如果没有传递参数，代码等同于

```c
string dir, name;
splitpath(opfullpath("."), dir, name);
return opdigits(name);

```

## Examples



- `opdigits("/obj/geo34/box21")` - returns 21
- `opdigits("/obj/geo34/box")` - returns 34
- `opdigits("/obj/geo34/box2.1")` - returns 1 (“.” is not a digit)

## See also

- [isdigit](isdigit.html)
- [atoi](atoi.html)
