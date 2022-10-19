---
title: Global Funcitons
order: 1
category:
  - AE 脚本
---

These globally available functions that are specific to After Effects. AnyJavaScript object or function can call these functions, which allow you todisplay text in a small (3-line) area of the Info panel, to convert numerictime values to and from string values, or to generate a random number.

| Global function          | Description                                                    |
| ------------------------ | -------------------------------------------------------------- |
| `clearOutput()`          | Clears text from the Info panel.                               |
| `currentFormatToTime()`  | Converts string time value to a numeric time value.            |
| `generateRandomNumber()` | Generates a random number.                                     |
| `timeToCurrentFormat()`  | Converts a numeric time value to a string time value.          |
| `write()`                | Writes text to the Info panel, with no line break added.       |
| `writeLn()`              | Writes text to the Info panel, adding a line break at the end. |
| `isValid()`              | When true, the specified object exists.                        |

Additional global functions for standard user I/O (`alert`, `confirm` , and`prompt`) and static functions for file I/O, are defined by ExtendScript; fordetailed reference information, see the [JavaScript ToolsGuide](https://extendscript.docsforadobe.dev/).

---

## clearOutput()

`clearOutput()`

**Description**: Clears the output in the Info panel.

**Parameters**: None.

**Returns**: Nothing.

---

## currentFormatToTime()

`currentFormatToTime(formattedTime, fps[, isDuration])`

**Description**: Converts a formatted string for a frame time value to a number of seconds,given a specified frame rate. For example, if the formatted frame time valueis 0:00:12 (the exact string format is determined by a project setting), andthe frame rate is 24 fps, the time would be 0.5 seconds (12/24). If the framerate is 30 fps, the time would be 0.4 seconds (12/30). If the time is aduration, the frames are counted from 0. Otherwise, the frames are countedfrom the project’s starting frame (see[Project.displayStartFrame](project.html#project-displaystartframe)).

**Parameters**:

| Para            | Description                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formattedTime` | The frame time value, a string specifying a number of frames in the project’scurrent time display format.                                             |
| `fps`           | The frames-per-second, a floating-point value.                                                                                                        |
| `isDuration`    | Optional. When true, the time is a duration (measured from frame 0). Whenfalse (the default), the time is measured from the project’s starting frame. |

**Returns**: Floating-point value, the number of seconds.

---

## generateRandomNumber()

`generateRandomNumber()`

::: info Note

This functionality was added in After Effects 13.6 (CC 2015)
:::
**Description**: Generates random numbers. This function is recommended instead of`Math.random` for generating random numbers that will be applied as values ina project (e.g., when using setValue).

This method avoids a problem where `Math.random` would not return randomvalues in After Effects CC 2015 (13.5.x) due to a concurrency issue with
multiple CPU threads.

**Returns**: Floating-point, pseudo-random number in the range [0, 1].

**Example**:

```javascript
// change the position X of all layers with random number
var myComp = app.project.activeItem;
var x = 0;
for (var i = 1; i <=myComp.numLayers; i++) {
   // If you use Math.random(), this does not work
   // x= 400 * (Math.random()) – 200;
   // use new generateRandomNumber() instead
   x =400 * generateRandomNumber() – 200;
   var currentPos =myComp.layer(i).property("Position").value;
   myComp.layer(i).property("Position").setValue([currentPos[0] + x,currentPos[1]]);
   }
```

---

## isValid()

`isValid(obj)`

**Description**: Determines if the specified After Effects object (e.g., composition, layer,mask, etc.) still exists. Some operations, such as[PropertyBase.moveTo()](../properties/propertybase.html#propertybase-moveto),might invalidate existing variable assignments to related objects. Thisfunction allows you to test whether those assignments are still valid beforeattempting to access them.

| **Parameters**: | Para                                            | Description |
| --------------- | ----------------------------------------------- | ----------- |
| `obj`           | The After Effects object to check for validity. |

**Returns**: Boolean.

**Example**:

```javascript
var layer = app.project.activeItem.layer(1); // assume layer
has three masks alert(isValid(layer)); // displays "true"
var mask1 =layer.mask(1); var mask2 = layer.mask(2); var mask3 = layer.mask(3);
mask3.moveTo(1);
// move the third mask to the top of the mask stackalert(isValid(mask1));
// displays "false"; mask2 and mask3 do as well

```

---

## timeToCurrentFormat()

`timeToCurrentFormat(time, fps[, isDuration])`

**Description**: Converts a numeric time value (a number of seconds) to a frame time value;that is, a formatted string thatshows which frame corresponds to that time, atthe specified rate. For example, if the time is 0.5 seconds, andthe frame rateis 24 fps, the frame would be 0:00:12 (when the project is set to display astimecode). If the framerate is 30 fps, the frame would be 0:00:15. The formatof the timecode string is determined by a project setting. If the time is aduration, the frames are counted from 0. Otherwise, the frames are countedfrom the project’s starting frame (see [ProjectdisplayStartFrame](project.html#project-displaystartframe) attribute).

| **Parameters**: | Para                                                                                                                                                  | Description |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `time`          | The number of seconds, a floating-point value.                                                                                                        |
| `fps`           | The frames-per-second, a floating-point value.                                                                                                        |
| `isDuration`    | Optional. When true, the time is a duration (measured from frame 0). Whenfalse (the default), the time is measured from the project’s starting frame. |

**Returns**: String in the project’s current time display format.

---

## write()

`write(text)`

**Description**: Writes output to the Info panel, with no line break added.

**Parameters**: `text` The string to display. Truncated if too long for the Info panel.

**Returns**: Nothing.

**Example**:

```javascript
write("This text appears in Info panel ");
write("with more on same line.");
```

---

## writeLn()

`writeLn(text)`

**Description**: Writes output to the Info panel and adds a line break at the end.

**Parameters**: `text` The string to display.

**Returns**: Nothing.

**Example**:

```javascript
writeLn("This text appears on first line");
writeLn("This text appears on second line");
```
