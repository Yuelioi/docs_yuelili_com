---
title: pcimportbyidxv
order: 19
category:
  - houdini
---
    
## 描述

Imports channel data from a point cloud outside a `pciterate` or a
`pcunshaded` loop.

```c
vector  pcimportbyidxv(int handle, string channel_name, int idx)
```

After a [pcopen](pcopen.html) "Returns a handle to a point cloud file.") and a
[pcnumfound](pcnumfound.html "This node returns the number of points found by
pcopen."), this can be used to extract specific search results from the found
points.

After apcopenand apcnumfound, this can be used to extract specific search
results from the found points.

This will return 0 if the channel doesn‘t exist.

This will return 0 if the channel doesn‘t exist.
