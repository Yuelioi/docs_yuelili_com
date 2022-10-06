---
title: print_once
order: 12
category:
  - houdini
---
    
## 描述

Prints a message only once, even in a loop.

```c
void  print_once(string msg, ...)
```

Prints the string passed to the function exactly one time, even in a loop.This
is useful to print a message before the first iteration of a loop, without
having to count iterations.

打印传递给函数的字符串一次，即使是在循环中。

`msg`

The string to print. This string does support interpolating values.Use
[sprintf](sprintf.html "Formats a string like printf but returns the result as
a stringinstead of printing it.") to generate the msg string if you need to
include values.

这对于在一个循环的第一次迭代之前打印一个信息是很有用的，而不必计算迭代次数。

"global",` int``=0 `

Normally, multiple instances of `print_once()` call siteswill work
independently of each other.That is, if two separatecall sites to
`print_once()` are passed the same string, the string will beprinted twice
(once per call site).With the “global” flag turned on, stringsare checked
across all instances of the `print_once()` functions.

要打印的字符串。这个字符串确实支持插值。

## Examples

    // Only print "Hello world" one timefor (int i = 0; i < 100; ++i)  print_once("Hello world\n");// Print a missing texture warning, just one time across all shadersprint_once( sprintf("Missing texture map: %s\n", texture_map), "global", 1);
