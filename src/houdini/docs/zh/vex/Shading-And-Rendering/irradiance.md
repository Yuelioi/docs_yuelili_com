---
title: irradiance
order: 41
category:
  - vex
---

在这一页

- [适应选项样本](#sample-adaptation-options)
- [Ray options](#ray-options)

|

[shading](../contexts/shading.html)

`vector irradiance(vector P, vector N, ...)`

内涵(s) 计算法线为 N 的点 P 的辐照度（全局光照度）。

## 适应方案样本

[¶](#sample-adaptation-options)

## Arguments

"`适应性'"。

`1`或`0`。开启自动优化，当采样点上方的遮挡变化很小时，将减少采样的数量。这可以在牺牲一些可能的闪烁或额外噪音的情况下提高性能。

## Arguments

`float`
`=0.001`

"`bias'"，光线追踪的偏差。提供对自我交叉的控制。

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

允许覆盖射线在测试交叉点时可以移动的最大距离。一些函数（比如[fastshadow](fastshadow.html) ("从位置P沿着方向D指定的方向发送一条射线。")）隐含地定义了最大距离（通过射线的长度），可能应该避免使用这个选项。然而，在计算反射、全局光照、折射等时，这个选项可以有效地使用。

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
- [pathtrace](pathtrace.html)
- [reflectlight](reflectlight.html)
- [gather](gather.html)
- [trace](trace.html)
- [irradiance](irradiance.html)

|
light

[ambient](ambient.html)

[atten](atten.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[getlight](getlight.html)

[getlightid](getlightid.html)

[getlightname](getlightname.html)

[getlights](getlights.html)

[getlightscope](getlightscope.html)

[getmaterial](getmaterial.html)

[getphotonlight](getphotonlight.html)

[getscope](getscope.html)

[haslight](haslight.html)

[interpolate](interpolate.html)

[intersect_lights](intersect_lights.html)

[irradiance](irradiance.html)

[lightbounces](lightbounces.html)

[lightid](lightid.html)

[occlusion](occlusion.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[setcurrentlight](setcurrentlight.html)

[shadow_light](shadow_light.html)

[storelightexport](storelightexport.html)

|
surface

[ambient](ambient.html)

[irradiance](irradiance.html)

[isfogray](isfogray.html)

[islpeactive](islpeactive.html)

[isshadowray](isshadowray.html)

[isuvrendering](isuvrendering.html)

[limport](limport.html)

[occlusion](occlusion.html)

[reflectlight](reflectlight.html)

[refractlight](refractlight.html)

[shadow](shadow.html)

[shimport](shimport.html)
