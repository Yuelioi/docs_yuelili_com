---
title: Property 属性
order: 3
category:
  - AE
---
    # Property object 属性对象 #

app.project.item(index).layer(index).propertySpec

描述：Property对象包含属性值、关键帧和表达式信息。AE中的属性一般是值，通常可进行动画，比如图层中的效果、蒙版或变换等。如何访问属性，请参见属性基类（PropertyBase）和PropertyGroup.property()。

父级关系：property是属性基类（PropertyBase）的子类。因此，属性基类的方法和属性均可用。

__Note!

原文：在本指南中，“属性（properties）”被称为“属性（attributes）”，避免与After
Effects自己的属性（properties）混淆。

不过咱是中文，所以都叫属性了

示例：获取并设置不透明度的值

    
    
    selLayer = app.project.activeItem.selectedLayers[0]  //当前选择图层的第1个
    var myProperty = selLayer.opacity; //设置不透明度
    myProperty.setValue(50); //把不透明度改为50

获取并设置位置的值

    
    
    selLayer = app.project.activeItem.selectedLayers[0]  //当前选择图层的第1个
    var myProperty = selLayer.position; //定义位置
    myProperty.setValue([500,500]); //把位置设置为[500,500]

将蒙版形状由闭合变为开放

    
    
    selLayer = app.project.activeItem.selectedLayers[0]  //当前选择图层的第1个
    var myMask = selLayer.mask(1); //定义蒙版
    var myProperty = myMask.maskPath; //定义蒙版的路径
    myShape = myProperty.value; //定义蒙版路径的形状值
    myShape.closed = false; //形状值里的闭合打开
    myProperty.setValue(myShape); //把新的形状值设置到路径

获取特定时间的颜色值。把4秒的灯光的红色分量设置为2秒的一半。颜色是四个浮点数组成的数组[r, g, b, alpha]。

    
    
    selLight = app.project.activeItem.selectedLayers[0]  //选择图层集里的第1个（假设是灯光）
    var myProperty = selLight.color;  //定义灯光颜色
    var colorValue = myProperty.valueAtTime(2, true); //定义灯光在2秒的值
    colorValue[0] = 0.5 * colorValue[0]; //更改红色值
    myProperty.setValueAtTime(4, colorValue); //应用更改到第4秒

检查3.5秒处的缩放是否为[10,50]

    
    
    selLayer = app.project.activeItem.selectedLayers[0]  //选择图层集里的第1个（假设是灯光）
    var myProperty = selLayer.scale; //定义缩放
    var scaleValue = myProperty.valueAtTime(3.5, false); //获取3.5秒的缩放值
    
    if (scaleValue[0] === 10 && scaleValue[1] === 50) {
        alert("一样！");
    } else {
        alert("oops！不一样");
    }

将关键帧从0旋转到90再到0。动画为10秒，中间关键帧在5秒处。

    
    
    selLayer = app.project.activeItem.selectedLayers[0]  //选择图层集里的第1个
    var myProperty = selLayer.rotation; //定义旋转
    
    myProperty.setValueAtTime(0, 0);
    myProperty.setValueAtTime(5, 90);
    myProperty.setValueAtTime(10, 0);

更改源文本的前三个关键帧的文字（有问题 待修改）

    
    
    var selLayer = app.project.activeItem.selectedLayers[0];  //选择图层集里的第1个
    
    var myProperty = selLayer.sourceText; //定义文字源文本属性
    if (myProperty.numKeys < 3) {
        alert("哎？请检查是否有3个关键帧");
    } else {
        myProperty.setValueAtKey(1, "数字1");
        myProperty.setValueAtKey(2, "数字2");
        myProperty.setValueAtKey(3, newTextDocument("数字3"));
    }

# 属性 #

## alternateSource 备用源！21新出 #

app.project.item(index).layer(index).propertySpec.alternateSource

__Note!

此功能已添加到After Effects 18.0(2021)中

描述：在以下情况下，该值为null：

  * 没有为关联层设置备用源。
  * 该属性不能用作备用源。

使用Property.canSetAlternateSource来确定该属性是否为媒体替换必备属性（备用源）。

所有媒体替换层都有可以设置的备用源项目。

将图层添加到“基本图形面板”时，该图层被“标记”为介质替换(请参见AVLayer.addToMotionGraphicsTemplate()或AVLayer.addToMotionGraphicsTemplateAs())。

  * 如果存在，则渲染工作流程将在渲染图层时拾取备用源。
  * 如果未设置该层的备用源，则将使用“媒体替换”控件的源层进行渲染(这是正常的工作流程)。

使用Property.setAlternateSource()更改。

类型：AVItem对象；只读。

## canSetAlternateSource ！21新出 #

app.project.item(index).layer(index).propertySpec.canSetAlternateSource

__Note!

此功能已添加到After Effects 18.0(2021)中

