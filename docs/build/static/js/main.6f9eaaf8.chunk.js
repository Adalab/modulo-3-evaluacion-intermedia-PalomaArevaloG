(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(1),c=n(6),s=n.n(c),l=n(8),r=n(2),b=(n(13),n(7)),u=n(0);var o=function(){var e=Object(t.useState)(b),a=Object(r.a)(e,2),n=a[0],c=a[1],s=Object(t.useState)(""),o=Object(r.a)(s,2),i=(o[0],o[1]),j=Object(t.useState)(""),d=Object(r.a)(j,2),O=(d[0],d[1]),m=Object(t.useState)(""),p=Object(r.a)(m,2),h=(p[0],p[1]),_=Object(t.useState)(""),k=Object(r.a)(_,2),x=k[0],N=k[1],f=Object(t.useState)(""),v=Object(r.a)(f,2),y=v[0],W=v[1],w=Object(t.useState)(""),g=Object(r.a)(w,2),S=g[0],A=g[1],C=n.map((function(e,a){return Object(u.jsxs)("li",{className:"club__item",children:[Object(u.jsx)("p",{className:"club__name",children:Object(u.jsx)("label",{className:"club__label",children:"#".concat(a,": ").concat(e.name)})}),Object(u.jsx)("p",{className:"club__openWeekdays",children:Object(u.jsx)("label",{className:"club__label",children:"Abierto entre semana:".concat(e.openOnWeekdays?"Si":"No")})}),Object(u.jsx)("p",{className:"club__openWeekend",children:Object(u.jsx)("label",{className:"club__label",children:"Abierto el fin de semana:".concat(e.openOnWeekend?"Si":"No")})})]},a)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{className:"header__title",children:"Mis clubs"})}),Object(u.jsxs)("main",{children:[Object(u.jsx)("ul",{children:C}),Object(u.jsxs)("form",{className:"new-contact__form",children:[Object(u.jsx)("h2",{className:"new-contact__title",children:"A\xf1ade un nuevo club"}),"Nombre"," ",Object(u.jsx)("input",{className:"new-club__input",type:"text",name:"name",id:"name",placeholder:"Nombre",onChange:function(e){N(e.currentTarget.value),i(e.target.value)},value:x}),"\xbfAbre entre semana?",Object(u.jsx)("input",{className:"new-club__input",type:"radio",name:"weekdays",id:"weekdays",onChange:function(e){W(e.currentTarget.value),O(e.target.value)},checked:!!y}),"\xbfAbre los fines de semana?",Object(u.jsx)("input",{className:"new-club__input",type:"radio",name:"weekend",id:"weekend",onChange:function(e){A(e.currentTarget.value),h(e.target.value)},checked:!!S}),Object(u.jsx)("input",{className:"new-contact__btn",type:"submit",value:"A\xf1adir",onClick:function(e){e.preventDefault();var a={name:x,openOnWeekdays:y,openOnWeekend:S};c([].concat(Object(l.a)(n),[a])),N(""),W(""),A("")}})]})]})]})};s.a.render(Object(u.jsx)(o,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.6f9eaaf8.chunk.js.map