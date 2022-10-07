---
title: cvex_bsdf
order: 7
category:
  - vex
---

在这一页

- [评估函数](#eval_fn)
- [取样功能](#sample_fn)
- [组件屏蔽隐含参数](#component-mask-implicit-argument)
- [自定义变量参数](#custom-variadic-arguments)
- [Validation](#validation)
- [例子](#例子)

  - [例子：漫反射](#example-diffuse) - [例子：镜面](#example-specular)

`bsdf cvex\_bsdf(string eval\_cvex\_shader, string sampler\_cvex\_shader, ...)`

这个函数让你通过一对`cvex`着色器定义 BSDF 反射函数。一个用来[评估反射函数](cvex_bsdf.html) () (#eval_fn)，另一个用来[采样](cvex_bsdf.html) () (#sample_fn)。

你在前两个参数中以 VEX 源字符串的形式传递着色器。然后你可以使用 variadic 参数来定义任意的数据，当它们被调用时，这些数据将被传递给着色器。

警告

这个界面可能会在未来的胡迪尼版本中发生变化，尽管任何潜在的变化都可能不需要从根本上改变您的着色器结构。

## 评价功能

[¶](#eval_fn)

评价函数必须接受以下参数。

```c
(vector u, vector v, int bounces, int reverse, vector &refl, vector &eval, float &pdf)

```

## Arguments

`u`

Outgoing light direction, from the surface to the viewer.

`v`

Incoming light direction, from the surface to the light.

`bounces`

A mask specifying the type of reflections that should be evaluated.

`reverse`

Whether evaluating from the camera (`0`) or the light source (`1`).

`refl`

The function must overwrite this variable with the reflectivity (albedo) of the BSDF.

This should not be dependent on the `v` vector, since it is used as an average reflectivity over all lighting directions. This is the value that the [albedo](albedo.html) () ("Returns the albedo (percentage of reflected light) for a bsdf given the outgoing light direction.") function will return.

`eval`

The function must overwrite this variable with the evaluated reflectance for the given directions.

Set this to `0` to indicates to mantra whether the BSDF is a delta function. Delta functions reflect light in specific directions or lines, and are handled as a special case in the lighting algorithm to produce less noisy results. The behavior of a delta BSDF is determined by the sampling function (below).

`pdf`

The function must overwrite this variable with the sampling pdf for the given directions. The integral of this value over the sphere should be equal to `luminance(refl)*2*PI`. For perfect importance sampling, `pdf == luminance(eval)`.

## Sampling Function

[¶](#sample_fn)

The sampling function is responsible for selecting a random reflection direction that is importance sampled from the distribution defined by the evaluation function (above).

The sampling function must accept the following arguments:

```c
(vector u, float sx, float sy, int bounces, vector &refl, vector &v, int &bouncetype, float &pdf)

```

If the evaluation function is a delta function (indicated by the evaluation function setting `eval` to `0`), you are free to choose the sampling directions in any way you want. Otherwise, you should choose directions from a distribution that either matches the evaluation function or is close to it. The `sx` and `sy` inputs are available to help produce high quality sample distributions. These values are initialized directly from mantra’s pixel sampling patterns.

## Arguments

`u`

Outgoing light direction, from the surface to the viewer.

`sx`

Uniform random value between 0 and 1, correlated with sy in a 2D sampling pattern.

`sy`

Uniform random value between 0 and 1, correlated with sx in a 2D sampling pattern.

`bounces`

A mask specifying the type of reflections that should be evaluated.

`refl`

The reflectivity (albedo) of the BSDF, tinted by the color of the light in the sampled direction. The luminance of this value should match `refl` from the evaluation function. If the sampling distribution does not match the evaluation function exactly, this value should be scaled by the ratio of the evaluation distribution to the sampling distribution.

`v`

Sampled light direction, from the surface to the light.

`bouncetype`

The specific component type selected by sampling.

`pdf`

The sampling pdf. The integral of this value over the sphere should be a constant `2*PI`. Note that this differs from the `pdf` produced by the evaluation function by a factor of `luminance(refl)`.

Since Houdini 13, it is not necessary for the sampling function to directly sample from the evaluation function’s distribution. To use a different sampling function, adjust the `pdf` outputs from both the evaluation and sampling shaders so that they reflect the distribution being sampled.

## Component mask implicit argument

[¶](#component-mask-implicit-argument)

If you add an `int mybounces` output argument to your evaluation or sample shader, it will be filled in with the component mask for the BSDF. You can check this against an extra `"label"` variadic argument passed to the `cvex_bsdf()` function to see if it should apply. This allows you to use the same CVEX shader source code for different component types.

See [bouncemask](bouncemask.html) for information on component label bitmasks.

## Custom variadic arguments

[¶](#custom-variadic-arguments)

Any extra `"key", value` pairs passed to the `cvex_bsdf()` after the shader strings define custom arguments that will be passed to the shaders when they are invoked.

```c
F = cvex\_bsdf("...", "...", "label", "diffuse", "N", N);

```

In particular, you should provide a “label” keyword argument to specify the type of component for the new BSDF (for example, `"diffuse"` or `"reflect"`). You can specify multiple labels in a space-separated list (for example, `"label", "reflect refract"`).

## Validation

[¶](#validation)

There are 2 main approaches available to verify whether you have implemented the `cvex_bsdf` evaluation and sampling functions correctly.

- You can use mantra’s multiple importance sampling algorithm to
  ensure that renders match in brightness apart from noise for different
  sampling techniques. To do this, create an environment light (with a
  map assigned) and render with different values of the **MIS Bias**
  parameter. You will need to add the **MIS Bias** parameter from the
  rendering properties dialog, since it is not available on the light by
  default. A value of -1 means to sample only from the BSDF while a value
  of 1 means to sample only from light source. To verify the `refl` value
  in the sampling function, set the environment light rendering mode to
  **Ray Tracing Background**. If the rendered results are the same
  (apart from noise) with values of -1, 0, 1, and for ray tracing
  background, your shader is bias-free.
- Second, the [Verify BSDF](../../nodes/obj/verifybsdf.html) object can be used to
  verify that the albedo, pdf, and sampling function all align correctly
  and that they integrate to the correct values. This approach uses
  point-based random sampling in SOPs and additionally will show the
  shape of the BSDF visually as a polar point cloud.

## Examples



## Example: Diffuse

[¶](#example-diffuse)

Creation:

```c
F = cvex\_bsdf("diffuse\_eval", "diffuse\_sample", "label", "diffuse", "N", N);

```

Evaluation shader:

```c
#include "pbr.h"

cvex diffuse\_eval(
 vector u = 0;
 vector v = 0;
 int bounces = 0;
 int reverse = 0;
 export vector refl = 0;
 export vector eval = 0;
 export float pdf = 0;

 int mybounces = 0;
 vector N = 0)
{
 if (bounces & mybounces)
 {
 // If evaluating reversed, the incoming light direction is needed for
 // evaluation rather than the outgoing direction. The select statement
 // swaps based on the value of the "reverse" toggle.
 vector vvec = select(reverse, u, v);
 pdf = max(dot(vvec, normalize(N)), 0);
 eval = pdf;
 refl = 0.5;
 }
}

```

Sample shader:

```c
#include "math.h"
#include "pbr.h"

cvex diffuse\_sample(
 vector u = 0;
 float sx = 0;
 float sy = 0;
 int bounces = 0;

 export vector refl = 0;
 export vector v = 0;
 export int bouncetype = 0;
 export float pdf = 0;

 int mybounces = 0;
 vector N = 0)
{
 if (bounces & mybounces)
 {
 vector nml = normalize(N);

 v = set(cos(sx\*PI\*2), sin(sx\*PI\*2), 0);
 v \*= sqrt(sy);
 v.z = sqrt(1-sy);

 pdf = 2\*v.z;

 // Transform v into the reference frame for nml
 vector framex = normalize(cross(nml, u));
 vector framey = cross(nml, framex);

 v = framex \* v.x + framey \* v.y + nml\*v.z;

 bouncetype = mybounces;
 refl = 0.5; // Luminance needs to match albedo
 }
}

```

## Example: Specular

[¶](#example-specular)

Creation:

```c
F = cvex\_bsdf("specular\_eval", "specular\_sample", "label", "reflect", "dir", reflect(I, N));

```

Evaluation shader:

```c
#include "pbr.h"

cvex specular\_eval(
 vector u = 0;
 vector v = 0;
 int bounces = 0;
 int reverse = 1;
 export vector refl = 0;
 export vector eval = 0; // Delta bsdf

 int mybounces = 0;
 vector dir = 0)
{
 if (bounces & mybounces)
 refl = 1;
}

```

Sample shader:

```c
#include "math.h"
#include "pbr.h"

cvex specular\_sample(
 vector u = 0;
 float sx = 0;
 float sy = 0;
 int bounces = 0;

 export vector refl = 0;
 export vector v = 0;
 export int bouncetype = 0;
 export float pdf = 0;

 int mybounces = 0;
 vector dir = 0)
{
 if (bounces & mybounces)
 {
 pdf = 1e6F;
 v = dir;
 bouncetype = mybounces;
 refl = 1; // Needs to match albedo
 }
}

```

## See also

- [diffuse](diffuse.html)
- [specular](specular.html)
- [Writing a PBR shader](../pbr.html)
- [Verify BSDF](../../nodes/sop/verify_bsdf.html)

### bsdf

[albedo](albedo.html)

[ashikhmin](ashikhmin.html)

[blinn](blinn.html)

[bouncelabel](bouncelabel.html)

[bouncemask](bouncemask.html)

[chiang](chiang.html)

[cone](cone.html)

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[cvex_bsdf](cvex_bsdf.html)

[diffuse](diffuse.html)

[eval_bsdf](eval_bsdf.html)

[getbounces](getbounces.html)

[getcomponents](getcomponents.html)

[ggx](ggx.html)

[hair](hair.html)

[henyeygreenstein](henyeygreenstein.html)

[isotropic](isotropic.html)

[mask_bsdf](mask_bsdf.html)

[nbouncetypes](nbouncetypes.html)

[normal_bsdf](normal_bsdf.html)

[phong](phong.html)

[phonglobe](phonglobe.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[solid_angle](solid_angle.html)

[specular](specular.html)

[split_bsdf](split_bsdf.html)

[sssapprox](sssapprox.html)

[translucent](translucent.html)

|
experimental

[cvex_bsdf](cvex_bsdf.html)

[writepixel](writepixel.html)

|
shading

[Du](Du.html)

[Dv](Dv.html)

[Dw](Dw.html)

[area](area.html)

[ashikhmin](ashikhmin.html)

[atten](atten.html)

[blinn](blinn.html)

[blinnBRDF](blinnBRDF.html)

[chiang](chiang.html)

[computenormal](computenormal.html)

[cone](cone.html)

[cvex_bsdf](cvex_bsdf.html)

[diffuse](diffuse.html)

[diffuseBRDF](diffuseBRDF.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[filterstep](filterstep.html)

[fresnel](fresnel.html)

[frontface](frontface.html)

[getderiv](getderiv.html)

[getfogname](getfogname.html)

[getglobalraylevel](getglobalraylevel.html)

[getgroupid](getgroupid.html)

[getlocalcurvature](getlocalcurvature.html)

[getmaterialid](getmaterialid.html)

[getobjectid](getobjectid.html)

[getobjectname](getobjectname.html)

[getprimid](getprimid.html)

[getptextureid](getptextureid.html)

[getraylevel](getraylevel.html)

[getrayweight](getrayweight.html)

[getsamplestore](getsamplestore.html)

[getsmoothP](getsmoothP.html)

[getuvtangents](getuvtangents.html)

[ggx](ggx.html)

[gradient](gradient.html)

[hair](hair.html)

[henyeygreenstein](henyeygreenstein.html)

[isotropic](isotropic.html)

[israytracing](israytracing.html)

[isshadingRHS](isshadingRHS.html)

[lightstate](lightstate.html)

[matchvex_blinn](matchvex_blinn.html)

[matchvex_specular](matchvex_specular.html)

[objectstate](objectstate.html)

[phong](phong.html)

[phongBRDF](phongBRDF.html)

[phonglobe](phonglobe.html)

[ptexture](ptexture.html)

[rayhittest](rayhittest.html)

[rayimport](rayimport.html)

[reflect](reflect.html)

[refract](refract.html)

[renderstate](renderstate.html)

[resolvemissedray](resolvemissedray.html)

[sample_geometry](sample_geometry.html)

[scatter](scatter.html)

[setsamplestore](setsamplestore.html)

[specular](specular.html)

[specularBRDF](specularBRDF.html)

[sssapprox](sssapprox.html)

[teximport](teximport.html)

[texture](texture.html)

[trace](trace.html)

[translucent](translucent.html)

[uvunwrap](uvunwrap.html)

[volume](volume.html)

[wireblinn](wireblinn.html)

[wirediffuse](wirediffuse.html)
