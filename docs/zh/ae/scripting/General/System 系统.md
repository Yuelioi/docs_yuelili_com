---
title: System 系统
order: 5
category:
  - AE
---
    # 系统对象 #

描述：System对象用于访问用户系统的属性，例如用户名以及操作系统的名称和版本号。可通过system全局变量使用。

示例

    
    
    alert("你的系统名是：" + system.osName + " 运行版本是： + system.osVersion);
    confirm("你的用户名是：: " + system.userName + "，运行在" + system.machineName + ".");

# 属性篇 #

## machineName 计算机的名称 #

全名：system.machineName

描述：运行After Effects的计算机的名称。

类型：字符串; 只读。

## osName 操作系统名称 #

全名：system.osName

描述：运行After Effects的操作系统的名称。

__Warning

从Windows 7开始，此属性返回空白值。使用$ .os代替。

类型：字符串; 只读。

示例：

![](https://cdn.yuelili.com/20211027040058.png)

    
    
    alert($ .os)

## osVersion 操作系统版本 #

全名：system.osVersion

描述：当前本地操作系统的版本。

类型：字符串; 只读。

示例：

![](https://cdn.yuelili.com/20211027040132.png)

    
    
    alert(system.osVersion)
    

## userName 用户名 #

全名：system.userName

描述：当前登录到系统的用户名。

类型：字符串; 只读。

示例：

![](https://cdn.yuelili.com/20211027040201.png)

    
    
    alert(system.userName)
    

# 方法篇 #

## callSystem() 执行系统命令行 #

全名：system.callSystem(cmdLineToExecute);

描述：执行系统命令，跟在命令行上使用医用。返回系统响应命令输出的所有内容(如果有)。在Windows中，您可以使用命令的/c开关来调用命令，并将cmd.exe命令传递给以转义引号(\"...\")运行。例如，以下内容检索当前时间并将其显示给用户：

参数：

  * cmdLineToExecute：命令行工具以及调用指令，字符串。

返回：命令的输出。详细命令请自行学习cmd/bat相关内容

示例：在AE中运行CMD

    
    
    // 查看当前系统时间
    var timeStr = system.callSystem("cmd.exe /c \"time /t\"");
    alert("当前时间是：" + timeStr);
    
    // 用默认浏览器打开网址
    var url = "https://yuelili.com";
    system.callSystem("cmd.exe /c start " + url + '"')
    

