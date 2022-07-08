## 描述

Finds the index of a layer in an agent‘sdefinition.


```c
int  agentfindlayer(<geometry>geometry, int prim, string layername)
```


Returns the index of a layer in the agent‘sdefinition.Returns -1 if `prim`
is out of range, `prim` is not an agent primitive, or the layer does not
exist.

返回代理定义中的一个层的索引。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

如果prim超出范围，prim不是一个代理基元，或者该层不存在，则返回-1。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```
 reference.

当在一个节点的上下文中运行时（如wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从0开始）。

`prim`

The primitive number.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在Houdini内部运行时，这可以是anop:/path/to/sopreference。

`layername`

Name of a layer in the agent‘sdefinition.

基层编号。

