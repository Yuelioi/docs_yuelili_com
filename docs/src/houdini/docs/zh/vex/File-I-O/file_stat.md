---
title: file_stat
order: 2
category:
  - vex
---

在这一页

- [更好的 file_stat 功能](#better)
- [例子](#例子)

`int file\_stat(string filename, int &stat\_data[], ...)`

用代表给定文件的文件系统信息的数据覆盖一个整数阵列。

**不要使用这个函数**。`file.h`包含文件有[这个函数的更方便的版本](file_stat.html) ()(#更好)，它返回一个结构。

## Arguments

`int`
`=0`

"`usecache'", 如果这个选项是打开的，函数将使用一个持久的缓存来存储函数的结果。该缓存在应用程序的整个运行过程中是持久的。

## Returns

如果路径有效则为 "1"，否则为 "0"。

## 更好的 file_stat 功能

[¶](#better)

不使用内置的`file_stat`，而是在文件的顶部添加这一行。

```c
#include <file.h>

```

Then use the `file_stat` or `cached_file_stat` functions from that file. They take a file path string and return a struct (defined in `file.h`) with the following members:

`.st_size` The size of the file in bytes.
|
`.st_sizemb` The size of the file in megabytes.
|
`.st_mtime` The last modified time of this file.
|
`->isValid()` Return 1 if the file path refers to a valid file.
|
`->isFile()` Returns 1 if the file path refers to a file (rather than a directory).
|
`->isDir()` Returns 1 if the file path refers to a directory (rather than a file).
|
`->isRead()` Returns 1 if the file is readable.
|
`->isWrite()` Returns 1 if the file is writable.
|
`->isExecute()` Returns 1 if the file is executable.

## Examples



This simple [snippet](../snippets.html) checks if a texture file exists, and if so, colors points green instead of red:

```c
#include <file.h>

v@Cd = {1,0,0};
stat s = file\_stat("$HH/pic/Mandril.pic");
if (s->isValid())
 v@Cd = {0,1,0};

```

This example defines `file_size`, `file_exists`, and `file_isdir` convenience functions using the information from `file_stat`.

```c
#include <file.h>

int file\_size(string name)
{
 stat info(name);
 return file\_stat(name)->st\_size;
}

int file\_exists(string name)
{
 // Use cached file\_stat() results
 return cached\_file\_stat(name)->isValid();
}

int file\_isdir(string name)
{
 return file\_stat(name)->isDir();
}

```
