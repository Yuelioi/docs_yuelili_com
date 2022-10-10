---
title: Accessing the After Effects Function Suites
order: 4
category:
  - AE 插件开发
---

# Accessing the After Effects Function Suites

If you are writing C++ code, accessing the suites should be done using the AEFX_SuiteScoper which automatically acquires the suite when needed and disposes of it when done.

Here is an example using AEFX_SuiteScope to access the PF_GPUDeviceSuite1 suite:

```cpp
AEFX\_SuiteScoper<PF\_GPUDeviceSuite1> gpu\_suite = AEFX\_SuiteScoper<PF\_GPUDeviceSuite1>(
 in\_dataP,
 kPFGPUDeviceSuite,
 kPFGPUDeviceSuiteVersion1,
 out\_dataP);

```

:::tip

AEFX_SuiteScoper will throw an Exception, `A\_Err\_MISSING\_SUITE`, if the requested suite cannot be acquired and the optional second template argument, `ALLOW\_NO\_SUITE`, is set to false. If you set `ALLOW\_NO\_SUITE` to false, please ensure you wrap the `AEFX\_SuiteScoper<>` call with a try/catch wrapper. If `ALLOW\_NO\_SUITE` is set to true, then you should check the returned pointer is not NULL before using it.

Once you have the suite you may make calls to any function in the suite list so:

```cpp
gpu\_suite->GetDeviceInfo(in\_dataP->effect\_ref, extraP->input->device\_index, &device\_info);

```

If you must use C code, then acquire and release the suites manually using the `PF\_Suite\_Helper` utility files, as demonstrated in the Checkout sample project.

Behind the scenes, both of these methods acquire PICA function suites using `AcquireSuite`, a member function of the `SPBasicSuite` pointed to in `PF\_InData`.

---

## Suite Versions

WhizBangSuite1 may provide a Foobar() function which takes two arguments, and WhizBangSuite2>Foobar() may take three. Though each new version of a suite supercedes the old one, feel free to acquire multiple versions of the same suite; we never remove or alter previously shipped suites.

When unsure of the capabilities of the plug-in host (no third party host besides Premiere supports PICA), attempt to acquire the latest version, and “fall back” to previous versions. If functionality you require isn’t available, warn the user, and return an error (or fall back on other behavior when running in more “primitive” plug-in hosts). :::tip that support for these suites in other hosts of After Effects plug-ins is a maze of twisty caves and passages, all alike.

---

## Threading

Unless documented otherwise, assume that any function provided by our suites is not thread-safe. For example, only your plug-in’s main thread should do anything that modifies the user interface.
