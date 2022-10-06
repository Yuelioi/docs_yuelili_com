---
title: usd_attribtimesamples
order: 19
category:
  - houdini
---
    
## 描述

Returns the time codes at which the attribute values are authored.

| Since | 18.0 |
| ----- | ---- |

```c
float [] usd_attribtimesamples(<stage>stage, string primpath, string name)
```

This function returns an array of time codes at which the attribute values
areauthored.

该函数返回一个时间码数组，属性值是在该数组中产生的。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

撰写的。

`primpath`

The path to the primitive.

当在一个节点的上下文中运行时（如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入号码（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`name`

Attribute name.

通往基元的路径。

Returns

The array of time codes at which the attribute values are authored, or an
empty array if the attribute does not exist or has no time samples.

属性名称。

## Examples

    // Get the time codes of a foo attribute.float time_codes[] = usd_attribtimesamples(0, "/geo/cube", "foo");


    // Get attribute values at authored time samples.float[] usd_attribtimesamplevalues(const int input; const string primpath, attribname){  float result[];  float time_samples[] = usd_attribtimesamples( input, primpath, attribname );  foreach( float time_code ; time_samples )   {    float value = usd_attrib( input, primpath, attribname, time_code );    push( result, value );  }  return result;}
