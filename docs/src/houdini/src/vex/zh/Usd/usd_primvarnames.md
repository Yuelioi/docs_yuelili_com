---
title: usd_primvarnames
order: 111
category:
  - vex
---

Since 18.0

`string [] usd_primvarnames(<stage>stage, string primpath)`

This function returns the primvar names that are available on the given primitive.

## Arguments

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument can be an integer representing the input number (starting at 0) to read the stage from. The integer is equivalent to the string form referencing a particular input, e.g., “opinput:0”.

`primpath`

The path to the primitive.

## Returns

String array containing the names of the primitive’s primvars.

## Examples



```c
// Get the primvar names from the primitive.
string primvar_names[] = usd_primvarnames(0, "/geo/src_sphere");

```

## See also

- [usd_iprimvarnames](usd_iprimvarnames.html)
- [usd_isprimvar](usd_isprimvar.html)
- [usd_isprim](usd_isprim.html)

|
usd

[usd_addattrib](usd_addattrib.html)

[usd_addcollectionexclude](usd_addcollectionexclude.html)

[usd_addcollectioninclude](usd_addcollectioninclude.html)

[usd_addinversetotransformorder](usd_addinversetotransformorder.html)

[usd_addorient](usd_addorient.html)

[usd_addprim](usd_addprim.html)

[usd_addprimvar](usd_addprimvar.html)

[usd_addrelationshiptarget](usd_addrelationshiptarget.html)

[usd_addrotate](usd_addrotate.html)

[usd_addscale](usd_addscale.html)

[usd_addtotransformorder](usd_addtotransformorder.html)

[usd_addtransform](usd_addtransform.html)

[usd_addtranslate](usd_addtranslate.html)

[usd_attrib](usd_attrib.html)

[usd_attribelement](usd_attribelement.html)

[usd_attriblen](usd_attriblen.html)

[usd_attribnames](usd_attribnames.html)

[usd_attribsize](usd_attribsize.html)

[usd_attribtimesamples](usd_attribtimesamples.html)

[usd_attribtypename](usd_attribtypename.html)

[usd_blockattrib](usd_blockattrib.html)

[usd_blockprimvar](usd_blockprimvar.html)

[usd_blockprimvarindices](usd_blockprimvarindices.html)

[usd_blockrelationship](usd_blockrelationship.html)

[usd_boundmaterialpath](usd_boundmaterialpath.html)

[usd_childnames](usd_childnames.html)

[usd_clearmetadata](usd_clearmetadata.html)

[usd_cleartransformorder](usd_cleartransformorder.html)

[usd_collectioncomputedpaths](usd_collectioncomputedpaths.html)

[usd_collectioncontains](usd_collectioncontains.html)

[usd_collectionexcludes](usd_collectionexcludes.html)

[usd_collectionexpansionrule](usd_collectionexpansionrule.html)

[usd_collectionincludes](usd_collectionincludes.html)

[usd_drawmode](usd_drawmode.html)

[usd_findtransformname](usd_findtransformname.html)

[usd_flattenediprimvar](usd_flattenediprimvar.html)

[usd_flattenediprimvarelement](usd_flattenediprimvarelement.html)

[usd_flattenedprimvar](usd_flattenedprimvar.html)

[usd_flattenedprimvarelement](usd_flattenedprimvarelement.html)

[usd_getbbox](usd_getbbox.html)

[usd_getbbox_center](usd_getbbox_center.html)

[usd_getbbox_max](usd_getbbox_max.html)

[usd_getbbox_min](usd_getbbox_min.html)

[usd_getbbox_size](usd_getbbox_size.html)

[usd_getbounds](usd_getbounds.html)

[usd_getpointinstancebounds](usd_getpointinstancebounds.html)

[usd_hasapi](usd_hasapi.html)

[usd_haspayload](usd_haspayload.html)

[usd_iprimvar](usd_iprimvar.html)

[usd_iprimvarelement](usd_iprimvarelement.html)

[usd_iprimvarelementsize](usd_iprimvarelementsize.html)

[usd_iprimvarindices](usd_iprimvarindices.html)

[usd_iprimvarinterpolation](usd_iprimvarinterpolation.html)

[usd_iprimvarlen](usd_iprimvarlen.html)

[usd_iprimvarnames](usd_iprimvarnames.html)

[usd_iprimvarsize](usd_iprimvarsize.html)

[usd_iprimvartimesamples](usd_iprimvartimesamples.html)

[usd_iprimvartypename](usd_iprimvartypename.html)

[usd_isabstract](usd_isabstract.html)

[usd_isactive](usd_isactive.html)

[usd_isarray](usd_isarray.html)

[usd_isarrayiprimvar](usd_isarrayiprimvar.html)

[usd_isarraymetadata](usd_isarraymetadata.html)

