webpackJsonp([1],{"+uTP":function(t,e){},"72g0":function(t,e){},"9XhQ":function(t,e){},AaaW:function(t,e){},CQOv:function(t,e){},"DL/1":function(t,e){},F8IY:function(t,e){},I0rv:function(t,e){},NHnr:function(t,e,s){"use strict";function n(t){s("oL35")}function a(t){s("F8IY")}function i(t){s("AaaW")}function o(t){s("CQOv")}function r(t){s("I0rv")}function c(t){s("bLpI")}function l(t){s("72g0")}function u(t){s("do6x")}function d(t){s("+uTP")}function v(t){s("9XhQ")}Object.defineProperty(e,"__esModule",{value:!0});var m=s("7+uW"),p=s("AYPi"),g=s.n(p),b={name:"Navbar",methods:{toggleMenu:function(){this.menuActive=!this.menuActive}},data:function(){return{links:[{url:"/",title:"Home"},{url:"/about",title:"About"},{url:"/events",title:"Events"},{url:"/photos",title:"Photos"}],menuActive:!1}}},h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar is-primary"},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item main",attrs:{to:"/","active-class":""}},[t._v("Robotics Playground")]),t._v(" "),s("div",{staticClass:"navbar-burger burger",class:{"is-active":t.menuActive},on:{click:t.toggleMenu}},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")])],1),t._v(" "),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-menu is-primary",class:{"is-active":t.menuActive}},t._l(t.links,function(e){return s("router-link",{key:e.title,staticClass:"navbar-item",attrs:{to:e.url,exact:""}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))])])},f=[],_={render:h,staticRenderFns:f},j=_,k=s("VU/8"),C=n,w=k(b,j,!1,C,"data-v-2c52b2dc",null),y=w.exports,E={name:"PageFooter"},x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("link",{attrs:{href:"//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css",rel:"stylesheet",type:"text/css"}}),t._v(" "),s("div",{attrs:{id:"mc_embed_signup"}},[s("form",{staticClass:"validate",attrs:{action:"https://RoboticsPG.us17.list-manage.com/subscribe/post?u=8d1b50dd9e85a230343686633&id=21d3d9b77d",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[s("div",{attrs:{id:"mc_embed_signup_scroll"}},[s("label",{attrs:{for:"mce-EMAIL"}},[t._v("Subscribe to our mailing list")]),t._v(" "),s("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"email address",required:""}}),t._v(" "),s("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[s("input",{attrs:{type:"text",name:"b_8d1b50dd9e85a230343686633_21d3d9b77d",tabindex:"-1",value:""}})]),t._v(" "),s("div",{staticClass:"clear"},[s("input",{staticClass:"button",attrs:{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe"}})])])])]),t._v(" "),s("p",[s("strong",[t._v("Robotics Playground")]),t._v(" is a startup who is bringing robotics to everyone!")]),t._v(" "),s("p",[t._v("FB: "),s("a",{attrs:{href:"https://fb.me/RoboticsPG"}},[t._v("fb.me/RoboticsPG")]),t._v(" | E: \n      "),s("a",{attrs:{href:"mailto:roboticspg@gmail.com",target:"_top"}},[t._v("RoboticsPG@gmail.com")]),t._v(" | T: "),s("a",{attrs:{href:"https://twitter.com/RoboticsPG"}},[t._v("@RoboticsPG")])]),t._v(" "),s("p",{staticClass:"mute"},[t._v("Design by "),s("a",{attrs:{href:"https://royportas.com"}},[t._v("Roy Portas")])])])])])}],R={render:x,staticRenderFns:P},z=R,S=s("VU/8"),F=a,M=S(E,z,!1,F,"data-v-72d51270",null),L=M.exports,D={name:"app",components:{Navbar:y,PageFooter:L}},T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Navbar"),t._v(" "),s("router-view"),t._v(" "),s("PageFooter")],1)},A=[],O={render:T,staticRenderFns:A},U=O,H=s("VU/8"),I=i,V=H(D,U,!1,I,null,null),N=V.exports,q=s("/ocq"),B={name:"Hero",props:["title","subtitle","img"],computed:{hasImage:function(){return!!this.img},gradient:function(){var t="rgba(70, 130, 180, 0.5)";return"linear-gradient("+t+", "+t+")"},backgroundStyle:function(){return this.hasImage?{backgroundRepeat:"no-repeat",backgroundImage:this.gradient+', url("'+this.img+'")',backgroundSize:"cover"}:{}}}},W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-large",style:t.backgroundStyle},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("\n        "+t._s(t.subtitle)+"\n      ")])])])])},X=[],G={render:W,staticRenderFns:X},Y=G,$=s("VU/8"),Q=o,K=$(B,Y,!1,Q,"data-v-4ba55e46",null),J=K.exports,Z={name:"Landing",components:{Hero:J},data:function(){return{messages:[{message:"Running fun and engaging robotics and STEM activities to give those who are a bit unsure about robotics and STEM to have a go as well!"},{message:"Hosting various educational workshops taught by specialists in the area that are suitable to people of all levels of ability and experience."},{message:"Public events and other engineering events such as hackathons and competitions."}]}}},tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Hero",{attrs:{title:"Robotics Playground",img:"/static/background.jpg"}}),t._v(" "),t._m(0,!1,!1),t._v(" "),s("div",{staticClass:"text-grid"},t._l(t.messages,function(e){return s("div",{staticClass:"text-grid-item"},[t._v("\n      "+t._s(e.message)+"\n    ")])})),t._v(" "),s("div",{staticClass:"text1"},[s("p",[t._v("\n      Check out our events "),s("router-link",{attrs:{to:"/events"}},[t._v("here")]),t._v(".\n    ")],1)])],1)},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text"},[s("p",[t._v("\n      Robotics Playground is building an inclusive and fun robotics and STEM community. Giving a way for everyone to explore and get exposed to robotics!\n    ")]),t._v(" "),s("p",[t._v("\n      If you want to find out more feel free to get in contact ("),s("a",{attrs:{href:"mailto:admin@roboticspg.com",target:"_top"}},[t._v("mailto:admin@roboticspg.com")]),t._v(")! Or go like us on "),s("a",{attrs:{href:"https://fb.me/RoboticsPG"}},[t._v("Facebook")]),t._v("!\n      Let us know the age range, availability and interest of the student who is unable to attend in order for us to run more of those sessions!\n    ")]),t._v(" "),s("p",[t._v("\n      For any STEM Educators out there who would like to find out more about what we do or want to partner up we are more than happy to have a chat!\n    ")])])}],st={render:tt,staticRenderFns:et},nt=st,at=s("VU/8"),it=r,ot=at(Z,nt,!1,it,"data-v-6b1388b2",null),rt=ot.exports,ct={name:"About",components:{Hero:J},data:function(){return{SEPimages:["/static/logos/TigoRobotics.png","/static/logos/micromelonlogoblack.png"]}}},lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Hero",{attrs:{title:"About us",img:"/static/background.jpg"}}),t._v(" "),t._m(0,!1,!1),t._v(" "),s("div",{staticClass:"heading"},[t._v("\n    Our STEM education providers\n  ")]),t._v(" "),s("div",{staticClass:"image-grid"},t._l(t.SEPimages,function(t){return s("div",{staticClass:"image-grid-item"},[s("img",{attrs:{src:t}})])}))],1)},ut=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text"},[s("p",[t._v("\n      Robotics Playground is created and run by a team with a passion for both robotics and educating the next generation. We inspire young and new minds to delve into the world of robotics and STEM to realise their interests and potential. \n    ")]),t._v(" "),s("p",[t._v("\n      Robotics Playground provides an accessible, inclusive and fun space to learn and explore robotics and all things STEM. We provide workshops in collaboration with industry professionals and educators, as well as providing a robotics playground to have fun exploring and playing with robots.\n    ")]),t._v(" "),s("p",[t._v("\n      We provide a diverse and inclusive learning environment where we invite people of any gender, learning ability or prior experience to come and learn/explore the world of robots and all things STEM.\n    ")]),t._v(" "),s("p",[s("strong",[t._v("DIVERSITY - FUN - EDUCATIONAL - ROBOTICS/STEM")])]),t._v(" "),s("p",[t._v("\n      Robotics Playground workshops are tailored towards STEM education. The workshops are aimed to provide for those who have no robotics or programming experience and just want to give it a go, to those who are wanting to expand their knowledge and learn more while having fun. Catered to both the novice robot builder to the more experienced and those who are completely new and want to find out more.\n    ")])])}],dt={render:lt,staticRenderFns:ut},vt=dt,mt=s("VU/8"),pt=c,gt=mt(ct,vt,!1,pt,"data-v-72e00e8a",null),bt=gt.exports,ht=s("PJh5"),ft={name:"Event",props:["title","start","description","url","image"],methods:{parseDate:function(t){return ht(t).format("MMMM Do YYYY, h:mm:ss a")}}},_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("p",{staticClass:"title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("\n      "+t._s(t.parseDate(t.start))+"\n    ")]),t._v(" "),s("div",{staticClass:"columns"},[t.image?s("div",{staticClass:"column is-one-third"},[s("img",{attrs:{src:t.image}})]):t._e(),t._v(" "),s("p",{staticClass:"content column"},[t._v("\n        "+t._s(t.description)+"\n      ")])])]),t._v(" "),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item",attrs:{href:t.url}},[t._v("Book")])])])},jt=[],kt={render:_t,staticRenderFns:jt},Ct=kt,wt=s("VU/8"),yt=l,Et=wt(ft,Ct,!1,yt,"data-v-23a3a6c5",null),xt=Et.exports,Pt={name:"Spinner"},Rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},zt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sk-cube-grid spinner"},[s("div",{staticClass:"sk-cube sk-cube1"}),t._v(" "),s("div",{staticClass:"sk-cube sk-cube2"}),t._v(" "),s("div",{staticClass:"sk-cube sk-cube3"}),t._v(" "),s("div",{staticClass:"sk-cube sk-cube4"}),t._v(" "),s("div",{staticClass:"sk-cube sk-cube5"}),t._v(" "),s("div",{staticClass:"sk-cube sk-cube6"}),t._v(" "),s("div",{staticClass:"sk-cube sk-cube7"}),t._v(" "),s("div",{staticClass:"sk-cube sk-cube8"}),t._v(" "),s("div",{staticClass:"sk-cube sk-cube9"})])}],St={render:Rt,staticRenderFns:zt},Ft=St,Mt=s("VU/8"),Lt=u,Dt=Mt(Pt,Ft,!1,Lt,"data-v-4c85d8f8",null),Tt=Dt.exports,At={name:"Events",components:{Hero:J,Event:xt,Spinner:Tt},mounted:function(){this.getEvents()},data:function(){return{events:[],isLoading:!0}},computed:{accessToken:function(){return"XQZLMASWKON27RQ65VYB"},apiEndpoint:function(){return"https://www.eventbriteapi.com/v3/"}},methods:{getEvents:function(){var t=this,e=this.apiEndpoint+"events/search/?organizer.id=15850406575&token="+this.accessToken+"&include_all_series_instances=true";fetch(e).then(function(t){return t.json()}).then(function(e){t.$set(t,"events",e.events),t.$set(t,"isLoading",!1)})}}},Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Hero",{attrs:{title:"Upcoming Events",img:"/static/background.jpg"}}),t._v(" "),s("div",{staticClass:"text"},[t._m(0,!1,!1),t._v(" "),t.isLoading?s("Spinner"):t._e(),t._v(" "),s("div",{staticClass:"events"},t._l(t.events,function(t){return s("Event",{key:t.id,staticClass:"event-item",attrs:{title:t.name.text,description:t.description.text,start:t.start.local,image:t.logo.url,url:t.url}})}))],1)],1)},Ut=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n      Let us know if you would like a particular event to be organised and we will do our best to accommodate it.. Likewise, if you are unable to attend a workshop, get in contact and we will do our best to organise something the same workshop or something similar in the future.Contact us at "),s("a",{attrs:{href:"mailto:admin@roboticspg.com",target:"_top"}},[t._v("mailto:admin@roboticspg.com")]),t._v(" with the approximate ages and ideal time to run the workshop to attract other suitable participants. \n    ")])}],Ht={render:Ot,staticRenderFns:Ut},It=Ht,Vt=s("VU/8"),Nt=d,qt=Vt(At,It,!1,Nt,"data-v-56760246",null),Bt=qt.exports,Wt={name:"Photos",components:{Hero:J},data:function(){return{images:["/static/DomCamDSC_0602.jpg","/static/DomCamDSC_0585.jpg","/static/DomCamDSC_0637.jpg","/static/firstWorkshopWithTigo_Aditya.jpg","/static/DomCamDSC_0627.jpg","/static/DomCamDSC_0577.jpg","/static/DSC_0611.jpg","/static/DSC_0640.jpg"]}}},Xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Hero",{attrs:{title:"Photos",img:"/static/background.jpg"}}),t._v(" "),s("div",{staticClass:"image-grid"},t._l(t.images,function(t){return s("div",{staticClass:"image-grid-item"},[s("img",{attrs:{src:t}})])}))],1)},Gt=[],Yt={render:Xt,staticRenderFns:Gt},$t=Yt,Qt=s("VU/8"),Kt=v,Jt=Qt(Wt,$t,!1,Kt,"data-v-877f183c",null),Zt=Jt.exports;m.a.use(q.a);var te=new q.a({routes:[{path:"/",name:"Landing",component:rt},{path:"/about",name:"About",component:bt},{path:"/events",name:"Events",component:Bt},{path:"/photos",name:"Photos",component:Zt}],linkActiveClass:"is-active"});s("DL/1"),s("kuBM");m.a.use(g.a,{id:"UA-79288806-5",router:te}),m.a.config.productionTip=!1,new m.a({el:"#app",router:te,template:"<App/>",data:function(){return{images:["./assets/logo.png"]}},components:{App:N}})},bLpI:function(t,e){},do6x:function(t,e){},kuBM:function(t,e){},oL35:function(t,e){},uslO:function(t,e,s){function n(t){return s(a(t))}function a(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.40100d0999c7f8ee0032.js.map