"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[427],{8023:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(7294),i=n(3462),o=n(9357),r=n(5414),l=n(396),s=n(1082),c=n(2884),m=n(2932),d=n(8120),u=n(9029),g=n(1918);var h=e=>{let{deliveryCode:t,thankYouMessage:n,thankYouGoHome:i,thankYouAdditionalyMessage:o,thankyouBackgroundImage:r}=e,h=(0,a.useContext)(d.T);const k=(0,l.d)(r.localFile),p=(0,a.useRef)();let b=0,f=0,w=0,_=0;const E=()=>{b+=.05*(w-b),f+=.05*(_-f),p.current&&(p.current.style="transform: translate("+b/17+"%, "+f/17+"%) scale(1.1)"),requestAnimationFrame(E)},y=e=>{if((0,u.j)()){const t=window.innerWidth,n=window.innerHeight,a=e.pageX-t/2,i=e.pageY-n/2;w=a/t*100,_=i/n*100}};return(0,a.useEffect)((()=>{if(m.Z.matchMedia({"(min-width: 1025px)":()=>E()}),!(0,g.k)())return null;let e=c.ZP.timeline();return e.set(".thanks-intro__inner",{visibility:"visible",delay:.3}).from(".thanks-intro__inner > *",.5,{delay:.4,y:50,opacity:0,stagger:.1,onComplete(){e.set(this.targets(),{clearProps:"all"})}}),(0,u.j)()&&window.innerWidth>1024&&window.addEventListener("mousemove",y),()=>{e.kill(),(0,u.j)()&&window.removeEventListener("mousemove",y)}}),[]),a.createElement("section",{className:"intro thanks-intro general-page section"},a.createElement("div",{className:"thanks-intro__bg general-page__bg",ref:p},a.createElement(l.G,{image:k,alt:"Thanks",loading:"eager"})),a.createElement("div",{className:"container"},a.createElement("div",{className:"thanks-intro__inner general-page__inner"},a.createElement("h1",{className:"thanks-intro__title",dangerouslySetInnerHTML:{__html:n}}),a.createElement("div",{className:"thanks-intro__number"},"№ ",a.createElement("span",null,t||"Some delivery code")),a.createElement("p",{className:"thanks-intro__desc"},o),a.createElement(s.Link,{className:"thanks-intro__btn form-btn",to:h},a.createElement("span",null,i.title),a.createElement("span",null,i.title)))))},k=n(5434),p=n(3885),b=n(6851),f=n(7990),w=n(8499),_=n(9549);var E=e=>{let{pageContext:t,data:n}=e;const{title:l,metaDesc:s}=n.wpPage.seo,c=n.wpTehnotableThemeSetting.mainMenuFields,m=n.wpTehnotableThemeSetting.siteHeaderFields,g=n.wpTehnotableThemeSetting.siteFooterFields,E=n.wpTehnotableThemeSetting.cartModalFields,y=(0,f.t)(t.categories,t.wpmlLang),{coockieMain:v,coockieSettings:T}=n.wpTehnotableThemeSetting.thanksModalFields,{contactsPhones:L,contactsEmail:S,contactsScheduleTime:F,youtubeLink:A,facebookLink:M,instagramLink:Y,footerLabels:x}=n.wpTehnotableThemeSetting.siteFooterFields,{thankYouMessage:C,thankYouGoHome:H,thankYouAdditionalyMessage:N,thankyouBackgroundImage:P}=n.wpPage.thankYouPageFields,Z=(0,u.j)()&&window.location.search.slice(1).split("=")[1];return(0,a.useEffect)((()=>{(0,u.j)()&&window.fbq("track","Purchase",{value:(0,w.e)("thx_price"),currency:"UAH"}),(0,_.k)("thx_price")}),[]),a.createElement(d.Z,{prefix:t.prefix},a.createElement(b.Z,{code:t.wpmlLang},a.createElement(i.Z,{isHiddenFooterTop:!0,menu:c,header:m,footer:g,cart:E,contactsPhones:L,contactsEmail:S,contactsScheduleTime:F,youtubeLink:A,facebookLink:M,instagramLink:Y,categoryList:y,footerLabels:x},a.createElement(o.Z,{title:l,description:s,lang:t.lang}),a.createElement(r.q,null,a.createElement("link",{rel:"preload",href:P.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(" ")[0],as:"image"})),a.createElement(h,{deliveryCode:Z,thankYouMessage:C,thankYouGoHome:H,thankYouAdditionalyMessage:N,thankyouBackgroundImage:P}),a.createElement(k.Z,{title:v.title,desc:v.desc,btnSettings:v.btnSettings,btnAccept:v.btnAccept}),a.createElement(p.Z,{title:T.title,subtitle:T.subtitle,required:T.required,analitics:T.analithics,personalization:T.personalization,advertisment:T.advertisment,btnAccept:T.acceptBtn,btnAcceptAll:T.acceptAllBtn}))))}},1918:function(e,t,n){n.d(t,{k:function(){return i}});var a=n(9029);const i=()=>(0,a.j)()&&-1===window.navigator.userAgent.indexOf("Chrome-Lighthouse")},7990:function(e,t,n){n.d(t,{t:function(){return a}});const a=(e,t)=>e.filter((e=>"uncategorized"!==e.slug&&e.lang===t))}}]);
//# sourceMappingURL=component---src-templates-thanks-js-ed7eec0c475b3ead876d.js.map