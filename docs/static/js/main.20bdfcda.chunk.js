(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{33:function(e,r,a){"use strict";a.r(r);var c=a(1),t=a(12),s=a.n(t),n=a(4),i=a(2),l=a(0),o=function(){var e=Object(i.g)();return Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Login Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){e("/marvel",{replace:!0})},children:"Login"})]})},h=function(){var e=Object(i.g)();return Object(l.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(l.jsx)(n.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(l.jsx)("div",{className:"navbar-collapse",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)(n.c,{className:function(e){return"nav-item nav-link "+(e.isActive?"active":"")},to:"/marvel",children:"Marvel"}),Object(l.jsx)(n.c,{className:function(e){return"nav-item nav-link "+(e.isActive?"active":"")},to:"/dc",children:"DC"}),Object(l.jsx)(n.c,{className:function(e){return"nav-item nav-link "+(e.isActive?"active":"")},to:"/search",children:"Search"})]})}),Object(l.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end",children:Object(l.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(l.jsx)("span",{className:"nav-item nav-link text-info",children:"Carlos"}),Object(l.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){e("/login",{replace:!0})},children:"Logout"})]})})]})},j=a(6),d=function(e){var r=e.id,a=e.superhero,c=(e.publisher,e.alter_ego),t=e.first_appearance,s=e.characters,i="./assets/".concat(r,".jpg");return Object(l.jsx)("div",{className:"col animate__animated animate__fadeIn",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"row no-gutters",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("img",{src:i,className:"card-img",alt:a})}),Object(l.jsx)("div",{className:"col-8",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:a}),Object(l.jsx)("p",{className:"card-text",children:c}),c!==s&&Object(l.jsx)("p",{className:"text-muted",children:s}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsx)("small",{className:"text-muted",children:t})}),Object(l.jsx)(n.b,{to:"/hero/".concat(r),children:"M\xe1s..."})]})})]})})})},u=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],b=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("".concat(e," is not a valid publisher"));return u.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(l.jsx)("div",{className:"row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn",children:a.map((function(e){return Object(l.jsx)(d,Object(j.a)({},e),e.id)}))})},m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"DC Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)(b,{publisher:"DC Comics"})]})},p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Marvel Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)(b,{publisher:"Marvel Comics"})]})},O=a(5),v=a(13),x=a.n(v),f=a(7),C=function(){var e=Object(i.g)(),r=Object(i.f)(),a=x.a.parse(r.search).q,t=void 0===a?"":a,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(O.a)(r,2),t=a[0],s=a[1];return[t,function(e){var r=e.target;s(Object(j.a)(Object(j.a)({},t),{},Object(f.a)({},r.name,r.value)))},function(){s(e)}]}({searchText:t}),n=Object(O.a)(s,2),o=n[0],h=n[1],b=o.searchText,m=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLowerCase(),u.filter((function(r){return r.superhero.toLowerCase().includes(e)})))}(t)}),[t]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"B\xfasquedas"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-5",children:[Object(l.jsx)("h4",{children:"Buscar"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{onSubmit:function(r){r.preventDefault(),e("?q=".concat(b))},children:[Object(l.jsx)("input",{type:"text",placeholder:"Buscar un h\xe9roe",className:"form-control",name:"searchText",autoComplete:"off",value:b,onChange:h}),Object(l.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-1",children:"Buscar..."})]})]}),Object(l.jsxs)("div",{className:"col-7",children:[Object(l.jsx)("h4",{children:"Resultados"}),Object(l.jsx)("hr",{}),""===t?Object(l.jsx)("div",{className:"alert alert-info",children:"Buscar un h\xe9roe"}):0===m.length&&Object(l.jsxs)("div",{className:"alert alert-danger",children:["No hay resultados: ",t]}),m.map((function(e){return Object(l.jsx)(d,Object(j.a)({},e),e.id)}))]})]})]})},g=function(){var e=Object(i.h)().heroeId,r=Object(i.g)(),a=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u.find((function(r){return r.id===e}))}(e)}),[e]);if(!a)return Object(l.jsx)(i.a,{to:"/"});var t=a.id,s=a.superhero,n=a.publisher,o=a.alter_ego,h=a.first_appearance,j=a.characters,d="./assets/".concat(t,".jpg");return Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("img",{src:d,alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(l.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(l.jsx)("h3",{children:s}),Object(l.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("b",{children:"Alter ego: "}),o]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("b",{children:"Publisher: "}),n]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("b",{children:"First appearance: "}),h]})]}),Object(l.jsx)("h5",{className:"mt-3",children:"Characters"}),Object(l.jsx)("p",{children:j}),Object(l.jsx)("button",{className:"btn btn-outline-info",onClick:function(){r(-1)},children:"Regresar"})]})]})},_=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"marvel",element:Object(l.jsx)(p,{})}),Object(l.jsx)(i.b,{path:"dc",element:Object(l.jsx)(m,{})}),Object(l.jsx)(i.b,{path:"search",element:Object(l.jsx)(C,{})}),Object(l.jsx)(i.b,{path:"hero/:heroeId",element:Object(l.jsx)(g,{})}),Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(p,{})})]})})]})},N=function(){return Object(l.jsx)(n.a,{basename:"/heroes-app",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/login",element:Object(l.jsx)(o,{})}),Object(l.jsx)(i.b,{path:"/*",element:Object(l.jsx)(_,{})})]})})},M=function(){return Object(l.jsx)(N,{})};s.a.render(Object(l.jsx)(M,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.20bdfcda.chunk.js.map