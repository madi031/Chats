(this.webpackJsonpchats=this.webpackJsonpchats||[]).push([[0],{131:function(e,t){},134:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),o=a(8),i=a.n(o),l=a(13),s=a(20),u=a(81),m=a(82),d=a.n(m),p=function(e,t){return{type:"ADD_CHANNEL",payload:{id:e,name:t}}},f=function(e){return{type:"SET_CURRENT_CHANNEL",payload:e}},E=function(e,t,a,n){return{type:"POST_MESSAGE",payload:{id:t,message:a,from:e,topicId:n}}},h=a(41),b=a(11),g={id:1,name:"general"},v=Object(s.c)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{channels:[g],currentChannel:g,chats:[],user:{name:""}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CHANNEL":return Object(b.a)(Object(b.a)({},e),{},{channels:[].concat(Object(h.a)(e.channels),[t.payload])});case"GET_CHANNELS":var a=[].concat(Object(h.a)(e.channels),[{id:1,name:"general"},{id:2,name:"personal"}]);return Object(b.a)(Object(b.a)({},e),{},{channels:a});case"GET_CHATS":var n={1:[{id:1,from:"Mathioli",topicId:1,message:"Hello"},{id:2,from:"Sruthi",topicId:1,message:"Hi"}],2:[{id:1,from:"Mathioli",topicId:2,message:"Oui"},{id:2,from:"Sruthi",topicId:2,message:"Hi"}]};return Object(b.a)(Object(b.a)({},e),{},{chats:n});case"POST_MESSAGE":var c=t.payload.topicId,r=t.payload.message,o=t.payload.from,i=t.payload.id,l=Object(b.a)({},e.chats);return l[c]||(l[c]=[]),l[c]=[].concat(Object(h.a)(l[c]),[{id:i,from:o,topicId:c,message:r}]),Object(b.a)(Object(b.a)({},e),{},{chats:l});case"SET_CURRENT_CHANNEL":var s=e.channels.filter((function(e){return e.id===t.payload}));return Object(b.a)(Object(b.a)({},e),{},{currentChannel:s[0]});case"SET_USER":return Object(b.a)(Object(b.a)({},e),{},{user:Object(b.a)(Object(b.a)({},e.user),{},{name:t.payload.userName})});default:return e}}}),N=function(e){return function(t){return function(a){console.log("dispatching",a);var n=t(a);return console.log("next state",e.getState()),n}}},y=function(){if(!n){var e="localhost"===window.location.hostname?":3001":"https://madi-chats.herokuapp.com/";(n=d()(e)).on("chat message",(function(e){var t=e.id,a=e.message,n=e.topicId,c=e.userName;T(c,t,a,n)})),n.on("new topic",(function(e){var t=e.id,a=e.name;S(t,a)}))}return Object(s.d)(v,Object(s.a)(N,u.a))}(),O=function(e){n.emit("new topic",e)},S=function(e,t){y.dispatch(p(e,t))},j=function(e){n.emit("chat message",e)},T=function(e,t,a,n){y.dispatch(E(e,t,a,n))},C=(a(134),a(171)),k=a(166),w=a(15),I=a(168),_=a(172),A=Object(l.b)((function(e){return{userName:e.reducer.user.name}}),(function(e){return{setUser:function(){return e({type:"SET_USER",payload:{userName:"User_".concat((new Date).getTime().toString(36))}})},updateUser:function(t){return e(function(e){return{type:"SET_USER",payload:{userName:e}}}(t))}}}))((function(e){var t=Object(c.useState)(""),a=Object(w.a)(t,2),n=a[0],o=a[1];Object(c.useEffect)((function(){return e.setUser(),i(),document.querySelector(".backdrop").addEventListener("click",s),function(){document.querySelector(".backdrop").removeEventListener("click")}}),[]),Object(c.useEffect)((function(){o(e.userName)}),[e.userName]);var i=function(){document.querySelector(".backdrop").style.display="flex"},l=function(){document.querySelector(".backdrop").style.display="none"},s=function(e){e.target===document.querySelector(".backdrop")&&l()};return r.a.createElement("div",{className:"chatHeader"},r.a.createElement("div",{className:"backdrop"},r.a.createElement("div",{className:"modal"},r.a.createElement(_.a,{autoFocus:!0,className:"userNameInput",label:"Enter your name here...",value:n,onChange:function(e){o(e.target.value)}}),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){0!==n.length&&e.updateUser(n),l()}},"OK"))),r.a.createElement("h3",null,"Chats"),r.a.createElement("h4",null,"Hello, \xa0",r.a.createElement("span",{onClick:i},e.userName)),r.a.createElement("p",null,"(Click the username to update it)"))})),H=a(167),L=a(169),q=a(173),x=(a(51),Object(l.b)((function(e){return{chats:e.reducer.chats,selectedTopic:e.reducer.currentChannel}}),(function(e){return{getChats:function(){return e({type:"GET_CHATS"})}}}))((function(e){var t=Object(c.useState)([]),a=Object(w.a)(t,2),n=a[0],o=a[1];return Object(c.useEffect)((function(){var t=e.chats[e.selectedTopic.id]||[];o(t)}),[e.chats,e.selectedTopic]),r.a.createElement(H.a,{"aria-label":"Chat messages",className:"chatText",dense:!0},0===n.length&&r.a.createElement(L.a,null,r.a.createElement(q.a,{className:"noChats"},"This is the first conversation in this topic")),n.map((function(e){return r.a.createElement(L.a,{key:e.id},r.a.createElement(q.a,null,r.a.createElement("span",{className:"sender"},e.from),"\xa0",e.message))})))}))),U=a(170),B=a(83),M=a.n(B),R=Object(l.b)((function(e){return{selectedTopicId:e.reducer.currentChannel.id,userName:e.reducer.user.name}}),(function(e){return{postMessage:function(t,a,n){return e(function(e,t,a){return function(n){var c="MSG_".concat((new Date).getTime().toString(36));j({id:c,message:t,topicId:a,userName:e}),n(E(e,c,t,a))}}(n,a,t))}}}))((function(e){var t=Object(c.useState)(""),a=Object(w.a)(t,2),n=a[0],o=a[1];return r.a.createElement("div",{className:"footerItemsWrapper"},r.a.createElement(_.a,{className:"messageInput",label:"Enter message here...",multiline:!0,variant:"filled",value:n,onChange:function(e){o(e.target.value)}}),r.a.createElement(U.a,{"aria-label":"send message",color:"primary",onClick:function(){e.postMessage(e.selectedTopicId,n,e.userName),o("")}},r.a.createElement(M.a,null)))})),D=a(84),G=a.n(D),W=Object(l.b)((function(e){return{topics:e.reducer.channels,selectedTopic:e.reducer.currentChannel}}),(function(e){return{addNewTopic:function(t){return e(function(e){return function(t){var a="TOPIC_".concat((new Date).getTime().toString(36));O({id:a,name:e}),t(p(a,e)),t(f(a))}}(t))},getTopics:function(){return e({type:"GET_CHANNELS"})},setCurrentTopic:function(t){return e(f(t))}}}))((function(e){var t=Object(c.useState)([]),a=Object(w.a)(t,2),n=a[0],o=a[1],i=Object(c.useState)(""),l=Object(w.a)(i,2),s=l[0],u=l[1];Object(c.useEffect)((function(){return document.querySelector(".topicBackdrop").addEventListener("click",d),function(){document.querySelector(".topicBackdrop").removeEventListener("click")}}),[]),Object(c.useEffect)((function(){o(e.topics)}),[e.topics]);var m=function(){document.querySelector(".topicBackdrop").style.display="none"},d=function(e){e.target===document.querySelector(".topicBackdrop")&&m()};return r.a.createElement("div",null,r.a.createElement("div",{className:"topicBackdrop"},r.a.createElement("div",{className:"modal"},r.a.createElement(_.a,{autoFocus:!0,className:"topicInput",label:"Enter new topic name here...",value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){0!==s.length&&e.addNewTopic(s),m()}},"OK"))),r.a.createElement(H.a,{className:"chatText",component:"nav",dense:!0,"aria-label":"Chat topics"},r.a.createElement(L.a,null,r.a.createElement(q.a,{className:"topicTitle"},"Topics"),r.a.createElement(U.a,{"aria-label":"Add new topic",className:"newTopicButton",color:"default",onClick:function(){u(""),document.querySelector(".topicBackdrop").style.display="flex"}},r.a.createElement(G.a,null))),n.map((function(t){return r.a.createElement(L.a,{className:"topics ".concat(e.selectedTopic.id===t.id?"activeTopic":""),key:t.id,button:!0,onClick:function(){return e.setCurrentTopic(t.id)}},r.a.createElement(q.a,{primary:t.name}))}))))}));a(136);var P=function(e){return r.a.createElement("div",{className:"root"},r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(k.a,{className:"paper"},r.a.createElement(A,null))),r.a.createElement(C.a,{item:!0,xs:3,style:{paddingRight:0}},r.a.createElement(k.a,{className:"paper topicWindow"},r.a.createElement(W,null))),r.a.createElement(C.a,{item:!0,xs:9,style:{paddingLeft:0}},r.a.createElement(k.a,{className:"paper chatWindow"},r.a.createElement(x,null))),r.a.createElement(C.a,{className:"footer",item:!0,xs:12},r.a.createElement(k.a,{className:"paper messageInputContainer"},r.a.createElement(R,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:y},r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,a){},95:function(e,t,a){e.exports=a(137)}},[[95,1,2]]]);
//# sourceMappingURL=main.48fbce0a.chunk.js.map