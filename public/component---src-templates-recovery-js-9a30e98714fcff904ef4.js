"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[37],{9688:function(e,t,a){var r=a(7294),l=a(1082),n=a(8120),o=a(6851);t.Z=e=>{let{className:t,list:a}=e,s=(0,r.useContext)(n.T),i=(0,r.useContext)(o.y);if("sinle-post-breadcrumbs"===t&&!a.some((e=>"/blog/"===e.url))){const e={text:"uk"===i||"ru"===i?"Блог":"Blog",url:"/blog/"};a.splice(1,0,e)}return r.createElement("nav",{className:"breadcrumbs "+t},r.createElement("div",{className:"container"},r.createElement("ul",{className:"breadcrumbs__list breadcrumbs-list",typeof:"BreadcrumbList",vocab:"https://schema.org/"},a.map(((e,t)=>{let n=s+e.url.replace(/(\/ru)|(\/en)|(\/product-category\/)|(\/catalog\/)|(\/category\/)/gm,"");return n=n.replace(/(\/\/)/gm,"/"),n.length>1&&(n=n.replace(/\/$/,"")),r.createElement(r.Fragment,null,r.createElement("li",{className:"breadcrumbs-list__item",key:t,property:"itemListElement",typeof:"ListItem"},t+1!==a.length?r.createElement(r.Fragment,null,r.createElement(l.Link,{className:"breadcrumbs-list__link",to:""+n,property:"item",typeof:"WebPage"},r.createElement("span",{property:"name"},e.text)),r.createElement("meta",{property:"position",content:t+1})):r.createElement(r.Fragment,null,r.createElement("span",{className:"breadcrumbs-list__current",property:"name"},e.text),r.createElement("meta",{property:"url",content:n}),r.createElement("meta",{property:"position",content:t+1}))),t+1!==a.length&&r.createElement("li",{className:"breadcrumbs-list__item"},r.createElement("span",{className:"breadcrumbs-list__separator"})))})))))}},4395:function(e,t,a){var r=a(7294),l=a(396),n=a(2884);t.Z=e=>{let{title:t,bgImg:a}=e;(0,r.useEffect)((()=>{let e=n.ZP.timeline();return e.to(".intro-login-photo",1.5,{delay:.2,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",ease:"Expo.easeInOut"}).from(".intro-login-photo .gatsby-image-wrapper",.8,{scale:1.3,stagger:.1,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=1"),()=>{e.kill()}}),[]);const o=(0,l.d)(a.localFile);return r.createElement("div",{className:"intro-login__photo intro-login-photo"},r.createElement(l.G,{image:o,alt:t,loading:"eager"}))}},8358:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var r=a(7294),l=a(1082),n=a(5414),o=a(3462),s=a(9357),i=a(9688),c=a(2884),m=a(2932),p=a(4395),g=a(8177),d=a(5666),u=a.n(d),b=a(8120),_=a(6633);var h=a(9029);var E=e=>{var t,a;let{resetPasswordForm:n,textBeforeLink:o,backToHome:s,successMessage:i,loginPageUrl:m,errMessage:p,successPasswordMessage:d,validateErrors:E}=e,f=(0,r.useContext)(b.T);const{0:w,1:k}=(0,r.useState)(!1),{0:y,1:v}=(0,r.useState)(!1),{0:P,1:N}=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(!(0,h.j)())return null;window.location.search.match("key=")&&window.location.search.match("id=")&&N(!0)}),[]);const{register:F,formState:{errors:S,isSubmitSuccessful:x},handleSubmit:L,getValues:T}=(0,g.cI)({mode:"onBlur"}),C=(e,t)=>{u().start();const a=(0,h.j)()&&window.location.search.match("key=")&&window.location.search.match("id=")&&window.location.search.slice(1).split("&")[1].split("=")[1],r=(0,h.j)()&&window.location.search.match("key=")&&window.location.search.match("id=")&&window.location.search.slice(1).split("&")[0].split("=")[1];var l;P?((e,t,a)=>_({method:"post",url:"https://api.tehnotable.com/wp-json/tehnotable/v1/reset_password",data:{id:parseInt(e),key:t,password:a}}))(a,r,T("password")).then((()=>k(!0))).then((()=>{c.ZP.from(".intro-login__link-back-wrapper",.5,{y:60,opacity:0,delay:.5,onComplete(){c.ZP.set(this.targets(),{clearProps:"all"})}}).then((()=>u().done()))})).catch((()=>{v(!0),u().done()})):(l=T("email"),_({method:"post",url:"https://api.tehnotable.com/wp-json/tehnotable/v1/forgot_password",data:{email:l}})).then((()=>k(!0))).then((()=>{c.ZP.from(".intro-login__link-back-wrapper",.5,{y:60,opacity:0,delay:.5,onComplete(){c.ZP.set(this.targets(),{clearProps:"all"})}}).then((()=>u().done()))})).catch((()=>{v(!0),u().done()}))},M=(e,t)=>{console.error(e)};return r.createElement("div",{className:"intro-login__content intro-login-content"},r.createElement("div",{className:"intro-login-content__inner"},(w||y)&&r.createElement("div",{className:"intro-login__sent"},r.createElement("div",{className:"intro-login__sent-icon check-icon"},r.createElement("svg",{viewBox:"0 0 133 133",version:"1.1"},r.createElement("g",{id:"check-group",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.createElement("circle",{id:"filled-circle",fill:"#000",cx:"66.5",cy:"66.5",r:"54.5"}),r.createElement("circle",{id:"white-circle",fill:"#FFFFFF",cx:"66.5",cy:"66.5",r:"55.5"}),r.createElement("circle",{id:"outline",stroke:"#000",strokeWidth:"4",cx:"66.5",cy:"66.5",r:"54.5"}),!y&&r.createElement("polyline",{id:"check",stroke:"#FFFFFF",strokeWidth:"4",points:"41 70 56 85 92 49"}))),y&&r.createElement(r.Fragment,null,r.createElement("span",null),r.createElement("span",null))),r.createElement("div",{className:"intro-login__sent-title-wrapper title-wrapper"},r.createElement("div",{className:"intro-login__sent-title title title--big"},y?p:P?d:i))),!w&&!y&&r.createElement("div",{className:"intro-login__title-wrapper title-wrapper"},r.createElement("h1",{className:"intro-login__title title title--big"},n.title)),P?!w&&!y&&r.createElement("form",{className:"intro-login__form",onSubmit:L(C,M)},r.createElement("div",{className:"intro-login__inp-wrapper"},r.createElement("label",{className:"intro-login__label local-title local-title--black",htmlFor:"login-password"},n.inputPasswordLabel),r.createElement("div",{className:"intro-login__inp-inner"},r.createElement("input",Object.assign({className:"intro-login__inp",id:"login-password",type:"password",autoComplete:"off"},F("password",{required:E.errEmptyPassword,minLength:{value:5,message:E.errShortPassword}}))),(null==S?void 0:S.password)&&r.createElement("span",{className:"intro-login__error form-error"},null==S||null===(a=S.password)||void 0===a?void 0:a.message))),r.createElement("div",{className:"intro-login__btn-wrapper"},r.createElement("button",{className:"intro-login__btn form-btn "+(x?"disabled":""),type:"submit",disabled:x},r.createElement("span",null,n.button),r.createElement("span",null,n.button)))):!w&&!y&&r.createElement("form",{className:"intro-login__form",onSubmit:L(C,M)},r.createElement("div",{className:"intro-login__inp-wrapper"},r.createElement("label",{className:"intro-login__label local-title local-title--black",htmlFor:"login-email"},n.inputEmailLabel),r.createElement("div",{className:"intro-login__inp-inner"},r.createElement("input",Object.assign({className:"intro-login__inp",id:"login-email",type:"text",autoComplete:"off"},F("email",{required:E.errEmptyEmail,pattern:{value:/\S+@\S+\.\S+/,message:E.errInvalidEmail}}))),(null==S?void 0:S.email)&&r.createElement("span",{className:"intro-login__error form-error"},null==S||null===(t=S.email)||void 0===t?void 0:t.message))),r.createElement("div",{className:"intro-login__btn-wrapper"},r.createElement("button",{className:"intro-login__btn form-btn "+(x?"disabled":""),type:"submit",disabled:x},r.createElement("span",null,n.buttonEmail),r.createElement("span",null,n.buttonEmail)))),!w&&!y&&r.createElement("div",{className:"intro-login__links intro-login__links--recovery"},r.createElement("span",{className:"intro-login__text"},o),r.createElement(l.Link,{className:"intro-login__link intro-login__link--recovery",to:f+"login"},m.title)),r.createElement("div",{className:"intro-login__link-back-wrapper"},r.createElement(l.Link,{className:"intro-login__link-back",to:""+f},s))))},f=a(1918);var w=e=>{let{backgroundImage:t,resetPasswordForm:a,textBeforeLink:l,backToHome:n,successMessage:o,loginPageUrl:s,errMessage:i,successPasswordMessage:g,validateErrors:d}=e,{0:u,1:b}=(0,r.useState)(!1);return(0,r.useEffect)((()=>{if(!(0,f.k)())return null;c.ZP.registerPlugin(m.Z);let e=c.ZP.timeline();m.Z.matchMedia({"(min-width: 992px)":()=>{b(!1),e.from(".intro-login__title",.5,{y:"100%",delay:1,onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".intro-login__form",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3").from(".intro-login__links--recovery",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3").from(".intro-login__link-back-wrapper",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3")},"(max-width: 991px)":()=>{b(!0),e.from(".intro-login__title",.5,{y:"100%",delay:.2,onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".intro-login__form",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3").from(".intro-login__links--recovery",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3").from(".intro-login__link-back-wrapper",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3")}})}),[]),r.createElement("section",{className:"intro intro-login"},!u&&r.createElement(p.Z,{title:a.title,bgImg:t}),r.createElement(E,{resetPasswordForm:a,textBeforeLink:l,backToHome:n,successMessage:o,loginPageUrl:s,errMessage:i,successPasswordMessage:g,validateErrors:d}))},k=a(5434),y=a(3885),v=a(6851),P=a(7990),N=a(8499);var F=e=>{let{pageContext:t,data:a}=e;if((0,r.useEffect)((()=>{(0,N.e)("user_id")&&(0,l.navigate)(t.prefix+"account")}),[]),(0,N.e)("user_id"))return null;const{title:c,metaDesc:m,breadcrumbs:p}=a.wpPage.seo,g=a.wpTehnotableThemeSetting.mainMenuFields,d=a.wpTehnotableThemeSetting.siteHeaderFields,u=a.wpTehnotableThemeSetting.siteFooterFields,_=a.wpTehnotableThemeSetting.cartModalFields,h=(0,P.t)(t.categories,t.wpmlLang),E=a.wpTehnotableThemeSetting.validationErrorsFields,{coockieMain:f,coockieSettings:F}=a.wpTehnotableThemeSetting.thanksModalFields,{contactsPhones:S,contactsEmail:x,contactsScheduleTime:L,youtubeLink:T,facebookLink:C,instagramLink:M,footerLabels:Z}=a.wpTehnotableThemeSetting.siteFooterFields,{backgroundImage:I,resetPasswordForm:B,textBeforeLink:j,backToHome:A,successMessage:H,loginPageUrl:q,errMessage:U,successPasswordMessage:O}=a.wpPage.resetPasswordPageFields;return r.createElement(b.Z,{prefix:t.prefix},r.createElement(v.Z,{code:t.wpmlLang},r.createElement(o.Z,{menu:g,header:d,footer:u,cart:_,contactsPhones:S,contactsEmail:x,contactsScheduleTime:L,youtubeLink:T,facebookLink:C,instagramLink:M,categoryList:h,footerLabels:Z},r.createElement(s.Z,{title:c,description:m,lang:t.lang}),r.createElement(n.q,null,r.createElement("link",{rel:"preload",href:I.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(" ")[0],as:"image"})),r.createElement(i.Z,{className:"recovery-breadcrumbs",list:p}),r.createElement(w,{backgroundImage:I,resetPasswordForm:B,textBeforeLink:j,backToHome:A,successMessage:H,loginPageUrl:q,errMessage:U,successPasswordMessage:O,validateErrors:E}),r.createElement(k.Z,{title:f.title,desc:f.desc,btnSettings:f.btnSettings,btnAccept:f.btnAccept}),r.createElement(y.Z,{title:F.title,subtitle:F.subtitle,required:F.required,analitics:F.analithics,personalization:F.personalization,advertisment:F.advertisment,btnAccept:F.acceptBtn,btnAcceptAll:F.acceptAllBtn}))))}},1918:function(e,t,a){a.d(t,{k:function(){return l}});var r=a(9029);const l=()=>(0,r.j)()&&-1===window.navigator.userAgent.indexOf("Chrome-Lighthouse")},7990:function(e,t,a){a.d(t,{t:function(){return r}});const r=(e,t)=>e.filter((e=>"uncategorized"!==e.slug&&e.lang===t))}}]);
//# sourceMappingURL=component---src-templates-recovery-js-9a30e98714fcff904ef4.js.map