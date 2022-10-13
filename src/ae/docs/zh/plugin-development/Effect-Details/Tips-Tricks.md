---
title: Tips & Tricks
order: 21
category:
  - AE 插件开发
---

## Best Practices

如果你的原型和我们的一样，你的插件在运行时没有崩溃的第一个版本与实际出货的版本有很大的不同。

你的插件对诸如降采样、错误和异常、像素长宽比、内存不足的情况以及在处理过程中被中断等情况的反应决定了它的可用性(以及你需要处理多少支持请求)。

## Responsiveness

使用[Interaction Callbacks](https://ae-plugins.docsforadobe.dev/effect-details/interaction-callback-functions.html#effect-details-interaction-callback-functions-interaction-callbacks)中的 PF_ABORT()`和PF_PROGRESS()`使你的插件尽可能的反应灵敏。

实际上，我们对所有的效果都进行了中断能力测试；你会惊讶于用户在等待你的 pokey 效果完成对电影分辨率序列的处理时有多暴躁。

After Effects 的迭代函数本身就提供了这种功能；你不需要担心在你的像素处理函数中调用上述函数。

## Make Your Effect Easy To Find

当用户搜索插件名称以外的内容时，可以让你的效果显示在 "效果和预置 "调色板中。

应用你的效果(保持默认设置，除非你非常确定用户在搜索给定术语时想要不同的东西)，并从效果控制调色板中选择 "将选择保存为动画预设"。

把它保存为你希望用户找到该插件的名称。

让你的插件的安装程序把产生的.ffx 文件放到/Presets 目录下，在 After Effects 的可执行文件旁边。

当用户搜索它被保存的名称时，你的预设就会显示出来。

## Sampling Pixels At (x,y)

有时，你并不只是处理每一个像素，而是想在输入帧中获得一个特定的偏移。下面是在一个给定的(x,y)位置对像素进行采样的一种方法；类似的代码可以用来写到给定的位置。

```cpp
PF_Pixel*sampleIntegral32(PF_EffectWorld&def,intx,inty){
return(PF_Pixel*)((char*)def.data+
(y*def.rowbytes)+
(x*sizeof(PF_Pixel)));
}

PF_Pixel16*sampleIntegral64(PF_EffectWorld&def,intx,inty){
assert(PF_WORLD_IS_DEEP(&def));
return(PF_Pixel16*)((char*)def.data+
(y*def.rowbytes)+
(x*sizeof(PF_Pixel16)));
}
```

特别感谢 Paul Miller 回答了这个问题。

## Where’s The Center Of A Pixel?

Deeeeeep, man. 当锚点(见用户文档)为(0,0)时，After Effects 会围绕左上角的左上角像素旋转。

然而，子像素采样和区域采样的回调实际上是把(.0, .0)作为一个直接命中点。为了弥补这一点，在调用这些函数之前，从 x 和 y 值中减去 0.5。

矩阵函数(transform_world`来自[PF_WorldTransformSuite1](https://ae-plugins.docsforadobe.dev/effect-details/graphics-utility-suites.html#effect-details-graphics-utility-suites-pf-worldtransformsuite))不存在这个问题。

当对图像进行亚像素量的平移时，使输出层比输入层宽一个像素，并将原点留在(0,0)。

## Text Layer Origin

几乎所有的图层类型的原点都在左上角。文本层则不然!

文本层的原点默认是在第一个字符的左下角基线位置。你可以看到这一点，如果你创建一个文本项目，然后选择图层，让锚点显示出来。

看看默认的锚点位置在哪里。变换不是在图层矩形的角上。

## Clean Slate

你不一定要用一个干净的输出板开始效果处理。我们的高斯模糊滤波器，为了努力做到这一点，在渲染前进行了以下工作。

```cpp
src_rect.left=in_data>output_origin_x;
src_rect.right=src_rect.left+input>width;
src_rect.top=in_data>output_origin_y;
src_rect.bottom=src_rect.top+input>height;

err=PF_FILL(NULL,NULL,output);

if(!err){
err=PF_COPY(&params[0]>u.ld,output,NULL,&src_rect);
}
```

## Caching Behavior

After Effects 提供了许多方法来指定缓存行为。PF_OutFlag_NON_PARAM_VARY`, PF_OutFlag_WIDE_TIME_INPUT`, PF_OutFlag_I_USE_SHUTTER_ANGLE`, PF_OutFlag_I_SYNTHESIZE_AUDIO`, PF_OutFlag2_I_USE_3D_CAMERA`, 和 PF_OutFlag2_I_USE_3D_LIGHTS`(都来自[PF_OutFlags](https://ae-plugins. docsforadobe.dev/effect-basics/PF_OutData.html#effect-basics-pf-outdata-pf-outflags))都会影响缓存决策。

支持[dynamic outflags](https://ae-plugins.docsforadobe.dev/effect-basics/PF_OutData.html#effect-basics-pf-outdata-pf-outflags)可以极大地提高性能，防止 After Effects 像以前那样积极地使你的效果缓存失效。

确认你的插件在不同的 After Effects 缓存设置下表现良好。你的插件是否像预期的那样经常被调用更新，或者 After Effects 认为它有有效的像素，而你认为它没有？

## Global Performance Cache Consideratons

在 CS6 的新缓存中，你可能需要在改变效果的渲染后清除缓存的帧，这样在改变之前已经渲染并存储在缓存中的帧就不会被重复使用。要在开发过程中手动完成这项工作。

1. 在 "偏好">"媒体和磁盘缓存 "中，禁用磁盘缓存。
2. 点击 "清空磁盘缓存 "以确定(在步骤 1 中禁用磁盘缓存只是禁用磁盘缓存的写入，不一定是使用)。
3. 重新启动

如果你遇到了故障，这很可能是你的效果中的一个合法的错误，例如 SmartFX 中不恰当的矩形处理。

另一方面，如果你修复了你的插件中的一个渲染错误并进行了更新，你不能指望所有的用户都会清空他们的磁盘缓存。一个用户可能有一个有问题的帧的磁盘缓存，它需要被废止。该怎么做呢？更新你的插件的效果版本。这个值(以及 AE build number)是缓存密钥的一部分，所以如果你更新了它，任何含有你的插件内容的缓存帧将不再匹配。

## Some Thoughts On Time From A Long-Time Developer

Stoney Ballard 对时间与效果的关系做了如下总结；你可能会发现它很有帮助。

有五个 in_data`参数可以描述过滤器的时间。

- current_time`(当前时间)
- time_step
- 本地时间步长
- total_time`(总时间)。
- 时间刻度

它们的值取决于。

- 正在渲染的帧
- 图层和组件的持续时间 组件的帧速率
- 任何时间拉伸 任何时间重映射
- 外部合成的时间行为(一个包围着被过滤的图层的合成)。
- 嵌套时或在渲染队列中保留帧率"(PFR)开关的设置

正在渲染的帧会影响 current_time。它以本地(层)的时间系统表示。如果 PFR 开关是关闭的，current_time 可以是任何非负的值。如果开启，它将被限制在 time_step 和 local_time_step 的倍数。层持续时间只影响总时间。只有当时间重映射(TR)打开时，复合持续时间才是一个因素。在这种情况下，总时间是层持续时间和合成持续时间中较大的一个。合成帧率只影响时间尺度。时间拉伸只影响 time_step 和 local_time_step。如果时间拉伸是负的，这些值就是负的。即使该层的持续时间(如在

中看到的)发生变化，总时间仍然不受影响。这就好比时间拉伸是在过滤器的上方，但在外部编译的下方。PFR 并不改变时间伸展的效果。时间拉伸与外部编译不同，因为它对两个步骤参数的影响是相同的，而外部编译只影响时间步骤。

时间重映射发生在滤波器的下面，所以它不影响总时间以外的时间参数。当 TR 打开时，层被延长到与 comp 相同(但绝不会缩短)，而不管它实际需要多少时间，或者层在 comp 中的位置。这可能会导致 total_time 变大。这与实际的时间图没有关系，只是它是否被启用。

最大的变化来自于嵌套在一个外部程序中，除非 PFR 是打开的。当 PFR 开启时，一个过滤器就会完全与外部程序中的时间变化隔离开来。当然，在这种情况下，current_time 不一定以 time_step 的增量移动。它可能会跳帧或倒退。

当 PFR 关闭时，local_time_step、total_time 和 time_scale 仍然被设置为内部压缩的时间，但是 time_step 包含了外部压缩的下一帧的时间，用本地时间系统表示。这可以是任何值，包括 0。这可以被解释为一个瞬时的时间率，而不是一个持续时间。一个 0 值可以持续任意数量的渲染帧，但当前的时间在本地层不会改变。

从另一个方向看。

current_time 被量化为时间步长，除非在渲染一个外部的 comp 时关闭内部 comp 的 PFR。这是该层的当前时间，而不是任何 comp 的时间。

local_time_step 的值只受 Time Stretch 的影响。它不可能是零，但可以是负数。

time_step 和 local_time_step 总是相同的值，除非在渲染一个关闭了 PFR 的外部组件。time_step 也受外部组件(关闭了 PFR)的时间行为影响。它可以有任何值，包括正值、负值或零值，而且每一帧(外置组件)都可以不同。time_step 可以用来确定当前帧的持续时间(PFR 关闭时)。

total_time 是图层的持续时间，除非时间重映射(Time Remapping)被打开，这使得它是图层持续时间和合成器持续时间中较大的一个。

time_scale 是一个比例，使 total_time / time_scale 是该层在其 comp 中的持续时间(秒)。它只受编译器帧率的影响，尽管所有的时间值都可以因为任何原因而按比例缩放。

一个图层的内在帧率(如果它有的话)在任何地方都是不可见的，尽管它通常与压缩帧率相同。如果一个过滤器需要访问一个片段的实际帧数，它可以这样做

只有在相同帧率的合成器中，并且在其层上没有应用时间拉伸或时间重映射的情况下才能做到。它应该使用 local_time_step 来确定帧的位置。

## Rate x Time == Pain!

如果你的参数之一是速度或速率参数，就要小心了。考虑到波纹效应。它假设一个常数，并使用当前时间来确定波纹已经走了多远(d = v * t)。如果用户随时间内插速度，你应该将速度函数从时间零点到当前时间进行积分。Ripple 并不*这样做，而是提供了一个 "相位 "参数，用户可以按照自己的意愿进行内插，只要速度被设置为零，就可以提供正确的结果。如果你想提供正确的行为，你可以使用 PF_CHECKOUT_PARAM()对速度参数进行采样(和整合)，从时间开始直到当前时间，或者你可以提供一个 "相位 "或 "距离 "参数并警告用户插值速度。与渲染相比，检查出许多参数值的代价是可以忽略不计的，这也是推荐的方法。

如果你在其他时候检出参数值，或者根本就没有使用图层参数，那么你必须在完成后检出这些参数，即使发生了错误。记住，检出的参数是只读的。

## Testing

尝试在 RAM 预览中使用你的插件，以确保你能优雅地处理内存不足的情况。你的插件是否能优雅地处理内存耗尽的情况？

如果你在请求内存时收到 PF_Err_OUT_OF_MEMORY` ( 参见[Error Codes](https://ae-plugins.docsforadobe.dev/effect-basics/errors.html#effect-basics-errors-error-codes))，你是否将它传回 After Effects？

当你的视频效果被应用到纯音频层时，会发生什么？用你的插件的旧版本创建的项目进行测试。
