(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21bd5289"],{"0bf1":function(t,n,e){},"0fd9":function(t,n,e){"use strict";e("99af"),e("4160"),e("caad"),e("13d5"),e("4ec9"),e("b64b"),e("d3b7"),e("ac1f"),e("2532"),e("3ca3"),e("5319"),e("159b"),e("ddb0");var a=e("ade3"),c=e("5530"),r=(e("4b85"),e("2b0e")),o=e("d9f7"),i=e("80d2"),l=["sm","md","lg","xl"],s=["start","end","center"];function u(t,n){return l.reduce((function(e,a){return e[t+Object(i["D"])(a)]=n(),e}),{})}var d=function(t){return[].concat(s,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(s,["space-between","space-around"]).includes(t)},b=u("justify",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(s,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:v}})),j={align:Object.keys(f),justify:Object.keys(b),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,n,e){var a=m[t];if(null!=e){if(n){var c=n.replace(t,"");a+="-".concat(c)}return a+="-".concat(e),a.toLowerCase()}}var w=new Map;n["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(c["a"])(Object(c["a"])(Object(c["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},b),{},{alignContent:{type:String,default:null,validator:v}},g),render:function(t,n){var e=n.props,c=n.data,r=n.children,i="";for(var l in e)i+=String(e[l]);var s=w.get(i);return s||function(){var t,n;for(n in s=[],j)j[n].forEach((function(t){var a=e[t],c=y(n,t,a);c&&s.push(c)}));s.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(a["a"])(t,"align-".concat(e.align),e.align),Object(a["a"])(t,"justify-".concat(e.justify),e.justify),Object(a["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),w.set(i,s)}(),t(e.tag,Object(o["a"])(c,{staticClass:"row",class:s}),r)}})},2416:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",[e("v-container",{staticClass:"grey lighten-5"},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",[e("v-col",{attrs:{cols:"4"}}),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{src:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",width:"100%"}})],1),e("v-col",{attrs:{cols:"4"}})],1)],1),e("v-col",{attrs:{cols:"6"}},[e("v-card",{on:{click:t.navigateToPublications}},[e("v-row",[e("v-col",{attrs:{cols:"2"}}),e("v-col",{attrs:{cols:"8"}},[e("v-img",{staticClass:"rounded-img",attrs:{src:"https://neilpatel.com/wp-content/uploads/2016/05/writingposts.jpg",width:"100%"}})],1),e("v-col",{attrs:{cols:"2"}})],1),e("v-card-title",{staticClass:"justify-center"},[t._v(" Publicaciones ")])],1)],1),e("v-col",{attrs:{cols:"6"}},[e("v-card",{on:{click:t.navigateToAppointments}},[e("v-row",[e("v-col",{attrs:{cols:"2"}}),e("v-col",{attrs:{cols:"8"}},[e("v-img",{staticClass:"rounded-img",attrs:{src:"https://www.benchillmedicalpractice.co.uk/website/P84029/files/appt.jpeg",width:"100%"}})],1),e("v-col",{attrs:{cols:"2"}})],1),e("v-card-title",{staticClass:"justify-center"},[t._v(" Citas ")])],1)],1)],1)],1)],1)},c=[],r={name:"home-consultant",methods:{select:function(){},navigateToPublications:function(){this.$router.push({name:"publications"})},navigateToAppointments:function(){this.$router.push({name:"appointments"})}}},o=r,i=(e("8242"),e("2877")),l=e("6544"),s=e.n(l),u=e("b0af"),d=e("99d9"),f=e("62ad"),p=e("a523"),b=e("adda"),v=e("0fd9"),g=Object(i["a"])(o,a,c,!1,null,"038dec60",null);n["default"]=g.exports;s()(g,{VCard:u["a"],VCardTitle:d["d"],VCol:f["a"],VContainer:p["a"],VImg:b["a"],VRow:v["a"]})},"62ad":function(t,n,e){"use strict";e("4160"),e("caad"),e("13d5"),e("45fc"),e("4ec9"),e("a9e3"),e("b64b"),e("d3b7"),e("ac1f"),e("3ca3"),e("5319"),e("2ca0"),e("159b"),e("ddb0");var a=e("ade3"),c=e("5530"),r=(e("4b85"),e("2b0e")),o=e("d9f7"),i=e("80d2"),l=["sm","md","lg","xl"],s=function(){return l.reduce((function(t,n){return t[n]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return l.reduce((function(t,n){return t["offset"+Object(i["D"])(n)]={type:[String,Number],default:null},t}),{})}(),d=function(){return l.reduce((function(t,n){return t["order"+Object(i["D"])(n)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(s),offset:Object.keys(u),order:Object.keys(d)};function p(t,n,e){var a=t;if(null!=e&&!1!==e){if(n){var c=n.replace(t,"");a+="-".concat(c)}return"col"!==t||""!==e&&!0!==e?(a+="-".concat(e),a.toLowerCase()):a.toLowerCase()}}var b=new Map;n["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({cols:{type:[Boolean,String,Number],default:!1}},s),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,n){var e=n.props,c=n.data,r=n.children,i=(n.parent,"");for(var l in e)i+=String(e[l]);var s=b.get(i);return s||function(){var t,n;for(n in s=[],f)f[n].forEach((function(t){var a=e[t],c=p(n,t,a);c&&s.push(c)}));var c=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!c||!e.cols},Object(a["a"])(t,"col-".concat(e.cols),e.cols),Object(a["a"])(t,"offset-".concat(e.offset),e.offset),Object(a["a"])(t,"order-".concat(e.order),e.order),Object(a["a"])(t,"align-self-".concat(e.alignSelf),e.alignSelf),t)),b.set(i,s)}(),t(e.tag,Object(o["a"])(c,{class:s}),r)}})},8242:function(t,n,e){"use strict";e("0bf1")}}]);
//# sourceMappingURL=chunk-21bd5289.20a1c755.js.map