(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e061690"],{"0fd9":function(e,t,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var i=n("ade3"),a=n("5530"),o=(n("4b85"),n("2b0e")),r=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function d(e,t){return c.reduce((function(n,i){return n[e+Object(s["D"])(i)]=t(),n}),{})}var u=function(e){return[].concat(l,["baseline","stretch"]).includes(e)},h=d("align",(function(){return{type:String,default:null,validator:u}})),f=function(e){return[].concat(l,["space-between","space-around"]).includes(e)},v=d("justify",(function(){return{type:String,default:null,validator:f}})),g=function(e){return[].concat(l,["space-between","space-around","stretch"]).includes(e)},m=d("alignContent",(function(){return{type:String,default:null,validator:g}})),p={align:Object.keys(h),justify:Object.keys(v),alignContent:Object.keys(m)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(e,t,n){var i=y[e];if(null!=n){if(t){var a=t.replace(e,"");i+="-".concat(a)}return i+="-".concat(n),i.toLowerCase()}}var w=new Map;t["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},h),{},{justify:{type:String,default:null,validator:f}},v),{},{alignContent:{type:String,default:null,validator:g}},m),render:function(e,t){var n=t.props,a=t.data,o=t.children,s="";for(var c in n)s+=String(n[c]);var l=w.get(s);return l||function(){var e,t;for(t in l=[],p)p[t].forEach((function(e){var i=n[e],a=b(t,e,i);a&&l.push(a)}));l.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(e,"align-".concat(n.align),n.align),Object(i["a"])(e,"justify-".concat(n.justify),n.justify),Object(i["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),w.set(s,l)}(),e(n.tag,Object(r["a"])(a,{staticClass:"row",class:l}),o)}})},"169a":function(e,t,n){"use strict";n("7db0"),n("caad"),n("45fc"),n("a9e3"),n("2532"),n("498a");var i=n("5530"),a=n("2909"),o=n("ade3"),r=(n("368e"),n("480e")),s=n("4ad4"),c=n("b848"),l=n("75eb"),d=(n("3c93"),n("a9ad")),u=n("7560"),h=n("f2e7"),f=n("58df"),v=Object(f["a"])(d["a"],u["a"],h["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),g=v,m=n("80d2"),p=n("2b0e"),y=p["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new g({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(m["t"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(m["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[m["w"].up,m["w"].pageup],n=[m["w"].down,m["w"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),n=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var i=this.$refs.dialog,a=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(a,i))||this.shouldScroll(i,n)}for(var o=0;o<t.length;o++){var r=t[o];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return this.shouldScroll(r,n)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(m["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),b=n("e4d3"),w=n("21be"),C=n("a293"),O=n("d9bd"),x=Object(f["a"])(s["a"],c["a"],l["a"],y,b["a"],w["a"],h["a"]);t["a"]=x.extend({name:"v-dialog",directives:{ClickOutside:C["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(o["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(e,"v-dialog--active",this.isActive),Object(o["a"])(e,"v-dialog--persistent",this.persistent),Object(o["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(e,"v-dialog--scrollable",this.scrollable),Object(o["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(O["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):y.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===m["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(a["a"])(n).find((function(e){return!e.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(r["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(i["a"])(Object(i["a"])({},e.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(e,t,n){},"3c93":function(e,t,n){},"62ad":function(e,t,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var i=n("ade3"),a=n("5530"),o=(n("4b85"),n("2b0e")),r=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),d=function(){return c.reduce((function(e,t){return e["offset"+Object(s["D"])(t)]={type:[String,Number],default:null},e}),{})}(),u=function(){return c.reduce((function(e,t){return e["order"+Object(s["D"])(t)]={type:[String,Number],default:null},e}),{})}(),h={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(u)};function f(e,t,n){var i=e;if(null!=n&&!1!==n){if(t){var a=t.replace(e,"");i+="-".concat(a)}return"col"!==e||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var v=new Map;t["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,a=t.data,o=t.children,s=(t.parent,"");for(var c in n)s+=String(n[c]);var l=v.get(s);return l||function(){var e,t;for(t in l=[],h)h[t].forEach((function(e){var i=n[e],a=f(t,e,i);a&&l.push(a)}));var a=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!a||!n.cols},Object(i["a"])(e,"col-".concat(n.cols),n.cols),Object(i["a"])(e,"offset-".concat(n.offset),n.offset),Object(i["a"])(e,"order-".concat(n.order),n.order),Object(i["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),v.set(s,l)}(),e(n.tag,Object(r["a"])(a,{class:l}),o)}})},dbae:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"justify-center"},[e._v(" ADMINISTRAR MIS CATEGORIAS ")]),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"búsqueda","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("v-card-text",[n("v-data-table",{ref:"categoriesTable",staticClass:"elevation-1",attrs:{headers:e.headers,items:e.displayCategories,"items-per-page":15,search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function(t){var i=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v("mdi-pencil")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v("mdi-delete")])]}},{key:"top",fn:function(){return[n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"#1bd698"}},"v-btn",a,!1),i),[e._v("Agregar Categoria")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"9",sm:"6",md:"20"}},[n("v-text-field",{attrs:{label:"Nombre"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#1bd698",text:""},on:{click:e.close}},[e._v("Cancelar")]),n("v-btn",{attrs:{color:"#1bd698",text:""},on:{click:e.save}},[e._v("Guardar")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Eliminar categoria")]),n("v-card-text",[n("p",[e._v("¿Está seguro de querer eliminar la categoria "),n("b",[e._v(e._s(e.editedItem.name)+"?")])])]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#1bd698",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),n("v-btn",{attrs:{color:"#1bd698",text:""},on:{click:e.deleteItemConfirm}},[e._v("Aceptar")])],1)],1)],1)]},proxy:!0}],null,!0)})],1)],1)},a=[],o=(n("c975"),n("d81d"),n("a434"),n("b0c0"),n("d4ec")),r=n("bee2"),s=n("6d46"),c=function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,[{key:"getAll",value:function(){return s["a"].get("/categories")}},{key:"get",value:function(e){return s["a"].get("/categories/".concat(e))}},{key:"create",value:function(e){return s["a"].post("/categories",e)}},{key:"update",value:function(e,t){return s["a"].put("/categories/".concat(e),t)}},{key:"delete",value:function(e){return s["a"].delete("/categories/".concat(e))}},{key:"getByRestaurantId",value:function(e){return s["a"].get("/restaurants/".concat(e,"/categories"))}}]),e}(),l=new c,d={name:"categories",data:function(){return{search:"",dialog:!1,dialogDelete:!1,headers:[{text:"Id",value:"id"},{text:"Nombre",value:"name"},{text:"Acciones",value:"actions",sortable:!1}],categories:[],displayCategories:[],editedIndex:-1,editedItem:{name:"",restaurantId:301},defaultItem:{name:"",restaurantId:301}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nueva Categoria":"Editar Categoria"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{retrieveCategories:function(){var e=this;l.getByRestaurantId(this.editedItem.restaurantId).then((function(t){e.categories=t.data,e.displayCategories=t.data.map(e.getDisplayCategory)})).catch((function(e){console.log(e)}))},getDisplayCategory:function(e){return{id:e.id,name:e.name}},refreshList:function(){this.retrieveCategories()},removeAllCategories:function(){var e=this;l.deleteAll().then((function(){e.refreshList()})).catch((function(e){alert("The Backend does not support this operation."),console.log(e)}))},editItem:function(e){this.editedIndex=this.displayCategories.indexOf(e),console.log(e),this.editedItem=this.categories[this.editedIndex],this.dialog=!0},deleteItem:function(e){this.editedIndex=this.displayCategories.indexOf(e),this.editedItem=Object.assign({},this.categories[this.editedIndex]),this.dialogDelete=!0},deleteItemConfirm:function(){this.deleteCategory(this.editedItem.id),this.categories.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;this.editedIndex>-1?(this.categories[this.editedIndex]=this.editedItem,this.displayCategories[this.editedIndex]=this.getDisplayCategory(this.categories[this.editedIndex]),l.update(this.editedItem.id,this.editedItem).then((function(){e.refreshList()})).catch((function(e){console.log(e)}))):l.create(this.editedItem).then((function(t){var n=t.data;e.categories.push(n),e.displayCategories.push(e.getDisplayCategory(n))})).catch((function(e){console.log(e)})),this.close()},deleteCategory:function(e){var t=this;l.delete(e).then((function(){t.refreshList()})).catch((function(e){console.log(e)}))}},mounted:function(){this.retrieveCategories()}},u=d,h=n("2877"),f=n("6544"),v=n.n(f),g=n("8336"),m=n("b0af"),p=n("99d9"),y=n("62ad"),b=n("a523"),w=n("8fea"),C=n("169a"),O=n("132d"),x=n("0fd9"),I=n("2fa4"),k=n("8654"),j=Object(h["a"])(u,i,a,!1,null,"35c0d8dc",null);t["default"]=j.exports;v()(j,{VBtn:g["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:y["a"],VContainer:b["a"],VDataTable:w["a"],VDialog:C["a"],VIcon:O["a"],VRow:x["a"],VSpacer:I["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-1e061690.58368c01.js.map