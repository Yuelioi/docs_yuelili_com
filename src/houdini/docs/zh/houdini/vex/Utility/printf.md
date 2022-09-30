---
title: printf
order: 11
category:
  - houdini
---
    
## 描述

Prints values to the console which started the VEX program.

```c
void  printf(string format, ...)
```

The format string is a simpler version of the C `printf` format string.When a
`%` symbol is found in the string, an argument will be printedout in a format
specified by the characters following the `%` symbol.The conversion of the
argument is specified by a single letter: `g`, `f`,`s`, `d`, `x`, `c`, `p`.

格式字符串是 Cprintfformat 字符串的一个简单版本。

You can prefix the format option with an optional prefix characters to
controlthe formatting of the output.The general form of a prefix
is

```c
[flags][width][.precision][format]
```

, where Flags can be:

当在字符串中发现一个%符号时，一个参数将被打印出来，其格式由%符号后面的字符指定。

- `-`: The result will be left justified in the field

的格式打印出来。

- `+`: A numeric value will be prefixed with either `+` for positivevalues.A non-standard behavior of this flag is that stringarguments will be quoted when the `+` flag is set.

参数的转换是由一个字母指定的：g,f,s,d,x,c,p。

- `0`: For numeric values, leading zeros are used to pad the field.

你可以在 format 选项前加上一个可选的前缀字符来控制输出的格式。

Width

The width can be specified by one or more decimal digits.Alternately, ifan
asterisk (`*`) is given, the width will be taken from the next valuein the
`printf` argument list.

来控制输出的格式化。 前缀的一般形式是[flags][width][.precision][format]，其中 Flags 可以是。

Precision

The precision can be specified by one or more decimal digits.Alternately,if an
asterisk (`*`) is given, the width will be taken from the next valuein the
`printf` argument list.

-: 结果将在字段中被左对齐

The different format characters supported are

+: 数字值的前缀是+，代表正值。

`%g`, `%p`, `%c`

Print an integer float, vector, vector4, matrix3, matrix or stringin “general”
form.

值。 这个标志的一个非标准行为是，当+标志被设置时，字符串

`%f`, `%e`, `%E`

Print a float, vector, vector4, matrix3 or matrix in floating pointform.

参数在设置+标志时将被加引号。

`%s`

Print a string.

0：对于数字值，前导零用于填充字段。

`%d`, `%i`

Print an integer variable in decimal.

宽度可以由一个或多个小数位指定。 另外，如果

`%x`, `%X`

Print an integer variable in hexidecimal.The value will be prefixed with“0x”
(i.e. 0Ã42).

则宽度将取自 printfargument 列表中的下一个值。

`%o`

Print an integer variable in octal.

中的下一个值。

`%%`

Print a percent sign (%).

精度可以用一个或多个小数位来指定。 另一种方法是。

## Examples

    printf("P = %g, dot(N, P) = %g, %d = %x\n", P, dot(N, P), ptnum, ptnum);printf("RGB = {%g,%g,%g}\n", clr.r, clr.g, clr.b);printf("P = %20s\n", "20 chars");printf("%-+20s\n", "Left justified and quoted");printf("%+08.3g\n", velocity);printf("%*.*g\n", width, precision, value);Cf = texture(sprintf("/maps/map%d.rat", i));Cf = texture(sprintf("/maps/map%04d.rat", i));
