---
title: Project
order: 1
category:
  - AE 表达式
---

## Project.fullPath

**Description**

The platform-specific absolute file path, including the project file name. Ifthe project has not been saved, it returns an empty string.

Example:

```javascript
thisProject.fullPath;
```

**Type**

String

---

## Project.bitsPerChannel

**Description**

The color depth of the project in bits per channel (bpc), as set in _ProjectSettings > Color Management_ They are one of 8, 16, or 32. Equivalent to thescripting project attribute app.project.bitsPerChannel.

Example:

```javascript
thisProject.bitsPerChannel;
```

**Type**

Number

---

## Project.linearBlending

**Description**

The state of the Blend Colors Using 1.0 Gamma option in _Project Settings >Color Management_. Equivalent to the scripting project attributeapp.project.linearBlending.

Example:

```javascript
thisProject.linearBlending;
```

**Type**

Boolean
