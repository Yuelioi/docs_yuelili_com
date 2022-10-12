---
title: Apple Silicon Support
order: 16
category:
  - AE 插件开发
---

# Apple Silicon Support

Adobe现在支持一些在苹果硅上原生运行的产品中的苹果硅效果插件。例如，After Effects的效果插件在Adobe Premiere Pro和Adobe Media Encoder中也可用。

并非所有的Adobe产品都有原生的Apple Silicon版本，但在那些产品中，只有具有Apple Silicon实现的效果插件才可用。我们建议尽快添加Apple Silicon目标，以期待这些新的M1机器的快速采用。

:::tip

为了建立一个Mac通用二进制文件，你将需要Xcode 12.2或更高版本。Adobe目前正在使用Xcode 12.4。
:::
要了解更多关于通用二进制文件的信息，请访问<https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary>。

## How to add Universal Binary Support for your Plugins

1. 在12.2或以上版本中打开您的插件Xcode项目，Xcode将自动为您添加一个Apple Silicon目标。

![.../_images/mac_universal_build.png](.../_images/mac_universal_build.png) 2.告诉After Effects的苹果硅构建的主要入口点是什么。

> - 找到你的插件的.r资源文件。
> - 在你现有的Intel Mac入口点定义旁边添加`CodeMacARM64 {"EffectMain"}`。
>
> ``cpp
> #if defined(AE_OS_MAC)
> CodeMacARM64 {"EffectMain"},
> CodeMacIntel64 {"EffectMain"},
> #endif
>
> ```
>
> - 如果由于某种原因，你在x64和ARM上需要不同的入口点，只需提供不同的入口点名称和字符串。

3. 3. 通过为任何Mac（Apple Silicon, Intel）目标构建，或通过使用产品->存档，编译通用二进制文件。

假设Apple Silicon的编译时间没有问题，你现在可以将单一的通用二进制文件用于Intel和Apple Silicon应用程序。

## Exception Behavior with Apple Silicon Across “C” Functions

在Apple Silicon上使用异常时应特别小心。在许多环境中，抛出通过传统 "C "函数传播的异常，效果很好。这是不好的做法，有未定义的行为，但通常是 "有效的"。

在Apple Silicon上，ABI已经改变了，所以当这种情况发生时，会调用terminate()，而不是未定义的行为。

由于一个插件的主要入口点总是一个外部 "C "的调用约定，这段代码应该被包裹在一个try/catch块中，以防止程序终止。比如说。

```cpp
PF_Err EffectMain ( PF_Cmd cmd,
 PF_InData *in_data,
 PF_OutData *out_data,
 PF_ParamDef *params[],
 PF_LayerDef *output )
{
 try
 {
 /* Your code here */
 }
 catch
 {
 /* return most appropriate PF_Err */
 }
}

```