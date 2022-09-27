---
title: AE 对象模型
order: 5
category:
  - AE
---
    浏览本参考部分（按对象按字母顺序排列）时，可以参考下图，概述各种对象在层次结构中的位置以及它们与用户界面的对应关系。

## AE脚本主要对象的层次结构图 #

![](https://mir.yuelili.com/wp-content/uploads/2021/07/1ae9650c46f14bb1310fa3b81fcccf99.png)  
![](https://mir.yuelili.com/wp-content/uploads/2021/07/5c3d5e676644ade2a14106a01e0e2b0d.png)

请注意，File(文件)，Folder(文件夹)和Socket(外部通讯)对象由ExtendScript定义，记录在《[JavaScript工具指南》中](http://estk.aenhancers.com/)。ExtendScript还定义了ScriptUI模块：窗口和用户界面控制对象，这些对象也可用于After
Effects脚本。这些也记录在《[JavaScript工具指南](http://estk.aenhancers.com/)》中。脚本编制中的对象层次结构对应于用户界面（深灰色）的层次结构。

![After Effects用户界面](https://mir.yuelili.com/wp-content/uploads/2021/07/3d4c924e25a07dda2e1f28769be5682c.png)

应用程序包含一个Project(项目)面板，现在显示一个项目。项目中有合成，合成又包含图层。图层的来源可以是素材文件，占位符或自己创建，也可以在“项目”面板中列出。每个图层都包含属性，属性又可以包含标记和关键帧。渲染队列包含渲染队列项以及渲染设置和输出模块。这些均由脚本中的对象表示。

笔记

在本指南中，“属性（properties）”称为“属性（attributes）”，避免与After Effects自己的属性（properties）混淆。

## **对象汇总** #

下表按字母顺序列出了所有对象，并提供了每个对象的文档页面链接。

目的 | 描述  
---|---  
[](https://ae-scripting.docsforadobe.dev/general/globals/#globals)[Global](https://ae-scripting.docsforadobe.dev/general/globals/#globals)函数 |
全局可用的函数，可以显示文本以进行脚本调试，并帮助在秒和帧之间转换时间值。  
[](https://ae-scripting.docsforadobe.dev/general/application/#application)[Application对象](https://ae-scripting.docsforadobe.dev/general/application/#application) |
单个全局对象（按其名称（应用程序）可用）可用于访问AE应用程序的对象和应用程序设置。  
[AVItem对象](https://ae-scripting.docsforadobe.dev/items/avitem/#avitem) |
表示导入到After Effects中的音频/视频文件。  
[AVLayer对象](https://ae-scripting.docsforadobe.dev/layers/avlayer/#avlayer) |
表示包含AVItem对象的那些图层（合成图层，素材图层，实体(solid)图层，文本图层和声音图层）。  
[CameraLayer对象](https://ae-scripting.docsforadobe.dev/layers/cameralayer/#cameralayer) | 表示合成中的相机图层。  
[collection 收集对象](https://ae-scripting.docsforadobe.dev/other/collection/#collection) |
将一组对象或值关联为一个逻辑组，并通过索引提供对它们的访问。  
[CompItem对象](https://ae-scripting.docsforadobe.dev/items/compitem/#compitem) |
表示一个合成，允许操纵并获取相关信息。  
[FileSource对象](https://ae-scripting.docsforadobe.dev/sources/filesource/#filesource) | 表示来自文件的素材。  
[FolderItem对象](https://ae-scripting.docsforadobe.dev/items/folderitem/#folderitem) | 在“项目”面板中表示一个文件夹。  
[FootageItem对象](https://ae-scripting.docsforadobe.dev/items/footageitem/#footageitem) |
表示导入到项目中的素材项目，该项目显示在“项目”面板中。  
[FootageSource对象](https://ae-scripting.docsforadobe.dev/sources/footagesource/#footagesource) |
表示一些素材的文件来源。  
[ImportOptions对象](https://ae-scripting.docsforadobe.dev/other/importoptions/#importoptions) |
封装用于将文件导入After Effects的选项。  
[](https://ae-scripting.docsforadobe.dev/items/item/#item)[Item对象](https://ae-scripting.docsforadobe.dev/items/item/#item) | 表示出现在“项目”面板中项目的子项目。  
[ItemCollection对象](https://ae-scripting.docsforadobe.dev/items/itemcollection/#itemcollection) | 收集项目中的子项目。  
[KeyframeEase对象](https://ae-scripting.docsforadobe.dev/other/keyframeease/#keyframeease) | 将关键帧缓动值封装在After
Effects属性中。  
[](https://ae-scripting.docsforadobe.dev/layers/layer/#layer)[Layer对象](https://ae-scripting.docsforadobe.dev/layers/layer/#layer) | 图层基类。  
[LayerCollection对象](https://ae-scripting.docsforadobe.dev/layers/layercollection/#layercollection) |
收集项目中的图层。  
[LightLayer对象](https://ae-scripting.docsforadobe.dev/layers/lightlayer/#lightlayer) | 表示合成中的等光图层。  
[MarkerValue对象](https://ae-scripting.docsforadobe.dev/other/markervalue/#markervalue) | 将标记值封装在After
Effects属性中。  
[MaskPropertyGroup对象](https://ae-scripting.docsforadobe.dev/properties/maskpropertygroup/#maskpropertygroup) |
将蒙版属性封装在图层中。  
[OMCollection对象](https://ae-scripting.docsforadobe.dev/renderqueue/omcollection/#omcollection) |
将输出模块收集在渲染队列中。  
[OutputModule对象](https://ae-scripting.docsforadobe.dev/renderqueue/outputmodule/#outputmodule) |
表示渲染队列的输出模块。  
[PlaceholderSource对象](https://ae-scripting.docsforadobe.dev/sources/placeholdersource/#placeholdersource) |
表示素材的占位符。  
[](https://ae-scripting.docsforadobe.dev/general/project/#project)[Project对象](https://ae-scripting.docsforadobe.dev/general/project/#project) | 表示一个After Effects项目。  
[](https://ae-scripting.docsforadobe.dev/properties/property/#property)[Property对象](https://ae-scripting.docsforadobe.dev/properties/property/#property) | 表示After Effects属性。  
[PropertyBase对象](https://ae-scripting.docsforadobe.dev/properties/propertybase/#propertybase) | After
Effects属性和属性组的基类。  
[PropertyGroup对象](https://ae-scripting.docsforadobe.dev/properties/propertygroup/#propertygroup) | 表示After
Effects属性组。  
[RenderQueue对象](https://ae-scripting.docsforadobe.dev/renderqueue/renderqueue/#renderqueue) | 表示After
Effects渲染队列。  
[RenderQueueItem对象](https://ae-scripting.docsforadobe.dev/renderqueue/renderqueueitem/#renderqueueitem) |
表示渲染队列中的可渲染项。  
[RenderQueueItem对象](https://ae-scripting.docsforadobe.dev/renderqueue/renderqueueitem/#renderqueueitem) |
收集渲染队列中的渲染队列项。  
[RQItemCollection对象](https://ae-scripting.docsforadobe.dev/renderqueue/rqitemcollection/#rqitemcollection) |
用于访问应用程序设置和首选项。  
[Shape 对象](https://ae-scripting.docsforadobe.dev/other/shape/#shape) |
封装蒙版的轮廓形状信息。  
[ShapeLayer对象](https://ae-scripting.docsforadobe.dev/layers/shapelayer/#shapelayer) | 表示合成中的形状图层。  
[SolidSource对象](https://ae-scripting.docsforadobe.dev/sources/solidsource/#solidsource) | 描述纯色是某些素材的来源。  
[](https://ae-scripting.docsforadobe.dev/general/system/#system)[System对象](https://ae-scripting.docsforadobe.dev/general/system/#system) | 提供从应用程序访问操作系统的权限。  
[TextDocument对象](https://ae-scripting.docsforadobe.dev/other/textdocument/#textdocument) | 将文本封装在文本图层中。  
[TextLayer对象](https://ae-scripting.docsforadobe.dev/layers/textlayer/#textlayer) | 表示合成中的文本图层。  
[](https://ae-scripting.docsforadobe.dev/other/viewer/#viewer)[Viewer对象](https://ae-scripting.docsforadobe.dev/other/viewer/#viewer) | 表示“合成”，“层”或“素材”面板。

