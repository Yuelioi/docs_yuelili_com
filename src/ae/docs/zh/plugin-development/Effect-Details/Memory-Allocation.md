---
title: Memory Allocation
order: 5
category:
  - AE 插件开发
---
# Memory Allocation

使用After Effects来处理任何相当大的内存分配。对于小规模的分配，你可以使用new和delete，但这是个例外，而不是常规。在低内存条件下（如在RAM预览期间），插件要优雅地处理内存不足的情况，而不是与After Effects争夺操作系统内存，这是非常重要的。通过使用我们的内存分配函数，After Effects可以知道何时释放缓存的图像，以避免内存交换。如果不使用我们的函数来分配大量的内存，会导致锁定、崩溃和技术支持电话。不要这样做。

如果你要包装现有的C++类，请创建一个基类，为该类实现new和delete，并从它派生。为了重载STL，我们不建议你重载全局new和delete。相反，要提供一个分配器作为模板定义的一部分。

After Effects传递给你的处理程序在你被调用之前会被锁定，一旦你返回就会被解锁。

## PF_HandleSuite1

| **Function** | **Purpose** | **Replaces** |
| ---| --- | --- |
| `host_new_handle` | Allocates a new handle.`<br />PF_Handle (*host_new_handle)(A_HandleSize size);` | `PF_NEW_HANDLE` |
| `host_lock_handle` | Locks a handle.`<br />void (*host_lock_handle)(PF_Handle pf_handle);` | `PF_LOCK_HANDLE` |
| `host_unlock_handle` | Unlocks a handle.`<br />void (*host_unlock_handle)( PF_Handle pf_handle);` | `PF_UNLOCK_HANDLE` |
| `host_dispose_handle` | Frees a handle.`<br />void (*host_dispose_handle)( PF_Handle pf_handle);` | `PF_DISPOSE_HANDLE` |
| `host_get_handle_size` | Returns the size, in bytes, of the reallocatable block whose handle is passed in.`<br />A_HandleSize (*host_get_handle_size)( PF_Handle pf_handle);` | `PF_GET_HANDLE_SIZE` |
| `host_resize_handle` | Resizes a handle.`<br />PF_Err (*host_resize_handle)( A_HandleSize new_sizeL, PF_Handle *handlePH);` | `PF_RESIZE_HANDLE` |