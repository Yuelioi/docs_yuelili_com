---
title: Basic Host Differences
order: 4
category:
  - AE 插件开发
---
# Basic Host Differences

我们已经尝试在Premiere Pro中为After Effects效果插件提供强大的兼容性。

渲染管线中的一些基本差异导致了差异，我们意识到API的实现可能并不完美。

以下是插件在Premiere Pro中运行时将会遇到的一些差异的概述。

## Time Values

Premiere Pro在PF_InData中使用的时间值略有不同。例如，在CS4中。

在NTSC制式下，time_scale为60000，time_step为1001，field为场序(在After Effects中，对于场渲染，scale为2997，step为50，或者对于逐行渲染，scale为2997，step为100)。

在PAL制式下的渲染，time_scale是50，time_step是1，field给出field的顺序(在After Effects中，对于field渲染，scale是3200，step是64，或者对于progressive渲染，scale是3200，step是128。

产生时间值的是时间相关值的比率，而不是具体的time_scale值。未来Premiere Pro可能会使用不同的时间尺度，所以请不要硬性规定。只是要注意，它不一定使用与After Effects完全相同的值。

## Rendering Frames

Premiere为响应式编辑进行了优化。当在时间线中刷新，并改变效果参数时，Premiere会立即请求一个低质量的渲染，以便立即显示，然后是一个高质量的渲染。因此，效果可能会在同一有效时间内收到两个请求，一个是低分辨率、低比特率的，接着是全分辨率、全比特率的。每次渲染请求的分辨率要考虑到在Source和Program Monitors中设置的Playback和Paused Resolution。第一个请求将以播放分辨率进行，第二个请求将以暂停分辨率进行。

Premiere也会进行推测性渲染，在时间线上提前渲染一组帧，这样如果/当编辑开始播放时，最初的帧就已经准备好了。这意味着，当重新定位时间指针，或者改变效果参数时，Premiere会要求效果在当前时间之前渲染一组帧。如果这些帧之前已经被渲染和缓存了，那么效果就不会看到这些渲染请求，因为缓存的帧会被使用。

在渲染Premier-native像素格式的帧时，Premier将为每个字段发送一次PF_Cmd_RENDER，而不是为每个帧发送。`PF_InData->field`将表示哪个字段正在被渲染，`PF_LayerDef->height`将是帧高度的一半，`PF_LayerDef->rowbytes`将是正常值的两倍。

## Render Order

Premiere Pro的建立是为了尽可能地提供实时播放带有特效的素材。渲染调度要积极得多，多线程渲染是基本要求。这与After Effects完全不同，在After Effects中，用户要建立层层叠叠的效果，更愿意等待RAM预览。

Premiere的多线程渲染也适用于AE效果。当渲染AE效果时，来自Premiere的请求会经过一个关键部分，该部分用于所有的命令，除了那些与任意数据有关的命令。关键部分可以防止两个线程同时调用同一效果的实例。然而，Premiere会创建多个效果的实例，这些实例可以从不同的线程中被同时调用。

因此，一个效果不应该期望按照时间增加的顺序来接收渲染请求。另外，特效不应该依赖于静态的、非恒定的变量。

## Frame Dimensions

源片段和项目/合成之间的差异会得到不同的处理。

例如，在CS4中，在PAL序列中导入NTSC制式的素材时，`PF_InData>width,height`是`(598,480)`，`PF_InData->pixel_aspect_ratio`是`(768,702)`。

在AE中，`width,height`是`(720,480)`，`pixel_aspect_ratio`是`(10,11)`。

## PF_InData

Premiere Pro处理字段渲染的方式与After Effects不同。在字段渲染时，PF_InData>field给出的是当前正在渲染的字段，而忽略了是否设置了PF_OutFlag_PIX_INDEPENDENT标志。

在Premiere Pro中，特效接收[PF_InData&gt;quality](.../effect-basics/PF_InData.html)中显示器窗口的质量设置。这与After Effects不同，这里提供了源层的质量设置。

## Parameter UI

Premiere Pro不尊重[PF_ParamFlag_START_COLLAPSED](.../effect-basics/PF_ParamDef.html)  标志。参数在初始化时总是被折叠起来的，不能通过参数监督自动打开扭曲。

Premiere Pro支持宏`PF_ADD_FLOAT_EXPONENTIAL_SLIDER()`，它可以让你定义一个指数。虽然这个宏是为CC 2015 release 2 SDK新添加的，但Premiere Pro在快速色彩校正器的输入灰度参数中使用这个宏已经有一段时间了。指数的使用是为了使范围从0.10到10，1.0大约在滑块的中间。我们使用的指数是2.5。典型的值是0.01到100。

从CC 2015开始，当时间针被移动并且没有关键帧时，效果将不会被发送`PF_Cmd_UPDATE_PARAMS_UI`或`PF_Event_DRAW`，除非效果设置了`PF_OutFlag_NON_PARAM_VARY`。诸如那些在效果控制面板中绘制直方图的效果将需要注意这一优化。

## Missing Suites

许多由After Effects支持的套装在Premiere Pro主机中没有实现。在一些情况下，即使Premiere Pro中缺少一个套装，也有相应的宏函数可用。下面是几个例子。

| **After Effects suite call** | **Premiere Pro equivalent function** |
| ---|--- |
| `WorldTransformSuite1()->copy()` | `PF_COPY()` |
| `WorldTransformSuite1()->convolve()` | `in_data->utils->convolve()` |
| `FillMatteSuite2()->fill()` | `PF_FILL()` |
| `PF_PixelDataSuite1->get_pixel_data8()` | `PF_GET_PIXEL_DATA8()` |

示例项目通过检查主机应用程序和版本，演示了处理缺失套件的其他方法。Portable示例项目同时演示了主机应用程序和版本检查。

## A Special Suite for AE Effects Running in Premiere Pro

Premiere Pro不支持AEGP调用。然而，在头文件PrSDKAESupport.h中有一些有趣的相似之处。例如，你可以使用该头中的实用程序套件来获得源片段的帧率或场类型，或者获得应用于片段的速度。

请注意，Premiere Pro SDK中的其他套件不能在AE特效中使用。