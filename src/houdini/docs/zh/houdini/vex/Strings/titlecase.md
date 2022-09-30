---
title: titlecase
order: 37
category:
  - houdini
---
    
## 描述

Returns a string that is the titlecase version of the input string.

```c
string  titlecase(string str)
```

Converts a normal sentence into titlecase. The rules in use are as follows:

将一个正常的句子转换为标题大写。使用中的规则如下。

- First and last world are always capitalized

第一个和最后一个世界总是大写的

- Subtitles are capitalized

副标题大写

- Capitalize all words other than: articles, prepositions, and conjunctions.

除了：冠词、介词和连接词之外，其他所有的词都要大写。

- Hyphenated words that are capitalized should have their second part capitalized as well

大写的连字符词，其第二部分也应大写。

- Words that already contain capital letters are not modified

已经包含大写字母的单词不作修改。
