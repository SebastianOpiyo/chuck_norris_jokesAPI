(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],{50:function(t,e,c){},51:function(t,e,c){},60:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),o=c(20),a=c.n(o),s=(c(50),c.p,c(51),c(33)),r=c(88),j=c(84),h=c(86),u=c(85),b=c(87),l=c(82),d=c(17),p=c(40),O=c.n(p),g=c(41),x=c.n(g),f=c(2),m=Object(l.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(s.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(s.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(d.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function k(){var t=m();return Object(f.jsx)("div",{className:t.root,children:Object(f.jsx)(r.a,{position:"static",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(h.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",children:Object(f.jsx)(O.a,{})}),Object(f.jsx)(u.a,{className:t.title,variant:"h6",noWrap:!0,children:"Chucknorris Jokes"}),Object(f.jsxs)("div",{className:t.search,children:[Object(f.jsx)("div",{className:t.searchIcon,children:Object(f.jsx)(x.a,{})}),Object(f.jsx)(b.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var v=c(18),w=function(t){var e=t.match.params.category;console.log(e);var c=Object(n.useState)(null),i=Object(v.a)(c,2),o=i[0],a=i[1],s=Object(n.useState)(!1),r=Object(v.a)(s,2),j=r[0],h=r[1],u=Object(n.useState)([]),b=Object(v.a)(u,2),l=b[0],d=b[1];return Object(n.useEffect)((function(){fetch("https://api.chucknorris.io/jokes/random?category=".concat(e)).then((function(t){return t.json()})).then((function(t){console.log(t),d(t),h(!0)}),(function(t){h(!0),a(t)}))}),[]),o?Object(f.jsxs)("div",{children:["Error: ",o.message]}):j?l?Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{children:["Joke Category: ",l.categories[0]]}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:l.icon_url,width:"200",height:"150",alt:"Joke Image"})}),Object(f.jsxs)("div",{children:["Joke: ",l.value]})]}):void 0:Object(f.jsx)("div",{children:"Loading..."})},y=c(31),S=function(){var t=Object(n.useState)(null),e=Object(v.a)(t,2),c=e[0],i=e[1],o=Object(n.useState)(!1),a=Object(v.a)(o,2),s=a[0],r=a[1],j=Object(n.useState)([]),h=Object(v.a)(j,2),u=h[0],b=h[1];return Object(n.useEffect)((function(){fetch("https://api.chucknorris.io/jokes/categories").then((function(t){return t.json()})).then((function(t){r(!0),b(t)}),(function(t){r(!0),i(t)}))}),[]),c?Object(f.jsxs)("div",{children:["Error: ",c.message]}):s?Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:u.map((function(t){return Object(f.jsx)("li",{children:Object(f.jsx)(y.b,{to:"/categories/".concat(t),children:t})})}))})}):Object(f.jsx)("div",{children:"Loading..."})},I=c(5),_=function(){return Object(f.jsxs)(y.a,{children:[Object(f.jsx)(I.a,{exact:!0,path:"http://SebastianOpiyo.github.io/chuck_norris_jokesAPI/",component:k}),Object(f.jsx)(I.a,{exact:!0,path:"http://SebastianOpiyo.github.io/chuck_norris_jokesAPI/",component:S}),Object(f.jsx)(I.a,{exact:!0,path:"http://SebastianOpiyo.github.io/chuck_norris_jokesAPI/categories/:category",component:w}),Object(f.jsx)(I.a,{path:"http://SebastianOpiyo.github.io/chuck_norris_jokesAPI/joke",component:w})]})};var C=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(_,{})})},L=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;c(t),n(t),i(t),o(t),a(t)}))};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),L()}},[[60,1,2]]]);
//# sourceMappingURL=main.ae454fce.chunk.js.map