---
title: bouncemask
order: 4
category:
  - houdini
---
    
    [  
Houdini 19.0  
](../../index.html)  
**  
[  
VEX  
](../index.html)  
**  
[  
VEX Functions  
](index.html)  
\_\_

# bouncemask

VEX function

#

```c
int  bouncemask(string labels)
```

`labels`

A label or space-separated list of labels.

一个标签或以空格分隔的标签列表。

Returns

A bitmask that matches any of the labels.

一个匹配任何标签的位掩码。

Mantra tags different types of rays using shading component _labels_ , such as
“diffuse”, “reflect”, “refract”, “volume”, and “sss”. A custom BSDF can also
specify its own labels in addition to existing ones (see
[cvex_bsdf](cvex_bsdf.html "Creates a bsdf object from two CVEX shader
strings.") for more information).

Mantra 使用着色组件标签来标记不同类型的射线，例如 "diffuse"、"reflect"、"refract"、"volume "和
"sss"。自定义 BSDF 也可以在现有标签的基础上指定自己的标签（见 ecvex_bsdffor 更多信息）。

## 描述

combination of one or more of these labels using the bits of an integer.

一些 VEX 函数接受或返回一个组件的比特掩码，它使用一个整数的比特来指定一个或多个这些标签的组合。

To get the bit value associated with a label, use
[bouncemask](bouncemask.html), for example

```c
bouncemask("diffuse")
```

. To get a
mask that matches multiple labels, use a space-separated list:

要获得与一个标签相关的位值，使用 bouncemask，例如 bouncemask("diffuse")。要得到一个匹配多个标签的掩码，请使用一个空格分隔的列表。

    reflect_or_refract = bouncemask("reflect refract")

To construct a bitmask that matches all labels, use

```c
bouncemask("all")
```

. To
match no labels, use `0`.

要构建一个匹配所有标签的位掩码，使用 bouncemask("all")。要想不匹配任何标签，使用 0。

When you get a bitmask as a return value, you can check if it matches a
certain label using `&`. For example:

当你得到一个比特掩码作为返回值时，你可以用&来检查它是否与某个标签匹配。比如说。

    mask = getbounces(mybsdf)if (mask & bouncemask("reflect")) {...}

(As an alternative to basic uses of `bouncemask()`, you can

```c
#import "pbr.h"
```

and work with the constants

```c
PBR_DIFFUSE_MASK
```

,

```c
PBR_REFLECT_MASK
```

,

```c
PBR_REFRACT_MASK
```

,

```c
PBR_VOLUME_MASK
```

, `PBR_SSS_MASK`, as well as
`PBR_ALL_MASK` and `PBR_NO_MASK`. You can combine the constants using `|`, for
example

```c
reflect_or_refract = PBR_REFLECT_MASK | PBR_REFRACT_MASK
```

.)

(作为 bouncemask()基本用法的替代，你可以#import "pbr.h
"并使用常量 PBR_DIFFUSE_MASK,PBR_REFLECT_MASK,PBR_REFRACT_MASK,PBR_VOLUME_MASK,PBR_SSS_MASK，以及 PBR_ALL_MASK 和 PBR_NO_MASK。你可以用|来组合这些常数，例如 eflect_or_refract
= PBR_REFLECT_MASK | PBR_REFRACT_MASK)。
