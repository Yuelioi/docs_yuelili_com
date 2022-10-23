---
title: SmartFX
order: 2
category:
  - AE 插件开发
---

# SmartFX

SmartFX API 在特效和 After Effects 之间提供了双向通信，实现了许多性能优化，并提供了以前无法获得的依赖信息。这种效果 API 的扩展是在 After Effects 中实现每通道 32 位支持的方式。

普通的效果插件被赋予一个全尺寸的输入缓冲区，并要求渲染一个全尺寸的输出缓冲区。虽然输出[extent_hint](../effect-basics/PF_InData.html) 指定了必须实际填充的输出缓冲区的部分，但如果效果不需要其整个输入，这种方案仍然是非常低效。另外，许多效果并不使用范围提示。

## The Way Things Were

考虑一下应用于一个巨大的图层的模糊效果，这个图层大部分在屏幕之外，或者通过一个小的兴趣区域观看，或者被屏蔽到一个小的尺寸。只有一小部分的输出需要被渲染，用输出的 extent_hint 来表示效果。也只需要对输入的一小部分进行模糊处理--输出的 extent_hint 通过模糊半径扩大。然而，使用传统的特效 API，After Effects 没有办法知道这一点，所以整个图层都被传递给插件。这些额外的像素计算起来非常昂贵和浪费，特别是在先前的效果或嵌套合成的情况下。

## The Way Things Are Now

SmartFX 通过颠倒调用顺序解决了这个问题。效果被告知它需要多少输出，它必须明确地向主机请求它所需要的输入。渲染过程被分成两部分：预渲染和渲染。

在预渲染过程中，效果描述了它所需要的输入像素数据；这个必要的输入可以根据你喜欢的任何东西(非输入层参数、非层参数、来自 in_data 的信息、序列数据中的设置...)而变化。效果还必须返回结果输出的范围，如果在请求的图层部分有空的像素，这个范围可能小于请求的大小。

在渲染阶段，效果只能检索它之前请求的像素。这种双通道方法有利于许多重要的优化。例如，一个将一个输入与另一个输入相乘或消光的效果可能会发现，它的第一个输入根本就不需要。

如果遮罩不与它相交，那么它的第一个输入就根本不需要了。还有一些重要的优化是由 After Effects 内部进行的，以确保尽可能少地复制图像缓冲区，而这些优化只有在主机知道缓冲区的大小和所有输入和输出的情况下才可能。

与 AEGPs 一样，SmartFX 插件永远不会被 After Effects 卸载。

## Content Bounds

节点的内容边界是调用 PreRender 所能返回的最大可能的结果矩形。它绝对不能根据当前的渲染请求或其他情况而变化。它应该被仔细计算，而不是松散地计算。

这个计算是非常重要的。它是节点(和它的输入)的内在属性，一旦图被建立，它就被固定了。违反它可以而且可能会在各种代码中造成各种问题。

## How To Smartify

