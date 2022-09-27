---
title: AVItem 对象
order: 4
category:
  - AE
---
    # AVItem object #

app.project.item(index)

描述：AVItem 对象，用于访问AE中的带有音频/视频文件。A：Audio（音频） V：Video（视频）

父级关系：AVItem是Item的子类。使用AVItem时，Item的方法和属性均可用。

子级关系：AVItem是合成（CompItem）和素材（footageItem）的基类，因此在使用合成和素材对象时，AVItem属性和方法均可用。

__Warning

合成和素材虽然是AVItem的逻辑后代，但实际上不是AVItem的子类，因为Extendscript中不存在AVItem。
尝试检查AVItem的项目instanceof是否会失败，因为AVItem未定义。 对于项目本身也是如此。

# 属性 #

## duration 持续时间 #

app.project.item(index).duration

描述：返回项目持续时间(秒)。静止镜头项目的持续时间为0。

  * 合成（CompItem）：合成持续时间，读/写。
  * 素材（FootageItem）：素材持续时间，只读。

类型：浮点值，0.0~10800.0

示例：返回第4个项目的持续时间

    
    
    alert(app.project.item(4).duration)

![](https://mir.yuelili.com/wp-content/uploads/2021/07/ac0a347903749db48d2103de51ede74a.png)

## footageMissing 素材缺失判断 #

app.project.item(index).footageMissing

描述：设置为true时，AVItem是占位符，或显示为素材丢失。此时，missingFootagePath为素材丢失时的路径

请参阅footageItem.mainSource 和 FileSource.missingFootagePath。

类型：布尔值；只读。

    
    
    app.project.item(4).footageMissing

示例：如果第4个素材丢失了，则返回true

## frameDuration 单帧长度 #

app.project.item(index).frameDuration

描述：返回AVItem的单帧长度（秒）。

类型：浮点值，1/99~1.0，读/写；素材文件则只读。

示例：将第一个项目的单帧设置为0.04，也就是25帧/s

    
    
    app.project.item(1).frameDuration = 0.04

## frameRate 帧速率 #

app.project.item(index).frameRate

描述：AVItem的帧速率。

  * 在合成中，读/写。
  * 在素材中，只读。要改变它，请设置mainSource对象的conformFrameRate。

类型：浮点值，1.0~99.0

## hasAudio 音频判断 #

app.project.item(index).hasAudio

描述：如果AVItem有音频，则为true。

  * 在合成中，该​​值链接到合成。
  * 在素材中，该​​值链接到mainSource对象。

类型：布尔值 只读。

## hasVideo 视频判断 #

app.project.item(index).hasVideo

描述：如果AVItem有视频，则为true。

  * 在合成中，该​​值链接到合成。
  * 在素材中，该​​值链接到mainSource对象。

类型：布尔值 只读。

## height 高度 #

app.project.item(index).height

描述：项目的高度(以像素为单位)。

  * 在合成中，该​​值链接到合成，读/写。
  * 在素材中，该​​值链接到mainSource对象，当mainSource是SolidSource（纯色图层）时才可读/写。否则只读。

类型：整数，（1~30000）

## isMediaReplacementCompatible !不懂 #

app.project.item(index).isMediaReplacementCompatible

__Note!

此功能已添加到After Effects 18.0(2021)中

描述：测试在调用Property.setAlternateSource()时，是否可以将AVItem用作备用源。如果可以使用则返回true；否则返回false。

可以将合成（CompItem）或素材（footageItem）用作图层的替代源，但有一些限制：

  * 如果AVItem是素材对象，则FootageItem.FootageSource不应是SolidSource对象。
  * 如果AVItem是素材对象，而FootageItem.FootageSource是FileSource对象，则该FileSource不应指向非媒体文件，例如.JSX脚本文件。
  * 设置AVItem不能在项目内创建循环引用。

类型：布尔值；只读。

## name 名称 #

app.project.item(index).name

描述：项目名称，如“项目”面板中所示。

在素材中，该​​值链接到mainSource对象。如果mainSource对象是FileSource，则此值控制“项目”面板中的显示名称，但不影响文件名。

类型：字符串; 读/写。

示例：设置项目面板第1个项目的名称，并弹窗提醒

    
    
    app.project.item(1).name ='合成111'
    alert(app.project.item(1).name)

## pixelAspect 像素长宽比 #

app.project.item(index).pixelAspect

描述：项目的像素长宽比(PAR)。

  * 在合成中，该​​值链接到合成。
  * 在素材中，该​​值链接到mainSource对象。

设置后检索的值可能与您提供的值略有不同。下表将UI中显示的值与此属性返回的更准确的值进行比较。

PAR in AE | pixelAspect属性返回的PAR  
---|---  
0.91 | 0.90909090909091  
1 | 1  
1.5 | 1.5  
1.09 | 1.09401709401709  
1.21 | 1.21212121212121  
1.33 | 1.33333333333333  
1.46 | 1.45868945868946  
2 | 2  
  
类型：浮点值，范围0.01~100.0；读/写。

## proxySource 代理源 #

app.project.item(index).proxySource

描述：被用作代理的素材源对（footageSource）。只读；

改变AVItem代理源的方法：setProxy(), setProxyWithSequence(), setProxyWithSolid(), 或者
setProxyWithPlaceholder().

类型：素材源对象（FootageSource）；只读。

## time 项目预览时间 #

app.project.item(index).time

描述：直接从“项目面板”预览项目的当前时间（秒）。使用全局方法timeToCurrentFormat()可以将其转换为以帧。如果源是静止的(item.mainSource.isStilltrue)，则无法设置时间（否则报错）。

类型：浮点值；读/写。

![](https://cdn.yuelili.com/20210912193526.png)

示例：返回项目面板第1个项目的当前时间轴预览时间

    
    
    alert(app.project.item(1).time)

## usedIn 该合成的父级 #

app.project.item(index).usedIn

描述：使用该AVItem的所有合成。请注意，在检索时，是直接复制数组，因此不会自动更新。如果获取此值，然后将此项目添加到另一个合成中，则必须重新获取，更新一下。

类型：CompItem对象的数组；只读。

示例：合成1 在合成2与合成3内部，下面会返回包含合成1的所有合成集合，然后找到其中第1个合成，也就是合成2。

![](https://mir.yuelili.com/wp-content/uploads/2021/07/f40c16919f33ef474567440ec0e38a27.png)

    
    
    alert(app.project.item(1).usedIn[0].name)

## useProxy 是否使用代理 #

app.project.item(index).useProxy

描述：如果该项目使用代理用，则为true。使用SetProxy可以设置代理，使用SetProxyToNone()可以取消代理。

类型：布尔值，读/写。

## width 项目宽度 #

app.project.item(index).width

描述：项目的宽度（像素）。

  * 在CompItem中，该​​值链接到合成，读/写。
  * 在FootageItem中，该​​值链接到该mainSource对象，并且仅当该mainSource对象是SolidSource时才可读/写。否则只读。

类型：整数，范围为1~30000；读/写，除非另有说明。

# 方法 #

## setProxy() 设置代理 #

app.project.item(index).setProxy(file)

描述：设置文件作为代理。将指定的文件加载到新的FileSource对象中，将其设置为代理源（proxySource）的值，使用代理（useProxy）为true。

不保留解释参数，而是使用用户首选项。如果文件具有未标记的Alpha通道，并且用户首选项询问用户如何设置，则该方法将估算Alpha解析，而不会询问用户。这与设置素材项目（footageItem）的mainSource有所不同，但是两个操作均在用户界面中执行。

参数：

  * file：用作代理的文件，ExtendScript File对象。

返回：无。

## setProxyToNone() 删除代理 #

app.project.item(index).setProxyToNone()

描述：从AVItem中删除代理，将代理源（proxySource）设置为null，并将使用代理（useProxy）设置为false。

参数：无。

返回：无。

## setProxyWithPlaceholder() 使用占位符设置代理 #

app.project.item(index).setProxyWithPlaceholder(name, width, height
,frameRate, duration)

描述：创建具有指定值的占位符对象（PlaceholderSource），将它设置为proxySource对象的值，然后将useProxy设置为true。不保留解析参数，而是使用用户首选项。

__Note!

在用户界面中无法直接将占位符设置为代理。当已设置代理，然后将其移动或删除时，才会这样。

参数：

  * name：包含新对象名称的字符串。
  * width， height：占位符的像素尺寸，4~30000范围的整数。
  * frameRate：每秒帧数，1~99的整数
  * duration：总长度(秒)，最多3小时。范围0.0~10800.0的整数。

返回：无。

## setProxyWithSequence() 使用序列设置代理 #

app.project.item(index).setProxyWithSequence(file,forceAlphabetical)

描述：设置文件序列作为此AVItem的代理，并可以选择强制按字母顺序排列。将指定的文件序列加载到新的FileSource对象中，将其设置为proxySource属性的值，然后设置useProxy为true。

不保留解释参数，而是使用用户首选项。如果文件具有未标记的Alpha通道，并且用户首选项询问用户如何设置，则该方法将估算Alpha解析，而不会询问用户。

参数：

  * file：序列中第一个文件，ExtendScript File对象。
  * forceAlphabetical：如果为true，则使用“强制字母顺序”选项。

返回：无。

## setProxyWithSolid() 使用纯色图层设置代理 #

app.project.item(index).setProxyWithSolid(color, name, width, height,
pixelAspect)

描述：创建具有指定值的SolidSource对象，将此对象设置为proxySource属性的值，然后设置useProxy为true。不保留解析参数，而是使用用户首选项。

__Note!

无法在用户界面将纯色设置为代理。此功能仅可 **通过脚本** 实现。

参数：

  * color：颜色，[R，G，B]数组，范围为[0.0~1.0]。
  * name：名称，字符串。
  * width， height：占位符的像素尺寸，整数，范围为[1…30000]。
  * pixelAspect：像素宽高比，浮点值，范围为[0.01…100.0]范围。

返回：无。

