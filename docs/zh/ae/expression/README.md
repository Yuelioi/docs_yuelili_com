---
title: AE表达式
category:
  - AE表达式
---
## 说明

[官方文档(英文)](https://ae-expressions.docsforadobe.dev/)

## 介绍

使用 After Effects 表达式元素和标准 JavaScript 元素来编写表达式。您可以随时使用 Expression Language 菜单将方法和属性插入到表达式中，并且您可以随时使用pickwhip 插入属性。

如果参数描述包含等号 (=) 和值（例如 t=time 或 width=.2），则如果您未指定其他值，则该参数将使用包含的默认值。

一些参数描述在方括号中包含一个数字——这个数字表示预期属性或数组的维度。

一些返回值描述在方括号中包含一个数字——这个数字指定返回的属性或数组的维度。如果不包含特定维度，则返回 Array 的维度取决于输入的维度。

W3Schools JavaScript 参考网站提供标准 JavaScript 语言的信息，包括 JavaScript Math 和 String 对象的页面。

## 变更日志

表达式有什么新变化？

---

### [After Effects 17.7](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheFebruary2021releaseversion177)（2021 年 2 月）

* 已修复：在图表编辑器中进行的表达式编辑未一致应用的问题。

---

### [After Effects 17.6](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheJanuary2021releaseversion176)（2021 年 1 月）

* 修复：使用表达式或属性pick-whip时可能导致表达式被替换而不是追加的问题。

---

### [After Effects 17.1.2](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheJuly2020releaseversion1712)（2020 年 7 月）

* 已修复：无法在 JavaScript 表达式引擎中按名称引用标记的问题。

---

### [After Effects 17.1](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheMay2020releaseversion171)（2020 年 5 月 19 日）

* 已修复：表达式编辑器自动完成“timeToFrames”功能的问题。

---

### [After Effects 17.0.5](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheMarch2020releaseversion1705)（2020 年 3 月）

* 已修复：将焦点链接到图层命令生成的表达式不适用于 JavaScript 表达式引擎的问题。

---

### [After Effects 17.0.2](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheJanuary2020releaseversion1702)（2020 年 1 月）

* 已修复：与 JavaScript 表达式中的错误相关的显示错误行号的问题。

---

### [After Effects 17.0](https://helpx.adobe.com/after-effects/using/whats-new/2020.html)（2020 年 1 月 24 日）

* 实现下拉菜单表达式控件
* 表达式编辑器改进：
  * 您现在可以使用新的滚动功能来防止在通过键入返回字符调整框大小时滚动调整不正确。
  * 如果变量以数字开头，则防止数字在自动完成列表中匹配。更智能的自动完成功能可防止覆盖右括号和引号。
  * 您现在可以缩放 Hi-DPI 显示器的字体大小。
  * 图表编辑器现在提交所有打开的图表编辑器的偏好更改。
  * 如果启用语法高亮，UI 中的折叠图标按钮现在会遵循默认和背景颜色，或行号颜色和背景颜色。
* 表达性能改进：
  * After Effects 现在尝试检测在整个合成中不会更改的表达式，并且只计算一次表达式。加载您最喜欢的充满表情的组合并体验改进的性能。
  * 任何使用[posterizeTime()](https://ae-expressions.docsforadobe.dev/global.html#global-posterizetime)的表达式现在只为整个 comp 计算一次，而不是在每一帧上。
* 补充：对文本属性的扩展表达式访问。
  * 补充：[Text.Font…](https://ae-expressions.docsforadobe.dev/text.html#text-font)
  * 补充：[原文](https://ae-expressions.docsforadobe.dev/text-sourcetext.html#sourcetext)
  * 补充：[文字样式](https://ae-expressions.docsforadobe.dev/text-style.html#textstyle)

---

### [After Effects 16.1.3](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheearlierversionsofAfterEffects)（2019 年 9 月）

* 已修复：在表达式编辑器中，新行上大括号的缩进可能不正确。

---

### [After Effects 16.1.2](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheearlierversionsofAfterEffects)（2019 年 6 月）

* 已修复：当您关闭具有包含错误的表达式的项目时，After Effects 崩溃。
* 已修复：如果要显示多行错误文本，则错误功能区中的表达式错误消息可能会被截断。
* 已修复：使用 Legacy ExtendScript 表达式引擎时，属性 this_Layer 已停止工作。
* 已修复：将项目级表达式引擎从 JavaScript 切换到旧版 ExtendScript 时发生崩溃。
* 修复：包含对 Date.toLocaleString() 的调用的表达式崩溃。
* 已修复：禁用自动完成时在图表编辑器表达式字段中编辑表达式时崩溃。

---

### [After Effects 16.1 (CC 19)](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheearlierversionsofAfterEffects)（2019 年 4 月 2 日）

* 实现了新的表达式编辑器
* 已修复：JavaScript 表达式引擎不会生成与旧版 ExtendScript 引擎相同的随机数结果。
* 固定：当表达式在字符串或源文本属性中引用图层名称时，不返回图层名称。相反，它返回 [Object]。
* 修复：如果 ScriptUI 面板读取属性的后表达式值，则[sampleImage()表达式方法返回错误值。](https://ae-expressions.docsforadobe.dev/layer-general.html#layer-sampleimage)
* 已修复：通过表达式语言菜单应用[createPath()](https://ae-expressions.docsforadobe.dev/path-property.html#pathproperty-createpath)表达式会自动将 (is_Closed) 参数填充为不推荐使用的蛇案例而不是骆驼案例 isClosed。
* 已修复：重命名由表达式引用的效果会导致表达式在这些属性与效果同名时错误地更新对该效果属性的引用。
* 已修复：将焦点距离链接到图层、将焦点距离链接到兴趣点、创建立体 3D 装备和创建空轨道命令会创建与 JavaScript 表达式引擎不兼容的表达式。
* 修复：特定复杂、多组合的表达式导致表达式错误警告横幅和图标快速闪烁。请注意，要解决此问题，这些表达式的表达式评估速度会略有下降。

---

### [After Effects 16.0 (CC 19)](https://helpx.adobe.com/after-effects/using/whats-new/2019.html)（2018 年 10 月 15 日）

* 实施了新的 Javascript 引擎
* 添加：[hexToRgb](https://ae-expressions.docsforadobe.dev/color-conversion.html#hextorgb)
* 添加：[标记 protectedRegion](https://ae-expressions.docsforadobe.dev/markerkey.html#marker-protectedregion)属性

---

### [After Effects 15.1.2](https://helpx.adobe.com/after-effects/kb/bug-fixes-in-after-effects-cc.html)（2018 年 7 月 16 日）

* 已修复：如果您的项目包含多个同名的主属性，则引用主属性的表达式计算不正确。
* 已修复：属性链接选择鞭子错误地为其他选定属性写入自引用表达式。

---

### [After Effects 15.1](https://helpx.adobe.com/after-effects/using/whats-new/2018.html#AfterEffectsCCApril2018version151release)（2018 年 4 月 3 日）

* 补充：属性链接挑鞭
* 新增：支持自定义表达式函数库
* 补充：对项目的表达式访问[](https://ae-expressions.docsforadobe.dev/project.html#project)
  * 添加：[Project.fullPath](https://ae-expressions.docsforadobe.dev/project.html#project-fullpath)
  * 添加：[Project.bitsPerChannel](https://ae-expressions.docsforadobe.dev/project.html#project-bitsperchannel)
  * 添加：[Project.linearBlending](https://ae-expressions.docsforadobe.dev/project.html#project-linearblending)

---

[After Effects 15.0 (CC)](https://community.adobe.com/t5/after-effects/expression-and-scripting-improvements-in-after-effects-october-2017-pdf/td-p/4787866)（2017 年 10 月 18 日）

* Added: Expression access to data in JSON files
  * Added: [footage sourceText](https://ae-expressions.docsforadobe.dev/footage.html#footage-sourcetext) attribute
  * Added: [footage sourceData](https://ae-expressions.docsforadobe.dev/footage.html#footage-sourcedata) attribute
  * Added: [footage dataValue](https://ae-expressions.docsforadobe.dev/footage.html#footage-datavalue) method
  * Added: [footage dataKeyCount](https://ae-expressions.docsforadobe.dev/footage.html#footage-datakeycount) method
  * Added: [footage dataKeyTimes](https://ae-expressions.docsforadobe.dev/footage.html#footage-datakeytimes) method
  * Added: [footage dataKeyValues](https://ae-expressions.docsforadobe.dev/footage.html#footage-datakeyvalues) method
* Added: Expression access to path points on masks, Bezier shapes, and brush strokes
  * Added: [path points](https://ae-expressions.docsforadobe.dev/path-property.html#pathproperty-points) method
  * Added: [path inTangents](https://ae-expressions.docsforadobe.dev/path-property.html#pathproperty-intangents) method
  * Added: [path outTangents](https://ae-expressions.docsforadobe.dev/path-property.html#pathproperty-outtangents) method
  * Added: [path isClosed](https://ae-expressions.docsforadobe.dev/path-property.html#pathproperty-isclosed) method
  * Added: [path pointOnPath](https://ae-expressions.docsforadobe.dev/path-property.html#pathproperty-pointonpath) method
  * Added: [path tangentOnPath](https://ae-expressions.docsforadobe.dev/path-property.html#pathproperty-tangentonpath) method
  * Added: [path normalOnPath](https://ae-expressions.docsforadobe.dev/path-property.html#pathproperty-normalonpath) method
  * Added: [path createPath](https://ae-expressions.docsforadobe.dev/path-property.html#pathproperty-createpath) method

---

### [After Effects 13.6（CC 2015）](https://helpx.adobe.com/after-effects/kb/ae-13-6.html)（2015 年 11 月 30 日）

* 改进了时间重映射图层上的表达式性能。这也减少了带有表达式的时间重映射层上的音频渲染时间。
* 已修复：更改文本图层的源文本不再导致在引用文本图层名称时表达式失败。
* 已修复：在处理时间重新映射表达式时显示图形编辑器时，After Effects 不再崩溃。

---

### [After Effects 13.5（CC 2015）](https://helpx.adobe.com/after-effects/kb/what-s-new-and-changed-in-after-effects-cc-2015--13-5-.html)（2015 年 6 月 15 日）

* 更高效的表达式评估
* 补充：表情警告横幅

---

### [After Effects 13.2 (CC 2014.2)](https://helpx.adobe.com/ca/after-effects/using/whats-new-2014.html)（2014 年 12 月 16 日）

* 添加：[sourceRectAtTime()](https://ae-expressions.docsforadobe.dev/layer-sub.html#layer-sourcerectattime)方法
* 修复：表达式中的[sampleImage()](https://ae-expressions.docsforadobe.dev/layer-general.html#layer-sampleimage)不再禁用多处理

---

### [After Effects 12.1 (CC)](https://helpx.adobe.com/after-effects/using/whats-new-12-1.html/)（2013 年 9 月 8 日）

* 在表达式语言菜单中添加了相机图层的光圈和高光属性
* * 添加：[Camera.irisShape](https://ae-expressions.docsforadobe.dev/camera.html#camera-irisshape)
  * 添加：[Camera.irisRotation](https://ae-expressions.docsforadobe.dev/camera.html#camera-irisrotation)
  * 添加：[Camera.irisRoundness](https://ae-expressions.docsforadobe.dev/camera.html#camera-irisroundness)
  * 添加：[Camera.irisAspectRatio](https://ae-expressions.docsforadobe.dev/camera.html#camera-irisaspectratio)
  * 添加：[Camera.irisDiffractionFringe](https://ae-expressions.docsforadobe.dev/camera.html#camera-irisdiffractionfringe)
  * 添加：[Camera.highlightGain](https://ae-expressions.docsforadobe.dev/camera.html#camera-highlightgain)
  * 添加：[Camera.highlightThreshold](https://ae-expressions.docsforadobe.dev/camera.html#camera-highlightthreshold)
  * 添加：[Camera.highlightSaturation](https://ae-expressions.docsforadobe.dev/camera.html#camera-highlightsaturation)

---

### [After Effects 10.5 (CS5.5)](https://helpx.adobe.com/ro/after-effects/user-guide.html/ro/after-effects/using/expression-language-reference.ug.html/)（2011 年 4 月 11 日）

* 添加：[Footage.ntscDropFrame](https://ae-expressions.docsforadobe.dev/footage.html#footage-ntscdropframe)
* 添加：ntscDropFrame参数到[timeToCurrentFormat()](https://ae-expressions.docsforadobe.dev/time-conversion.html#timetocurrentformat)
* 补充：[Layer.sourceTime()](https://ae-expressions.docsforadobe.dev/layer-sub.html#layer-sourcetime)

---

### [After Effects 5.5](https://en.wikipedia.org/wiki/Adobe_After_Effects#History/)（2002 年 1 月 7 日）

* 补充：通过表达式循环
* 添加：表达式控制器

---

### [After Effects 5.0](https://en.wikipedia.org/wiki/Adobe_After_Effects#History/)（2001 年 4 月）

* 首次添加的表达式

## 资源

用户“Beaver”在 Mograph 论坛上发布了[5 个将改变您生活的表达式。](http://mograph.net/board/index.php?showtopic=13954)

[Dan Ebberts 在他的MotionScript 网站](http://www.adobe.com/go/learn_ae_motionscripthome)上提供了示例表达式和教程，用于学习如何使用表达式。例如，Dan 提供了一个[关于碰撞检测的优秀页面](http://www.motionscript.com/design-guide/collision.html)。

[Colin Braley 在他们的网站](http://www.adobe.com/go/learn_ae_colinrepelexpression)上提供了一个教程和示例项目，展示了如何使用表达式使一层以一种看起来很自然的方式排斥其他层。

AE Enhancers 论坛提供了许多关于表达式以及脚本和动画预设的示例和有用信息。在[AE Enhancers 论坛上的这篇文章中](http://www.adobe.com/go/learn_ae_paulswarmexpression)，Paul Tuersley 提供了一个教程和示例项目，展示了如何使用表达式为 swarm 中的多个层设置动画。

Rick Gerard 在[Rick 的网站](http://www.adobe.com/go/learn_ae_ricksquarewheels)上提供了一个示例，该示例演示了沿地板滚动一个方形物体以使侧面与地板平面保持接触。

Carl Larsen 在[Creative COW 网站](http://library.creativecow.net/articles/larsen_carl/vehicle_rig.php)上提供了一个视频教程，演示了如何使用表达式和育儿方法将一组车轮的旋转与车辆的水平运动联系起来。

[Chris Zwar 在chriszwar.com](http://chriszwar.com/wordpress/2008/11/imagegrids/)上提供了一个示例项目，用于将静止图像或视频自动排列到网格中（如视频墙）。您可以使用连接到表达式系统的滑块轻松调整位置和间距。该项目包含三种组合——一种用于静止图像，一种用于视频，另一种用于创建自动故事板，其中以用户定义的间隔对视频进行采样并对齐到网格中。

[JJ Gifford 的网站](http://www.adobe.com/go/learn_ae_jjgiffordexpressions)提供了几个示例项目来演示如何使用表达式。

Maltaannon (Jerzy Drozda, Jr.) 在[maltaanon.com](http://maltaannon.com/articles/after-effects/smart-volume-meter/)上提供了一个视频教程，该教程展示了如何使用表达式来使用将音频转换为关键帧命令的结果来创建音量表。
