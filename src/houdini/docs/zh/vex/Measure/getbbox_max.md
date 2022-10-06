---
title: getbbox_max
order: 4
category:
  - houdini
---
    
## 描述

Returns the maximum of the bounding box for the geometry.

```c
vector  getbbox_max(<geometry>geometry)
```

Computes the maximum of the bounding box for the geometry.

Computes the maximum of the bounding box for the geometry.

```c
vector  getbbox_max(<geometry>geometry, string primgroup)
```

Computes the maximum of the bounding box of the primitives in the given group.

Computes the maximum of the bounding box of the primitives in the given group.

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

Alternatively, the argument can be a string specifying a geometry file (for
example, a.bgeo) to read from. When running inside Houdini, this can be
anop:/path/to/sopreference.
