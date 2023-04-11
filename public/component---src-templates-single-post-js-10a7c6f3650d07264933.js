/*! For license information please see component---src-templates-single-post-js-10a7c6f3650d07264933.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[846],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},9688:function(e,t,r){"use strict";var n=r(7294),a=r(1082),i=r(8120),l=r(6851);t.Z=e=>{let{className:t,list:r}=e,o=(0,n.useContext)(i.T),s=(0,n.useContext)(l.y);if("sinle-post-breadcrumbs"===t&&!r.some((e=>"/blog/"===e.url))){const e={text:"uk"===s||"ru"===s?"Блог":"Blog",url:"/blog/"};r.splice(1,0,e)}return n.createElement("nav",{className:"breadcrumbs "+t},n.createElement("div",{className:"container"},n.createElement("ul",{className:"breadcrumbs__list breadcrumbs-list",typeof:"BreadcrumbList",vocab:"https://schema.org/"},r.map(((e,t)=>{let i=o+e.url.replace(/(\/ru)|(\/en)|(\/product-category\/)|(\/catalog\/)|(\/category\/)/gm,"");return i=i.replace(/(\/\/)/gm,"/"),i.length>1&&(i=i.replace(/\/$/,"")),n.createElement(n.Fragment,null,n.createElement("li",{className:"breadcrumbs-list__item",key:t,property:"itemListElement",typeof:"ListItem"},t+1!==r.length?n.createElement(n.Fragment,null,n.createElement(a.Link,{className:"breadcrumbs-list__link",to:""+i,property:"item",typeof:"WebPage"},n.createElement("span",{property:"name"},e.text)),n.createElement("meta",{property:"position",content:t+1})):n.createElement(n.Fragment,null,n.createElement("span",{className:"breadcrumbs-list__current",property:"name"},e.text),n.createElement("meta",{property:"url",content:i}),n.createElement("meta",{property:"position",content:t+1}))),t+1!==r.length&&n.createElement("li",{className:"breadcrumbs-list__item"},n.createElement("span",{className:"breadcrumbs-list__separator"})))})))))}},771:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ie}});var n=r(7294),a=r(5414),i=r(3462),l=r(9357),o=r(9688),s=r(2884),c=r(2932),p=r(396);var m=e=>{let{title:t,img:r}=e;const a=(0,p.d)(r);return n.createElement("div",{className:"single-post-intro__preview"},n.createElement(p.G,{image:a,alt:t,loading:"eager"}))};var u=e=>{let{article:t}=e;return n.createElement("article",{className:"single-post-intro__article article",dangerouslySetInnerHTML:{__html:t}})};var g=e=>{let{date:t,category:r}=e;return n.createElement("div",{className:"single-post-intro__info"},n.createElement("div",{className:"single-post-intro__info-date local-title local-title--grey"},t),n.createElement("div",{className:"single-post-intro__info-category local-title local-title--grey"},r))};var d=e=>{let{title:t}=e;return n.createElement("div",{className:"single-post-intro__title-wrapper title-wrapper"},n.createElement("h1",{className:"single-post-intro__title title title--big"},t))};var h=e=>{let{video:t}=e;return n.createElement("div",{className:"single-post-intro__video"},n.createElement("iframe",{width:1160,height:645,src:t,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))};function f(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var w,b=r(5900),_=r.n(b),v=(w=function(e,t){return w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},w(e,t)},function(e,t){function r(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),y=function(){return y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},y.apply(this,arguments)},E=function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function l(e){try{s(n.next(e))}catch(t){i(t)}}function o(e){try{s(n.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,o)}s((n=n.apply(e,t||[])).next())}))},k=function(e,t){var r,n,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,n=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){l.label=i[1];break}if(6===i[0]&&l.label<a[1]){l.label=a[1],a=i;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(i);break}a[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(o){i=[6,o],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},N=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},P=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},S=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},C=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function x(e,t,r){var n=t.height,a=t.width,i=N(t,["height","width"]),l=y({height:n,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),o=window.open(e,"",Object.keys(l).map((function(e){return e+"="+l[e]})).join(", "));if(r)var s=window.setInterval((function(){try{(null===o||o.closed)&&(window.clearInterval(s),r(o))}catch(e){console.error(e)}}),1e3);return o}var O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,a=r.windowHeight,i=void 0===a?400:a,l=r.windowPosition,o=void 0===l?"windowCenter":l,s=r.windowWidth,c=void 0===s?550:s;x(e,y({height:i,width:c},"windowCenter"===o?S(c,i):C(c,i)),n)},t.handleClick=function(e){return E(t,void 0,void 0,(function(){var t,r,n,a,i,l,o,s,c,p;return k(this,(function(m){switch(m.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,a=t.networkLink,i=t.onClick,l=t.url,o=t.openShareDialogOnClick,s=t.opts,c=a(l,s),n?[2]:(e.preventDefault(),r?(p=r(),P(p)?[4,p]:[3,2]):[3,2]);case 1:m.sent(),m.label=2;case 2:return o&&this.openShareDialog(c),i&&i(e,c),[2]}}))}))},t}return v(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,a=e.disabled,i=e.disabledStyle,l=e.forwardedRef,o=(e.networkLink,e.networkName),s=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),c=e.style,p=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,N(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),m=_()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!a,disabled:!!a},r),u=y(y(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},c),a&&i);return n.createElement("button",y({},p,{"aria-label":p["aria-label"]||o,className:m,onClick:this.handleClick,ref:l,style:u}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(n.Component),T=O,j=function(){return j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},j.apply(this,arguments)};var L=function(e,t,r,a){function i(i,l){var o=r(i),s=j({},i);return Object.keys(o).forEach((function(e){delete s[e]})),n.createElement(T,j({},a,s,{forwardedRef:l,networkName:e,networkLink:t,opts:r(i)}))}return i.displayName="ShareButton-"+e,(0,n.forwardRef)(i)};var Z=L("email",(function(e,t){var r=t.subject,n=t.body,a=t.separator;return"mailto:"+f({subject:r,body:n?n+a+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),A=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),F=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return A(t,e),t}(Error);function W(e,t){if(!e)throw new F(t)}var B=L("twitter",(function(e,t){var r=t.title,n=t.via,a=t.hashtags,i=void 0===a?[]:a,l=t.related,o=void 0===l?[]:l;return W(e,"twitter.url"),W(Array.isArray(i),"twitter.hashtags is not an array"),W(Array.isArray(o),"twitter.related is not an array"),"https://twitter.com/share"+f({url:e,text:r,via:n,hashtags:i.length>0?i.join(","):void 0,related:o.length>0?o.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});var I=L("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return W(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+f({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});var H=L("telegram",(function(e,t){var r=t.title;return W(e,"telegram.url"),"https://telegram.me/share/url"+f({url:e,text:r})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400});var D=L("viber",(function(e,t){var r=t.title,n=t.separator;return W(e,"viber.url"),"viber://forward"+f({text:r?r+n+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:660,windowHeight:460});var q=L("whatsapp",(function(e,t){var r=t.title,n=t.separator;return W(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+f({text:r?r+n+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),M=r(4823);var R=e=>{let{title:t,article:r,shareTitle:a,pageLnk:i}=e;return n.createElement("div",{className:"single-post-intro__share"},n.createElement("p",{className:"single-post-intro__share-text"},a),n.createElement("div",{className:"single-post-intro__share-inner"},n.createElement(Z,{className:"single-post-intro__share-btn",url:i,subject:t,body:r},n.createElement("span",{className:"single-post-intro__share-btn-inner"},n.createElement("svg",null,n.createElement("use",{href:M.Z+"#at"})))),n.createElement(B,{className:"single-post-intro__share-btn",url:i,title:t},n.createElement("span",{className:"single-post-intro__share-btn-inner"},n.createElement("svg",null,n.createElement("use",{href:M.Z+"#twitter"})))),n.createElement(I,{className:"single-post-intro__share-btn",url:i,quote:t},n.createElement("span",{className:"single-post-intro__share-btn-inner"},n.createElement("svg",null,n.createElement("use",{href:M.Z+"#facebook"})))),n.createElement(H,{className:"single-post-intro__share-btn",url:i,title:t},n.createElement("span",{className:"single-post-intro__share-btn-inner"},n.createElement("svg",null,n.createElement("use",{href:M.Z+"#telegram"})))),n.createElement(D,{className:"single-post-intro__share-btn",url:i,title:t},n.createElement("span",{className:"single-post-intro__share-btn-inner"},n.createElement("svg",null,n.createElement("use",{href:M.Z+"#viber"})))),n.createElement(q,{className:"single-post-intro__share-btn",url:i,title:t,separator:":: "},n.createElement("span",{className:"single-post-intro__share-btn-inner"},n.createElement("svg",null,n.createElement("use",{href:M.Z+"#whats-app"}))))))},z=r(9029),V=r(1918);var G=e=>{let{title:t,date:r,img:a,video:i,category:l,content:o,shareTitle:p}=e;return(0,n.useEffect)((()=>{if(!(0,V.k)())return null;s.ZP.registerPlugin(c.Z);let e=s.ZP.timeline(),t=s.ZP.timeline({scrollTrigger:{trigger:".single-post-intro__container",start:"200px bottom"}}),r=s.ZP.timeline({scrollTrigger:{trigger:".single-post-intro__video",start:"center bottom"}}),n=s.ZP.timeline({scrollTrigger:{trigger:".single-post-intro__container",start:"bottom bottom"}});return r.from(".single-post-intro__video",.5,{opacity:0,y:70,onComplete(){r.set(this.targets(),{clearProps:"all"})}}),e.fromTo(".single-post-intro__preview",1.5,{clipPath:"polygon(0 0, 100% 0, 100% 0, 0 0)"},{delay:.2,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",ease:"Expo.easeInOut",onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".single-post-intro__preview > *",.8,{scale:1.3,stagger:.1,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=1"),t.from(".single-post-intro__info > *",.6,{x:-70,opacity:0,stagger:.05,onComplete(){t.set(this.targets(),{clearProps:"all"})}}).from(".single-post-intro__title",.5,{y:"100%",onComplete(){t.set(this.targets(),{clearProps:"all"})}},"-=.2").from(".single-post-intro__article",.6,{opacity:0,y:100,onComplete(){t.set(this.targets(),{clearProps:"all"})}},"-=.1"),n.from(".single-post-intro__share-text",.6,{x:-70,opacity:0,stagger:.05,onComplete(){n.set(this.targets(),{clearProps:"all"})}}).from(".single-post-intro__share-btn",.5,{x:50,opacity:0,stagger:.1,onComplete(){n.set(this.targets(),{clearProps:"all"})}},"-=.2"),()=>{e.kill(),t.kill(),n.kill()}}),[]),n.createElement("section",{className:"intro single-post-intro"},n.createElement("div",{className:"container"},n.createElement("div",{className:"single-post-intro__inner"},n.createElement(m,{title:t,img:a}),n.createElement("div",{className:"single-post-intro__container"},n.createElement(g,{date:r,category:l}),n.createElement(d,{title:t}),n.createElement(u,{article:o}),i&&n.createElement(h,{video:i}),n.createElement(R,{title:t,article:o,shareTitle:p,pageLnk:(0,z.j)()&&window.location.href})),n.createElement("span",null))))};var U=e=>{let{title:t}=e;return n.createElement("div",{className:"single-post-similar__top"},n.createElement("div",{className:"single-post-similar__title-wrapper title-wrapper"},n.createElement("div",{className:"single-post-similar__title title title--small"},t)),n.createElement("div",{className:"single-post-similar__nav"},n.createElement("div",{className:"single-post-similar__btn single-post-similar__prev"},n.createElement("svg",null,n.createElement("use",{href:M.Z+"#prev-arrow"}))),n.createElement("div",{className:"single-post-similar__btn single-post-similar__next"},n.createElement("svg",null,n.createElement("use",{href:M.Z+"#next-arrow"})))))},Y=r(8089),X=r(6747),$=r(1082),J=r(8120);var K=e=>{let{title:t,img:r,category:a,date:i,slug:l}=e,o=(0,n.useContext)(J.T);const s=(0,p.d)(r);return n.createElement("div",{className:"single-post-similar__item"},n.createElement("div",{className:"single-post-similar__item-inner"},n.createElement($.Link,{className:"single-post-similar__item-link",to:""+o+l}),n.createElement("div",{className:"single-post-similar__item-preview"},n.createElement(p.G,{image:s,alt:t,loading:"lazy"})),n.createElement("div",{className:"single-post-similar__item-info"},n.createElement("div",{className:"single-post-similar__item-date local-title local-title--grey"},i),n.createElement("div",{className:"single-post-similar__item-category local-title local-title--grey"},a)),n.createElement("div",{className:"single-post-similar__item-title"},t)))};var Q=e=>{let{posts:t}=e;return n.createElement(X.tq,{className:"single-post-similar__slider",modules:[Y.W_],spaceBetween:30,slidesPerView:3,speed:500,navigation:{prevEl:".single-post-similar__prev",nextEl:".single-post-similar__next"},breakpoints:{769:{slidesPerView:3,spaceBetween:30},480:{slidesPerView:2,spaceBetween:20},0:{slidesPerView:1,spaceBetween:20}}},t.map(((e,t)=>n.createElement(X.o5,{className:"single-post-similar__slider-item"},n.createElement(K,{title:e.title,img:e.featuredImage.node.localFile,category:e.terms.nodes[0].name,date:e.date,slug:e.slug,key:t++})))))};var ee=e=>{let{title:t,posts:r}=e;return(0,n.useEffect)((()=>{s.ZP.registerPlugin(c.Z);let e=s.ZP.timeline({scrollTrigger:{trigger:".single-post-similar",start:"center bottom"}});return c.Z.matchMedia({"(min-width: 769px)":()=>{e.from(".single-post-similar__title",.5,{y:"100%",onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".single-post-similar__nav > *",.5,{scale:0,stagger:.1,ease:"back",onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".single-post-similar__item",.6,{y:100,opacity:0,stagger:.1,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3")},"(max-width: 768px)":()=>{e.from(".single-post-similar__title",.5,{y:"100%",onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".single-post-similar__item",.6,{y:100,opacity:0,stagger:.1,onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".single-post-similar__nav > *",.5,{scale:0,stagger:.1,ease:"back",onComplete(){e.set(this.targets(),{clearProps:"all"})}})}}),()=>{e.kill()}}),[]),n.createElement("section",{className:"single-post-similar"},n.createElement("div",{className:"container"},n.createElement(U,{title:t}),n.createElement(Q,{posts:r})))},te=r(5434),re=r(3885),ne=r(6851),ae=r(7990);var ie=e=>{let{pageContext:t,data:r}=e;const{title:s,metaDesc:c,breadcrumbs:p}=r.wpPost.seo,m=r.wpTehnotableThemeSetting.mainMenuFields,u=r.wpTehnotableThemeSetting.siteHeaderFields,g=r.wpTehnotableThemeSetting.siteFooterFields,d=r.wpTehnotableThemeSetting.cartModalFields,h=(0,ae.t)(t.categories,t.wpmlLang),{coockieMain:f,coockieSettings:w}=r.wpTehnotableThemeSetting.thanksModalFields,{contactsPhones:b,contactsEmail:_,contactsScheduleTime:v,youtubeLink:y,facebookLink:E,instagramLink:k,footerLabels:N}=r.wpTehnotableThemeSetting.siteFooterFields,{title:P,slug:S,content:C,featuredImage:x,terms:O,MorePostFields:T}=r.wpPost,{newsSliderTitle:j,socialShareTitle:L}=r.wpTehnotableThemeSetting.singleNewsFields,Z=r.allWpPost.nodes.filter((e=>e.slug!==S));return n.createElement(J.Z,{prefix:t.prefix},n.createElement(ne.Z,{code:t.wpmlLang},n.createElement(i.Z,{menu:m,header:u,footer:g,cart:d,contactsPhones:b,contactsEmail:_,contactsScheduleTime:v,youtubeLink:y,facebookLink:E,instagramLink:k,categoryList:h,footerLabels:N},n.createElement(l.Z,{title:s,description:c,lang:t.lang}),n.createElement(a.q,null,n.createElement("link",{rel:"preload",href:T.postImg.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(" ")[0],as:"image"}),n.createElement("link",{rel:"canonical",href:"https://tehnotable.com"+t.prefix+S}),t.langList.map((e=>n.createElement("link",{rel:"alternate",hreflang:e.wpmlLang,href:"https://tehnotable.com"+e.path+S}))),n.createElement("link",{rel:"alternate",hreflang:"x-default",href:"https://tehnotable.com/"+S})),n.createElement(o.Z,{className:"sinle-post-breadcrumbs",list:p}),n.createElement(G,{title:P,date:x.node.date,img:T.postImg.localFile,video:T.postVideoLink,category:O.nodes[0].name,content:C,shareTitle:L}),0!==Z.length&&n.createElement(ee,{title:j,posts:Z}),n.createElement(te.Z,{title:f.title,desc:f.desc,btnSettings:f.btnSettings,btnAccept:f.btnAccept}),n.createElement(re.Z,{title:w.title,subtitle:w.subtitle,required:w.required,analitics:w.analithics,personalization:w.personalization,advertisment:w.advertisment,btnAccept:w.acceptBtn,btnAcceptAll:w.acceptAllBtn}))))}},1918:function(e,t,r){"use strict";r.d(t,{k:function(){return a}});var n=r(9029);const a=()=>(0,n.j)()&&-1===window.navigator.userAgent.indexOf("Chrome-Lighthouse")},7990:function(e,t,r){"use strict";r.d(t,{t:function(){return n}});const n=(e,t)=>e.filter((e=>"uncategorized"!==e.slug&&e.lang===t))}}]);
//# sourceMappingURL=component---src-templates-single-post-js-10a7c6f3650d07264933.js.map