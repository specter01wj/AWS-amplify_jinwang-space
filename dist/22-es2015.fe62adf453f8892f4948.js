(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{gm4s:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),o=n("3Pt+"),a=n("tk/3"),l=n("tyNb"),d=n("8VDV"),i=n("fXoL"),m=n("LRne"),c=n("z6cu"),s=n("lJxs"),p=n("JIr8");let u=(()=>{class e{constructor(e,t){this.router=e,this.http=t,this.userUrl="api/userData",this.itemsUrl="api/products"}login(e,t){return this.http.get(this.userUrl).pipe(Object(s.a)(e=>(this.userSubject=e[0],e)))}getItems(){return this.http.get(this.itemsUrl).pipe(Object(p.a)(this.handleError))}getItem(e){return 0===e?Object(m.a)(this.initializeProduct()):this.http.get(`${this.itemsUrl}/${e}`).pipe(Object(p.a)(this.handleError))}get userValue(){return this.userSubject}initializeProduct(){return{id:0,itemName:null,itemType:null,provider:null,qty:0,availDate:null,vendor:null,location:null}}handleError(e){let t;return t=e.error instanceof ErrorEvent?`An error occurred: ${e.error.message}`:`Backend returned code ${e.status}: ${e.body.error}`,console.error(e),Object(c.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](l.c),i["\u0275\u0275inject"](a.b))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const f=function(e){return["./geodis-items",e]};function h(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"tr"),i["\u0275\u0275element"](1,"td"),i["\u0275\u0275elementStart"](2,"td"),i["\u0275\u0275elementStart"](3,"a",3),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"td"),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"td"),i["\u0275\u0275text"](8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"td"),i["\u0275\u0275text"](10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](11,"td"),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction1"](5,f,e.id)),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.itemName," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](e.itemType),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](e.location),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](e.qty)}}const v=function(){return["./geodisCreate"]};let S=(()=>{class e{constructor(e){this.accountService=e,this.products=[],this.errorMessage=""}ngOnInit(){this.accountService.getItems().subscribe({next:e=>{this.products=e},error:e=>this.errorMessage=e})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](u))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-items"]],decls:18,vars:3,consts:[[1,"table","mb-0"],[4,"ngFor","ngForOf"],[1,"btn","btn-outline-primary","btn-sm",3,"routerLink"],[3,"routerLink"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"table",0),i["\u0275\u0275elementStart"](1,"thead"),i["\u0275\u0275elementStart"](2,"tr"),i["\u0275\u0275element"](3,"th"),i["\u0275\u0275elementStart"](4,"th"),i["\u0275\u0275text"](5,"Item"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"th"),i["\u0275\u0275text"](7,"Item Type"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"th"),i["\u0275\u0275text"](9,"Location"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"th"),i["\u0275\u0275text"](11,"QTY"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](12,"th"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"tbody"),i["\u0275\u0275template"](14,h,12,7,"tr",1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"tfoot"),i["\u0275\u0275elementStart"](16,"button",2),i["\u0275\u0275text"](17," Add Item "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](14),i["\u0275\u0275property"]("ngForOf",t.products),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](2,v)))},directives:[r.NgForOf,l.d,l.f],styles:[""]}),e})();const g=function(e){return["/geodis-items",e]};function E(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",24),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275propertyInterpolate"]("value",e),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e," ")}}function b(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",25),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"]("",e.errorMessage," ")}}const I=function(){return["./geodis-dashboard"]},x=[{path:"",component:d.a},{path:"geodis-dashboard",component:(()=>{class e{constructor(){this.pageTitle="Geodis Dashboard"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-home"]],decls:6,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table-responsive"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"div",2),i["\u0275\u0275elementStart"](4,"div",3),i["\u0275\u0275element"](5,"app-items"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"](" ",t.pageTitle," "))},directives:[S],styles:[""]}),e})()},{path:"geodis-items",component:S},{path:"geodis-items/:id",component:(()=>{class e{constructor(e,t,n){this.route=e,this.router=t,this.accountService=n,this.errorMessage=""}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");e&&this.getProduct(+e)}getProduct(e){this.accountService.getItem(e).subscribe({next:e=>this.product=e,error:e=>this.errorMessage=e})}onBack(){this.router.navigate(["./geodis-dashboard"],{relativeTo:this.route.parent})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](l.c),i["\u0275\u0275directiveInject"](u))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-item-detail"]],decls:34,vars:8,consts:[[1,"table","mb-0"],[3,"routerLink"],[1,"btn","btn-outline-secondary","mr-3",2,"width","80px",3,"click"],[1,"fa","fa-chevron-left"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"table",0),i["\u0275\u0275elementStart"](1,"thead"),i["\u0275\u0275elementStart"](2,"tr"),i["\u0275\u0275element"](3,"th"),i["\u0275\u0275elementStart"](4,"th"),i["\u0275\u0275text"](5,"Item"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"th"),i["\u0275\u0275text"](7,"Item Type"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"th"),i["\u0275\u0275text"](9,"Provider"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"th"),i["\u0275\u0275text"](11,"Vendor"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"th"),i["\u0275\u0275text"](13,"Qty"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](14,"th"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"tbody"),i["\u0275\u0275elementStart"](16,"tr"),i["\u0275\u0275element"](17,"td"),i["\u0275\u0275elementStart"](18,"td"),i["\u0275\u0275elementStart"](19,"a",1),i["\u0275\u0275text"](20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"td"),i["\u0275\u0275text"](22),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"td"),i["\u0275\u0275text"](24),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](25,"td"),i["\u0275\u0275text"](26),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](27,"td"),i["\u0275\u0275text"](28),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](29,"td"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](30,"tfoot"),i["\u0275\u0275elementStart"](31,"button",2),i["\u0275\u0275listener"]("click",(function(){return t.onBack()})),i["\u0275\u0275element"](32,"i",3),i["\u0275\u0275text"](33," Back "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](19),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction1"](6,g,t.product.id)),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",t.product.itemName," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](t.product.itemType),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](t.product.provider),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](t.product.vendor),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](t.product.qty))},directives:[l.f],styles:[""]}),e})()},{path:"geodisCreate",component:(()=>{class e{constructor(e,t,n){this.fb=e,this.route=t,this.router=n,this.pageTitle="Item Create",this.powers=["Really Smart","Super Flexible","Weather Changer"],this.productForm=e.group({productName:[""],productCodeId:[""],starRatingId:[""],qtyId:[""],availDateId:[""],locationId:[""]})}ngOnInit(){}saveProduct(){this.productForm.reset(),this.router.navigate(["./geodis-dashboard"])}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.FormBuilder),i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](l.c))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-item-create"]],decls:45,vars:6,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group","row","mb-2"],["for","productNameId",1,"col-md-2","col-form-label"],[1,"col-md-8"],["id","productNameId","type","text","placeholder","Name (required)","formControlName","productName",1,"form-control"],["for","productCodeId",1,"col-md-2","col-form-label"],["id","productCodeId","type","text","placeholder","Code (required)","formControlName","productCodeId",1,"form-control"],["value","0"],[3,"value",4,"ngFor","ngForOf"],["for","starRatingId",1,"col-md-2","col-form-label"],["id","starRatingId","type","text","placeholder","Provider","formControlName","starRatingId",1,"form-control"],["for","qtyId",1,"col-md-2","col-form-label"],["id","qtyId","type","text","placeholder","Qty","formControlName","qtyId",1,"form-control"],["for","availDateId",1,"col-md-2","col-form-label"],["id","availDateId","type","date","placeholder","Available date","formControlName","availDateId",1,"form-control"],["for","locationId",1,"col-md-2","col-form-label"],["id","locationId","type","text","placeholder","Location","formControlName","locationId",1,"form-control"],[1,"offset-md-2","col-md-4"],["type","submit",1,"btn","btn-primary","mr-3",2,"width","80px"],["type","button","title","Cancel your create",1,"btn","btn-outline-secondary","mr-3",2,"width","80px",3,"routerLink"],["class","alert alert-danger",4,"ngIf"],[3,"value"],[1,"alert","alert-danger"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"div",2),i["\u0275\u0275elementStart"](4,"form",3),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.saveProduct()})),i["\u0275\u0275elementStart"](5,"div",4),i["\u0275\u0275elementStart"](6,"label",5),i["\u0275\u0275text"](7,"Item Name"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"div",6),i["\u0275\u0275element"](9,"input",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"div",4),i["\u0275\u0275elementStart"](11,"label",8),i["\u0275\u0275text"](12,"Item Type"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"div",6),i["\u0275\u0275elementStart"](14,"select",9),i["\u0275\u0275elementStart"](15,"option",10),i["\u0275\u0275text"](16,"--No Selection--"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](17,E,2,2,"option",11),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"div",4),i["\u0275\u0275elementStart"](19,"label",12),i["\u0275\u0275text"](20,"Provider"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"div",6),i["\u0275\u0275element"](22,"input",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"div",4),i["\u0275\u0275elementStart"](24,"label",14),i["\u0275\u0275text"](25,"Qty"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](26,"div",6),i["\u0275\u0275element"](27,"input",15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"div",4),i["\u0275\u0275elementStart"](29,"label",16),i["\u0275\u0275text"](30,"Available date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"div",6),i["\u0275\u0275element"](32,"input",17),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](33,"div",4),i["\u0275\u0275elementStart"](34,"label",18),i["\u0275\u0275text"](35,"Location"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"div",6),i["\u0275\u0275element"](37,"input",19),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](38,"div",4),i["\u0275\u0275elementStart"](39,"div",20),i["\u0275\u0275elementStart"](40,"button",21),i["\u0275\u0275text"](41," Create "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](42,"button",22),i["\u0275\u0275text"](43," Cancel "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](44,b,2,1,"div",23),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"](" ",t.pageTitle," "),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("formGroup",t.productForm),i["\u0275\u0275advance"](13),i["\u0275\u0275property"]("ngForOf",t.powers),i["\u0275\u0275advance"](25),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](5,I)),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",t.errorMessage))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,o.DefaultValueAccessor,o.NgControlStatus,o.FormControlName,o.SelectControlValueAccessor,o.NgSelectOption,o["\u0275angular_packages_forms_forms_x"],r.NgForOf,l.d,r.NgIf],styles:[""]}),e})()},{path:"",redirectTo:"geodis-dashboard",pathMatch:"full"},{path:"**",redirectTo:""}];let y=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(x)],l.g]}),e})();n.d(t,"GeodisModule",(function(){return C}));let C=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,o.ReactiveFormsModule,a.c,y]]}),e})()}}]);