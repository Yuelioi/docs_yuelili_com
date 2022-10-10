---
title: Compute Cache API
order: 22
category:
  - AE 插件开发
---

# Compute Cache API

The Compute Cache API provides a thread-safe cache as a replacement or supplement to Sequence Data where effects can compute, store and read data before or during Render. It should be used to cache data that is time consuming to compute. For Multi-Frame Rendering effects it can have a large benefit by eliminating redundant computation across threads. The cache is unified with other caches in After Effects thus memory usage is balanced across other caches. The model also supports the user doing A/B testing with parameters and the cache state persisting for both A and B states thus speeding up workflow. These last two design characteristics benefit both single- and multi-frame rendering effects.

The Compute Cache is implemented in the AEGP_ComputeCache suite and is accessible via `AEGP\_ComputeCacheSuite1` and `AEGP\_ComputeCacheCallbacks`.

---

## AEGP_ComputeCacheSuite1

| **Function**          | **Purpose**                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `AEGP\_ClassRegister` | Registers the cache type using a globally unique identifier for the compute class, such as “adobe.ae.effect.test_effect.cache_v_1”. |

An object of type `AEGP\_ComputeCacheCallbacks` should be setup with function pointers to the callback methods required by `AEGP\_ComputeCacheSuite1`.
This function will typically be called during `PF\_Cmd\_GLOBAL\_SETUP`, but can be called any time.

```cpp
A\_Err (\*AEGP\_ClassRegister)(
 AEGP\_CCComputeClassIdP compute\_classP,
 const AEGP\_ComputeCacheCallbacks \*callbacksP);

```

|
| `AEGP\_ClassUnRegister` | Unregister a previously registered cache type using the globally unique identifier for the compute class.
All cached values will be purged at this time through calls to delete_compute_value.
This function will typically be called during `PF\_Cmd\_GLOBAL\_SETDOWN`, but can be called any time.

```cpp
A\_Err (\*AEGP\_ClassUnregister)(
 AEGP\_CCComputeClassIdP compute\_classP);

```

