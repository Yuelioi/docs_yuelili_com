---
title: ninput
order: 31
category:
  - vex
---

Context(s)
[cop](../contexts/cop.html)

`matrix3 ninput(int opinput, int plane, int component, int array_index, int u, int v, int frame, ...)`

`matrix3 ninput(int opinput, int plane, int component, int array_index, float u, float v, int frame, ...)`

Reads the given component from the targeted pixel and its eight neighbors and returns them in a 3×3 matrix.
::: info Note that this function only reads one component (for example, red, green, or blue) at a time.
To sample full color, you need to call the function three times with `component` set to 0, 1, and 2.

## Arguments

`opinput`

The input number to read from, starting from 0. For example, the first input is 0, the second input is 1, and so on.

`plane`

The index of the plane to read from.

`component`

The index of the component to read from. For example, 0 is red, 1 is green, 2 is blue in an RGB plane.

`array_index`

For use if the plane has array values. Generally, just pass `0` here.

`u`, `v`

If you give floating point UVs, the values are interpreted as unit (0-1) values. For example, `0.5, 0.5` would be the center of the image.
If you give integer UVs, the values are in pixels, ranging from `0,0` to `XRES-1, YRES-1`.

## See also

- [binput](binput.html)
- [cinput](cinput.html)
- [finput](finput.html)

|
cop

[binput](binput.html)

[cinput](cinput.html)

[finput](finput.html)

[hasmetadata](hasmetadata.html)

[metadata](metadata.html)

[ninput](ninput.html)

|
pixel

[binput](binput.html)

[cinput](cinput.html)

[finput](finput.html)

[ninput](ninput.html)

|
sample

[binput](binput.html)

[cinput](cinput.html)

[finput](finput.html)

[ninput](ninput.html)
