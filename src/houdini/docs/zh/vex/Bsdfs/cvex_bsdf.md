---
title: cvex_bsdf
order: 6
category:
  - houdini
---
    
## 描述

Creates a bsdf object from two CVEX shader strings.

On this page |

- Evaluation Function

评价功能

- Sampling Function

采样功能

- Component mask implicit argument

元素掩码隐含参数

- Custom variadic arguments

自定义变量参数

- Validation

- Examples

  - Example: Diffuse

例子。漫反射

    * Example: Specular

例子。镜面反射

---|---

```c
bsdf  cvex_bsdf(string eval_cvex_shader, string sampler_cvex_shader, ...)
```

This function lets you define a BSDF reflectance function through a pair of
`cvex` shaders:One to [evaluate the reflectance
function](cvex_bsdf.html#eval_fn) and another to
[sample](cvex_bsdf.html#sample_fn) it.

这个函数让你通过一对 cvex 着色器定义一个 BSDF 反射函数。

You pass the shaders as VEX source strings in the first two arguments.You can
then use variadic arguments to define arbitrary data that will be passed to
the shaders when they are invoked.

一个用于评估反射函数，另一个用于取样。

Warning

This interface is subject to change in future versions of Houdini,though any
potential changes will likely not require fundamentalchanges to the structure
of your shaders.

你在前两个参数中以 VEX 源字符串的形式传递着色器。

## Evaluation Function

The evaluation function must accept the following arguments:

然后你可以使用变量参数来定义任意的数据，当它们被调用时，这些数据将被传递给着色器。

    (vector u, vector v, int bounces, int reverse, vector &refl, vector &eval, float &pdf)

`u`

Outgoing light direction, from the surface to the viewer.

这个接口可能会在未来的 Houdini 版本中发生变化。

`v`

Incoming light direction, from the surface to the light.

尽管任何潜在的变化都可能不需要从根本上

`bounces`

A mask specifying the type of reflections that should be evaluated.

对您的着色器结构进行根本性的改变。

`reverse`

Whether evaluating from the camera (`0`) or the light source (`1`).

评估函数必须接受以下参数。

`refl`

The function must overwrite this variable with the reflectivity (albedo) of
the BSDF.

出光方向，从表面到观察者。

This should not be dependent on the `v` vector, since it is used as an average
reflectivity over all lighting directions.This is the value that the
[albedo](albedo.html) "Returns the albedo (percentage of reflected light) for
a bsdf given the outgoing light direction.") function will return.

入射光线方向，从表面到光线。

`eval`

The function must overwrite this variable with the evaluated reflectance for
the given directions.

指明应该被评估的反射类型的掩码。

Set this to `0` to indicates to mantra whether the BSDF is a delta function.
Delta functions reflect light in specific directions or lines, and are handled
as a special case in the lighting algorithm to produce less noisy results.The
behavior of a delta BSDF is determined by the sampling function (below).

是否从相机（0）或光源（1）进行评估。

`pdf`

The function must overwrite this variable with the sampling pdf for the given
directions.The integral of this value over the sphere should be equal to

```c
luminance(refl)*2*PI
```

.For perfect importance sampling, `pdf == luminance(eval)`.

该函数必须用 BSDF 的反射率（反照率）来覆盖这个变量。

## Sampling Function

The sampling function is responsible for selecting a random reflection
direction that is importance sampled from the distribution defined by the
evaluation function (above).

这不应该依赖于 vvector，因为它是作为所有照明方向的平均反射率使用的。 这是 albedofunction 将返回的值。

The sampling function must accept the following arguments:

采样函数必须接受以下参数。

    (vector u, float sx, float sy, int bounces, vector &refl, vector &v, int &bouncetype, float &pdf)

If the evaluation function is a delta function (indicated by the evaluation
function setting `eval` to `0`), you are free to choose the sampling
directions in any way you want.Otherwise, you should choose directions from a
distribution that either matches the evaluation function or is close to it.The
`sx` and `sy` inputs are available to help produce high quality sample
distributions. These values are initialized directly from mantra‘spixel
sampling patterns.

如果评价函数是 delta 函数（由评价函数 settingevalto0 表示），你可以以任何方式自由选择采样方向。
否则，你应该从一个与评价函数相匹配或接近的分布中选择方向。
sx 和 yinputs 可以帮助产生高质量的样本分布。这些值是直接从 mantraâs 像素采样模式中初始化的。

Show/hide arguments

`u`

Outgoing light direction, from the surface to the viewer.

出光方向，从表面到观察者。

`sx`

Uniform random value between 0 and 1, correlated with sy in a 2D sampling
pattern.

0 和 1 之间的均匀随机值，与二维采样模式中的 sy 相关。

`sy`

Uniform random value between 0 and 1, correlated with sx in a 2D sampling
pattern.

0 到 1 之间的均匀随机值，与二维取样模式中的 sx 相关联。

`bounces`

A mask specifying the type of reflections that should be evaluated.

指明应评估的反射类型的掩码。

`refl`

The reflectivity (albedo) of the BSDF, tinted by the color of the light in the
sampled direction.The luminance of this value should match `refl` from the
evaluation function. If the sampling distribution does not match the
evaluation function exactly, this value should be scaled by the ratio of the
evaluation distribution to the sampling distribution.

BSDF 的反射率（反照率），由采样方向上的光的颜色染成。
该值的亮度应与评估函数中的 reflf 相匹配。如果采样分布与评价函数不完全匹配，该值应按评价分布与采样分布的比例进行缩放。

`v`

Sampled light direction, from the surface to the light.

采样的光线方向，从表面到光线。

`bouncetype`

The specific component type selected by sampling.

采样所选择的具体元件类型。

`pdf`

The sampling pdf.The integral of this value over the sphere should be a
constant `2*PI`. Note that this differs from the `pdf` produced by the
evaluation function by a factor of

```c
luminance(refl)
```

.

采样的 pdf。 这个值在球面上的积分应该是一个常数 2\*PI。请注意，这与评估函数所产生的 pdf 不同，它的系数为 luminance（refl）。

Since Houdini 13, it is not necessary for the sampling function to directly
sample from the evaluation function‘sdistribution.To use a different
sampling function, adjust the `pdf` outputs from both the evaluation and
sampling shaders so that they reflect the distribution being sampled.

自 Houdini 13 以来，取样函数没有必要直接从评估函数的分布中取样。
要使用不同的取样函数，请调整评估和取样着色器的 pdf 输出，以使它们反映被取样的分布。

## Component mask implicit argument

If you add an `int mybounces` output argument to your evaluation or sample
shader, it will be filled in with the component mask for the BSDF. You can
check this against an extra `"label"` variadic argument passed to the
`cvex_bsdf()` function to see if it should apply. This allows you to use the
same CVEX shader source code for different component types.

如果你在你的评估或采样着色器中添加一个 int
mybouncesoutput 参数，它将被填入 BSDF 的组件掩码。你可以根据传递给 cvex_bsdf()函数的额外的 "标签
"变量参数来检查它是否应该适用。这使得你可以对不同的组件类型使用相同的 CVEX 着色器源代码。

See [bouncemask](bouncemask.html) for information on component label bitmasks.

关于组件标签位掩码的信息，请参见 ebouncemask。

## Custom variadic arguments

Any extra `"key", value` pairs passed to the `cvex_bsdf()` after the shader
strings define custom arguments that will be passed to the shaders when they
are invoked.

在着色器字符串之后传递给 cvex_bsdf()的任何额外的 "key", valuepairs 定义了自定义参数，这些参数将在着色器被调用时传递给它们。

    F = cvex_bsdf("...", "...", "label", "diffuse", "N", N);

In particular, you should provide a “label” keyword argument to specify the
type of component for the new BSDF (for example, `"diffuse"` or `"reflect"`).
You can specify multiple labels in a space-separated list (for example,

```c
"label", "reflect refract"
```

).

特别是，你应该提供一个 "标签 "关键字参数来指定新 BSDF 的组件类型（例如，"漫反射 "或
"反射"）。你可以在一个空格分隔的列表中指定多个标签（例如，"标签"，"反射折射"）。

## Validation

There are 2 main approaches available to verify whether you have implemented
the `cvex_bsdf` evaluation and sampling functions correctly.

有两种主要的方法可以用来验证你是否正确地实现了 cvex_bsdfevaluation 和采样函数。

- You can use mantra‘smultiple importance sampling algorithm toensure that renders match in brightness apart from noise for differentsampling techniques. To do this, create an environment light (with amap assigned) and render with different values of the **MIS Bias** parameter. You will need to add the **MIS Bias** parameter from therendering properties dialog, since it is not available on the light bydefault. A value of -1 means to sample only from the BSDF while a valueof 1 means to sample only from light source. To verify the `refl` valuein the sampling function, set the environment light rendering mode to **Ray Tracing Background**. If the rendered results are the same(apart from noise) with values of -1, 0, 1, and for ray tracingbackground, your shader is bias-free.

你可以使用 mantraâs 多重重要性采样算法来

- Second, the [Verify BSDF](../../nodes/obj/verifybsdf.html) object can be used toverify that the albedo, pdf, and sampling function all align correctlyand that they integrate to the correct values. This approach usespoint-based random sampling in SOPs and additionally will show theshape of the BSDF visually as a polar point cloud.

你可以使用 mantra 的多重重要性取样算法来确保不同的取样技术下，渲染物的亮度与噪声相匹配。

## Examples

## Example: Diffuse

Creation:

    F = cvex_bsdf("diffuse_eval", "diffuse_sample", "label", "diffuse", "N", N);

Evaluation shader:

采样技术。要做到这一点，创建一个环境光（有一个

    #include "pbr.h"cvex diffuse_eval(vector u = 0;vector v = 0;int bounces = 0;int reverse = 0;export vector refl = 0;export vector eval = 0;export float pdf = 0;int mybounces = 0;vector N = 0){if (bounces & mybounces){// If evaluating reversed, the incoming light direction is needed for// evaluation rather than the outgoing direction. The select statement// swaps based on the value of the "reverse" toggle.vector vvec = select(reverse, u, v);pdf = max(dot(vvec, normalize(N)), 0);eval = pdf;refl = 0.5;}}

Sample shader:

贴图），并用不同的 MIS Biasparameter 值来渲染。 你需要在渲染属性对话框中添加 MIS Biasparameter。

    #include "math.h"#include "pbr.h"cvex diffuse_sample(  vector u = 0;  float sx = 0;  float sy = 0;  int bounces = 0;  export vector refl = 0;  export vector v = 0;  export int bouncetype = 0;  export float pdf = 0;  int mybounces = 0;  vector N = 0){  if (bounces & mybounces)  {    vector nml = normalize(N);    v = set(cos(sx*PI*2), sin(sx*PI*2), 0);    v *= sqrt(sy);    v.z = sqrt(1-sy);    pdf = 2*v.z;    // Transform v into the reference frame for nml    vector framex = normalize(cross(nml, u));    vector framey = cross(nml, framex);    v = framex * v.x + framey * v.y + nml*v.z;    bouncetype = mybounces;    refl = 0.5; // Luminance needs to match albedo  }}

## Example: Specular

Creation:

    F = cvex_bsdf("specular_eval", "specular_sample", "label", "reflect", "dir", reflect(I, N));

Evaluation shader:

评估着色器。

    #include "pbr.h"cvex specular_eval(vector u = 0;vector v = 0;int bounces = 0;int reverse = 1;export vector refl = 0;export vector eval = 0; // Delta bsdfint mybounces = 0;vector dir = 0){if (bounces & mybounces)refl = 1;}

Sample shader:

样品着色器。

    #include "math.h"#include "pbr.h"cvex specular_sample(  vector u = 0;  float sx = 0;  float sy = 0;  int bounces = 0;  export vector refl = 0;  export vector v = 0;  export int bouncetype = 0;  export float pdf = 0;  int mybounces = 0;  vector dir = 0){  if (bounces & mybounces)  {    pdf = 1e6F;    v = dir;    bouncetype = mybounces;    refl = 1; // Needs to match albedo  }}
