(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{lo5M:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),a=n("tyNb"),l=n("8J9n"),o=n("fXoL"),i=n("Iga3");const d=function(e){return["africa",e]};function m(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275elementStart"](4,"a",6),o["\u0275\u0275text"](5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"td"),o["\u0275\u0275text"](7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"td"),o["\u0275\u0275text"](9),o["\u0275\u0275pipe"](10,"thousandSeparator"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"td"),o["\u0275\u0275text"](12),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"td"),o["\u0275\u0275element"](14,"img",7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](15,"td"),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=t.index,r=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",n," "),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction1"](14,d,e.id)),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](e.name),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.capital),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](10,12,e.population)),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](e.currencies[0].name),o["\u0275\u0275advance"](2),o["\u0275\u0275styleProp"]("width",r.imageWidth,"px")("margin",r.imageMargin,"px"),o["\u0275\u0275property"]("src",e.flag,o["\u0275\u0275sanitizeUrl"])("title",e.name)}}let c=(()=>{class e{constructor(e){this.countriesService=e,this.pageTitle="Africa Country List",this.region="Africa",this.errorMessage="",this.filteredCountry=[],this.imageWidth=50,this.imageMargin=2}ngOnInit(){this.getCountryList(this.region)}getCountryList(e){this.filteredCountry=[],this.countriesService.getCountries(e).subscribe({next:e=>{e.map(e=>{this.filteredCountry.push({name:e.name||"Unknown Name",capital:e.capital||"Unknown Capital",region:e.region||"Unknown Region",subregion:e.subregion||"Unknown Subregion",population:e.population||0,currencies:e.currencies||[{code:"",name:"",symbol:""}],flag:e.flag||"default-flag-url",id:e.id||0,topLevelDomain:e.topLevelDomain||[""],alpha2Code:e.alpha2Code||"",alpha3Code:e.alpha3Code||"",callingCodes:e.callingCodes||[""],altSpellings:e.altSpellings||[""],latlng:e.latlng||[0,0],demonym:e.demonym||"Unknown",gini:e.gini||0,timezones:e.timezones||["UTC"],borders:e.borders||[""],nativeName:e.nativeName||"Unknown Native Name",numericCode:e.numericCode||"",languages:e.languages||[{iso639_1:"",iso639_2:"",name:"",nativeName:""}],translations:e.translations||{de:"",es:"",fr:"",ja:"",it:"",br:"",pt:"",nl:"",hr:"",fa:""},regionalBlocs:e.regionalBlocs||[{acronym:"",name:"",otherAcronyms:[""],otherNames:[""]}],cioc:e.cioc||""})})},error:e=>this.errorMessage=e})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-africa-list"]],decls:22,vars:2,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table-responsive"],[1,"table","mb-0"],[4,"ngFor","ngForOf"],[3,"routerLink"],[3,"src","title"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"div",2),o["\u0275\u0275elementStart"](4,"div",3),o["\u0275\u0275elementStart"](5,"table",4),o["\u0275\u0275elementStart"](6,"thead"),o["\u0275\u0275elementStart"](7,"tr"),o["\u0275\u0275element"](8,"th"),o["\u0275\u0275elementStart"](9,"th"),o["\u0275\u0275text"](10,"Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"th"),o["\u0275\u0275text"](12,"Capital"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"th"),o["\u0275\u0275text"](14,"Population"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"th"),o["\u0275\u0275text"](16,"Currencies"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"th"),o["\u0275\u0275text"](18,"Flag"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](19,"th"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](20,"tbody"),o["\u0275\u0275template"](21,m,16,16,"tr",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.pageTitle," "),o["\u0275\u0275advance"](19),o["\u0275\u0275property"]("ngForOf",t.filteredCountry))},directives:[r.NgForOf,a.f],pipes:[i.a],styles:[""]}),e})();var s=n("6eUx");function p(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",6),o["\u0275\u0275element"](1,"img",15),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](1),o["\u0275\u0275styleProp"]("height",250,"px")("margin",10,"px"),o["\u0275\u0275property"]("src",e.country.flag,o["\u0275\u0275sanitizeUrl"])("title",e.country.name)}}const u=function(){return["/africa"]};function g(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",4),o["\u0275\u0275elementStart"](1,"div",5),o["\u0275\u0275elementStart"](2,"div",6),o["\u0275\u0275elementStart"](3,"table",7),o["\u0275\u0275element"](4,"thead"),o["\u0275\u0275elementStart"](5,"tbody"),o["\u0275\u0275elementStart"](6,"tr"),o["\u0275\u0275elementStart"](7,"td",8),o["\u0275\u0275text"](8,"Name:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"td",6),o["\u0275\u0275text"](10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"tr"),o["\u0275\u0275elementStart"](12,"td",9),o["\u0275\u0275text"](13,"Capital:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"td",6),o["\u0275\u0275text"](15),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"tr"),o["\u0275\u0275elementStart"](17,"td",9),o["\u0275\u0275text"](18,"Region:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"td",6),o["\u0275\u0275text"](20),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"tr"),o["\u0275\u0275elementStart"](22,"td",9),o["\u0275\u0275text"](23,"Subregion:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](24,"td",6),o["\u0275\u0275text"](25),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](26,"tr"),o["\u0275\u0275elementStart"](27,"td",9),o["\u0275\u0275text"](28,"Population:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](29,"td",6),o["\u0275\u0275text"](30),o["\u0275\u0275pipe"](31,"thousandSeparator"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](32,"tr"),o["\u0275\u0275elementStart"](33,"td",9),o["\u0275\u0275text"](34,"Currencies:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](35,"td",6),o["\u0275\u0275text"](36),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](37,p,2,6,"div",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](38,"div",11),o["\u0275\u0275elementStart"](39,"div",12),o["\u0275\u0275elementStart"](40,"button",13),o["\u0275\u0275element"](41,"i",14),o["\u0275\u0275text"](42," Back "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](10),o["\u0275\u0275textInterpolate"](e.country.name),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](e.country.capital),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](e.country.region),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](e.country.subregion),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](31,10,e.country.population)),o["\u0275\u0275advance"](6),o["\u0275\u0275textInterpolate3"]("",e.country.currencies[0].name," | ",e.country.currencies[0].code," | ",e.country.currencies[0].symbol,""),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",e.country.flag),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction0"](12,u))}}function f(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",16),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"]("",e.errorMessage,"\n")}}const v=[{path:"",component:c},{path:":id",component:(()=>{class e{constructor(e,t){this.countriesService=e,this.route=t,this.pageTitle="Country Detail"}ngOnInit(){this.route.paramMap.subscribe(e=>{const t=+e.get("id");this.getCountry(t)})}getCountry(e){this.countriesService.getCountry(e).subscribe({next:e=>this.onCountryRetrieved(e),error:e=>this.errorMessage=e})}onCountryRetrieved(e){this.country=e,this.pageTitle=this.country?`Country Detail: ${this.country.name}`:"No country found!"}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-africa-detail"]],decls:5,vars:3,consts:[[1,"card"],[1,"card-header"],["class","card-body",4,"appMyIf"],["class","alert alert-danger",4,"ngIf"],[1,"card-body"],[1,"row"],[1,"col-md-6"],[1,"table","table-striped"],[1,"col-xs-3"],[1,"col-md-3"],["class","col-md-6",4,"ngIf"],[1,"row","mt-4"],[1,"col-md-4"],["queryParamsHandling","preserve",1,"btn","btn-outline-secondary","mr-3",2,"width","80px",3,"routerLink"],[1,"fa","fa-chevron-left"],[1,"center-block","img-responsive",3,"src","title"],[1,"alert","alert-danger"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](3,g,43,13,"div",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](4,f,2,1,"div",3)),2&e&&(o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",t.pageTitle," "),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("appMyIf",t.country),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.errorMessage))},directives:[s.a,r.NgIf,a.d],pipes:[i.a],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,a.g.forChild(v)],a.g]}),e})();var S=n("K99g"),x=n("epv/");n.d(t,"AfricaModule",(function(){return h}));let h=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,y,S.a,x.a]]}),e})()}}]);