---
title: LayerCollection 图层集
order: 3
category:
  - AE
---
    # LayerCollection object #

app.project.item(index).layers

描述：LayerCollection表示一组图层（图层集）。属于合成对象(Comp)的图层集(LayerCollection)包含合成中的所有图层。可用于操纵图层列表。

父级关系：LayerCollection是Collection对象的子类。使用LayerCollection时，除下面列出的方法和属性外，Collection的所有方法和属性均可用。

示例：弹窗活动合成的图层总数

    
    
    var myComp = app.project.activeItem;
    var layerCollection = myComp.layers;
    alert("图层数量为：" + layerCollection.length);
    

# 方法 #

## add() 添加图层 #

app.project.item(index).layers.add(item[, duration])

描述：创建新AVLayer对象，并将其添加到此集合中。起始时间遵循：编辑 - 常规 -
“在合成开始时创建图层”。如果无法将该item作为图层添加到此合成，会报错。

参数：

  * item：要添加的AVItem项目。
  * duration：持续时间（秒），浮点值，可选。当项目为静止镜头时可用，默认是合成持续时间。或者“编辑>首选项>导入>静止素材”指定。对电影，序列或音频的持续时间无影响。

返回：AVLayer对象;

示例：先选择合成1，运行脚本，把深灰色纯色2 添加到 合成1 里。

![](https://mir.yuelili.com/wp-content/uploads/2021/07/59f87fb98b1eaea8853a67d04260432c.png)

    
    
    var My_Layers = app.project.activeItem.layers  //先选择合成1
    alert(My_Layers.length) //返回2
    My_Layers.add(app.project.item(3))
    alert(My_Layers.length)  //返回3

## addBoxText() 创建段落文本图层 #

app.project.item(index).layers.addBoxText([width, height])

描述：创建段落框文本图层，并将新的TextLayer对象添加到此集合。创建普通文本图层，请使用LayerCollection.addText()方法。

参数：

  * [width, height] ，新文本框尺寸数组。

返回：TextLayer对象。

    
    
    app.project.activeItem.layers.addBoxText([500,500])

## addCamera() 创建摄像机 #

app.project.item(index).layers.addCamera(name, centerPoint)

描述：创建摄像机图层，并将CameraLayer对象添加到此集合。新图层采用“在合成开始时创建图层”首选项。

参数：

  * name：图层名称，字符串。
  * centerPoint：中心点[x，y]，浮点数组。用于设置“兴趣点”。z值设置为0。

返回：CameraLayer对象。

    
    
    app.project.activeItem.layers.addCamera('我是色相机',[500,500])

## addLight() 创建灯光图层 #

app.project.item(index).layers.addLight(name, centerPoint)

描述：创建灯光图层，并将它添加到此集合中。起始时间遵循：编辑 - 常规 - “在合成开始时创建图层”。

参数：

  * name：包含新图层名称的字符串。
  * centerPoint：新光源的中心是一个浮点数组[x，y]。

返回：LightLayer对象。

    
    
    app.project.activeItem.layers.addLight('我是灯光',[500,500])

## addNull() 创建空对象 #

app.project.item(index).layers.addNull([duration])

描述：创建空对象并将AVLayer对象添加到此集合。等同于“图层>新建>空对象”。

参数：

  * duration，图层持续时间(秒)，浮点数， 可选。

如果不提供duration，则根据用户偏好设置，默认情况下，是合成持续时间。或者是“编辑>首选项>导入>静止素材”指定。

返回：AVLayer对象。

    
    
    app.project.activeItem.layers.addNull()

## addShape() 创建形状图层 #

app.project.item(index).layers.addShape()

描述：创建形状图层。使用ShapeLayer对象添加属性，例如形状，填充，描边和路径。等同于＂图层 - 新建 - 形状＂。会自动添加一个组。

参数：无。

返回：ShapeLayer对象。

    
    
    app.project.activeItem.layers.addShape()

## addSolid() 创建纯色图层 #

app.project.item(index).layers.addSolid(color, name, width, height,
pixelAspect[, duration])

描述：创建纯色图层；

  * 创建新的纯色源（SolidSource）FootageItem的值设置为mainSource，然后将FootageItem添加到项目中。
  * 创建一个新的AVLayer对象，将新的FootageItem作为其source，然后将图层添加到此集合中。

参数：

  * color：颜色，是三个浮点值的数组。[R, G, B]均为0.0~1.0
  * name：名称，字符串。
  * width：宽度(像素)，整数，4~30000。
  * height：高度(像素)，整数，4~30000。
  * pixelAspect：像素长宽比，浮点值，0.01~100.0。
  * duration:可选，持续时间(秒)，浮点值。默认为合成持续时间。或者“编辑>首选项>导入>静止素材”指定。

返回：AVLayer对象。

    
    
    app.project.activeItem.layers.addSolid([0.5,0.5,0.5],'我是纯色层',1920,1080,1)

## addText() 创建文本图层 #

app.project.item(index).layers.addText([sourceText])

描述：创建文本图层，并将新的TextLayer对象添加到此集合。段落框文本层请使用LayerCollection.addBoxText()。

参数：

  * sourceText，字符串，选填，文字图层源文本，或包含新图层源文本的TextDocument对象。（其他 - textDocument对象）

返回：TextLayer对象。

    
    
    app.project.activeItem.layers.addText('我是文字层')

## byName() 根据名称找图层 #

app.project.item(index).layers.byName(name)

描述：根据指定名称，查找的第一(最顶层)图层（因为名称可能有很多重复的）；如果找不到则返回null。

参数：

  * name，图层名称，字符串。

返回：图层对象或null。

    
    
    alert(app.project.activeItem.layers.byName('我是纯色层').name) //找到"我是纯色层"图层，并弹出它的名称

## precompose() 预合成 #

app.project.item(index).layers.precompose(layerIndicies, name[,
moveAllAttributes])

描述：创建新的合成对象，然后把指定图层移动到新合成中。从原集合删除图层，并添加到新的合成对象中。

参数：

  * layerIndices：图层索引。整数数组。[1,2]代表合成的第1和第2个图层。
  * name：预合成名称。
  * moveAllAttributes ：选填。如果为true(默认值)，则＂将所有属性移动到新合成＂。如果只预合成1个图层，则只能为false 。即“保留合成XX的所有属性”

返回：CompItem对象。

    
    
    app.project.activeItem.layers.precompose([1,2],'预合成')

