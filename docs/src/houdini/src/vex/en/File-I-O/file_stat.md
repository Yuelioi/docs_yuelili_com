---
title: file_stat
order: 2
category:
  - vex
---

On this page

- [Better file_stat functions](#better)
- [Examples](#examples)

`int file_stat(string filename, int &stat_data[], ...)`

Overwrites an integer array with data representing the file system
information for the given file.

**Do not use this function**. The `file.h` include file has [more convenient versions of this function](file_stat.html) (#better) which return a struct.

## Arguments

"`usecache`",
`int`
`=0`

If this option is on, the function will use a persistent cache to store results of the function. The cache is persistent over the entire run of the application.

## Returns

`1` if the path is valid or `0` otherwise.

##

Better file_stat functions

[¶](#better)

Instead of using the built-in `file_stat`, add this line at the top of the file:

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

##

Examples

[¶](#examples)

This simple [snippet](../snippets.html) checks if a texture file exists, and if so, colors points green instead of red:

```c
#include <file.h>

v@Cd = {1,0,0};
stat s = file_stat("$HH/pic/Mandril.pic");
if (s->isValid())
 v@Cd = {0,1,0};

```

This example defines `file_size`, `file_exists`, and `file_isdir` convenience functions using the information from `file_stat`.

```c
#include <file.h>

int file_size(string name)
{
 stat info(name);
 return file_stat(name)->st_size;
}

int file_exists(string name)
{
 // Use cached file_stat() results
 return cached_file_stat(name)->isValid();
}

int file_isdir(string name)
{
 return file_stat(name)->isDir();
}

```
