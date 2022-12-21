(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(25),n=c(13),s=(c(34),c(35),c(14)),r=c.n(s),i=c(2),j=(c(36),c(4)),l=c(6),b=c(5),o=c(0),d=(c(37),c(3)),h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})};function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var x=function(e){var t=e.person,c=e.allPeople,a=t.fatherName,n=t.motherName,s=t.slug,j=t.name,l=t.sex,b=t.born,h=t.died,O=Object(o.useMemo)((function(){return c.find((function(e){return n===e.name}))}),[]),x=Object(o.useMemo)((function(){return c.find((function(e){return a===e.name}))}),[]),u=Object(i.o)().slug;return Object(d.jsxs)("tr",{"data-cy":"person",className:r()({"has-background-warning":u===s}),children:[Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:"#/people/".concat(s),className:r()({"has-text-danger":"f"===l}),children:j})}),Object(d.jsx)("td",{children:l}),Object(d.jsx)("td",{children:b}),Object(d.jsx)("td",{children:h}),Object(d.jsx)("td",{children:O?Object(d.jsx)("a",{href:"#/people/".concat(O.slug),className:"has-text-danger",children:n}):n||"-"}),Object(d.jsx)("td",{children:x?Object(d.jsx)("a",{href:"#/people/".concat(x.slug),className:"has-text-link",children:a}):a||"-"})]})},u=function(){var e=Object(o.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(!1),s=Object(b.a)(n,2),r=s[0],i=s[1],u=Object(o.useState)(!1),p=Object(b.a)(u,2),m=p[0],f=p[1],v=!r&&!m,g=Object(o.useCallback)(Object(l.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),i(!0),e.prev=2,e.next=5,O();case 5:t=e.sent,a(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),f(!0);case 12:i(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),[]);return Object(o.useEffect)((function(){g()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsxs)("div",{className:"box table-container",children:[r&&Object(d.jsx)(h,{}),v&&Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:null===c||void 0===c?void 0:c.map((function(e){return Object(d.jsx)(x,{person:e,allPeople:c})}))})]}),0===c.length&&v&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),m&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})]})},p=function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(n.b,{to:"/",className:function(e){var t=e.isActive;return r()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(d.jsx)(n.b,{className:function(e){var t=e.isActive;return r()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(i.b,{path:"home",element:Object(d.jsx)(i.a,{to:"/",replace:!0})}),Object(d.jsxs)(i.b,{path:"people",children:[Object(d.jsx)(i.b,{index:!0,element:Object(d.jsx)(u,{})}),Object(d.jsx)(i.b,{path:":slug",element:Object(d.jsx)(u,{})})]}),Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(a.createRoot)(document.getElementById("root")).render(Object(d.jsx)(n.a,{children:Object(d.jsx)(p,{})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f1185928.chunk.js.map