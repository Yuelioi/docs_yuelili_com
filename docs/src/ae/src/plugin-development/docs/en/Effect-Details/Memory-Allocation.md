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

## PF_HandleSuite1

| **Function** | **Purpose** | **Replaces** |
| ---| --- | --- |
| `host_new_handle` | Allocates a new handle.`<br />PF_Handle (*host_new_handle)(A_HandleSize size);` | `PF_NEW_HANDLE` |
| `host_lock_handle` | Locks a handle.`<br />void (*host_lock_handle)(PF_Handle pf_handle);` | `PF_LOCK_HANDLE` |
| `host_unlock_handle` | Unlocks a handle.`<br />void (*host_unlock_handle)( PF_Handle pf_handle);` | `PF_UNLOCK_HANDLE` |
| `host_dispose_handle` | Frees a handle.`<br />void (*host_dispose_handle)( PF_Handle pf_handle);` | `PF_DISPOSE_HANDLE` |
| `host_get_handle_size` | Returns the size, in bytes, of the reallocatable block whose handle is passed in.`<br />A_HandleSize (*host_get_handle_size)( PF_Handle pf_handle);` | `PF_GET_HANDLE_SIZE` |
| `host_resize_handle` | Resizes a handle.`<br />PF_Err (*host_resize_handle)( A_HandleSize new_sizeL, PF_Handle *handlePH);` | `PF_RESIZE_HANDLE` |
