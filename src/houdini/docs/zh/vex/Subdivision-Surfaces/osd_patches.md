---
title: osd_patches
order: 8
category:
  - houdini
---
    
## 描述

Returns a list of patch IDs for the patches in a subdivision hull.

```c
int [] osd_patches(<geometry>geometry, int face_id)
```

Each face in a subdivision hull may create one or more patches. This function
lists the patch ids for a corresponding face.

在一个细分船体中的每个面都可以创建一个或多个补丁。 这个函数列出了一个相应面的补丁 ID。

This is implemented using the following algorithm:

这是用以下算法实现的。

    int []osd_patches(const string file; const face_id){  int    patches[] = {};  int    first = osd_firstpatch(file, face_id);  if (first >= 0)  {    int    npatches = osd_patchcount(file, face_id);    for (int i = 0; i < npatches; i++)      append(patches, first+i);  }  return patches;}
