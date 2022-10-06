---
title: cinput
order: 6
category:
  - houdini
---
    
## 描述

Samples the exact (unfiltered) pixel color at the given coordinates.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
vector  cinput(int u, int v, ...)
```

```c
vector4  cinput(int u, int v, ...)
```

```c
vector  cinput(float u, float v, ...)
```

```c
vector4  cinput(float u, float v, ...)
```

```c
float  cinput(int component, int u, int v, ...)
```

```c
float  cinput(int component, float u, float v, ...)
```

```c
vector  cinput(int opinput, int planeindex, int u, int v, ...)
```

```c
vector4  cinput(int opinput, int planeindex, int u, int v, ...)
```

```c
vector  cinput(int opinput, int planeindex, float u, float v, ...)
```

```c
vector4  cinput(int opinput, int planeindex, float u, float v, ...)
```

```c
float  cinput(int opinput, int planeindex, int component, int u, int v, ...)
```

`float cinput(int opinput, int planeindex, int component, float u, float v, ...)`

`vector cinput(int opinput, int planeindex, int arrayindex, int u, int v, int frame, ...)`

`vector4 cinput(int opinput, int planeindex, int arrayindex, int u, int v, int frame, ...)`

`vector cinput(int opinput, int planeindex, int arrayindex, float u, float v, int frame, ...)`

`vector4 cinput(int opinput, int planeindex, int arrayindex, float u, float v, int frame, ...)`

`float cinput(int opinput, int planeindex, int arrayindex, int component, int u, int v, int frame, ...)`

`float cinput(int opinput, int planeindex, int arrayindex, int component, float u, float v, int frame, ...)`

See [COP pixel sampling functions](../cop_sample_suite.html) for more
information.

更多信息见 COP 像素采样功能。
