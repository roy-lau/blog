(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(t,i,e){"use strict";e.r(i);var a={props:{showSideBar:{type:Boolean,default:!0}},data:function(){return{asideWidth:316,items:[{title:"主页",icon:"home",color:"indigo",path:"/home"},{title:"归档",icon:"folder",color:"orange",path:"/files"},{title:"标签",icon:"loyalty",color:"brown",path:"/tags"},{title:"时间线",icon:"access_alarm",color:"green",path:"/timeline"}]}},methods:{onResize:function(){1920===window.innerWidth?this.asideWidth=316:1366===window.innerWidth?this.asideWidth=224:document.body.clientWidth>=512&&(this.asideWidth=0)},toPath:function(t){}},mounted:function(){this.onResize()}},o=(e(74),e(2)),s=Object(o.a)(a,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-navigation-drawer",{staticClass:"elevation-15 aside-cls",attrs:{app:""},model:{value:t.showSideBar,callback:function(i){t.showSideBar=i},expression:"showSideBar"}},[e("v-card-actions",{staticClass:"card-actions-bg"},[e("v-list-tile",{staticClass:"grow"},[e("v-list-tile-avatar",{attrs:{color:"white darken-3",size:"50"}},[e("v-img",{staticClass:"elevation-8",attrs:{src:t.$withBase("/imgs/avatar.svg"),alt:"avatar"}})],1),t._v(" "),e("v-list-tile-content",[e("v-btn",{attrs:{flat:"",color:"white",small:""}},[t._v("Roy Lau")])],1),t._v(" "),e("v-layout",{attrs:{"align-center":"","justify-end":""}},[e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[e("v-btn",t._g({attrs:{icon:"",tag:"a",href:"mailto:897379293@qq.com",traget:"_blink"}},a),[e("v-icon",[t._v("email")])],1)]}}])},[t._v(" "),e("span",{attrs:{color:"white"}},[t._v("897379293@qq.com")])])],1)],1)],1),t._v(" "),e("v-list",t._l(t.items,function(i){return e("v-list-tile",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:i.color+"--text"},expression:"{ class: `${item.color}--text` }"}],key:i.color,attrs:{to:i.path}},[e("v-list-tile-action",[e("v-icon",{attrs:{color:i.color}},[t._v(t._s(i.icon))])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",{class:i.color+"--text"},[t._v(t._s(i.title))])],1)],1)}),1)],1)},[],!1,null,null,null);i.default=s.exports},34:function(t,i,e){},74:function(t,i,e){"use strict";var a=e(34);e.n(a).a}}]);