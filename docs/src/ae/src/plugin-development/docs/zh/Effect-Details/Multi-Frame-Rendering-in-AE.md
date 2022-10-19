---
title: Multi-Frame Rendering in AE
order: 2
category:
  - AE 插件开发
---

# Multi-Frame Rendering in AE

为了利用具有更多 CPU 核心和线程的现代硬件，After Effects 2022 及以上版本现在支持多帧渲染。多帧渲染(MFR)允许多帧同时渲染，从而加快了 AE 合成的渲染和输出。

第三方特效可以通过 AE 特效 SDK 设置以下 PF_OutFlag 来实现对多帧渲染的支持。

```cpp
PF_OutFlag2_SUPPORTS_THREADED_RENDERING

```

这个标志表示该效果支持在多个线程上并发渲染。一个图层上的这个效果的单个或多个应用可以在多个线程上同时被调用渲染。在这个标志被设置之前，效果必须是线程安全的。更多信息请参见下面的[What does it mean for an effect to be thread-safe?] 部分。

::: tip

当 After Effects 使用多帧渲染时，一个不具有线程安全的效果，如果没有设置这个标志，将迫使每个渲染线程一次进入和退出效果代码。这将大大降低 MFR 提供的性能改进，因此在效果控制窗口中会显示一个警告图标，提醒用户注意性能影响。

:::

对于在渲染过程中需要写入 sequence_data 的效果，为了向后兼容，可以使用一个标志。

```cpp
PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER

```

