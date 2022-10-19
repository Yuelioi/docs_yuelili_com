---
title: Exceptions
order: 13
category:
  - AE 插件开发
---

# Exceptions

处理所有由你的插件代码产生的异常，\_在你的插件中。把那些不是由你的插件的代码产生的异常传递给 After Effects。

After Effects 的 API 是为用 C 语言编写的插件而设计的，它不期望出现异常。如果从插件中抛出异常，After Effects 会立即崩溃。

效果样本在 "main() "函数中的 switch 语句周围使用了防火墙，AEGPs 用 try/catch 块包裹了他们的函数钩子。
