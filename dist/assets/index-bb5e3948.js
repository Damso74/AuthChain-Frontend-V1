import{t as a,n as r,b as s,bp as l,d as b}from"./index-e82e4f16.js";var c=Object.defineProperty,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,n=(o,e,t)=>e in o?c(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e)=>{for(var t in e||(e={}))d.call(e,t)&&n(o,t,e[t]);if(i)for(var t of i(e))m.call(e,t)&&n(o,t,e[t]);return o};class u{constructor(e){this.openModal=a.open,this.closeModal=a.close,this.subscribeModal=a.subscribe,this.setTheme=r.setThemeConfig,r.setThemeConfig(e),s.setConfig(p({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await l(()=>import("./index-838aff96.js"),["assets/index-838aff96.js","assets/index-e82e4f16.js","assets/index-bd896e02.css","assets/browser-e933942f.js"]);const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),b.setIsUiLoaded(!0)}}}export{u as Web3Modal};