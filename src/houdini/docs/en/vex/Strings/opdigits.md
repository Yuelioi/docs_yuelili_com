---
title: opdigits
order: 22
category:
  - houdini
---

## Description

`int opdigits(string str)`

`int opdigits()`

Returns the integer value of the last sequence of digits in the input string.

If no argument is passed, the code is equivalent to

```c
string dir, name; splitpath(opfullpath("."), dir, name); return
opdigits(name);
```

## Examples ¶

- `opdigits("/obj/geo34/box21")` \- returns 21

- `opdigits("/obj/geo34/box")` \- returns 34

- `opdigits("/obj/geo34/box2.1")` \- returns 1 (“.” is not a digit)

## See also

- [isdigit](isdigit.html)
- [atoi](atoi.html)
