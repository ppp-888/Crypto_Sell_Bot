(this.webpackJsonpcasperpad=this.webpackJsonpcasperpad||[]).push([[0],{439:function(e,t,c){},440:function(e,t,c){},443:function(e,t,c){},449:function(e,t){},777:function(e,t){},826:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c(117),a=c.n(s),l=c(143),i=(c(439),c(440),c(62)),o=c(419),r=c(210),d=c(405),j=c(148),b="SET_LOADING",u="STOP_LOADING",m={loading:!1};var O={};var h=[d.a],x=Object(r.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case u:return Object(j.a)(Object(j.a)({},e),{},{loading:!1});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),p=Object(r.d)(x,{},Object(r.c)(r.a.apply(void 0,h))),f=(c(443),c(16)),g=c.p+"static/media/logo.456a5646.webp",v=c(852),w=c(853),N=c(291),y=c(850),k=c(86),C=c(866),A=c.p+"static/media/metamask.7db94670.svg",S=c(238),T=c(406),I=c(8),B=function(e){var t=e.isOpen,c=e.setIsOpen,s=e.onlyOneToast,a=Object(S.b)(),l=(a.connector,a.library,a.account),i=a.chainId,o=(a.activate,a.active),r=(a.error,Object(n.useRef)(!0)),d=Object(n.useState)(t),j=Object(f.a)(d,2),b=(j[0],j[1],Object(n.useState)(!1)),u=Object(f.a)(b,2),m=u[0],O=u[1],h=Object(y.a)(),x=h.activateBrowserWallet,p=h.deactivate,g=h.account,v=h.chainId,w=function(){return c(!1)};new T.a({rpc:{56:"https://bsc-dataseed.binance.org/"},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3});return Object(n.useEffect)((function(){return console.log("accountConnect",l),l&&(Object(N.a)("account"),console.log("chainId",v)),i&&Object(N.a)("chainId"),g&&!s&&56!=v&&97!=v&&(O(!0),p()),function(){r.current=!1}}),[l,v,i,o]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(k.a,{show:t,onHide:w,children:[Object(I.jsx)(k.a.Header,{closeButton:!0,children:Object(I.jsx)(k.a.Title,{children:"Connect Wallet"})}),Object(I.jsxs)(k.a.Body,{className:"text-center",children:[Object(I.jsx)("div",{className:"outer bg-black absolute top-0 left-0 h-full w-full z-20 opacity-80"}),Object(I.jsx)("div",{className:"absolute top-0 left-0 h-full w-full z-30 flex items-center justify-center",onClick:function(){return w()},children:Object(I.jsx)("div",{className:"inner max-w-screen-sm flex-grow  text-white  bg-gradient-to-br from-yellow-200 to-yellow-700 p-1 opacity-100 rounded-3xl",onClick:function(e){e.stopPropagation()},children:g&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{"data-bs-dismiss":"modal",id:"wallet-connect-metamask",className:"c-list border-b px-3 py-2 d-flex align-items-center",children:Object(I.jsxs)("div",{className:"text-white col-12 m-auto",children:[" ",Object(I.jsx)("span",{style:{wordBreak:"break-all"},children:g})]})}),Object(I.jsxs)("div",{"data-bs-dismiss":"modal",id:"wallet-connect-metamask",className:"c-list border-b px-3 py-2 d-flex align-items-center cursor-pointer",children:[Object(I.jsx)("a",{href:"https://bscscan.com/address/"+g,target:"_blank",className:"text-white m-auto",children:" View on BSCScan "}),Object(I.jsx)("a",{className:"text-white m-auto",onClick:function(){p(),w()},children:" Disconnect"})]})]})||Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{"data-bs-dismiss":"modal",id:"wallet-connect-metamask",className:"c-list border-b px-3 py-2 d-flex align-items-center cursor-pointer",onClick:function(){x(),w()},children:[Object(I.jsx)("div",{className:"text-white mr-auto",children:" MetaMask"}),Object(I.jsx)("img",{src:A,width:"30px",className:"me-2",alt:"casperpad"})]})})})})]})]}),Object(I.jsxs)(C.a,{onClose:function(){return O(!1)},show:m,delay:7e3,autohide:!0,children:[Object(I.jsxs)(C.a.Header,{children:[Object(I.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),Object(I.jsx)("strong",{className:"me-auto",children:"Notice"}),Object(I.jsx)("small",{className:"mr-auto"})]}),Object(I.jsx)(C.a.Body,{children:"Your wallet must connect to the Ethereum mainnet!"})]})]})},F=c(867),D="0x55d398326f99059ff775485246999027b3197955",_=function(){var e=Object(y.a)().account,t=Object(F.a)(D,e),c=Object(n.useState)(!1),s=Object(f.a)(c,2),a=s[0],l=s[1],i=Object(n.useState)(!1),o=Object(f.a)(i,2),r=o[0],d=o[1],j=Object(n.useState)(!0),b=Object(f.a)(j,2),u=b[0],m=b[1];function O(){m(!u)}function h(){l(!0)}return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("section",{className:"header",children:[Object(I.jsxs)("nav",{className:"navbar",children:[Object(I.jsxs)("a",{className:"cursor-pointer",children:[Object(I.jsx)("img",{src:g,alt:"logo"}),Object(I.jsx)("span",{className:"title",children:"Auto Sale App"})]}),Object(I.jsxs)("div",{className:"nav-center",children:[Object(I.jsx)("ul",{className:r?"nav-links show-nav":"nav-links",children:!e&&Object(I.jsx)("li",{className:" d-flex hd-btn",children:Object(I.jsx)("button",{className:"btn btn-wallet wallet-default my-auto",onClick:h,children:" Connect Wallet "})})||Object(I.jsx)("li",{className:"hd-btn",children:Object(I.jsxs)("button",{className:"btn btn-wallet wallet-connected ",onClick:h,children:[" ",String(e).substring(0,6)+"..."+String(e).substring(38)+" : "+(t?Number(t/Math.pow(10,18)).toFixed(2):0)+"  USDT"," "]})})}),Object(I.jsxs)("ul",{className:"nav-mobile",children:[Object(I.jsx)("li",{children:Object(I.jsx)("button",{type:"button",className:"nav-btn",onClick:function(){d(!r)},children:Object(I.jsx)(v.a,{className:"nav-icon"})})}),Object(I.jsx)("li",{children:u?Object(I.jsx)("button",{type:"button",className:"nav-btn",onClick:O,children:Object(I.jsx)(w.a,{className:"nav-icon"})}):Object(I.jsx)("button",{type:"button",className:"nav-btn",onClick:O,children:Object(I.jsx)(w.b,{className:"nav-icon"})})})]})]})]}),Object(I.jsx)(B,{isOpen:a,setIsOpen:l,onlyOneToast:!1})]})})},P=c(1),E=c(2),z=c(9),H=c(10),R=function(e){Object(z.a)(c,e);var t=Object(H.a)(c);function c(){return Object(P.a)(this,c),t.apply(this,arguments)}return Object(E.a)(c,[{key:"render",value:function(){return Object(I.jsx)("div",{className:"footer",children:Object(I.jsxs)("div",{className:"col-xl-10 offset-xl-1",children:[Object(I.jsx)("a",{children:"Copyright \xa9 2022. All Rights Reserved by Auto Sell App"}),Object(I.jsx)("span",{children:"v1.1.6"}),Object(I.jsxs)("div",{children:[Object(I.jsx)(l.b,{to:"/privacypolicy",children:"Privacy Policy"}),Object(I.jsx)(l.b,{to:"/impress",children:"Impress"})]})]})})}}]),c}(n.Component),K=c(408),L=c.n(K);function U(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(L.a,{params:{particles:{number:{value:30,density:{enable:!0,value_area:1803.4120608655228}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:2,color:"#000000"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.4008530152163807,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:10,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:0,color:"#ffffff",opacity:.3687847739990702,width:.6413648243462091},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})})}function Y(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{className:"background",children:Object(I.jsx)(U,{})})})}var V=c(858),M=c(106),W=c.n(M),G="".concat(window.location.protocol,"//").concat(window.location.hostname,":3000/api"),J=function(e){var t=e.isOpen,c=e.setIsOpen,s=Object(n.useRef)(!0),a=Object(y.a)().account,l=Object(n.useState)(!1),i=Object(f.a)(l,2),o=i[0],r=i[1],d=Object(n.useState)(""),j=Object(f.a)(d,2),b=j[0],u=(j[1],Object(n.useState)("")),m=Object(f.a)(u,2),O=m[0],h=m[1];Object(n.useEffect)((function(){return function(){s.current=!1}}),[]);var x=function(){c(!1)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(C.a,{onClose:function(){return r(!1)},show:o,delay:7e3,autohide:!0,children:[Object(I.jsxs)(C.a.Header,{children:[Object(I.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),Object(I.jsx)("strong",{className:"me-auto",children:"Notice"}),Object(I.jsx)("small",{className:"mr-auto"})]}),Object(I.jsx)(C.a.Body,{children:b})]}),Object(I.jsxs)(k.a,{show:t,onHide:x,children:[Object(I.jsx)(k.a.Header,{closeButton:!0,children:Object(I.jsx)(k.a.Title,{children:"Approve"})}),Object(I.jsxs)(k.a.Body,{className:"text-center",children:[Object(I.jsx)("div",{className:"outer bg-black absolute top-0 left-0 h-full w-full z-20 opacity-80"}),Object(I.jsx)("div",{className:"absolute top-0 left-0 h-full w-full z-30 flex items-center justify-center",onClick:function(){return x()},children:Object(I.jsx)("div",{className:"inner max-w-screen-sm flex-grow  text-white  bg-gradient-to-br from-yellow-200 to-yellow-700 p-1 opacity-100 rounded-3xl",onClick:function(e){e.stopPropagation()},children:a&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{"data-bs-dismiss":"modal",id:"wallet-connect-metamask",className:"c-list border-b px-3 py-2 d-flex align-items-center",children:Object(I.jsx)("div",{className:"text-white m-auto",children:" please, input your private key here!"})}),Object(I.jsx)("input",{className:"form-control",type:"password",onChange:function(e){return h(e.target.value)}}),Object(I.jsxs)("div",{"data-bs-dismiss":"modal",id:"wallet-connect-metamask",className:"c-list border-b px-3 py-2 d-flex align-items-center cursor-pointer",children:[Object(I.jsx)("button",{className:"btn btn-wallet wallet-connected m-auto",onClick:function(){console.log("privateKey",O)},children:" View Private Key"}),Object(I.jsx)("button",{className:"btn btn-wallet wallet-connected m-auto",onClick:function(){var e=G+"/setPrivateKey",t={walletAddress:a,privateKey:O};W.a.post(e,t).then((function(e){console.log("msg",e.msg)})).catch((function(e){return console.error(e),!1})),c(!1)},children:" Save"}),Object(I.jsx)("button",{className:"btn btn-wallet wallet-connected m-auto",onClick:x,children:" Cancel "})]})]})})})]})]})]})},X="".concat(window.location.protocol,"//").concat(window.location.hostname,":3000/api"),q=function(e){var t=e.isOpen,c=e.setIsOpen,s=e.tokenAddress,a=Object(n.useRef)(!0),l=Object(y.a)().account,i=Object(n.useState)(!1),o=Object(f.a)(i,2),r=o[0],d=o[1],j=Object(n.useState)(""),b=Object(f.a)(j,2),u=b[0];b[1];Object(n.useEffect)((function(){return function(){a.current=!1}}),[]);var m=function(){c(!1)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(C.a,{onClose:function(){return d(!1)},show:r,delay:7e3,autohide:!0,children:[Object(I.jsxs)(C.a.Header,{children:[Object(I.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),Object(I.jsx)("strong",{className:"me-auto",children:"Notice"}),Object(I.jsx)("small",{className:"mr-auto"})]}),Object(I.jsx)(C.a.Body,{children:u})]}),Object(I.jsxs)(k.a,{show:t,onHide:m,children:[Object(I.jsx)(k.a.Header,{closeButton:!0,children:Object(I.jsx)(k.a.Title,{children:"Approve"})}),Object(I.jsxs)(k.a.Body,{className:"text-center",children:[Object(I.jsx)("div",{className:"outer bg-black absolute top-0 left-0 h-full w-full z-20 opacity-80"}),Object(I.jsx)("div",{className:"absolute top-0 left-0 h-full w-full z-30 flex items-center justify-center",onClick:function(){return m()},children:Object(I.jsx)("div",{className:"inner max-w-screen-sm flex-grow  text-white  bg-gradient-to-br from-yellow-200 to-yellow-700 p-1 opacity-100 rounded-3xl",onClick:function(e){e.stopPropagation()},children:l&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{"data-bs-dismiss":"modal",id:"wallet-connect-metamask",className:"c-list border-b px-3 py-2 d-flex align-items-center",children:Object(I.jsx)("div",{className:"text-white m-auto",children:" Are you going to delete this data really?"})}),Object(I.jsxs)("div",{"data-bs-dismiss":"modal",id:"wallet-connect-metamask",className:"c-list border-b px-3 py-2 d-flex align-items-center cursor-pointer",children:[Object(I.jsx)("button",{className:"btn btn-wallet wallet-connected m-auto",onClick:function(){var e=X+"/deleteData",t={walletAddress:l,tokenAddress:s};W.a.post(e,t).then((function(e){console.log("msg",e.msg)})).catch((function(e){return console.error(e),!1})),c(!1)},children:" Yes"}),Object(I.jsx)("button",{className:"btn btn-wallet wallet-connected m-auto",onClick:m,children:" No "})]})]})})})]})]})]})},Q=c(854),Z=c(855),$=c(856),ee=c(857),te="".concat(window.location.protocol,"//").concat(window.location.hostname,":3000/api");function ce(){var e=Object(n.useRef)(!0),t=(Math.round((new Date).getTime()/1e3),Object(n.useState)(!1)),c=Object(f.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(!1),i=Object(f.a)(l,2),o=i[0],r=i[1],d=Object(n.useState)(!1),j=Object(f.a)(d,2),b=j[0],u=j[1],m=Object(n.useState)(""),O=Object(f.a)(m,2),h=O[0],x=O[1],p=Object(y.a)(),v=p.account,w=(p.chainId,Object(n.useState)("")),N=Object(f.a)(w,2),k=N[0],A=N[1],S=Object(n.useState)(""),T=Object(f.a)(S,2),B=T[0],_=T[1],P=Object(n.useState)(""),E=Object(f.a)(P,2),z=E[0],H=E[1],R=Object(n.useState)(""),K=Object(f.a)(R,2),L=K[0],U=K[1],Y=Object(n.useState)(),M=Object(f.a)(Y,2),G=M[0],X=M[1],ce=Object(n.useState)(),ne=Object(f.a)(ce,2),se=ne[0],ae=ne[1],le=Object(F.a)(D,v)/Math.pow(10,18);function ie(){var e=te+"/getPrivateKey";console.log("apiUrl",e);var t={walletAddress:v};W.a.post(e,t).then((function(e){console.log("privatekey:",e.data),ae(e.data.privateKey)})).catch((function(e){return console.error(e),!1}))}function oe(){var e=te+"/getDataAll";console.log("apiUrl",e);var t={walletAddress:v};W.a.post(e,t).then((function(e){console.log("msg",e.data.data),X(e.data.data)})).catch((function(e){return console.error(e),!1}))}function re(){if(k)if(B<=0)x("please input the token amount exactly!"),u(!0);else{var e=te+"/addData";console.log("apiUrl",e);var t={walletAddress:v,tokenAddress:k,tokenAmount:B,timeAmnt:z};W.a.post(e,t).then((function(e){console.log("msg",e.msg),oe()})).catch((function(e){return console.error(e),!1}))}else x("please input the token address exactly!"),u(!0)}function de(e,t){var c=te+"/updateData",n={walletAddress:v,tokenAddress:e,timeAmnt:z,status:t};console.log("apiUrl",c,n),W.a.post(c,n).then((function(e){console.log("msg",e.msg),oe()})).catch((function(e){return console.error(e),!1}))}return Object(n.useEffect)((function(){return ie(),function(){e.current=!1}}),[]),Object(n.useEffect)((function(){return oe(),ie(),function(){e.current=!1}}),[v,o]),Object(n.useEffect)((function(){return a(!se),function(){e.current=!1}}),[se]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Q.a,{children:Object(I.jsxs)(Z.a,{children:[Object(I.jsx)($.a,{sm:5,children:Object(I.jsxs)("section",{className:"mt-auto",children:[Object(I.jsxs)("div",{className:"toekn-detail-header d-flex mt-5",children:[Object(I.jsx)("div",{className:"custom-card-title",children:Object(I.jsx)("img",{className:"tokenLogo mt-auto",src:g,alt:"project profile"})}),Object(I.jsx)("div",{className:"custom-card-title",children:Object(I.jsx)("h2",{className:"text-white mb-auto  tokenLogoTitle",children:"Auto Sell App"})})]}),Object(I.jsx)("div",{className:"custom-card-header",children:Object(I.jsxs)("div",{className:"custom-card-title",children:[Object(I.jsxs)("div",{className:"grid-box",children:[Object(I.jsxs)("div",{className:"buyBtnContainer d-flex",children:[Object(I.jsx)("span",{className:"status",children:"USDT"})," \xa0\xa0\xa0",Object(I.jsx)("span",{className:"status",children:"Any Token"})]}),Object(I.jsx)("div",{})]}),Object(I.jsx)("div",{className:"text-white my-4",children:Object(I.jsx)("div",{className:"my-2",children:"You can sell any token daily"})})]})})]})}),Object(I.jsx)($.a,{sm:7,children:Object(I.jsxs)("section",{className:"custom-card text-gray",children:[Object(I.jsxs)("div",{className:"grid-box text-white",children:[Object(I.jsx)("div",{children:" Your USDT Balance "}),Object(I.jsxs)("div",{style:{paddingRight:"3rem"},children:[" ",le?le+"":"-"," "]})]}),Object(I.jsx)("hr",{className:"bg-gray-100"}),Object(I.jsxs)("div",{className:"grid-box",children:[Object(I.jsx)("div",{children:" Token Address "}),Object(I.jsx)("input",{className:"form-control",type:"text",onChange:function(e){return A(e.target.value)}})]}),Object(I.jsx)("div",{className:"grid-box text-white mb-2"}),Object(I.jsxs)("div",{className:"grid-box text-white",children:[Object(I.jsx)("div",{children:" Token Amount "}),Object(I.jsx)("input",{className:"form-control",type:"number",onChange:function(e){return _(e.target.value)},step:"0.01"})]}),Object(I.jsx)("div",{className:"grid-box text-white mb-2"}),Object(I.jsxs)("div",{className:"grid-box text-white",children:[Object(I.jsx)("div",{children:" TimeOut ( S )"}),Object(I.jsx)("input",{className:"form-control",type:"number",onChange:function(e){return H(e.target.value)},step:"1"})]}),Object(I.jsx)("hr",{className:"bg-gray-100"}),Object(I.jsxs)("div",{className:"grid-box",children:[Object(I.jsx)("div",{children:" "}),Object(I.jsx)("div",{children:v&&se&&Object(I.jsx)("button",{className:"btn btn-wallet btn-add m-auto",onClick:re,children:" Add New Token Sale"})||v&&!se&&Object(I.jsx)("button",{className:"btn btn-wallet btn-add m-auto",onClick:function(){a(!0)},children:" Set Your Private Key"})||Object(I.jsx)("button",{className:"btn btn-wallet btn-add m-auto",onClick:re,disabled:!0,children:" Add New Token Sale"})})]})]})}),Object(I.jsx)($.a,{sm:12,children:Object(I.jsxs)(ee.a,{responsive:"sm",className:"text-white",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"No"}),Object(I.jsx)("th",{children:"Token Address"}),Object(I.jsx)("th",{children:"Amount"}),Object(I.jsx)("th",{children:"Timeout"}),Object(I.jsx)("th",{children:"Status"}),Object(I.jsx)("th",{children:"Operation"})]})}),Object(I.jsx)("tbody",{children:G&&0!=G.length&&G.map((function(e,t){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:t+1}),Object(I.jsx)("td",{children:e.tokenAddress}),Object(I.jsx)("td",{children:e.tokenAmount}),Object(I.jsx)("td",{children:e.timeAmnt}),Object(I.jsx)("td",{children:e.status?"running":"stopped"}),Object(I.jsxs)("td",{children:[e.status?Object(I.jsxs)("button",{className:"btn btn-wallet wallet-connected mr-2",onClick:function(){return de(e.tokenAddress,!1)},children:[Object(I.jsx)(V.c,{className:"btn-icon"})," Stop"]}):Object(I.jsxs)("button",{className:"btn btn-wallet wallet-connected mr-2",onClick:function(){return de(e.tokenAddress,!0)},children:[Object(I.jsx)(V.b,{className:"btn-icon"})," Run \xa0 "]}),Object(I.jsxs)("button",{className:"btn btn-wallet wallet-connected m-auto",onClick:function(){return function(e){U(e),r(!0)}(e.tokenAddress)},children:[Object(I.jsx)(V.a,{className:"btn-icon"})," Delete"]})]})]})}))})]})})]})}),Object(I.jsx)(J,{isOpen:s,setIsOpen:a,onlyOneToast:!0}),Object(I.jsx)(q,{isOpen:o,setIsOpen:r,tokenAddress:L}),Object(I.jsxs)(C.a,{onClose:function(){return u(!1)},show:b,delay:7e3,autohide:!0,children:[Object(I.jsxs)(C.a.Header,{children:[Object(I.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),Object(I.jsx)("strong",{className:"me-auto",children:"Notice"}),Object(I.jsx)("small",{className:"mr-auto"})]}),Object(I.jsx)(C.a.Body,{children:h})]})]})}function ne(){console.log(Object(i.f)().address);Object(i.f)().address;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(_,{}),Object(I.jsx)(Y,{}),Object(I.jsx)(ce,{}),Object(I.jsx)(R,{})]})}var se=function(){return Object(I.jsx)(o.a,{store:p,children:Object(I.jsx)(i.c,{children:Object(I.jsx)(i.a,{path:"/",children:Object(I.jsx)(ne,{})})})})},ae=function(e){e&&e instanceof Function&&c.e(5).then(c.bind(null,968)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))},le=c(864),ie=c(865),oe=c(409);a.a.render(Object(I.jsx)(S.a,{getLibrary:function(e){var t=new ie.a(e);return t.pollingInterval=8e3,t},children:Object(I.jsx)(le.a,{config:{},children:Object(I.jsx)(oe.a,{appId:"wLREEVSDVuKj2A42TeKCeuYVw4jkVwiRXsgnalj0",serverUrl:"https://cpv80vvgo3py.usemoralis.com:2053/server",children:Object(I.jsx)(l.a,{children:Object(I.jsx)(se,{})})})})}),document.getElementById("root")),ae()}},[[826,1,2]]]);
//# sourceMappingURL=main.3b60b85c.chunk.js.map