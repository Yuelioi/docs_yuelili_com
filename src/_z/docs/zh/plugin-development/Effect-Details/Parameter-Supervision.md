---
title: Parameter Supervision
order: 12
category:
  - AE 插件开发
---
# Parameter Supervision

监督是指根据其他参数的值动态地改变一些参数的值。要监督一个参数，在_PF_Cmd_PARAM_SETUP_期间，在添加它之前设置[PF_ParamFlag_SUPERVISE](.../effect-basics/PF_ParamDef.html)  。每当它被改变，你会收到[PF_Cmd_USER_CHANGED_PARAM](.../effect-basics/command-selectors.html) 。改变的参数的索引(在插件的参数数组中)在PF*UserChangedParamExtra(额外)参数中发送。在 `PF_Cmd_USER_CHANGED_PARAM*期间，你可以改变任何参数的值和外观。

## Updating Parameter UI

如果你在任何参数上设置了`PF_ParamFlag_SUPERVISE`，After Effects将向你发送_PF_Cmd_UPDATE_PARAMS_UI_，就像你设置了PF_OutFlag_SEND_UPDATE_PARAMS_UI。

在_PF_Cmd_UPDATE_PARAMS_UI_期间，你只能改变参数的外观和启用状态。使用[PF_ParamUtilSuite3]中的`PF_UpdateParamUI()`来更新用户界面，把你想修改的参数的_copy_传给它。不要试图修改原始参数。没有必要设置`PF_OutFlag_REFRESH_UI`；`PF_UpdateParamUI()`为你处理。

::: tip

这是更新`PF_PUI_STD_CONTROL_ONLY`参数的用户界面的唯一方法。

:::

## Updating Parameter Values

在[PF_Cmd_USER_CHANGED_PARAM](../effect-basics/command-selectors.html) 和[PF_Cmd_EVENT](. ./effect-basics/command-selectors.html)(#effect-basics-command-selectors-messaging)(_PF_Event_DO_CLICK_, _PF_Event_DRAG_, & _PF_Event_KEYDOWN_)。After Effects不会尊重在其他时间做出的改变。

当改变参数_值时(而不仅仅是用户界面)，修改原始参数，并将`PF_Paramdef.uu.change_flags`设置为`PF_ChangeFlag_CHANGED_VALUE`。

这个变化也将更新用户界面，并且用户可以撤销。请注意，`PF_ChangeFlag_CHANGED_VALUE`不支持层参数。

提供这个套件是为了让效果插件对其参数流有一些访问，而不需要使用AEGP套件。这些函数中至少有一些是由几个第三方主机提供的。这些功能对于有监督参数的效果来说特别方便。

## PF_ParamUtilSuite3

### PF_UpdateParamUI

```cpp
PF_UpdateParamUI(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
constPF_ParamDef*defP);
```

强制After Effects刷新参数的用户界面，在效果控制调色板中。

从CC 2014开始，After Effects现在会尊重对自定义UI高度的改变。只要改变你的自定义UI PF_ParamDef的ui_height，然后调用PF_UpdateParamUI。效果的自定义用户界面高度将在效果控制窗口中被更新。

从CS6开始，当一个插件禁用一个参数时，我们现在将该状态保存在UI标志中，这样插件就可以在将来检查该标志，看它是否被禁用。

注意：千万不要把param[0]传给这个函数。

### PF_GetCurrentState

```cpp
PF_GetCurrentState(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
constA_Time*startPT0,
constA_Time*durationPT0,
PF_State*stateP);
```

这个API，结合下面的PF_AreStatesIdentical，可以让你确定在你第一次调用PF_GetCurrentState和当前调用时，一组输入(无论是图层、其他属性，还是两者)是否不同，所以它可以用于缓存。你可以指定一个要考虑的时间范围或所有的时间。

在CS6中更新，增加了param_index、startPT0和durationPT0。param_index的预定义常数如下。

> - PF_ParamIndex_CHECK_ALL` - 检查每个参数，包括图层参数所指的每个图层。
> - PF_ParamIndex_CHECK_ALL_EXCEPT_LAYER_PARAMS` - 省略所有层。传递一个特定的层参数索引，将其作为唯一的层参数进行测试。
> - PF_ParamIndex_CHECK_ALL_HONOR_EXCLUDE` - 与CHECK_ALL类似，但尊重PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED。

