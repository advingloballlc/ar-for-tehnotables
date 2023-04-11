"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[939],{1317:function(e,t,a){var l=a(7294),n=a(1705);t.Z=e=>{let{desc:t,btn:a,text:o}=e;return l.createElement("div",{className:"modal-thanks modal",id:"thanks-modal",style:{display:"none"}},l.createElement("div",{className:"modal-thanks__icon check-icon"},l.createElement("svg",{viewBox:"0 0 133 133",version:"1.1"},l.createElement("g",{id:"check-group",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l.createElement("circle",{id:"filled-circle",fill:"#133BFE",cx:"66.5",cy:"66.5",r:"54.5"}),l.createElement("circle",{id:"white-circle",fill:"#000",cx:"66.5",cy:"66.5",r:"55.5"}),l.createElement("circle",{id:"outline",stroke:"#133BFE",strokeWidth:"4",cx:"66.5",cy:"66.5",r:"54.5"}),l.createElement("polyline",{id:"check",stroke:"#fff",strokeWidth:"4",points:"41 70 56 85 92 49"})))),l.createElement("div",{className:"modal-thanks__title title title--small"},t),o&&l.createElement("p",{className:"modal-thanks__desc"},o),l.createElement("div",{className:"modal-thanks__btn-wrapper"},l.createElement("button",{className:"modal-thanks__btn form-btn",onClick:()=>n.KR.close()},l.createElement("span",null,a),l.createElement("span",null,a))))}},5355:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var l=a(7294),n=a(1082),o=a(5414),r=a(3462),i=a(9357),s=a(9688),c=a(2884),m=a(2932),g=a(4395),d=a(8177),p=a(5666),u=a.n(p),_=a(9306),h=a(8120),b=a(6633);var f=a(5745),E=a(8547);var y=e=>{var t,a,o;let{registerForm:r,loginPageUrl:i,textBeforeLoginPageUrl:s,beforeButtonsText:c,afterButtonsText:m,facebookButton:g,googleButton:p,validateErrors:y}=e,k=(0,l.useContext)(h.T);const{0:v,1:w}=(0,l.useState)(!1),{register:x,formState:{errors:N,isSubmitSuccessful:S},handleSubmit:T,reset:B,getValues:P}=(0,d.cI)({mode:"onBlur"});return l.createElement("div",{className:"intro-login__content intro-login-content"},l.createElement("div",{className:"intro-login-content__inner"},l.createElement("div",{className:"intro-login__title-wrapper title-wrapper"},l.createElement("h1",{className:"intro-login__title title title--big"},r.title)),l.createElement(_.Z,{beforeButtonsText:c,facebookButton:g,afterButtonsText:m,googleButton:p}),l.createElement("form",{className:"intro-login__form",onSubmit:T(((e,t)=>{var a,l,n;u().start(),(a=P("name"),l=P("email"),n=P("password"),b({method:"post",url:"https://api.tehnotable.com/wp-json/tehnotable/v1/register",data:{email:l,password:n,first_name:a}})).then((()=>w(!0))).then((()=>u().done())).then((()=>(0,f.Y)())).then((()=>B())).catch((()=>{(0,E.K)(),w(!1),u().done(),B()}))}),((e,t)=>{console.error(e)}))},l.createElement("div",{className:"intro-login__inp-wrapper"},l.createElement("label",{className:"intro-login__label local-title local-title--black",htmlFor:"login-name"},r.inputUsernameLabel),l.createElement("div",{className:"intro-login__inp-inner"},l.createElement("input",Object.assign({className:"intro-login__inp",id:"login-name",type:"text",autoComplete:"off"},x("name",{required:y.errEmptyName,minLength:{value:3,message:y.errShortName},maxLength:{value:15,message:y.errInvalidName},pattern:{value:/^[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ'][a-zA-Z-а-яА-ЯёЁэЭіІїЇєЄ' ]+[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ']?$/u,message:y.errInvalidName}}))),(null==N?void 0:N.name)&&l.createElement("span",{className:"intro-login__error form-error"},null==N||null===(t=N.name)||void 0===t?void 0:t.message))),l.createElement("div",{className:"intro-login__inp-wrapper"},l.createElement("label",{className:"intro-login__label local-title local-title--black",htmlFor:"login-email"},r.inputEmailLabel),l.createElement("div",{className:"intro-login__inp-inner"},l.createElement("input",Object.assign({className:"intro-login__inp",id:"login-email",type:"text",autoComplete:"off"},x("email",{required:y.errEmptyEmail,pattern:{value:/\S+@\S+\.\S+/,message:y.errInvalidEmail}}))),(null==N?void 0:N.email)&&l.createElement("span",{className:"intro-login__error form-error"},null==N||null===(a=N.email)||void 0===a?void 0:a.message))),l.createElement("div",{className:"intro-login__inp-wrapper"},l.createElement("label",{className:"intro-login__label local-title local-title--black",htmlFor:"login-password"},r.inputPasswordLabel),l.createElement("div",{className:"intro-login__inp-inner"},l.createElement("input",Object.assign({className:"intro-login__inp",id:"login-password",type:"password",autoComplete:"off"},x("password",{required:y.errEmptyPassword,minLength:{value:5,message:y.errShortPassword}}))),(null==N?void 0:N.password)&&l.createElement("span",{className:"intro-login__error form-error"},null==N||null===(o=N.password)||void 0===o?void 0:o.message))),l.createElement("div",{className:"intro-login__btn-wrapper"},l.createElement("button",{className:"intro-login__btn form-btn "+(S||v?"disabled":""),type:"submit",disabled:S||v},l.createElement("span",null,r.button),l.createElement("span",null,r.button)))),l.createElement("div",{className:"intro-login__links intro-login__links--registration"},l.createElement("span",{className:"intro-login__text"},s),l.createElement(n.Link,{className:"intro-login__link intro-login__link--registration",to:k+"login"},i.title))))},k=a(1918);var v=e=>{let{backgroundImg:t,registerForm:a,loginPageUrl:n,textBeforeLoginPageUrl:o,beforeButtonsText:r,afterButtonsText:i,facebookButton:s,googleButton:d,validateErrors:p}=e,{0:u,1:_}=(0,l.useState)(!1);return(0,l.useEffect)((()=>{if(!(0,k.k)())return null;c.ZP.registerPlugin(m.Z);let e=c.ZP.timeline();m.Z.matchMedia({"(min-width: 992px)":()=>{_(!1),e.from(".intro-login__title",.5,{y:"100%",delay:1,onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".intro-login__social",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.2").from(".intro-login__form",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3").from(".intro-login__links--registration",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3")},"(max-width: 991px)":()=>{_(!0),e.from(".intro-login__title",.5,{y:"100%",delay:.2,onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".intro-login__social",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.2").from(".intro-login__form",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3").from(".intro-login__links--registration",.5,{y:60,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.3")}})}),[]),l.createElement("section",{className:"intro intro-login"},!u&&l.createElement(g.Z,{title:a.title,bgImg:t}),l.createElement(y,{registerForm:a,loginPageUrl:n,textBeforeLoginPageUrl:o,beforeButtonsText:r,afterButtonsText:i,facebookButton:s,googleButton:d,validateErrors:p}))},w=a(1317),x=a(8995),N=a(5434),S=a(3885),T=a(6851),B=a(7990),P=a(8499);var F=e=>{let{pageContext:t,data:a}=e;if((0,l.useEffect)((()=>{(0,P.e)("user_id")&&(0,n.navigate)(t.prefix+"account")}),[]),(0,P.e)("user_id"))return null;const{title:c,metaDesc:m,breadcrumbs:g}=a.wpPage.seo,d=a.wpTehnotableThemeSetting.mainMenuFields,p=a.wpTehnotableThemeSetting.siteHeaderFields,u=a.wpTehnotableThemeSetting.siteFooterFields,_=a.wpTehnotableThemeSetting.cartModalFields,b=(0,B.t)(t.categories,t.wpmlLang),f=a.wpTehnotableThemeSetting.validationErrorsFields,{regFormSuccess:E,errFormSuccess:y,coockieMain:k,coockieSettings:F}=a.wpTehnotableThemeSetting.thanksModalFields,{contactsPhones:L,contactsEmail:C,contactsScheduleTime:Z,youtubeLink:q,facebookLink:I,instagramLink:U,footerLabels:A}=a.wpTehnotableThemeSetting.siteFooterFields,{beforeButtonsText:R,afterButtonsText:j,facebookButton:z,googleButton:M}=a.wpTehnotableThemeSetting.loginWithSocialFields,{backgroundImg:O,registerForm:W,loginPageUrl:K,textBeforeLoginPageUrl:D}=a.wpPage.createAccountPageFields;return l.createElement(h.Z,{prefix:t.prefix},l.createElement(T.Z,{code:t.wpmlLang},l.createElement(r.Z,{menu:d,header:p,footer:u,cart:_,contactsPhones:L,contactsEmail:C,contactsScheduleTime:Z,youtubeLink:q,facebookLink:I,instagramLink:U,categoryList:b,footerLabels:A},l.createElement(i.Z,{title:c,description:m,lang:t.lang}),l.createElement(o.q,null,l.createElement("link",{rel:"preload",href:O.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet.split(" ")[0],as:"image"})),l.createElement(s.Z,{className:"registration-breadcrumbs",list:g}),l.createElement(v,{backgroundImg:O,registerForm:W,loginPageUrl:K,textBeforeLoginPageUrl:D,beforeButtonsText:R,afterButtonsText:j,facebookButton:z,googleButton:M,validateErrors:f}),l.createElement(w.Z,{desc:E.mainText,btn:E.btnText}),l.createElement(x.Z,{desc:y.mainText,btn:y.btnText}),l.createElement(N.Z,{title:k.title,desc:k.desc,btnSettings:k.btnSettings,btnAccept:k.btnAccept}),l.createElement(S.Z,{title:F.title,subtitle:F.subtitle,required:F.required,analitics:F.analithics,personalization:F.personalization,advertisment:F.advertisment,btnAccept:F.acceptBtn,btnAcceptAll:F.acceptAllBtn}))))}},5745:function(e,t,a){a.d(t,{Y:function(){return i}});var l=a(2884),n=a(1705),o=a(9029),r=a(6776);const i=()=>{if((0,o.j)()){let e=null;n.KR.show([{src:"#thanks-modal",type:"inline"}],{showClass:"fancybox-fadeIn",hideClass:"fancybox-fadeOut",dragToClose:!1,parentEl:document.querySelector("#___gatsby"),on:{init:()=>{document.querySelector(".header__top")&&(document.querySelector(".header__top").style.paddingRight=(0,r.n)()),document.querySelector(".header__bot").style.paddingRight=(0,r.n)()},ready:()=>{e=l.ZP.timeline(),e.from(".modal-thanks__title",.5,{delay:.8,y:20,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".modal-thanks__btn-wrapper",.5,{y:20,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.2").from(".modal-thanks__desc",.5,{delay:.8,y:20,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=1.4")},destroy:()=>{e.kill(),document.querySelector(".header__top")&&(document.querySelector(".header__top").style.paddingRight="0"),document.querySelector(".header__bot").style.paddingRight="0"}}})}}}}]);
//# sourceMappingURL=component---src-templates-registration-js-c304202e12cc73d5fbf1.js.map