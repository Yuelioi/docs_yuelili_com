---
title: simport
order: 73
category:
  - vex
---

[fog](../contexts/fog.html)
[light](../contexts/light.html)
[shadow](../contexts/shadow.html)

`int simport(string name, <type>&value)`

Context(s) 从曲面着色器导入一个变量。

Mantra 以固定的顺序运行一个曲面的着色器。

1.位移 2.表面（可能在 "亮度 "循环中调用灯光着色器） 3.雾（可能在 "亮度 "循环中调用灯光着色器）。

一旦位移着色器运行，你可以使用[dimport](dimport.html) () ("Reads a variable from the displacement shader for the surface.")来检索它的导出变量。一旦曲面着色器运行后，你可以使用`simport`从它那里获取导出的变量。

如果由第一个参数命名的着色器变量被定义并导出，该函数返回 1，并将该值放入第二个参数。否则，它将返回 0。

## See also

- [dimport](dimport.html)

|
fog

[getfogname](getfogname.html)

[isfogray](isfogray.html)

[limport](limport.html)

[shimport](shimport.html)

[simport](simport.html)

|
shadedata

[limport](limport.html)

[shimport](shimport.html)

[simport](simport.html)
