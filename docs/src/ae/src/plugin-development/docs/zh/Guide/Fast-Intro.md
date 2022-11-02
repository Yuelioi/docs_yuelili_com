---
title: 快速入门
order: 1
category:
  - AE 插件开发
---

## 示例文件

使用 vs 打开 SDK 文件夹的 `Template > Skeleton > Win > Skeleton.vcxproj`

::: tip
请先备份 Template 文件夹 方便后续创建新模板
:::

## 配置

### 环境变量设置

最后面的文件夹自己定义

AE_PLUGIN_BUILD_DIR(插件生成目录) > C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\YLL

![环境变量](images\environment.png)

TargetPath(调试器目录,可选) : 你的 ae 路径

![1665287136892](images/1665287136892.png)

### 项目属性

选择 Skeleton(vs 2015),右键属性设置,或者点图标

上面的变量其实就是这里的(默认就是这个,不用改)

![环境变量](images\property.png)

## 编译

右键这玩意 点编译

![1665220885176](images/1665220885176.png)

## 调试

还是属性设置, 设置为 AE 路径

![img](images\ae.png)

或者在配置 > 环境变量配置里, 追加环境变量 TargetPath : 你的 ae 路径

![1665287136892](images/1665287136892.png)

F5 运行,或者自己点 `本地 Windows 调试器`

![1665220525248](images/1665220525248.png)

## 其他

修改项目名称,

Sketon 改为 LetterBox

![1665285887802](images/1665285887802.png)
