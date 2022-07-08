## 描述

Reads a component from a pixel and its eight neighbors.

Context(s) | [cop](../contexts/cop.html)  
---|---  
  
`matrix3  ninput(int opinput, int plane, int component, int array_index, int
u, int v, int frame, ...)`

`matrix3  ninput(int opinput, int plane, int component, int array_index, float
u, float v, int frame, ...)`

Reads the given component from the targeted pixel and its eight neighbors and
returns them in a 3Ã3 matrix.Note that this function only reads one component
(for example, red, green, or blue) at a time.To sample full color, you need to
call the function three times with `component` set to 0, 1, and 2.

从目标像素和它的八个邻居中读取给定的分量，并以3Ã3矩阵的形式返回。

``opinput``

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

注意，这个函数一次只能读取一个分量（例如，红色、绿色或蓝色）。

`plane`

The index of the plane to read from.

要对全色进行采样，你需要在components设置为0、1和2的情况下调用这个函数三次。

`component`

The index of the component to read from. For example, 0 is red, 1 is green, 2
is blue in an RGB plane.

要读取的输入号码，从0开始。例如，第一个输入是0，第二个输入是1，以此类推。

``array_index``

For use if the plane has array values. Generally, just pass `0` here.

要读出的平面的索引。

`u`, `v`

If you give floating point UVs, the values are interpreted as unit (0-1)
values. For example, `0.5, 0.5` would be the center of the image.If you give
integer UVs, the values are in pixels, ranging from `0,0` to 
```c
XRES-1, YRES-1
```
.

要读出的组件的索引。例如，在RGB平面中，0是红色，1是绿色，2是蓝色。

