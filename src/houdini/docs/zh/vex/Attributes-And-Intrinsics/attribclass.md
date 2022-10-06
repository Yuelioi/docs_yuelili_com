---
title: attribclass
order: 8
category:
  - houdini
---
    
## 描述

Returns the class of a geometry attribute.

```c
string  attribclass(<geometry>geometry, string attribute_name)
```

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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

```c
attribute_name
```

The name of the attribute to read.

要读取的属性的名称。

If attributes with the same name exist at multiple “levels”, returns the
_lowest level_ at which the attribute exists. For example, if there is a
primitive attribute `foo` and a vertex attribute `foo`, `attribclass(0, "foo")` will return `"vertex"`.

如果具有相同名称的属性存在于多个 "级别"，则返回该属性存在的最低级别。例如，如果有一个原始属性 foo 和一个顶点属性 foo，attribclass(0,
"foo")将返回 "顶点"。

Returns

A string describing the class (`"detail"`, `"prim"`, `"point"`, or `"vertex"`)
of the given attribute. If the attribute does not exist, returns an empty
string (`""`).

一个描述给定属性的类别（"细节"、"原始"、"点 "或 "顶点"）的字符串。如果该属性不存在，则返回一个空字符串（""）。
