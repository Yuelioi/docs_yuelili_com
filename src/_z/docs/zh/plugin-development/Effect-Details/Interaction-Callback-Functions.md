---
title: Interaction Callback Functions
order: 9
category:
  - AE 插件开发
---

# Interaction Callback Functions

虽然在[PF_InData](.../effect-basics/PF_InData.html)中提供了未使用宏的函数指针，但使用所提供的宏来访问它们。看到我们对废除宏的使用有多严格了吗？让我们把这作为我们的小秘密吧。

## Interaction Callbacks

### PF_ADD_PARAM

在[PF_Cmd_PARAM_SETUP](https://ae-plugins.docsforadobe.dev/effect-basics/command-selectors.html#effect-basics-command-selectors-global-selectors)期间列举你的插件的参数给After Effects，使用多次调用这个函数。

注意：在PF_ADD_PARAM()之前没有完全清除PF_ParamDef会导致很多问题。在添加参数之前一定要使用AEFX_CLR_STRUCT`。

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

如果用户取消了，返回非零值；将该值返回给After Effects。将你的渲染程序包裹在一个 "while abort has not been requested "的while循环中。

```cpp
PF_ErrPF_ABORT(PF_InData*in_data);
```

### PF_PROGRESS

在处理过程中显示一个进度条；当前和总数描述完成的百分比。如果你应该暂停或中止你当前的处理，则返回非零值；将该值返回给After Effects。每个扫描线调用一次，除非你的效果非常慢。

如果总数为0，则用PF_ABORT代替(给用户提供不同的选择)。

```cpp
PF_ErrPF_PROGRESS(
PF_InData*in_data,
A_longcurrent,
A_longtotal);
```

### PF_CHECKOUT_PARAM

在指定时间获取参数值，或源视频层。After Effects会根据参数的检出状态做出缓存决定。

分配一个新的[PF_ParamDef](https://ae-plugins.docsforadobe.dev/effect-basics/PF_ParamDef.html#effect-basics-pf-paramdef)来保存结果；传递给插件的是只读的。如果你签出的图层参数被设置为`<none>`，返回的图层将被填充为零。面具不包括在签出的图层中。

在UI事件处理过程中不要签出图层参数。

```cpp
PF_ErrPF_CHECKOUT_PARAM(
PF_InData*in_data,
PF_ParamIndexindex,
A_longwhat_time,
A_longstep,
A_longtime_scale,
PF_ParamDef*param);
```

如果检查出源层，将返回一个去交错的帧。如果你要求引用上层字段的时间，你将收到返回的上层字段与用于生成额外扫描线的过滤器。例如，假设第0行和第2行是上场，第1行是下场，如果你检查出上场，第0行和第2行将直接从源镜头传回，而第1行将通过平均第0行和第2行计算。如果你想重新组合一个有两个字段的全分辨率源帧，你可以调用PF_CHECKOUT_PARAM两次来获得两个字段，然后重新交错拍摄。

当在一个非帧对齐的时间检查出一个图层时会发生什么？所有的项目基本上都有无限的时间分辨率，所以当要求一个任意值的时间时，AE会在那个时间渲染这个项目。对于一个组合，这涉及到将所有的关键帧值插值到子帧的时间。对于镜头，AE返回一个与所问时间相对应的完整图像，也就是最接近左边的帧。如果用户在该层上进行了混帧，就会生成一个内插帧。

### PF_CHECKIN_PARAM

每一个PF_CHECKOUT_PARAM`都要用PF_CHECKIN_PARAM`来平衡。

不这样做会导致糟糕的性能和泄漏内存。一旦签入，[PF_ParamDef](https://ae-plugins.docsforadobe.dev/effect-basics/PF_ParamDef.html#effect-basics-pf-paramdef)中的字段将不再有效。

```cpp
PF_ErrPF_CHECKIN_PARAM(
PF_InData*in_data,
PF_ParamDef*param);
```

### PF_REGISTER_UI

注册一个自定义的用户界面元素。见[Effect UI &amp; Events](https://ae-plugins.docsforadobe.dev/effect-ui-events/effect-ui-events.html#effect-ui-events-effect-ui-events)。注意：PF_UIAlignment的标志不被认可。

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

在效果控制(和合成)面板中，效果是按照从0到n的顺序应用于图像的。

效果[n-1]的输出是效果[n]的输入([param[0]](.../effect-basics/PF_ParamDef.html) )。

另一方面，当一个普通的效果使用 "PF_CHECKOUT_PARAM "检出一个图层时，它接收的是原始的(未受影响的)源图层，不管它的顺序如何。

然而，当[SmartFX](../smartfx/smartfx.html)效果检出其输入参数(params[0])时，先前的效果_被应用。

## Parameter Checkout Behavior

无论图层的输入和输出点是否被修剪过，你都会得到从源镜头开始到结束的有效帧，然后在这之前和之后是透明的。

如果图层参数的帧率低于它们被检出的合成，则仅在低帧率需要的时候刷新。

如果你的效果想在每一帧改变它的输出，尽管输入层是静态的，你需要设置[PF_Outflag_NON_PARAM_VARY](.../effect-basics/PF_OutData.html)(#effect-basics-pf-outdata-pf-outflags)。

当特效检出连续光栅化的Adobe Illustrator图层时，After Effects会在一个合成大小的缓冲区中渲染带有几何图形的Illustrator图层。

## Parameter Checkout And Re-Entrancy

在不同时间签出图层的插件会产生重入行为。考虑这样一个例子：Checkout样本插件被应用于组1合物B中的一个图层，而B被预合成为合成物A，Checkout也被应用于其中。

当合成A被渲染时，Checkout[A]将被发送_PF_Cmd_RENDER_，在此期间，它从当前时间以外的时间检查出一个层(合成B)。

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