---
title: metastart
order: 4
category:
  - houdini
---
    
## 描述

Open a geometry file and return a “handle” for the metaballs of  
interest, at the position p.

```c
int  metastart(string filename, vector p)
```

Open a geometry file and return a “handle” for the metaballs ofinterest, at
the position p. You can then use[metanext](metanext.html "Iterate to the next
metaball in the list of metaballs returned by the metastart() function.") to
move the handle to the next metaball forevaluation, and
[metaimport](metaimport.html "Once you get a handle to a metaball using
metastart and metanext, youcan query attributes of the metaball with
metaimport.") to query attributes of themetaball.

打开一个几何文件并返回一个 "句柄 "给感兴趣的元宝，位置为 p。
