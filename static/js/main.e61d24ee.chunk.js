(this["webpackJsonppositive-test"]=this["webpackJsonppositive-test"]||[]).push([[0],{37:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){},68:function(t,e,c){},69:function(t,e,c){},70:function(t,e,c){},71:function(t,e,c){},72:function(t,e,c){"use strict";c.r(e),c.d(e,"RATES_APP_ID",(function(){return M})),c.d(e,"BASE_CURRENCY",(function(){return F}));var n=c(0),a=c.n(n),i=c(15),r=c.n(i),s=(c(37),c(4)),l=(c(38),c(32)),o=(c(39),c(12)),u=c(3),j=c(16),d=c(19),b=c.n(d),O=function t(){Object(j.a)(this,t)};O.SET_CURRENCY="SET_CURRENCY",O.REFRESH_RATES_REQUESTED="REFRESH_RATES_REQUESTED",O.REFRESH_RATES_SUCCESS="REFRESH_RATES_SUCCESS";var E=O;function _(){return function(t){t({type:O.REFRESH_RATES_REQUESTED}),b.a.get("https://openexchangerates.org/api/latest.json?app_id=".concat(M)).then((function(e){var c;t((c=e.data.rates,{type:O.REFRESH_RATES_SUCCESS,payload:{rates:c}}))})).catch((function(t){console.log(t)}))}}var S=c(1);var f=function(){var t=Object(u.c)((function(t){return t.lots.data})),e=Object(u.c)((function(t){return t.currency})),c=Object(u.b)(),a=Object(n.useState)(!1),i=Object(l.a)(a,2),r=i[0],s=i[1],j=Object.keys(e.currencies),d=0;function b(t){c(function(t){return{type:O.SET_CURRENCY,payload:{value:t}}}(t))}return t.forEach((function(t){return d+=t.inBasket})),Object(S.jsx)("div",{className:"MainNav",children:Object(S.jsx)("nav",{className:"MainNav__nav container",children:Object(S.jsxs)("ul",{className:"MainNav__list row",children:[Object(S.jsx)("li",{className:"MainNav__item col-1 d-flex justify-content-center",children:Object(S.jsx)(o.b,{to:"/",children:"Shop"})}),Object(S.jsxs)("li",{className:"MainNav__item col-1 d-flex justify-content-center",children:[Object(S.jsx)(o.b,{to:"/basket",children:"Basket"}),d?Object(S.jsx)("span",{className:"badge bg-primary rounded-pill MainNav__count",children:d}):null]}),Object(S.jsx)("li",{className:"MainNav__item MainNav__item_currency",children:Object(S.jsxs)("div",{className:"MainNav__currency",onClick:function(){return s(!r)},children:[Object(S.jsx)("span",{children:e.value}),r?Object(S.jsx)("ul",{children:j.map((function(t){return Object(S.jsx)("li",{onClick:function(){return b(t)},children:t},t)}))}):null]})})]})})})};c(68),c(69);function h(t,e){var c=(t.rates[t.value]*e).toFixed(2),n=t.currencies[t.value],a="".concat(c," ").concat(n);return"RUB"!==t.value&&(a="".concat(n," ").concat(c)),a}var v=function(t){var e=Object(u.c)((function(t){return t.currency}));return Object(S.jsx)("div",{className:"ShopCard col-3",children:Object(S.jsx)("div",{className:"card",children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h5",{className:"card-title",children:t.title}),Object(S.jsx)("p",{className:"card-text",children:h(e,t.price)}),Object(S.jsx)("button",{className:"btn btn-primary",onClick:t.onButtonClick,children:"Move to basket"})]})})})},p=function t(){Object(j.a)(this,t)};p.GET_LOTS_REQUESTED="GET_LOTS_REQUESTED",p.GET_LOTS_SUCCESS="GET_LOTS_SUCCESS",p.ADD_LOT_TO_BASKET="ADD_LOT_TO_BASKET",p.REMOVE_LOT_FROM_BASKET="REMOVE_LOT_FROM_BASKET";var T=p;function R(){return function(t){t({type:p.GET_LOTS_REQUESTED});var e=setTimeout((function(){t({type:p.GET_LOTS_SUCCESS,payload:{lots:[{id:1,title:"lot-1",price:20,inBasket:0},{id:2,title:"lot-2",price:45,inBasket:0},{id:3,title:"lot-3",price:67,inBasket:0},{id:4,title:"lot-4",price:1305,inBasket:0},{id:5,title:"lot-5",price:732,inBasket:0}]}}),clearTimeout(e)}),1e3)}}var x=function(){var t=Object(u.c)((function(t){return t.lots})),e=Object(u.b)();function c(t){e(function(t){return{type:p.ADD_LOT_TO_BASKET,payload:{id:t}}}(t))}return Object(S.jsx)("div",{className:"Shop",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("h2",{className:"Shop__title",children:"Lots list"}),Object(S.jsx)("div",{className:"row",children:t.data.map((function(t){return Object(S.jsx)(v,{title:t.title,price:t.price,inBasket:t.inBasket,onButtonClick:function(){return c(t.id)}},t.id)}))})]})})};c(70),c(71);var m=function(){var t=Object(u.c)((function(t){return t.lots})),e=Object(u.c)((function(t){return t.currency})),c=Object(u.b)();return Object(S.jsx)("ul",{className:"BasketList list-group list-group-numbered",children:t.data.filter((function(t){return t.inBasket>0})).map((function(t){return Object(S.jsxs)("li",{className:"BasketList__item list-group-item d-flex justify-content-between align-items-start",children:[Object(S.jsxs)("div",{className:"ms-2 me-auto",children:[Object(S.jsx)("div",{className:"fw-bold",children:t.title}),h(e,t.price)]}),Object(S.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return c((e=t.id,{type:p.REMOVE_LOT_FROM_BASKET,payload:{id:e}}));var e},children:"Remove"}),Object(S.jsx)("span",{className:"BasketList__count badge bg-primary rounded-pill",children:t.inBasket})]},t.id)}))})};var B=function(){var t=Object(u.c)((function(t){return t.lots})),e=Object(u.c)((function(t){return t.currency})),c=0;return t.data.forEach((function(t){var e=t.inBasket*t.price;e&&(c+=e.toFixed(2))})),Object(S.jsx)("div",{className:"Basket",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("h2",{className:"Basket__title",children:"Basket"}),Object(S.jsxs)("h5",{className:"Basket__subtitle",children:["Sum: ",h(e,c)]}),Object(S.jsx)(m,{})]})})};var N=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.currency})),c=Object(u.c)((function(t){return t}));return console.log("App store: ",c),Object(n.useEffect)((function(){t(R())}),[]),Object(n.useEffect)((function(){t(_(e.value))}),[e.value]),Object(S.jsxs)("div",{children:[Object(S.jsx)(f,{}),Object(S.jsxs)(s.d,{children:[Object(S.jsx)(s.b,{path:"/basket",children:Object(S.jsx)(B,{})}),Object(S.jsx)(s.b,{path:"/",exact:!0,children:Object(S.jsx)(x,{})}),Object(S.jsx)(s.a,{to:"/"})]})]})},k=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),i(t),r(t)}))},y=c(14),C=c(31),g=c(5),U={data:[],loading:!1};var A={value:"USD",currencies:{USD:"$",RUB:"\u20bd",EUR:"\u20ac",GBP:"\xa3",JPY:"\u5186"},rates:{USD:0,RUB:0,EUR:0,GBP:0,JPY:0},loading:!1};var D=Object(y.b)({lots:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T.GET_LOTS_REQUESTED:return Object(g.a)(Object(g.a)({},t),{},{loading:!0});case T.GET_LOTS_SUCCESS:return Object(g.a)(Object(g.a)({},t),{},{data:e.payload.lots,loading:!1});case T.ADD_LOT_TO_BASKET:return Object(g.a)(Object(g.a)({},t),{},{data:t.data.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{inBasket:t.id===e.payload.id?t.inBasket+1:t.inBasket})}))});case T.REMOVE_LOT_FROM_BASKET:return Object(g.a)(Object(g.a)({},t),{},{data:t.data.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{inBasket:t.id===e.payload.id?t.inBasket-1:t.inBasket})}))});default:return t}},currency:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E.SET_CURRENCY:return Object(g.a)(Object(g.a)({},t),{},{value:e.payload.value});case E.REFRESH_RATES_REQUESTED:return Object(g.a)(Object(g.a)({},t),{},{loading:!0});case E.REFRESH_RATES_SUCCESS:return Object(g.a)(Object(g.a)({},t),{},{rates:Object(g.a)({},e.payload.rates),loading:!1});default:return t}}}),L=Object(y.d)(D,Object(y.c)(Object(y.a)(C.a))),M="9be66a1e18b4445eb2fad2b031d81633",F="USD";r.a.render(Object(S.jsx)(u.a,{store:L,children:Object(S.jsx)(o.a,{children:Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(N,{})})})}),document.getElementById("root")),k()}},[[72,1,2]]]);
//# sourceMappingURL=main.e61d24ee.chunk.js.map