"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[325],{1454:function(n,e,t){t.d(e,{a:function(){return o}});var r,a=t(5243),c=t(168),i=t(7402).Z.div(r||(r=(0,c.Z)(["\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),s=t(184);function o(){return(0,s.jsx)(i,{children:(0,s.jsx)(a.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},5325:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,c,i,s=t(5861),o=t(9439),u=t(4687),p=t.n(u),d=t(7689),l=t(2791),f=t(937),h=t(1454),x=t(2134),v=t(168),g=t(1087),j=(0,t(8789).ZP)(g.rU)(r||(r=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding-top: 10px;\n  padding-left: 10px;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n\n  :hover {\n    color: orangered;\n  }\n"]))),m=t(184),w=function(n){var e=n.to;return(0,m.jsxs)(j,{to:e,children:[(0,m.jsx)(x.kyg,{}),"Go back"]})},Z=t(7402),b=Z.Z.div(a||(a=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px;\n"]))),k=Z.Z.div(c||(c=(0,v.Z)(["\n  padding: 10px;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n"]))),y=Z.Z.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"])));function _(n){var e=n.movie,t=(0,d.TH)(),r=e.title,a=e.vote_average,c=e.overview,i=e.posterUrl,s=e.genres,o=e.release_date;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(b,{children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:i,alt:r,width:"400px",height:"500px"})}),(0,m.jsxs)(y,{children:[(0,m.jsxs)("h1",{children:[r," (",o.slice(0,4),")"]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:" User score:"})," ",a]}),(0,m.jsx)("p",{children:c}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Genres:"})," ",s.map((function(n){return n.name})).join(", ")]})]})]}),(0,m.jsxs)(k,{children:[(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(g.rU,{to:"cast",state:t.state,children:"cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(g.rU,{to:"reviews",state:t.state,children:"reviews"})})]})]}),(0,m.jsx)(l.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading subpage..."}),children:(0,m.jsx)(d.j3,{})})]})}function U(){var n,e,t=(0,l.useState)({}),r=(0,o.Z)(t,2),a=r[0],c=r[1],i=(0,l.useState)(!1),u=(0,o.Z)(i,2),x=u[0],v=u[1],g=(0,l.useState)(!1),j=(0,o.Z)(g,2),Z=j[0],b=j[1],k=(0,d.UO)().movieId,y=null!==(n=null===(e=(0,d.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,l.useEffect)((function(){var n=function(){var n=(0,s.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),n.next=4,(0,f.TP)(k);case 4:e=n.sent,c(e),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),b(n.t0),console.log(n.t0);case 12:return n.prev=12,v(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})));return function(){return n.apply(this,arguments)}}();n(k)}),[k]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("section",{children:[x&&(0,m.jsx)(h.a,{}),Z&&(0,m.jsx)("h2",{children:"Oops, something went wrong... "}),(0,m.jsx)(w,{to:y}),a.id&&(0,m.jsx)(_,{movie:a})]})})}},937:function(n,e,t){t.d(e,{Df:function(){return h},M1:function(){return g},Qu:function(){return x},TP:function(){return v},tx:function(){return j}});var r=t(8683),a=t(5861),c=t(4687),i=t.n(c),s=t(1912);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="30b387244ee5c8a51c0c80e828c65743",u="/trending/movie/week",p="/search/movie",d="/movie",l="/credits",f="/reviews",h=function(){var n=(0,a.Z)(i().mark((function n(){var e,t,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,s.Z.get("".concat(u,"?api_key=").concat(o,"&page=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)(i().mark((function n(e){var t,r,a,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.next=3,s.Z.get("".concat(p,"?api_key=").concat(o,"&page=").concat(t,"&query=").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,a.Z)(i().mark((function n(e){var t,a,c,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("".concat(d,"/").concat(e,"?api_key=").concat(o));case 2:return t=n.sent,a=t.data,c=a.poster_path,u="https://image.tmdb.org/t/p/w400/".concat(c),n.abrupt("return",(0,r.Z)((0,r.Z)({},a),{},{posterUrl:u}));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,a.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e).concat(l,"?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast.slice(0,10));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=function(){var n=(0,a.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e).concat(f,"?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=325.cd74482e.chunk.js.map