---
title: usd_primvartimesamples
order: 111
category:
  - houdini
---
    
## 描述

Returns the time codes at which the primvar values are authored directly on  
the given primitive.

| Since | 18.0 |
| ----- | ---- |

```c
float [] usd_primvartimesamples(<stage>stage, string primpath, string name)
```

This function returns an array of time codes at which the values are authored
for a primvar found directly on the given primitive.

此函数返回一个时间代码数组，在此数组中，直接在给定基元上找到的 primvar 的值是自动生成的。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

基元的路径。

`name`

Primvar name.

Primvar 名称。

Returns

The array of time codes at which the primvar values are authored, or an empty
array if the primvar does not exist or has no time samples.

底层变量值所处的时间代码数组，如果底层变量不存在或没有时间样本，则为空数组。

## Examples

    // Get the time codes of a foo primvar.float time_codes[] = usd_primvartimesamples(0, "/geo/cube", "foo");


    // Get primvar values at authored time samples on the given primitive.float[] usd_primvartimesamplevalues(const int input; const string primpath, primvarname){  float result[];  float time_samples[] = usd_primvartimesamples( input, primpath, primvarname );  foreach( float time_code ; time_samples )   {    float value = usd_primvar( input, primpath, primvarname, time_code );    push( result, value );  }  return result;}
