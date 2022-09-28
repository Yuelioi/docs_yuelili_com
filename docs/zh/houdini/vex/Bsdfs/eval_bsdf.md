---
title: eval_bsdf
order: 8
category:
  - houdini
---
    
## 描述

Evaluates a bsdf given two vectors.

On this page |

- Variadic arguments

变量论据

- Examples

---|---

```c
vector  eval_bsdf(bsdf b, vector viewer, vector light, ...)
```

```c
vector  eval_bsdf(bsdf b, vector viewer, vector light, int mask, ...)
```

`vector eval_bsdf(bsdf b, vector viewer, vector light, float &pdf, int mask, ...)`

```c
vector  eval_bsdf(bsdf b, vector viewer, vector light, vector normal, ...)
```

`vector eval_bsdf(bsdf b, vector viewer, vector light, vector normal, int mask, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, vector normal, float &pdf, int mask, ...)`

`b`

BSDF to evaluate.

要评估的 BSDF。

`viewer`

Vector toward viewer.

朝向观察者的矢量。

`light`

Vector toward light.

朝向光线的矢量。

`normal`

Surface normal.

表面法线。

`mask`

A bitmask indicating which types of shading component bounces to evaluate.

比特掩码，表示要评估哪些类型的阴影组件弹跳。

See [bouncemask](bouncemask.html) for information on component label bitmasks.

有关组件标签位掩码的信息，请参见 bouncemask。

`&pdf`

The function overwrites this variable with the computed PDF for the given
directions, scaled by the albedo.

该函数用给定方向的计算的 PDF 覆盖这个变量，并以反照率进行缩放。

## Variadic arguments

The `eval_bsdf` function passes any extra `"name", value` argument pairs to
the BSDF beingevaluated.For custom BSDFs these keyword arguments are bound to
shaderarguments (e.g. indicating whether the BSDF is being evaluated for
direct orindirect illumination).It‘salso possible for a BSDF to pass
information backto `eval_bsdf`.To indicate that a keyword argument value
should be importedfrom the BSDF prefix the keyword with “import:”

eval_bsdffunction 将任何额外的 "名称"、值参数对传递给正在评估的 BSDF。

## Examples

    v = eval_bsdf(F, inI, dir,  "direct", 0,            // Specify indirect illumination  "import:sssmfp", sssmfp,    // Read the exported sssmfp parameter  ...);