在开始和持续时间中传递NULL表示所有时间。对于做跨时间模拟并因此设置了PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT的效果，当你询问一个时间范围时，它将被扩展到包括产生该范围所需的任何时间。

填充一个PF_State，这是一个不透明的数据类型，用作效果参数当前状态的收据(PF_State用于我们内部的帧缓存数据库)。

### PF_AreStatesIdentical

```cpp
PF_AreStatesIdentical(
PF_ProgPtreffect_ref,
constPF_State*state1P,
constPF_State*state2P,
A_Boolean*samePB);
```

CS6中的新功能。比较两个不同的状态，使用上述PF_GetCurrentState`检索。

### PF_HasParamChanged

PFParamUtilsSuite3`中不再支持。

```cpp
PF_HasParamChanged(
PF_ProgPtreffect_ref,
constPF_State*stateP,
PF_ParamIndexparam_index,
PF_Boolean*changedPB);
```

给定一个PF_State，如果任何测试的参数与保存的状态不同，则传回true。与名字相反的是，该调用不提供测试单个参数的方法。至少，所有的非层级参数将被测试。如果要测试一组特定的参数，请使用下面的PF_HaveInputsChangedOverTimeSpan来代替更精细的粒度。

param_index的预定义常量如下。

> - PF_ParamIndex_CHECK_ALL` - 检查每个参数，包括由层参数提到的每个层。
> - PF_ParamIndex_CHECK_ALL_EXCEPT_LAYER_PARAMS` - 省略所有层。传递一个特定的层参数索引，将其作为唯一被测试的层参数。

### PF_HaveInputsChangedOverTimeSpan

PFParamUtilsSuite3`中不再支持。使用PF_AreStatesIdentical()`代替。

### PF_IsIdenticalCheckout

```cpp
PF_IsIdenticalCheckout(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
A_longwhat_time1,
A_longtime_step1,
A_u_longtime_scale1,
A_longwhat_time2,
A_longtime_step2,
A_u_longtime_scale2,
PF_Boolean*identicalPB);
```

如果一个参数的值在两个传递的时间内是相同的，返回TRUE`。注意：时间不需要是连续的；中间可能有不同的值。

### PF_FindKeyframeTime

```cpp
PF_FindKeyframeTime(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
A_longwhat_time,
A_u_longtime_scale,
PF_TimeDirtime_dir,
PF_Boolean*foundPB,
PF_KeyIndex*key_indexP0,
A_long*key_timeP0,
A_u_long*key_timescaleP0);
```

在参数流中搜索(按指定方向)下一个关键帧。后面三个参数是可选的。

### PF_GetKeyframeCount

```cpp
PF_GetKeyframeCount(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
PF_KeyIndex*key_countP);
```

返回参数流中的关键帧的数量。

### PF_CheckoutKeyframe

```cpp
PF_CheckoutKeyframe(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
PF_KeyIndexkey_index,
A_long*key_timeP0,
A_u_long*key_timescaleP0,
PF_ParamDef*paramP0);
```

从我们的关键帧数据库中检查指定参数的关键帧，param_index为零。你可以要求时间、时间尺度，或者两者都不要求；如果你要执行你自己的运动模糊，那就很有用。

### PF_CheckinKeyframe

```cpp
PF_CheckinKeyframe(
PF_ProgPtreffect_ref,
PF_ParamDef*paramP);
```

所有对PF_CheckoutKeyframe的调用都必须与这个Check-in相平衡，否则会带来痛苦。

### PF_KeyIndexToTime

```cpp
PF_KeyIndexToTime(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
PF_KeyIndexkey_indexP,
A_long*key_timeP,
A_u_long*key_timescaleP);
```

返回指定关键帧的时间(和时间尺度)。