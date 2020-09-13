(this["webpackJsonprenault-order-status"]=this["webpackJsonprenault-order-status"]||[]).push([[0],{100:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(99),a(21)),s=(a(100),a(43)),l=a(10),u=r.a.createContext({loading:!1,useMock:!1,carData:[],setCarData:function(e){},setLoading:function(e){},setUseMock:function(e){}}),m=r.a.createContext({open:!1,message:"Oops! Something happened",setOpen:function(){},setMessage:function(){}}),d=a(162),p=a(124),f=a(164),g=a(159),b=Object(g.a)({root:{position:"fixed",bottom:0,background:"#FFF",borderTop:"1px solid gray",padding:".5rem 0",textAlign:"center"}}),E=function(){var e=b();return r.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center",className:e.root},r.a.createElement(p.a,{variant:"caption"},"This is not an official service. Not used for commercial purposes. Use at your own risk.",r.a.createElement(f.a,{href:"https://github.com/alfumit/renault-order-status"},"Github Repository")))},x=a(174),v=a(165),h=a(166),y=Object(g.a)({root:{opacity:1}}),O=function(e){var t=Object(n.useContext)(m),a=t.open,o=void 0===a||a,c=t.message,i=void 0===c?"Default message":c,s=t.setOpen,l=y(),u=function(e,t){"clickaway"!==t&&s(!1)};return r.a.createElement("div",null,r.a.createElement(x.a,{className:l.root,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:o,onClose:u,autoHideDuration:3e3,message:i,action:r.a.createElement(v.a,{size:"small","aria-label":"close",color:"inherit",onClick:u},r.a.createElement(h.a,null,"close"))}))},j=a(44),C=a(172),k=a(167),N=a(126),w=a(36),T=a.n(w),S=[{status:10},{color:"YQZ",model:"KAPTUR",version:"Style_TCe150_4x4_CVT_X-Tronic"},{plandt:"2020-07-23T20:38:27.399345+00:00",realdt:"2020-07-23T20:38:27.12661+00:00"},{deldt:"2020-07-24T00:00:00+00:00",effdt:null,indt:"2020-07-05T00:00:00+00:00",madcdt:"2020-06-30T11:55:50+00:00",miledt:"2020-06-30T12:03:01+00:00",orderdt:"2020-07-17T00:00:00+00:00",outdt:"2020-07-05T06:32:33+00:00",pickdt:null}],D="https://rdwapp.renault.ru/api/v1",P=function(e){var t="".concat(D,"/status/").concat(e);return T.a.get(t)},I=function(e){var t="".concat(D,"/dates2/").concat(e);return T.a.get(t)},M=function(e){var t="".concat(D,"/dates6/").concat(e);return T.a.get(t)},Y=function(e){var t="".concat(D,"/info/").concat(e);return T.a.get(t)},R=Object(g.a)((function(e){var t;return t={header:{paddingBottom:"1rem"},root:{width:"60%"}},Object(j.a)(t,e.breakpoints.down("sm"),{root:{width:"80%"}}),Object(j.a)(t,e.breakpoints.down("xs"),{buttons:{marginTop:"1rem"}}),t})),B=function(e){var t=e.vinParam,a=Object(n.useState)(t||""),o=Object(i.a)(a,2),c=o[0],s=o[1],l=Object(n.useState)(!1),f=Object(i.a)(l,2),g=f[0],b=f[1],E=Object(n.useContext)(u),x=E.setCarData,v=E.setLoading,h=E.useMock,y=E.setUseMock,O=Object(n.useContext)(m),j=O.setOpen,w=O.setMessage,T=R(),D=function(){c||h?(v(!0),x({}),function(e,t){return t?Promise.resolve(S):Promise.all([P(e),Y(e),I(e),M(e)]).then((function(e){return Promise.resolve(e.map((function(e){return e.data.data[0].attributes})))}))}(c,h).then((function(e){console.log(e),x(e),b(!1)})).catch((function(){b(!0),j(!0),w("Please, check your VIN. Request error occurred")})).finally((function(){return v(!1)}))):b(!0)};return Object(n.useEffect)((function(){t&&D()}),[t]),r.a.createElement("div",{className:T.root},r.a.createElement(d.a,{container:!0,justify:"center"},r.a.createElement(p.a,{variant:"h4"},"Please enter your VIN code")),r.a.createElement(d.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(d.a,{item:!0,sm:6,xs:12},r.a.createElement(C.a,{id:"vin",variant:"outlined",label:"VIN",required:!0,helperText:g?"Incorrect VIN":"",error:g,value:c,onChange:function(e){return t=e.target.value,void s(t.trim());var t}})),r.a.createElement(d.a,{item:!0,sm:6,xs:12,className:T.buttons},r.a.createElement(k.a,{size:"medium"},r.a.createElement(N.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){return D()}},"Get Info"),r.a.createElement(N.a,{variant:h?"contained":"outlined",color:"secondary",size:"medium",onClick:function(){return y(!h),j(!0),void w(h?"Real API data will be used":"Mock data shall be used instead of the real API")}},h?"Use API":"Use Mock")))))},X=a(168),U=a(171),z=a(170),A=a(169),_=a(62),q=a.n(_),L=a(63),Q=a.n(L),V=a(64),H=a.n(V),W=a(65),F=a.n(W),K=a(66),G=a.n(K),J=a(67),Z=a.n(J),$=a(68),ee=a.n($),te=a(69),ae=a.n(te),ne=a(70),re=a.n(ne),oe=a(71),ce=a.n(oe),ie=a(72),se=a.n(ie),le=a(73),ue=a.n(le),me=a(74),de=a.n(me),pe=a(75),fe=a.n(pe),ge=a(76),be=a.n(ge),Ee=a(77),xe=a.n(Ee),ve=a(78),he=a.n(ve),ye=a(79),Oe=a.n(ye),je=a(80),Ce=a.n(je),ke=a(81),Ne=a.n(ke),we=a(82),Te=a.n(we),Se=a(83),De=a.n(Se),Pe={yqy:F.a,ynl:Q.a,yqz:H.a,d17:G.a,d69:Z.a,kad:ee.a,npi:ae.a,rqh:re.a,xtk:ce.a,xtl:se.a,xtm:ue.a,xtn:de.a,xtp:fe.a,xtr:be.a,xue:xe.a,xvq:he.a,ynn:Oe.a,yqx:Ce.a,yra:Ne.a,yrb:Te.a,yrc:De.a},Ie=Object(g.a)({carImage:{maxWidth:"100%",maxHeight:"12rem"}}),Me=function(e){var t=e.carColor,a=Ie();return r.a.createElement("figure",null,r.a.createElement("img",{className:a.carImage,src:Pe[t.toLowerCase()]||q.a,alt:"You car"}))},Ye=Object(g.a)({passed:{color:"green"},stepsContainer:{padding:"0 2rem"},step:{display:"flex",justifyItems:"center",padding:".25rem 0"}}),Re=function(){var e=Object(n.useContext)(u).carData,t=Ye(),a=e[0].status;return r.a.createElement("div",null,r.a.createElement(p.a,{variant:"h4",gutterBottom:!0},"Detailed status of your order:"),r.a.createElement(d.a,{container:!0,className:t.stepsContainer,justify:"center"},["Order confirmed","Car ready","Car ready 2","On it's way to dealer","Delivered to dealer","Received by customer"].map((function(e,n){return r.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4,key:e,className:n<a?t.passed:""},r.a.createElement("div",{className:t.step},n<a&&r.a.createElement(h.a,null,"check_circle_outline"),n>=a&&r.a.createElement(h.a,null,"highlight_off")," Step ".concat(n+1,": ").concat(e)))}))))},Be=Object(g.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function Xe(){var e=Be(),t=Object(n.useContext)(u),a=t.carData,o=t.loading,c=Object(n.useContext)(m),i=c.setOpen,s=c.setMessage;return r.a.createElement(X.a,{className:e.root,variant:"outlined"},o&&r.a.createElement(A.a,null),!o&&a.length&&r.a.createElement(z.a,null,r.a.createElement(d.a,{container:!0},r.a.createElement(d.a,{item:!0,xs:12,md:6},r.a.createElement(p.a,{className:e.root,align:"left",color:"textPrimary",gutterBottom:!0},"Order information"),r.a.createElement("hr",null),r.a.createElement(p.a,{className:e.title,align:"left",color:"textSecondary",gutterBottom:!0},"Your car color is"," ",a[1].color),r.a.createElement(p.a,{className:e.title,align:"left",color:"textSecondary",gutterBottom:!0},"Your car model is Renault"," ",a[1].model," ",a[1].version.replace(/_/g," ")),r.a.createElement(p.a,{className:e.title,align:"left",color:"textSecondary",gutterBottom:!0},"Expected time of production"," ",new Date(a[2].realdt).toDateString()," ",new Date(a[2].realdt).toTimeString()),r.a.createElement(p.a,{className:e.title,align:"left",color:"textSecondary",gutterBottom:!0},"Planned time of production"," ",new Date(a[2].plandt).toDateString()," ",new Date(a[2].plandt).toTimeString())),r.a.createElement(d.a,{item:!0,xs:12,md:6},r.a.createElement(Me,{carColor:a[1].color}))),r.a.createElement(d.a,{container:!0,alignContent:"center",justify:"center"},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(Re,null)))),!o&&!a.length&&r.a.createElement("h1",null,"No car data"),!o&&a.length&&r.a.createElement(U.a,null,r.a.createElement(N.a,{size:"small",style:{margin:"0 auto"},variant:"outlined",onClick:function(){i(!0),s("Telegram bot is not available yet")}},"Subscribe to telegram bot")))}var Ue=function(){return new URLSearchParams(Object(l.f)().search)},ze=Object(g.a)({vinHeader:{padding:"0 0 1rem"}}),Ae=function(){var e=ze(),t=Ue();return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{container:!0,className:e.vinHeader,alignContent:"center",justify:"center"},r.a.createElement(B,{vinParam:t.get("vin")})),r.a.createElement(d.a,{container:!0,justify:"center",alignContent:"center"},r.a.createElement(Xe,null)))};var _e=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),d=Object(i.a)(c,2),p=d[0],f=d[1],g=Object(n.useState)(!1),b=Object(i.a)(g,2),x=b[0],v=b[1],h=Object(n.useState)(!1),y=Object(i.a)(h,2),j=y[0],C=y[1],k=Object(n.useState)(""),N=Object(i.a)(k,2),w={loading:p,carData:a,useMock:x,setCarData:o,setLoading:f,setUseMock:v},T={open:j,message:N[0],setOpen:C,setMessage:N[1]};return r.a.createElement(m.Provider,{value:T},r.a.createElement(u.Provider,{value:w},r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/"},r.a.createElement(Ae,null))),r.a.createElement(E,null),r.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){e.exports=a.p+"static/media/unknown.49d99b9f.png"},63:function(e,t,a){e.exports=a.p+"static/media/YNL.6955fcb6.png"},64:function(e,t,a){e.exports=a.p+"static/media/YQZ.8314be94.png"},65:function(e,t,a){e.exports=a.p+"static/media/YQY.ddfee3ae.png"},66:function(e,t,a){e.exports=a.p+"static/media/D17.c393476d.png"},67:function(e,t,a){e.exports=a.p+"static/media/D69.da680879.png"},68:function(e,t,a){e.exports=a.p+"static/media/KAD.64992532.png"},69:function(e,t,a){e.exports=a.p+"static/media/NPI.8b143404.png"},70:function(e,t,a){e.exports=a.p+"static/media/RQH.ddd1999f.png"},71:function(e,t,a){e.exports=a.p+"static/media/XTK.6ffc23b3.png"},72:function(e,t,a){e.exports=a.p+"static/media/XTL.ca4c1e4c.png"},73:function(e,t,a){e.exports=a.p+"static/media/XTM.2d467ac1.png"},74:function(e,t,a){e.exports=a.p+"static/media/XTN.9ac98779.png"},75:function(e,t,a){e.exports=a.p+"static/media/XTP.a4f80941.png"},76:function(e,t,a){e.exports=a.p+"static/media/XTR.1674ec61.png"},77:function(e,t,a){e.exports=a.p+"static/media/XUE.05aeb129.png"},78:function(e,t,a){e.exports=a.p+"static/media/XVQ.002ac380.png"},79:function(e,t,a){e.exports=a.p+"static/media/YNN.fdf20c06.png"},80:function(e,t,a){e.exports=a.p+"static/media/YQX.070b4158.png"},81:function(e,t,a){e.exports=a.p+"static/media/YRA.ca8584ce.png"},82:function(e,t,a){e.exports=a.p+"static/media/YRB.203f1210.png"},83:function(e,t,a){e.exports=a.p+"static/media/YRC.0a26def1.png"},94:function(e,t,a){e.exports=a(123)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.e8acdd59.chunk.js.map