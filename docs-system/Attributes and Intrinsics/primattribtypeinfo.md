## 描述

Returns the type info of a geometry attribute.


```c
string  primattribtypeinfo(<geometry>geometry, string attribute_name)
```


`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从0开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```
 reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在Houdini内部运行时，这可以是一个op:/path/to/sopreference。

See [attribtypeinfo](attribtypeinfo.html "Returns the transformation metadata
of a geometry attribute.") for more information.

更多信息见attribtypeinfof。

