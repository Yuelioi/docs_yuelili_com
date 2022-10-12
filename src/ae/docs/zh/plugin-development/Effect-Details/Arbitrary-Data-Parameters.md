---
title: Arbitrary Data Parameters
order: 14
category:
  - AE 插件开发
---
# Arbitrary Data Parameters

有些数值不能被After Effects现有的参数类型所充分体现。你可以通过创建任意数据类型的参数，或 "arb数据"，来创建和注册After Effects的任何数据进行插值。你可以依靠我们的插值引擎和参数管理，而不必将你的数据强行放入一个预先定义的参数类型。

我们已经为自定义数据类型创建了一个新的信息传递结构，它很容易被概念化为C++类的成员（和朋友）函数。如果你使用arb数据，你必须对这里详述的所有选择器做出回应。

这些函数处理自定义数据结构的管理。你的arb数据将在用户的要求下被卸载和重新加载；提供磁盘安全的flatten和unflatten函数。

## Arbitrary Data Selectors

| **Selector** | **Response** |
|--- | --- |
| PF_Arbitrary_NEW_FUNC ` | Allocate, populate, and return a handle to a new instance of your arb data. | | PF_Arbitrary_DISPOSE_FUNC` | Free and destroy an instance of your arbitrary data type. |
| PF_Arbitrary_COPY_FUNC ` | Make a copy of an existing instance. You will be passed two handles, but only the source handle contains a valid instance. You must create a new instance, copy the values from the source, and put it in the destination handle. If you are passed a NULL handle, create a default instance of your arb data. | | PF_Arbitrary_FLAT_SIZE_FUNC` | You’ll be passed a handle to an instance of your data type, and a variable in which you return the size of a flattened version of that instance. |
| PF_Arbitrary_FLATTEN_FUNC ` | Flatten the instance you’re passed, and place it in the supplied buffer. The buffer will be the size you reported in response to PF_Arbitrary_FLAT_SIZE_FUNC. | | PF_Arbitrary_UNFLATTEN_FUNC` | Unpack the buffer into an instance of your arbitrary data type, and put in the handle which you’ve been passed. |
| PF_Arbitrary_INTERP_FUNC ` | Your interpolation function is passed three handles to instances of your arbitrary data type; one containing initial values (0), one final values (1), and a third to hold your interpolated data (somewhere between 0 and 1). You are also passed a float indicating where, between 0 and 1, your interpreted value should be.<br />Allocate an instance and fill it with interpolated data. Then put the interpolated instance into the handle you’ve been passed. The velocity curves have already been accounted for when the normalized time value was calculated.<br />NOTE: Never check out parameters if the[in_data&gt;effect_ref](https://ae-plugins.docsforadobe.dev/effect-basics/PF_InData.html#effect-basics-pf-indata-pf-indata-members) is NULL. | | PF_Arbitrary_COMPARE_FUNC` | You are passed two instances of your arbitrary data, and a pointer to a comparison result. Populate the result with one of the values for PF_ArbCompareResult (see AE_Effect.h) to indicate whether the first was equal to, less than, more than, or simply not equal to the second. |
| PF_Arbitrary_PRINT_SIZE_FUNC ` | Indicate the buffer size you require for printing your parameter’s current values by setting print_sizePLu (member of print_size_func_params, part of the PF_ArbParamsExtra structure). | | PF_Arbitrary_PRINT_FUNC` | Format your arbitrary data for text-based export, and copy the result to the buffer. This can be as elaborate as you would like. Your plug-in should emulate the cut-and-paste behavior for pasting text representations of parameter settings (into a Microsoft Excel spreadsheet, for example) displayed by the plug-ins shipped with After Effects. You have a great deal of flexibility in how you format your output. |
| PF_Arbitrary_SCAN_FUNC` | Given a buffer of text data (often from the system clipboard), parse it into your arbitrary data format. |

## Implementing Arbitrary Data

除了正常的命令和事件选择器外，arb数据还需要另一套主机交互。这对其他参数类型来说是透明的，因为After Effects管理着它们的代表数据。编写一个arb数据插件可以让你深入了解After Effects执行的大量参数管理，以及这些管理动作的发生顺序。它甚至会让你重新考虑你的实现，并使用After Effects为你管理的参数类型。

实例化你的arb数据（当然，使用After Effects的内存分配功能），并将ParamDef.u.arb_d.dephault指向它。用适当的默认值来填充它。设置参数时不需要数值变量，为安全起见，将其清零。

在你的插件的入口函数中，包括一个处理[PF_Cmd_ARBITRARY_CALLBACK](.../effect-basics/command-selectors.html) (#effect-basics-command-selectors-messaging) 的案例。

调用一个二级事件处理程序，`HandleArbitrary`。它收到一个`PF_ArbParamsExtra`的extra，它又包含一个`PF_FunctionSelector`，用来识别发送的命令。

也许After Effects发送了`PF_Cmd_ARBITRARY_CALLBACK`，`PF_FunctionSelector`是`PF_Arbitrary_COPY_FUNC`。在`PF_ArbParamsExtra.copy_func_params`中提供了指向源Arb和目标Arb的指针。分配一个新的Arb，并将`dest_arbPH`指向它。如果`src_arbH`是NULL，为`dest_arbPH`创建一个默认的Arb。

用户可以在时间线面板中选择arb的关键帧数据，复制它，然后切换到另一个应用程序。你将收到一个`PF_Arbitrary_PRINT_SIZE_FUNC`；通过在`PF_ArbParamsExtra`中设置`print_sizePLu`来设置输出缓冲器的大小。然后你会收到`PF_Arbitrary_PRINT_FUNC'；用有关Arb的文本表示来填充`print_bufferPC'输出缓冲区。

用户可以将关键帧数据粘贴到你的Arb的时间线上。你将收到`PF_Arbitrary_SCAN_FUNC`。根据交给你的字符缓冲区的内容创建一个Arb（其大小在`print_sizeLu`中显示）。

## Arbitrary Data? Re-Entrancy!

你的插件代码必须是递归重入的，以支持自定义的数据类型，因为它可能被After Effects调用，原因很多。你的插件可以检查出一个层，而这个层又依赖于你的效果的另一个实例。你的插件的任意数据处理代码会被你试图检出一个（看似）不相关的层所触发。注意对C语言运行时库的调用，它依赖于通过全局变量访问的静态值。如果你没有准备好应对这种情况，你会让After Effects挂掉，用户会骂人并打他们的显示器。

## When Not To Access Arbitrary Parameters

如果`in_data>effect_ref`是`NULL`，就不要检出任意的参数。

## Changes During Dialogs

After Effects忽略了在`PF_Cmd_DO_DIALOG'期间对任意数据参数的任何改变。

这是设计好的；在显示选项对话框期间的改变会影响整个效果流，而不仅仅是某一时刻的任意参数。

如果你必须根据这些变化改变你的Arb的行为，请将该信息保存在序列数据中并在以后应用，通常是在`PF_Cmd_USER_CHANGED_PARAM`期间。