设置了 "PF_OutFlag2_SUPPORTS_SMART_RENDER" ( 参见[PF_OutFlags](../effect-basics/PF_OutData.html) 的效果将收到 SmartFX 的调用 "PF_Cmd_SMART_PRE_RENDER "和 "PF_Cmd_SMART_RENDER" ( 参见[Frame Selectors](. ./effect-basics/command-selectors.html)(#effect-basics-command-selectors-frame-selectors))，而不是以前的`PF_Cmd_FRAME_SETUP`/`PF_Cmd_RENDER`/`PF_Cmd_FRAME_SETDOWN`序列。为了保持与非智能主机的兼容性，你可能也想继续支持旧的命令。

## PF_Cmd_SMART_PRE_RENDER

After Effects 要求从效果中输出。效果通过使用回调函数和操作额外参数中的结构，告诉 After Effects 它需要什么输入来产生该输出。效果不能访问它在*PF_Cmd_SMART_PRE_RENDER*期间没有检查出来的任何图层输入的像素。因此，一个效果可能需要的所有图层输入都必须事先用 checkout*layer 检查出来。如果一个效果可能需要某些层的输入，它们必须现在被检出，即使后来在渲染过程中效果可能决定不需要这个层。另外，由于在PF_Cmd_SMART_PRE_RENDER*或`PF_Cmd_SMART_RENDER`过程中，没有参数阵列传递给 SmartFX，任何需要的非层参数必须使用`PF_CHECKOUT_PARAM`来获取 ( 参见[Interaction Callbacks](../effect-details/interaction-callback-functions.html)

## PF_PreRenderExtra

### PF_PreRenderInput

描述了 After Effects 需要渲染的内容(在 PF_RenderRequest`中)，以及要求的比特深度(在命名恰当的 bitdepth 成员中)。

```
typedefstruct{
PF_LRectrect;
PF_Fieldfield;
PF_ChannelMaskchannel_mask。
PF_Booleanpreserve_rgb_of_zero_alpha;
charunused[3];
longreserved[4];
}PF_RenderRequest;
```

rect`是层坐标，字段也是相对于层原点的；活动字段是落在输出缓冲区的偶数还是奇数扫描线上，取决于输出缓冲区的原点。

channel_mask`指定效果应该为哪些通道提供输出。

写入其他通道的数据将不被接受。

它将是以下的一个或多个，或一起。

> - PF_ChannelMask_ALPHA'。
> - PF_ChannelMask_RED'。
> - PF_ChannelMask_GREEN'。
> - PF_ChannelMask_BLUE'。
> - PF_ChannelMask_ARGB`。

如果 preserve_rgb_of_zero_alpha`像素为TRUE`，效果必须将透明像素的颜色内容传播到输出。

这与[PF_OutFlag2_REVEALS_ZERO_ALPHA](../effect-basics/PF_OutData.html)有关，但与之不同，后者告诉 After Effects，效果可以将这些像素的 alpha 设置为非零值，将它们恢复为可见。

### PF_PreRenderOutput

由特效填入，告诉 After Effects 根据输入的数据计划生成什么输出。

```
typedefstruct{
PF_LRectresult_rect;
PF_LRectmax_result_rect;
PF_Booleansolid;
PF_Booleanreserved。
PF_RenderOutputFlagsflags。
空白*pre_render_data。
PF_DeletePreRenderDataFuncfunc;
}PF_PreRenderOutput;
```

pre_render_data`将在[PF_Cmd_SMART_RENDER](../effect-basics/command-selectors.html)时被传回给效果。

目前，唯一的 PF_RenderOutputFlags`是PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS`。

### PF_PreRenderCallbacks

目前，只有一个回调 - checkout_layer`。checkout_idL 由效果选择。

它必须是正数和唯一的。After Effects 会填充 PF_CheckoutResult`。

```
PF_Errcheckout_layer(
PF_ProgPtreffect_ref,
PF_ParamIndexindex,
A_longcheckout_idL。
constPF_RenderRequest*req,
A_longwhat_time,
A_longtime_step。
A_u_longtime_scale。
PF_CheckoutResult*result)。

typedefstruct{
PF_LRectresult_rect;
PF_LRectmax_result_rect;
PF_RationalScalepar;
longsolid;
PF_BooleanreservedB[3];
A_longref_width;
A_longref_height。
}PF_CheckoutResult;
```

result_rect`可以是空的。max_result_rect`是最大的输出可能，如果主机要求所有的输出。如果 solid 为 TRUE，整个 result_rect 有不透明的 alpha。

ref_width`和ref_height`是该层的原始尺寸，在应用任何效果之前，不考虑任何降样因素。这将是折叠层的组成尺寸。

There is a bug in 11.0 with the Global Performance Cache, when a SmartFX effect uses both [PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT](../effect-basics/PF_OutData.html) & [PF_OutFlag_NON_PARAM_VARY](../effect-basics/PF_OutData.html).

Calling checkout_layer during PF_Cmd_SMART_PRE_RENDER` returns empty rects in PF_CheckoutResult`.

The workaround is to simply make the call again. This workaround is no longer needed in 11.0.1.

### result_rect

The output (in layer coordinates) resulting from the render request (can be empty).

This cannot be bigger than the input request rectangle (unless PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS` is set), but can be smaller.

### max_result_rect

The maximum size the output could possibly be, if After Effects requested all of it.

This must not vary depending on requested output size.

### solid

Set this TRUE if every pixel in the output will be fully opaque. Set if possible; it enables certain optimizations.

### reserved

Ignore.

### flags

Currently, the only flag is PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS`, which tells After Effects that the smart effect will return more pixels than After Effects requested.

### pre_render_data

Point this at any data that the effect would like to access during rendering.

Effects can also allocate handles and store them in out_data>frame_data`, as with regular (non-smart) effects.

Since [PF_Cmd_SMART_PRE_RENDER](../effect-basics/command-selectors.html) can be called with no corresponding [PF_Cmd_SMART_RENDER](../effect-basics/command-selectors.html), effects must never delete this data themselves;

once the effect returns from [PF_Cmd_SMART_PRE_RENDER](../effect-basics/command-selectors.html), After Effects owns this data and will dispose of it (using either the following function or a standard free call).

### delete_pre_render_data_func

Point this to a function that will eventually be called to delete the pre_render_data.

## preserve_rgb_of_zero_alpha

`preserve_rgb_of_zero_alpha` is used both as input to the effect, to tell it what to render, and as output from the effect, to describe the input it needs (as passed to the checkout call). When preserve_rgb_of_zero_alpha is set in an input request, the effect must pass it recursively when making checkouts, otherwise prior effects and masking will eliminate those pixels that the effect would reveal. Use of this is discouraged, though still supported in CS3 (8.0).

## Rectangles

Effects must set both result rectangles accurately. After Effects’ caching system relies upon them, incorrect values can cause many problems. If the plug-in returns a `result_rect` smaller than the request_rect, that tells After Effects the pixels inside the request_rect but outside the `result_rect` are empty.

Similarly, `max_result_rect` must encompass all non-zero pixels; the effect will never be asked to render anything outside this region. If there are pixels outside this rectangle, they will never be displayed.

Mis-sized output rectangles can cause problems as well. If these rectangles are too big, a loss of performance results.

Not only will many empty pixels be cached (robbing the application of valuable memory), the effect may be unnecessarily asked to render large regions of nothing. For this reason, the `max_result_rect` must be computed correctly, rather than set to some arbitrarily large size.

Both `result_rect` and `max_result_rect` may vary depending on the effect’s parameters, the current time, et cetera; they are valid only for the given invocation of the effect. However, `max_result_rect` _cannot_ depend on the specific render request. It must be the same no matter what portion of the output is requested by After Effects.

如果 request_rect 不与效果的输出像素相交，返回一个空的`result_rect'是合法的；不需要进行渲染。

After Effects 也可以用一个空的 request_rect 来调用效果，这意味着效果只被要求计算`max_result_rect`。

`preserve_rgb_of_zero_alpha`可以影响边界的计算过程(包括 result_rect 和`max_result_rect`)，如果效果的行为因这个设置而不同，则必须尊重这个设置。

## The “Size” Of A Layer

与非智能效果一样，每个智能效果都可以任意收缩或扩展其请求的输入。它们不能依赖于一个固定的框架大小，而且输入的大小可能会随着时间的推移而改变。

例如，用户可以给一个图层应用一个动画的阴影，这将在不同的时间给图层的不同边缘增加像素，这取决于阴影投射的方向。

有些效果(例如，那些需要将一个图层与另一个图层对齐的效果)需要一些 "大小 "的概念。这可以用两种方式来定义，每一种都有优点和缺点。

在应用任何效果和降采样之前，原始图层的尺寸被赋予`in_data>width/height`。由于这个数值不受后续效果的影响，它可以作为中心点等事项的绝对参考。

然而，这并不是万无一失的，因为用户可能已经应用了失真或平移效果。而且，这个值只对应用效果的层可用，对其他层的参数无效。

…or…

每个图层输入都有一个`max_result_rect`，它包含了所有的像素数据，在某种意义上是一个图层的主 "尺寸"。

它对所有图层都是可用的，但会随着时间的推移根据以前应用的效果而改变，可能是用户没有想到的方式(如上面的水滴阴影例子)。

请注意，输入的 Ref_width/height 和`max_result_rect`可以在不渲染的情况下获得，方法是用空的`request_rect`调用`checkout_layer`。

这是相当有效的，如果首先需要图层的 "尺寸"，以确定渲染所需的确切像素，这将是非常有用的。

这是一个在 pre-render 中请求一个图层，然后从不调用`checkout_layer`的例子(在这种情况下，没有)。

## Flag On The Play

通常情况下，一个给定的`PF_RenderRequest`的`max_result_rect`将被裁剪到任何应用的遮罩的边界。

然而，如果[PF_OutFlag2_REVEALS_ZERO_ALPHA](../effect-basics/PF_OutData.html) 被设置，`max_result_rect`将是该层的尺寸。

## PF_Cmd_SMART_RENDER

该效果在每次预渲染时最多会收到一次*PF_Cmd_SMART_RENDER*调用。

注意，渲染可能根本就不会被调用。After Effects 可能只想进行一些边界计算，或者它后来发现根本不需要效果的输出(例如，如果轨道哑光的预渲染阶段返回一个不与效果的输出相交的矩形，就可能发生这种情况)。

所有的效果都必须能够处理无渲染的预渲染，而不泄漏资源或进入不稳定的状态。

在*PF_Cmd_SMART_RENDER*期间，额外参数指向 PF_SmartRenderExtra。

## PF_SmartRenderExtra

### PF_SmartRenderInput

由一个[PF_RenderRequest](../smartfx/smartfx.html)、位深度和一个指向 pre_render_data`的指针(在[PF_Cmd_SMART_PRE_RENDER](../effect-basics/command-selectors.html)期间分配)组成。

这个 PF*SmartRenderInput`与相应的PF_Cmd_SMART_PRE_RENDER*中传递的相同。

### PF_SmartRenderCallbacks

```
PF_Errcheckout_layer_pixels(
PF_ProgPtreffect_ref,
A_longcheckout_idL,
PF_EffectWorld**pixels)。
```

这是用来实际访问在*PF_Cmd_SMART_PRE_RENDER*过程中检查出来的层中的像素。

返回的 PF_EffectWorld`在当前命令的持续时间内有效，或者直到检出。

你只能用*PF_Cmd_SMART_PRERENDER*中的 checkout*idL 调用 checkout_layer_pixels`一次。在PF_Cmd_SMART_PRERENDER*和*PF_Cmd_SMART_RENDER*中进行的签出数量之间必须有一个一对一的映射。

要在一个图层上多次调用 checkout*layer_pixels`，你应该在PF_Cmd_SMART_PRERENDER*中用不同的唯一 checkout*idL`在同一图层上再次调用[checkout_layer](../smartfx/smartfx.html)，然后用这个checkout_idL`在PF_Cmd_SMART_RENDER*中做另一个 checkout_layer_pixels`。

```
PF_Errcheckin_layer_pixels(
PF_ProgPtreffect_ref,
A_longcheckout_idL)。
```

没有必要调用(当效果从*PF_Cmd_SMART_RENDER*返回时，After Effects 会清理所有这样的检出)，但对释放内存很有用。

```
PF_Errcheckout_output(
PF_ProgPtreffect_ref,
PF_EffectWorld**output)。
```

检索输出缓冲区。注意，在至少一个输入被检出之前，效果是不允许检出输出的(除非效果根本没有输入)。

注意：为了优化内存的使用，尽可能晚地请求输出，并尽可能少地一次请求输入。

## When To Access Layer Parameters

除了层输入以外的参数可以在任何时候自由检出。层输入必须在:ref:PF_Cmd_SMART_PRE_RENDER <effect-basics/command-selectors.frame-selectors>期间访问。

然而，你并不需要实际使用每个输入。

如果你在[PF_Cmd_SMART_PRE_RENDER](../effect-basics/command-selectors.html) 中检出一个帧(或其一部分)，随后不在`PF_Cmd_SMART_RENDER`中检出，它就不需要被渲染，大大改善性能。

## Wait, Gimme That Layer Back!

`checkout_layer_pixels`只能被调用一次，并使用 PreRender 中的 checkout_id。在 PreRender 和 SmartRender 中的签出数量必须有一个一对一的映射。如果你需要对一个图层的像素进行多次检查，也许是因为你的代码结构，只需使用一个以上的 checkout_id。在 PreRender 中，在同一个图层上用不同的唯一 checkout_id 调用 checkout_layer。然后在 SmartRender 中，每次在 SmartRender 中调用 checkout_layer_pixels 时，使用这些 checkout_ids 中不同的一个。