|
| `AEGP\_ComputeIfNeededAndCheckout` | This is the main checkout call that is used to compute and/or return an `AEGP\_CCCheckoutReceiptP` receipt pointer to the cache entry.
Pass in the `AEGP\_CCComputeClassIdP` that was used in the `AEGP\_RegisterClass` method.
The `AEGP\_CCComputeOptionsRefconP` object will be passed through to the `AEGP\_ComputeCacheCallbacks`, `generate\_key` and `compute` method as needed. This objects type is opaque to `AEGP\_ComputeCacheSuite1` and will need to be casted appropriately by the effects implementation of `generate\_key` and `compute`.
The `wait\_for\_other\_threadB bool` is used when the cache value needs to be computed. When set to `true`, the method will always execute the compute step or return a completed receipt to the cache. When set to `false`, this method will complete the compute step unless another thread is already computing the cache entry, in which case `A\_Err\_NOT\_IN\_CACHE\_OR\_COMPUTE\_PENDING` will be returned. See [Impact of wait_for_other_threadB on AEGP_ComputeIfNeededAndCheckout](#effect-details-wait-for-other-threadb) for more information on this parameter.
The `CCCheckoutReceiptP` is an opaque pointer that can then be passed into `AEGP\_GetReceiptComputeValue` to get a pointer to the computed value from the cache.

```cpp
A\_Err (\*AEGP\_ComputeIfNeededAndCheckout)(
 AEGP\_CCComputeClassIdP compute\_classP,
 AEGP\_CCComputeOptionsRefconP opaque\_optionsP,
 bool wait\_for\_other\_threadB,
 AEGP\_CCCheckoutReceiptP \*compute\_receiptPP);

```

|
| `AEGP\_CheckoutCached` | Use this method to check if the cache value has already been computed, returning the `AEGP\_CCCheckoutReceiptP` receipt if available.
If the cache has not been computed, `A\_Err\_NOT\_IN\_CACHE\_OR\_COMPUTE\_PENDING` will be returned.

```cpp
A\_Err (\*AEGP\_CheckoutCached)(
 AEGP\_CCComputeClassIdP compute\_classP,
 AEGP\_CCComputeOptionsRefconP opaque\_optionsP,
 AEGP\_CCCheckoutReceiptP \*compute\_receiptPP);

```

|
| `AEGP\_GetReceiptComputeValue` | Use this method to retrieve the cache value from the compute method.
Pass in the receipt received from `AEGP\_ComputeIfNeededAndCheckout` or `AEGP\_CheckoutCached`.
The returned `CCComputeValueRefconP` should be casted to the correct object type that was used in the `compute` method.

```cpp
A\_Err (\*AEGP\_GetReceiptComputeValue)(
 const AEGP\_CCCheckoutReceiptP compute\_receiptP,
 AEGP\_CCComputeValueRefconP \*compute\_valuePP);

```

|
| `AEGP\_CheckinComputeReceipt` | Call this method after the effect code is done using a checked-out, computed cache value, before returning to the host, passing in the receipt returned from `AEGP\_ComputeIfNeededAndCheckout` or `AEGP\_CheckoutCached`.
If the receipt being passed in is invalid, error `A\_Err\_STRUCT` will be returned. A pop-up error dialog will also be shown with this message, **“Trying to check in invalid receipt. Please make sure you are not double checking in or checking in invalid receipts.”**

```cpp
A\_Err (\*AEGP\_CheckinComputeReceipt)(
 AEGP\_CCCheckoutReceiptP compute\_receiptP );

```

|

---

## AEGP_ComputeCacheCallbacks

The effect must provide implementations for these callbacks.

| **Function**    | **Purpose**                                                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `generate\_key` | Called when creating a cache entry and when doing a cache lookup. Should be fast to compute. All of the inputs needed to uniquely address the cache entry must be hashed into the key. If a layer checkout is needed to calculate the cache value, such as with a histogram, then the hash of that input must be included. |

See `PF\_ParamUtilsSuite::PF\_GetCurrentState` to get the hash for a layer param. :::tip this is the hash of the inputs needed to generate the frame, not a hash the pixels in the frame, thus a render is not triggered when making this call.
The `AEGP\_CCComputeOptionsRefconP` will contain the data passed into the `AEGP\_ComputeIfNeededAndCheckout` or `AEGP\_CheckoutCached` methods.
The `AEGP\_CComputeKeyP` `out\_keyP` returns the hashed key value, see the `AEGP\_CCComputeKey` definition in the `AE\_ComputeCacheSuite.h` for type definition.

:::tip
The `AEGP\_CCComputeOptionsRefconP` parameter passed into `generate\_key` and `compute` must contain all inputs to calculate the hash key for a cache value / to compute the cache value itself.
This will frequently include many or all of the effect parameters and any layer parameters needed to calculate the cache value. See the [Real-world Integration Example](#effect-details-compute-cache-real-example) for more details.

```cpp
A\_Err (\*generate\_key)(
 AEGP\_CCComputeOptionsRefconP optionsP,
 AEGP\_CCComputeKeyP out\_keyP);

```

|
| `compute` | Called by `AEGP\_ComputeIfNeededAndCheckout` when a cache value needs to be computed.
The `AEGP\_CCComputeOptionsRefconP` will contain the data passed into the `AEGP\_ComputeIfNeededAndCheckout` method.
Set `out\_valuePP` to point to the result of the computed cache value, casted to the `AEGP\_CCComputeValueRefconP` type.
For example:

```cpp
\*out\_valuePP = reinterpret\_cast<AEGP\_CCComputeValueRefconP>(myComputedResultP);

```

```cpp
A\_Err (\*compute)(
 AEGP\_CCComputeOptionsRefconP optionsP,
 AEGP\_CCComputeValueRefconP \*out\_valuePP);

```

|
| `approx\_size\_value` | Called by the cache system to determine the total footprint of memory being used by the computed cache value. The computed value is not required to be a flat structure.
The size is an input to the cache purging heuristic.
The `AEGP\_CCComputeValueRefconP` is the computed cache value that can be used to generate the size value to return.

```cpp
size\_t (\*approx\_size\_value)(
 AEGP\_CCComputeValueRefconP valueP);

```

|
| `delete\_compute\_value` | This is called to free the value when the cache entry needs to be purged. All resources owned by the cache value must be freed here.

```cpp
void (\*delete\_compute\_value)(
 AEGP\_CCComputeValueRefconP valueP);

```

|

---

## Generating a Key

The `generate\_key` callback must return a unique key within the Registered Class to be used as the cache key for an entry in the cache but for future-proofing, we’d strongly suggest the key is globally unique across all registered classes. The AE SDK provides the `AEGP\_HashSuite1` suite to assist in generating a GUID that can be used as the key.

The result of `generate\_key` must be provided as a `AEGP\_CCComputeKey` object which is type defined from the following struct:

```cpp
typedef struct AEGP\_GUID {
 A\_long bytes[4];
} AEGP\_GUID;

```

---

## AEGP_HashSuite1

The `AEGP\_HashSuite1` can be used to generate a unique key for use within the `AEGP\_ComputeCacheCallbacks` `generate\_key()` callback method.

After the suite is acquired, call the `AEGP\_CreateHashFromPtr()` method with a buffer; we suggest a character array with a recognizable string so you can easily recall what’s being stored in the cache entry. Then call `AEGP\_HashMixInPtr()` with any effect parameters, layer checkout hash results, etc., that should result in a different cache key and entry.

| **Function**              | **Purpose**                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `AEGP\_CreateHashFromPtr` | Call this to begin creating the hash which will be returned in `hashP` that can be used for returning from `generate\_key`. |

```cpp
A\_Err (\*AEGP\_CreateHashFromPtr)(
 const A\_u\_longlong buf\_sizeLu,
 const void \*bufPV,
 AEGP\_GUID \*hashP);

```

|
| `AEGP\_HashMixInPtr` | Call this for each effect parameter, layer checkout hash or other data that would be used in calculating a cache entry.

```cpp
A\_Err(\*AEGP\_HashMixInPtr)(
 const A\_u\_longlong buf\_sizeLu,
 const void \*bufPV,
 AEGP\_GUID \*hashP);

```

|

Here’s an example of using the `AEGP\_HashSuite1` where Levels2Histo_generate_key_cb() is a callback called for `generate\_key()`:

```cpp
A\_Err Levels2Histo\_generate\_key\_cb(AEGP\_CCComputeOptionsRefconP opaque\_optionsP, AEGP\_CCComputeKeyP out\_keyP)
{
 try
 {
 const Levels2Histo\_options& histo\_op( \*reinterpret\_cast<Levels2Histo\_options\*>(opaque\_optionsP));
 A\_Err err = Err\_NONE;

 AEFX\_SuiteScoper<AEGP\_HashSuite1> hash\_suite = AEFX\_SuiteScoper<AEGP\_HashSuite1>(
 in\_dataP,
 kAEGPHashSuite,
 kAEGPHashSuiteVersion1,
 out\_dataP);

 // define a simple buffer that is easy to recognize as a starting hash
 const char\* hash\_buffer = "Level2Histo";
 err = hash\_suite->AEGP\_CreateHashFromPtr(sizeof(hash\_buffer), hash\_buffer, out\_keyP);

 // Mix in effect parameters that would create a different compute result and should generate a different cache entry and key.
 if (!err) {
 err = hash\_suite->AEGP\_HashMixInPtr(sizeof(histo\_op.depthL), &histo\_op.depthL, out\_keyP);
 }

 if (!err) {
 err = hash\_suite->AEGP\_HashMixInPtr(sizeof(histo\_op.bB), &histo\_op.bB, out\_keyP);
 }

 // mix in any other effect parameters that should affect the cache key
 // ...

 // out\_keyP is returned as the generated key for use as the cache key.
 }
 catch (...)
 {
 /\* return most appropriate PF\_Err \*/
 }
}

```

---

## Compute or Checkout the Cache Value

When adding cache support one of the first questions to answer is if a single render call needs to checkout more than one cache value. If more than one cache value is needed to complete a render, then the multi-checkout pattern can be applied to concurrently calculate the caches across multiple render calls and thus avoid serialization of the compute.

### Single Cache Value

If a render call only needs one cache value for rendering a frame, then set the `wait\_for\_other\_threadB` parameter in `AEGP\_ComputeIfNeededAndCheckout` to `true`. The checkout call will return a receipt, possibly calling the compute callback to populate the cache; or waiting on another thread that had already started the needed computation.

### Multi-Checkout Cache Values

If a render call needs multiple cache values, then the multi-checkout pattern can be used to keep the render threads utilized and thus avoid serializing the compute.

The concept of using multi-checkout is to have one render (e.g. rendering frame 3) thread take advantage of any other render threads (e.g. frame 1, 2) that are computing needed cache values concurrently with the thread (e.g. frame 3 needs data from frames 1 and 2). If no other threads are computing the requested cached value, then the render thread (frame 3) will execute the compute. Once all the cache value checkout calls have been made, the render thread (frame 3) can then wait for any other threads (frame 1, 2) to finish their compute before executing the pixel rendering. Once the pixel rendering is complete, make sure to check-in any cache values that were checked out (frame 1, 2 and 3).

Below is example pseudo-code to illustrate this approach.

```cpp
Render()
{
 // Make a request for each cache value that is needed to complete the render
 bool first\_err = AEGP\_ComputeIfNeededAndCheckout(first\_options, do\_not\_wait, first\_cache\_receipt);
 bool second\_err = AEGP\_ComputeIfNeededAndCheckout(second\_options, do\_not\_wait, second\_cache\_receipt);
 // Add as many additional do\_not\_wait checkout calls here as needed.

 // Once all the requests have been made, check to see if any of the Checkouts did not return
 // a valid checkout receipt.
 if(first\_err == A\_Err\_NOT\_IN\_CACHE\_OR\_COMPUTE\_PENDING) {
 AEGP\_ComputeIfNeededAndCheckout(wait, first\_cache\_receipt);
 }
 if(second\_err == A\_Err\_NOT\_IN\_CACHE\_OR\_COMPUTE\_PENDING) {
 AEGP\_ComputeIfNeededAndCheckout(wait, second\_cache\_receipt);
 }
 // Add as many additional waiting checkout calls here as needed

 // All cache values are now available via AEGP\_GetReceiptComputeValue for use in the Render

 // ... complete the render steps

 // Check in all cache values now
 AEGP\_CheckinComputeReceipt(first\_cache\_receipt);
 AEGP\_CheckinComputeReceipt(second\_cache\_receipt);
}

```

---

## Impact of wait_for_other_threadB on AEGP_ComputeIfNeededAndCheckout

Calls to `AEGP\_ComputeIfNeededAndCheckout` will return a checkout receipt for the cache value in nearly every permutation of the parameters, except when `wait\_for\_other\_threadB` is set to `false` and another thread is already rendering the requested cache value.

| **Cache State**                                                                                            | **wait_for_other_threadB set to False**                             | **wait_for_other_threadB set to True** |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------- |
| _No cache for key_                                                                                         | Compute and checkout receipt returned                               | Compute and checkout receipt returned  |
| _Being computed by another thread_                                                                         | Returns A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING                       |
| :::tip that After Effects will not report this error to the user, it is only for the effect to respond to. | Wait for another thread and return checkout receipt upon completion |
| _Cached_                                                                                                   | Checkout receipt returned                                           | Checkout receipt returned              |

---

## Checking Cache State

- There may be scenarios where an effect needs to check if a cache value has been computed but doesn’t want to actually execute or block while waiting on another thread to complete the compute. This can be achieved through the `AEGP\_CheckoutCached()` method.
- This call could be used to implement a polling pattern where another piece of code is expected to populate the cache. For example, a UI thread could poll the cache for a histogram that is generated on a render thread.
- If the cache value is available, the `AEGP\_CCCheckoutReceiptP` parameter will return a checkout receipt that can be passed to `AEGP\_GetReceiptComputeValue()` to retrieve the cache value. If the cache value is not available, the method will return a `A\_Err\_NOT\_IN\_CACHE\_OR\_COMPUTE\_PENDING` error code.

---

## Persistence of Cache

- Unlike flattened sequence data, the contents of the Compute Cache are not stored with the project and anything computed will need to be recomputed when the project is reopened.
- Entries in the cache will automatically purge if memory is needed for other operations by After Effects. Code relying on the cache value being available should be written assuming the compute step will need to be completed each time.
- The `approx\_size\_value` callback should return quickly but provide a reasonably accurate measurement of the data being held by the cache entry. This will allow After Effects to make better decisions on what to purge and when.
- Unregistering the cache class will remove all data of that class from the cache. It will cause a `delete\_compute\_value` callback to be made for each entry in the cache associated with the cache class.
- The `delete\_compute\_value` callback should free any resources related to the cache entry. The Compute Cache only contains a void \* pointer to the resources and cannot free the resources on behalf of the effect.

---

## Real-world Integration Example

The Auto Color plugin that ships with After Effects is an effect that now utilizes the Compute Cache and the `HashSuite1` suite to cache histogram and level data used when the effect parameter, Temporal Smoothing, is set to a value greater than 0.

The initial steps in integrating the Cache and Hash suites were to identify what data was being computed by Auto Color’s Temporal Smoothing, what portions of that computation are time-consuming, and then what effect parameters would cause a re-compute to be needed.

:::tip

Each effect will need to compute and cache different data, so you’ll need to do this review uniquely for your effect.

For Auto Color’s Temporal Smoothing, the frame being rendered needs both histogram and level data from the frames surrounding it. The number of surrounding frames that are needed is based on the temporal smoothing parameters value. Both the histogram and levels data can be expensive to calculate but in general can be calculated once for each frame, cached, and then reused as needed.

However, in the Auto Color effect are a number of other parameters that are used to calculate the cache values including the Black Clip, White Clip, Mid Tones and the Auto Color mode. Accordingly, these parameters need to be included in the `generate\_key` and `compute` methods.

With that information in hand, we began the integration of the Compute Cache:

1. Define the class registration id and add calls to register and unregister the checkout cache class and callbacks

> - The call to AEGP_ClassRegister is executed during `PF\_Cmd\_GLOBAL\_SETUP`.
> - The call to AEGP_ClassUnregister is executed during `PF\_Cmd\_GLOBAL\_SETDOWN`.

2. Implement the callback functions for `generate\_key`, `compute`, `approx\_size\_value` and `delete\_compute\_value`.

> - `generate\_key` utilizes the `AEGP\_HashSuite1` to generate a unique key mixing in the black clip, white clip, mid tones and auto levels mode. It also mixes in the frame time and time step to ensure the cache is unique for the specific frame being computed.
> - `compute` calculates the histogram and levels and stores those two data structures into a single struct that is set as the `out\_valuePP` parameter from the compute callback.
> - `approx\_size\_value` adds the `sizeof()` the histogram and level data structures that are in the cached value to return the size of the memory being used by the cache entry.
> - `delete\_compute\_value` clears the memory held by the histogram and level data structures for the cache entry.

3. Integrate the compute/checkout call into Temporal Smoothing

> - The Temporal Smoothing code was updated to include calls to `AEGP\_ComputeIfNeededAndCheckout`. The calls are made for each frame time / time step needed for the Temporal Smoothing algorithm, utilizing the results from other rendering threads computing surrounding frame histogram and levels data.

4. Integrate the cache check-out and check-in

> - Once all the required cache values were computed for a frame, the effect code checks out the cache values needed using `AEGP\_GetReceiptComputeValue`.
> - The cache values are then used as part of the temporal smoothing algorithm to make the adjustments to the color of the frame.
> - Once the cache values are no longer needed by the current frame, a call to `AEGP\_CheckinComputeReceipt` is made for each cache value receipt.
> - Auto Color does not use `AEGP\_CheckoutCached` at this time.

5. Testing sequence_data versus Compute Cache implementations

> - Auto Color was using sequence data to store the histogram and levels data, and prior to using the Compute Cache, it would have a unique copy of sequence_data on each rendering thread. This meant that every histogram and level required for a frame would need to be rendered on every thread.
> - With the change to use the Compute Cache, each frame being rendered gained the performance benefits of other render threads computing the histogram and levels data and storing it for future use.
> - The improvement in rendering the Auto Color effect over a piece of footage with the Compute Cache has resulted in at least 3x faster renders than the sequence_data version.
