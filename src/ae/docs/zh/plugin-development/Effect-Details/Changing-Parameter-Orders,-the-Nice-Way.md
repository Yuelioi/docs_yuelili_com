---
title: Changing Parameter Orders, the Nice Way
order: 20
category:
  - AE 插件开发
---

# Changing Parameter Orders, the Nice Way

从一个插件中增加或删除参数是可能的，而不会迫使用户重新应用该插件的所有实例来使用更新的版本。然而，你有必要提前做一些计划，以允许这种改变。你的用户（和技术支持人员）将感谢你的努力。

你必须首先创建一个参数阵列索引。在_PF_Cmd_PARAM_SETUP_期间，当你添加每个参数时，使用一个简单的枚举法为它们分配索引值。枚举的顺序与在_PF_Cmd_PARAM_SETUP_期间注册参数的顺序相对应，这反过来又决定了它们在效果控制和时间线面板中出现的顺序。

为磁盘ID创建另一个枚举。这个枚举的顺序不能被改变，尽管你可以在这个列表的末尾添加。请注意，这个列表的顺序不需要与参数阵列的索引相对应。参数盘的ID应该在1到9999之间。为什么不是零？说来话长...

_在After Effects插件编程的早期 "狂野西部 "时代，开发者不屑于设置ID的情况相当普遍。After Effects意识到这一点，就会检查该效果所添加的第一个参数的ID；如果是0，就认为程序员没有费心去设置参数的ID；After Effects就会给每个参数分配自己的ID。如果你从不设置参数的ID，这个假设就很好用，但如果你开始从NULL开始给你的ID编号，就不太妙了。这就是为什么._

在调用PF_ADD_PARAM()之前，在PF_ParamDef.uu.id字段中指定磁盘ID。如果没有指定值，After Effects会使参数从1开始顺序排列，参数的信息在保存时被标记为这个ID。通过这种方式，After Effects仍然可以理解，尽管你的 "Foobarocity "滑块现在是传递的第四个参数，但它与第二个参数时是同一个参数。

要删除一个参数而不强迫重新应用，可以删除创建它的代码和它在参数阵列索引列表中的条目。但是，_不要删除它在磁盘ID列表中的条目。要添加一个新的参数，在参数阵列索引列表的适当位置添加一个条目，添加参数创建代码，并将磁盘ID添加到磁盘ID枚举的最后。要重新排序，请改变参数阵列索引列表并适当地重新排列参数创建代码。

## Change defaults? Change IDs

如果你不这样做，如果有人用旧的默认值保存一个项目，然后在安装了新的效果后再读进去，该参数就会变成新的默认值。

Presto! 即时支持电话。

这是 "PF_ParamFlag_USE_VALUE_FOR_OLD_PROJECTS "的另一个主要用例，来自[Parameter Flags]（.../effect-basics/PF_ParamDef.html）（#effect-basics-pf-paramdef-parameter-flags）。