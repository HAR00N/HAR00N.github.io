(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d98faf"],{"3a2f":function(t,e,i){"use strict";var a=i("ade3"),n=(i("a9e3"),i("e25e"),i("9734"),i("4ad4")),s=i("a9ad"),o=i("16b7"),r=i("b848"),l=i("f573"),c=i("80d2"),u=i("d9bd"),h=i("58df");e["a"]=Object(h["a"])(s["a"],o["a"],r["a"],l["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||a?s=n+e.width/2-i.width/2:(this.left||this.right)&&(s=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=a+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=a+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),!1===this.attach&&(n+=this.pageYOffset),"".concat(this.calcYOverflow(n),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(c["h"])(this.maxWidth),minWidth:Object(c["h"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(c["u"])(this,"activator",!0)&&Object(u["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===c["y"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(a["a"])(t,this.contentClass,!0),Object(a["a"])(t,"menuable__content__active",this.isActive),Object(a["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"6ca7":function(t,e,i){},"71a3":function(t,e,i){"use strict";var a=i("5530"),n=(i("ac1f"),i("5319"),i("c975"),i("4e82")),s=i("1c87"),o=i("7560"),r=i("80d2"),l=i("58df"),c=Object(l["a"])(s["a"],Object(n["a"])("tabsBar"),o["a"]);e["a"]=c.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-tab":!0},s["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href;if(null==t)return t;if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click:function(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle:function(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,s=i.data;return s.attrs=Object(a["a"])(Object(a["a"])({},s.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:this.disabled?-1:0}),s.on=Object(a["a"])(Object(a["a"])({},s.on),{},{keydown:function(t){t.keyCode===r["y"].enter&&e.click(t),e.$emit("keydown",t)}}),t(n,s,this.$slots["default"])}})},9734:function(t,e,i){},ac7c:function(t,e,i){"use strict";var a=i("15fd"),n=i("5530"),s=(i("d401"),i("0d03"),i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),o=i("c37a"),r=(i("277d"),i("45fc"),i("4de4"),i("5607")),l=i("2b0e"),c=l["a"].extend({name:"rippleable",directives:{ripple:r["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),u=i("8547"),h=i("58df");function d(t){t.preventDefault()}var p=Object(h["a"])(o["a"],c,u["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=o["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:d},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),v=["title"];e["a"]=p.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(a["a"])(t,v));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},c671:function(t,e,i){"use strict";var a=i("9d65"),n=i("4e82"),s=i("c3f0"),o=i("80d2"),r=i("58df"),l=Object(r["a"])(a["a"],Object(n["a"])("windowGroup","v-window-item","v-window")),c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:s["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots["default"]},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(o["h"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}});e["a"]=c.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=c.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},e78c:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"modeling",fluid:"",tag:"section"}},[i("v-row",[i("v-col",{attrs:{cols:"12",lg:"6"}},[i("base-material-chart-card",{attrs:{data:t.dailySalesChart.data,options:t.dailySalesChart.options,color:"success","hover-reveal":"",type:"Line"},scopedSlots:t._u([{key:"reveal-actions",fn:function(){return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({attrs:{color:"info",icon:""}},"v-btn",a,!1),n),[i("v-icon",{attrs:{color:"info"}},[t._v(" mdi-refresh ")])],1)]}}])},[i("span",[t._v("Refresh")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({attrs:{light:"",icon:""}},"v-btn",a,!1),n),[i("v-icon",[t._v("mdi-pencil")])],1)]}}])},[i("span",[t._v("Change Date")])])]},proxy:!0},{key:"actions",fn:function(){return[i("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),i("span",{staticClass:"caption grey--text font-weight-light"},[t._v("updated 4 minutes ago")])]},proxy:!0}])},[i("h4",{staticClass:"card-title font-weight-light mt-2 ml-2"},[t._v("Daily Sales")]),i("p",{staticClass:"d-inline-flex font-weight-light ml-2 mt-1"},[i("v-icon",{attrs:{color:"green",small:""}},[t._v(" mdi-arrow-up ")]),i("span",{staticClass:"green--text"},[t._v("55%")]),t._v("  increase in today's sales ")],1)])],1),i("v-col",{attrs:{cols:"12",lg:"6"}},[i("v-card",[i("v-card-title",{staticClass:"mb-4"},[i("h3",[t._v("Here will be matlab result Graph")])]),i("v-card-subtitle",[t._v(" MERS modeling ")]),i("v-card-text",[t._v(" Update is ongoing everyday ")])],1)],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("base-material-stats-card",{attrs:{color:"info",icon:"mdi-twitter",title:"Followers",value:"+245","sub-icon":"mdi-clock","sub-text":"Just Updated"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("base-material-stats-card",{attrs:{color:"primary",icon:"mdi-poll",title:"Website Visits",value:"75.521","sub-icon":"mdi-tag","sub-text":"Tracked from Google Analytics"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("base-material-stats-card",{attrs:{color:"success",icon:"mdi-store",title:"Revenue",value:"$ 34,245","sub-icon":"mdi-calendar","sub-text":"Last 24 Hours"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("base-material-stats-card",{attrs:{color:"orange",icon:"mdi-sofa",title:"Bookings",value:"184","sub-icon":"mdi-alert","sub-icon-color":"red","sub-text":"Get More Space..."}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"warning"},scopedSlots:t._u([{key:"heading",fn:function(){return[i("div",{staticClass:"display-2 font-weight-light"},[t._v("Employees Stats")]),i("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" New employees on 15th September, 2016 ")])]},proxy:!0}])},[i("v-card-text",[i("v-data-table",{attrs:{headers:t.headers,items:t.items}})],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("base-material-card",{staticClass:"px-5 py-3",scopedSlots:t._u([{key:"heading",fn:function(){return[i("v-tabs",{attrs:{"background-color":"transparent","slider-color":"white"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[i("span",{staticClass:"subheading font-weight-light mx-3",staticStyle:{"align-self":"center"}},[t._v("Tasks:")]),i("v-tab",{staticClass:"mr-3"},[i("v-icon",{staticClass:"mr-2"},[t._v(" mdi-bug ")]),t._v(" Bugs ")],1),i("v-tab",{staticClass:"mr-3"},[i("v-icon",{staticClass:"mr-2"},[t._v(" mdi-code-tags ")]),t._v(" Website ")],1),i("v-tab",[i("v-icon",{staticClass:"mr-2"},[t._v(" mdi-cloud ")]),t._v(" Server ")],1)],1)]},proxy:!0}])},[i("v-tabs-items",{staticClass:"transparent",model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(3,(function(e){return i("v-tab-item",{key:e},[i("v-card-text",[t._l(t.tasks[t.tabs],(function(e,a){return[i("v-row",{key:a,attrs:{align:"center"}},[i("v-col",{attrs:{cols:"1"}},[i("v-list-item-action",[i("v-checkbox",{attrs:{color:"secondary"},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"task.value"}})],1)],1),i("v-col",{attrs:{cols:"9"}},[i("div",{staticClass:"font-weight-light",domProps:{textContent:t._s(e.text)}})]),i("v-col",{staticClass:"text-right",attrs:{cols:"2"}},[i("v-icon",{staticClass:"mx-1"},[t._v(" mdi-pencil ")]),i("v-icon",{staticClass:"mx-1",attrs:{color:"error"}},[t._v(" mdi-close ")])],1)],1)]}))],2)],1)})),1)],1)],1)],1)],1)},n=[],s={name:"DashboardDashboard",data:function(){return{dailySalesChart:{data:{labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}}},dataCompletedTasksChart:{data:{labels:["12am","3pm","6pm","9pm","12pm","3am","6am","9am"],series:[[230,750,450,300,280,240,200,190]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}}},emailsSubscriptionChart:{data:{labels:["Ja","Fe","Ma","Ap","Mai","Ju","Jul","Au","Se","Oc","No","De"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},options:{axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]},headers:[{sortable:!1,text:"ID",value:"id"},{sortable:!1,text:"Name",value:"name"},{sortable:!1,text:"Salary",value:"salary",align:"right"},{sortable:!1,text:"Country",value:"country",align:"right"},{sortable:!1,text:"City",value:"city",align:"right"}],items:[{id:1,name:"Dakota Rice",country:"Niger",city:"Oud-Tunrhout",salary:"$35,738"},{id:2,name:"Minerva Hooper",country:"Curaçao",city:"Sinaai-Waas",salary:"$23,738"},{id:3,name:"Sage Rodriguez",country:"Netherlands",city:"Overland Park",salary:"$56,142"},{id:4,name:"Philip Chanley",country:"Korea, South",city:"Gloucester",salary:"$38,735"},{id:5,name:"Doris Greene",country:"Malawi",city:"Feldkirchen in Kārnten",salary:"$63,542"}],tabs:0,tasks:{0:[{text:'Sign contract for "What are conference organizers afraid of?"',value:!0},{text:"Lines From Great Russian Literature? Or E-mails From My Boss?",value:!1},{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!1},{text:"Create 4 Invisible User Experiences you Never Knew About",value:!0}],1:[{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!1}],2:[{text:"Lines From Great Russian Literature? Or E-mails From My Boss?",value:!1},{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!0}]},list:{0:!1,1:!1,2:!1}}},methods:{complete:function(t){this.list[t]=!this.list[t]}}},o=s,r=i("2877"),l=i("6544"),c=i.n(l),u=i("8336"),h=i("b0af"),d=i("99d9"),p=i("ac7c"),v=i("62ad"),f=i("a523"),m=i("8fea"),g=i("132d"),b=i("1800"),y=i("0fd9"),w=i("71a3"),C=i("c671"),x=i("fe57"),k=i("aac8"),S=i("3a2f"),T=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=T.exports;c()(T,{VBtn:u["a"],VCard:h["a"],VCardSubtitle:d["b"],VCardText:d["c"],VCardTitle:d["d"],VCheckbox:p["a"],VCol:v["a"],VContainer:f["a"],VDataTable:m["a"],VIcon:g["a"],VListItemAction:b["a"],VRow:y["a"],VTab:w["a"],VTabItem:C["a"],VTabs:x["a"],VTabsItems:k["a"],VTooltip:S["a"]})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-10d98faf.c8823667.js.map