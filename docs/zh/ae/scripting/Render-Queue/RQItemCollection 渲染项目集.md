---
title: RQItemCollection 渲染项目集
order: 3
category:
  - AE
---
    # 渲染队列项目集 #

app.project.renderQueue.items

描述：渲染队列集（RQItemCollection）包含项目中的所有渲染队列项，如项目的“渲染队列”面板中所示。该集合提供对RenderQueueItem对象的访问，并允许您从合成中创建它们。集合中的第一个RenderQueueItem对象索引位置为1。

RQItemCollection是Collection对象的子类。使用RQItemCollection时，Collection的所有方法和属性均可用。

# 方法 #

## add() 添加到渲染队列 #

app.project.renderQueue.items.add(comp)

描述：将合成添加到“渲染队列”，创建一个RenderQueueItem。

参数：comp，要添加的合成，为CompItem对象。

返回：RenderQueueItem对象。

