---
title: Memory Allocation
order: 5
category:
  - AE 插件开发
---

# Memory Allocation

Use After Effects for any memory allocations of significant size. For small allocations, you can use new and delete, but this is the exception, not the rule. In low-memory conditions (such as during RAM preview), it’s very important that plug-ins deal gracefully with out-of-memory conditions, and not compete with After Effects for OS memory. By using our memory allocation functions, After Effects can know when to free cached images, to avoid memory swapping. Failing to use our functions for sizable allocations can cause lock-ups, crashes, and tech support calls. Don’t do that.

If you’re wrapping existing C++ classes, create a base class that implements new and delete for that class and derive from it. To overload the STL, we don’t recommend you overload global new and delete. Instead provide an allocator as part of the template definition.

Handles passed to you by After Effects are locked for you before you’re called, and unlocked once you return.

---

## PF_HandleSuite1

| **Function**        | **Purpose**             | **Replaces** |
| ------------------- | ----------------------- | ------------ |
| `host\_new\_handle` | Allocates a new handle. |

```cpp
PF\_Handle (\*host\_new\_handle)(
 A\_HandleSize size);

```

| `PF\_NEW\_HANDLE` |
| `host\_lock\_handle` | Locks a handle.

```cpp
void (\*host\_lock\_handle)(
 PF\_Handle pf\_handle);

```

| `PF\_LOCK\_HANDLE` |
| `host\_unlock\_handle` | Unlocks a handle.

```cpp
void (\*host\_unlock\_handle)(
 PF\_Handle pf\_handle);

```

| `PF\_UNLOCK\_HANDLE` |
| `host\_dispose\_handle` | Frees a handle.

```cpp
void (\*host\_dispose\_handle)(
 PF\_Handle pf\_handle);

```

| `PF\_DISPOSE\_HANDLE` |
| `host\_get\_handle\_size` | Returns the size, in bytes, of the reallocatable block whose handle is passed in.

```cpp
A\_HandleSize (\*host\_get\_handle\_size)(
 PF\_Handle pf\_handle);

```

| `PF\_GET\_HANDLE\_SIZE` |
| `host\_resize\_handle` | Resizes a handle.

```cpp
PF\_Err (\*host\_resize\_handle)(
 A\_HandleSize new\_sizeL, PF\_Handle \*handlePH);

```

| `PF\_RESIZE\_HANDLE` |
