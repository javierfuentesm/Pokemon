(this.webpackJsonpruna=this.webpackJsonpruna||[]).push([[0],{132:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),s=(t(76),t(19)),o=t(24),m=t(32),i=t(23),u=t(16),p=t.n(u),d=t(22),E=t(11),b=t(141),h=t(142),f=t(143),g=t(144),v=t(133),k=t(134),w=t(135),O=t(136),y=t(137),j=t(138),N=t(139),x=t(140),C=t(52),P=t(48),S=function(e){var a=e.text,t=e.name,n=e.url2,l=e.order,c={url:n,button:P.ShareButtonRectangle,buttons:[{network:"Twitter",icon:C.b},{network:"Facebook",icon:C.a}],text:"Aprend\xed cosas interesantes sobre ".concat(t),longtext:"Aqu\xed te comparto algunos de los datos m\xe1s interesantes , ".concat(t," en el Pokedex es el n\xfamero ").concat(l," y ").concat(a)};return r.a.createElement(P.ShareBlockStandard,c)},_=t(64),M=t(65),D=t(69),A=t(66),B=t(70),F=t(49),q=function(e){function a(){return Object(_.a)(this,a),Object(D.a)(this,Object(A.a)(a).apply(this,arguments))}return Object(B.a)(a,e),Object(M.a)(a,[{key:"render",value:function(){return r.a.createElement(F.FacebookProvider,{appId:"717589285046812"},r.a.createElement(F.Like,{href:this.props.url,colorScheme:"dark",showFaces:!0}))}}]),a}(n.Component),L=function(e){var a=e.url,t=Object(n.useState)(null),l=Object(E.a)(t,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement(v.a,{key:c.id,className:"shadow p-3 mb-5 bg-white rounded"},r.a.createElement("center",null,r.a.createElement(k.a,null,r.a.createElement("h1",null,c.name.replace(/^./,c.name[0].toUpperCase()))),r.a.createElement(w.a,{top:!0,width:"100%",src:c.sprites.front_default,alt:c.name}),r.a.createElement(O.a,null,r.a.createElement(y.a,null,r.a.createElement("h3",null,"Pokem\xf3n n\xfamero"," ",c.id)),r.a.createElement(j.a,null,r.a.createElement("h5",null,"Altura")),r.a.createElement(N.a,null,c.height/10," ","metros"),r.a.createElement(j.a,null,r.a.createElement("h5",null,"Peso")),r.a.createElement(N.a,null,c.weight/10," ","kilos"),r.a.createElement(s.b,{className:"btn btn-primary",role:"button",to:"pokemon/".concat(c.id)},"M\xe1s detalles")),r.a.createElement(x.a,{className:"text-muted"},r.a.createElement(q,{url:a}),r.a.createElement(S,{url2:a,text:"este pokemon tiene un peso de ".concat(c.weight/10," kilos con una altura de ").concat(c.height/10," metros"),name:c.name,order:c.order})))):"Cargando  informacion")},U=function(){var e=Object(n.useState)(0),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(E.a)(c,2),o=s[0],m=s[1],i=function(){var e=Object(d.a)(p.a.mark((function e(){var a,n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t){e.next=11;break}return e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,m(n.results),l(n.next),e.next=20;break;case 11:if(!t){e.next=20;break}return e.next=14,fetch(t);case 14:return r=e.sent,e.next=17,r.json();case 17:c=e.sent,m(c.results),l(c.next);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement(b.a,null,r.a.createElement(h.a,null,o.map((function(e){return r.a.createElement(f.a,{key:e.name,md:4},r.a.createElement("hr",null),r.a.createElement(L,{url:e.url}),r.a.createElement("hr",null))}))),r.a.createElement(h.a,null,r.a.createElement(g.a,{onClick:function(){return i()},color:"danger",size:"lg",block:!0},"Cargar m\xe1s")),r.a.createElement("hr",null))},T={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},H=function(e){var a=e.match,t=Object(n.useState)(null),l=Object(E.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(null),m=Object(E.a)(o,2),i=m[0],u=m[1],h=Object(n.useState)(null),f=Object(E.a)(h,2),g=f[0],v=f[1],k=Object(n.useState)(null),w=Object(E.a)(k,2),O=w[0],y=w[1],j=Object(n.useState)(null),N=Object(E.a)(j,2),x=N[0],C=N[1],P=a.params.id;return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var a,t,n,r,l,c,o,m,i,d,E,b,h;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(P));case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.next=8,fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(P));case 8:return n=e.sent,e.next=11,n.json();case 11:r=e.sent,l=t.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),c="",r.flavor_text_entries.some((function(e){"es"===e.language.name&&(c=e.flavor_text)})),"",o="".hp,m="".attack,i="".defense,d="".speed,E="".specialAttack,b="".specialDefense,t.stats.map((function(e){switch(e.stat.name){case"hp":o=e.base_stat;break;case"attack":m=e.base_stat;break;case"defense":i=e.base_stat;break;case"speed":d=e.base_stat;break;case"special-attack":E=e.base_stat;break;case"special-defense":b=e.base_stat}})),h=r.egg_groups.map((function(e){return e.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),C({hp:o,attack:m,defense:i,speed:d,specialAttack:E,specialDefense:b}),y(h),u(l),v(c),s(t);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement(b.a,null,r.a.createElement("hr",null),r.a.createElement("div",{className:"shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4 shadow p-3 mb-5 bg-white rounded"},r.a.createElement("img",{src:c.sprites.front_default,className:"card-img",alt:c.name})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement("h1",null,"N.\xba ".concat(c.id," "),c.name.replace(/^./,c.name[0].toUpperCase())),c.types.map((function(e){return r.a.createElement("span",{key:e.type.name,className:"badge badge-pill mr-1",style:{backgroundColor:"#".concat(T[e.type.name]),color:"white"}},e.type.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))}))),r.a.createElement("p",{className:"card-text"},g),r.a.createElement("small",{className:"text-muted"},"HP"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.hp,"%"),backgroundColor:"#008000"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Ataque"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.attack,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Defensa"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.defense,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Ataque Especial"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.specialAttack,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Defensa Especial"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.specialDefense,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Velocidad"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.speed,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement("h3",null,"Mas informaci\xf3n"),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Altura",r.a.createElement("span",{className:"badge badge-primary badge-pill"},"".concat(c.height," metros"))),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Peso",r.a.createElement("span",{className:"badge badge-primary badge-pill"},"".concat(c.weight," kilos"))),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Habilidades",r.a.createElement("span",{className:"badge badge-info badge-pill"},i)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Grupos de huevos a los que pertenece",r.a.createElement("i",{className:"fas fa-egg"}),r.a.createElement("span",{className:"badge badge-warning badge-pill"},O))))))))):"Cargando  informaci\xf3n")},K=function(){var e=Math.ceil(1),a=Math.floor(807);return Math.floor(Math.random()*(a-e+1))+e},R=function(){var e=Object(i.c)((function(e){return e.myPokemons})),a=Object(i.b)(),t=Object(n.useState)(null),l=Object(E.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(0),m=Object(E.a)(o,2),u=m[0],x=m[1],C=function(){var e=Object(d.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(K()));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,s(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){C()}),[e]);var P=function(e){var t=function(){var e=Math.ceil(1),a=Math.floor(3);return Math.floor(Math.random()*(a-e+1))+e}();1===t?(alert("Felicidades has capturado un ".concat(c.name)),a({type:"SET_MY_POKEMONS",payload:e}),x(0)):2===t?alert("Parece que se ha salido de la pokebola intentalo de nuevo"):3===t&&(alert("Parece que se ha huido"),x(0),C())};return r.a.createElement(b.a,null,r.a.createElement("hr",null),c?r.a.createElement(h.a,null,r.a.createElement(f.a,{sm:4},r.a.createElement(v.a,{key:c.id,className:"shadow p-3 mb-5 bg-white rounded"},r.a.createElement("center",null,r.a.createElement(k.a,null,r.a.createElement("h1",null,c.name.replace(/^./,c.name[0].toUpperCase()))),r.a.createElement(w.a,{top:!0,width:"100%",src:c.sprites.front_default,alt:c.name}),r.a.createElement(O.a,null,r.a.createElement(y.a,null,r.a.createElement("h3",null,"Pokem\xf3n n\xfamero ".concat(c.id))),r.a.createElement(j.a,null,r.a.createElement("h5",null,"Altura")),r.a.createElement(N.a,null,"".concat(c.height/10," metros")),r.a.createElement(j.a,null,r.a.createElement("h5",null,"Peso")),r.a.createElement(N.a,null,"".concat(c.weight/10," kilos")),"Has dado ".concat(u," bocadillos"),r.a.createElement(N.a,null))))),r.a.createElement(f.a,null,r.a.createElement(v.a,{className:"shadow p-3 mb-5 bg-white rounded"},r.a.createElement(y.a,null,r.a.createElement("h1",null,"Un ".concat(c.name.replace(/^./,c.name[0].toUpperCase())," salvaje ha aparecido"))),r.a.createElement(N.a,null,"Parece que has tenido suerte el d\xeda de hoy.")),r.a.createElement(v.a,{className:"shadow p-5 mb-5 bg-white rounded"},r.a.createElement(y.a,null,r.a.createElement("h3",null,"\xbfQu\xe9 deseas hacer?")),r.a.createElement(N.a,null,r.a.createElement(g.a,{color:"success",onClick:function(){return P(c)}},"Capturar"),"\xa0",r.a.createElement(g.a,{color:"danger",onClick:function(){return C()}},"Huir"),"\xa0",r.a.createElement(g.a,{color:"warning",onClick:function(){return alert("Le has dado un cadillo"),void x(u+1)}},"Dar bocadillo"))))):"Cargando  informacion")},Y=t(145),z=t(146),I=function(){var e=Object(i.c)((function(e){return e.myPokemons})),a=Object(n.useState)(e),t=Object(E.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),m=Object(E.a)(o,2),u=m[0],p=m[1],d=Object(i.b)();Object(n.useEffect)((function(){c(e)}),[e]);return r.a.createElement(b.a,null,r.a.createElement("hr",null),r.a.createElement(h.a,null,r.a.createElement(v.a,{className:"shadow p-3 mb-5 bg-white rounded",body:!0},r.a.createElement(y.a,null,r.a.createElement("h2",null,"Mis Pok\xe9mon")),r.a.createElement(N.a,null,"Aqu\xe1 podr\xe1s visualizar los Pok\xe9mon que has capturado"))),r.a.createElement(h.a,null,r.a.createElement(f.a,{sm:12},e.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"shadow p-3 mb-5 bg-white rounded",body:!0},r.a.createElement("h4",null,"Realiza una b\xfasqueda dentro de los Pok\xe9mon que has capturado"),r.a.createElement(N.a,null,r.a.createElement("input",{className:"form-control",type:"text",value:u,placeholder:"Search","aria-label":"B\xfasqueda",onChange:function(a){p(a.target.value);var t=e;t=t.filter((function(e){return-1!==e.name.toLowerCase().search(a.target.value.toLowerCase())})),c(t)}}))),r.a.createElement(Y.a,null,l.map((function(e){return r.a.createElement(z.a,{key:e,className:"list-group-item d-flex justify-content-between align-items-center"},r.a.createElement("img",{src:e.sprites.front_default,alt:e.name,style:{maxWidth:"10vh"}}),r.a.createElement("h3",null,e.name.replace(/^./,e.name[0].toUpperCase())),r.a.createElement(s.b,{className:"btn btn-primary",to:"pokemon/".concat(e.id)},"M\xe1s detalles"),r.a.createElement(g.a,{onClick:function(){return d({type:"DELETE_MY_POKEMONS",payload:e})},color:"danger"},"Liberar \ud83d\ude22"))})))):r.a.createElement(v.a,{className:"shadow p-3 mb-5 bg-white rounded",body:!0},r.a.createElement("h4",null,"Parece que no has capturado a ning\xfan Pok\xe9mon\ud83d\ude2d\ud83d\ude2d\ud83d\ude2d\ud83d\ude2d")))))},W=t(147),J=t(148),V=t(149),X=t(152),G=t(150),Q=t(151),$=function(){var e=Object(n.useState)(!0),a=Object(E.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(W.a,{color:"danger",variant:"light",expand:"lg"},r.a.createElement(J.a,{className:"text-white ; mr-auto",href:"/"},"Pok\xe9mons"),r.a.createElement(V.a,{onClick:function(){return l(!t)},className:"bg-info"}),r.a.createElement(X.a,{isOpen:!t,navbar:!0},r.a.createElement(G.a,{navbar:!0},r.a.createElement(Q.a,null,r.a.createElement(s.c,{className:"nav-link",to:"/"},r.a.createElement("p",{className:"text-white"},"Pok\xe9dex"))),r.a.createElement(Q.a,null,r.a.createElement(s.c,{className:"nav-link",to:"/safari"},r.a.createElement("p",{className:"text-white"},"Safari"))),r.a.createElement(Q.a,null,r.a.createElement(s.c,{className:"nav-link",to:"/pc"},r.a.createElement("p",{className:"text-white"},"Mi PC")))))))},Z=t(68);function ee(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ae(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ee(Object(t),!0).forEach((function(a){Object(Z.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:[],myPokemons:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return ae({},e,{user:a.payload});case"SET_MY_POKEMONS":return ae({},e,{myPokemons:e.myPokemons.concat(a.payload)});case"DELETE_MY_POKEMONS":return ae({},e,{myPokemons:e.myPokemons.filter((function(e){return e.id!==a.payload.id}))});default:return e}},ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.b,re=Object(m.c)(te,ne()),le=function(){return r.a.createElement(i.a,{store:re},r.a.createElement(s.a,null,r.a.createElement($,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(U,null)),r.a.createElement(o.a,{exact:!0,path:"/safari",component:R}),r.a.createElement(o.a,{exact:!0,path:"/pokemon/:id",component:H}),r.a.createElement(o.a,{exact:!0,path:"/pc",component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(131);c.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,a,t){e.exports=t(132)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.442abdc8.chunk.js.map