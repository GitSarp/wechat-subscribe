(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pay-payment-payment"],{3915:function(t,e,i){"use strict";i("b680"),i("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:0,orderName:"",paytype:"alipay"}},onLoad:function(t){var e=this;this.amount=parseFloat(t.amount).toFixed(2),uni.getStorage({key:"paymentOrder",success:function(t){t.data.length>1?e.orderName="多商品合并支付":e.orderName=t.data[0].name,uni.removeStorage({key:"paymentOrder"})}})},methods:{doDeposit:function(){var t=this;uni.showLoading({title:"支付中..."}),setTimeout((function(){uni.hideLoading(),uni.showToast({title:"支付成功"}),setTimeout((function(){uni.redirectTo({url:"../../pay/success/success?amount="+t.amount})}),300)}),700)}}};e.default=n},"68bf":function(t,e,i){"use strict";i.r(e);var n=i("a6e8"),a=i("92f7");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("82ce");var s,o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"3cf8f4cc",null,!1,n["a"],s);e["default"]=r.exports},"82ce":function(t,e,i){"use strict";var n=i("c71e"),a=i.n(n);a.a},"92f7":function(t,e,i){"use strict";i.r(e);var n=i("3915"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},a6e8:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"block"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"orderinfo"},[i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"nominal"},[t._v("订单名称:")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.orderName))])],1),i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"nominal"},[t._v("订单金额:")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.amount)+"元")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"block"},[i("v-uni-view",{staticClass:"title"},[t._v("选择支付方式")]),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"pay-list"},[i("v-uni-view",{staticClass:"row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paytype="alipay"}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:"/static/img/alipay.png"}})],1),i("v-uni-view",{staticClass:"center"},[t._v("支付宝支付")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-radio",{attrs:{checked:"alipay"==t.paytype,color:"#f06c7a"}})],1)],1),i("v-uni-view",{staticClass:"row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paytype="wxpay"}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:"/static/img/wxpay.png"}})],1),i("v-uni-view",{staticClass:"center"},[t._v("微信支付")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-radio",{attrs:{checked:"wxpay"==t.paytype,color:"#f06c7a"}})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"pay"},[i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doDeposit.apply(void 0,arguments)}}},[t._v("立即支付")]),i("v-uni-view",{staticClass:"tis"},[t._v("点击立即支付，即代表您同意"),i("v-uni-view",{staticClass:"terms"},[t._v("《条款协议》")])],1)],1)],1)},c=[]},c71e:function(t,e,i){var n=i("ebce");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("a549504e",n,!0,{sourceMap:!1,shadowMode:!1})},ebce:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.block[data-v-3cf8f4cc]{width:94%;padding:0 3% %?40?% 3%}.block .title[data-v-3cf8f4cc]{width:100%;font-size:%?34?%}.block .content .orderinfo[data-v-3cf8f4cc]{width:100%;border-bottom:solid %?1?% #eee}.block .content .orderinfo .row[data-v-3cf8f4cc]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.block .content .orderinfo .row .nominal[data-v-3cf8f4cc]{-webkit-flex-shrink:0;flex-shrink:0;font-size:%?32?%;color:#7d7d7d}.block .content .orderinfo .row .text[data-v-3cf8f4cc]{width:70%;margin-left:%?10?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:%?32?%}.block .content .pay-list[data-v-3cf8f4cc]{width:100%;border-bottom:solid %?1?% #eee}.block .content .pay-list .row[data-v-3cf8f4cc]{width:100%;height:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.block .content .pay-list .row .left[data-v-3cf8f4cc]{width:%?100?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.block .content .pay-list .row .left uni-image[data-v-3cf8f4cc]{width:%?80?%;height:%?80?%}.block .content .pay-list .row .center[data-v-3cf8f4cc]{width:100%;font-size:%?30?%}.block .content .pay-list .row .right[data-v-3cf8f4cc]{width:%?100?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.pay[data-v-3cf8f4cc]{margin-top:%?20?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.pay .btn[data-v-3cf8f4cc]{width:70%;height:%?80?%;-webkit-border-radius:%?80?%;border-radius:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;background-color:#f06c7a;-webkit-box-shadow:%?0?% %?5?% %?10?% rgba(0,0,0,.2);box-shadow:%?0?% %?5?% %?10?% rgba(0,0,0,.2)}.pay .tis[data-v-3cf8f4cc]{margin-top:%?10?%;width:100%;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;color:#999}.pay .tis .terms[data-v-3cf8f4cc]{color:#5a9ef7}',""]),t.exports=e}}]);