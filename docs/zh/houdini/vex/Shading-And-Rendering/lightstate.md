---
title: lightstate
order: 49
category:
  - houdini
---
    
## 描述

Queries the renderer for a named property.

On this page |

- Useful properties

有用的属性

- Packed Primitives

打包的基元

- Examples

---|---  
Context(s) | [shading](../contexts/shading.html)

```c
int  lightstate(string query, <type>&value)
```

```c
int  lightstate(string query, <type>&value[])
```

Returns a non-zero value and sets value on success, or returns `0`if the
renderer cannot evaluate the query.

返回一个非零值，并在成功时设置值，如果渲染器无法评估该查询，则返回 0。

See the [list of IFD properties](../../props/mantra.html) you can query.
Usethe **IFD** name (e.g. `image:samples`),not the Houdini name (e.g.
`vm_samples`).

参见你可以查询的 IFD 属性列表。使用

## Useful properties

The following properties are commonly useful and are reproduced herefor
convenience, but you can query any property from the[the full list of IFD
properties](../../props/mantra.html).

的 IFD 名称（例如：image:samples）。

`image:name`

(string) The name of the image being rendered.

而不是胡迪尼的名字（例如：vm_samples）。

```c
image:pixelaspect
```

(float) The pixel aspect ratio (X/Y) of the image.

以下属性通常是有用的，为了方便起见，我们在此复制了这些属性。

```c
image:resolution
```

(vector) Gives the resolution as {x_res, y_res, samples_per_pixel}.

但您可以从 IFD 属性的完整列表中查询任何属性。

`image:samples`

(vector) Gives samples as {x_samples, y_samples, 0}.

(string) 被渲染的图像的名称。

```c
image:raysamples
```

(vector) Gives the raytracing samples as {x_samples, y_samples, 0}.

(float) 图像的像素长宽比（X/Y）。

`light:name`

(string) The name of the light object which is currently active in the
[illuminance](illuminance.html "Loops through all light sources in the scene,
calling the light shader for each light source to set the Cl and L global
variables.") loop.

(vector) 以{x_res,y_res,samples_per_pixel}的形式给出分辨率。

```c
light:shadowscope
```

(string) The list of objects casting shadows from a light.

(vector)给出{x_samples,y_samples, 0}的样本。

`object:name`

(string) The name of the object being shaded. This is valid within light and
shadow shaders and can be used to query which object is being lit (or
shadowed) by the light source.

(vector)给出{x_samples,y_samples, 0}的光线追踪样本。

```c
object:reflectscope
```

(string) The default reflection scope pattern for the object being shaded.

(string)当前在 illuminanceloop 中活动的光照对象的名称。

```c
object:refractscope
```

(string) The default refraction scope pattern for the object being shaded.

(string)从灯光中投射阴影的物体列表。

```c
object:reflectlimit
```

(float or int) The hard limit for maximum refraction bounces for the object
being shaded.

(string)被遮挡的物体的名称。这在光影着色器中有效，可以用来查询哪个物体被光源照亮（或阴影）。

```c
object:shadingquality
```

(float) The shading quality for the object being shaded.

(string) 被着色对象的默认反射范围模式。

```c
object:lightmask
```

(string) The object‘slight mask string.

(string) 被遮蔽物体的默认折射范围模式。

`object:area`

(float) The object‘ssurface area.

(float or int) 被遮蔽物体的最大折射反弹的硬性限制。

```c
object:materialname
```

(string) Path to the material that‘sassigned to the object being shaded.
NOTE

(float)被遮蔽物体的遮蔽质量。

This is for informational purpose only and has no effect on material
assignment or appearance.

这仅用于提供信息，对材质分配或外观没有影响。

`renderer:name`

(string) The name of the renderer.

(string) 渲染器的名称。

```c
renderer:version
```

As a string, gives the renderer version as “major.minor.build”As a vector,
gives the renderer version as {major, minor, build}.

如果是字符串，则表示渲染器的版本为 "major.minor.build"。

```c
renderer:renderengine
```

(string) The render method in use, such as `micropoly` or `raytrace`. See the
[properties list](../../props/mantra.html) for the full list of possible
values.

作为一个向量，渲染器的版本为{major,minor,build}。

`shader:name`

(string) The name of the current shader being run.

(string) 使用的渲染方法，例如微聚或追踪。

## Packed Primitives

When mantra renders packed primitives, the geometry gets unpacked before
rendering.This means primitive attributes on the packed primitive aren‘t
available to shaders (since they aren‘t passed down to the unpacked
geometry).

参见 properties 列表中的全部可能值。

Before unpacking, mantra will automatically convert the primitive attributes
to custom object properties (see `ray_declare` on the [IFD file
format](../../render/ifd.html) page).The property will be named

```c
packed:ATTRIBNAME
```

(where `ATTRIBNAME` is the name of the attribute).The
`lightstate()` function can be used to access these properties, just like any
other object property.

(string) 当前正在运行的着色器的名称。

For example:

当 mantra 渲染包装好的基元时，几何体在渲染前会被解包。 这意味着打包的基元上的基元属性对着色器来说是不可用的（因为它们不会被传递到未打包的几何体中）。

    vector Cd;if (!lightstate("packed:Cd", Cd))  Cd = 1;  // There was no Cd attribute on packed geometry

## Examples

    surface showversion() {  string  rname, rversion;  if (!lightstate("renderer:name", rname))    rname = "Unknown renderer";  if (!lightstate("renderer:version", rversion))    rversion = "Unknown version";  printf("Image rendered by %s (%s)\n", rname, rversion);}vector mapToScreen(vector NDC_P){  // Given a point in NDC space, find out which pixel it  // maps to.  vector  result;  if (!lightstate("image:resolution", result))    result = {640, 486, 0};  return result * NDC_P;}
