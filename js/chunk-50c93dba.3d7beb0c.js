(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50c93dba"],{"0160":function(t,e,n){},"0fd9":function(t,e,n){"use strict";var i=n("ade3"),a=n("5530"),o=(n("13d5"),n("d3b7"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("4160"),n("159b"),n("4b85"),n("2b0e")),r=n("d9f7"),s=n("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function d(t,e){return l.reduce((function(n,i){return n[t+Object(s["E"])(i)]=e(),n}),{})}var u=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:u}})),v=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},p=d("justify",(function(){return{type:String,default:null,validator:v}})),m=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=d("alignContent",(function(){return{type:String,default:null,validator:m}})),b={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(g)},h={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var i=h[t];if(null!=n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return i+="-".concat(n),i.toLowerCase()}}var x=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},f),{},{justify:{type:String,default:null,validator:v}},p),{},{alignContent:{type:String,default:null,validator:m}},g),render:function(t,e){var n=e.props,a=e.data,o=e.children,s="";for(var l in n)s+=String(n[l]);var c=x.get(s);return c||function(){var t,e;for(e in c=[],b)b[e].forEach((function(t){var i=n[t],a=C(e,t,i);a&&c.push(a)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(s,c)}(),t(n.tag,Object(r["a"])(a,{staticClass:"row",class:c}),o)}})},"20f6":function(t,e,n){},"25f6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"pb-6 pt-0",attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card",{staticClass:"card-shadow border-radius-xl position-sticky top-1",attrs:{elevation:"0",height:"400"}},[n("div",{staticClass:"ma-4 pt-4"},[t._v(" 맨위에 고정 "),n("br"),t._v(" position sticky ")])])],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card",{staticClass:"card-shadow border-radius-xl mb-30"},[n("div",{staticClass:"pt-2"},[n("h2",{staticClass:"mb-0 mt-4 ml-6 pl-4"},[t._v("Timeline")])]),n("v-card-text",{staticClass:"px-0 pt-0"},[n("v-timeline",{staticClass:"timeline-line-color",attrs:{dense:"","align-top":""}},t._l(t.timeline,(function(e,i){return n("v-timeline-item",{key:e.title+i,staticClass:"timeline",attrs:{small:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",{attrs:{size:"26",color:"#ffffff"}},[n("v-icon",{class:"text-gradient text-"+e.btn,attrs:{size:"16"}},[t._v(t._s(e.icon))])],1)]},proxy:!0}],null,!0)},[n("v-card",{attrs:{width:"820"}},[n("v-card-title",{staticClass:"px-4 pt-2 pb-1 d-block"},[n("h6",{staticClass:"text-dark text-sm font-weight-bold mb-0 d-block"},[t._v(" "+t._s(e.title)+" ")]),n("p",{staticClass:"text-secondary font-weight-bold text-xs mb-0"},[t._v(" "+t._s(e.date)+" ")])]),n("v-card-text",{staticClass:"px-4"},[n("p",{staticClass:"text-sm mt-3 mb-2 text-body"},[t._v(" People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. ")]),n("div",{staticClass:"mt-3"},t._l(e.badges,(function(i){return n("v-btn",{key:i.text,staticClass:"\n                          border-radius-sm\n                          text-xxs text-white\n                          me-1\n                          shadow-none\n                          font-weight-bold\n                          px-3\n                          py-1\n                          badge-font-size\n                        ",class:"bg-gradient-"+e.btn,attrs:{"v-if":e.badges,elevation:"0",small:"",ripple:!1,height:"21"}},[t._v(t._s(i.text))])})),1)])],1)],1)})),1)],1)],1)],1)],1)],1),n("top-button")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"scroll-y"},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{ripple:!1,fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[n("v-icon",{attrs:{size:"30"}},[t._v("mdi-chevron-up")])],1)],1)],1)],1)},r=[],s={name:"GoTopButton",data:function(){return{fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},l=s,c=n("2877"),d=n("6544"),u=n.n(d),f=n("8336"),v=n("a523"),p=(n("20f6"),n("e8f2")),m=Object(p["a"])("flex"),g=n("132d"),b=Object(p["a"])("layout"),h=n("269a"),C=n.n(h),x=n("f977"),y=Object(c["a"])(l,o,r,!1,null,null,null),_=y.exports;u()(y,{VBtn:f["a"],VContainer:v["a"],VFlex:m,VIcon:g["a"],VLayout:b}),C()(y,{Scroll:x["b"]});var w={name:"timeline",components:{TopButton:_},data:function(){return{timeline:[{title:"$2400, Design changes",date:"22 DEC 7:20 PM",color:"#b0eed3",iconColor:"#1aae6f",icon:"mdi-bell",btn:"success",badges:[{text:"desgin"}]},{title:"New order #1832412",date:"21 DEC 11 PM",color:"#fdd1da",iconColor:"#f80031",icon:"mdi-language-html5",btn:"danger",badges:[{text:"order"},{text:"#1832412"}]},{title:"Server payments for April",date:"21 DEC 9:34 PM",color:"#fdd1da",iconColor:"#f80031",icon:"mdi-cart",btn:"info",badges:[{text:"server"},{text:"payments"}]},{title:"New card added for order #4395133",date:"20 DEC 2:20 AM",color:"#fdd1da",iconColor:"#f80031",icon:"mdi-credit-card",btn:"warning",badges:[{text:"card"},{text:"#4395133"},{text:"priority"}]},{title:"Unlock packages for development",date:"18 DEC 4:54 AM",color:"#fdd1da",iconColor:"#f80031",icon:"mdi-key",btn:"primary",badges:[{text:"development"}]},{title:"New message unread",date:"16 DEC",color:"#fdd1da",iconColor:"#f80031",icon:"mdi-archive",btn:"success",badges:[{text:"message"}]},{title:"Notifications unread",date:"15 DEC",color:"#fdd1da",iconColor:"#f80031",icon:"mdi-check-bold",btn:"info"},{title:"New request",date:"14 DEC",color:"#fdd1da",iconColor:"#f80031",icon:"mdi-package-variant",btn:"warning",badges:[{text:"request"},{text:"priority"}]},{title:"Controller issues",date:"13 DEC",color:"#fdd1da",iconColor:"#f80031",icon:"mdi-google-controller",btn:"default",badges:[{text:"controller"}]}]}}},j=w,O=(n("f633"),n("8212")),S=n("b0af"),k=n("99d9"),E=n("62ad"),D=n("0fd9"),B=n("5530"),$=(n("26e9"),n("0160"),n("58df")),V=n("7560"),T=Object($["a"])(V["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(B["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots["default"])}}),P=(n("c96a"),n("9d26")),I=n("a9ad"),M=Object($["a"])(I["a"],V["a"]),N=M.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots["default"])},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(P["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(B["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(B["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),A=Object(c["a"])(j,i,a,!1,null,null,null);e["default"]=A.exports;u()(A,{VAvatar:O["a"],VBtn:f["a"],VCard:S["a"],VCardText:k["c"],VCardTitle:k["d"],VCol:E["a"],VContainer:v["a"],VIcon:g["a"],VRow:D["a"],VTimeline:T,VTimelineItem:N})},"269a":function(t,e){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.directives=t.exports.options.directives),n.directives=n.directives||{},e)n.directives[i]=n.directives[i]||e[i]}},a523:function(t,e,n){"use strict";n("4de4"),n("d3b7"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85");var i=n("e8f2"),a=n("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,o=e.data,r=e.children,s=o.attrs;return s&&(o.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(o.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(o.domProps=o.domProps||{},o.domProps.id=i.id),t(i.tag,Object(a["a"])(o,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),r)}})},cbf4:function(t,e,n){},e8f2:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("498a"),n("99af"),n("4de4"),n("d3b7"),n("b64b"),n("2ca0"),n("a15b");var i=n("2b0e");function a(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,a=n.data,o=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var r=a.attrs;if(r){a.attrs={};var s=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(a.staticClass+=" ".concat(s.join(" ")))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,o)}})}},f633:function(t,e,n){"use strict";n("cbf4")},f977:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("53ca");function a(t,e,n){var a=e.modifiers||{},o=a.self,r=void 0!==o&&o,s=e.value,l="object"===Object(i["a"])(s)&&s.options||{passive:!0},c="function"===typeof s||"handleEvent"in s?s:s.handler,d=r?t:e.arg?document.querySelector(e.arg):window;d&&(d.addEventListener("scroll",c,l),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:c,options:l,target:r?void 0:d})}function o(t,e,n){var i;if(null!=(i=t._onScroll)&&i[n.context._uid]){var a=t._onScroll[n.context._uid],o=a.handler,r=a.options,s=a.target,l=void 0===s?t:s;l.removeEventListener("scroll",o,r),delete t._onScroll[n.context._uid]}}var r={inserted:a,unbind:o};e["b"]=r}}]);
//# sourceMappingURL=chunk-50c93dba.3d7beb0c.js.map