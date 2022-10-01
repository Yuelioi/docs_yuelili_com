---
title: Global 全局
order: 1
category:
  - AE表达式
---
## comp(name)

全名：comp(name)

类型：函数

说明：按照名称检索合成。一般要配合其他参数使用(打工仔)

参数：name 为字符串类型

返回：合成对象

示例：

```javascript
comp("合成1").layer("纯色层1").transform.scale // 返回合成1下纯色层1的缩放属性
```

## footage(name)

全名：footage(name)

类型：函数

说明：按照名称检索素材。一般要配合其他参数使用

参数：name 为字符串类型

返回：素材对象

示例：

```javascript
footage("video.mp4").duration // 返回1500 视频持续时间正好是1500帧
```

## thisComp

全名：thisComp.XXX

类型：对象

说明：当前合成。一般要与其他参数一起使用

参数：无

返回：合成对象

示例：

```javascript
thisComp.layer("Solid 1").transform.rotation// 返回当前合成下纯色层1的缩放属性值
```

## thisProject

全名：thisProject.XXX

类型：函数

说明：包含本表达式的项目。一般要配合其他参数使用

参数：无

返回：项目对象。

示例：

```javascript
thisProject.fullPath //返回当前工程文件在计算机里的绝对路径
```

## time

全名：无

类型：属性

说明：当前时间轴所在的时间，以秒为单位的合成时间。

参数：无

返回：数值（可以是小数）

示例：

```javascript
time //时间轴9秒多点处，会返回9.2164641613416
time.toFixed() //toFixed可以取整，故同一时间点返回整数9
```

## colorDepth

全名：无

类型：属性

说明：项目的颜色深度值。项目设置-颜色-深度，8位就返回数值8，依次类推

返回：数值

示例

![](https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global11.bmp)

```javascript
colorDepth // 返回8
```

## posterizeTime()

全名：posterizeTime(framesPerScond)

类型：函数

说明：此表达式允许把表达式的帧速率设置为低于合成的帧速率。

参数：framesPerSecond 是数值，代表表达式运行的帧速率。1就是一秒运行1次…依次类推。

返回：无

示例：每秒更新一次随机数

![](https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global2.png?imageView2/1/w/1034/h/438#)

```javascript
posterizeTime(1); //如果设置为2，那就每秒更新2次，也就是0.5s更新一次
a=random(10,20); //取随机数10-20
Math.round(a) //这个是给数值取整
```
