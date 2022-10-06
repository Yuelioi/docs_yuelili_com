---
title: match
order: 17
category:
  - houdini
---
    
## 描述

This function returns 1 if the subject matches the pattern specified,  
or 0 if the subject doesn‘t match.

```c
int  match(string pattern, string subject)
```

This function returns 1 if the subject matches the pattern specified, or0 if
the subject doesn‘t match. The standard Houdini pattern matching isused.
Multiple patterns may be separated by spaces or commas. Thespecial characters
for matching are:

如果主题与指定的模式相匹配，该函数返回 1；如果主题不匹配，则返回 0。

- `?` Match any character

如果主题不匹配，则返回 0。标准的 Houdini 模式匹配被

- `*` Match any substring

使用。多个模式可以用空格或逗号分开。用于匹配的

- ` ` Match any of the characters specified in the list.

匹配的特殊字符是。

- If a pattern is prefixed by a caret (^), then subjects which matchthis pattern will be excluded from the match.

匹配任何字符

Examples:

- `a*` \- Match any string beginning with a.

\*匹配任何子串

- `a*,^aardvark` \- Match any string beginning with a except foraardvark.

[列表]匹配列表中指定的任何字符。

- `[abc]*z` \- Match any string beginning with a, b or c and ending withz.

如果一个模式的前缀是圆点（^），那么与此模式相匹配的主题将被排除在匹配之外。

- `g*,^geo*` \- Match any string beginning with g, but not any stringbeginning with geo.

的主体将被排除在匹配之外。
