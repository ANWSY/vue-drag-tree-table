!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=16)}([function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(s=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}var s,a,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var s=0;s<e.length;s++){var a=e[s];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="(".concat(a[2],") and (").concat(r,")")),t.push(a))}},t}},function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}r.r(t),r.d(t,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,c=!1,d=function(){},u=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,r,o){c=r,u=o||{};var s=n(e,t);return g(s),function(t){for(var r=[],o=0;o<s.length;o++){var a=s[o];(l=i[a.id]).refs--,r.push(l)}t?g(s=n(e,t)):s=[];for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}}function g(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(v(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(v(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,r,n=document.querySelector("style["+h+'~="'+e.id+'"]');if(n){if(c)return d;n.parentNode.removeChild(n)}if(f){var o=l++;n=a||(a=m()),t=_.bind(null,n,o,!1),r=_.bind(null,n,o,!0)}else n=m(),t=C.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function C(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),u.ssrId&&e.setAttribute(h,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},function(e,t,r){var n=r(9);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(1).default)("5d89b4ee",n,!1,{})},function(e,t,r){var n=r(11);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(1).default)("962a344c",n,!1,{})},function(e,t,r){var n=r(13);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(1).default)("5583fe66",n,!1,{})},function(e,t,r){var n=r(15);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(1).default)("16937dac",n,!1,{})},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},function(e,t,r){"use strict";var n=r(2);r.n(n).a},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".tree-column{position:relative;padding:12px 12px;min-width:60px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;box-sizing:border-box}.tree-column.border{border-right:1px solid #eee}.resize-line{position:absolute;top:0;right:-3px;width:6px;height:100%;cursor:col-resize}\n",""])},function(e,t,r){"use strict";var n=r(3);r.n(n).a},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,"\n.space{\n  display: inline-block;\n  width: 15px;\n}\n",""])},function(e,t,r){"use strict";var n=r(4);r.n(n).a},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,'.tree-block{width:100%;background:rgba(255,255,255,0.8)}.tree-row{position:relative;display:flex;border-bottom:1px solid #eee;line-height:32px}.tree-row:hover{background:#ecf5ff}.tree-row .align-left{text-align:left}.tree-row .align-right{text-align:right}.tree-row .align-center{text-align:center}.hover-model{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.6)}.hover-block{display:flex;opacity:0.1;transition:opacity 0.5s;justify-content:center;align-items:center}.hover-block i{color:#FFF}.prev-block{height:25%;background:#a0c8f7}.center-block{height:50%;background:#a0c8f7}.next-block{height:25%;background:#a0c8f7}.action-item{color:#409eff;cursor:pointer}.action-item i{font-style:normal}.zip-icon{display:inline-block;width:8px;height:8px;vertical-align:middle;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAf0lEQVQ4T7XT0Q2AMAhF0dvNdALdSEdzBB3BDXQD85LGRNMCauS7nAKBxMdIhfwemIAtYpeAEeiANoLUgAGYI4gFqAMX8QAXiQBCNFDNRBVdIgpUkSfADjT3KqLACmg/XrWw5J+Li+VVYCZrMBbgJluA+tXA3Hv45ZgiR3i+OQBeSyYRPEyeUAAAAABJRU5ErkJggg==") no-repeat center;background-size:cover}.arrow-transparent{visibility:hidden}.arrow-bottom{transform:rotate(90deg)}[draggable=true]{-khtml-user-drag:element}\n',""])},function(e,t,r){"use strict";var n=r(5);r.n(n).a},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".drag-tree-table{position:relative;margin:20px 0;color:#606266;font-size:12px}.drag-tree-table.border{border:1px solid #eee;border-right:none}.drag-line{position:absolute;top:0;left:-1000px;height:100%;width:1px;background:#ccc}.drag-tree-table-header{display:flex;background:#f5f7fa;height:66px;line-height:36px;box-sizing:border-box;font-weight:600}.drag-tree-table-header .align-left{text-align:left}.drag-tree-table-header .align-right{text-align:right}.drag-tree-table-header .align-center{text-align:center}.drag-tree-table-header .tree-column{user-select:none}.tree-icon-hidden{visibility:hidden}.is-draging .tree-row:hover{background:transparent !important}.tree-row{background-color:rgba(64,158,255,0);transition:background-color 1s linear}\n",""])},function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"table",staticClass:"drag-tree-table",class:{border:void 0!==e.border}},[r("div",{staticClass:"drag-tree-table-header"},e._l(e.data.columns,(function(t,n){return r("column",{key:n,class:["align-"+t.titleAlign,"colIndex"+n],attrs:{width:t.width,flex:t.flex,border:void 0===e.border?e.resize:e.border}},["checkbox"==t.type?r("input",{staticClass:"checkbox",attrs:{type:"checkbox"},on:{click:function(r){return e.onCheckAll(r,t.onChange)}}}):r("span",[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.resize,expression:"resize!== undefined"}],staticClass:"resize-line",on:{mousedown:function(t){return e.mousedown(n,t)}}})])})),1),e._v(" "),r("div",{staticClass:"drag-tree-table-body",class:e.isDraing?"is-draging":"",style:e.bodyStyle,on:{dragover:e.draging,dragend:e.drop}},e._l(e.data.lists,(function(t,n){return r("row",{key:n,attrs:{depth:"0",columns:e.data.columns,isdraggable:e.isdraggable,model:t,custom_field:e.custom_field,onCheck:e.onSingleCheckChange,border:void 0===e.border?e.resize:e.border,isContainChildren:e.isContainChildren}})})),1),e._v(" "),r("div",{staticClass:"drag-line"})])};n._withStripped=!0;var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tree-block",attrs:{draggable:!!e.isdraggable},on:{dragstart:function(t){return e.dragstart(t)},dragend:function(t){return e.dragend(t)}}},[r("div",{staticClass:"tree-row",attrs:{"data-level":e.depth,"tree-id":e.model[e.custom_field.id],"tree-p-id":e.model[e.custom_field.parent_id]},on:{click:e.toggle}},[e._l(e.columns,(function(t,n){return r("column",{key:n,class:["align-"+t.align,"colIndex"+n],attrs:{field:t.field,width:t.width,flex:t.flex,border:e.border}},["selection"===t.type?r("span",[r("space",{attrs:{depth:e.depth}}),e._v(" "),e.model[e.custom_field.lists]&&e.model[e.custom_field.lists].length?r("span",{staticClass:"zip-icon",class:[e.model[e.custom_field.open]?"arrow-bottom":"arrow-right"]}):r("span",{staticClass:"zip-icon arrow-transparent"}),e._v(" "),t.formatter?r("span",{domProps:{innerHTML:e._s(t.formatter(e.model))}}):r("span",{domProps:{innerHTML:e._s(e.model[t.field])}})],1):"action"===t.type?r("span",e._l(t.actions,(function(t,n){return r("a",{key:n,staticClass:"action-item",attrs:{type:"text",size:"small"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.onclick(e.model)}}},[r("i",{class:t.icon,domProps:{innerHTML:e._s(t.formatter(e.model))}})])})),0):"checkbox"===t.type?r("span",[!1!==e.model.isShowCheckbox?r("input",{directives:[{name:"model",rawName:"v-model",value:e.model[e.custom_field.checked],expression:"model[custom_field.checked]"}],staticClass:"checkbox action-item",attrs:{type:"checkbox",name:e.model[e.custom_field.id]},domProps:{checked:Array.isArray(e.model[e.custom_field.checked])?e._i(e.model[e.custom_field.checked],null)>-1:e.model[e.custom_field.checked]},on:{click:function(t){return t.stopPropagation(),e.onCheckboxClick(t,e.model)},change:function(t){var r=e.model[e.custom_field.checked],n=t.target,o=!!n.checked;if(Array.isArray(r)){var i=e._i(r,null);n.checked?i<0&&e.$set(e.model,e.custom_field.checked,r.concat([null])):i>-1&&e.$set(e.model,e.custom_field.checked,r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.model,e.custom_field.checked,o)}}}):e._e()]):r("span",[t.formatter?r("span",{domProps:{innerHTML:e._s(t.formatter(e.model))}}):r("span",[e._v(e._s(e.model[t.field]))])])])})),e._v(" "),e._m(0)],2),e._v(" "),e._l(e.model[e.custom_field.lists],(function(t,n){return e.isFolder?r("row",{directives:[{name:"show",rawName:"v-show",value:e.model[e.custom_field.open],expression:"model[custom_field.open]"}],key:n,attrs:{model:t,columns:e.columns,isdraggable:e.isdraggable,border:e.border,depth:1*e.depth+1,custom_field:e.custom_field,onCheck:e.onCheck,isContainChildren:e.isContainChildren}}):e._e()}))],2)};o._withStripped=!0;var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.flex?r("div",{staticClass:"tree-column",class:{border:void 0!==e.border},style:{width:e.width+"px",flex:e.flex}},[e._t("default")],2):r("div",{staticClass:"tree-column",class:{border:void 0!==e.border},style:{width:e.width+"px"}},[e._t("default")],2)};i._withStripped=!0;var s={name:"column",props:{width:Number,field:String,label:String,flex:Number,border:String},data:function(){return{open:!1}},mounted:function(){}};r(8);function a(e,t,r,n,o,i,s,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}var l=a(s,i,[],!1,null,null,null);l.options.__file="src/lib/column.vue";var c=l.exports,d=function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"space-container"},this._l(this.spaces,(function(e,r){return t("span",{key:r,staticClass:"space"})})),0)};d._withStripped=!0;var u={name:"space",props:["depth"],computed:{spaces:function(){for(var e=[],t=0;t<this.depth;t++)e.push("");return e}}},h=(r(10),a(u,d,[],!1,null,null,null));h.options.__file="src/lib/space.vue";var f=h.exports,p={name:"row",props:["model","depth","columns","isdraggable","border","custom_field","onCheck","isContainChildren"],data:function(){return{open:!1,visibility:"visible"}},components:{column:c,space:f},computed:{isFolder:function(){return this.model[this.custom_field.lists]&&this.model[this.custom_field.lists].length}},methods:{toggle:function(){this.isFolder&&(this.model[this.custom_field.open]=!this.model[this.custom_field.open],this.$forceUpdate())},dragstart:function(e){navigator.userAgent.indexOf("Firefox")>=0&&e.dataTransfer.setData("Text",this.id),window.dragId=e.target.children[0].getAttribute("tree-id"),window.dragPId=e.target.children[0].getAttribute("tree-p-id"),window.dragParentNode=e.target,e.target.style.opacity=.2},dragend:function(e){e.target.style.opacity=1},setAllCheckData:function(e,t){for(var r=this.custom_field.lists,n=0;n<e.length;n++){var o=e[n];this.$set(o,"checked",t),o[r]&&o[r].length&&this.setAllCheckData(o[r],t)}},onCheckboxClick:function(e,t){t[this.custom_field.lists]&&this.isContainChildren?this.setAllCheckData(t[this.custom_field.lists]||[],!!e.target.checked):this.$set(t,"checked",!!e.target.checked),this.onCheck&&this.onCheck()}}},g=(r(12),a(p,o,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hover-model",staticStyle:{display:"none"}},[t("div",{staticClass:"hover-block prev-block"},[t("i",{staticClass:"el-icon-caret-top"})]),this._v(" "),t("div",{staticClass:"hover-block center-block"},[t("i",{staticClass:"el-icon-caret-right"})]),this._v(" "),t("div",{staticClass:"hover-block next-block"},[t("i",{staticClass:"el-icon-caret-bottom"})])])}],!1,null,null,null));g.options.__file="src/lib/row.vue";var m=g.exports,v=r(6),b=r.n(v),y=r(7),_=r.n(y),C=b()({clearHoverStatus:function(){for(var e=document.querySelectorAll(".tree-row"),t=0;t<e.length;t++){var r=e[t],n=r.children[r.children.length-1];n.style.display="none",n.children[0].style.opacity=.1,n.children[1].style.opacity=.1,n.children[2].style.opacity=.1}},getElementTop:function(e,t){for(var r=t.querySelector(".drag-tree-table-body").scrollTop,n=e.offsetTop-r,o=e.offsetParent;null!==o;)n+=o.offsetTop,o=o.offsetParent;return n},getElementLeft:function(e){for(var t=e.offsetLeft,r=e.offsetParent;null!==r;)t+=r.offsetLeft,r=r.offsetParent;return t},deepClone:function(e){if(!e)return e;var t,r,n;for(n in t=Array.isArray(e)?[]:{},e)r=e[n],t[n]="object"===_()(r)?C.deepClone(r):r;return t}},"clearHoverStatus",(function(){for(var e=document.querySelectorAll(".tree-row"),t=0;t<e.length;t++){var r=e[t],n=r.children[r.children.length-1];n.style.display="none",n.children[0].style.opacity=.1,n.children[1].style.opacity=.1,n.children[2].style.opacity=.1}})),x=C;document.body.ondrop=function(e){e.preventDefault(),e.stopPropagation()};var w={name:"dragTreeTable",components:{row:m,column:c,space:f},computed:{bodyStyle:function(){return{overflow:void 0!==this.fixed?"auto":"hidden",height:void 0!==this.fixed?(this.height||400)+"px":"auto"}}},props:{isdraggable:{type:Boolean,default:!0},data:Object,onDrag:Function,fixed:String|Boolean,height:String|Number,border:String,onlySameLevelCanDrag:String,hightRowChange:String,resize:String},data:function(){return{dragX:0,dragY:0,dragId:"",targetId:"",whereInsert:"",isDraing:!1,custom_field:{id:"id",parent_id:"parent_id",order:"order",lists:"lists",open:"open",checked:"checked"},onCheckChange:null,isContainChildren:!1,mouse:{status:0,startX:0,curColWidth:0,curIndex:0}}},methods:{draging:function(e){this.isDraing=!0,e.pageX==this.dragX&&e.pageY==this.dragY||(this.dragX=e.pageX,this.dragY=e.pageY,this.filter(e.pageX,e.pageY),e.clientY<100?window.scrollTo(0,scrollY-6):e.clientY>document.body.clientHeight-160&&window.scrollTo(0,scrollY+6))},drop:function(e){x.clearHoverStatus(),this.resetTreeData(),this.isDraing=!1,void 0!==this.targetId&&void 0!==this.hightRowChange&&this.$nextTick((function(){var e=document.querySelector("[tree-id='"+window.dragId+"']");e.style.backgroundColor="rgba(64,158,255,0.5)",setTimeout((function(){e.style.backgroundColor="rgba(64,158,255,0)"}),2e3)}))},filter:function(e,t){console.log(2222222);var r=document.querySelectorAll(".tree-row");this.targetId=void 0;var n=x.getElementTop(window.dragParentNode,this.$refs.table),o=x.getElementLeft(window.dragParentNode),i=o+window.dragParentNode.clientWidth,s=n+window.dragParentNode.clientHeight;if(!(e>=o&&e<=i&&t>=n&&t<=s)){for(var a=0;a<r.length;a++){var l=r[a],c=x.getElementLeft(l),d=x.getElementTop(l,this.$refs.table),u=l.clientWidth,h=l.clientHeight;if(e>c&&e<c+u&&t>d&&t<d+h){var f=t-d,p=l.getAttribute("tree-p-id");if(void 0!==this.onlySameLevelCanDrag&&p!==window.dragPId)return;this.targetId=l.getAttribute("tree-id");var g=l.children[l.children.length-1];g.style.display="block";var m="",v=l.offsetHeight;if(f/v>.75)"0.5"!==g.children[2].style.opacity&&(x.clearHoverStatus(),g.children[2].style.opacity=.5),m="bottom";else if(f/v>.25){if(void 0!==this.onlySameLevelCanDrag)return;"0.5"!==g.children[1].style.opacity&&(x.clearHoverStatus(),g.children[1].style.opacity=.5),m="center"}else"0.5"!==g.children[0].style.opacity&&(x.clearHoverStatus(),g.children[0].style.opacity=.5),m="top";this.whereInsert=m;break}}if(void 0===this.targetId){console.log(33333),x.clearHoverStatus()}}},resetTreeData:function(){if(console.log(5555,this.targetId),void 0!==this.targetId){var e=this.custom_field.lists,t=this.custom_field.parent_id,r=this.custom_field.id,n=[],o=this.data.lists,i=this,s=null,a=null;!function n(o,l){for(var c=0;c<o.length;c++){var d=o[c],u=x.deepClone(d);u[e]=[],i.targetId==d[r]?(s=i.getItemById(i.data.lists,window.dragId),a=i.getItemById(i.data.lists,i.targetId),"top"===i.whereInsert?(s[t]=d[t],l.push(s),l.push(u)):"center"===i.whereInsert?(s[t]=d[r],u.open=!0,u[e].push(s),l.push(u)):(s[t]=d[t],l.push(u),l.push(s))):window.dragId!=d[r]&&l.push(u),d[e]&&d[e].length&&n(d[e],u[e])}}(o,n),this.resetOrder(n),this.onDrag(n,s,a,i.whereInsert)}},resetOrder:function(e){for(var t=this.custom_field.lists,r=0;r<e.length;r++)e[r][this.custom_field.order]=r,e[r][t]&&e[r][t].length&&this.resetOrder(e[r][t])},getItemById:function(e,t){var r=null,n=this.custom_field.lists,o=this.custom_field.id;return function e(i){for(var s=0;s<i.length;s++){var a=i[s];if(a[o]==t){r=JSON.parse(JSON.stringify(a));break}a[n]&&a[n].length&&e(a[n])}}(e),r},onCheckAll:function(e,t){this.setAllCheckData(this.data.lists,!!e.target.checked);var r=this.getCheckedList(this.data.lists);t&&t(r)},onSingleCheckChange:function(){var e=this.getCheckedList(this.data.lists);this.onCheckChange&&this.onCheckChange(e)},setAllCheckData:function(e,t){for(var r=this.custom_field.lists,n=0;n<e.length;n++){var o=e[n];this.$set(o,"checked",t),o[r]&&o[r].length&&this.setAllCheckData(o[r],t)}},getCheckedList:function(e){var t=this.custom_field.lists,r=[];return function e(n){for(var o=0;o<n.length;o++){var i=n[o];i.checked&&0!=i.isShowCheckbox&&r.push(i),i[t]&&i[t].length&&e(i[t])}}(x.deepClone(e)),r},mousedown:function(e,t){var r=t.target.getBoundingClientRect().x,n=t.target.parentElement.offsetWidth;this.mouse={status:1,startX:r,curIndex:e,curColWidth:n}}},mounted:function(){var e=this;console.log(3333,this.fixed),this.data.custom_field&&(this.custom_field=Object.assign({},this.custom_field,this.data.custom_field)),setTimeout((function(){e.data.columns.map((function(t){"checkbox"==t.type&&(e.onCheckChange=t.onChange,e.isContainChildren=t.isContainChildren)}))}),100),window.addEventListener("mouseup",(function(t){if(e.mouse.status){var r=t.clientX;document.querySelector(".drag-line").style.left="-10000px",e.mouse.status=0;for(var n=e.mouse.curColWidth+(r-e.mouse.startX),o=document.querySelectorAll(".colIndex"+e.mouse.curIndex),i=0;i<o.length;i++){o[i].style.width=n+"px"}e.data.columns[e.mouse.curIndex].width=n}})),window.addEventListener("mousemove",(function(t){if(e.mouse.status){var r=t.clientX,n=document.querySelector(".drag-tree-table").getBoundingClientRect().left;document.querySelector(".drag-line").style.left=r-n+"px"}}))}},k=(r(14),a(w,n,[],!1,null,null,null));k.options.__file="src/lib/dragTreeTable.vue";var S=k.exports;S.install=function(e){return e.component(S.name,S)};t.default=S}]);