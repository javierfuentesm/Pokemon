(this.webpackJsonpruna=this.webpackJsonpruna||[]).push([[0],{132:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),s=(t(76),t(19)),o=t(24),m=t(32),i=t(23),u=t(16),p=t.n(u),d=t(22),b=t(11),E=t(141),f=t(142),h=t(143),g=t(144),v=t(133),O=t(134),w=t(135),k=t(136),y=t(137),j=t(138),N=t(139),x=t(140),P=t(53),C=t(49),S=function(e){var a=e.text,t=e.name,n=e.url2,l=e.order,c={url:n,button:C.ShareButtonRectangle,buttons:[{network:"Twitter",icon:P.b},{network:"Facebook",icon:P.a}],text:"Aprend\xed cosas interesantes sobre ".concat(t),longtext:"Aqu\xed te comparto algunos de los datos m\xe1s interesantes , ".concat(t," en el Pokedex es el n\xfamero ").concat(l," y ").concat(a)};return r.a.createElement(C.ShareBlockStandard,c)},_=t(65),D=t(66),M=t(69),A=t(67),q=t(70),B=t(50),F=function(e){function a(){return Object(_.a)(this,a),Object(M.a)(this,Object(A.a)(a).apply(this,arguments))}return Object(q.a)(a,e),Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement(B.FacebookProvider,{appId:"717589285046812"},r.a.createElement(B.Like,{href:this.props.url,colorScheme:"dark",showFaces:!0}))}}]),a}(n.Component),L=function(e){var a=e.url,t=Object(n.useState)(null),l=Object(b.a)(t,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement(v.a,{key:c.id,className:"shadow p-3 mb-5 bg-white rounded"},r.a.createElement("center",null,r.a.createElement(O.a,null,r.a.createElement("h1",null,c.name.replace(/^./,c.name[0].toUpperCase()))),r.a.createElement(w.a,{top:!0,width:"100%",src:c.sprites.front_default,alt:c.name}),r.a.createElement(k.a,null,r.a.createElement(y.a,null,r.a.createElement("h3",null,"Pokem\xf3n n\xfamero"," ",c.id)),r.a.createElement(j.a,null,r.a.createElement("h5",null,"Altura")),r.a.createElement(N.a,null,c.height/10," ","metros"),r.a.createElement(j.a,null,r.a.createElement("h5",null,"Peso")),r.a.createElement(N.a,null,c.weight/10," ","kilos"),r.a.createElement(s.b,{className:"btn btn-primary",role:"button",to:"pokemon/".concat(c.id)},"M\xe1s detalles")),r.a.createElement(x.a,{className:"text-muted"},r.a.createElement(F,{url:a}),r.a.createElement(S,{url2:a,text:"este pokemon tiene un peso de ".concat(c.weight/10," kilos con una altura de ").concat(c.height/10," metros"),name:c.name,order:c.order})))):"Cargando  informacion")},U=function(){var e=Object(n.useState)(0),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(b.a)(c,2),o=s[0],m=s[1],i=function(){var e=Object(d.a)(p.a.mark((function e(){var a,n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t){e.next=11;break}return e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,m(n.results),l(n.next),e.next=20;break;case 11:if(!t){e.next=20;break}return e.next=14,fetch(t);case 14:return r=e.sent,e.next=17,r.json();case 17:c=e.sent,m(c.results),l(c.next);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement(E.a,null,r.a.createElement(f.a,null,o.map((function(e){return r.a.createElement(h.a,{key:e.name,md:4},r.a.createElement("hr",null),r.a.createElement(L,{url:e.url}),r.a.createElement("hr",null))}))),r.a.createElement(f.a,null,r.a.createElement(g.a,{onClick:function(){return i()},color:"danger",size:"lg",block:!0},"Cargar m\xe1s")),r.a.createElement("hr",null))},T={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},I=function(e){var a=e.match,t=Object(n.useState)(null),l=Object(b.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(null),m=Object(b.a)(o,2),i=m[0],u=m[1],f=Object(n.useState)(null),h=Object(b.a)(f,2),g=h[0],v=h[1],O=Object(n.useState)(null),w=Object(b.a)(O,2),k=w[0],y=w[1],j=Object(n.useState)(null),N=Object(b.a)(j,2),x=N[0],P=N[1],C=a.params.id;return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var a,t,n,r,l,c,o,m,i,d,b,E,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(C));case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.next=8,fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(C));case 8:return n=e.sent,e.next=11,n.json();case 11:r=e.sent,l=t.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),c="",r.flavor_text_entries.some((function(e){"es"===e.language.name&&(c=e.flavor_text)})),"",o="".hp,m="".attack,i="".defense,d="".speed,b="".specialAttack,E="".specialDefense,t.stats.map((function(e){switch(e.stat.name){case"hp":o=e.base_stat;break;case"attack":m=e.base_stat;break;case"defense":i=e.base_stat;break;case"speed":d=e.base_stat;break;case"special-attack":b=e.base_stat;break;case"special-defense":E=e.base_stat}})),f=r.egg_groups.map((function(e){return e.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),P({hp:o,attack:m,defense:i,speed:d,specialAttack:b,specialDefense:E}),y(f),u(l),v(c),s(t);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement(E.a,null,r.a.createElement("hr",null),r.a.createElement("div",{className:"shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4 shadow p-3 mb-5 bg-white rounded"},r.a.createElement("img",{src:c.sprites.front_default,className:"card-img",alt:c.name})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement("h1",null,"N.\xba ".concat(c.id," "),c.name.replace(/^./,c.name[0].toUpperCase())),c.types.map((function(e){return r.a.createElement("span",{key:e.type.name,className:"badge badge-pill mr-1",style:{backgroundColor:"#".concat(T[e.type.name]),color:"white"}},e.type.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))}))),r.a.createElement("p",{className:"card-text"},g),r.a.createElement("small",{className:"text-muted"},"HP"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.hp,"%"),backgroundColor:"#008000"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Ataque"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.attack,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Defensa"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.defense,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Ataque Especial"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.specialAttack,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Defensa Especial"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.specialDefense,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("small",{className:"text-muted"},"Velocidad"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(x.speed,"%"),backgroundColor:"primary"},"aria-label":"Save","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})))))),r.a.createElement("div",{className:"shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("h3",null,"Mas informaci\xf3n"),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Altura",r.a.createElement("span",{className:"badge badge-primary badge-pill"},"".concat(c.height," metros"))),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Peso",r.a.createElement("span",{className:"badge badge-primary badge-pill"},"".concat(c.weight," kilos"))),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Habilidades",r.a.createElement("span",{className:"badge badge-info badge-pill"},i)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Grupos de huevos a los que pertenece",r.a.createElement("i",{className:"fas fa-egg"}),r.a.createElement("span",{className:"badge badge-warning badge-pill"},k)))))):"Cargando  informaci\xf3n")},H=t(39);function K(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var R=function(){var e=Math.ceil(1),a=Math.floor(807);return Math.floor(Math.random()*(a-e+1))+e},Y=function(){var e=Object(i.c)((function(e){return e.myPokemons})),a=Object(i.b)(),t=Object(n.useState)(null),l=Object(b.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(0),m=Object(b.a)(o,2),u=m[0],x=m[1],P=function(){var e=Object(d.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(R()));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,s(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){P()}),[e]);var C=function(e){var t=function(){var e=Math.ceil(1),a=Math.floor(3);return Math.floor(Math.random()*(a-e+1))+e}();if(1===t){alert("Felicidades has capturado un ".concat(c.name));var n=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?K(Object(t),!0).forEach((function(a){Object(H.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},e,{uniqueId:Date.now()});a({type:"SET_MY_POKEMONS",payload:n}),x(0)}else 2===t?alert("Parece que se ha salido de la pokebola intentalo de nuevo"):3===t&&(alert("Parece que se ha huido"),x(0),P())};return r.a.createElement(E.a,null,r.a.createElement("hr",null),c?r.a.createElement(f.a,null,r.a.createElement(h.a,{sm:4},r.a.createElement(v.a,{key:c.id,className:"shadow p-3 mb-5 bg-white rounded"},r.a.createElement("center",null,r.a.createElement(O.a,null,r.a.createElement("h1",null,c.name.replace(/^./,c.name[0].toUpperCase()))),r.a.createElement(w.a,{top:!0,width:"100%",src:c.sprites.front_default,alt:c.name}),r.a.createElement(k.a,null,r.a.createElement(y.a,null,r.a.createElement("h3",null,"Pokem\xf3n n\xfamero ".concat(c.id))),r.a.createElement(j.a,null,r.a.createElement("h5",null,"Altura")),r.a.createElement(N.a,null,"".concat(c.height/10," metros")),r.a.createElement(j.a,null,r.a.createElement("h5",null,"Peso")),r.a.createElement(N.a,null,"".concat(c.weight/10," kilos")),"Has dado ".concat(u," bocadillos"),r.a.createElement(N.a,null))))),r.a.createElement(h.a,null,r.a.createElement(v.a,{className:"shadow p-3 mb-5 bg-white rounded"},r.a.createElement(y.a,null,r.a.createElement("h1",null,"Un ".concat(c.name.replace(/^./,c.name[0].toUpperCase())," salvaje ha aparecido"))),r.a.createElement(N.a,null,"Parece que has tenido suerte el d\xeda de hoy.")),r.a.createElement(v.a,{className:"shadow p-5 mb-5 bg-white rounded"},r.a.createElement(y.a,null,r.a.createElement("h3",null,"\xbfQu\xe9 deseas hacer?")),r.a.createElement(N.a,null,r.a.createElement(g.a,{color:"success",onClick:function(){return C(c)}},"Capturar"),"\xa0",r.a.createElement(g.a,{color:"danger",onClick:function(){return P()}},"Huir"),"\xa0",r.a.createElement(g.a,{color:"warning",onClick:function(){return alert("Le has dado un cadillo"),void x(u+1)}},"Dar bocadillo"))))):"Cargando  informacion")},z=t(145),W=t(146),J=function(){var e=Object(i.c)((function(e){return e.myPokemons})),a=Object(n.useState)(e),t=Object(b.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),m=Object(b.a)(o,2),u=m[0],p=m[1],d=Object(i.b)();Object(n.useEffect)((function(){c(e)}),[e]);return r.a.createElement(E.a,null,r.a.createElement("hr",null),r.a.createElement(f.a,null,r.a.createElement(v.a,{className:"shadow p-3 mb-5 bg-white rounded",body:!0},r.a.createElement(y.a,null,r.a.createElement("h2",null,"Mis Pok\xe9mon")),r.a.createElement(N.a,null,"Aqu\xe1 podr\xe1s visualizar los Pok\xe9mon que has capturado"))),r.a.createElement(f.a,null,r.a.createElement(h.a,{sm:12},e.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"shadow p-3 mb-5 bg-white rounded",body:!0},r.a.createElement("h4",null,"Realiza una b\xfasqueda dentro de los Pok\xe9mon que has capturado"),r.a.createElement(N.a,null,r.a.createElement("input",{className:"form-control",type:"text",value:u,placeholder:"Search","aria-label":"B\xfasqueda",onChange:function(a){p(a.target.value);var t=e;t=t.filter((function(e){return-1!==e.name.toLowerCase().search(a.target.value.toLowerCase())})),c(t)}}))),r.a.createElement(z.a,null,l.map((function(e){return r.a.createElement(W.a,{key:e,className:"list-group-item d-flex justify-content-between align-items-center"},r.a.createElement("img",{src:e.sprites.front_default,alt:e.name,style:{maxWidth:"10vh"}}),r.a.createElement("h3",null,e.name.replace(/^./,e.name[0].toUpperCase())),r.a.createElement(s.b,{className:"btn btn-primary",to:"pokemon/".concat(e.id)},"M\xe1s detalles"),r.a.createElement(g.a,{onClick:function(){return d({type:"DELETE_MY_POKEMONS",payload:e})},color:"danger"},"Liberar \ud83d\ude22"))})))):r.a.createElement(v.a,{className:"shadow p-3 mb-5 bg-white rounded",body:!0},r.a.createElement("h4",null,"Parece que no has capturado a ning\xfan Pok\xe9mon\ud83d\ude2d\ud83d\ude2d\ud83d\ude2d\ud83d\ude2d")))))},V=t(147),X=t(148),G=t(149),Q=t(152),$=t(150),Z=t(151),ee=function(){var e=Object(n.useState)(!0),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(V.a,{color:"danger",variant:"light",expand:"lg"},r.a.createElement(X.a,{className:"text-white ; mr-auto",href:"/"},"Pok\xe9mons"),r.a.createElement(G.a,{onClick:function(){return l(!t)},className:"bg-info"}),r.a.createElement(Q.a,{isOpen:!t,navbar:!0},r.a.createElement($.a,{navbar:!0},r.a.createElement(Z.a,null,r.a.createElement(s.c,{className:"nav-link",to:"/"},r.a.createElement("a",{className:"text-white"},"Pok\xe9dex"))),r.a.createElement(Z.a,null,r.a.createElement(s.c,{className:"nav-link",to:"/safari"},r.a.createElement("a",{className:"text-white"},"Safari"))),r.a.createElement(Z.a,null,r.a.createElement(s.c,{className:"nav-link",to:"/pc"},r.a.createElement("a",{className:"text-white"},"Mi PC")))))))};function ae(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function te(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ae(Object(t),!0).forEach((function(a){Object(H.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:[],myPokemons:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return te({},e,{user:a.payload});case"SET_MY_POKEMONS":return te({},e,{myPokemons:e.myPokemons.concat(a.payload)});case"DELETE_MY_POKEMONS":return te({},e,{myPokemons:e.myPokemons.filter((function(e){return e.uniqueId!==a.payload.uniqueId}))});default:return e}},re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.b,le=Object(m.c)(ne,re()),ce=function(){return r.a.createElement(i.a,{store:le},r.a.createElement(s.a,null,r.a.createElement(ee,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(U,null)),r.a.createElement(o.a,{exact:!0,path:"/safari",component:Y}),r.a.createElement(o.a,{exact:!0,path:"/pokemon/:id",component:I}),r.a.createElement(o.a,{exact:!0,path:"/pc",component:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(131);c.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,a,t){e.exports=t(132)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.5c41aaf7.chunk.js.map