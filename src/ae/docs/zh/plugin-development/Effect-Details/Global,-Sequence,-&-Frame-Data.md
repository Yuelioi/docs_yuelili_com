---
title: Global, Sequence, & Frame Data
order: 13
category:
  - AE 插件开发
---
# Global, Sequence, & Frame Data

After Effects允许插件在三个范围内存储数据：全局、序列和帧。仔细考虑你存储信息的位置；选择不当会影响性能，或使你的插件对用户产生混淆。

使用全局数据来存储效果的所有实例共有的信息：静态变量和数据、位图、指向其他DLLs或外部应用程序的指针。如果你的效果支持多帧渲染，任何静态变量或全局变量都必须不存在竞赛条件（更多信息请参见[效果是线程安全的是什么意思？](multi-frame-rendering-in-ae.html) (#ts-effect)）。

在序列数据或新的[Compute Cache For Multi-Frame Rendering](multi-frame-rendering-in-ae.html)(#compute-cache)中存储任何特定于你的插件实例的信息（UI设置、文本字符串和任何不存储在参数中的自定义数据）。

帧数据用于渲染一个特定的帧的信息。这已经被废弃了，因为大多数机器都能够一次将整个帧加载到内存中。当然，你的IMAX生成用户仍然会感谢你所做的任何优化。

## Persistence

After Effects在项目文件中保存了序列数据，但没有保存全局或帧数据。序列数据中指向外部数据的指针，在重新打开项目时很可能是无效的，必须重新连接。我们把这个过程称为 "扁平化 "和 "非扁平化 "的序列数据。

:::tip

计算缓存并不将其内容存储到项目文件中。存储在缓存中的数据必须在渲染时重新创建。

:::

## Validating Sequence Data

仔细的序列数据验证对于做跨时模拟的效果非常重要，在这种情况下，帧N依赖于帧N-1，而你在序列数据中使用计算数据的缓存。如果一个参数改变了，某些计算出来的数据可能就不再有效了，但如果每次改变后都盲目地重新计算，也是一种浪费。

当被要求渲染第N帧时，假设你的缓存数据已经计算到了第N-1帧，调用[PF_GetCurrentState()]/[PF_AreStatesIdentical()](#effect-detals-parameter-supervision-pf-paramutilsuite)中的`PF_ParamUtilSuite3]（参数监控.html），看看在当前参数设置下缓存的计算数据是否仍然有效。

所有参数的状态（除了那些带有[PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED]（.../effect-basics/PF_ParamDef. html）（#effect-basics-pf-paramdef-parameter-flags）设置），包括层参数（包括[param[0]]（.../effect-basics/PF_ParamDef.html）（#effect-basics-pf-paramdef-param-zero））在通过的时间跨度内被检查。

这是有效地完成的，因为变化跟踪是用时间戳完成的。

如果输入没有变化，你可以安全地使用你的缓存，而且内部缓存系统会认为你对通过的范围有时间上的依赖。因此，如果上游有什么变化，主机的缓存将自动正确地失效。

为了测试它是否有效，在每一帧上用一个参数的关键帧应用你的效果。用RAM预览来填充缓存，然后改变其中一个关键帧。相关的帧和所有从属的帧（例如，在模拟的情况下，后来的帧）应该失去它们的缓存标记，需要重新渲染。同样，对图层参数来源的上游改变应该导致缓存的时间选择性失效。

## Flattened And Unflattened Sequence Data

如果你的序列数据引用了外部存储器（在指针或句柄中），你必须对你的数据进行平坦化和解平坦化，以实现磁盘安全存储。这就类似于创建你自己的微型文件格式。

在收到[PF_Cmd_SEQUENCE_FLATTEN](.../effect-basics/command-selectors.html)(#effect-basics-command-selectors-sequence-selectors)后，将指针引用的数据放入一个连续的块中，以后可以从中恢复旧的结构。

如果你的序列数据包含一个指向long的指针，分配4个字节来存储扁平化的数据。你必须处理特定平台的字节排序。

记住，你的用户（反正是买了两份你的插件的人）可能希望同一个项目能在macOS和Windows上运行。

After Effects在重新加载数据时发送[PF_Cmd_SEQUENCE_RESETUP](.../effect-basics/command-selectors.html) (#effect-basics-command-selectors-sequence-selectors)，对于平面或非平面数据。

在两个结构中使用一个共同偏移量的标志来表示数据的状态。

```cpp
typedef struct {
 A_char* messageZ;
 PF_FpLong big_numF;
 void* temp_storage;
} non_flat_data;

typedef struct {
 char message[256];
 PF_FpLong big_numF;
 A_Boolean big_endianB;
} flat_data;

```

## Resizing Sequence Data

在[PF_Cmd_SEQUENCE_SETUP](.../effect-basics/command-selectors.html) (#effect-basics-command-selectors-sequence-selectors)期间，为你的效果的这个实例分配一个数据句柄。

你可以在任何选择器中修改序列数据的内容，但不能修改其大小。

你可以只在以下选择器中调整序列数据句柄的大小。

> - `PF_Cmd_AUDIO_SETUP`。
> - `PF_Cmd_AUDIO_SETDOWN`。
> - "PF_Cmd_FRAME_SETUP"（帧设置）。
> - "PF_Cmd_FRAME_SETDOWN"（画面设置）。
> - "PF_Cmd_AUDIO_RENDER"。
> - "PF_Cmd_RENDER"。
> - `PF_Cmd_SEQUENCE_SETUP'（序列）。
> - `PF_Cmd_SEQUENCE_SETDOWN'（顺序）。
> - "PF_Cmd_SEQUENCE_FLATTEN"（优化序列）。
> - "PF_Cmd_SEQUENCE_RESETUP"。
> - `PF_Cmd_DO_DIALOG`。

## Accessing sequence_data at Render Time with Multi-Frame Rendering

当在一个效果上启用多帧渲染时，`sequence_data'对象在渲染过程中是只读/常量的，并且可以通过`PF_EffectSequenceDataSuite1'套件在每个渲染线程上访问。

### PF_EffectSequenceDataSuite1

#### PF_GetConstSequenceData

当一个效果启用多帧渲染时，为一个渲染线程检索只读的const_data对象。

```cpp
PF_Err(*PF_GetConstSequenceData)(
PF_ProgPtreffect_ref,
PF_ConstHandle*sequence_data);
```

```cpp
static PF_Err Render(
   PF_InData   *in_dataP,
   PF_OutData  *out_dataP,
   PF_ParamDef *params[],
   PF_LayerDef *output )
{
    PF_ConstHandle seq_handle;

    AEFX_SuiteScoper<PF_EffectSequenceDataSuite1> seqdata_suite =
      AEFX_SuiteScoper<PF_EffectSequenceDataSuite1>(
        in_dataP,
        kPFEffectSequenceDataSuite,
        kPFEffectSequenceDataSuiteVersion1,
        out_dataP);

    PF_ConstHandle const_seq;
    seqdata_suite->PF_GetConstSequenceData(in_data->effect_ref, &const_seq);

    // cast const_seq to the type used when storing to sequence_data

    // rest of render function code...
}
```