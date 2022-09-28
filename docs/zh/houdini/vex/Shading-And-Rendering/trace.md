---
title: trace
order: 76
category:
  - houdini
---
    
## 描述

Sends a ray from P along the normalized vector D.

On this page |

- Light inclusion/exclusion options

Light inclusion/exclusion options

- Area sampling options

Area sampling options

- Ray options

Ray options

- Ray sending options

Ray sending options

- Sending information to the surface‘sshader

Sending information to the surface‘sshader

- Importing information from the ray

Importing information from the ray

- Sample filtering options

Sample filtering options

- Pipeline options

Pipeline options

---|---  
Context(s) | [shading](../contexts/shading.html)

`void trace(vector &cv, vector &of, float &af, vector P, vector D, float shadow_bias, float max_contrib, ...)`

Sends a ray from P along the normalized vector D. The resultingcolor, opacity
and alpha will be put in the export variables.

Sends a ray fromPalong the normalized vectorD. The resulting

shadow_bias is typically a small number which is used to preventself-shading.

color, opacity and alpha will be put in the export variables.

max_contrib controls how much the result of the trace() call willcontribute to
the resulting pixel color. max_contrib has no effecton the results of the
trace() call.

shadow_biasis typically a small number which is used to prevent

```c
int  trace(vector pos, vector dir, float time, ...)
```

Sends a single ray into the scene at `time` and retrieves information from the
hit surface. A return value of 1 means the ray hit a surface.

self-shading.

Only the second signature accepts any of the following variadic arguments. The
first trace signature is more specific, and is legacy from older versions of
mantra.

max_contribcontrols how much the result of the trace() call will

## Light inclusion/exclusion options

"`categories`",` string``="*" `

Specifies lights to include/exclude by their “category” tags.This is the
preferred include/exclude lights rather than pattern matchinglight names with
the `"lightmask"` keyword argument.

contribute to the resulting pixel color.max_contribhas no effect

For example:

on the results of the trace() call.

    diff = diffuse(nml, "lightmask", "hero | fill");

