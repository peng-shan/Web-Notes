(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),s=n(26),o=n.n(s),i=n(5),l=n(10),u=n(3),j=(n(32),n(1)),b=function(e){var t=e.mode,n=e.setMode;return Object(j.jsxs)("div",{className:"app-header",children:[Object(j.jsx)("h1",{children:"WebNotes"}),Object(j.jsx)("button",{onClick:function(){n("dark"===t?"light":"dark")},children:"dark"===t?"Light Mode":"Dark Mode"})]})},d=n(8),p=n(12),h=function(e){return new Date(e.updated).toLocaleDateString()},O=function(e){var t=e.body.split("\n")[0];return t.length>45?t.slice(0,45):t},f=function(e){var t=O(e),n=e.body.replaceAll("\n"," ");return(n=n.replaceAll(t,"")).length>45?n.slice(0,45)+"...":n},v=function(e){var t=e.note,n=Object(c.useState)(!0),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),u=Object(i.a)(o,2),b=u[0],d=u[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),x=v[0],m=v[1],w=Object(c.useState)(""),g=Object(i.a)(w,2),y=g[0],N=g[1];return Object(j.jsxs)("div",{className:"notes-list-item",children:[Object(j.jsxs)("div",{className:"single-note-header",children:[Object(j.jsx)("h3",{children:O(t)}),Object(j.jsx)("button",{onClick:function(){a||d(!b),a&&s(!a)},children:a?"Hide Content":"Show Content"})]}),b&&Object(j.jsxs)("div",{className:"password-text",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"password"===x?(s(!0),d(!1),N("")):N("Incorrect password. Please try again.")},children:[Object(j.jsx)("label",{htmlFor:"password-input",children:"Password:"}),Object(j.jsx)("input",{id:"password-input",type:"password",value:x,onChange:function(e){m(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]}),y&&Object(j.jsx)("p",{children:y})]}),a&&Object(j.jsx)(l.b,{to:"/note/".concat(t.id),children:Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:h(t)}),f(t)]})})]})},x=["title","titleId"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function g(e,t){var n=e.title,a=e.titleId,s=w(e,x);return c.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},s),void 0===n?c.createElement("title",{id:a},"add"):n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var y,N=c.forwardRef(g),k=(n.p,function(){return Object(j.jsx)(l.b,{to:"/note/new",className:"floating-button",children:Object(j.jsx)(N,{})})}),S=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(p.a)(Object(d.a)().mark((function e(){var t,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"notes",children:[Object(j.jsxs)("div",{className:"notes-header",children:[Object(j.jsx)("h2",{className:"notes-title",children:"\u2636 Notes"}),Object(j.jsx)("p",{className:"notes-count",children:n.length})]}),Object(j.jsx)("div",{className:"notes-list",children:n.map((function(e,t){return Object(j.jsx)(v,{note:e},t)}))}),Object(j.jsx)(k,{})]})},E=n(21),C=["title","titleId"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function T(e,t){var n=e.title,r=e.titleId,a=I(e,C);return c.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"chevron-left"):n?c.createElement("title",{id:r},n):null,y||(y=c.createElement("path",{d:"M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"})))}var D=c.forwardRef(T),M=(n.p,n(19)),J=(n(41),function(e){var t=e.match,n=e.history,r=t.params.id,a=Object(c.useState)(null),s=Object(i.a)(a,2),o=s[0],l=s[1];Object(c.useEffect)((function(){u()}),[r]);var u=function(){var e=Object(p.a)(Object(d.a)().mark((function e(){var t,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/notes/".concat(r,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,l(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/".concat(r,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/".concat(r,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}})("/home");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){console.log("NOTE:",o),"new"!==r&&""==o.body?O():"new"!==r?h():"new"===r&&null!==o.body&&b(),n.push("/home")};return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsxs)("div",{className:"note-header",children:[Object(j.jsx)("h3",{children:Object(j.jsx)(D,{onClick:f})}),Object(j.jsx)("button",{onClick:function(){var e=new M.default,t=(null===o||void 0===o?void 0:o.body)||"",n=e.splitTextToSize(t,190);e.setPage(1),e.text(10,10,n),e.save("note.pdf")},children:"Export to PDF"}),"new"!==r?Object(j.jsx)("button",{onClick:O,children:"Delete"}):Object(j.jsx)("button",{onClick:f,children:"Done"})]}),Object(j.jsx)("textarea",{onChange:function(e){var t;t=e.target.value,l((function(e){return Object(E.a)(Object(E.a)({},e),{},{body:t})})),console.log("Handle Change:",o)},value:null===o||void 0===o?void 0:o.body})]})}),L=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],l=s[1],b=Object(u.e)();return Object(j.jsxs)("div",{className:"login-page",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"form-label",children:"Username:"}),Object(j.jsx)("input",{className:"form-input",type:"text",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"form-label",children:"Password:"}),Object(j.jsx)("input",{className:"form-input",type:"password",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsx)("button",{className:"btn",onClick:function(){"example"===n&&"password"===o?b.push("/home"):alert("Invalid username or password")},children:"Login"})]})};var z=function(){var e=Object(c.useState)("dark"),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{className:"container ".concat(n),children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(b,{mode:n,setMode:r}),Object(j.jsx)(u.a,{path:"/",exact:!0,component:L}),Object(j.jsx)(u.a,{path:"/home",exact:!0,component:S}),Object(j.jsx)(u.a,{path:"/note/:id",component:J})]})})})};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))}},[[42,1,3]]]);
//# sourceMappingURL=main.f7fcfba8.chunk.js.map