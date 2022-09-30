---
title: relativepath
order: 21
category:
  - houdini
---
    
## 描述

Computes the relative path for two full paths.

```c
string  relativepath(string src, string dest)
```

Computes the relative path required to get from the `src` path to the `dest`
path.

计算从 srcpath 到 destpath 所需的相对路径。

## Examples

-

```c
relativepath("/obj/geo1/box", "/obj/ropnet1/mantra1")
```

\- returns

```c
../../ropnet1/mantra1
```

relativepath("/obj/geo1/box", "/obj/ropnet1/mantra1")--返回././ropnet1/mantra1
