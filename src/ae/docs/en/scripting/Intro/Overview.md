---
title: Overview
order: 2
category:
  - AE 脚本
---

## Introduction to scripting in After Effects¶

A script is a series of commands that tells an application to perform a seriesof operations. You can use scripts in most Adobe applications to automaterepetitive tasks, perform complex calculations, and even use somefunctionality not directly exposed through the graphical user interface. Forexample, you can direct After Effects to reorder the layers in a composition,find and replace source text in text layers, or send an e-mail message when
rendering is complete.

Although both the After Effects expressions language and the After EffectsExtendScript scripting language is based on JavaScript, the expressionsfeatures and scripting features of After Effects are separate and distinct.Expressions cannot access information from scripts (such as variables andfunctions). Whereas a script tells an application to do something, anexpression says that a property is something. However, because the AfterEffects expression language and ExtendScript are both based on JavaScript,familiarity with either one is very helpful in understanding the other.

The heart of a scriptable application is the object model. When you use AdobeAfter Effects, you create projects, compositions, and render queue items alongwith all of the elements that they contain: footage, images, solids, layers,masks, effects, and properties. Each of these items, in scripting terms, is anobject. This guide describes the ExtendScript objects that have been definedfor After Effects projects.

The After Effects object model is composed of a project, items, compositions,layers, and render queue items. Each object has its own special attributes,and every object in an After Effects project has its own identity (althoughnot all are accessible to scripting). You should be familiar with the AfterEffects object model in order to create scripts.

:::info Note

JavaScript objects normally referred to as “properties” are consistentlycalled “attributes” in this guide, to avoid confusion with After Effects’ owndefinition of a property (an animatable value of an effect, mask, or transformwithin an individual layer).
:::
Nearly all of what scripting can accomplish replicates what can be done bymeans of the After Effects graphical user interface. A thorough knowledge ofthe application itself and its graphical user interface is essential tounderstanding how to use scripting in After Effects.

## The ExtendScript language¶

After Effects scripts use the Adobe ExtendScript language, which is anextended form of JavaScript used by several Adobe applications, includingPhotoshop, Illustrator, and InDesign. ExtendScript implements the JavaScriptlanguage according to the ECMA-262 specification. The After Effects scriptingengine supports the 3rd Edition of the ECMA-262 Standard, including itsnotational and lexical conventions, types, objects, expressions, andstatements. ExtendScript also implements the E4X ECMA-357 specification, whichdefines access to data in XML format.

ExtendScript defines a global debugging object, the dollar (`$`) object, and areporting utility for ExtendScript elements, the ExtendScript Reflection
interface.

