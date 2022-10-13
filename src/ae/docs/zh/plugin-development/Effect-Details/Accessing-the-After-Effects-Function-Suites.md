---
title: Accessing the After Effects Function Suites
order: 4
category:
  - AE 插件开发
---

# Accessing the After Effects Function Suites

如果你在写 C++代码，访问套件应该使用 AEFX_SuiteScoper 来完成，它在需要时自动获取套件，完成后自动处理。

下面是一个使用 AEFX_SuiteScope 来访问 PF_GPUDeviceSuite1 套件的例子。

```cpp
AEFX_SuiteScoper<PF_GPUDeviceSuite1> gpu_suite = AEFX_SuiteScoper<PF_GPUDeviceSuite1>(
 in_dataP,
 kPFGPUDeviceSuite,
 kPFGPUDeviceSuiteVersion1,
 out_dataP);

```

::: tip

AEFX_SuiteScoper 将抛出一个异常，`A_Err_MISSING_SUITE`，如果请求的套件不能被获取，并且可选的第二个模板参数，`ALLOW_NO_SUITE`，被设置为 false。如果你将`ALLOW_NO_SUITE'设置为false，请确保你用一个try/catch包装器来包装`AEFX_SuiteScoper<>`调用。如果`ALLOW_NO_SUITE'被设置为 true，那么你应该在使用前检查返回的指针是否为 NULL。

:::

一旦你有了这个套件，你就可以对套件列表中的任何函数进行调用，所以。

```cpp
gpu_suite->GetDeviceInfo(in_dataP->effect_ref, extraP->input->device_index, &device_info);

```

如果你必须使用 C 代码，那么使用`PF_Suite_Helper`工具文件手动获取和释放套件，如 Checkout 示例项目中所展示的。

在幕后，这两种方法都使用`AcquireSuite`获取 PICA 函数套件，这是`PF_InData`中指向的`SPBasicSuite`的一个成员函数。

## Suite Versions

WhizBangSuite1 可以提供一个 Foobar()函数，它需要两个参数，而 WhizBangSuite2>Foobar()可能需要三个。虽然一个套件的每个新版本都会取代旧版本，但请随意获取同一套件的多个版本；我们从不删除或改变以前交付的套件。

当不确定插件主机的能力时(除了 Premiere 之外，没有第三方主机支持 PICA)，尝试获取最新的版本，并 "回退 "到以前的版本。如果你需要的功能不可用，就向用户发出警告，并返回一个错误(或者在更 "原始 "的插件主机中运行时返回到其他行为)。请注意，在其他 After Effects 插件主机中对这些套件的支持是一个由曲折的洞穴和通道组成的迷宫，都是一样的。

## Threading

除非另有记录，否则请假设我们的套件提供的任何功能都不是线程安全的。例如，只有你的插件的主线程应该做任何修改用户界面的事情。
