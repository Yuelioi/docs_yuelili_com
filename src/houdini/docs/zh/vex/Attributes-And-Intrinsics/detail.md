---
title: detail
order: 14
category:
  - houdini
---
    
## 描述

Reads the value of a detail attribute value from a geometry.

读取 detail 属性

```c

<type> detail(<geometry>geometry, string attribute_name, int ignored=0)

<type>[] detail(<geometry>geometry, string attribute_name, int ignored=0)
```

## 参数

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an`op:/path/to/sop`reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`attribute_name`

The name of the attribute (or intrinsic) to read.

要读取的属性（或内在属性）的名称。

`ignored`

The last argument is always ignored.It is just there so you can change a
prim/point/vertex call (which each have an element number argument) to a
detail call by changing the name without having to change the arguments as
well.

最后一个参数总是被忽略的。
它的存在是为了让你可以通过改变名称来将一个原点/点/顶点的调用（它们都有一个元素编号参数）改变为一个细节调用，而不需要同时改变参数。

Returns

`0` if importing the attribute failed, or the value of the attribute on
success.

## 示例

```c
// 普通
`detail("../box1","input",0)`


// Vex
int output = detail(1,"input",0);  // 读取1号输入口几何体的input属性
int output = detail(-2,"input",0);  //读取自创第2个属性（从-1开始） 可以设置-add spare input
printf("%s",output);
```
