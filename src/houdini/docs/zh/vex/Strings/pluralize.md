---
title: pluralize
order: 20
category:
  - houdini
---
    
## 描述

Converts an English noun to its plural.

```c
string  pluralize(string noun)
```

The English language is full of nonstandard rules for pluralizing nouns. This
function will properly create the plural ending for the input string. Only the
end of the input string is used.

英语中充满了非标准的名词复数化规则。 这个函数将为输入字符串正确地创建复数结尾。 只使用输入字符串的结尾。

## Examples

    string boxes = pluralize("box");string women = pluralize("woman");string geometries = pluralize("geometry");// Returns the string "Pluralize the last words"string phrase = pluralize("Pluralize the last word");
