(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6eUx":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("fXoL");let i=(()=>{class e{constructor(e,t){this.templateRef=e,this.viewContainerRef=t}set appMyIf(e){e?this.viewContainerRef.createEmbeddedView(this.templateRef):this.viewContainerRef.clear()}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](n.TemplateRef),n["\u0275\u0275directiveInject"](n.ViewContainerRef))},e.\u0275dir=n["\u0275\u0275defineDirective"]({type:e,selectors:[["","appMyIf",""]],inputs:{appMyIf:"appMyIf"}}),e})()},"8J9n":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("z6cu"),i=r("JIr8"),o=r("fXoL"),a=r("tk/3");let c=(()=>{class e{constructor(e){this.http=e,this.asiaRegionUrl="api/asia",this.europeRegionUrl="api/europe",this.africaRegionUrl="api/africa",this.oceaniaRegionUrl="api/oceania",this.countryUrl=""}getCountries(e){return"Asia"===e?this.countryUrl=this.asiaRegionUrl:"Europe"===e?this.countryUrl=this.europeRegionUrl:"Africa"===e?this.countryUrl=this.africaRegionUrl:"Oceania"===e&&(this.countryUrl=this.oceaniaRegionUrl),this.http.get(this.countryUrl).pipe(Object(i.a)(this.handleError))}getCountry(e){return this.http.get(`${this.countryUrl}/${e}`).pipe(Object(i.a)(this.handleError))}handleError(e){let t;return t=e.error instanceof ErrorEvent?`An error occurred: ${e.error.message}`:`Backend returned code ${e.status}: ${e.body.error}`,console.error(e),Object(n.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](a.b))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Iga3:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("fXoL");let i=(()=>{class e{transform(e,...t){return null!=e?e.toLocaleString():""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=n["\u0275\u0275definePipe"]({name:"thousandSeparator",type:e,pure:!0}),e})()},K99g:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("ofXK"),i=r("fXoL");let o=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.CommonModule]]}),e})()},"epv/":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("ofXK"),i=r("fXoL");let o=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.CommonModule]]}),e})()}}]);