See [light categories](../../render/lights.html#categories) for more
information.

Sends a single ray into the scene attimeand retrieves information from the hit
surface. A return value of 1 means the ray hit a surface.

"`lightmask`",` string``="*" `

When evaluating light and shadow shaders, objects have pre-defined lightmasks.
This mask is usually specified in the geometry object andspecifies a list of
lights which are used to illuminate a surface or fogshader. It is possible to
override the default light mask by specifyinga “lightmask” argument.

Only the second signature accepts any of the following variadic arguments. The
first trace signature is more specific, and is legacy from older versions of
mantra.

For example:

Specifies lights to include/exclude by their “category” tags.

    diff = diffuse(nml, "lightmask", "light*,^light2");

â¦will cause all lights whose names begin with “light” except for alight
named “light2” to be considered for diffuse illumination.

This is the preferred include/exclude lights rather than pattern matching

All Houdini scoping patterns, excepting group expansion, are supported:

light names with the"lightmask"keyword argument.

- `*` \- wild-card match

\*- 通配符匹配

- `?` \- single character match

?- 单一字符匹配

- `^` \- exclusion operator

^- 排除操作符

- ` ` \- character list match

[列表]--字符列表匹配

## Area sampling options

For area sampling, you must specify both the angle and sample variadic
parameters. For example:

对于区域采样，你必须同时指定角度和采样变量参数。比如说。

    surfaceblurry_mirror(float angle = 3; int samples = 16; float bias=0.05){  Cf = reflectlight(bias, 1, "angle", angle, "samples", samples);}

## Ray options

Tip

When you specify a texture, such as with the `"environment"` keyword,you can
also use the image filtering keyword arguments. See
[environment](environment.html "Returns the color of the environment
texture.")for a listing of the image filter keyword arguments.

当你指定一个纹理时，比如用 "环境 "关键字。

Show/hide arguments

"`scope`",`string`

A list of objects which can be hit by the rays.When specified, `scope`
overrides the default scope that would have been selected for the given
`raystyle`.The

```c
"scope:default"
```

value will cause the `scope` argument to use
the default scope for the current context - as if the argument were not
specified.

你也可以使用图像过滤关键字的参数。请参阅 environment 以了解图像过滤关键字参数的清单。

Allows an override of the [scope](../contexts/shading_contexts.html#scope) for
ray-intersections.A special scope argument, `scope:self`, will match the
currently shading object.

一个可以被射线击中的物体的列表。 当指定时，scope 会取代为给定射线样式选择的默认范围。 scope:default
"值将导致 scopear 参数使用当前环境的默认范围--就像没有指定该参数一样。

"`currentobject`",`material`

Used to specify what the current shading object is. For example, when used
with the scope argument, `scope:self` will match the object passed in by this
argument.

允许覆盖射线断面的 scope。

"`maxdist`",` float``=-1 `

The maximum distance to search for objects. This can be used to limit the
search of objects to nearby objects only. If the `maxdist` given is negative,
then it will act as if there is no maximum distance.

一个特殊的作用域参数，即 scope:self，将匹配当前的

Allows an override of the maximum distance the ray cantravel when testing for
intersections. Some functions (such as[fastshadow](fastshadow.html "Sends a
ray from the position P along the direction specified by thedirection D."))
have the maximum distance implicitly defined (bythe length of the ray) and
should probably avoid using thisoption. However, this option can be used
effectively whencomputing reflections, global illumination, refraction etc.

着色对象。

"`variancevar`",`string`

The name of a VEX export variable to use for variance anti-aliasing. The
renderer compares the value with adjacent micropolygons in micropolygon
rendering to decide what shading points need additional samples (using
`vm_variance` [property](../../props/index.html "Properties let you set up
flexible and powerful hierarchies of rendering, shading, lighting, and camera
parameters.") as a threshold). If more samples are required, the algorithm
takes samples up to the specified maximum ray samples.

用于指定当前的着色对象是什么。例如，当与 scope 参数一起使用时，scope:self 将与该参数所传递的对象相匹配。

This variable must be imported from the hit surface, so it must be in the list
of imported names (see “importing information back from the ray” below). If
the named variable is not imported, this option will be ignored.

搜索对象的最大距离。这可以用来限制搜索对象，只搜索附近的对象。如果 maxdistgiven 是负数，那么它将像没有最大距离一样行动。

Variance antialiasing puts more samples in areas of the image with high
variance, for example a sharp shadow edge. It is only used when

```c
vm_dorayvariance
```

is enabled. Otherwise, only the min ray samples (or an
explicitly supplied `"samples"` value) are used for antialiasing of the gather
loop.

允许重写射线在测试交叉点时的最大距离。

Overrides the global variance control (mantra‘s-v option)which is used to
determine anti-aliasing quality of ray tracing.For more information please
refer to the documentation onmantra.

允许覆盖射线在测试交叉点时的最大行程。一些函数（如 sfasthadow）隐含地定义了最大距离（由

"`angle`",` float``=0 `

The distribution angle (specified in radians). For gather(), rays will be
distributed over this angle. For trace(), the angle is used to indicate the
rate at which the filter width should increase with increasing intersection
distance. Larger angles will cause farther hit surfaces to use larger
derivatives, leading to improved texturing and displacement performance.

射线的长度），可能应该避免使用这个

To be effective, the samples parameter should also be specified.

选项。然而，这个选项可以有效地用于

"`samples`",` int|float``=1 `

How many samples should be sent out to filter rays. For theirradiance and
occlusion functions, specifying a samplesparameter will override the default
irradiance sampling.

计算反射、全局光照、折射等时，可以有效地使用这个选项。

"`environment`",`string`

If the ray sent out to the scene misses everything, thenit‘spossible to
specify an environment map to evaluate.

用于差异抗锯齿的 VEX 导出变量的名称。渲染器会在微多边形渲染中与相邻的微多边形进行比较，以决定哪些阴影点需要额外的样本（使用 vm_varianceproperty 作为阈值）。如果需要更多的样本，算法会在指定的最大射线样本范围内取样。

Using the ray‘sdirection, the environment map specifiedwill be evaluated
and the resulting color will be returned.Most likely, it will be necessary to
specify a transformspace for the environment map evaluations.

这个变量必须从击中的表面导入，所以它必须在导入的名称列表中（见下文 "从射线导入信息"）。如果命名的变量没有被导入，这个选项将被忽略。

In the case of refractlight and trace the Of and Afvariables will be set to 0
regardless of the backgroundcolor specified. the resulting color.

在折射光和跟踪的情况下，Of 和 Af

When an environment map is specified, the filtering optionsfrom texture() are
also supported.

变量将被设置为 0，而不考虑指定的背景

See [how to create an environment/reflection map](../../render/envmaps.html).

的颜色。

"`envobject`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of another object, light or
fog object in thescene. In Houdini, null objects can be used to specify
theorientation. For example:

当指定了环境贴图时，也支持来自 texture()的过滤选项。

    Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

"`envlight`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of a light in the scene.

纹理()的过滤选项也被支持。

"`envtint`",`vector`

If an environment map is used, tint it with this color.

参见如何创建环境/反射贴图。

"`background`",`vector`

If a ray misses all objects, use this as thebackground color of the scene. In
the case of refractlight andtrace the Of and Af variables will be set to 0
regardless of thebackground color specified.

如果使用了环境贴图，环境贴图的方向可以通过变换来指定。

"`distribution`",`string`

**Functions** : [irradiance](irradiance.html "Computes irradiance (global
illumination) at the point P with the normal N."), [occlusion](occlusion.html "Computes ambient occlusion.")

Distribution for computing irradiance. The default is to usea cosine
distribution (diffuse illumination). The possiblevalues for the style are
`"nonweighted"` for uniform samplingor `"cosine"` for cosine weighted
sampling.

环境贴图的方向可以通过将射线转换为另一个物体的空间来指定。

## Ray sending options

Show/hide arguments

"`width`",` float``=-1 `

Specifies the filter width at the source of the ray. If `angle` is also
specified, the filter width will become larger with increasing distance along
the ray. By default, the filter width will be initialized from the current
shading context, so it‘snormally not necessary to specify `width` directly.
Negative values are ignored and will also cause the filter width to be
initialized from the current shading context.

到场景中的另一个物体、光线或雾气物体的空间中去。

"`distribution`",` string``="cosine" `

Determines the sampling distribution.

场景中的另一个物体、光或雾物体的空间来指定环境贴图的方向。在 Houdini 中，空对象可以用来指定

For [gather](gather.html "Sends rays into the scene and returns information
from the shaders ofsurfaces hit by the rays."):

- `cosine` â Rays are distributed by the cosine (diffuse) function over the hemisphere.

方向。比如说。

- `uniform` â Rays are distributed uniformly over the hemisphere

如果使用的是环境贴图，那么环境贴图的方向可以通过变换光线来指定。

For [sample_geometry](sample_geometry.html "Samples geometry in the scene and
returns information from the shaders of surfaces that were sampled."):

- `area` â Samples are distributed by primitive area

环境图的方向可以通过将光线转换为场景中的光线空间来指定。

- `parametric` â Samples are distributed by primitive ID, subdivision ID, and parametric surface coordinates (s, t).

转换到场景中的光线空间。

- `solidangle` â Samples are distributed either by primitive area or by primitive area and solid angle subtended by the primitive.

如果使用了环境贴图，就用这种颜色进行着色。

"`biasdir`",` vector``=Ng `

Overrides the bias direction when **Bias Along Normal** is enabled.When no
`biasdir` is specified, the geometric normal `Ng` is used.When bias along
normal is disabled, this option has no effect.

如果光线错过了所有的物体，就用这个颜色作为

"`SID`",` int``=0 `

Sample identifier to be passed to the called shader.If the calling shader has
used SID to generate samples, it can be useful to pass the modified sample
identifier to the called shader so that it can begin sampling at the specified
offset.This value will be used to initialize the SID global in the hit
surface.

场景的背景颜色。在 refractlight 和 trace 的情况下，Of 和 Af 变量将被用作场景的背景颜色。

"`rayweight`",` float``=1 `

A hint to mantra to indicate the relative contribution of this ray to the
final shading. This value is used by the ray clip threshold to limit sending
of rays (similar to ray bounce).

追踪的情况下，Of 和 Af 变量将被设置为 0，而不考虑指定的背景颜色。

"`raystyle`",` string``="refract" `

The type of rays you are sending.Mantra will use `raystyle` to determine both
the default raytracing mask and bounce limit used for ray termination.

指定的背景颜色。

- `reflect` â Sending reflection rays.Mantra will use the reflection mask and reflection limit to terminate raytracing.

用于计算辐照度的分布。默认情况是使用

- `refract` â (default) Sending refraction rays.Mantra will use the refraction mask and refraction limit to terminate raytracing.

refractâ（默认）发送折射光线。 Mantra 将使用折射掩码和折射限制来终止光线追踪。

- `diffuse` â Sending diffuse rays.Mantra will use the diffuse limit for diffuse rays.

diffuseâ 发送漫反射光线。 Mantra 将使用漫反射光线的漫反射极限。

- `shadow` â Sending shadow rays.Mantra will not modify the raytracing level and will trace against `shadowmask` if inside a shadow or light shader.

shadowâ 发送阴影射线。 Mantra 不会修改光线追踪的级别，如果在阴影或光照器内，将针对 shadowmask 进行追踪。

- `primary` â Sending primary rays.This style can be used when a shader needs to change the direction of a primary ray without affecting the behavior of render settings that apply only to directly visible objects (such as matte and phantom).Mantra will still increment the raytracing level when sending `primary` rays.

primaryâ Sending primary
rays.当着色器需要改变主要光线的方向，而不影响只适用于直接可见物体的渲染设置的行为（如哑光和幻影）时，可以使用这种风格。
在发送 primaryrays 时，Mantra 仍然会递增光线追踪的级别。

- `nolimit` â Sending reflection rays with no limit on the number of raytracing bounces.Mantra will still increment the raytracing level when sending `nolimit` rays.

nolimitâ 发送反射光线，对光线追踪的弹跳次数没有限制。 当发送 nolimitrays 时，Mantra 仍然会递增光线追踪的级别。

"`categories`",`string`

A category expression used to select the objects which can be hit by rays.
When specified, this overrides the existing

```c
reflectcategories
```

and

```c
refractcategories
```

parameters.

一个类别表达式，用于选择可以被射线击中的对象。当指定时，它将覆盖现有的 reflectcategories 和 refractcategories 参数。

For example, `^hidden` will hit all objects which do not have the hidden
category, and `shiny|happy` will hit all objects with either the shiny or
happy category.

例如，^hidden 将击中所有没有隐藏类别的物体，shiny|happy 将击中所有具有闪亮或快乐类别的物体。

The intersection of the scope and categories parameters are used to choose the
objects which can be hit by rays.

范围和类别参数的交集被用来选择可以被射线击中的物体。

"`samplebase`",` float``=0 `

Typically, rays are distributed over the surface of the micro-polygon being
shaded. This argument can be used to control the area. A value of 0 will force
all rays to be sent from the same point. A value of 1 will cover the entire
micro-polygon. (Gather only)

通常情况下，射线会分布在被着色的微观多边形的表面上。这个参数可以用来控制这个区域。一个 0 的值将迫使所有的射线从同一点发出。值为 1 将覆盖整个微观多边形。(仅收集)

"

```c
transparentsamples
```

",` int``=1 `

The number of transparent samples to take for stochastic transparency with
array outputs. Normally this value should be set to 1 unless you have
requested exports in array variables - in which case the ray tracer will
insert an entry in the array for each sample along the ray.

使用阵列输出的随机透明采样的数量。通常情况下，该值应设置为 1，除非您要求在阵列变量中输出--
在这种情况下，射线追踪器将在阵列中为沿射线的每个样本插入一个条目。

Note

```c
transparentsamples
```

must be 1 when importing `F` or `ray:material` using
`screendoor` `samplefilter`.

当导入 Forray:materials 使用 creendoorsamplefilter 时，transparentsamples 必须为 1。

## Sending information to the surface‘sshader

Using a keyword in the form

```c
"send:name", value
```

, you can pass data from the
originating surface to surfaces which are intersected by the ray. These
arguments pass any values you want.

使用 "send:name", value 形式的关键字，你可以将数据从起始表面传递到与射线相交的表面。这些参数可以传递任何你想要的数值。

    gather(P, dir, "send:N", normalize(N)) { ... }

You can extract this passed data on the receiving end (that is, in the surface
being hit by the ray) with the [rayimport](rayimport.html "Imports a value
sent by a shader in a gather loop.") function. The first argument is the name
(without the `send:` prefix) and the second argument is a variable in which to
store the imported value.

你可以在接收端（也就是被射线击中的表面）用 therayimport 函数提取这些传递的数据。第一个参数是名称（没有 send:前缀），第二个参数是一个变量，用于存储导入的值。

```c
int rayimport(string name, <type> &value)
```

int rayimport(string name, <type> &value)

`rayimport` returns `1` if the value was imported successfully.

如果值被成功导入，rayimport 将返回 1。

## Importing information from the ray

You can specify names of global or exported variables to import from the hit
shader in the form

```c
"varname", &var
```

, typically including `Cf` (color vector
of surface hit) and `Of` (opacity vector of surface hit).

你可以以 "varname", &var 的形式指定要从 hit
shader 导入的全局变量或导出变量的名称，通常包括 Cf（表面撞击的颜色矢量）和 Of（表面撞击的不透明度矢量）。

    vector hitcf;gather(P, dir, "bias", 0.01, "Cf", hitcf) {...}

In addition, you can import the following special keywords to get information
about the ray itself:

此外，你还可以导入以下特殊关键字来获取射线本身的信息。

Show/hide arguments

"`ray:origin`",`&vector`

The origin of the ray (defined in `else` clause also).

射线的原点（也定义在 elseclause 中）。

"`ray:direction`",`&vector`

The direction of the ray (defined in `else` clause also).

射线的方向（也定义在无尾句中）。

"`ray:length`",`&float`

The distance to the first surface which was hit by the ray.

到第一个被射线击中的表面的距离。

"`ray:area`",`&float`

The total surface area of all the geometry in the raytracing scope.

光线追踪范围内的所有几何体的总表面积。

"

```c
ray:solidangle
```

",`&float`

The estimated solid angle subtended by all geometry in the raytracing
scope.For large objects close to or enclosing the ray origin, this may be a
very poor estimate while for individual primitives the estimate can be very
good.

光线追踪范围内的所有几何体所对应的估计实体角度。 对于靠近或包围射线原点的大型物体，这可能是一个非常差的估计值，而对于单个基元，估计值可能非常好。

You can retrieve information about more than one hit alongthe ray by
requesting data in an array variable.When an importedvalue is of an array
type, the [trace](trace.html "Sends a ray from P along the normalized vector
D.") function will automatically appendan entry in the array for each
individual hit point that was compositedduring ray tracing.For the `opacity`
sample filter (see below), an entry will becreated in the array for each semi-
transparent sample encountered untilfull opacity is reached.When using array
outputs, it may also be usefulto use the `all` sample filter, which will cause
all hits along the ray tobe inserted regardless of whether the opacity limit
was exceeded.

您可以通过请求射线中的数据来检索沿线的多个命中的信息。

    // Find the position and normal for all hit points along the ray,// regardless of visibility.vector a_pos[];vector a_nml[];trace(P, dir, Time,    "samplefilter", "all",      "P", a_pos,      "N", a_nml);

## Sample filtering options

By default, Houdini composites the global variables using opacity blending. In
some cases, it‘smore useful to get the value from the closest surface
(regardless of whether it‘stransparent). You can use the special
`samplefilter` keyword with a string value of either `closest` or `opacity` to
control whether the value of a global is from the closest surface or opacity
blended.

你可以通过请求数组变量中的数据来检索沿射线的多个命中信息。 当一个导入的

Show/hide arguments

"`samplefilter`",`string`

When the `samplefilter` keyword is encountered in the argument list, _all
following_ import variables will use the specified filtering mode. You can
specify multiple `samplefilter` arguments in a single gather statement to
filter different variables in different ways.

值为数组类型时，trace 函数会自动为每个单独的

The current types of allowed for `samplefilter` are

数组中的一个条目，该条目是在光线追踪过程中为每个单独的撞击点所合成的

`minimum`

Take the minimum value of all the samples.Note that with tuple values, the
minimum value of each component will be used.

在光线追踪过程中被合成的每个单独的撞击点在数组中添加一个条目。
对于 opacitysample 过滤器（见下文），将在数组中为每一个在光线追踪过程中被合成的单个撞击点创建一个条目。

`maximum`

Take the maximum value of all the samples.Note that with tuple values, the
maximum value of each component will be used.

在数组中为每一个遇到的半透明样本创建一个条目，直到达到完全不透明为止。

`opacity`

Composite samples using the over operation.

达到完全不透明。 当使用数组输出时，使用 allsample 过滤器也可能是有用的。

`closest`

This is the default behavior, returning only the closest surface.

使用 allsample 过滤器也是有用的，这将导致沿射线的所有命中都被插入，而不考虑是否有不透明度。

`screendoor`

Use stochastic compositing of the samples.

都被插入，而不管是否超过了不透明度的限制。

`sum`

Return the sum of the values for all samples.

默认情况下，胡迪尼使用不透明混合法对全局变量进行合成。在某些情况下，从最接近的表面（不管它是否透明）获取数值会更有用。你可以使用 specialsamplefilter 关键字，其字符串值为 closest 或 opacity，以控制全局的值是来自最近的表面还是不透明混合。

`sum_square`

Return the sum of the squares of the values of all samples.

当参数列表中遇到 samplefilter 关键字时，所有后续的导入变量都将使用指定的过滤模式。你可以在一个集合语句中指定多个 amplefilter 参数，以不同方式过滤不同的变量。

```c
sum_reciprocal
```

Return the sum of the reciprocals of each sample.

目前允许的 Samplefilter 的类型有

Note

When using [sample_geometry](sample_geometry.html "Samples geometry in the
scene and returns information from the shaders of surfaces that were
sampled."), the default `samplefilter` is set to `closest` by default, since
opacity blending only works when compositing data along a ray.

取所有样本的最小值。 注意，对于元组值，将使用每个组件的最小值。

    gather(P, dir,    "samplefilter", "opacity",      "Cf", hitCf,      "Of", hitOf,    "samplefilter", "closest",      "P", hitP,      "N", hitN){  trace(pos, dir, time,      // Composite the bsdf of the hit surfaces using stochastic transparency      "samplefilter", "screendoor",      "F", hitF,      // But find the closest sample's position      "samplefilter", "closest",      "P", hitP);}

## Pipeline options

Show/hide arguments

"`pipeline`",`string`

As you specify variables, you can intersperse `pipeline` keyword options to
control where in the pipeline to fill out read/write variables. The value can
be one of `surface`, `atmosphere`, or `displacement`. You can specify the
`pipeline` option multiple times. Each use of the option affects any variables
specified after it (up to the next usage of `pipeline` if any).

取所有样本的最大值。 请注意，对于元组值，将使用每个组件的最大值。

    gather(p, d, "pipeline", "surface", "Cf", surfCf,       "pipeline", "atmosphere" "Cf", fogCf, "P", hitP)
