---
title: PF_EffectWorld   PF_LayerDef
order: 9
category:
  - AE 插件开发
---
# PF_EffectWorld / PF_LayerDef

After Effects使用PF_EffectWorlds表示图像，也叫PF_LayerDefs。

## PF_EffectWorld Structure

| **Item**    | **Description**                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `world_flags `  | Currently, the only flags are:><br />*PF_WorldFlag_DEEP `- set if the world is 16-bpc`<br />`* PF_WorldFlag_WRITEABLE ` - indicates that you are allowed to alter the image data of the world.<br />Normally effects cannot alter input image data; only output.                                                                                          |
| `width `        | Width and height of the pixel buffer.                                                                                                                                                                                                                                                                                                                         |
| `extent_hint `  | The smallest rectangle encompassing all opaque (non-zero alpha) pixels in the layer. This defines the area which needs to be output.<br />If your plug-in varies with extent (like a diffusion dither), ignore this and render the full frame each time.                                                                                                      |
| `platform_ref ` | No longer used in CS5.<br />Platform-specific reference information. On Windows, this contains an opaque value. On macOS,PF_GET_PLATFORM_REFS `provides a CGrafPtr` and a GDeviceHandle `from a PF_EffectWorld`.<br />NOTE: You cannot acquire a platform_ref` during *PF_Cmd_GLOBAL_SETUP* , as there isn’t any output context yet. Patience, my pet. |
| `dephault `     | For layer parameters only.Either PF_LayerDefault_MYSELF ` or PF_LayerDefault_NONE`.                                                                                                                                                                                                                                                                         |

## New In 16.0

在PF_Cmd_SMART_RENDER_GPU期间，PF_LayerDef的填写与普通的CPU渲染相同，但PF_LayerDef.data将为空；所有其他字段都是有效的。

## Rowbytes In PF_EffectWorlds

不要以为你可以用`(width * sizeof(current_pixel_type))+4`的方式到达`PF_EffectWorld`的下一个扫描线。+ 4"，或者其他什么；用PF_EffectWorld的 "rowbytes "代替。

不要在PF_EffectWorld的指定区域外写，这可能会破坏不属于你的缓存图像缓冲区。

为了测试你的效果是否遵守了`PF_EffectWorld>rowbytes`，在你的效果之后应用Grow Bounds效果。

输出的缓冲区将比输入的行字节更大(尽管它仍然有相同的逻辑大小)。

## Byte Alignment

`PF_EffectWorld`中的像素不保证是16字节对齐的。一个效果可以得到一个更大的PF_EffectWorld的子区域。苹果公司的像素处理优化示例代码的用户，你已经被警告了。

除了每通道8位的颜色外，After Effects还支持每通道16位和32位的浮点颜色。

Effects永远不会收到比特深度不同的输入和输出世界，也不会收到比特深度高于其声称能够处理的世界。

## Accessor Macros For Opaque (Data Type) Pixels

使用下面的宏来访问(不透明的)PF_PixelPtrs中的数据。

强调的是，将一种类型的指针简单地投到另一种类型的指针中是不安全的！要想让它正常工作，就必须对其进行修改。要使它正常工作，就必须进行转换，而且没有任何东西可以阻止你错误地转换它。我们可能会在以后改变它的实现(到那时你会感谢我们强制执行这个抽象级别)。

## PF_PixelPtr Accessor Macros

### PF_GET_PIXEL_DATA16


在指定的世界中获得一个指向16-bpc像素的指针。

如果世界不是16-bpc，返回的像素指针将是NULL。

第二个参数是可选的；如果它不是NULL，返回的像素将是对传入的像素值的解释，就像它在指定的PF_EffectWorld中一样。

```cpp
PF_GET_PIXEL_DATA16(
PF_EffectWorldwP,
PF_PixelPtrpP0,
PF_Pixel16*outPP);
```

### PF_GET_PIXEL_DATA8


获得一个指向指定世界中的8-bpc像素的指针。

如果世界不是8-bpc，返回的像素指针将是NULL。

第二个参数是可选的；如果它不是NULL，返回的像素将是对传入的像素值的解释，就像它在指定的PF_EffectWorld中一样。

```cpp
PF_GET_PIXEL_DATA8(
PF_EffectWorldwP,
PF_PixelPtrpP0,
PF_Pixel8*outPP);
```


---



把`PF_GET_PIXEL_DATA16`和`PF_GET_PIXEL_DATA8`看作是安全的(嗯)铸造程序。

需要的代码实际上非常简单，从PF_EffectWorld的输出中得到一个`PF_Pixel16*`。

```cpp
{
 PF_Pixel16 *deep_pixelP = NULL;
 PF_Err err = PF_Err_NONE;
 err = PF_GET_PIXEL_DATA16(output, NULL, &deep_pixelP);
}

```

如果世界上没有深层像素，这将返回deep_pixelP为NULL。

第二个参数并不常用，应该作为NULL传递；传递一个PF*PixelPtr，它是包含在一个PF_EffectWorld中的，以胁迫它到该PF_EffectWorld的深度)。