---
title: findattribvalcount
order: 21
category:
  - houdini
---
    
## 描述

Returns number of elements where an integer or string attribute has a certain
value.

`int findattribvalcount(<geometry>geometry, string attribclass, string attribute_name, int|stringvalue)`

Returns the number of elements that has that integer or string value set on
the given attribute name.

返回在给定属性名称上设置了整数或字符串值的元素的数量。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 op:/path/to/sopreference。

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

细节"（或 "全局"）、"点"、"底层 "或 "顶点 "中的一个。

```c
`attribute_name
```

`

The name of the attribute to read.

要读取的属性的名称。

`value`

The value to match.Must be of the same type as the attribute.

要匹配的值。 必须与属性的类型相同。
