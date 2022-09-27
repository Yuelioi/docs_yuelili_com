---
title: FileSource 文件源
order: 2
category:
  - AE
---
    # 文件源对象 #

app.project.item(index).mainSource  
app.project.item(index).proxySource

描述：文件源（FileSource）对象，导入的文件素材。

父级关系：FileSource是素材源（footageSource）对象的子类。素材源的方法和属性均可用

# 属性 #

## file 资产文件 #

app.project.item(index).mainSource.file  
app.project.item(index).proxySource.file

描述：定义此资产文件的ExtendScript File对象。如果要更改值的话：

  * 如果FileSource是AVItem的proxySource，请调用setProxy()或setProxyWithSequence()。
  * 如果FileSource是footageItem的mainSource，请调用replace()或replaceWithSequence()。

类型：文件对象；只读。

示例：查找项目面板的文件（注意返回的是文件对象）

![](https://cdn.yuelili.com/20211012162834.png)

    
    
    var myFootage = app.project.item(2).mainSource
    alert(myFootage.file.toString()) 

## missingFootagePath 丢失素材路径 #

app.project.item(index).mainSource.missingFootagePath  
app.project.item(index).proxySource.missingFootagePath

描述：该资产缺少的素材的路径和文件名。另请参阅AVItem.footageMissing。

类型：字符串; 只读。

示例：查找项目面板的丢失文件路径（跟项目面板旁边的值一样）

![](https://cdn.yuelili.com/20211012162311.png)

    
    
    var myFootage = app.project.item(2).mainSource
    alert(myFootage.missingFootagePath) //（注意返回的是字符串）

# 方法 #

## reload() 文件重加载 //用不了 不知道为啥 #

app.project.item(index).mainSource.file.mainSource.reload()

描述：从文件中重新加载资产。此方法只能调用mainSource，而不能调用proxySource。

参数：无。

返回：无。

