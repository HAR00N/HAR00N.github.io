(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f43bcea2"],{"0160":function(t,s,e){},"1e06":function(t,s,e){"use strict";var o=e("5530"),c=(e("c96a"),e("26e9"),e("58df")),i=e("9d26"),a=e("7560"),r=e("a9ad"),n=Object(c["a"])(r["a"],a["a"]);s["a"]=n.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots["default"])},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(i["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(o["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var s=[this.genBody(),this.genDivider()];return this.$slots.opposite&&s.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(o["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},s)}})},"26f9":function(t,s,e){"use strict";e("de5a")},"46e9":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-container",{staticClass:"pb-6 pt-3",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12",md:"8"}},[e("base-material-card",{scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"display-2 font-weight-medium black--text"},[t._v(" Timeline ")]),e("div",{staticClass:"subtitle-1 font-weight-light white--text pl-1"},[t._v(" Haroon's timeline ")])]},proxy:!0}])},[e("v-card",{staticClass:"card-shadow mb-30 pa-4 pt-0 mt-0",attrs:{elevation:"0"}},[e("v-timeline",{staticClass:"timeline-line-color elevation-0",attrs:{dense:"","align-top":""}},t._l(t.timelines,(function(s,o){return e("v-timeline-item",{key:o,attrs:{color:"grey"},scopedSlots:t._u([{key:"icon",fn:function(){return[s.icon?e("v-avatar",{attrs:{size:"40"}},[e("v-icon",{class:"text-gradient text-"+s.btn,attrs:{size:"22",color:"#ffffff"}},[t._v(t._s(s.icon))])],1):t._e(),s.icon?t._e():e("v-avatar",{attrs:{size:"36"}},[e("v-avatar",{attrs:{size:"22"}},[e("img",{staticClass:"color-default",attrs:{src:s.src}})])],1)]},proxy:!0}],null,!0)},[[e("h3",{class:"font-weight-light black--text"},[t._v(" "+t._s(s.date)+" ")])],e("div",{staticClass:"pb-0 pt-0 mr-6"},[e("h3",{class:"font-weight-normal mb-0 black--text"},[t._v(" "+t._s(s.title)+" ")]),e("div",{staticClass:"mb-4 timeline-subtitle"},[t._v(" "+t._s(s.subtitle)+" ")]),e("div",[t._v(" "+t._s(s.content)+" ")])]),e("div",{staticClass:"mt-2"},t._l(s.badges,(function(o){return e("v-btn",{key:o.text,staticClass:"border-radius-sm text-xxs text-white me-1 shadow-none font-weight-bold px-2 py-1 badge-font-size",attrs:{"v-if":s.badges,elevation:"0",small:"",ripple:!1,color:o.color,height:"21"}},[e("div",{staticClass:"mr-1"},[o.icon?e("v-icon",[t._v(" "+t._s(o.icon)+" ")]):t._e(),o.icon?t._e():e("img",{class:"color-"+o.iconColor+" pt-1",attrs:{src:o.src,height:"17"}})],1),e("div",{class:o.iconColor+"--text font-weight-normal"},[t._v(" "+t._s(o.text)+" ")])])})),1)],2)})),1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-card",{staticClass:"sticky",attrs:{elevation:"0",color:"transparent"}},[e("profile-card")],1)],1),e("top-button")],1)],1)],1)},c=[],i=e("de23"),a=e("6b69"),r=e("ef66"),n={components:{TopButton:i["a"],ProfileCard:a["a"]},mounted:function(){this.timelines=r},data:function(){return{timelines:[{title:"",date:"",color:"",icon:"",badges:[{text:"",iconColor:"",color:"",src:""}]}]}}},l=n,d=(e("96fc"),e("2877")),v=e("6544"),u=e.n(v),m=e("8212"),g=e("8336"),f=e("b0af"),C=e("62ad"),h=e("a523"),p=e("132d"),b=e("0fd9"),x=e("8414"),_=e("1e06"),y=Object(d["a"])(l,o,c,!1,null,null,null);s["default"]=y.exports;u()(y,{VAvatar:m["a"],VBtn:g["a"],VCard:f["a"],VCol:C["a"],VContainer:h["a"],VIcon:p["a"],VRow:b["a"],VTimeline:x["a"],VTimelineItem:_["a"]})},"4bc2":function(t,s,e){},"6b69":function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-card",{attrs:{elevation:"0",rounded:"lg"}},[e("base-material-card",{staticClass:"v-card-profile",attrs:{elevation:"0",avatar:"src/assets/mycharacter/lkh.jpg"}},[e("v-card-text",{staticClass:"text-center"},[e("h6",{staticClass:"display-1 mb-1 grey--text"},[t._v("Fullstack Dev")]),e("h4",{staticClass:"display-2 font-weight-bold mb-3 black--text"},[t._v("이 규 헌")]),e("p",{staticClass:"font-weight-light grey--text profile-box"},[t._v(" 프로그래밍과 수학을 사랑하는 신입 개발자입니다. "),e("br"),t._v(" 운동과 커피, 음악을 좋아하며 "),e("br"),t._v(" 논리적으로 로직을 구성하는 것을 좋아합니다. ")])])],1)],1)},c=[],i={},a=i,r=(e("26f9"),e("2877")),n=e("6544"),l=e.n(n),d=e("b0af"),v=e("99d9"),u=Object(r["a"])(a,o,c,!1,null,null,null);s["a"]=u.exports;l()(u,{VCard:d["a"],VCardText:v["c"]})},8414:function(t,s,e){"use strict";var o=e("5530"),c=(e("26e9"),e("0160"),e("58df")),i=e("7560");s["a"]=Object(c["a"])(i["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(o["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots["default"])}})},"96fc":function(t,s,e){"use strict";e("4bc2")},de5a:function(t,s,e){},ef66:function(t){t.exports=JSON.parse('[{"title":"대학생 경력 및 비교과 관리 프로그램 유지보수","subtitle":"담당대학 - 충북대학교, 경동대학교, 경상국립대학교, 한밭대학교, 목원대학교, 삼육대학교","content":"데이터 및 기능오류 수정, 상용 서버 관리(CentOs), 추가 기능 개발 및 수정, 실 사용 고객과 소통이 주요 업무였습니다. 현재까지(NOV 2022) 168건의 요청을 처리하였습니다.","date":"AUG 2022","color":"amber","icon":"mdi-cog","badges":[{"text":"Spring","iconColor":"default","color":"#6DB33F","src":"src/assets/icon/spring.svg"},{"text":"java","iconColor":"default","color":"#007396","src":"src/assets/icon/java.svg"},{"text":"Maven","iconColor":"default","color":"#C71A36","src":"src/assets/icon/maven.svg"},{"text":"Oracle","iconColor":"default","color":"#F80000","src":"src/assets/icon/oracle.svg"},{"text":"Jquery","iconColor":"default","color":"#0769AD","src":"src/assets/icon/jquery.svg"},{"text":"Tomcat","iconColor":"black","color":"#F8DC75","src":"src/assets/icon/tomcat.svg"},{"text":"SVN","iconColor":"default","color":"#809CC9","src":"src/assets/icon/svn.svg"}]},{"title":"서울 시립 청소년 미디어센터 사이트 Youthnavi 유지보수","subtitle":"https://youthnavi.com/","content":"관리자 페이지 및 사용자 페이지의 유지보수를 맡았습니다. 특히 관리자 페이지의 상세검색조건 오류 수정과 출력 값 오류 수정이 주요 업무였으며, 관리자와 사용자가 연결된 경우는 동시 적용하였습니다. 기존 개발일정에 있는 것이 아닌 고객에게서 오는 수정 요청사항들을 맡아서 처리하기도 했습니다. 현재까지 (NOV 2022) 150건의 요청을 처리하였습니다.","date":"JUN 2022","color":"amber","icon":"mdi-cog","badges":[{"text":"Spring","iconColor":"default","color":"#6DB33F","src":"src/assets/icon/spring.svg"},{"text":"java","iconColor":"default","color":"#007396","src":"src/assets/icon/java.svg"},{"text":"Maven","iconColor":"default","color":"#C71A36","src":"src/assets/icon/maven.svg"},{"text":"Vue.js","iconColor":"default","color":"#4FC08D","src":"src/assets/icon/vuejs.svg"},{"text":"Tomcat","iconColor":"black","color":"#F8DC75","src":"src/assets/icon/tomcat.svg"},{"text":"MariaDB","iconColor":"default","color":"#1F305F","src":"src/assets/icon/mariadb.svg"},{"text":"SVN","iconColor":"default","color":"#809CC9","src":"src/assets/icon/svn.svg"}]},{"title":"서울 시립 청소년 미디어센터 사이트 Youthnavi 기능개발","subtitle":"https://youthnavi.com/","content":"룰렛 이벤트 경품 시스템, 관리자의 게시물 작성 시 템플릿 적용, 검색 관련 페이지 히스토리 백, ClipReport 인증서 프로그램 연동 및 인증서 제작, 팝업 n일간 다시보지 않기 기능 추가","date":"MAY 2022","color":"amber","icon":"mdi-hammer-wrench","badges":[{"text":"Spring","iconColor":"default","color":"#6DB33F","src":"src/assets/icon/spring.svg"},{"text":"java","iconColor":"default","color":"#007396","src":"src/assets/icon/java.svg"},{"text":"Maven","iconColor":"default","color":"#C71A36","src":"src/assets/icon/maven.svg"},{"text":"Vue.js","iconColor":"default","color":"#4FC08D","src":"src/assets/icon/vuejs.svg"},{"text":"Tomcat","iconColor":"black","color":"#F8DC75","src":"src/assets/icon/tomcat.svg"},{"text":"MariaDB","iconColor":"default","color":"#1F305F","src":"src/assets/icon/mariadb.svg"},{"text":"SVN","iconColor":"default","color":"#809CC9","src":"src/assets/icon/svn.svg"}]},{"title":"Portfolio page 개발","content":"1인 프로젝트로 진행하였고, Vuetify.js의 무료 template을 이용해 이 페이지를 만들었습니다. GitHub.io의 특성 상 정적 데이터만 사용 가능하여, 프록시 관련된 기능은 없습니다. css와 상황에 따라 scss, sass를 이용하여 필요한 것들을 세팅했습니다","date":"MAY 2022","color":"cyan","icon":"mdi-hammer-wrench","badges":[{"text":"Vue.js","iconColor":"default","color":"#4FC08D","src":"src/assets/icon/vuejs.svg"},{"text":"Vuetify.js","iconColor":"default","color":"#1867C0","src":"src/assets/icon/vuetify.svg"},{"text":"JS ES6","iconColor":"black","color":"#F7DF1E","src":"src/assets/icon/javascript.svg"},{"text":"Git","iconColor":"default","color":"#F05032","src":"src/assets/icon/git.svg"}]},{"title":"공공 데이터 포털 Api 활용 실습","subtitle":"참고한 회사 프로젝트 사이트 : https://youthnavi.com/customer/realinfo?tab=3","content":"공공 데이터 포털 Data.Go.Kr 에서 질병관리청 코로나19 국내발생현황 조회 Key를 받아 활용하였습니다. Java가 아닌 Go와 Kotlin(진행중)으로 제작하였으며, MySQL에 저장하고 DB ide인 DBeaver를 이용해 JSON으로 Export하여 원하는 값을 사용했습니다.","date":"APR 2022","color":"amber","icon":"mdi-application-brackets-outline","badges":[{"text":"Spring Boot","iconColor":"default","color":"#6DB33F","src":"src/assets/icon/springboot.svg"},{"text":"Kotlin","iconColor":"default","color":"#7F52FF","src":"src/assets/icon/kotlin.svg"},{"text":"Gradle","iconColor":"default","color":"#02303A","src":"src/assets/icon/gradle.svg"},{"text":"Go","iconColor":"default","color":"#00ADD8","src":"src/assets/icon/go.svg"},{"text":"MySQL","iconColor":"default","color":"#4479A1","src":"src/assets/icon/mysql.svg"},{"text":"Git","iconColor":"default","color":"#F05032","src":"src/assets/icon/git.svg"}]},{"title":"공공기업 직원 역량관리 홈페이지 관리자 페이지 개발","subtitle":"prototype : http://146.56.145.249:4000/","content":"실무 첫 프로젝트로써 Java-Egovframework, Vue.js-Vuetify.js, MySQL를 이용하여 개발하였고, Docker를 이용해 배포하였습니다. 상세검색 컴포넌트 개발, Drawer, Appbar 수정 등에 참여하였고, 서버에 Docker command를 입력을 맡았습니다. 또한 회사 내에서 SVN만 사용했지만, 이 프로젝트만 Git을 이용하여 형상관리를 했습니다.","date":"FEB 2022","color":"amber","icon":"mdi-file-document","badges":[{"text":"Spring","iconColor":"default","color":"#6DB33F","src":"src/assets/icon/spring.svg"},{"text":"java","iconColor":"default","color":"#007396","src":"src/assets/icon/java.svg"},{"text":"Maven","iconColor":"default","color":"#C71A36","src":"src/assets/icon/maven.svg"},{"text":"Docker","iconColor":"default","color":"#2496ED","src":"src/assets/icon/docker.svg"},{"text":"MySQL","iconColor":"default","color":"#4479A1","src":"src/assets/icon/mysql.svg"},{"text":"Vue.js","iconColor":"default","color":"#4FC08D","src":"src/assets/icon/vuejs.svg"},{"text":"Vuetify.js","iconColor":"default","color":"#1867C0","src":"src/assets/icon/vuetify.svg"},{"text":"JS ES6","iconColor":"black","color":"#F7DF1E","src":"src/assets/icon/javascript.svg"},{"text":"Git","iconColor":"default","color":"#F05032","src":"src/assets/icon/git.svg"}]},{"title":"국립 대학교 사이트 고도화","content":"국립대학교 학생 역량관리 홈페이지의 관리자 페이지의 오류를 테스트하고, 수학과의 특성을 살려 직무 역량 테스트의 결과 값 로직을 검증하고 수정했습니다.","date":"FEB 2022","color":"orange","icon":"mdi-auto-fix","badges":[{"text":"Spring","iconColor":"default","color":"#6DB33F","src":"src/assets/icon/spring.svg"},{"text":"java","iconColor":"default","color":"#007396","src":"src/assets/icon/java.svg"},{"text":"Maven","iconColor":"default","color":"#C71A36","src":"src/assets/icon/maven.svg"},{"text":"Tomcat","iconColor":"black","color":"#F8DC75","src":"src/assets/icon/tomcat.svg"},{"text":"Oracle","iconColor":"default","color":"#F80000","src":"src/assets/icon/oracle.svg"},{"text":"Jquery","iconColor":"default","color":"#0769AD","src":"src/assets/icon/jquery.svg"},{"text":"SVN","iconColor":"default","color":"#809CC9","src":"src/assets/icon/svn.svg"}]},{"title":"솔루션/SI 기업 입사","content":"대학생들의 역량관리 사이트 제작을 주요 사업으로하는 기업에 입사하였습니다.","date":"FEB 2022","color":"green","icon":"mdi-tie","badges":[{"text":"java","iconColor":"default","color":"#007396","src":"src/assets/icon/java.svg"},{"text":"matlab","iconColor":"default","color":"#FF7F00","src":"src/assets/icon/matlab.svg"},{"text":"Git","iconColor":"default","color":"#F05032","src":"src/assets/icon/git.svg"}]},{"title":"모바일게임 점수 예측 모델링","content":"게임 내 길드전 컨텐츠의 점수 환산방식을 확인하기 위해 모델링을 진행했습니다. 30명에게 일주일간 데이터를 받아 정리하여, Matlab을 이용하여 모델링 및 최적화를 하였고 오차범위 0.1% 이내의 식을 예측할 수 있었습니다. 이에따라 서버 1위를 하며 좋은 결과를 만들었습니다.","date":"SEP 2019","color":"pink","icon":"mdi-chart-line","badges":[{"text":"matlab","iconColor":"default","color":"#FF7F00","src":"src/assets/icon/matlab.svg"},{"text":"excel","iconColor":"default","color":"#217346","src":"src/assets/icon/excel.svg"}]},{"title":"수학 프로그래밍","content":"수학과에서 Matlab 수업을 들으며 프로그래밍을 처음 접했습니다. 한국산업응용수학회 회장이신 교수님이 질병 모델링 전문가셔서 MERS 감염 데이터를 가지고 SIR, SEIR 모델을 중점적으로 학습하였고, 심장판막 데이터와 용수철 움직임 등 여러 분야를 수학으로 접목시키는 프로그래밍을 하였습니다.","date":"MAR 2017","color":"amber","src":"src/assets/icon/matlab.svg","badges":[{"text":"matlab","iconColor":"default","color":"#FF7F00","src":"src/assets/icon/matlab.svg"}]},{"title":"편입학","content":"1년간의 준비기간 끝에 편입학에 성공하였습니다. 편입공부를 하며 대학 수학을 다시 한 번 공부하였으며, 특히 영어의 논리 과목을 들으며 수학적 논리가 아닌 언어적 논리에 대해 많이 공부하였습니다.","date":"MAR 2017","color":"orange","icon":"mdi-pencil"},{"title":"응용수학과 학술제 최우수상","content":"응용수학과 컴퓨터프로그래밍 동아리에서 Cloud System and Security 라는 제목으로 학과 학술제 최우수상을 수상하였습니다. 프로그래밍에 직접 참여하진 않았지만, ppt를 준비하며 클라우드 시스템 관련 지식에 대해 학습하는 기회가 되었습니다.","date":"SEP 2014","color":"cyan","icon":"mdi-license","badges":[{"text":"ppt","iconColor":"default","color":"#B7472A","src":"src/assets/icon/ppt.svg"}]}]')}}]);
//# sourceMappingURL=chunk-f43bcea2.7a73fd94.js.map