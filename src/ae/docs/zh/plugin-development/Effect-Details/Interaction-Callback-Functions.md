---
title: Interaction Callback Functions
order: 9
category:
  - AE 插件开发
---

# Interaction Callback Functions

While the un-macro’d function pointers are provided in [PF_InData](../effect-basics/PF_InData.html) , use the provided macros to access them. See how stringent we are about deprecating macro usage? Let’s let this be our little secret.

## Interaction Callbacks

### PF_ADD_PARAM

Enumerate your plug-in’s parameters to After Effects during [PF_Cmd_PARAM_SETUP](https://ae-plugins.docsforadobe.dev/effect-basics/command-selectors.html#effect-basics-command-selectors-global-selectors), using multiple calls to this function.

Note: Failing to completely clear out a PF_ParamDef prior to PF_ADD_PARAM() can cause many problems. Always use AEFX_CLR_STRUCT` before adding parameters.

```cpp
PF_ErrPF_ADD_PARAM(
PF_InData*in_data,
PF_ParamIndexindex,
PF_ParamDefPtrdef);
```

We provide convenience macros for specific parameter types, in Utils/ Param_Utils.h:

> - PF_ADD_COLOR`,
> - PF_ADD_ARBITRARY`,
> - PF_ADD_SLIDER`,
> - PF_ADD_FIXED`,
> - PF_ADD_FLOAT_SLIDERX`,
> - PF_ADD_CHECKBOXX`,
> - PF_ADD_BUTTON`,
> - PF_ADD_ANGLE`,
> - PF_ADD_NULL`,
> - PF_ADD_LAYER`,
> - PF_ADD_255_SLIDER`,
> - PF_ADD_PERCENT`,
> - PF_ADD_POINT`,
> - PF_ADD_POINT_3D`,
> - PF_ADD_TOPICX`,
> - PF_END_TOPIC`,
> - PF_ADD_POPUPX`,
> - PF_ADD_FLOAT_SLIDERX_DISABLED`

### PF_ABORT

Returns non-zero if the user has cancelled; return that value to After Effects. Wrap your render routine in a “while abort has not been requested” while loop.

```cpp
PF_ErrPF_ABORT(PF_InData*in_data);
```

### PF_PROGRESS

Displays a progress bar during processing; current and total describe the percentage complete. Returns non-zero if you should suspend or abort your current processing; return that value to After Effects. Call once per scanline, unless your effect is very slow.

If total is 0, PF_ABORT is used instead (presenting the user with different choices).

```cpp
PF_ErrPF_PROGRESS(
PF_InData*in_data,
A_longcurrent,
A_longtotal);
```

### PF_CHECKOUT_PARAM

Obtains parameter values, or the source video layer, at a specified time. After Effects makes caching decisions based on the checkout state of parameters.

Allocate a new [PF_ParamDef](https://ae-plugins.docsforadobe.dev/effect-basics/PF_ParamDef.html#effect-basics-pf-paramdef) to hold the result; those passed to the plug-in are read-only. If you check out a layer parameter that’s set to `<none>`, the layer returned will be filled with zeros. Masks are not included with checked-out layers.

Do not check out layer parameters during UI event handling.

```cpp
PF_ErrPF_CHECKOUT_PARAM(
PF_InData*in_data,
PF_ParamIndexindex,
A_longwhat_time,
A_longstep,
A_longtime_scale,
PF_ParamDef*param);
```

If checking out the source layer, a deinterlaced frame will be returned. If you ask for the time that references the upper field, you will receive back the upper field with a filter used to generate the extra scanlines. For example, assuming line 0 and 2 are upper fields, and line 1 is a lower field, if you check out the upper fields, line 0 and 2 will be passed back directly from the source footage, and line 1 will be calculated by averaging lines 0 and 2. If you want to reassemble a full resolution source frame with both fields present, you can call PF_CHECKOUT_PARAM twice to get both fields, and reinterlace the footage.

What happens when checking out a layer at a time that is not frame-aligned? All items have essentially infinite time resolution, so when asking for a time at any value, AE renders the item at that time. For a composition, that involves interpolating all of the keyframes values to the subframe time. For footage, AE returns a full image that corresponds to the time asked, which is the nearest-to-left frame. If the user has frame-blending on that layer, an interpolated frame is generated.

### PF_CHECKIN_PARAM

Balance every PF_CHECKOUT_PARAM`, with a PF_CHECKIN_PARAM`.

Not doing so causes dismal performance and leaks memory. Once checked in, the fields in the [PF_ParamDef](https://ae-plugins.docsforadobe.dev/effect-basics/PF_ParamDef.html#effect-basics-pf-paramdef) will no longer be valid.

```cpp
PF_ErrPF_CHECKIN_PARAM(
PF_InData*in_data,
PF_ParamDef*param);
```

### PF_REGISTER_UI

Register a custom user interface element. See [Effect UI &amp; Events](https://ae-plugins.docsforadobe.dev/effect-ui-events/effect-ui-events.html#effect-ui-events-effect-ui-events). Note: The PF_UIAlignment flags are not honored.

```cpp
PF_ErrPF_REGISTER_UI(
PF_InData*in_data,
PF_CustomUIInfo*cust_info);
```

### PF_CHECKOUT_LAYER_AUDIO

给定一个索引、start_time、duration、time_scale、rate、byte_per_sample、num_channels和fmt_signed，After Effects将返回一个相应的PF_LayerAudio。After Effects将执行任何必要的重采样。

```cpp
PF_ErrPF_CHECKOUT_LAYER_AUDIO(
PF_InData*in_data,
PF_ParamIndexindex,
A_longstart_time,
A_longduration,
A_u_longtime_scale,
PF_UFixedrate,
A_longbytes_per_sample,
A_longnum_channels,
A_longfmt_signed,
PF_LayerAudio*audio);
```

### PF_CHECKIN_LAYER_AUDIO

平衡所有对PF_CHECKOUT_LAYER_AUDIO的调用，无论错误情况如何，都要匹配对PF_CHECKIN_LAYER_AUDIO的调用。

```cpp
PF_ErrPF_CHECKIN_LAYER_AUDIO(
PF_InData*in_data,
PF_LayerAudioaudio);
```

### PF_GET_AUDIO_DATA

返回关于PF_LayerAudio的信息。

音频之后的所有参数都是可选的；对于任何你不感兴趣的值，都要传递0。rate0是无符号的，fmt_signed0应该是有符号的非零，无符号的是零。这个回调用于读取音频信息的视觉效果。要改变音频，请写一个音频过滤器。

```cpp
PF_ErrPF_GET_AUDIO_DATA(
PF_InData*in_data,
PF_LayerAudioaudio,
PF_SndSamplePtr*data0,
A_long*num_samples0,
PF_UFixed*rate0,
A_long*bytes_per_sample0,
A_long*num_channels0,
A_long*fmt_signed0);
```

## Parameter Checkout vs. Param Zero

在效果控制（和合成）面板中，效果是按照从0到n的顺序应用于图像的。

效果[n-1]的输出是效果[n]的输入（[param[0]](.../effect-basics/PF_ParamDef.html) ）。

另一方面，当一个普通的效果使用 "PF_CHECKOUT_PARAM "检出一个图层时，它接收的是原始的（未受影响的）源图层，不管它的顺序如何。

然而，当[SmartFX](../smartfx/smartfx.html)效果检出其输入参数(params[0])时，先前的效果_被应用。

## Parameter Checkout Behavior

无论图层的输入和输出点是否被修剪过，你都会得到从源镜头开始到结束的有效帧，然后在这之前和之后是透明的。

如果图层参数的帧率低于它们被检出的合成，则仅在低帧率需要的时候刷新。

如果你的效果想在每一帧改变它的输出，尽管输入层是静态的，你需要设置[PF_Outflag_NON_PARAM_VARY]（.../effect-basics/PF_OutData.html）（#effect-basics-pf-outdata-pf-outflags）。

当特效检出连续光栅化的Adobe Illustrator图层时，After Effects会在一个合成大小的缓冲区中渲染带有几何图形的Illustrator图层。

## Parameter Checkout And Re-Entrancy

在不同时间签出图层的插件会产生重入行为。考虑这样一个例子：Checkout样本插件被应用于组1合物B中的一个图层，而B被预合成为合成物A，Checkout也被应用于其中。

当合成A被渲染时，Checkout[A]将被发送_PF_Cmd_RENDER_，在此期间，它从当前时间以外的时间检查出一个层（合成B）。

为了提供这个被检出的图层，After Effects将发送_PF_Cmd_RENDER_到`Checkout[B]`。

Presto, 递归!

如果你要检出参数，你的特效必须适当地处理重入的渲染请求。

不要使用globals，也不要读写静态变量......但你反正也不打算这么做，对吗？

## Progress During Iteration

After Effects致力于尽可能地响应用户的互动，甚至在渲染时也是如此。通过适当地使用PF_ITERATE()也可以做到这一点。例如，也许你在对`PF_Cmd_RENDER'的响应过程中，使用了三次PF_ITERATE'd函数。

在这种情况下，你会先用。

```cpp
lines_per_iterateL = in_data>extent_hint.top - in_data>extent_hint.bottom;
total_linesL = 3 * lines_per_iterateL;
lines_so_farL = 0;

```

每次迭代后，你会把已经完成的行添加到当前位置。

```cpp
suites.iterate8suite()>iterate( lines_so_farL,
 total_linesL,
 input_worldP,
 &output>extent_hint,
 refcon,
 WhizBangPreProcessFun,
 output_worldP);

lines_so_farL += lines_per_iterateL;

ERR(PF_PROGRESS(lines_so_farL, total_linesL));

suites.iterate8suite()>iterate( lines_so_farL,
 total_linesL,
 input_worldP,
 &output>extent_hint,
 refcon,
 WhizBangRenderFunc,
 output_worldP);

lines_so_far += lines_per_iterateL;

ERR(PF_PROGRESS(lines_so_farL, total_linesL));

suites.iterate8suite()>iterate( lines_so_farL,
 total_linesL,
 input_worldP,
 &output>extent_hint,
 refcon,
 WhizBangPostProcessFunc,
 output_worldP);

ERR(PF_PROGRESS(lines_so_farL, total_linesL));

```