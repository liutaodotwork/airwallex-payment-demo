webpackJsonp([1],{"4PgM":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW");var a={name:"App",data:()=>({intentID:"int_nvuCh66cznTII2pShzAW9m4Zj5j",client_secret:"eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1YTE3Njc5My01ODRmLTQ3MDktYTA0Ni00YzY0ZTI4OTM2OTgiLCJzdWIiOiJ1c2VyMTIzNCIsImlhdCI6MTU5Nzc0MzU3OSwiZXhwIjoxNTk4MTAzNTc5LCJhY2NvdW50X2lkIjoiMzQ5ZmFhZDktNjNkYS00ODcxLTlhNWEtYjJhMjE2NWI1M2I2IiwiZGF0YV9jZW50ZXJfcmVnaW9uIjoiSEsifQ.gkqTYJ-UjIhVN9GItS5Zn5cnXxlruzSahFjetr1UPBs"}),methods:{getIntentId:function(){var t=this.intentID;alert(t)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._v("\n  Intent ID: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.intentID,expression:"intentID"}],attrs:{type:"text",name:"intentID"},domProps:{value:t.intentID},on:{input:function(e){e.target.composing||(t.intentID=e.target.value)}}}),t._v(" "),n("button",{attrs:{id:"test"},on:{click:function(e){return t.getIntentId()}}},[t._v("submit")]),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")(a,r,!1,function(t){n("4PgM")},null,null).exports,s=n("/ocq"),l=n("ql/l");Object(l.d)({env:"staging"});const o=async()=>{await Object(l.e)({env:"staging",id:"int_dnjsKRbQzkq981QD7z74AGY5tiI",client_secret:"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTk0NjUwMjQsImV4cCI6MTU5OTQ2ODYyNCwiYWNjb3VudF9pZCI6IjM0OWZhYWQ5LTYzZGEtNDg3MS05YTVhLWIyYTIxNjViNTNiNiIsImRhdGFfY2VudGVyX3JlZ2lvbiI6IlVLIiwiaW50ZW50X2lkIjoiaW50X2RuanNLUmJRemtxOTgxUUQ3ejc0QUdZNXRpSSJ9.wIjljTBGpbt1TRsQOKtOjwJlhKcLNE_NscPaQ1Ws5fk",component:"default",autoCapture:!0,successUrl:"https://www.success-callback-page.com",failUrl:"https://www.fail-callback-page.com",withBilling:!0,theme:{variant:"bootstrap",src:"https://path-to-your-font-file",family:"AxLLCircular",weight:"500",popupWidth:418,popupHeight:549}})};var d={name:"Hpp",data:()=>({msg:"Airwallex checkout integration",desc:"Option #1: Hosted payment page (HPP) integration",redirectHpp:o})},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hpp"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v(t._s(t.desc))]),t._v(" "),n("button",{attrs:{id:"hpp"},on:{click:function(e){return t.redirectHpp()}}},[t._v("Redirect to HPP")])])},staticRenderFns:[]},I=n("VU/8")(d,u,!1,null,null,null).exports;Object(l.d)({env:"staging",origin:window.location.origin}).then(()=>{Object(l.b)("dropIn",{intent:{id:"int_tRco7DKfz5V3Qhkiaz3mENDut2u",client_secret:"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTk0NzA5MTksImV4cCI6MTU5OTQ3NDUxOSwiYWNjb3VudF9pZCI6IjM0OWZhYWQ5LTYzZGEtNDg3MS05YTVhLWIyYTIxNjViNTNiNiIsImRhdGFfY2VudGVyX3JlZ2lvbiI6IlVLIiwiaW50ZW50X2lkIjoiaW50X3RSY283REtmejVWM1Foa2lhejNtRU5EdXQydSJ9.sISlwcZn0iEoF7PqH6o_onxxlmB15QzhnRJfhG0Tl8Y"},component:"default",autoCapture:!0,withBilling:!0}).mount("dropIn")});var h={name:"DropIn",data:()=>({msg:"Airwallex checkout integration",desc:"Option #2: DropIn integration"})},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropIn"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v(t._s(t.desc))]),t._v(" "),n("div",{attrs:{id:"dropIn"}})])},staticRenderFns:[]},m=n("VU/8")(h,p,!1,null,null,null).exports;Object(l.d)({env:"staging",origin:window.location.origin}).then(()=>{Object(l.b)("fullFeaturedCard",{intent:{id:"int_4FkslUe0zrxVGm40CzIYwx8Mosh",client_secret:"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTk0NzIwMDEsImV4cCI6MTU5OTQ3NTYwMSwiYWNjb3VudF9pZCI6IjM0OWZhYWQ5LTYzZGEtNDg3MS05YTVhLWIyYTIxNjViNTNiNiIsImRhdGFfY2VudGVyX3JlZ2lvbiI6IlVLIiwiaW50ZW50X2lkIjoiaW50XzRGa3NsVWUwenJ4VkdtNDBDeklZd3g4TW9zaCJ9.cpM2hbhcFTubk4gqsXFUYB_FerIvjXjMcZGWDVbic98"},component:"default",autoCapture:!1,withBilling:!0}).mount("fullFeaturedCard")});var v={name:"Card",data:()=>({msg:"Airwallex checkout integration",desc:"Option #3: Card integration"})},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v(t._s(t.desc))]),t._v(" "),n("div",{attrs:{id:"fullFeaturedCard"}})])},staticRenderFns:[]},g=n("VU/8")(v,_,!1,null,null,null).exports;Object(l.d)({env:"staging",origin:window.location.origin}).then(()=>{Object(l.b)("cardNumber").mount("cardNumber"),Object(l.b)("cvc").mount("cvc"),Object(l.b)("expiry").mount("expiry")});const N=async()=>{try{const t=Object(l.c)("cardNumber"),e=await Object(l.a)({element:t,id:"int_mTcHQ9tnzgtsyeD5VzjmVMvFX3C",client_secret:"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTk0ODU5NTcsImV4cCI6MTU5OTQ4OTU1NywiYWNjb3VudF9pZCI6IjM0OWZhYWQ5LTYzZGEtNDg3MS05YTVhLWIyYTIxNjViNTNiNiIsImRhdGFfY2VudGVyX3JlZ2lvbiI6IlVLIiwiaW50ZW50X2lkIjoiaW50X21UY0hROXRuemd0c3llRDVWemptVk12RlgzQyJ9.BY2ZUasLMCsP7ZzOGSU0y6-D-D8ZL_QQ-QwgQ426Iew",payment_method_options:{card:{auto_capture:!0}}});console.log(`confirm success with ${JSON.stringify(e)}`)}catch(t){console.log(t)}};var O={name:"CardEle",data:()=>({msg:"Airwallex checkout integration",desc:"Option #4: Card elements integration",triggerConfirm:N})},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cardEle"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v(t._s(t.desc))]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("button",{attrs:{id:"cardele"},on:{click:function(e){return t.triggerConfirm()}}},[t._v("Confirm")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n    Card number\n    "),e("div",{attrs:{id:"cardNumber"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n    Expiry\n    "),e("div",{attrs:{id:"expiry"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n    Cvc\n    "),e("div",{attrs:{id:"cvc"}})])}]},T=n("VU/8")(O,j,!1,null,null,null).exports;Object(l.d)({env:"staging",origin:window.location.origin}).then(()=>{Object(l.b)("wechat",{intent:{id:"int_hHqRwWqPzdUfb1jK1zvXr5fAUED",client_secret:"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTk0ODQ2MTYsImV4cCI6MTU5OTQ4ODIxNiwiYWNjb3VudF9pZCI6IjM0OWZhYWQ5LTYzZGEtNDg3MS05YTVhLWIyYTIxNjViNTNiNiIsImRhdGFfY2VudGVyX3JlZ2lvbiI6IlVLIiwiaW50ZW50X2lkIjoiaW50X2hIcVJ3V3FQemRVZmIxaksxenZYcjVmQVVFRCJ9.cfaknIuwRSirnaglshZlplKOxTin2TmoW0hdbBkSDd4"}}).mount("wechat"),window.addEventListener("onSuccess",t=>{console.log(JSON.stringify(t.detail)),alert(JSON.stringify(t.detail))})});var w={name:"WechatEle",data:()=>({msg:"Airwallex checkout integration",desc:"Option #5: Wechat elements integrationn"})},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wechatEle"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v(t._s(t.desc))]),t._v(" "),n("div",{attrs:{id:"wechat"}})])},staticRenderFns:[]},b=n("VU/8")(w,V,!1,null,null,null).exports;i.a.use(s.a);var f=new s.a({routes:[{path:"/hpp",name:"Hpp",component:I},{path:"/dropin",name:"DropIn",component:m},{path:"/card",name:"Card",component:g},{path:"/cardele",name:"CardEle",component:T},{path:"/wechatele",name:"WechatEle",component:b}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:f,components:{App:c},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.28294e659304f61d94dc.js.map