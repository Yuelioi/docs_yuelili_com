import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as d,a as e,b as t,d as o,w as a,e as r,r as l}from"./app.75ca2a8e.js";const h={},p=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),t(" Description")],-1),u=e("h1",{id:"footageitem-object\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#footageitem-object\xB6","aria-hidden":"true"},"#"),t(" FootageItem object\xB6")],-1),f=e("p",null,[e("code",null,"app.project.item(index)"),t(),e("code",null,"app.project.items[index]")],-1),m=e("p",null,[e("strong",null,"Description")],-1),g=e("p",null,"The FootageItem object represents a footage item imported into a project,which appears in the Project panel. These are accessed by position indexnumber in a project\u2019s item collection.",-1),_=e("hr",null,null,-1),b=e("h2",{id:"attributes\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes\xB6","aria-hidden":"true"},"#"),t(" Attributes\xB6")],-1),j=e("h3",{id:"footageitem-file\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#footageitem-file\xB6","aria-hidden":"true"},"#"),t(" FootageItem.file\xB6")],-1),I=e("p",null,[e("code",null,"app.project.item(index).file")],-1),x=e("p",null,[e("strong",null,"Description")],-1),F={href:"https://extendscript.docsforadobe.dev/file-system-access/file-object.html",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"mainSource",-1),v=e("p",null,[e("strong",null,"Type")],-1),y={href:"https://extendscript.docsforadobe.dev/file-system-access/file-object.html",target:"_blank",rel:"noopener noreferrer"},S=e("hr",null,null,-1),T=e("h3",{id:"footageitem-mainsource\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#footageitem-mainsource\xB6","aria-hidden":"true"},"#"),t(" FootageItem.mainSource\xB6")],-1),P=e("p",null,[e("code",null,"app.project.item(index).mainSource")],-1),A=e("p",null,[e("strong",null,"Description")],-1),k=e("p",null,[e("strong",null,"Type")],-1),D=r('<hr><h2 id="methods\xB6" tabindex="-1"><a class="header-anchor" href="#methods\xB6" aria-hidden="true">#</a> Methods\xB6</h2><h3 id="footageitem-openinviewer-\xB6" tabindex="-1"><a class="header-anchor" href="#footageitem-openinviewer-\xB6" aria-hidden="true">#</a> FootageItem.openInViewer()\xB6</h3><p><code>app.project.item(index).openInViewer()</code></p><p><strong>Description</strong></p><p>Opens the footage in a Footage panel, and moves the Footage panel to front and gives it focus.</p><p>:::info Note</p><p>Missing and placeholder footage can be opened using this method, but cannotmanually (via double-clicking it). ::: <strong>Parameters</strong></p><p>None.</p><p><strong>Returns</strong></p>',10),V=e("hr",null,null,-1),C=e("h3",{id:"footageitem-replace-\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#footageitem-replace-\xB6","aria-hidden":"true"},"#"),t(" FootageItem.replace()\xB6")],-1),q=e("p",null,[e("code",null,"app.project.item(index).replace(file)")],-1),W=e("p",null,[e("strong",null,"Description")],-1),E=e("p",null,"Changes the source of this FootageItem to the specified file.",-1),N=e("code",null,"name",-1),R=e("code",null,"width",-1),B=e("code",null,"height",-1),L=e("code",null,"frameDuration",-1),M=e("code",null,"duration",-1),O=e("p",null,[t("The method preserves interpretation parameters from the previous "),e("code",null,"mainSource"),t(" object.")],-1),G=e("p",null,"If the specified file has an unlabeled alpha channel, the method estimates the alpha interpretation.",-1),z=e("p",null,[e("strong",null,"Parameters")],-1),H=e("thead",null,[e("tr",null,[e("th",null,"Property"),e("th",null,"Type")])],-1),J=e("td",null,[e("code",null,"file")],-1),K={href:"https://extendscript.docsforadobe.dev/file-system-access/file-object.html",target:"_blank",rel:"noopener noreferrer"},Q=r('<p>source.</p><hr><h3 id="footageitem-replacewithplaceholder-\xB6" tabindex="-1"><a class="header-anchor" href="#footageitem-replacewithplaceholder-\xB6" aria-hidden="true">#</a> FootageItem.replaceWithPlaceholder()\xB6</h3><p><code>app.project.item(index).replaceWithPlaceholder(name, width, height, frameRate, duration)</code></p><p><strong>Description</strong></p><p>Changes the source of this FootageItem to the specified placeholder. Creates anew PlaceholderSource object, sets its values from the parameters, and sets<code>mainSource</code> to that object.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>A string containing the name of the placeholder.</td></tr><tr><td><code>width</code></td><td>The width of the placeholder in pixels, an integer in the range <code>[4..30000]</code>.</td></tr><tr><td><code>height</code></td><td>The height of the placeholder in pixels, an integer in the range <code>[4..30000]</code>.</td></tr><tr><td><code>frameRate</code></td><td>The frame rate of the placeholder, a floating-point value in the range</td></tr></tbody></table><p><code>[1.0..99.0]</code></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>duration</code></td><td>The duration of the placeholder in seconds, a floating-point value in therange <code>[0.0..10800.0]</code>.</td></tr></tbody></table><hr><h3 id="footageitem-replacewithsequence-\xB6" tabindex="-1"><a class="header-anchor" href="#footageitem-replacewithsequence-\xB6" aria-hidden="true">#</a> FootageItem.replaceWithSequence()\xB6</h3><p><code>app.project.item(index).replaceWithSequence(file, forceAlphabetical)</code></p><p><strong>Description</strong></p><p>Changes the source of this FootageItem to the specified image sequence.</p>',15),U=e("code",null,"mainSource",-1),X=e("code",null,"name",-1),Y=e("code",null,"width",-1),Z=e("code",null,"height",-1),$=e("code",null,"frameDuration",-1),ee=e("code",null,"duration",-1),te=e("p",null,[t("The method preserves interpretation parameters from the previous "),e("code",null,"mainSource"),t("object. If the specified file has an unlabeled alpha channel, the methodestimates the alpha interpretation.")],-1),oe=e("p",null,[e("strong",null,"Parameters")],-1),ne=e("thead",null,[e("tr",null,[e("th",null,"Property"),e("th",null,"Type")])],-1),ae=e("td",null,[e("code",null,"file")],-1),ie={href:"https://extendscript.docsforadobe.dev/file-system-access/file-object.html",target:"_blank",rel:"noopener noreferrer"},re=e("tr",null,[e("td",null,[e("code",null,"forceAlphabetical")]),e("td",null,"When true, use the \u201CForce alphabetical order\u201D option.")],-1),le=r('<hr><h3 id="footageitem-replacewithsolid-\xB6" tabindex="-1"><a class="header-anchor" href="#footageitem-replacewithsolid-\xB6" aria-hidden="true">#</a> FootageItem.replaceWithSolid()\xB6</h3><p><code>app.project.item(index).replaceWithSolid(color, name, width, height, pixelAspect)</code></p><p><strong>Description</strong></p><p>Changes the source of this FootageItem to the specified solid. Creates a newSolidSource object, sets its values from the parameters, and sets <code>mainSource</code> to that object.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>color</code></td><td>The color of the solid, an array of three floating-point values, <code>[R, G, B]</code>,in the range <code>[0.0..1.0]</code>.</td></tr><tr><td><code>name</code></td><td>A string containing the name of the solid.</td></tr><tr><td><code>width</code></td><td>The width of the solid in pixels, an integer in the range <code>[4..30000]</code>.</td></tr><tr><td><code>height</code></td><td>The height of the solid in pixels, an integer in the range <code>[4..30000]</code>.</td></tr><tr><td><code>pixelAspect</code></td><td>The pixel aspect ratio of the solid, a floating-point value in the range</td></tr></tbody></table><p><code>[0.01..100.0]</code>.</p>',8);function se(ce,de){const n=l("RouterLink"),i=l("ExternalLinkIcon");return c(),d("div",null,[p,u,f,m,g,e("blockquote",null,[e("p",null,[t("FootageItem is a subclass of "),o(n,{to:"/en/ae/scripting/Item/avitem.html#avitem"},{default:a(()=>[t("AVItem object")]),_:1}),t(", which is a subclass of "),o(n,{to:"/en/ae/scripting/Item/item.html#item"},{default:a(()=>[t("Item object")]),_:1}),t(". All methods and attributes of AVItem and Item, in addition to those listed below, are available when working with FootageItem.")])]),_,b,j,I,x,e("p",null,[t("The "),e("a",F,[t("Extendscript File"),o(i)]),t(" object for the footage\u2019s source file.")]),e("p",null,[t("If the FootageItem\u2019s "),w,t(" is a FileSource, this is the same as"),o(n,{to:"/en/ae/scripting/sources/filesource.html#filesource-file"},{default:a(()=>[t("FootageItem.mainSource.file")]),_:1}),t(". Otherwise it is null.")]),v,e("p",null,[e("a",y,[t("File"),o(i)]),t(" object; read-only.")]),S,T,P,A,e("p",null,[t("The footage source, an object that contains all of the settings related tothat footage item, including those that are normally accessed through theInterpret Footage dialog box. The attribute is read-only. To change its value,call one of the FootageItem \u201Creplace\u201D methods. See the "),o(n,{to:"/en/ae/scripting/sources/footagesource.html#footagesource"},{default:a(()=>[t("FootageSourceobject")]),_:1}),t(", and its three types:")]),e("ul",null,[e("li",null,[e("p",null,[o(n,{to:"/en/ae/scripting/sources/solidsource.html#solidsource"},{default:a(()=>[t("SolidSource object")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/en/ae/scripting/sources/filesource.html#filesource"},{default:a(()=>[t("FileSource object")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/en/ae/scripting/sources/placeholdersource.html#placeholdersource"},{default:a(()=>[t("PlaceholderSource object")]),_:1})])])]),e("p",null,[t("If this is a FileSource object, and the "),o(n,{to:"/en/ae/scripting/Item/avitem.html#avitem-footagemissing"},{default:a(()=>[t("footageMissing")]),_:1}),t(" value is true, the path to the missing footage file is in the"),o(n,{to:"/en/ae/scripting/sources/filesource.html#filesource-missingfootagepath"},{default:a(()=>[t("FileSource.missingFootagePath")]),_:1}),t(" attribute.")]),k,e("p",null,[o(n,{to:"/en/ae/scripting/sources/footagesource.html#footagesource"},{default:a(()=>[t("FootageSource object")]),_:1}),t("; read- only.")]),D,e("p",null,[o(n,{to:"/en/ae/scripting/other/viewer.html#viewer"},{default:a(()=>[t("Viewer object")]),_:1}),t(" for the Footage panel, or null if the footage could not be opened.")]),V,C,q,W,E,e("p",null,[t("In addition to loading the file, the method creates a new FileSource objectfor the file and sets mainSource to that object. In the new source object, itsets the "),N,t(", "),R,t(", "),B,t(", "),L,t(", and "),M,t(" attributes(see "),o(n,{to:"/en/ae/scripting/Item/avitem.html#avitem"},{default:a(()=>[t("AVItem object")]),_:1}),t(") based on the contents of the file.")]),O,G,z,e("table",null,[H,e("tbody",null,[e("tr",null,[J,e("td",null,[t("An "),e("a",K,[t("Extendscript File"),o(i)]),t(" object for the file to be used as the footage main")])])])]),Q,e("p",null,[t("In addition to loading the file, the method creates a new FileSource objectfor the file and sets "),U,t(" to that object. In the new source object,it sets the "),X,t(", "),Y,t(", "),Z,t(", "),$,t(", and "),ee,t("attributes (see "),o(n,{to:"/en/ae/scripting/Item/avitem.html#avitem"},{default:a(()=>[t("AVItem object")]),_:1}),t(") based on the contents of the file.")]),te,oe,e("table",null,[ne,e("tbody",null,[e("tr",null,[ae,e("td",null,[t("An "),e("a",ie,[t("Extendscript File"),o(i)]),t(" object for the first file in the sequence to be usedas the footage main source.")])]),re])]),le])}const ue=s(h,[["render",se],["__file","FootageItem.html.vue"]]);export{ue as default};
