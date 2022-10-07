---
title: pathtrace
order: 57
category:
  - vex
---

[shading](../contexts/shading.html)

`vector pathtrace(vector P, vector N, ...)`

上下文`pathtrace`的工作方式与[irradiance](irradiance.html)类似（"计算法线 N 下 P 点的辐照度（全局照度）"），但使用基于物理的渲染（PBR）引擎来做二次弹跳。

`pathtrace`提供了一个简单的（也不是很灵活）方法，从微多角形渲染中调用 PBR 渲染引擎。它使用路径追踪和`F`（BSDF）输出，而不是`Cf`/`Of`在打击着色器上。最大的路径深度由 [mantra 输出驱动](https://www.sidefx.com/docs/houdini/nodes/out/ifd.html)（"使用 Houdini 的标准 mantra 渲染器渲染场景并生成 IFD 文件"）的 PBR 标签上的 "漫反射反弹 "参数控制。

辐照度缓存的工作方式与[occlusion](occlusion.html)（"计算环境遮挡"）的工作方式相同。

## 雷的选择

[¶](#ray-options)

:::tip

当你指定一个纹理时，比如用`"环境"`关键字，你也可以使用图像过滤关键字参数。参见[environment](environment.html) () ("返回环境纹理的颜色。") 以了解图像过滤关键字参数的清单。

## Arguments

`string`

"`scope'", 一个可以被射线击中的物体的列表。当指定时，"scope "覆盖了为给定的 "raystyle "选择的默认范围。`"scope:default"`值将导致`scope`参数使用当前上下文的默认范围 - 就像没有指定该参数一样。

允许覆盖[scope](../contexts/shading_contexts.html) ()(#scope)的射线断面。一个特殊的范围参数，`scope:self`，将匹配当前的着色对象。

`material`

"`currentobject`", 用于指定当前的着色对象是什么。例如，当与范围参数一起使用时，`scope:self`将与该参数传入的对象相匹配。

`float`
`=-1`

"`maxdist'", 搜索物体的最大距离。这可以用来限制对物体的搜索只限于附近的物体。如果给定的`maxdist'是负数，那么它将像没有最大距离一样行事。

允许覆盖射线在测试交叉点时可以移动的最大距离。一些函数（比如[fastshadow](fastshadow.html) ("从位置P沿着方向D指定的方向发送一条射线。")）隐含地定义了最大距离（通过射线的长度），可能应该避免使用这个选项。然而，在计算反射、全局照明、折射等时，这个选项可以有效使用。

`string`

"`variancevar`", VEX 导出变量的名称，用于方差抗锯齿。渲染器将该值与微多边形渲染中相邻的微多边形进行比较，以决定哪些着色点需要额外的样本（使用`vm_variance` [property](.../.../props/index.html)（"属性让你设置灵活而强大的渲染、着色、照明和相机参数的层次结构。"）作为阈值）。如果需要更多的样本，算法会在指定的最大射线样本范围内取样。

这个变量必须从撞击面导入，所以它必须在导入的名称列表中（见下文 "从射线导入信息"）。如果命名的变量没有被导入，这个选项将被忽略。

差异抗锯齿将更多的样本放在图像的高差异区域，例如尖锐的阴影边缘。它只在`vm_dorayvariance`被启用时使用。否则，只有最小射线样本（或明确提供的 "样本 "值）被用于采集循环的抗锯齿。

覆盖全局差异控制（mantra 的-v 选项），该控制用于确定光线追踪的抗锯齿质量。更多信息请参考 mantra 的文档。

`float`
`=0`

"`angle`", 分布角度（用弧度指定）。对于 gather()，射线将被分布在这个角度上。对于 trace()，该角度用于指示滤波宽度应随着交叉点距离的增加而增加的速度。较大的角度会导致较远的撞击面使用较大的导数，从而提高纹理和位移性能。

为了有效，还应该指定样本参数。

`int|float`
`=1`

"`samples'", 应该发送多少个样本来过滤射线。对于辐照度和闭塞函数，指定一个样本参数将覆盖默认的辐照度采样。

`string`

"`environment`", 如果发送到场景的射线错过了一切，那么就可以指定一个环境图来评估。

使用射线的方向，指定的环境贴图将被评估，结果的颜色将被返回。最有可能的是，有必要为环境图的评估指定一个变换空间。

在 refractlight 和 trace 的情况下，Of 和 Af 变量将被设置为 0，不管指定的背景颜色如何。

当指定一个环境贴图时，也支持 texture()的过滤选项。

参见[如何创建环境/反射图](././render/envmaps.html)。

`string`

"`envobject'", 如果使用了环境贴图，那么环境贴图的方向可以通过将射线转换为场景中另一个物体、光或雾物体的空间来指定。在 Houdini 中，可以使用空对象来指定方向。比如说。

```c
Cf = R\*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null\_object\_name");

```

"`envlight`",
`string`

If an environment map is used, the orientation of the
environment map can be specified by transforming the ray
into the space of a light in the scene.

"`envtint`",
`vector`

If an environment map is used, tint it with this color.

"`background`",
`vector`

If a ray misses all objects, use this as the
background color of the scene. In the case of refractlight and
trace the Of and Af variables will be set to 0 regardless of the
background color specified.

"`distribution`",
`string`

**Functions**: [irradiance](irradiance.html) () ("Computes irradiance (global illumination) at the point P with the normal N."), [occlusion](occlusion.html) () ("Computes ambient occlusion.")

Distribution for computing irradiance. The default is to use
a cosine distribution (diffuse illumination). The possible
values for the style are `"nonweighted"` for uniform sampling
or `"cosine"` for cosine weighted sampling.

## See also

- [occlusion](occlusion.html)
- [irradiance](irradiance.html)
