"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{7842:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(5861),a=e(9439),c=e(4687),u=e.n(c),o=e(937),i=e(2791),s=e(7689),p=e(1454),f=e(4126),l=e(184);function v(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],v=(0,i.useState)(!1),h=(0,a.Z)(v,2),d=h[0],m=h[1],w=(0,i.useState)(!1),x=(0,a.Z)(w,2),g=x[0],k=x[1],Z=(0,s.TH)();return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,o.Df)();case 4:n=t.sent,e=n.results,c(e),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),k(t.t0),console.log(t.t0);case 13:return t.prev=13,m(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,9,13,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,l.jsxs)("section",{children:[(0,l.jsx)("h1",{children:"Trending today"}),d&&(0,l.jsx)(p.a,{}),g&&(0,l.jsx)("h2",{children:"Oops, something went wrong... "}),(0,l.jsx)(f.e,{movies:e,location:Z})]})}},1454:function(t,n,e){e.d(n,{a:function(){return i}});var r,a=e(5243),c=e(168),u=e(7402).Z.div(r||(r=(0,c.Z)(["\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),o=e(184);function i(){return(0,o.jsx)(u,{children:(0,o.jsx)(a.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},4126:function(t,n,e){e.d(n,{e:function(){return c}});var r=e(1087),a=e(184);function c(t){var n=t.movies,e=t.location;return(0,a.jsx)("ul",{children:n.map((function(t){var n=t.id,c=t.title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(n),state:{from:e},children:c})},n)}))})}},937:function(t,n,e){e.d(n,{Df:function(){return h},M1:function(){return w},Qu:function(){return d},TP:function(){return m},tx:function(){return x}});var r=e(8683),a=e(5861),c=e(4687),u=e.n(c),o=e(1912);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="30b387244ee5c8a51c0c80e828c65743",s="/trending/movie/week",p="/search/movie",f="/movie",l="/credits",v="/reviews",h=function(){var t=(0,a.Z)(u().mark((function t(){var n,e,r,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,o.Z.get("".concat(s,"?api_key=").concat(i,"&page=").concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)(u().mark((function t(n){var e,r,a,c=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:1,t.next=3,o.Z.get("".concat(p,"?api_key=").concat(i,"&page=").concat(e,"&query=").concat(n));case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,a.Z)(u().mark((function t(n){var e,a,c,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(f,"/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,a=e.data,c=a.poster_path,s="https://image.tmdb.org/t/p/w400/".concat(c),t.abrupt("return",(0,r.Z)((0,r.Z)({},a),{},{posterUrl:s}));case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),w=function(){var t=(0,a.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(n).concat(l,"?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast.slice(0,10));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),x=function(){var t=(0,a.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(n).concat(v,"?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=842.3940af33.chunk.js.map