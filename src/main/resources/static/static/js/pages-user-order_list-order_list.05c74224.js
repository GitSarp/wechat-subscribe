(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order_list-order_list"],{"158b":function(e,t,i){"use strict";var n=i("d0b6"),r=i.n(n);r.a},"22a7":function(e,t,i){"use strict";i.r(t);var n=i("d771"),r=i("f891");for(var s in r)"default"!==s&&function(e){i.d(t,e,(function(){return r[e]}))}(s);i("158b");var a,o=i("f0c5"),d=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"54bbe7b1",null,!1,n["a"],a);t["default"]=d.exports},"76c5":function(e,t,i){e.exports=i.p+"static/img/noorder.e099a14f.png"},"7f3c":function(e,t,i){"use strict";i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{headerPosition:"fixed",headerTop:"0px",typeText:{unpaid:"等待付款",back:"等待商家发货",unreceived:"商家已发货",received:"等待用户评价",completed:"交易已完成",refunds:"商品退货处理中",cancelled:"订单已取消"},orderType:["全部","待付款","待发货","待收货","待评价","退换货"],orderList:[[{type:"unpaid",ordersn:0,goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unpaid",ordersn:1,goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"back",ordersn:2,goods_id:1,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unreceived",ordersn:3,goods_id:1,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"received",ordersn:4,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"completed",ordersn:5,goods_id:1,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"refunds",ordersn:6,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"cancelled",ordersn:7,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"unpaid",ordersn:0,goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unpaid",ordersn:1,goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[],[{type:"unreceived",ordersn:3,goods_id:1,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"received",ordersn:4,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"refunds",ordersn:6,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}]],list:[],tabbarIndex:0}},onLoad:function(e){var t=this;console.log("option: "+JSON.stringify(e));var i=parseInt(e.tbIndex)+1;this.list=this.orderList[i],this.tabbarIndex=i;var n=setInterval((function(){var e=document.getElementsByTagName("uni-page-head");e.length>0&&(t.headerTop=e[0].offsetHeight+"px",clearInterval(n))}),1)},onPageScroll:function(e){},methods:{showType:function(e){this.tabbarIndex=e,this.list=this.orderList[e]},showLogistics:function(e){},remindDeliver:function(e){uni.showToast({title:"已提醒商家发货"})},cancelOrder:function(e){var t=this;uni.showModal({title:"取消订单",content:"确定取消此订单？",success:function(i){i.confirm?(console.log("用户点击确定"),t.doCancelOrder(e.ordersn)):i.cancel&&console.log("用户点击取消")}})},doCancelOrder:function(e){for(var t=this.orderList.length,i=0;i<t;i++){var n=this.orderList[i],r=n.length;if(r>0&&"unpaid"==n[0].type)for(var s=0;s<r;s++)if(this.orderList[i][s].ordersn==e){this.orderList[i][s].type="cancelled";break}}},toPayment:function(e){uni.showLoading({title:"正在获取订单..."});var t=[];t.push(e),setTimeout((function(){uni.setStorage({key:"paymentOrder",data:t,success:function(){uni.hideLoading(),uni.navigateTo({url:"../../pay/payment/payment?amount="+e.payment})}})}),500)}}};t.default=n},cbe8:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-54bbe7b1]{background-color:#f3f3f3}.topTabBar[data-v-54bbe7b1]{width:100%;position:fixed;top:0;z-index:10;background-color:#f8f8f8;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.topTabBar .grid[data-v-54bbe7b1]{width:20%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#444;font-size:%?28?%}.topTabBar .grid .text[data-v-54bbe7b1]{height:%?76?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.topTabBar .grid .text.on[data-v-54bbe7b1]{color:#f06c7a;border-bottom:solid %?4?% #f06c7a}.order-list[data-v-54bbe7b1]{margin-top:%?80?%;padding-top:%?20?%;width:100%}.order-list .list[data-v-54bbe7b1]{width:94%;margin:0 auto}.order-list .list .onorder[data-v-54bbe7b1]{width:100%;height:50vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.order-list .list .onorder uni-image[data-v-54bbe7b1]{width:20vw;height:20vw;-webkit-border-radius:100%;border-radius:100%}.order-list .list .onorder .text[data-v-54bbe7b1]{width:100%;height:%?60?%;font-size:%?28?%;color:#444;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order-list .list .row[data-v-54bbe7b1]{width:calc(100% - %?40?%);padding:%?10?% %?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background-color:#fff;margin-bottom:%?20?%}.order-list .list .row .type[data-v-54bbe7b1]{font-size:%?26?%;color:#ec652f;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order-list .list .row .order-info[data-v-54bbe7b1]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.order-list .list .row .order-info .left[data-v-54bbe7b1]{-webkit-flex-shrink:0;flex-shrink:0;width:25vw;height:25vw}.order-list .list .row .order-info .left uni-image[data-v-54bbe7b1]{width:25vw;height:25vw;-webkit-border-radius:%?10?%;border-radius:%?10?%}.order-list .list .row .order-info .right[data-v-54bbe7b1]{width:100%;margin-left:%?10?%;position:relative}.order-list .list .row .order-info .right .name[data-v-54bbe7b1]{width:100%;font-size:%?28?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.order-list .list .row .order-info .right .spec[data-v-54bbe7b1]{color:#a7a7a7;font-size:%?22?%}.order-list .list .row .order-info .right .price-number[data-v-54bbe7b1]{position:absolute;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;font-size:%?22?%;color:#333;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.order-list .list .row .order-info .right .price-number .price[data-v-54bbe7b1]{font-size:%?24?%;margin-right:%?5?%}.order-list .list .row .detail[data-v-54bbe7b1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;height:%?60?%;font-size:%?26?%}.order-list .list .row .detail .sum[data-v-54bbe7b1]{padding:0 %?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.order-list .list .row .detail .sum .price[data-v-54bbe7b1]{font-size:%?30?%}.order-list .list .row .btns[data-v-54bbe7b1]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.order-list .list .row .btns uni-view[data-v-54bbe7b1]{min-width:%?120?%;height:%?50?%;padding:0 %?20?%;-webkit-border-radius:%?50?%;border-radius:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;margin-left:%?20?%}.order-list .list .row .btns .default[data-v-54bbe7b1]{border:solid %?1?% #ccc;color:#666}.order-list .list .row .btns .pay[data-v-54bbe7b1]{border:solid %?1?% #ec652f;color:#ec652f}body.?%PAGE?%[data-v-54bbe7b1]{background-color:#f3f3f3}',""]),e.exports=t},d0b6:function(e,t,i){var n=i("cbe8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("7a06a7c6",n,!0,{sourceMap:!1,shadowMode:!1})},d771:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"topTabBar",style:{position:e.headerPosition,top:e.headerTop}},e._l(e.orderType,(function(t,i){return n("v-uni-view",{key:i,staticClass:"grid",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showType(i)}}},[n("v-uni-view",{staticClass:"text",class:[i==e.tabbarIndex?"on":""]},[e._v(e._s(t))])],1)})),1),n("v-uni-view",{staticClass:"order-list"},[n("v-uni-view",{staticClass:"list"},[0==e.list.length?n("v-uni-view",{staticClass:"onorder"},[n("v-uni-image",{attrs:{src:i("76c5")}}),n("v-uni-view",{staticClass:"text"},[e._v("没有相关订单")])],1):e._e(),e._l(e.list,(function(t,i){return n("v-uni-view",{key:i,staticClass:"row"},[n("v-uni-view",{staticClass:"type"},[e._v(e._s(e.typeText[t.type]))]),n("v-uni-view",{staticClass:"order-info"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{attrs:{src:t.img}})],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),n("v-uni-view",{staticClass:"spec"},[e._v(e._s(t.spec))]),n("v-uni-view",{staticClass:"price-number"},[e._v("￥"),n("v-uni-view",{staticClass:"price"},[e._v(e._s(t.price))]),e._v("x"),n("v-uni-view",{staticClass:"number"},[e._v(e._s(t.numner))])],1)],1)],1),n("v-uni-view",{staticClass:"detail"},[n("v-uni-view",{staticClass:"number"},[e._v("共"+e._s(t.numner)+"件商品")]),n("v-uni-view",{staticClass:"sum"},[e._v("合计￥"),n("v-uni-view",{staticClass:"price"},[e._v(e._s(t.payment))])],1),n("v-uni-view",{staticClass:"nominal"},[e._v("(含运费 ￥"+e._s(t.freight)+")")])],1),n("v-uni-view",{staticClass:"btns"},["unpaid"==t.type?[n("v-uni-view",{staticClass:"default",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.cancelOrder(t)}}},[e._v("取消订单")]),n("v-uni-view",{staticClass:"pay",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toPayment(t)}}},[e._v("付款")])]:e._e(),"back"==t.type?[n("v-uni-view",{staticClass:"default",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.remindDeliver(t)}}},[e._v("提醒发货")])]:e._e(),"unreceived"==t.type?[n("v-uni-view",{staticClass:"default",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.showLogistics(t)}}},[e._v("查看物流")]),n("v-uni-view",{staticClass:"pay"},[e._v("确认收货")]),n("v-uni-view",{staticClass:"pay"},[e._v("我要退货")])]:e._e(),"received"==t.type?[n("v-uni-view",{staticClass:"default"},[e._v("评价")]),n("v-uni-view",{staticClass:"default"},[e._v("再次购买")])]:e._e(),"completed"==t.type?[n("v-uni-view",{staticClass:"default"},[e._v("再次购买")])]:e._e(),"refunds"==t.type?[n("v-uni-view",{staticClass:"default"},[e._v("查看进度")])]:e._e(),"cancelled"==t.type?[n("v-uni-view",{staticClass:"default"},[e._v("已取消")])]:e._e()],2)],1)}))],2)],1)],1)},s=[]},f891:function(e,t,i){"use strict";i.r(t);var n=i("7f3c"),r=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a}}]);