**File and Folder Objects:** Because pathname syntax is very different in
different operating systems, Adobe ExtendScript defines[File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) and [Folder](https://extendscript.docsforadobe.dev/file-system-access/folder-object.html) objects to provide platform-independent access tothe underlying file system.

**ScriptUI User Interface Module:** The ExtendScript ScriptUI module provides
the ability to create and interact with user interface elements. ScriptUIprovides an object model for windows and UI control elements that you can useto create a user interface for your scripts.

**Tools and Utilities:** In addition, ExtendScript provides tools and features
such as a localization utility for providing user-interface string values indifferent languages and global functions for displaying short messages indialog boxes (alert, confirm, and prompt).

**External Communication:** ExtendScript provides a Socket object that allows
you to communicate with remote systems from your After Effects scripts.

**Interapplication Communication:** ExtendScript provide s a common scripting
environment for all Adobe applications, and allows inter-applicationcommunication through scripts.

## The ExtendScript Toolkit (ESTK)¶

After Effects includes a script editor and debugger, the ExtendScript Toolkit(ESTK), which provides a convenient interface for creating and testing your
own scripts.

To start the ESTK, choose File > Scripts > Open Script Editor.

If you choose to use another text editor to create, edit, and save scripts, besure to choose an application that does not automatically add headerinformation when saving files and that saves with Unicode (UTF-8) encoding. Inmany text editors, you can set preferences for saving with UTF-8 encoding.Some applications (such as Microsoft Word) by default add header informationto files that can cause “line 0” errors in scripts, causing them to fail.

For detailed information on the ExtendScript Toolkit, see the [JavaScriptTools Guide](https://extendscript.docsforadobe.dev/).

## The .jsx and .jsxbin file-name extensions¶

ExtendScript script files are distinguished by the `.jsx` file-name extension,a variation on the standard `.js` extension used with JavaScript files. AfterEffects scripts must include the `.jsx` file extension in order to be properlyrecognized by the application. Any UTF-8-encoded text file with the `.jsx`extension is recognized as an ExtendScript file.

You can use the ExtendScript Toolkit to export a binary version of anExtendScript file, which has the extension .jsxbin. Such a binary file may notbe usable with all of the scripting integration features in After Effects.

## Activating full scripting features¶

The default is for scripts to not be allowed to write files or send or receivecommunication over a network. To allow scripts to write files and communicateover a network, choose Edit > Preferences > General (Windows) or After Effects> Preferences > General (Mac OS), and select the Allow Scripts To Write FilesAnd Access Network option.

Any After Effects script that contains an error preventing it from beingcompleted generates an error message from the application. This error messageincludes information about the nature of the error and the line of the scripton which it occurred. The ExtendScript Toolkit (ESTK) debugger can openautomatically when the application encounters a script error. This feature isdisabled by default so that casual users do not encounter it. To activate thisfeature, choose Preferences > General, and select Enable JavaScript Debugger.

## Loading and running scripts¶

### Running scripts directly from the File > Scripts menu¶

When After Effects starts, it searches the Scripts folder for scripts to load.Loaded scripts are available from the File > Scripts menu.

To run a loaded script, choose File > Scripts > [script name].

If you edit a script while After Effects is running, you must save yourchanges for the changes to be applied. If you place a script in the Scriptsfolder while After Effects is running, you must restart After Effects for thescript to appear in the Scripts menu, though you can immediately run the newscript using the Run Script File command.

### Running scripts using File > Scripts > Run Script File¶

To run a script that has not been loaded, choose File > Scripts > Run ScriptFile, locate and select a script, and click Open.

### Running scripts from the command line, a batch file, or an AppleScript

script¶

If you are familiar with how to run a script from the command line in Windowsor via AppleScript, you can send a script directly to the open After Effectsapplication, so that the application automatically runs the script.

To run a script from the command line, call afterfx.exe from the command line.Use the `-r` switch and the full path of the script to run as arguments. Thiscommand does not open a new instance of the After Effects application; it runsthe script in the existing instance.

Example (for Windows):

```javascript
afterfx -r c:\script_path\example_script.jsx
```

You can use this command-line technique—together with the software that comeswith a customizable keyboard—to bind the invocation of a script to a keyboard
shortcut.

Following are examples of Windows command-line entries that will send an AfterEffects script to the application without using the After Effects userinterface to execute the script.

In the first example, you copy and paste your After Effects script directly onthe command line and then run it. The script text appears in quotation marksfollowing the afterfx.exe -s command:

```javascript
afterfx.exe -s "alert("You just sent an alert to After
Effects")"
```

Alternatively, you can specify the location of the JSX file to be executed.
For example:

```javascript
afterfx.exe -r c:\myDocuments\Scripts\yourAEScriptHere.jsx
afterfx.exe -r "c:\myDocuments\Scripts\Script Name with Spaces.jsx"
```

### How to include After Effects scripting in an AppleScript (Mac OS)¶

The following are three examples of AppleScript scripts that will send anexisting JSX file containing an After Effects script to the applicationwithout using the After Effects user interface to execute the script.

In the first example, you copy your After Effects script directly into theScript Editor and then run it. The script text appears within quotation marksfollowing the DoScript command, so internal quotes in the script must beescaped using the backslash escape character, as follows

```javascript
tell application "Adobe After Effects CS6" DoScript
"alert(\"You just sent an alert to After Effects\")" end tell
```

Alternatively, you could display a dialog box asking for the location of theJSX file to be executed, as follows:

```javascript
set theFile to choose file tell application "Adobe After
Effects CS6" DoScript theFile end tell
```

:::info Note

This documentation is incorrect, the correct invocation in this instance is `DoScriptFile`

Finally, this script is perhaps most useful when you are working directly onediting a JSX script and want to send it to After Effects for testing or torun. To use it effectively you must enter the application that contains theopen JSX file (in this example it is TextEdit); if you do not know the propername of the application, type in your best guess to replace “TextEdit” andAppleScript prompts you to locate it.
:::
Simply highlight the script text that you want to run, and then activate this
AppleScript:

```javascript
(* This script sends the current selection to After Effects as
a script. *) tell application "TextEdit" set the_script to text of frontdocument end tell tell application "Adobe After Effects CS6" activate DoScriptthe_script end tell
```

### Running scripts automatically during application startup or shutdown¶

Within the Scripts folder are two folders called Startup and Shutdown. AfterEffects runs scripts in these folders automatically, in alphabetical order, onstarting and quitting, respectively.

In the Startup folder, you can place scripts that you wish to execute atstartup of the application. They are executed after the application isinitialized and all plug-ins are loaded.

Scripting shares a global environment, so any script executed at startup candefine variables and functions that are available to all scripts. In allcases, variables and functions, once defined by running a script that containsthem, persist in subsequent scripts during a given After Effects session. Oncethe application is quit, all such globally defined variables and functions arecleared. Be sure to give variables in scripts unique names, so that a scriptdoes not inadvertently reassign global variables intended to persist
throughout a session.

Attributes can also be added to existing objects such as the [Applicationobject](../general/application.html#application) to extend the application for
other scripts.

The Shutdown folder scripts are executed as the application quits. This occursafter the project is closed but before any other application shutdown occurs

### Running scripts from the Window menu¶

Scripts in the ScriptUI Panels folder are available from the bottom of theWindow menu. If a script has been written to provide a user interface in adockable panel, the script should be put in the ScriptUI folder. ScriptUIpanels work much the same as the default panels in the After Effects user
interface.

Instead of creating a Window object and adding controls to it, a ScriptUIPanels script uses the `this` object that represents the panel. For example,the following code adds a button to a panel:

```javascript
var myPanel = this;
myPanel.add("button", [10, 10, 100, 30], "Tool #1");
```

If your script creates its user interface in a function, you cannot use `this`as it will refer to the function itself, not the panel. In this case, youshould pass the `this` object as an argument to your function. For example:

```javascript
function createUI(thisObj) {
  var myPanel = thisObj;
  myPanel.add("button", [10, 10, 100, 30], "Tool #1");
  return myPanel;
}
varmyToolsPanel = createUI(this);
```

You cannot use the File > Scripts > Run Script File menu command to run ascript that refers to this. To make your script work with either a Windowobject (accessible from the File > Scripts menu) or a native panel (accessiblefrom the Window menu), check whether this is a Panel object. For example:

```javascript
function createUI(thisObj) {
  var myPanel = thisObj instanceof Panel ? thisObj : new Window("palette", "My Tools", [100, 100, 300, 300]);
  myPanel.add("button", [10, 10, 100, 30], "Tool #1");
  return myPanel;
}
varmyToolsPanel = createUI(this);
```

### Stopping a running script¶

A script can be stopped by pressing Esc or Cmd+period (in Mac OS) when theAfter Effects or the script’s user interface has focus. However, a script thatis busy processing a lot of data might not be very responsive.
