(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),s=n(26),o=n.n(s),i=n(5),l=n(10),u=n(3),j=(n(32),n.p+"static/media/logo.ee9961f3.jpeg"),b=n(1),d=function(e){var t=e.mode,n=e.setMode;return Object(b.jsxs)("div",{className:"app-header",children:[Object(b.jsx)("img",{src:j,alt:"My Logo"}),Object(b.jsx)("button",{onClick:function(){n("dark"===t?"light":"dark")},children:"dark"===t?"Light Mode":"Dark Mode"})]})},p=n(8),h=n(12),O=function(e){return new Date(e.updated).toLocaleDateString()},f=function(e){var t=e.body.split("\n")[0];return t.length>45?t.slice(0,45):t},v=function(e){var t=f(e),n=e.body.replaceAll("\n"," ");return(n=n.replaceAll(t,"")).length>45?n.slice(0,45)+"...":n},m=function(e){var t=e.note,n=Object(c.useState)(!0),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),u=Object(i.a)(o,2),j=u[0],d=u[1],p=Object(c.useState)(""),h=Object(i.a)(p,2),m=h[0],x=h[1],g=Object(c.useState)(""),w=Object(i.a)(g,2),y=w[0],N=w[1];return Object(b.jsxs)("div",{className:"notes-list-item",children:[Object(b.jsxs)("div",{className:"single-note-header",children:[Object(b.jsx)("h3",{children:f(t)}),Object(b.jsx)("button",{onClick:function(){a||d(!j),a&&s(!a)},children:a?"Hide Content":"Show Content"})]}),j&&Object(b.jsxs)("div",{className:"password-text",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"password"===m?(s(!0),d(!1),N("")):N("Incorrect password. Please try again.")},children:[Object(b.jsx)("label",{htmlFor:"password-input",children:"Password:"}),Object(b.jsx)("input",{id:"password-input",type:"password",value:m,onChange:function(e){x(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]}),y&&Object(b.jsx)("p",{children:y})]}),a&&Object(b.jsx)(l.b,{to:"/note/".concat(t.id),children:Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:O(t)}),v(t)]})})]})},x=["title","titleId"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function y(e,t){var n=e.title,a=e.titleId,s=w(e,x);return c.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},s),void 0===n?c.createElement("title",{id:a},"add"):n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var N,S=c.forwardRef(y),k=(n.p,function(){return Object(b.jsx)(l.b,{to:"/note/new",className:"floating-button",children:Object(b.jsx)(S,{})})}),E=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(h.a)(Object(p.a)().mark((function e(){var t,n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"notes",children:[Object(b.jsxs)("div",{className:"notes-header",children:[Object(b.jsx)("h2",{className:"notes-title",children:"\u2636 Notes"}),Object(b.jsx)("p",{className:"notes-count",children:n.length})]}),Object(b.jsx)("div",{className:"notes-list",children:n.map((function(e,t){return Object(b.jsx)(m,{note:e},t)}))}),Object(b.jsx)(k,{})]})},C=n(21),P=["title","titleId"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function D(e,t){var n=e.title,r=e.titleId,a=T(e,P);return c.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"chevron-left"):n?c.createElement("title",{id:r},n):null,N||(N=c.createElement("path",{d:"M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"})))}var M=c.forwardRef(D),L=(n.p,n(19)),J=(n(41),function(e){var t=e.match,n=e.history,r=t.params.id,a=Object(c.useState)(null),s=Object(i.a)(a,2),o=s[0],l=s[1];Object(c.useEffect)((function(){u()}),[r]);var u=function(){var e=Object(h.a)(Object(p.a)().mark((function e(){var t,n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/notes/".concat(r,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,l(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(h.a)(Object(p.a)().mark((function e(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(h.a)(Object(p.a)().mark((function e(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/".concat(r,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(h.a)(Object(p.a)().mark((function e(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/".concat(r,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n.push("/home");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){console.log("NOTE:",o),"new"!==r&&""===o.body?O():"new"!==r?d():"new"===r&&null!==o.body&&j(),n.push("/home")};return Object(b.jsxs)("div",{className:"note",children:[Object(b.jsxs)("div",{className:"note-header",children:[Object(b.jsx)("h3",{children:Object(b.jsx)(M,{onClick:f})}),Object(b.jsx)("button",{onClick:function(){var e=new L.default,t=(null===o||void 0===o?void 0:o.body)||"",n=e.splitTextToSize(t,190);e.setPage(1),e.text(10,10,n),e.save("note.pdf")},children:"Export to PDF"}),"new"!==r?Object(b.jsx)("button",{onClick:O,children:"Delete"}):Object(b.jsx)("button",{onClick:f,children:"Done"})]}),Object(b.jsx)("textarea",{onChange:function(e){var t;t=e.target.value,l((function(e){return Object(C.a)(Object(C.a)({},e),{},{body:t})})),console.log("Handle Change:",o)},value:null===o||void 0===o?void 0:o.body})]})}),z=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],l=s[1],j=Object(u.e)();return Object(b.jsxs)("div",{className:"login-page",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",children:"Username:"}),Object(b.jsx)("input",{className:"form-input",type:"text",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",children:"Password:"}),Object(b.jsx)("input",{className:"form-input",type:"password",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(b.jsx)("button",{className:"btn",onClick:function(){"example"===n&&"password"===o?j.push("/home"):alert("Invalid username or password")},children:"Login"})]})};var B=function(){var e=Object(c.useState)("light"),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{className:"container ".concat(n),children:Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(d,{mode:n,setMode:r}),Object(b.jsx)(u.a,{path:"/",exact:!0,component:z}),Object(b.jsx)(u.a,{path:"/home",exact:!0,component:E}),Object(b.jsx)(u.a,{path:"/note/:id",component:J})]})})})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[42,1,3]]]);
//# sourceMappingURL=main.336c914b.chunk.js.map