[usd_isarrayprimvar](usd_isarrayprimvar.html)

[usd_isattrib](usd_isattrib.html)

[usd_iscollection](usd_iscollection.html)

[usd_iscollectionpath](usd_iscollectionpath.html)

[usd_isindexediprimvar](usd_isindexediprimvar.html)

[usd_isindexedprimvar](usd_isindexedprimvar.html)

[usd_isinstance](usd_isinstance.html)

[usd_isiprimvar](usd_isiprimvar.html)

[usd_iskind](usd_iskind.html)

[usd_ismetadata](usd_ismetadata.html)

[usd_ismodel](usd_ismodel.html)

[usd_isprim](usd_isprim.html)

[usd_isprimvar](usd_isprimvar.html)

[usd_isrelationship](usd_isrelationship.html)

[usd_isstage](usd_isstage.html)

[usd_istransformreset](usd_istransformreset.html)

[usd_istype](usd_istype.html)

[usd_isvisible](usd_isvisible.html)

[usd_kind](usd_kind.html)

[usd_localtransform](usd_localtransform.html)

[usd_makeattribpath](usd_makeattribpath.html)

[usd_makecollectionpath](usd_makecollectionpath.html)

[usd_makepropertypath](usd_makepropertypath.html)

[usd_makerelationshippath](usd_makerelationshippath.html)

[usd_makevalidprimname](usd_makevalidprimname.html)

[usd_makevalidprimpath](usd_makevalidprimpath.html)

[usd_metadata](usd_metadata.html)

[usd_metadataelement](usd_metadataelement.html)

[usd_metadatalen](usd_metadatalen.html)

[usd_metadatanames](usd_metadatanames.html)

[usd_name](usd_name.html)

[usd_parentpath](usd_parentpath.html)

[usd_pointinstance_getbbox](usd_pointinstance_getbbox.html)

[usd_pointinstance_getbbox_center](usd_pointinstance_getbbox_center.html)

[usd_pointinstance_getbbox_max](usd_pointinstance_getbbox_max.html)

[usd_pointinstance_getbbox_min](usd_pointinstance_getbbox_min.html)

[usd_pointinstance_getbbox_size](usd_pointinstance_getbbox_size.html)

[usd_pointinstance_relbbox](usd_pointinstance_relbbox.html)

[usd_pointinstancetransform](usd_pointinstancetransform.html)

[usd_primvar](usd_primvar.html)

[usd_primvarattribname](usd_primvarattribname.html)

[usd_primvarelement](usd_primvarelement.html)

[usd_primvarelementsize](usd_primvarelementsize.html)

[usd_primvarindices](usd_primvarindices.html)

[usd_primvarinterpolation](usd_primvarinterpolation.html)

[usd_primvarlen](usd_primvarlen.html)

[usd_primvarnames](usd_primvarnames.html)

[usd_primvarsize](usd_primvarsize.html)

[usd_primvartimesamples](usd_primvartimesamples.html)

[usd_primvartypename](usd_primvartypename.html)

[usd_purpose](usd_purpose.html)

[usd_relationshipforwardedtargets](usd_relationshipforwardedtargets.html)

[usd_relationshipnames](usd_relationshipnames.html)

[usd_relationshiptargets](usd_relationshiptargets.html)

[usd_relbbox](usd_relbbox.html)

[usd_removerelationshiptarget](usd_removerelationshiptarget.html)

[usd_setactive](usd_setactive.html)

[usd_setattrib](usd_setattrib.html)

[usd_setattribelement](usd_setattribelement.html)

[usd_setcollectionexcludes](usd_setcollectionexcludes.html)

[usd_setcollectionexpansionrule](usd_setcollectionexpansionrule.html)

[usd_setcollectionincludes](usd_setcollectionincludes.html)

[usd_setdrawmode](usd_setdrawmode.html)

[usd_setkind](usd_setkind.html)

[usd_setmetadata](usd_setmetadata.html)

[usd_setmetadataelement](usd_setmetadataelement.html)

[usd_setprimvar](usd_setprimvar.html)

[usd_setprimvarelement](usd_setprimvarelement.html)

[usd_setprimvarelementsize](usd_setprimvarelementsize.html)

[usd_setprimvarindices](usd_setprimvarindices.html)

[usd_setprimvarinterpolation](usd_setprimvarinterpolation.html)

[usd_setpurpose](usd_setpurpose.html)

[usd_setrelationshiptargets](usd_setrelationshiptargets.html)

[usd_settransformorder](usd_settransformorder.html)

[usd_settransformreset](usd_settransformreset.html)

[usd_setvariantselection](usd_setvariantselection.html)

[usd_setvisibility](usd_setvisibility.html)

[usd_setvisible](usd_setvisible.html)

[usd_specifier](usd_specifier.html)

[usd_transformname](usd_transformname.html)

