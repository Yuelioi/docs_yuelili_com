---
title: file_stat
order: 1
category:
  - houdini
---
    
## 描述

Returns file system status for a given file.

On this page |

- Better file_stat functions

更好的 file_stat 函数

- Examples

---|---

```c
int  file_stat(string filename, int &stat_data[], ...)
```

Overwrites an integer array with data representing the file systeminformation
for the given file.

用代表文件系统的数据覆盖一个整数数组

**Do not use this function**. The `file.h` include file has [more convenient
versions of this function](file_stat.html#better) which return a struct.

的信息。

"`usecache`",` int``=0 `

If this option is on, the function will use a persistent cache to store
results of the function.The cache is persistent over the entire run of the
application.

不要使用这个函数。file.hinclude 文件有这个函数的更方便的版本，它返回一个结构。

Returns

`1` if the path is valid or `0` otherwise.

如果这个选项是打开的，该函数将使用一个持久的缓存来存储函数的结果。 该缓存在应用程序的整个运行过程中是持久的。

## Better file_stat functions

Instead of using the built-in `file_stat`, add this line at the top of the
file:

如果路径是有效的，则为 1，否则为 0。

    #include <file.h>

Then use the `file_stat` or

```c
cached_file_stat
```

functions from that file. They
take a file path string and return a struct (defined in `file.h`) with the
following members:

不要使用内置的 file_stat，在文件的顶部添加这一行。

`.st_size`

|

The size of the file in bytes.

然后使用该文件中的 file_statorcached_file_statfunctions。它们接受一个文件路径字符串并返回一个结构体（定义在 file.h 中），其成员如下。

---|---

`.st_sizemb`

|

The size of the file in megabytes.

文件的大小，以字节为单位。

`.st_mtime`

|

The last modified time of this file.

该文件的大小，单位是兆字节。

`->isValid()`

|

Return 1 if the file path refers to a valid file.

该文件的最后修改时间。

`->isFile()`

|

Returns 1 if the file path refers to a file (rather than a directory).

如果文件路径指的是一个有效的文件，返回 1。

`->isDir()`

|

Returns 1 if the file path refers to a directory (rather than a file).

如果文件路径指的是一个文件（而不是一个目录），返回 1。

`->isRead()`

|

Returns 1 if the file is readable.

如果文件路径指的是一个目录（而不是一个文件），则返回 1。

`->isWrite()`

|

Returns 1 if the file is writable.

如果文件是可读的，返回 1。

`->isExecute()`

|

Returns 1 if the file is executable.

如果文件是可写的，返回 1。

## Examples

This simple [snippet](../snippets.html) checks if a texture file exists, and
if so, colors points green instead of red:

如果文件是可执行的，返回 1。

    #include <file.h>v@Cd = {1,0,0};stat s = file_stat("$HH/pic/Mandril.pic");if (s->isValid())v@Cd = {0,1,0};

This example defines `file_size`, `file_exists`, and `file_isdir` convenience
functions using the information from `file_stat`.

本例检查纹理文件是否存在，如果存在，则将点染成绿色而不是红色。

    #include <file.h>int file_size(string name){  stat    info(name);  return file_stat(name)->st_size;}int file_exists(string name){  // Use cached file_stat() results  return cached_file_stat(name)->isValid();}int file_isdir(string name){  return file_stat(name)->isDir();}