每个渲染线程都有自己的 sequence_data 实例，不与其他渲染线程共享或同步。如果存储在 sequence_data 中的数据计算起来很费时，应该利用新的[Compute Cache For Multi-Frame Rendering](#compute-cache)。

::: tip

使用`PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER`标志需要根据 2021 年 3 月的 SDK 或更高版本进行编译。

:::

## Multi-Frame Rendering Effect Updates with March 2021 SDK

2021 年 3 月的 SDK 引入了新的`sequence_data`行为，从 AE beta builds 22.0x6(2021 年 6 月 29 日发布)开始启用。任何用 2020 年 6 月的 SDK 编译的效果必须用 2021 年 3 月的 SDK 重新编译以支持多帧渲染。虽然建议使用 SDK 常量 PF_AE_PLUG_IN_VERSION 和 PF_AE_PLUG_IN_SUBVERS 来自动设置相关的 SDK，但特效也必须向 AE 报告它们至少是用 13.25 版本编译的。

下表概述了一个效果为支持新的行为所需要做的改变。

| **MFR & Sequence Data Usage**                                                                                      | **Changes Needed with March 2021 SDK**                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Plugin does not set PF_OutFlag2_SUPPORTS_THREADED_RENDERING                                                        | No changes needed. Effect and sequence_data will continue to work as it did in the past.                                                                                                                                                                                                                                                                                                                                                                |
| Plugin sets PF_OutFlag2_SUPPORTS_THREADED_RENDERING but neither reads nor writes to sequence_data during Render    | Recompile the plugin with the March 2021 SDK, no other code changes are required.                                                                                                                                                                                                                                                                                                                                                                       |
| If the plugin is not compiled with the March 2021 SDK, the plugin will stop utilizing MFR starting with AE 22.0x6. |                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Plugin sets PF_OutFlag2_SUPPORTS_THREADED_RENDERING but only reads sequence_data during Render                     | Recompile the plugin with the March 2021 SDK, update reading sequence_data via `PF_EffectSequenceDataSuite1` for thread-safe access. See [Accessing sequence_data at Render Time with Multi-Frame Rendering](global-sequence-frame-data.html) for more information.                                                                                                                                                                                     |
| Plugin sets PF_OutFlag2_SUPPORTS_THREADED_RENDERING and reads and writes to sequence_data during Render            | Recompile the plugin with the March 2021 SDK and modify the plugin to:`<br />`1. Utilize the[Compute Cache API](compute-cache-api.html) for thread-safe cache access instead of reading/writing to sequence_data directly. See [Compute Cache For Multi-Frame Rendering] for more information.`<br />`AND / OR `<br />`2. Add the `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` to the effect to restore direct read/write access to sequence_data. |

::: tip

使用 2021 年 3 月的 SDK 编译的效果，并使用 PF_OutFlag2_SUPPORTS_THREADED_RENDERING 标志，以及 PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER 标志，将与从 18.0 开始的 After Effects beta 版本一起工作，当时引入了`PF_EffectSequeceDataSuite1`。如果你需要支持两种 sequence_data 行为，请检查这个套件是否存在。

:::

## Implications to Command Selectors with Multi-Frame Rendering

UI 选择器仍然在主线程上发送，然而`PF_Cmd_SEQUENCE_SETUP`、`PF_Cmd_SEQUENCE_RESETUP`、`PF_Cmd_SEQUENCE_SETDOWN`、`PF_Cmd_SMART_PRE_RENDER`、`PF_Cmd_RENDER`和`PF_Cmd_SMART_RENDER`可能在处理 UI 选择器的同时在多个线程上发送，因此所有这些选择器必须是线程安全。

`PF_Cmd_GLOBAL_SETUP`和`PF_Cmd_GLOBAL_SETDOWN`选择器将只在主线程上发送，不会与任何其他选择器同时发送。

## Sequence Data in Multi-Frame rendering

`sequence_data`对象和相关的序列选择器多年来一直被用来提供一种在效果生命周期内存储数据的方法。多帧渲染引入了一些需要注意的变化。

**2020 年 6 月起的变化\***

- 多帧渲染需要 After Effects 将 "序列数据 "传递给渲染线程。为了使具有`sequence_data'的效果能够有效地使用`PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING'标志进行扁平化，这些效果现在也必须设置`PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA'标志。

::: tip

在未来的 After Effects 版本中，将强制要求设置`PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA`标志，并在插件中处理相关的选择器。在加载任何不符合这一要求的效果时，将添加一个警告对话框。

:::

**从 2021 年 3 月起的变化 **

- 在渲染时，"sequence_data "对象现在是常数，应该通过 "PF_EffectSequenceDataSuite "接口访问。
- 默认情况下，在渲染时写入`seqeunce_data`是禁用的，如果在渲染时试图写入`sequence_data`，结果将无法定义。
- 如果一个效果必须在渲染时写入 sequence_data，它必须设置`PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER`标志，这将告诉 After Effects 允许写入`sequence_data`，但这将牺牲性能。当渲染开始时，"sequence_data "对象将被复制到每个渲染线程，每个渲染线程将有自己独立的 "sequence_data "副本，在渲染过程中进行管理。出于性能考虑，最好利用[Compute Cache For Multi-Frame Rendering]来写入效果所需的任何数据。

## Compute Cache For Multi-Frame Rendering

计算缓存提供了一个线程安全的缓存，作为序列数据的替代或补充，效果可以在 Render 之前或期间计算、存储和读取数据。

### When would you use the Compute Cache?

- 如果你的效果使用`sequence_data`并且需要在 Render 过程中写入或更新`sequence_data`，你应该使用计算缓存，特别是当所需数据的计算很耗时时。
- 如果没有计算缓存，效果将需要添加`PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER`标志，这将为每个渲染线程创建唯一的 sequence_data 副本。然后，每个渲染线程可能需要独立地进行耗时的计算，并且无法在渲染线程之间共享结果。
- 通过使用计算缓存，渲染线程可以分享计算数据的任务，并从已经计算过的数据中获益。
- 根据效果的需要，计算缓存 API 支持单核和多核的计算任务。参见[计算缓存 API](compute-cache-api.html)文档以了解更多信息。

### How do I enable the Compute Cache?

计算缓存 API 从 2021 年 3 月的 SDK 中开始提供，在 After Effects 2022 及以上版本中默认启用该套件。

参见[Compute Cache API](compute-cache-api.html) 文档，了解实施细节和示例代码。

## What does it mean for an effect to be thread-safe?

**当实现和共享数据被保证不存在竞赛条件，并且在并发访问时总是处于正确的状态时，一个效果就是线程安全的**。

更具体地说，该效果。

1. 没有静态变量或全局变量，或有静态变量或全局变量，但不存在竞赛条件。
2. 2.在渲染时不向`in_data->global_data`写入。可以进行读取。只在`PF_Cmd_GLOBAL_SETUP`和`PF_Cmd_GLOBAL_SETDOWN`中写入。
3. 在渲染时或`PF_Cmd_UPDATE_PARAMS_UI`事件中不向`in_data->sequence_data`写入。读取可以通过 PF_EffectSequenceDataSuite 接口完成。

::: tip

如果一个效果使用了任何阻塞性的同步机制，例如互斥或门，那么在回调到主机时，这些机制必须不被保留。常见的调用是在使用一个套件或进行结帐调用时。如果不这样做，很可能会导致死锁。

:::

## How to locate the static and global variables in your effects

为了帮助你定位你的效果中的静态变量和全局变量，我们开发了一个**静态分析工具**供你使用。
你可以在这个 Git Repo 中找到这个工具。[https://github.com/adobe/ae-plugin-thread-safety](https://github.com/adobe/ae-plugin-thread-safety)

如果你在 Mac 上开发：1. 在上面提供的 URL 中克隆/下载 Git Repo 2. 在**Mac**文件夹中找到 bash 脚本`check_symbols_for_thread_safety.sh` 3. 在插件或效果的包内容中导航，找到二进制文件。(例如，**Curves.plugin**的二进制文件在这里。`/Applications/Adobe After Effects [your AE version]/Plug-ins/Effects/Curves.plugin/Contents/MacOS/Curves`) 4.要分析二进制文件，运行。

```cpp
check_symbols_for_thread_safety.sh [Binary location]
For example, check_symbols_for_thread_safety.sh /Applications/Adobe After Effects [your AE version]/Plug-ins/Effects/Curves.plugin/Contents/MacOS/Curves)

```

5. 你会看到该工具的输出是这样的格式。

```cpp
[symbol type]; [symbol name]

```

6. `[符号类型]`是一个区分大小写的字母，表示变量的类型。你可以在这里找到所有的类型信息。[https://linux.die.net/man/1/nm](https://linux.die.net/man/1/nm)
7. 下面是一个输出的例子。

```cpp
b; Deform::FindSilEdges()::new_kInfinite

```

> `b`显示这个符号在未初始化的数据部分，这表明它可能是一个静态变量。
>
> `Deform::FindSilEdges()::new_kInfinite`是符号名称，其中`Deform`是变量所在的名字空间的名称。
>
> `FindSilEdges()`是该变量所在的函数名称。
>
> `new_kInfinite`是实际的变量名称。名称空间和函数名称可能不会根据变量所在的位置来显示。

8. 8. 在你的代码中搜索每个符号，修复它(见[这里]中的方法)，并对你的解决方案中的每个二进制文件进行重复。

如果你在 Windows 上开发。
**1. 准备**0. **为了运行这个工具，你需要安装 Visual Studio**。

1. 克隆/下载上面提供的 URL 中的 Git Repo
2. 在**Win**文件夹中找到`register_msdia.cmd`脚本。
3. 从**开始菜单中搜索**"x64 Native Tools Command Prompt for VS.... "\*\*。
4. 右击 -> 以管理员身份运行
5. 在终端，`cd`到`register_msdia.cmd`所在的目录。
6. 运行`.\register_msdia.cmd`。
7. 这个脚本将为你注册**DIA SDK**和其他一些必要的依赖项
8. 静态分析器应该可以工作了

**2. 使用 Windows 静态分析器**1. 在**Win**文件夹中找到可执行文件`CheckThreadSafeSymbols.exe` 2. 在**调试**模式下编译你的效果，找到其**.pdb**文件 3. 如果你没有修改你的项目构建设置，你也应该在同一个构建目录中找到一些**.obj**文件 4. 你有两个选择\*\*扫描什么：二进制文件或源文件，使用`-objfile`或`-source`标志。

> - \*\*你可以从任何一个选项中获得相同的符号。
> - 如果你不知道你的源代码最终会出现在什么二进制文件中，或者你想在每个源文件的基础上跟踪线程安全，请使用`-source`选项。
> - 如果你想更精细地控制你的项目的哪些部分被扫描，请使用`-objfile`选项。

5. 要分析一个对象文件中的符号，请运行。

```cpp
CheckThreadSafeSymbols.exe -objfile [absolute path to the binary you want analyzed] [absolute path to .pdb]

```

6. 要分析源文件中的符号，请运行。

```cpp
CheckThreadSafeSymbols.exe -source [absolute path to the source file you want analyzed] [absolute path to .pdb]

```

7. 全局变量并不局限于 pdbs 中的一个文件或二进制文件的范围，所以你必须检查所有项目的全局变量列表，而不需要过滤。使用-g 输出来获得所有的列表。

```cpp
CheckThreadSafeSymbols.exe -g [absolute path to .pdb]

```

8. 如果你不确定你的效应输出的是什么二进制文件，该工具也可以输出一个**(noisy)**的二进制文件列表，以及每个二进制文件提取数据的源文件。你修改过的文件可能会在最上面的位置。要看到这个列表，请运行。

```cpp
CheckThreadSafeSymbols.exe -sf [absolute path to .pdb]

```

9. 输出的符号将采取以下形式。

```cpp
[Symbol name], [Symbol type], [Datakind], ([Section type of data location], [Binary Address][Binary Address Offset])

```

10. 下面是一个输出的例子。

```cpp
menuBuf, Type: char[0x1000], File Static, (static, [0008FCD0][0003:00001CD0])

```

> `menuBuf`是实际的变量名称。
>
> `类型：char[0x1000]`显示它是什么类型的变量。这里的数据是一个`char'。
>
> `File Static`显示它是什么类型的数据。这里的数据是一个**文件范围的静态变量。**你可以在这个页面上找到所有的数据种类和它们的含义[https://docs.microsoft.com/en-us/visualstudio/debugger/debug-interface-access/datakind?view=vs-2019](https://docs.microsoft.com/en-us/visualstudio/debugger/debug-interface-access/datakind?view=vs-2019)
>
> `static`表明该数据在内存的静态部分。
>
> `[0008FCD0][0003:00001CD0]`显示数据的二进制地址和二进制地址偏移。

11. 在你的代码中搜索每个符号，修复它(关于如何修复，见[这里])，并对你的解决方案中的每个二进制/源文件进行重复。

## What to do if you have static and globals in your effects

当你看到一个静态或全局变量时，如果可能的话，最好是把它变成一个局部变量。但如果这个变量必须是静态或全局的呢？

下面是一些处理静态或全局变量的标准方法：\*\*1. 是否可以在不改变行为的情况下，在函数之间轻松地传递数据呢？

> ``cpp
> // 非线程安全代码的例子
>
> static int should_just_be_local;
>
> void UseState() {
> DoComputation(should_just_be_local)。
> }
>
> void SetAndUseState() {
> should_just_be_local = DoComputation();
> UseState()。
> }
>
> ```
>
> **要么把它添加到一个结构中，要么扩展函数参数以包括它**。
>
> ``cpp
> // 我们可以通过函数参数传递should_just_be_local变量来修复上面的代码
>
> void UseState(int should_just_be_local) {
> DoComputation(should_just_be_local)。
> }
>
> void SetAndUseState() {
> int should_just_be_local = DoComputation();
> UseState(should_just_be_local)。
> }
>
> ```

**2. 能否在执行代码前对数据进行初始化(如查找表、常量变量)？ **

> ``cpp
> // 非线程安全代码的例子
>
> // 代码中的许多地方需要读取这个表，但不会写到这个表上
> static int state_with_initializer[64];
>
> 静态 bool state_was_initialized = false。
>
> void InitializeState() {
> for (int i = 0; i < 64; ++i) {
> state_with_initializer[i] = i \* i;
> }
> state_was_initialized = true。
> }
>
> void Main() {
> if (!state_was_initialized) {
> InitializeState()。
> }
> DoComputation(state_with_initializer)。
> }
>
> ```
>
> **使之成为** `const` **或用宏代替它**
>
> ``cpp
> std::array<int, 64> InitializeState() {
>
> std::array<int, 64> temp;
>
> for (int i = 0; i < 64; ++i) {
> temp[i] = i * i;
>  }
> 返回temp。
> }
>
> // 我们可以把这个表变成一个常量，并在使用前对其进行初始化，从而解决上述代码的问题
> static const std::array<int, 64> state_with_initializer = InitializeState();
>
> void Main() {
> DoComputation(state_with_initializer)。
> }
>
> ```

**3. 数据是否在运行时初始化一次，基于在后续渲染中不会改变的数据？ **

> ``cpp
> // 非线程安全代码的例子
> static int depends_on_unchanging_runtime_state。
>
> void UseState() {
> DoComputation( depends_on_unchanging_runtime_state)。
> }
>
> void SetAndUseState() {
> depends_on_unchanging_runtime_state = DoComputationThatNeedsStateOnlyOnce()。
> UseState()。
> }
>
> ```
>
> **仔细检查，在你的代码执行之前，这个状态是不知道的(情况2)，但是如果你必须在运行时初始化，请使用一个常态静态局部。(::提示，静态局部对象的线程安全初始化是C++规范的一部分)**
>
> ``cpp
> void UseState(int depends_on_unchanging_runtime_state) {
> DoComputation( depends_on_unchanging_runtime_state)。
>  }
>
> void SetAndUseState() {
>
> // 我们可以通过把变量变成一个静态的本地常量来修复上面的代码
> static const int depends_on_unchanging_runtime_state = DoComputationThatNeedsStateOnlyOnce();
>
> UseState( depends_on_unchanging_runtime_state)。
> }
>
> ```

\*\*4. 数据必须保持静态/全局，而不是一个常量。但每个渲染线程可以有自己的数据副本。

> ``cpp
> // 这个变量必须是静态的而不是常量的。
> static int this_thread_needs_access;
>
> void SetState(int new_state) {
> this_thread_needs_access = new_state。
> }
>
> void UseState() {
> DoComputation(this_thread_needs_access)。
> }
>
> ```
>
> **只要让变量thread_local**。
>
> ``cpp
> //使这个变量成为线程_本地变量
> thread_local static int this_thread_needs_access;
>
> void SetState(int new_state) {
> this_thread_needs_access = new_state。
> }
>
> void UseState() {
> DoComputation(this_thread_needs_access)。
> }
>
> ```

**5. 数据必须保持静态/全局而不是常量，每个线程都需要从最新的状态中读写。(罕见)**

> ``cpp
> // 这个变量必须是静态的而不是常量的。
> // 它还需要在几个线程之间共享
> static int every_thread_needs_latest_state;
>
> void SetState(int new_state) {
> every_thread_needs_latest_state = new_state。
> }
>
> void UseState() {
> DoComputation(every_thread_needs_latest_state)。
> }
>
> ```
>
> **在这种情况下，用一个mutex来保护访问。
>
> ``cpp
> // 添加一个mutex(锁)
> static std::mutex ex_lock;
>
> static int every_thread_needs_latest_state;
>
> void SetState(int new_state) {
>  {
> // 用mutex(锁)保护访问。
> std::lock_guard<std::mutex> lock(ex_lock)。
> every_thread_needs_latest_state = new_state。
>  }
> }
>
> void UseState() {
> int state_capture。
>  {
> // 用mutex(锁)来保护访问。
> std::lock_guard<std::mutex> lock(ex_lock)。
> state_capture = every_thread_needs_latest_state。
>  }
> DoComputation(state_capture);
> }
>
> ```

::: tip

\*\*以上的例子是我们在效果中看到的常见情况。你可以随时想出其他方法来处理你的静态和全局，以最适合你的需要。

:::

## Setting an Effect as Thread-safe

- 在 GlobalSetup 中设置`PF_OutFlag2_SUPPORTS_THREADED_RENDERING`标志，告诉 After Effects 你的效果是线程安全的，支持多帧渲染。
- 如果需要，添加`PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER`以允许在 Render 阶段写入 sequence_data。
- 更新`AE_Effect_Global_OutFlags_2`魔法数字。在不改变魔法数字的情况下第一次用你的效果启动 AE，应用你的效果，AE 会给你一个正确的数字来输入。
- 如果你使用`PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING`标志，记得也要设置`PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA`标志。

## How to test whether an effect is Thread-Safe

一旦你完成了上述步骤，使你的效果成为线程安全的，你现在应该准备做一些测试。

### Enable Multi-Frame Rendering

- 多帧渲染在 After Effects 2022 中是默认启用的。
- 要打开或关闭多帧渲染，请导航到首选项>内存和性能>性能，然后切换多帧渲染复选框。

### Test your effect

一旦你完成了上述准备步骤，请彻底测试你的效果。你应该能够测试简单和复杂的合成，并看到性能的改善，因为效果利用了多帧渲染。

- 仔细检查你现有的所有手动和自动测试计划。
- 测试所有的效果参数，确保它们能正常工作。
- 适当地加入一些已经被做成线程安全的 AE 效果。参见[线程安全的第一方效果]部分。
- 确保在启用多帧渲染时，不会出现崩溃、挂起、渲染差异或其他意外变化。

## Thread-Safe First Party Effects

请访问[https://helpx.adobe.com/after-effects/user-guide.html/after-effects/using/effect-list.ug.html](https://helpx.adobe.com/after-effects/user-guide.html/after-effects/using/effect-list.ug.html)了解 MFR 支持的效果的完整列表。每周都会有更多的效果加入。