[usd_transformorder](usd_transformorder.html)

[usd_transformsuffix](usd_transformsuffix.html)

[usd_transformtype](usd_transformtype.html)

[usd_typename](usd_typename.html)

[usd_uniquetransformname](usd_uniquetransformname.html)

[usd_variants](usd_variants.html)

[usd_variantselection](usd_variantselection.html)

[usd_variantsets](usd_variantsets.html)

[usd_worldtransform](usd_worldtransform.html)

|
usd_prim

[usd_addprim](usd_addprim.html)

[usd_attribnames](usd_attribnames.html)

[usd_boundmaterialpath](usd_boundmaterialpath.html)

[usd_childnames](usd_childnames.html)

[usd_drawmode](usd_drawmode.html)

[usd_hasapi](usd_hasapi.html)

[usd_haspayload](usd_haspayload.html)

[usd_iprimvarnames](usd_iprimvarnames.html)

[usd_isabstract](usd_isabstract.html)

[usd_isactive](usd_isactive.html)

[usd_isinstance](usd_isinstance.html)

[usd_iskind](usd_iskind.html)

[usd_ismodel](usd_ismodel.html)

[usd_isprim](usd_isprim.html)

[usd_istype](usd_istype.html)

[usd_isvisible](usd_isvisible.html)

[usd_kind](usd_kind.html)

[usd_metadatanames](usd_metadatanames.html)

[usd_name](usd_name.html)

[usd_parentpath](usd_parentpath.html)

[usd_primvarnames](usd_primvarnames.html)

[usd_purpose](usd_purpose.html)

[usd_relationshipnames](usd_relationshipnames.html)

[usd_setactive](usd_setactive.html)

[usd_setdrawmode](usd_setdrawmode.html)

[usd_setkind](usd_setkind.html)

[usd_setpurpose](usd_setpurpose.html)

[usd_setvariantselection](usd_setvariantselection.html)

[usd_setvisibility](usd_setvisibility.html)

[usd_setvisible](usd_setvisible.html)

[usd_specifier](usd_specifier.html)

[usd_typename](usd_typename.html)

[usd_variants](usd_variants.html)

[usd_variantselection](usd_variantselection.html)

[usd_variantsets](usd_variantsets.html)

|
usd_primvar

[usd_addprimvar](usd_addprimvar.html)

[usd_blockprimvar](usd_blockprimvar.html)

[usd_blockprimvarindices](usd_blockprimvarindices.html)

[usd_flattenediprimvar](usd_flattenediprimvar.html)

[usd_flattenediprimvarelement](usd_flattenediprimvarelement.html)

[usd_flattenedprimvar](usd_flattenedprimvar.html)

[usd_flattenedprimvarelement](usd_flattenedprimvarelement.html)

[usd_iprimvar](usd_iprimvar.html)

[usd_iprimvarelement](usd_iprimvarelement.html)

[usd_iprimvarelementsize](usd_iprimvarelementsize.html)

[usd_iprimvarindices](usd_iprimvarindices.html)

[usd_iprimvarinterpolation](usd_iprimvarinterpolation.html)

[usd_iprimvarlen](usd_iprimvarlen.html)

[usd_iprimvarnames](usd_iprimvarnames.html)

[usd_iprimvarsize](usd_iprimvarsize.html)

[usd_iprimvartimesamples](usd_iprimvartimesamples.html)

[usd_iprimvartypename](usd_iprimvartypename.html)

[usd_isarrayiprimvar](usd_isarrayiprimvar.html)

[usd_isarrayprimvar](usd_isarrayprimvar.html)

[usd_isindexediprimvar](usd_isindexediprimvar.html)

[usd_isindexedprimvar](usd_isindexedprimvar.html)

[usd_isiprimvar](usd_isiprimvar.html)

[usd_isprimvar](usd_isprimvar.html)

[usd_primvar](usd_primvar.html)

[usd_primvarattribname](usd_primvarattribname.html)

[usd_primvarelement](usd_primvarelement.html)

[usd_primvarelementsize](usd_primvarelementsize.html)

[usd_primvarindices](usd_primvarindices.html)

[usd_primvarinterpolation](usd_primvarinterpolation.html)

[usd_primvarlen](usd_primvarlen.html)

[usd_primvarnames](usd_primvarnames.html)

[usd_primvarsize](usd_primvarsize.html)

[usd_primvartimesamples](usd_primvartimesamples.html)

[usd_primvartypename](usd_primvartypename.html)

[usd_setprimvar](usd_setprimvar.html)

[usd_setprimvarelement](usd_setprimvarelement.html)

[usd_setprimvarelementsize](usd_setprimvarelementsize.html)

[usd_setprimvarindices](usd_setprimvarindices.html)

[usd_setprimvarinterpolation](usd_setprimvarinterpolation.html)