描述：测试该属性是否为支持媒体替换的基本属性。

如果该属性允许介质替换，则返回true，否则false。

类型：布尔值，只读。

## canSetExpression 能否设置表达式！ #

app.project.item(index).layer(index).propertySpec.canSetExpression

描述：为true时，该属性的表达式可以由脚本设置。另请参阅属性表达式。

类型：布尔值，只读。

## canVaryOverTime 能否写入关键帧或表达式 #

app.project.item(index).layer(index).propertySpec.canVaryOverTime

描述：如果为true，该属性可以随时间变化，也就是说，可以写入关键帧值或表达式。

类型：布尔值，只读。

## dimensionsSeparated 单独属性 #

app.project.item(index).layer(index).propertySpec.dimensionsSeparated

描述：如果为true，则该属性的尺寸表示为单独属性。例如位置拆分为“ X 位置”和“ Y 位置”时，就为true。

__Note!

仅当isSeparationLeader属性为true时，此属性才适用。

类型：布尔值，读/写。

示例：如果位置分离，那么位置的dimensionsSeparated返回true，否则返回false

注意：跟X position没关系，只是Position有dimensionsSeparated

![](https://cdn.yuelili.com/20210914172446.png)

    
    
    var selLayer = app.project.activeItem.selectedLayers[0] 
    alert(selLayer("Transform")('Position').dimensionsSeparated) 
    

## **essentialPropertySource 基本图形的源属性** #

app.project.item(index).layer(index).propertySpec.essentialPropertySource

描述 **：** 基本属性对象上的实例属性，也就是基本图形属性的源属性。

__Note!

从AE 2022 Beta 版本 22x25 开始加入

返回：

  * Property 对象，如果用于创建 Essential Property 的源对象是一个 Property，读/写
  * AVLayer 对象，在用于创建基本属性的源对象是媒体替换素材项目的情况下，读/写
  * 或 Null

示例：

    
    
    var firstComp = app.project.item(1);
    var opacityProp = firstComp.layer(1).property("Transform").property("Opacity");
    
    opacityProp.addToMotionGraphicsTemplate(firstComp);  // 添加到基本图形
    
    var secondComp = app.project.item(2);
    secondComp.layers.add(firstComp);
    
    var essentialOpacity = secondComp.layer(1).essentialProperty.property(1);
    if (essentialOpacity.essentialPropertySource == opacityProp) {
        alert("You can get the source Property from an Essential Property!");
    }
    

## expression 表达式 #

app.project.item(index).layer(index).propertySpec.expression

描述：属性的表达式。仅当属性的canSetExpression为true时才可写入。设定表达式时，需要提供字符串。

  * 如果包含有效表达式，则expressionEnabled变为true。
  * 如果不包含有效表达式，则报错，且expressionEnabled变为false。
  * 如果为空字符串，则expressionEnabled变为false，但不报错。

类型：字符串; 如果属性可以设置表达式（canSetExpression为true），则读/写。

## expressionEnabled 开启表达式 #

app.project.item(index).layer(index).propertySpec.expressionEnabled

描述：如果为true，则开启表达式。否则关闭表达式。仅当属性可以设置表达式（canSetExpression为true）且包含有效的表达式时，才能将此属性设置为true
。

类型：布尔值，读/写。

## expressionError 表达式错误 #

app.project.item(index).layer(index).propertySpec.expressionError

描述：表达式错误，通过对表达式求值产生的错误。如果未指定表达式，或者最后计算的表达式无错误，则为空字符串("")。

类型：字符串; 只读。

示例：图层的位置属性，表达设置为 100。返回报错：...表达式必须返回2位坐标，而不是1维

![](https://cdn.yuelili.com/20210914224552.png)

    
    
    var selLayer = app.project.activeItem.selectedLayers[0] 
    alert(selLayer("Transform")("Position").expressionError)
    

## hasMax 最大允许值 #

app.project.item(index).layer(index).propertySpec.hasMax

描述：为true时，属性有一个最大允许值；否则为假。

类型：布尔值，只读。

示例：表达式控制 - 滑块控制 - 滑块，就有最大允许值。可以通过右键滑块 - 编辑值 进行设置

![](https://cdn.yuelili.com/20210914173041.png)

    
    
    var selLayer = app.project.activeItem.selectedLayers[0] 
    alert(selLayer.effect('Slider Control')(1).hasMax) 返回 true
    

## hasMin 最小允许值 #

app.project.item(index).layer(index).propertySpec.hasMin

描述：为true时，属性有一个最小允许值；否则为假。

类型：布尔值，只读。

示例：表达式控制 - 滑块控制 - 滑块，就有最小允许值。可以通过右键滑块 - 编辑值 进行设置

![](https://cdn.yuelili.com/20210914173041.png)

    
    
    var selLayer = app.project.activeItem.selectedLayers[0] 
    alert(selLayer.effect('Slider Control')(1).hasMin) //返回 true
    

## isDropdownEffect 下拉效果 #

app.project.item(index).layer(index).propertySpec.isDropdownEffect

__Note!

此功能已添加到After Effects 17.0.1(2020)中

描述：如果为true，则该属性是下拉菜单的菜单属性（Dropdown Menu
Control的Menu），并且可以使用setPropertyParameters更新其项目。

类型：布尔值，只读。

示例：分形杂色的分形类型不属于下拉效果。应该是指表达式控制 - 下拉菜单那种

    
    
    var selLayer = app.project.activeItem.selectedLayers[0] 
    alert(selLayer.effect('Fractal Noise')('Fractal Type').isDropdownEffect) //false
    

## isSeparationFollower 是否为分离元 #

app.project.item(index).layer(index).propertySpec.isSeparationFollower

![](https://cdn.yuelili.com/20210914174031.png)

描述：如果为true，则表示该属性是多维属性其中一个维度。例如，“ X 位置”就是是由“位置”分离出来的。

__Note!

合并的多维属性是“分离组”，而分隔出来的一维属性是“分离元”。[1920,1080] 可以分离为 1920和1080

类型：布尔值，只读。

示例：X 位置 属于分离元

    
    
    var selLayer = app.project.activeItem.selectedLayers[0] 
    alert(selLayer('Transform')("X Position").isSeparationFollower)
    

## isSeparationLeader 是否为分离组 #

app.project.item(index).layer(index).propertySpec.isSeparationLeader

描述：如果为true，则该属性为多维并且可以分离。例如，位置属性就为true。

__Note!

合并的多维属性是“分离组”，而分隔出来的一维属性是“分离元”。[1920,1080] 可以分离为 1920和1080

类型：布尔值，只读。

示例：位置属性 为 分离组

    
    
    var selLayer = app.project.activeItem.selectedLayers[0] 
    alert(selLayer('Transform')("Position").isSeparationLeader)
    

## isSpatial 是否为空间值 #

app.project.item(index).layer(index).propertySpec.isSpatial

描述：如果为true，则该属性为空间值。比如位置和锚点。

类型：布尔值，只读。

    
    
    var selLayer = app.project.activeItem.selectedLayers[0]; //当前选择的图层
    alert(selLayer.transform.position.isSpatial)  //返回true

## isTimeVarying 是否随时间变化 #

app.project.item(index).layer(index).propertySpec.isTimeVarying

描述：如果为true，则该属性随时间变化，也就是K了帧或加了表达式。当此属性为true时，该属性的canVaryOverTime 也必须为true。

类型：布尔值，只读。

## maxValue 最大允许值 #

app.project.item(index).layer(index).propertySpec.maxValue

描述：属性的最大允许值。如果它没有最大允许值（.hasMax为false），则报错。

类型：浮点值；只读。

## minValue 最小允许值 #

app.project.item(index).layer(index).propertySpec.minValue

描述：属性的最小允许值。如果它没有最小允许值（.hasMin为false），则报错。

类型：浮点值；只读。

## numKeys 关键帧个数 #

app.project.item(index).layer(index).propertySpec.numKeys

描述：属性中的关键帧个数。如果为0，表示未设置关键帧。

类型：整数; 只读。

## propertyIndex 属性索引 #

app.project.item(index).layer(index).propertySpec.propertyIndex

描述：属性索引。起始索引为1。

类型：整数; 只读。

## propertyValueType 属性值的类型 #

app.project.item(index).layer(index).propertySpec.propertyValueType

描述：属性值的类型。每种类型的数据都以不同类型的结构进行存储和检索。

例如，3D空间属性(比如3D位置)为三个浮点数组成的数组。在设置位置值时，需要传递3D数组：mylayer.property("position").setValue([10,
20, 0]);

相反，形状属性(例如蒙版形状)为Shape对象。为形状设置值时，按如下所示传递Shape对象：

    
    
    var selLayer = app.project.activeItem.selectedLayers[0]; //当前选择的图层
    var myShape = new Shape(); //定义一个蒙版形状
    myShape.vertices = [[0,0], [0,100], [100,100], [100,0]]; //设置形状参数
    var myMask = selLayer.property("ADBE Mask Parade").property(1); //假设已经画过一个蒙版
    myMask.property("ADBE Mask Shape").setValue(myShape); //把新的形状参数设置给蒙版

类型：PropertyValueType，枚举值; 读/写：

|PropertyValueType | 直译 | 介绍 | 示例|
|---|---|---|---|
|PropertyValueType.NO_VALUE | 无 | 不存储任何数据 ||
|PropertyValueType.ThreeD_SPATIAL | 3D空间值 | 3个浮点数组成的位置型数组 ||
如锚点值为：[10.0、20.2、0.0]  
|PropertyValueType.ThreeD | 3D值 | 3个浮点数组成的数组 | 如缩放值为：[100.0、20.2、0.0]|
|PropertyValueType.TwoD_SPATIAL | 2D空间值 | 2个浮点数组成的位置型数组 | 如锚点值为：[5.1，10.0]|
|PropertyValueType.TwoD | 2D值 | 2个浮点数组成的数组 | 如缩放值为：[5.1，100.0]|
|PropertyValueType.OneD | 1D数值 | 浮点值 ||
|PropertyValueType.COLOR | 颜色值 | 4个浮点值（范围为0.0~1.0）组成数组 | 例如颜色[0.8、0.3、0.1、1.0]|
|PropertyValueType.CUSTOM_VALUE | 自定义值 | 自定义属性值 | 例如“色阶”效果的“直方图”属性|
|PropertyValueType.MARKER | 标记对象 | 标记对象 ||
|PropertyValueType.LAYER_INDEX | 图层索引 | 整数 | 为0表示无图层|
|PropertyValueType.MASK_INDEX | 蒙版索引 | 整数 | 为0表示无蒙版|
|PropertyValueType.SHAPE | 形状对象 | 形状对象 ||
|PropertyValueType.TEXT_DOCUMENT | 文字对象 | 文字对象 ||
  
## selectedKeys 已选择关键帧的索引 #

app.project.item(index).layer(index).propertySpec.selectedKeys

描述：属性中所有选定关键帧的索引。如果没有选择关键帧，或者该属性无关键帧，则返回空数组。

类型：整数数组/空数组；只读。

## separationDimension 分离组维度编号 #

app.project.item(index).layer(index).propertySpec.separationDimension

描述：分离元在分离组中的维度编号。起始编号为0。例如，“Y位置的separationDimension为1；X位置的值为0。

__Note!

合并的多维属性是“分离组”，而分隔出来的一维属性是“分离元”。[1920,1080] 可以分离为 1920和1080

类型：整数; 只读。

## separationLeader 查找分离组 #

app.project.item(index).layer(index).propertySpec.separationLeader

描述：查找分离元所在的分离组。例如，Y 位置分离组为位置属性。

__Note!

合并的多维属性是“分离组”，而分隔出来的一维属性是“分离元”。[1920,1080] 可以分离为 1920和1080

类型：属性对象；只读。

## unitsText 值的单位 #

app.project.item(index).layer(index).propertySpec.unitsText

描述：值单位。

类型：字符串; 只读。

示例：查看位置属性的单位，返回 pixels ，也就是像素。

    
    
    var selLayer = app.project.activeItem.selectedLayers[0] 
    alert(selLayer('Transform')("Position").unitsText)
    

## value 属性的值 #

app.project.item(index).layer(index).propertySpec.value

描述：在当前时间属性的值。

  * 如果开启表达式（expressionEnabled为true），则返回表达式的值。
  * 如果有关键帧，则返回当前时间的关键帧值。
  * 否则，返回静态值。

返回的值的类型取决于属性值的类型。请参阅Property对象的示例。

类型：适合于属性类型的值(请参见Property.propertyValueType)；只读。

# 方法 #

## addKey() 添加关键帧 #

app.project.item(index).layer(index).propertySpec.addKey(time)

描述：在指定时间将新的关键帧或标记添加到属性，并返回新关键帧的索引。

参数：

  * time ：要添加关键帧的时间(秒)。浮点值。合成的起始时间默认是0。

返回： 新关键帧或标记的索引;整数。

## addToMotionGraphicsTemplate() 添加动态图形模板 #

app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplate(comp)

__Note!

在After Effects 15.0(CC 2018)中添加了此功能

描述：将属性添加到指定合成的“基本图形”面板中。

  * 如果添加成功，则返回true。
  * 如果未添加成功，则返回false，则说明它不支持，或者已经添加过了。此时会弹警告对话框。
  * 使用Property.canAddToMotionGraphicsTemplate()方法检测该属性是否可以添加。

参数：

  * comp ：指定合成，必填。

返回：布尔值。

## addToMotionGraphicsTemplateAs() 添加动态图形模板 #

app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplateAs(comp,
name)

__Note!

此功能已添加到After Effects 16.1(CC 2019)中

描述：将属性添加到指定合成的“基本图形”面板中，还可以自定义模板名。

  * 如果添加成功，则返回true。
  * 如果未添加成功，则返回false，则说明它不支持，或者已经添加过了。此时会弹警告对话框。
  * 使用Property.canAddToMotionGraphicsTemplate()方法检测该属性是否可以添加。

参数：

  * comp ，指定合成，必填。
  * name，模板名，字符串。必填。

返回：布尔值。

## canAddToMotionGraphicsTemplate() 能否添加至动态图形模板 #

app.project.item(index).layer(index).propertySpec.canAddToMotionGraphicsTemplate(comp)

__Note!

在After Effects 15.0(CC 2018)中添加了此功能

描述：测试是否可以将属性添加到指定图形的“基本图形”面板中。

  * 如果添加成功，则返回true。
  * 如果未添加成功，则返回false，则说明它不支持，或者已经添加过了。此时会弹警告对话框。
  * 使用Property.canAddToMotionGraphicsTemplate()方法检测该属性是否可以添加。

支持的属性类型为：

  * 选框
  * 颜色
  * 数值滑块(即单值数值属性，例如“变换”>“不透明度”或“滑块控件”表达式控制效果)
  * 源文本

参数：comp ，指定合成，必填。

返回：布尔值。

## getSeparationFollower() 分离元检索 #

app.project.item(index).layer(index).propertySpec.getSeparationFollower(dim)

描述：对于单独的多维属性（分离组），检索其跟随者（分离元）。如果该属性不是多维或不具有指定的维度（比如在2维坐标找第3维），则返回错误

__Note!

合并的多维属性是“分离组”，而分隔出来的一维属性是“分离元”。如[1920,1080] 可以分离为 1920和1080

参数：

  * dim ，指定的维度编号(从0开始)。

返回：属性对象。

## isInterpolationTypeValid() 设置关键帧插值 #

app.project.item(index).layer(index).propertySpec.isInterpolationTypeValid(type)

描述：设置指定的关键帧插值类型，则返回true。

参数：type，KeyframeInterpolationType，枚举值：

  * KeyframeInterpolationType.LINEAR：线性
  * KeyframeInterpolationType.BEZIER：贝塞尔
  * KeyframeInterpolationType.HOLD：定格

返回：布尔值。

## keyInInterpolationType() 入点插值类型 #

app.project.item(index).layer(index).propertySpec.keyInInterpolationType(keyIndex)

描述：返回指定关键帧的入点插值类型。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：KeyframeInterpolationType，枚举值：

  * KeyframeInterpolationType.LINEAR：线性
  * KeyframeInterpolationType.BEZIER：贝塞尔
  * KeyframeInterpolationType.HOLD：定格

## keyInSpatialTangent() 入点空间线性 #

app.project.item(index).layer(index).propertySpec.keyInSpatialTangent(keyIndex)

描述：如果为空间属性(即值类型为TwoD_SPATIALorThreeD_SPATIAL)，则将关键帧入点变为空间线性。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：浮点值数组：

  * 如果属性值类型为PropertyValueType.TwoD_SPATIAL，则数组包含2个浮点值。
  * 如果属性值类型为PropertyValueType.ThreeD_SPATIAL，则数组包含3个浮点值。
  * 以上都不是，发生异常。

## keyInTemporalEase() 入点关键帧缓入 #

app.project.item(index).layer(index).propertySpec.keyInTemporalEase(keyIndex)

描述：指定关键帧添加缓入

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：KeyframeEase数组对象：

  * 如果属性值为type PropertyValueType.TwoD，则数组包含2个对象。
  * 如果属性值为type PropertyValueType.ThreeD，则数组包含3个对象。
  * 对于其他值类型，该数组包含1个对象。

## keyOutInterpolationType() 出点插值类型 #

app.project.item(index).layer(index).propertySpec.keyOutInterpolationType(keyIndex)

描述：返回指定关键帧的出点插值类型。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：KeyframeInterpolationType枚举值：

  * KeyframeInterpolationType.LINEAR：线性
  * KeyframeInterpolationType.BEZIER：贝塞尔
  * KeyframeInterpolationType.HOLD：定格

## keyOutSpatialTangent() 出点空间线性 #

app.project.item(index).layer(index).propertySpec.keyOutSpatialTangent(keyIndex)

描述：指定关键帧的出点变为空间线性。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：浮点值数组：

  * 如果属性值类型为PropertyValueType.TwoD_SPATIAL，则数组包含2个浮点值。
  * 如果属性值类型为PropertyValueType.ThreeD_SPATIAL，则数组包含3个浮点值。
  * 以上都不是，发生异常。

## keyOutTemporalEase() 出点关键帧缓出 #

app.project.item(index).layer(index).propertySpec.keyOutTemporalEase(keyIndex)

描述：指定关键帧的缓出。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：KeyframeEase数组对象：

  * 如果属性值为type PropertyValueType.TwoD，则数组包含2个对象。
  * 如果属性值为type PropertyValueType.ThreeD，则数组包含3个对象。
  * 对于任何其他值类型，该数组包含1个对象。

## keyRoving() 漂浮关键帧 #

app.project.item(index).layer(index).propertySpec.keyRoving(keyIndex)

![](https://mir.yuelili.com/wp-content/uploads/2021/07/267c1ca616d8824085b98f4a9881708f.png)

描述：如果指定的关键帧正在漂浮（Rove），则返回true。第1帧和最后1帧无法移动（强行设置将被忽略）。如果属性值类型既不是2D空间值也不是3D空间值则会生成一个异常（参见PropertyValueType）。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：布尔值。

## keySelected() 关键帧是否选择 #

app.project.item(index).layer(index).propertySpec.keySelected(keyIndex)

描述：如果选择了指定的关键帧，则返回true。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：布尔值。

## keySpatialAutoBezier() 空间自动贝塞尔 #

app.project.item(index).layer(index).propertySpec.keySpatialAutoBezier(keyIndex)

描述：如果指定的关键帧是空间自动贝塞尔，则返回true。

说明：只有当关键帧的keySpatialContinuous(keyIndex)也为true时，才算具有具有空间自动贝塞尔曲线插值。如果属性值类型既不是2D空间值也不是3D空间值（参见PropertyValueType）则会生成一个异常。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：布尔值。

## keySpatialContinuous() 空间连续性 #

app.project.item(index).layer(index).propertySpec.keySpatialContinuous(keyIndex)

描述：如果指定的关键帧具有空间连续性，则返回true。如果属性值类型既不是2D空间值也不是3D空间值（参见PropertyValueType）则会生成一个异常。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：布尔值。

## keyTemporalAutoBezier() 时间自动贝塞尔 #

app.project.item(index).layer(index).propertySpec.keyTemporalAutoBezier(keyIndex)

描述：如果指定的关键帧具有时间自动贝塞尔插值，则返回true。仅当关键帧入点和出点插值类型（参见keyOutInterpolationType）都是贝塞尔才可以。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：布尔值。

## keyTemporalContinuous() 时间连续性 #

app.project.item(index).layer(index).propertySpec.keyTemporalContinuous(keyIndex)

描述：如果指定的关键帧具有时间连续性，则返回true。仅当关键帧入点和出点插值类型（参见keyOutInterpolationType）都是贝塞尔才可以。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量

返回：布尔值。

## keyTime() 查找关键帧时间 #

app.project.item(index).layer(index).propertySpec.keyTime(keyIndex)  
app.project.item(index).layer(index).propertySpec.keyTime(markerComment)

描述：查找指定的关键帧或标记，并返回时间。如果找不到则报错。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * markerComment：标记附带的注释，字符串。(参见 MarkerValue.comment属性)。

返回：浮点值。

## keyValue() 查找关键帧值 #

app.project.item(index).layer(index).propertySpec.keyValue(keyIndex)  
app.project.item(index).layer(index).propertySpec.keyValue(markerComment)

描述：查找指定的关键帧或标记，并返回其当前值。如果找不到则报错。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * markerComment：标记附带的注释，字符串。(参见 MarkerValue.comment属性)。

返回：关键帧的浮点值或标记的MarkerValue对象。

## nearestKeyIndex() 时间查找最近关键帧索引 #

app.project.item(index).layer(index).propertySpec.nearestKeyIndex(time)

描述：返回最接近指定时间的关键帧的索引。

参数：

  * time ：时间(秒)；浮点值。合成的开头时间默认是0。

返回：整数。

## removeKey() 删除关键帧 #

app.project.item(index).layer(index).propertySpec.removeKey(keyIndex)

描述：删除指定关键帧。如果不存则报错。要删除多个关键帧，必须从最高索引号开始删。因为删除关键帧3，此时关键帧4就变成关键帧3了。

参数：

  * keyIndex：关键帧的索引。范围内的整数， 1~关键帧数量

返回：无。

## setAlternateSource() 2021！ #

app.project.item(index).layer(index).propertySpec.setAlternateSource(newSource)

__Note!

此功能已添加到After Effects 18.0(2021)中

描述：设置此属性的备用来源。

要执行的操作，被调用的AVItem的Property对象和输入参数必须与Media Replacement兼容。

使用AVItem.isMediaReplacementCompatible方法测试AVItem是否可以用作媒体替换的备用来源。

使用Property.canSetAlternateSource测试该属性是否允许介质替换。

参数：

  * newSource，新的源AVItem对象。必需。

返回：无。

## setInterpolationTypeAtKey() 设置入点出点插值类型 #

app.project.item(index).layer(index).propertySpec.setInterpolationTypeAtKey(keyIndex,
inType[, outType])

描述：设置指定关键帧的in和out插值类型。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * inType：入点插值类型。KeyframeInterpolationType ，枚举值： 
    * KeyframeInterpolationType.LINEAR：线性
    * KeyframeInterpolationType.BEZIER：贝塞尔
    * KeyframeInterpolationType.HOLD：定格
  * outType(可选)：出点插值类型。如果未提供，出点跟入点一样。KeyframeInterpolationType 枚举值： 
    * KeyframeInterpolationType.LINEAR：线性
    * KeyframeInterpolationType.BEZIER：贝塞尔
    * KeyframeInterpolationType.HOLD：定格

返回：无。

## setPropertyParameters() 设置下拉菜单参数 #

app.project.item(index).layer(index).propertySpec.setPropertyParameters(items)

__Note!

此功能已添加到After Effects 17.0.1(2020)中

描述：设置下拉菜单控件的菜单属性的参数。此方法将使用字符串数组覆盖当前菜单。

  * 下拉菜单控件效果的“菜单”属性是唯一允许设置参数的属性。
  * 要检查属性是否允许设置参数，可以使用isDropdownEffect进行检查。
  * 每当此方法失败时，都会引发异常。

参数：items，字符串数组，它将替换下拉菜单控件中的现有菜单项。

  * 只允许使用字符串。
  * 项目不允许使用空字符串。
  * 项目不允许使用重复字符串。
  * 项目不允许使用“ |” 。
  * 项目如果为“(-”。代表分隔线。分隔线也会占一个索引。

__Note!

在当前代码页中，项目字符串应采用ASCII或可编码的MultiByte。换句话说，项目字符串应在运行系统的脚本中提供。例如：在英语系统上运行脚本时以日语指定项目字符串将创建一个下拉效果，其中项目字符串中的字符难以辨认。

示例：添加下拉菜单控件，并添加项目

![](https://mir.yuelili.com/wp-content/uploads/2021/07/6ff43b5ab4f9ae399a022960154d76fa.png)

    
    
    var selLayer = app.project.activeItem.selectedLayers[0]; //当前选择的图层
    var dropdownItems = [
        "3A",
        "3B",
        "(-",
        "4A",
        "4B"
        ];
        
    var dropdownEffect = selLayer.property("ADBE Effect Parade").addProperty("ADBE Dropdown Control"); //添加下拉菜单控件
    dropdownEffect.property(1).setPropertyParameters(dropdownItems);

返回：属性对象，更新的下拉菜单控件的Menu属性。

## setRovingAtKey() 设置关键帧漂浮 #

app.project.item(index).layer(index).propertySpec.setRovingAtKey(keyIndex,
newVal)

![](https://mir.yuelili.com/wp-content/uploads/2021/07/267c1ca616d8824085b98f4a9881708f.png)

描述：打开漂浮（Rove）。第1帧和最后1帧无法移动（强行设置将被忽略）。如果属性值类型既不是2D空间值也不是3D空间值则会生成一个异常（参见PropertyValueType）。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * newVal：开启则为true，关闭则为false。

返回：无。

## setSelectedAtKey() 设置关键帧选择状态 #

app.project.item(index).layer(index).propertySpec.setSelectedAtKey(keyIndex,
onOff)

描述：选择或取消选择指定的关键帧。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * onOff ：如果为True，则选择关键帧；如果为false，则取消选择关键帧。

返回：无。

## setSpatialAutoBezierAtKey() 设置空间自动贝塞尔 #

app.project.item(index).layer(index).propertySpec.setSpatialAutoBezierAtKey(keyIndex,
newVal)

描述：打开或关闭空间自动贝塞尔曲线插值。如果属性值类型既不是2D空间值也不是3D空间值则会生成一个异常（参见PropertyValueType）。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * newVal：设置为true时则打开空间自动贝塞尔曲线，为false则将其关闭。

返回：无。

## setSpatialContinuousAtKey() 设置空间连续性 #

app.project.item(index).layer(index).propertySpec.setSpatialContinuousAtKey(keyIndex,
newVal)

描述：打开或关闭空间连续性。如果属性值类型既不是2D空间值也不是3D空间值则会生成一个异常（参见PropertyValueTy

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * newVal ：设置为true时则打开空间自动贝塞尔曲线，为false则将其关闭。

返回：无。

## setSpatialTangentsAtKey() 设置空间入点出点切线向量 #

app.project.item(index).layer(index).propertySpec.setSpatialTangentsAtKey(keyIndex,
inTangent[, outTangent])

描述：设置指定关键帧的入点和出点切线向量。如果属性值类型既不是2D空间值也不是3D空间值则会生成一个异常（参见PropertyValueType）。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * inTangent传入切线向量。浮点值数组 
    * 如果属性值类型为 PropertyValueType.TwoD_SPATIAL，则数组包含2个值。
    * 如果属性值类型为 PropertyValueType.ThreeD_SPATIAL，则数组包含3个值。
  * outTangent(可选)，传出切线向量。如果未提供，出点跟入点一样。浮点值数组 
    * 如果属性值类型为 PropertyValueType.TwoD_SPATIAL，则数组包含2个值。
    * 如果属性值类型是PropertyValueType.ThreeD_SPATIAL，该数组包含3个值。

返回：无。

## setTemporalAutoBezierAtKey() 设置时间自动贝塞尔 #

app.project.item(index).layer(index).propertySpec.setTemporalAutoBezierAtKey(keyIndex,
newVal)

描述：打开或关闭时间自动贝塞尔曲线插值。启用此选项后，只有当keySpatialContinuous(keyIndex)它也为true时，它才会影响此关键帧。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * newVal ：设置为true时则打开时间自动贝塞尔曲线，为false则将其关闭。

返回：无。

## setTemporalContinuousAtKey() 设置时间连续性 #

app.project.item(index).layer(index).propertySpec.setTemporalContinuousAtKey(keyIndex,
newVal)

描述：打开或关闭时间连续性。启用时间连续性时，仅当关键帧入点和出点的插值类型均为贝塞尔才行（参见PropertyValueType）。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * newVal ：设置为true时则打开时间连续性，为false则将其关闭。

返回：无。

## setTemporalEaseAtKey() 设置 #

app.project.item(index).layer(index).propertySpec.setTemporalEaseAtKey(keyIndex,
inTemporalEase[, outTemporalEase])

描述：设置指定关键帧的入点出点时间缓动。请参见KeyframeEase对象。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * inTemporalEase：时间缓入。1、2或3个KeyframeEase对象的数组。 
    * 如果属性值为type PropertyValueType.TwoD，则数组包含2个对象。
    * 如果属性值为type PropertyValueType.ThreeD，则数组包含3个对象。
    * 对于所有其他值类型，数组包含1个对象。
  * outTemporalEase：(可选)时间缓出。如果未提供，缓出追随缓入参数。1、2或3个KeyframeEase对象的数组。 
    * 如果属性值为type PropertyValueType.TwoD，则数组包含2个对象。
    * 如果属性值为type PropertyValueType.ThreeD，则数组包含3个对象。
    * 对于所有其他值类型，数组包含1个对象。

返回：无。

## setValue() 设置属性值 #

app.project.item(index).layer(index).propertySpec.setValue(newValue)

描述：设置无属性的静态值。如果属性有关键帧，则报错。要使用关键帧设置属性的值，请使用Property.setValueAtTime()或Property.setValueAtKey()。

参数：

  * newValue ：符合该属性类型的值；请参阅 Property.propertyValueType。

返回：无。

## setValueAtKey() 设置关键帧值 #

app.project.item(index).layer(index).propertySpec.setValueAtKey(keyIndex,
newValue)

描述：查找指定的关键帧并设置其值。如果无关键帧，或者索引错误，则报错。

参数：

  * keyIndex：关键帧的索引。整数，范围为 1~关键帧数量
  * newValue 一个适合于所设置属性类型的值；请参阅 Property.propertyValueType。

返回：无。

## setValueAtTime() 根据时间设置关键帧值 #

app.project.item(index).layer(index).propertySpec.setValueAtTime(time,
newValue)

描述：在指定时间设置关键帧的值。如果在指定的时间没有关键帧，则创建新的关键帧，并设置值。

参数：

  * time 时间(秒)，浮点值。合成起始时间是0。
  * newValue 一个适合于所设置属性类型的值；请参阅 Property.propertyValueType。

返回：无。

## setValuesAtTimes() 根据时间数组设置关键帧值 #

app.project.item(index).layer(index).propertySpec.setValuesAtTimes(times,
newValues)

描述：在指定的时间设置一组关键帧的值。如果在指定的时间没有关键帧，则创建新的关键帧，并设置值。times和newValues均为数组，且具有相同的长度。

参数：

  * times ，时间数组，以秒为单位。每个时间均为浮点值。合成起始时间是0。
  * newValues ：属性值组成的数组；（属性值请参阅Property.propertyValueType）。

返回：无。

## valueAtTime() 根据时间获取值 #

app.project.item(index).layer(index).propertySpec.valueAtTime(time,
preExpression)

描述：指定时间属性的值。请注意，返回的值类型不明确，具体取决于属性。

__Note!

与After Effects 13.6一样，此方法会等待时间密集的表达式(如sampleImage)返回结果之后，再运行。

参数：

  * time ：时间(秒)；浮点值。合成的开头是0。
  * preExpression ：如果为true，且属性具有表达式，则忽略表达式返回静态值。如果为false，则返回表达式的值，如果无表达式，则返回静态值。

返回：适合属性类型的值(请参见propertyValueType)。

![](https://mir.yuelili.com/wp-content/uploads/2021/07/0286a10538db6889de8909cb534966b0.png)

    
    
    var selLayer = app.project.activeItem.selectedLayers[0];
    alert(selLayer.transform.position.valueAtTime(2,true))  //忽略表达式：返回[960,540]
    
    var selLayer = app.project.activeItem.selectedLayers[0];
    alert(selLayer.transform.position.valueAtTime(2,false))  //使用表达式值：返回[1200,1100,0]
    
    //此时如果删掉表达式，返回[960,540,0]

