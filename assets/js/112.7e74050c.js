(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{546:function(n,o,a){},668:function(n,o,a){"use strict";var t=a(546);a.n(t).a},833:function(n,o,a){"use strict";a.r(o);var t={data:function(){return{backgroundLoading:"#22c16b"}},methods:{openLoadingBackground:function(){var n=this;this.$vs.loading({background:this.backgroundLoading,color:"rgb(255, 255, 255)"}),setTimeout(function(){n.$vs.loading.close()},3e3)}}},e=(a(668),a(1)),c=Object(e.a)(t,function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",{staticClass:"centerx"},[a("input",{directives:[{name:"model",rawName:"v-model",value:n.backgroundLoading,expression:"backgroundLoading"}],attrs:{type:"color",name:"",value:""},domProps:{value:n.backgroundLoading},on:{input:function(o){o.target.composing||(n.backgroundLoading=o.target.value)}}}),a("vs-button",{attrs:{"vs-type":"gradient","vs-color":"success"},on:{click:n.openLoadingBackground}},[n._v("Success")])],1)},[],!1,null,null,null);o.default=c.exports}}]);