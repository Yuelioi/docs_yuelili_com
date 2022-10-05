import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,e as n}from"./app.75ca2a8e.js";const p={},s=n(`<h2 id="avitem-object" tabindex="-1"><a class="header-anchor" href="#avitem-object" aria-hidden="true">#</a> AVItem object</h2><p>app.project.item(index)</p><p>\u63CF\u8FF0\uFF1AAVItem \u5BF9\u8C61\uFF0C\u7528\u4E8E\u8BBF\u95EE AE \u4E2D\u7684\u5E26\u6709\u97F3\u9891/\u89C6\u9891\u6587\u4EF6\u3002A\uFF1AAudio\uFF08\u97F3\u9891\uFF09 V\uFF1AVideo\uFF08\u89C6\u9891\uFF09</p><p>\u7236\u7EA7\u5173\u7CFB\uFF1AAVItem \u662F Item \u7684\u5B50\u7C7B\u3002\u4F7F\u7528 AVItem \u65F6\uFF0CItem \u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u5747\u53EF\u7528\u3002</p><p>\u5B50\u7EA7\u5173\u7CFB\uFF1AAVItem \u662F\u5408\u6210\uFF08CompItem\uFF09\u548C\u7D20\u6750\uFF08footageItem\uFF09\u7684\u57FA\u7C7B\uFF0C\u56E0\u6B64\u5728\u4F7F\u7528\u5408\u6210\u548C\u7D20\u6750\u5BF9\u8C61\u65F6\uFF0CAVItem \u5C5E\u6027\u548C\u65B9\u6CD5\u5747\u53EF\u7528\u3002</p><p>::: danger \u5408\u6210\u548C\u7D20\u6750\u867D\u7136\u662F AVItem \u7684\u903B\u8F91\u540E\u4EE3\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4E0D\u662F AVItem \u7684\u5B50\u7C7B\uFF0C\u56E0\u4E3A Extendscript \u4E2D\u4E0D\u5B58\u5728 AVItem\u3002 \u5C1D\u8BD5\u68C0\u67E5 AVItem \u7684\u9879\u76EE instanceof \u662F\u5426\u4F1A\u5931\u8D25\uFF0C\u56E0\u4E3A AVItem \u672A\u5B9A\u4E49\u3002 \u5BF9\u4E8E\u9879\u76EE\u672C\u8EAB\u4E5F\u662F\u5982\u6B64\u3002 :::</p><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><h3 id="duration-\u6301\u7EED\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#duration-\u6301\u7EED\u65F6\u95F4" aria-hidden="true">#</a> duration \u6301\u7EED\u65F6\u95F4</h3><p>app.project.item(index).duration</p><p>\u63CF\u8FF0\uFF1A\u8FD4\u56DE\u9879\u76EE\u6301\u7EED\u65F6\u95F4(\u79D2)\u3002\u9759\u6B62\u955C\u5934\u9879\u76EE\u7684\u6301\u7EED\u65F6\u95F4\u4E3A 0\u3002</p><ul><li>\u5408\u6210\uFF08CompItem\uFF09\uFF1A\u5408\u6210\u6301\u7EED\u65F6\u95F4\uFF0C\u8BFB/\u5199\u3002</li><li>\u7D20\u6750\uFF08FootageItem\uFF09\uFF1A\u7D20\u6750\u6301\u7EED\u65F6\u95F4\uFF0C\u53EA\u8BFB\u3002</li></ul><p>\u7C7B\u578B\uFF1A\u6D6E\u70B9\u503C\uFF0C0.0~10800.0</p><p>\u793A\u4F8B\uFF1A\u8FD4\u56DE\u7B2C 4 \u4E2A\u9879\u76EE\u7684\u6301\u7EED\u65F6\u95F4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://mir.yuelili.com/wp-content/uploads/2021/07/ac0a347903749db48d2103de51ede74a.png" alt=""></p><h3 id="footagemissing-\u7D20\u6750\u7F3A\u5931\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#footagemissing-\u7D20\u6750\u7F3A\u5931\u5224\u65AD" aria-hidden="true">#</a> footageMissing \u7D20\u6750\u7F3A\u5931\u5224\u65AD</h3><p>app.project.item(index).footageMissing</p><p>\u63CF\u8FF0\uFF1A\u8BBE\u7F6E\u4E3A true \u65F6\uFF0CAVItem \u662F\u5360\u4F4D\u7B26\uFF0C\u6216\u663E\u793A\u4E3A\u7D20\u6750\u4E22\u5931\u3002\u6B64\u65F6\uFF0CmissingFootagePath \u4E3A\u7D20\u6750\u4E22\u5931\u65F6\u7684\u8DEF\u5F84</p><p>\u8BF7\u53C2\u9605 footageItem.mainSource \u548C FileSource.missingFootagePath\u3002</p><p>\u7C7B\u578B\uFF1A\u5E03\u5C14\u503C\uFF1B\u53EA\u8BFB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span>footageMissing<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B\uFF1A\u5982\u679C\u7B2C 4 \u4E2A\u7D20\u6750\u4E22\u5931\u4E86\uFF0C\u5219\u8FD4\u56DE true</p><h3 id="frameduration-\u5355\u5E27\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#frameduration-\u5355\u5E27\u957F\u5EA6" aria-hidden="true">#</a> frameDuration \u5355\u5E27\u957F\u5EA6</h3><p>app.project.item(index).frameDuration</p><p>\u63CF\u8FF0\uFF1A\u8FD4\u56DE AVItem \u7684\u5355\u5E27\u957F\u5EA6\uFF08\u79D2\uFF09\u3002</p><p>\u7C7B\u578B\uFF1A\u6D6E\u70B9\u503C\uFF0C1/99~1.0\uFF0C\u8BFB/\u5199\uFF1B\u7D20\u6750\u6587\u4EF6\u5219\u53EA\u8BFB\u3002</p><p>\u793A\u4F8B\uFF1A\u5C06\u7B2C\u4E00\u4E2A\u9879\u76EE\u7684\u5355\u5E27\u8BBE\u7F6E\u4E3A 0.04\uFF0C\u4E5F\u5C31\u662F 25 \u5E27/s</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>frameDuration <span class="token operator">=</span> <span class="token number">0.04</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="framerate-\u5E27\u901F\u7387" tabindex="-1"><a class="header-anchor" href="#framerate-\u5E27\u901F\u7387" aria-hidden="true">#</a> frameRate \u5E27\u901F\u7387</h3><p>app.project.item(index).frameRate</p><p>\u63CF\u8FF0\uFF1AAVItem \u7684\u5E27\u901F\u7387\u3002</p><ul><li>\u5728\u5408\u6210\u4E2D\uFF0C\u8BFB/\u5199\u3002</li><li>\u5728\u7D20\u6750\u4E2D\uFF0C\u53EA\u8BFB\u3002\u8981\u6539\u53D8\u5B83\uFF0C\u8BF7\u8BBE\u7F6E mainSource \u5BF9\u8C61\u7684 conformFrameRate\u3002</li></ul><p>\u7C7B\u578B\uFF1A\u6D6E\u70B9\u503C\uFF0C1.0~99.0</p><h3 id="hasaudio-\u97F3\u9891\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#hasaudio-\u97F3\u9891\u5224\u65AD" aria-hidden="true">#</a> hasAudio \u97F3\u9891\u5224\u65AD</h3><p>app.project.item(index).hasAudio</p><p>\u63CF\u8FF0\uFF1A\u5982\u679C AVItem \u6709\u97F3\u9891\uFF0C\u5219\u4E3A true\u3002</p><ul><li>\u5728\u5408\u6210\u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230\u5408\u6210\u3002</li><li>\u5728\u7D20\u6750\u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230 mainSource \u5BF9\u8C61\u3002</li></ul><p>\u7C7B\u578B\uFF1A\u5E03\u5C14\u503C \u53EA\u8BFB\u3002</p><h3 id="hasvideo-\u89C6\u9891\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#hasvideo-\u89C6\u9891\u5224\u65AD" aria-hidden="true">#</a> hasVideo \u89C6\u9891\u5224\u65AD</h3><p>app.project.item(index).hasVideo</p><p>\u63CF\u8FF0\uFF1A\u5982\u679C AVItem \u6709\u89C6\u9891\uFF0C\u5219\u4E3A true\u3002</p><ul><li>\u5728\u5408\u6210\u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230\u5408\u6210\u3002</li><li>\u5728\u7D20\u6750\u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230 mainSource \u5BF9\u8C61\u3002</li></ul><p>\u7C7B\u578B\uFF1A\u5E03\u5C14\u503C \u53EA\u8BFB\u3002</p><h3 id="height-\u9AD8\u5EA6" tabindex="-1"><a class="header-anchor" href="#height-\u9AD8\u5EA6" aria-hidden="true">#</a> height \u9AD8\u5EA6</h3><p>app.project.item(index).height</p><p>\u63CF\u8FF0\uFF1A\u9879\u76EE\u7684\u9AD8\u5EA6(\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D)\u3002</p><ul><li>\u5728\u5408\u6210\u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230\u5408\u6210\uFF0C\u8BFB/\u5199\u3002</li><li>\u5728\u7D20\u6750\u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230 mainSource \u5BF9\u8C61\uFF0C\u5F53 mainSource \u662F SolidSource\uFF08\u7EAF\u8272\u56FE\u5C42\uFF09\u65F6\u624D\u53EF\u8BFB/\u5199\u3002\u5426\u5219\u53EA\u8BFB\u3002</li></ul><p>\u7C7B\u578B\uFF1A\u6574\u6570\uFF0C\uFF081~30000\uFF09</p><h3 id="ismediareplacementcompatible-\u4E0D\u61C2" tabindex="-1"><a class="header-anchor" href="#ismediareplacementcompatible-\u4E0D\u61C2" aria-hidden="true">#</a> isMediaReplacementCompatible !\u4E0D\u61C2</h3><p>app.project.item(index).isMediaReplacementCompatible</p><p>:::info \u63D0\u793A \u6B64\u529F\u80FD\u5DF2\u6DFB\u52A0\u5230 After Effects 18.0(2021)\u4E2D :::</p><p>\u63CF\u8FF0\uFF1A\u6D4B\u8BD5\u5728\u8C03\u7528 Property.setAlternateSource()\u65F6\uFF0C\u662F\u5426\u53EF\u4EE5\u5C06 AVItem \u7528\u4F5C\u5907\u7528\u6E90\u3002\u5982\u679C\u53EF\u4EE5\u4F7F\u7528\u5219\u8FD4\u56DE true\uFF1B\u5426\u5219\u8FD4\u56DE false\u3002</p><p>\u53EF\u4EE5\u5C06\u5408\u6210\uFF08CompItem\uFF09\u6216\u7D20\u6750\uFF08footageItem\uFF09\u7528\u4F5C\u56FE\u5C42\u7684\u66FF\u4EE3\u6E90\uFF0C\u4F46\u6709\u4E00\u4E9B\u9650\u5236\uFF1A</p><ul><li>\u5982\u679C AVItem \u662F\u7D20\u6750\u5BF9\u8C61\uFF0C\u5219 FootageItem.FootageSource \u4E0D\u5E94\u662F SolidSource \u5BF9\u8C61\u3002</li><li>\u5982\u679C AVItem \u662F\u7D20\u6750\u5BF9\u8C61\uFF0C\u800C FootageItem.FootageSource \u662F FileSource \u5BF9\u8C61\uFF0C\u5219\u8BE5 FileSource \u4E0D\u5E94\u6307\u5411\u975E\u5A92\u4F53\u6587\u4EF6\uFF0C\u4F8B\u5982.JSX \u811A\u672C\u6587\u4EF6\u3002</li><li>\u8BBE\u7F6E AVItem \u4E0D\u80FD\u5728\u9879\u76EE\u5185\u521B\u5EFA\u5FAA\u73AF\u5F15\u7528\u3002</li></ul><p>\u7C7B\u578B\uFF1A\u5E03\u5C14\u503C\uFF1B\u53EA\u8BFB\u3002</p><h3 id="name-\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#name-\u540D\u79F0" aria-hidden="true">#</a> name \u540D\u79F0</h3><p>app.project.item(index).name</p><p>\u63CF\u8FF0\uFF1A\u9879\u76EE\u540D\u79F0\uFF0C\u5982\u201C\u9879\u76EE\u201D\u9762\u677F\u4E2D\u6240\u793A\u3002</p><p>\u5728\u7D20\u6750\u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230 mainSource \u5BF9\u8C61\u3002\u5982\u679C mainSource \u5BF9\u8C61\u662F FileSource\uFF0C\u5219\u6B64\u503C\u63A7\u5236\u201C\u9879\u76EE\u201D\u9762\u677F\u4E2D\u7684\u663E\u793A\u540D\u79F0\uFF0C\u4F46\u4E0D\u5F71\u54CD\u6587\u4EF6\u540D\u3002</p><p>\u7C7B\u578B\uFF1A\u5B57\u7B26\u4E32; \u8BFB/\u5199\u3002</p><p>\u793A\u4F8B\uFF1A\u8BBE\u7F6E\u9879\u76EE\u9762\u677F\u7B2C 1 \u4E2A\u9879\u76EE\u7684\u540D\u79F0\uFF0C\u5E76\u5F39\u7A97\u63D0\u9192</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5408\u6210111&quot;</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pixelaspect-\u50CF\u7D20\u957F\u5BBD\u6BD4" tabindex="-1"><a class="header-anchor" href="#pixelaspect-\u50CF\u7D20\u957F\u5BBD\u6BD4" aria-hidden="true">#</a> pixelAspect \u50CF\u7D20\u957F\u5BBD\u6BD4</h3><p>app.project.item(index).pixelAspect</p><p>\u63CF\u8FF0\uFF1A\u9879\u76EE\u7684\u50CF\u7D20\u957F\u5BBD\u6BD4(PAR)\u3002</p><ul><li>\u5728\u5408\u6210\u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230\u5408\u6210\u3002</li><li>\u5728\u7D20\u6750\u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230 mainSource \u5BF9\u8C61\u3002</li></ul><p>\u8BBE\u7F6E\u540E\u68C0\u7D22\u7684\u503C\u53EF\u80FD\u4E0E\u60A8\u63D0\u4F9B\u7684\u503C\u7565\u6709\u4E0D\u540C\u3002\u4E0B\u8868\u5C06 UI \u4E2D\u663E\u793A\u7684\u503C\u4E0E\u6B64\u5C5E\u6027\u8FD4\u56DE\u7684\u66F4\u51C6\u786E\u7684\u503C\u8FDB\u884C\u6BD4\u8F83\u3002</p><table><thead><tr><th>PAR in AE</th><th>pixelAspect \u5C5E\u6027\u8FD4\u56DE\u7684 PAR</th></tr></thead><tbody><tr><td>0.91</td><td>0.90909090909091</td></tr><tr><td>1</td><td>1</td></tr><tr><td>1.5</td><td>1.5</td></tr><tr><td>1.09</td><td>1.09401709401709</td></tr><tr><td>1.21</td><td>1.21212121212121</td></tr><tr><td>1.33</td><td>1.33333333333333</td></tr><tr><td>1.46</td><td>1.45868945868946</td></tr><tr><td>2</td><td>2</td></tr></tbody></table><p>\u7C7B\u578B\uFF1A\u6D6E\u70B9\u503C\uFF0C\u8303\u56F4 0.01~100.0\uFF1B\u8BFB/\u5199\u3002</p><h3 id="proxysource-\u4EE3\u7406\u6E90" tabindex="-1"><a class="header-anchor" href="#proxysource-\u4EE3\u7406\u6E90" aria-hidden="true">#</a> proxySource \u4EE3\u7406\u6E90</h3><p>app.project.item(index).proxySource</p><p>\u63CF\u8FF0\uFF1A\u88AB\u7528\u4F5C\u4EE3\u7406\u7684\u7D20\u6750\u6E90\u5BF9\uFF08footageSource\uFF09\u3002\u53EA\u8BFB\uFF1B</p><p>\u6539\u53D8 AVItem \u4EE3\u7406\u6E90\u7684\u65B9\u6CD5\uFF1AsetProxy(), setProxyWithSequence(), setProxyWithSolid(), \u6216\u8005 setProxyWithPlaceholder().</p><p>\u7C7B\u578B\uFF1A\u7D20\u6750\u6E90\u5BF9\u8C61\uFF08FootageSource\uFF09\uFF1B\u53EA\u8BFB\u3002</p><h3 id="time-\u9879\u76EE\u9884\u89C8\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#time-\u9879\u76EE\u9884\u89C8\u65F6\u95F4" aria-hidden="true">#</a> time \u9879\u76EE\u9884\u89C8\u65F6\u95F4</h3><p>app.project.item(index).time</p><p>\u63CF\u8FF0\uFF1A\u76F4\u63A5\u4ECE\u201C\u9879\u76EE\u9762\u677F\u201D\u9884\u89C8\u9879\u76EE\u7684\u5F53\u524D\u65F6\u95F4\uFF08\u79D2\uFF09\u3002\u4F7F\u7528\u5168\u5C40\u65B9\u6CD5 timeToCurrentFormat()\u53EF\u4EE5\u5C06\u5176\u8F6C\u6362\u4E3A\u4EE5\u5E27\u3002\u5982\u679C\u6E90\u662F\u9759\u6B62\u7684(item.mainSource.isStilltrue)\uFF0C\u5219\u65E0\u6CD5\u8BBE\u7F6E\u65F6\u95F4\uFF08\u5426\u5219\u62A5\u9519\uFF09\u3002</p><p>\u7C7B\u578B\uFF1A\u6D6E\u70B9\u503C\uFF1B\u8BFB/\u5199\u3002</p><p><img src="https://cdn.yuelili.com/20210912193526.png" alt=""></p><p>\u793A\u4F8B\uFF1A\u8FD4\u56DE\u9879\u76EE\u9762\u677F\u7B2C 1 \u4E2A\u9879\u76EE\u7684\u5F53\u524D\u65F6\u95F4\u8F74\u9884\u89C8\u65F6\u95F4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="usedin-\u8BE5\u5408\u6210\u7684\u7236\u7EA7" tabindex="-1"><a class="header-anchor" href="#usedin-\u8BE5\u5408\u6210\u7684\u7236\u7EA7" aria-hidden="true">#</a> usedIn \u8BE5\u5408\u6210\u7684\u7236\u7EA7</h3><p>app.project.item(index).usedIn</p><p>\u63CF\u8FF0\uFF1A\u4F7F\u7528\u8BE5 AVItem \u7684\u6240\u6709\u5408\u6210\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728\u68C0\u7D22\u65F6\uFF0C\u662F\u76F4\u63A5\u590D\u5236\u6570\u7EC4\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002\u5982\u679C\u83B7\u53D6\u6B64\u503C\uFF0C\u7136\u540E\u5C06\u6B64\u9879\u76EE\u6DFB\u52A0\u5230\u53E6\u4E00\u4E2A\u5408\u6210\u4E2D\uFF0C\u5219\u5FC5\u987B\u91CD\u65B0\u83B7\u53D6\uFF0C\u66F4\u65B0\u4E00\u4E0B\u3002</p><p>\u7C7B\u578B\uFF1ACompItem \u5BF9\u8C61\u7684\u6570\u7EC4\uFF1B\u53EA\u8BFB\u3002</p><p>\u793A\u4F8B\uFF1A\u5408\u6210 1 \u5728\u5408\u6210 2 \u4E0E\u5408\u6210 3 \u5185\u90E8\uFF0C\u4E0B\u9762\u4F1A\u8FD4\u56DE\u5305\u542B\u5408\u6210 1 \u7684\u6240\u6709\u5408\u6210\u96C6\u5408\uFF0C\u7136\u540E\u627E\u5230\u5176\u4E2D\u7B2C 1 \u4E2A\u5408\u6210\uFF0C\u4E5F\u5C31\u662F\u5408\u6210 2\u3002</p><p><img src="https://mir.yuelili.com/wp-content/uploads/2021/07/f40c16919f33ef474567440ec0e38a27.png" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>usedIn<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="useproxy-\u662F\u5426\u4F7F\u7528\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#useproxy-\u662F\u5426\u4F7F\u7528\u4EE3\u7406" aria-hidden="true">#</a> useProxy \u662F\u5426\u4F7F\u7528\u4EE3\u7406</h3><p>app.project.item(index).useProxy</p><p>\u63CF\u8FF0\uFF1A\u5982\u679C\u8BE5\u9879\u76EE\u4F7F\u7528\u4EE3\u7406\u7528\uFF0C\u5219\u4E3A true\u3002\u4F7F\u7528 SetProxy \u53EF\u4EE5\u8BBE\u7F6E\u4EE3\u7406\uFF0C\u4F7F\u7528 SetProxyToNone()\u53EF\u4EE5\u53D6\u6D88\u4EE3\u7406\u3002</p><p>\u7C7B\u578B\uFF1A\u5E03\u5C14\u503C\uFF0C\u8BFB/\u5199\u3002</p><h3 id="width-\u9879\u76EE\u5BBD\u5EA6" tabindex="-1"><a class="header-anchor" href="#width-\u9879\u76EE\u5BBD\u5EA6" aria-hidden="true">#</a> width \u9879\u76EE\u5BBD\u5EA6</h3><p>app.project.item(index).width</p><p>\u63CF\u8FF0\uFF1A\u9879\u76EE\u7684\u5BBD\u5EA6\uFF08\u50CF\u7D20\uFF09\u3002</p><ul><li>\u5728 CompItem \u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230\u5408\u6210\uFF0C\u8BFB/\u5199\u3002</li><li>\u5728 FootageItem \u4E2D\uFF0C\u8BE5 \u200B\u200B \u503C\u94FE\u63A5\u5230\u8BE5 mainSource \u5BF9\u8C61\uFF0C\u5E76\u4E14\u4EC5\u5F53\u8BE5 mainSource \u5BF9\u8C61\u662F SolidSource \u65F6\u624D\u53EF\u8BFB/\u5199\u3002\u5426\u5219\u53EA\u8BFB\u3002</li></ul><p>\u7C7B\u578B\uFF1A\u6574\u6570\uFF0C\u8303\u56F4\u4E3A 1~30000\uFF1B\u8BFB/\u5199\uFF0C\u9664\u975E\u53E6\u6709\u8BF4\u660E\u3002</p><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><h3 id="setproxy-\u8BBE\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#setproxy-\u8BBE\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> setProxy() \u8BBE\u7F6E\u4EE3\u7406</h3><p>app.project.item(index).setProxy(file)</p><p>\u63CF\u8FF0\uFF1A\u8BBE\u7F6E\u6587\u4EF6\u4F5C\u4E3A\u4EE3\u7406\u3002\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u52A0\u8F7D\u5230\u65B0\u7684 FileSource \u5BF9\u8C61\u4E2D\uFF0C\u5C06\u5176\u8BBE\u7F6E\u4E3A\u4EE3\u7406\u6E90\uFF08proxySource\uFF09\u7684\u503C\uFF0C\u4F7F\u7528\u4EE3\u7406\uFF08useProxy\uFF09\u4E3A true\u3002</p><p>\u4E0D\u4FDD\u7559\u89E3\u91CA\u53C2\u6570\uFF0C\u800C\u662F\u4F7F\u7528\u7528\u6237\u9996\u9009\u9879\u3002\u5982\u679C\u6587\u4EF6\u5177\u6709\u672A\u6807\u8BB0\u7684 Alpha \u901A\u9053\uFF0C\u5E76\u4E14\u7528\u6237\u9996\u9009\u9879\u8BE2\u95EE\u7528\u6237\u5982\u4F55\u8BBE\u7F6E\uFF0C\u5219\u8BE5\u65B9\u6CD5\u5C06\u4F30\u7B97 Alpha \u89E3\u6790\uFF0C\u800C\u4E0D\u4F1A\u8BE2\u95EE\u7528\u6237\u3002\u8FD9\u4E0E\u8BBE\u7F6E\u7D20\u6750\u9879\u76EE\uFF08footageItem\uFF09\u7684 mainSource \u6709\u6240\u4E0D\u540C\uFF0C\u4F46\u662F\u4E24\u4E2A\u64CD\u4F5C\u5747\u5728\u7528\u6237\u754C\u9762\u4E2D\u6267\u884C\u3002</p><p>\u53C2\u6570\uFF1A</p><ul><li>file\uFF1A\u7528\u4F5C\u4EE3\u7406\u7684\u6587\u4EF6\uFF0CExtendScript File \u5BF9\u8C61\u3002</li></ul><p>\u8FD4\u56DE\uFF1A\u65E0\u3002</p><h3 id="setproxytonone-\u5220\u9664\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#setproxytonone-\u5220\u9664\u4EE3\u7406" aria-hidden="true">#</a> setProxyToNone() \u5220\u9664\u4EE3\u7406</h3><p>app.project.item(index).setProxyToNone()</p><p>\u63CF\u8FF0\uFF1A\u4ECE AVItem \u4E2D\u5220\u9664\u4EE3\u7406\uFF0C\u5C06\u4EE3\u7406\u6E90\uFF08proxySource\uFF09\u8BBE\u7F6E\u4E3A null\uFF0C\u5E76\u5C06\u4F7F\u7528\u4EE3\u7406\uFF08useProxy\uFF09\u8BBE\u7F6E\u4E3A false\u3002</p><p>\u53C2\u6570\uFF1A\u65E0\u3002</p><p>\u8FD4\u56DE\uFF1A\u65E0\u3002</p><h3 id="setproxywithplaceholder-\u4F7F\u7528\u5360\u4F4D\u7B26\u8BBE\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#setproxywithplaceholder-\u4F7F\u7528\u5360\u4F4D\u7B26\u8BBE\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> setProxyWithPlaceholder() \u4F7F\u7528\u5360\u4F4D\u7B26\u8BBE\u7F6E\u4EE3\u7406</h3><p>app.project.item(index).setProxyWithPlaceholder(name, width, height ,frameRate, duration)</p><p>\u63CF\u8FF0\uFF1A\u521B\u5EFA\u5177\u6709\u6307\u5B9A\u503C\u7684\u5360\u4F4D\u7B26\u5BF9\u8C61\uFF08PlaceholderSource\uFF09\uFF0C\u5C06\u5B83\u8BBE\u7F6E\u4E3A proxySource \u5BF9\u8C61\u7684\u503C\uFF0C\u7136\u540E\u5C06 useProxy \u8BBE\u7F6E\u4E3A true\u3002\u4E0D\u4FDD\u7559\u89E3\u6790\u53C2\u6570\uFF0C\u800C\u662F\u4F7F\u7528\u7528\u6237\u9996\u9009\u9879\u3002</p><p>:::info \u63D0\u793A \u5728\u7528\u6237\u754C\u9762\u4E2D\u65E0\u6CD5\u76F4\u63A5\u5C06\u5360\u4F4D\u7B26\u8BBE\u7F6E\u4E3A\u4EE3\u7406\u3002\u5F53\u5DF2\u8BBE\u7F6E\u4EE3\u7406\uFF0C\u7136\u540E\u5C06\u5176\u79FB\u52A8\u6216\u5220\u9664\u65F6\uFF0C\u624D\u4F1A\u8FD9\u6837\u3002 :::</p><p>\u53C2\u6570\uFF1A</p><ul><li>name\uFF1A\u5305\u542B\u65B0\u5BF9\u8C61\u540D\u79F0\u7684\u5B57\u7B26\u4E32\u3002</li><li>width\uFF0C height\uFF1A\u5360\u4F4D\u7B26\u7684\u50CF\u7D20\u5C3A\u5BF8\uFF0C4~30000 \u8303\u56F4\u7684\u6574\u6570\u3002</li><li>frameRate\uFF1A\u6BCF\u79D2\u5E27\u6570\uFF0C1~99 \u7684\u6574\u6570</li><li>duration\uFF1A\u603B\u957F\u5EA6(\u79D2)\uFF0C\u6700\u591A 3 \u5C0F\u65F6\u3002\u8303\u56F4 0.0~10800.0 \u7684\u6574\u6570\u3002</li></ul><p>\u8FD4\u56DE\uFF1A\u65E0\u3002</p><h3 id="setproxywithsequence-\u4F7F\u7528\u5E8F\u5217\u8BBE\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#setproxywithsequence-\u4F7F\u7528\u5E8F\u5217\u8BBE\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> setProxyWithSequence() \u4F7F\u7528\u5E8F\u5217\u8BBE\u7F6E\u4EE3\u7406</h3><p>app.project.item(index).setProxyWithSequence(file,forceAlphabetical)</p><p>\u63CF\u8FF0\uFF1A\u8BBE\u7F6E\u6587\u4EF6\u5E8F\u5217\u4F5C\u4E3A\u6B64 AVItem \u7684\u4EE3\u7406\uFF0C\u5E76\u53EF\u4EE5\u9009\u62E9\u5F3A\u5236\u6309\u5B57\u6BCD\u987A\u5E8F\u6392\u5217\u3002\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u5E8F\u5217\u52A0\u8F7D\u5230\u65B0\u7684 FileSource \u5BF9\u8C61\u4E2D\uFF0C\u5C06\u5176\u8BBE\u7F6E\u4E3A proxySource \u5C5E\u6027\u7684\u503C\uFF0C\u7136\u540E\u8BBE\u7F6E useProxy \u4E3A true\u3002</p><p>\u4E0D\u4FDD\u7559\u89E3\u91CA\u53C2\u6570\uFF0C\u800C\u662F\u4F7F\u7528\u7528\u6237\u9996\u9009\u9879\u3002\u5982\u679C\u6587\u4EF6\u5177\u6709\u672A\u6807\u8BB0\u7684 Alpha \u901A\u9053\uFF0C\u5E76\u4E14\u7528\u6237\u9996\u9009\u9879\u8BE2\u95EE\u7528\u6237\u5982\u4F55\u8BBE\u7F6E\uFF0C\u5219\u8BE5\u65B9\u6CD5\u5C06\u4F30\u7B97 Alpha \u89E3\u6790\uFF0C\u800C\u4E0D\u4F1A\u8BE2\u95EE\u7528\u6237\u3002</p><p>\u53C2\u6570\uFF1A</p><ul><li>file\uFF1A\u5E8F\u5217\u4E2D\u7B2C\u4E00\u4E2A\u6587\u4EF6\uFF0CExtendScript File \u5BF9\u8C61\u3002</li><li>forceAlphabetical\uFF1A\u5982\u679C\u4E3A true\uFF0C\u5219\u4F7F\u7528\u201C\u5F3A\u5236\u5B57\u6BCD\u987A\u5E8F\u201D\u9009\u9879\u3002</li></ul><p>\u8FD4\u56DE\uFF1A\u65E0\u3002</p><h3 id="setproxywithsolid-\u4F7F\u7528\u7EAF\u8272\u56FE\u5C42\u8BBE\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#setproxywithsolid-\u4F7F\u7528\u7EAF\u8272\u56FE\u5C42\u8BBE\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> setProxyWithSolid() \u4F7F\u7528\u7EAF\u8272\u56FE\u5C42\u8BBE\u7F6E\u4EE3\u7406</h3><p>app.project.item(index).setProxyWithSolid(color, name, width, height, pixelAspect)</p><p>\u63CF\u8FF0\uFF1A\u521B\u5EFA\u5177\u6709\u6307\u5B9A\u503C\u7684 SolidSource \u5BF9\u8C61\uFF0C\u5C06\u6B64\u5BF9\u8C61\u8BBE\u7F6E\u4E3A proxySource \u5C5E\u6027\u7684\u503C\uFF0C\u7136\u540E\u8BBE\u7F6E useProxy \u4E3A true\u3002\u4E0D\u4FDD\u7559\u89E3\u6790\u53C2\u6570\uFF0C\u800C\u662F\u4F7F\u7528\u7528\u6237\u9996\u9009\u9879\u3002</p><p>:::info \u63D0\u793A \u65E0\u6CD5\u5728\u7528\u6237\u754C\u9762\u5C06\u7EAF\u8272\u8BBE\u7F6E\u4E3A\u4EE3\u7406\u3002\u6B64\u529F\u80FD\u4EC5\u53EF <strong>\u901A\u8FC7\u811A\u672C</strong> \u5B9E\u73B0\u3002 :::</p><p>\u53C2\u6570\uFF1A</p><ul><li>color\uFF1A\u989C\u8272\uFF0C[R\uFF0CG\uFF0CB]\u6570\u7EC4\uFF0C\u8303\u56F4\u4E3A[0.0~1.0]\u3002</li><li>name\uFF1A\u540D\u79F0\uFF0C\u5B57\u7B26\u4E32\u3002</li><li>width\uFF0C height\uFF1A\u5360\u4F4D\u7B26\u7684\u50CF\u7D20\u5C3A\u5BF8\uFF0C\u6574\u6570\uFF0C\u8303\u56F4\u4E3A[1\u202630000]\u3002</li><li>pixelAspect\uFF1A\u50CF\u7D20\u5BBD\u9AD8\u6BD4\uFF0C\u6D6E\u70B9\u503C\uFF0C\u8303\u56F4\u4E3A[0.01\u2026100.0]\u8303\u56F4\u3002</li></ul><p>\u8FD4\u56DE\uFF1A\u65E0\u3002</p>`,131),i=[s];function o(r,c){return a(),t("div",null,i)}const d=e(p,[["render",o],["__file","AVItem.html.vue"]]);export{d as default};
