(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-458601c8"],{"3a2f":function(t,e,i){"use strict";var n=i("ade3"),o=(i("a9e3"),i("e25e"),i("9734"),i("4ad4")),s=i("a9ad"),a=i("16b7"),r=i("b848"),c=i("f573"),h=i("80d2"),l=i("d9bd"),u=i("58df");e["a"]=Object(u["a"])(s["a"],a["a"],r["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,o=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=o+e.width/2-i.width/2:(this.left||this.right)&&(s=o+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-i.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(h["h"])(this.maxWidth),minWidth:Object(h["h"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(h["u"])(this,"activator",!0)&&Object(l["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===h["y"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"5ed0":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ml-2 px-2 text-white me-1 shadow-none font-weight-bold badge-font-size",attrs:{ripple:!1,elevation:"0",small:"",height:"21",color:"#181717",href:t.href,target:"_blank"}},"v-btn",o,!1),n),[i("div",{staticClass:"mr-1"},[i("img",{staticClass:"color-default",attrs:{src:"src/assets/icon/github.svg",height:"15"}})]),t._v(" "+t._s(t.title)+" ")])]}}])},[i("span",[t._v(" Click to GitHub ")])])},o=[],s={props:["href","title"]},a=s,r=i("2877"),c=i("6544"),h=i.n(c),l=i("8336"),u=i("3a2f"),d=Object(r["a"])(a,n,o,!1,null,null,null);e["a"]=d.exports;h()(d,{VBtn:l["a"],VTooltip:u["a"]})},"6d38":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",{attrs:{fluid:""}},[i("v-row",{},[i("v-col",{attrs:{cols:"12",lg:"6"}},[i("base-material-my-card",{staticClass:"pa-0",attrs:{color:"grey lighten-3"},scopedSlots:t._u([{key:"heading",fn:function(){return[i("sir-chart")]},proxy:!0}])},[i("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" SIR Model "),i("git-hub",{attrs:{href:"https://github.com/HAR00N/MERS_modelling/tree/main/SIR",title:"SIR"}})],1),i("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1 mb-1"},[i("v-icon",{attrs:{color:"#616161"}},[t._v(" mdi-circle-medium ")]),t._v(" : Real data "),i("v-icon",{attrs:{color:"#3A416F"}},[t._v(" mdi-minus-thick ")]),t._v(" : Susceptible "),i("v-icon",{attrs:{color:"cyan"}},[t._v(" mdi-minus-thick ")]),t._v(" : Infected "),i("v-icon",{attrs:{color:"green"}},[t._v(" mdi-minus-thick ")]),t._v(" : Recovered ")],1),i("p",{staticClass:"mb-1 mt-0 mx-4",attrs:{elevation:"0"}},[t._v(" Real data : 실제 감염군 수 "),i("br"),t._v(" Susceptible (감염대상군) : 감염될 수 있으나 아직 감염되지 않은 개체의 수 "),i("br"),t._v(" Infected (감염군) : 병을 전염시킬 수 있는 개체의 수 "),i("br"),t._v(" Recovered (회복군) : 병에서 회복한 개체의 수와 격리 중 사망한 개체의 수의 합 ")])])],1),i("v-col",{attrs:{cols:"12",lg:"6"}},[i("base-material-my-card",{staticClass:"pa-0",attrs:{color:"blue-grey lighten-4"},scopedSlots:t._u([{key:"heading",fn:function(){return[i("seir-chart")]},proxy:!0}])},[i("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v(" SEIR Model "),i("git-hub",{attrs:{href:"https://github.com/HAR00N/MERS_modelling/tree/main/SEIR",title:"SEIR"}})],1),i("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1 mb-1"},[i("v-icon",{attrs:{color:"#616161"}},[t._v(" mdi-circle-medium ")]),t._v(" : Real data "),i("v-icon",{attrs:{color:"#3A416F"}},[t._v(" mdi-minus-thick ")]),t._v(" : Susceptible "),i("v-icon",{attrs:{color:"accent"}},[t._v(" mdi-minus-thick ")]),t._v(" : Exposed "),i("v-icon",{attrs:{color:"cyan"}},[t._v(" mdi-minus-thick ")]),t._v(" : Infected "),i("v-icon",{attrs:{color:"green"}},[t._v(" mdi-minus-thick ")]),t._v(" : Recovered ")],1),i("p",{staticClass:"mb-1 mt-0 mx-4",attrs:{elevation:"0"}},[t._v(" Real data : 실제 감염군 수 "),i("br"),t._v(" Susceptible (감염대상군) : 감염될 수 있으나 아직 감염되지 않은 개체의 수 "),i("br"),t._v(" Exposed (접촉군) : 이미 감염되었으나 아직 병을 전염시키지는 않는 단계에 있는 개체의 수 "),i("br"),t._v(" Infected (감염군) : 병을 전염시킬 수 있는 개체의 수 "),i("br"),t._v(" Recovered (회복군) : 병에서 회복한 개체의 수와 격리 중 사망한 개체의 수의 합 ")])])],1)],1),i("v-divider",{staticClass:"pb-4 align-center"}),i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("base-material-card",{attrs:{icon:"mdi-cube-outline",title:"Modelling",color:"grey darken-1"}},[i("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-3 mb-1"},[t._v(" S E I R 의 관계를 수학적으로 계산한 뒤 "),i("br"),t._v(" Matlab에 수식과 데이터를 입력하고 lsqcurvefit으로 최적화 "),i("br"),t._v(" chart.js 라이브러리를 이용하여 그래프를 구현 ")])])],1)],1)],1)],1)},o=[],s=i("735a"),a=i("95e1"),r=i("5ed0"),c={components:{SirChart:s["a"],SeirChart:a["a"],GitHub:r["a"]}},h=c,l=i("2877"),u=i("6544"),d=i.n(u),f=i("62ad"),v=i("a523"),p=i("ce7e"),m=i("132d"),g=i("0fd9"),b=Object(l["a"])(h,n,o,!1,null,null,null);e["default"]=b.exports;d()(b,{VCol:f["a"],VContainer:v["a"],VDivider:p["a"],VIcon:m["a"],VRow:g["a"]})},9734:function(t,e,i){},f573:function(t,e,i){"use strict";var n=i("5530"),o=(i("a9e3"),i("e25e"),i("d3b7"),i("21be")),s=i("fe6c"),a=i("4ad4"),r=i("75eb"),c=i("58df"),h=i("80d2"),l=Object(c["a"])(o["a"],Object(s["b"])(["top","right","bottom","left","absolute"]),a["a"],r["a"]);e["a"]=l.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),o=0;if(o+=i,(this.left||this.$vuetify.rtl&&!this.right)&&(o-=n-t.width),this.offsetX){var s=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));o+=this.left?-s:t.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(h["h"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(h["h"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,n=this.dimensions.activator,o=this.dimensions.content.height,s=t+o,a=i<s;return a&&this.offsetOverflow&&n.top>o?t=this.pageYOffset+(n.top-o):a&&!this.allowOverflow?t=i-o-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=a["a"].options.methods.genActivatorListeners.call(this),i=e.click;return i&&(e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(n["a"])({},this.dimensions.activator),content:Object(n["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}})}}]);
//# sourceMappingURL=chunk-458601c8.10c1122d.js.map