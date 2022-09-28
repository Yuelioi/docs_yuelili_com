---
title: finput
order: 10
category:
  - houdini
---
    
## 描述

Returns fully filtered pixel input.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
vector  finput(int u, int v, ...)
```

```c
vector4  finput(int u, int v, ...)
```

```c
vector  finput(float u, float v, ...)
```

```c
vector4  finput(float u, float v, ...)
```

```c
float  finput(int component, int u, int v, ...)
```

```c
float  finput(int component, float u, float v, ...)
```

```c
vector  finput(int opinput, int planeindex, int u, int v, ...)
```

```c
vector4  finput(int opinput, int planeindex, int u, int v, ...)
```

```c
vector  finput(int opinput, int planeindex, float u, float v, ...)
```

```c
vector4  finput(int opinput, int planeindex, float u, float v, ...)
```

```c
float  finput(int opinput, int planeindex, int component, int u, int v, ...)
```

`float finput(int opinput, int planeindex, int component, float u, float v, ...)`

`vector finput(int opinput, int planeindex, int arrayindex, int u, int v, int frame, ...)`

`vector4 finput(int opinput, int planeindex, int arrayindex, int u, int v, int frame, ...)`

`vector finput(int opinput, int planeindex, int arrayindex, float u, float v, int frame, ...)`

`vector4 finput(int opinput, int planeindex, int arrayindex, float u, float v, int frame, ...)`

`float finput(int opinput, int planeindex, int arrayindex, int component, int u, int v, int frame, ...)`

`float finput(int opinput, int planeindex, int arrayindex, int component, float u, float v, int frame, ...)`

See [COP pixel sampling functions](../cop_sample_suite.html) for more
information.

更多信息见 COP 像素采样功能。
