"use strict";function e(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(i){if("default"!==i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}})),t.default=e,Object.freeze(t)}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("monaco-editor"));function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var r={props:{mode:{type:String,default:"code"},original:String,value:{type:String,default:"// code"},width:{type:String,default:"100%"},height:{type:String,default:"100%"},language:{type:String,default:"javascript"},theme:{type:String,default:"vs-dark"},lineNumbers:{type:String,default:"on"},readOnly:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}}},data:function(){return{editor:null}},computed:{isDiff:function(){return"diff"===this.mode},baseOptions:function(){return{value:this.value,language:this.language,theme:this.theme,lineNumbers:this.lineNumbers,readOnly:this.readOnly}}},wathch:{language:function(){if(this.editor)if(this.isDiff){var e=this.editor.getModel(),i=e.original,n=e.modified;t.editor.setModelLanguage(i,this.language),t.editor.setModelLanguage(n,this.language)}else t.editor.setModelLanguage(this.editor.getModel(),this.language)},theme:function(){t.editor.setTheme(this.theme)},options:{handle:function(){this.editor&&this.editor.updateOptions(this.options)},deep:!0}},methods:{initEditor:function(){var e=this.isDiff,r=this.value,o=this.language,a=this.theme,u=this.lineNumbers,d=this.readOnly;this.editor=t.editor[e?"createDiffEditor":"create"](this.$el,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({value:r,language:o,theme:a,lineNumbers:u,readOnly:d},this.options)),e?this.diffHandle():this.bindEvent()},diffHandle:function(){var e=this.original,i=this.value,n=this.language,r=t.editor.createModel(e,n),o=t.editor.createModel(i,n);this.editor.setModel({original:r,modified:o})},bindEvent:function(){var e=this;this.editor.onDidChangeModelContent((function(t){e.$emit("input",e.editor.getValue()),e.$emit("change",t)}))}},render:function(e){return e("div",{style:{width:this.width,height:this.height}})},mounted:function(){this.initEditor()}},o=function(e,t){e.component("vue-monaco-editor",r)},a={install:o,monaco:t,VueMonacoEditor:r};exports.VueMonacoEditor=r,exports.default=a,exports.install=o;
