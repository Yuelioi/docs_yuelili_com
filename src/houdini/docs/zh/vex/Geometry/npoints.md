---
title: npoints
order: 18
category:
  - houdini
---
    
## 描述

Returns the number of points in the input or geometry file.

```c
int  npoints(<geometry>geometry)
```

## 参数

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop`
reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是路径 `op:/path/to/sop`

## 示例

```c
// 在group 里使用 过滤掉上游box1的最后一个点
// 节点里用表达式，要加``
`npoints("../box1")-1`
`npoints(0)-1`


// VEX 里。（好像没法用路径）
npoints(0)

```
