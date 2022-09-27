---
title: Collection 集合对象
order: 2
category:
  - AE
---
    # Collection object 集合对象 #

说明：像数组一样，将一组对象或值关联到一个逻辑组，并通过索引对进行访问子对象。但大多数集合对象是只读的。无需为它们分配对象，它们的内容会随着对象的创建或删除而自动更新。

__Note!

集合的索引编号从1开始，而不是0。

# 对象们 #

ItemCollection对象：在“项目”面板中找到的所有项目（导入的文件，文件夹，纯色层等）。

LayerCollection对象：合成中的所有图层。

OMCollection对象：项目中的所有输出模块（Output Module）项目。

RQItemCollection对象：项目中的所有渲染队列项。

# 属性 #

## length #

集合中对象的数量。

# 方法 #

## [] #

通过索引号检索集合中的对象。第一个对象索引为1。

