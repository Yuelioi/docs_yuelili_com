---
title: Mask 蒙版与路径
order: 8
category:
  - AE表达式
---
可以针对以下对象使用表达式读写路径点或顶点的 x 坐标和 y 坐标：  
图层蒙版  
贝塞尔曲线形状  
针对"绘画"和"Roto 笔刷和优化边缘"效果的画笔描边。

## 路径示意图

![](https://mir.yuelili.com/wp-content/uploads/user/AE/expression/a-z/createPath-sample1.png)

## name

说明：路径名称名称

返回：字符串

例如：

```javascript
thisComp.layer("Solid 1").mask("Mask 1").name 
//返回Mask 1
```

```

