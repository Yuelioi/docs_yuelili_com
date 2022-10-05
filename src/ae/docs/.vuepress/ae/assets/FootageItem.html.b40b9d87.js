import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as a,e as t}from"./app.75ca2a8e.js";const r={},o=t('<h2 id="footageitem-object" tabindex="-1"><a class="header-anchor" href="#footageitem-object" aria-hidden="true">#</a> FootageItem object</h2><p>app.project.item(index)<br> app.project.items[index]</p><p>\u63CF\u8FF0\uFF1AfootageItem\uFF0C\u7D20\u6750\u9879\u76EE\u5BF9\u8C61\uFF0C\u4EE3\u8868\u5BFC\u5165\u5230\u9879\u76EE\u4E2D\u7684\u7D20\u6750\u9879\u76EE\uFF0C\u5728\u201C\u9879\u76EE\u201D\u9762\u677F\u4E2D\u663E\u793A\u3002\u53EF\u4EE5\u901A\u8FC7\u9879\u76EE\u96C6\u7684\u4F4D\u7F6E\u7D22\u5F15\u8FDB\u884C\u8BBF\u95EE\u3002</p><p>\u7236\u7EA7\u5173\u7CFB\uFF1AFootageItem\u662FAVItem\u5BF9\u8C61\u7684\u5B50\u7C7B\uFF0CAVItem\u5BF9\u8C61\u662FItem\u5BF9\u8C61\u7684\u5B50\u7C7B\u3002\u9664\u4EE5\u4E0B\u5217\u51FA\u7684\u65B9\u6CD5\u5916\uFF0CAVItem\u548CItem\u7684\u6240\u6709\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u5728\u5747\u53EF\u5728FootageItem\u4F7F\u7528\u3002</p><p>\u4F7F\u7528\u65B9\u5F0F\uFF1AfootageItem.XX \u2192 app.project.item(index).XX</p><h2 id="\u5C5E\u6027\u7BC7" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u7BC7" aria-hidden="true">#</a> \u5C5E\u6027\u7BC7</h2><h3 id="file-\u7D20\u6750\u6E90\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#file-\u7D20\u6750\u6E90\u6587\u4EF6" aria-hidden="true">#</a> file \u7D20\u6750\u6E90\u6587\u4EF6</h3><p>app.project.item(index).file</p><p>\u63CF\u8FF0\uFF1A\u7D20\u6750\u6E90\u6587\u4EF6\uFF0CExtendScript File\u5BF9\u8C61\u3002\u5982\u679CFootageItem\u7684mainSource\u662F\u6587\u4EF6\u6E90\uFF0C\u5219\u4E0EFootageItem.mainSource.file\u76F8\u540C\u3002\u5426\u5219\u4E3Anull\u3002</p><p>\u7C7B\u578B\uFF1A\u6587\u4EF6\u5BF9\u8C61\uFF1B\u53EA\u8BFB\u3002</p><h3 id="mainsource-\u7D20\u6750\u6E90\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#mainsource-\u7D20\u6750\u6E90\u5BF9\u8C61" aria-hidden="true">#</a> mainSource \u7D20\u6750\u6E90\u5BF9\u8C61</h3><p>app.project.item(index).mainSource</p><p>\u63CF\u8FF0\uFF1A\u7D20\u6750\u6E90\u5BF9\u8C61\uFF0C\u5305\u542B\u4E0E\u8BE5\u7D20\u6750\u9879\u76EE\u76F8\u5173\u7684\u6240\u6709\u8BBE\u7F6E\uFF0C\u5305\u62EC\u201C\u6587\u4EF6 - \u89E3\u91CA\u7D20\u6750\u201D\u91CC\u7684\u8BBE\u7F6E\u3002\u53EA\u8BFB\uFF0C\u82E5\u8981\u66F4\u6539\uFF0C\u8BF7\u7528FootageItem\u7684\u201C replace\u201D\u65B9\u6CD5\u3002\u8BF7\u53C2\u89C1footageSource\u5BF9\u8C61\u53CA\u5176\u4E09\u79CD\u7C7B\u578B\uFF1A</p><ul><li>SolidSource\u5BF9\u8C61</li><li>FileSource\u5BF9\u8C61</li><li>PlaceholderSource\u5BF9\u8C61</li></ul><p>\u5982\u679C\u662FFileSource\u5BF9\u8C61\uFF0C\u5E76\u4E14footageMissing\u503C\u4E3Atrue\uFF0C\u5219\u7F3A\u5C11\u7684\u7D20\u6750\u6587\u4EF6\u7684\u8DEF\u5F84\u5728FileSource.missingFootagePath\u5C5E\u6027\u4E2D\u3002</p><p>\u7C7B\u578B\uFF1AfootageSource\u5BF9\u8C61; \u53EA\u8BFB\u3002</p><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><h3 id="openinviewer-\u5728\u67E5\u770B\u5668\u6253\u5F00\u7D20\u6750" tabindex="-1"><a class="header-anchor" href="#openinviewer-\u5728\u67E5\u770B\u5668\u6253\u5F00\u7D20\u6750" aria-hidden="true">#</a> openInViewer() \u5728\u67E5\u770B\u5668\u6253\u5F00\u7D20\u6750</h3><p>app.project.item(index).openInViewer()</p><p>\u63CF\u8FF0\uFF1A\u5728\u201C\u7D20\u6750\u201D\u9762\u677F\u4E2D\u6253\u5F00\u7D20\u6750\uFF0C\u7136\u540E\u5C06\u201C\u7D20\u6750\u201D\u9762\u677F\u79FB\u5230\u6700\u524D\u9762\u5E76\u4E3A\u5176\u805A\u7126\u3002</p><p>:::info \u63D0\u793A \u4E22\u5931\u7D20\u6750\u548C\u5360\u4F4D\u7B26\u7D20\u6750\u53EF\u4EE5\u4F7F\u7528\u6B64\u811A\u672C\u65B9\u6CD5\u6253\u5F00\uFF0C\u4F46\u4E0D\u80FD\u624B\u52A8\u6253\u5F00(\u901A\u8FC7\u53CC\u51FB)\u3002 :::</p><p>\u53C2\u6570\uFF1A\u65E0\u3002</p><p>\u8FD4\u56DE\uFF1A\u201C\u7D20\u6750\u201D\u9762\u677F\u7684\u67E5\u770B\u5668\u5BF9\u8C61\uFF1B\u5982\u679C\u65E0\u6CD5\u6253\u5F00\u7D20\u6750\uFF0C\u5219\u4E3Anull\u3002</p><h3 id="replace-\u66F4\u6539\u7D20\u6750\u6E90" tabindex="-1"><a class="header-anchor" href="#replace-\u66F4\u6539\u7D20\u6750\u6E90" aria-hidden="true">#</a> replace() \u66F4\u6539\u7D20\u6750\u6E90</h3><p>app.project.item(index).replace(file)</p><p>\u63CF\u8FF0\uFF1A\u5C06FootageItem\u7684\u6E90\u66F4\u6539\u4E3A\u6307\u5B9A\u6587\u4EF6\u3002\u9664\u4E86\u52A0\u8F7D\u6587\u4EF6\u4E4B\u5916\uFF0C\u8BE5\u65B9\u6CD5\u8FD8\u4F1A\u4E3A\u6587\u4EF6\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684FileSource\u5BF9\u8C61\uFF0C\u5E76\u5C06mainSource\u8BBE\u7F6E\u5230\u8BE5\u5BF9\u8C61\u3002\u5728\u65B0\u7684\u6E90\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8BBE\u7F6Ename\uFF0Cwidth\uFF0Cheight\uFF0CframeDuration\uFF0C\u548Cduration\u5C5E\u6027(\u8BE6\u89C1AVItem\u5BF9\u8C61)\u57FA\u4E8E\u6587\u4EF6\u7684\u76F8\u5173\u5185\u5BB9\u3002\u8BE5\u65B9\u6CD5\u4FDD\u7559\u4E86\u5148\u524DmainSource\u5BF9\u8C61\u7684\u89E3\u91CA\u53C2\u6570\u3002\u5982\u679C\u6307\u5B9A\u7684\u6587\u4EF6\u5177\u6709\u672A\u6807\u8BB0\u7684Alpha\u901A\u9053\uFF0C\u5219\u8BE5\u65B9\u6CD5\u5C06\u4F30\u7B97Alpha\u89E3\u91CA\u3002</p><p>\u53C2\u6570\uFF1A</p><ul><li>file\uFF1A\u7528\u4E8E\u7D20\u6750\u4E3B\u8981\u6E90\u7684\u6587\u4EF6\uFF0CExtendScript File\u5BF9\u8C61\u3002</li></ul><h3 id="replacewithplaceholder-\u5360\u4F4D\u7B26\u66FF\u6362\u7D20\u6750" tabindex="-1"><a class="header-anchor" href="#replacewithplaceholder-\u5360\u4F4D\u7B26\u66FF\u6362\u7D20\u6750" aria-hidden="true">#</a> replaceWithPlaceholder() \u5360\u4F4D\u7B26\u66FF\u6362\u7D20\u6750</h3><p>app.project.item(index).replaceWithPlaceholder(name, width, height, frameRate, duration)</p><p>\u63CF\u8FF0\uFF1A\u5C06\u6B64FootageItem\u7684\u6E90\u66F4\u6539\u4E3A\u6307\u5B9A\u7684\u5360\u4F4D\u7B26\u3002\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5360\u4F4D\u7B26\u6E90\uFF08PlaceholderSource\uFF09\u5BF9\u8C61\uFF0C\u4ECE\u53C2\u6570\u4E2D\u8BBE\u7F6E\u5176\u503C\uFF0C\u7136\u540E\u8BBE\u7F6EmainSource\u5230\u8BE5\u5BF9\u8C61\u3002</p><p>\u53C2\u6570\uFF1A</p><ul><li>name \uFF1A\u5B57\u7B26\u4E32\uFF0C\u5305\u542B\u5360\u4F4D\u7B26\u7684\u540D\u79F0\u3002</li><li>width \uFF1A\u5360\u4F4D\u7B26\u7684\u5BBD\u5EA6(\u50CF\u7D20)\uFF0C\u6574\u6570,\u8303\u56F4\u4E3A4~30000</li><li>height \uFF1A\u5360\u4F4D\u7B26\u7684\u9AD8\u5EA6(\u50CF\u7D20)\uFF0C\u6574\u6570\uFF0C\u8303\u56F4\u4E3A4~30000</li><li>frameRate \uFF1A\u5360\u4F4D\u7B26\u7684\u5E27\u901F\u7387\uFF0C\u8303\u56F4\u4E3A1.0.~99.0</li><li>duration \u5360\u4F4D\u7B26\u7684\u6301\u7EED\u65F6\u95F4(\u50CF\u7D20)\uFF0C\u6D6E\u70B9\u6570\uFF0C\u8303\u56F4\u4E3A0.0~10800.0</li></ul><h3 id="replacewithsequence-\u5E8F\u5217\u66FF\u6362\u7D20\u6750" tabindex="-1"><a class="header-anchor" href="#replacewithsequence-\u5E8F\u5217\u66FF\u6362\u7D20\u6750" aria-hidden="true">#</a> replaceWithSequence() \u5E8F\u5217\u66FF\u6362\u7D20\u6750</h3><p>app.project.item(index).replaceWithSequence(file, forceAlphabetical)</p><p>\u63CF\u8FF0\uFF1A\u5C06\u6B64\u7D20\u6750\u9879\u76EE\uFF08FootageItem\uFF09\u7684\u6765\u6E90\u66F4\u6539\u4E3A\u6307\u5B9A\u7684\u56FE\u50CF\u5E8F\u5217\u3002\u9664\u4E86\u52A0\u8F7D\u6587\u4EF6\u4E4B\u5916\uFF0C\u8BE5\u65B9\u6CD5\u8FD8\u4F1A\u4E3A\u6587\u4EF6\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684FileSource\u5BF9\u8C61\uFF0C\u5E76\u5C06mainSource\u8BBE\u7F6E\u5230\u8BE5\u5BF9\u8C61\u3002\u5728\u65B0\u7684\u6E90\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8BBE\u7F6Ename\uFF0Cwidth\uFF0Cheight\uFF0CframeDuration\uFF0C\u548Cduration\u5C5E\u6027(\u8BE6\u89C1AVItem\u5BF9\u8C61)\u57FA\u4E8E\u6587\u4EF6\u7684\u76F8\u5173\u5185\u5BB9\u3002\u8BE5\u65B9\u6CD5\u4FDD\u7559\u4E86\u5148\u524DmainSource\u5BF9\u8C61\u7684\u89E3\u91CA\u53C2\u6570\u3002\u5982\u679C\u6307\u5B9A\u7684\u6587\u4EF6\u5177\u6709\u672A\u6807\u8BB0\u7684Alpha\u901A\u9053\uFF0C\u5219\u8BE5\u65B9\u6CD5\u5C06\u4F30\u7B97Alpha\u89E3\u91CA\u3002</p><p>\u53C2\u6570\uFF1A</p><ul><li>file\uFF1A\u5E8F\u5217\u4E2D\u7B2C\u4E00\u4E2A\u6587\u4EF6\u7684ExtendScript File\u5BF9\u8C61\uFF0C\u7528\u4F5C\u7D20\u6750\u7684\u4E3B\u8981\u6765\u6E90\u3002</li><li>forceAlphabetical\uFF1A\u5982\u679C\u4E3Atrue\uFF0C\u5219\u4F7F\u7528\u201C\u5F3A\u5236\u5B57\u6BCD\u987A\u5E8F\u201D\u9009\u9879\u3002</li></ul><h3 id="replacewithsolid-\u7EAF\u8272\u5C42\u66FF\u6362\u7D20\u6750" tabindex="-1"><a class="header-anchor" href="#replacewithsolid-\u7EAF\u8272\u5C42\u66FF\u6362\u7D20\u6750" aria-hidden="true">#</a> replaceWithSolid() \u7EAF\u8272\u5C42\u66FF\u6362\u7D20\u6750</h3><p>app.project.item(index).replaceWithSolid(color, name, width, height, pixelAspect)</p><p>\u63CF\u8FF0\uFF1A\u5C06\u6B64FootageItem\u7684\u6E90\u66F4\u6539\u4E3A\u6307\u5B9A\u7684\u7EAF\u8272\u5C42\u3002\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7EAF\u8272\u6E90\uFF08SolidSource\uFF09\u5BF9\u8C61\uFF0C\u4ECE\u53C2\u6570\u4E2D\u8BBE\u7F6E\u5176\u503C\uFF0C\u7136\u540E\u628AmainSource\u8BBE\u7F6E\u5230\u8BE5\u5BF9\u8C61\u3002</p><p>\u53C2\u6570\uFF1A</p><ul><li>color\uFF1A\u7EAF\u8272\u5C42\u989C\u8272\uFF0C\u4E09\u4E2A\u6D6E\u70B9\u503C\u7684\u6570\u7EC4\uFF0C\u8303\u56F4\u4E3A[R, G, B][0.0~1.0]\u3002\u6BD4\u5982[0.5,0.5,0.5]\u4EE3\u8868\u7070\u8272</li><li>name\uFF1A\u7EAF\u8272\u5C42\u540D\u79F0\uFF0C\u5B57\u7B26\u4E32</li><li>width\uFF1A\u7EAF\u8272\u5C42\u5BBD\u5EA6(\u50CF\u7D20)\uFF0C\u6574\u6570\uFF0C\u8303\u56F4\u4E3A\uFF1A 4~30000</li><li>height\uFF1A\u7EAF\u8272\u5C42\u9AD8\u5EA6(\u50CF\u7D20)\uFF0C\u6574\u6570\uFF0C\u8303\u56F4\u4E3A\uFF1A 4~30000</li><li>pixelAspect\uFF1A\u7EAF\u8272\u5C42\u50CF\u7D20\u957F\u5BBD\u6BD4\uFF0C\u6D6E\u70B9\u6570\uFF0C\u8303\u56F4\u4E3A0.01~100.0</li></ul>',43),l=[o];function p(c,h){return i(),a("div",null,l)}const m=e(r,[["render",p],["__file","FootageItem.html.vue"]]);export{m as default};
