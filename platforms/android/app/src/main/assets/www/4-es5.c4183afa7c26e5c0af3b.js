(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+dSU":function(n,l,t){"use strict";t.d(l,"a",(function(){return u})),t("ZZ/e");var e=t("3kIx"),u=(t("EnSQ"),function(){function n(n,l){this.modalCtrl=n,this.dataService=l,this.isLoading=!0,this._strings=e.a}return Object.defineProperty(n.prototype,"strings",{get:function(){return this._strings},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var n=this;this.isLoading=!0,this.dataService.getDataStrings().subscribe((function(l){var t=l[0];n.privacypolicy=t.st_privacypolicy,n.termsofservice=t.st_termsofservice,n.isLoading=!1}))},n.prototype.goClosePage=function(){this.modalCtrl.dismiss()},n}())},EnSQ:function(n,l,t){"use strict";t.d(l,"a",(function(){return r}));var e=t("0np6"),u=t("CcnG"),o=t("t/Na"),i=e.a.Url,r=function(){function n(n){this.http=n,this.page=0}return n.prototype.ejectQuery=function(n){return console.log(n),n=i+n,console.log(n),console.log(i),console.log(n),this.http.get(n)},n.prototype.getDataStrings=function(){var n=this.ejectQuery("/json/data_strings.php");return console.log(n),this.ejectQuery("/json/data_strings.php")},n.prototype.getDataMotivation=function(){var n=this.ejectQuery("/json/data_quotes.php");return console.log(n),this.ejectQuery("/json/data_quotes.php")},n.prototype.getDataFeaturedDiets=function(){var n=this.ejectQuery("/json/data_diets.php?featured=1");return console.log(n),this.ejectQuery("/json/data_diets.php?featured=1")},n.prototype.getDataCategories=function(){var n=this.ejectQuery("/json/data_categories.php");return console.log(n),this.ejectQuery("/json/data_categories.php")},n.prototype.getDataGoals=function(){var n=this.ejectQuery("/json/data_goals.php");return console.log(n),this.ejectQuery("/json/data_goals.php")},n.prototype.getDataLevels=function(){var n=this.ejectQuery("/json/data_levels.php");return console.log(n),this.ejectQuery("/json/data_levels.php")},n.prototype.getDataTags=function(){var n=this.ejectQuery("/json/data_tags.php");return console.log(n),this.ejectQuery("/json/data_tags.php")},n.prototype.getDataEquipments=function(){var n=this.ejectQuery("/json/data_equipments.php");return console.log(n),this.ejectQuery("/json/data_equipments.php")},n.prototype.getDataBodyparts=function(){var n=this.ejectQuery("/json/data_bodyparts.php");return console.log(n),this.ejectQuery("/json/data_bodyparts.php")},n.prototype.getDataFeaturedPosts=function(){var n=this.ejectQuery("/json/data_posts.php?featured=1");return console.log(n),this.ejectQuery("/json/data_posts.php?featured=1")},n.prototype.getDataRecentPosts=function(n){var l=this.ejectQuery("/json/data_posts.php?limit="+n);return console.log(l),this.ejectQuery("/json/data_posts.php?limit="+n)},n.prototype.getDataWorkoutsByGoal=function(n){var l=this.ejectQuery("/json/data_workouts.php?goal="+n);return console.log(l),this.ejectQuery("/json/data_workouts.php?goal="+n)},n.prototype.getDataWorkoutsByLevel=function(n){var l=this.ejectQuery("/json/data_workouts.php?level="+n);return console.log(l),this.ejectQuery("/json/data_workouts.php?level="+n)},n.prototype.getDataExercisesByBodypart=function(n){var l=this.ejectQuery("/json/data_bodypart.php?id="+n);return console.log(l),this.ejectQuery("/json/data_bodypart.php?id="+n)},n.prototype.getDataExercisesByEquipment=function(n){var l=this.ejectQuery("/json/data_equipment.php?id="+n);return console.log(l),this.ejectQuery("/json/data_equipment.php?id="+n)},n.prototype.getDataDietsByCategory=function(n){var l=this.ejectQuery("/json/data_diets.php?category="+n);return console.log(l),this.ejectQuery("/json/data_diets.php?category="+n)},n.prototype.getDataPostsByTag=function(n){var l=this.ejectQuery("/json/data_posts.php?tag="+n);return console.log(l),this.ejectQuery("/json/data_posts.php?tag="+n)},n.prototype.getDataExerciseById=function(n){var l=this.ejectQuery("/json/data_exercises.php?id="+n+"&limit=1");return console.log(l),this.ejectQuery("/json/data_exercises.php?id="+n+"&limit=1")},n.prototype.getDataWorkoutById=function(n){var l=this.ejectQuery("/json/data_workouts.php?id="+n+"&limit=1");return console.log(l),this.ejectQuery("/json/data_workouts.php?id="+n+"&limit=1")},n.prototype.getDataDietById=function(n){var l=this.ejectQuery("/json/data_diets.php?id="+n+"&limit=1");return console.log(l),this.ejectQuery("/json/data_diets.php?id="+n+"&limit=1")},n.prototype.getDataPostById=function(n){var l=this.ejectQuery("/json/data_posts.php?id="+n+"&limit=1");return console.log(l),this.ejectQuery("/json/data_posts.php?id="+n+"&limit=1")},n.prototype.getDataWorkoutExercisesByDay=function(n,l){var t=this.ejectQuery("/json/data_days.php?id="+n+"&day="+l);return console.log(t),this.ejectQuery("/json/data_days.php?id="+n+"&day="+l)},n.ngInjectableDef=u.Tb({factory:function(){return new n(u.Ub(o.c))},token:n,providedIn:"root"}),n}()},P3JS:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){return function(){}}()},"S+uf":function(n,l,t){"use strict";var e=t("CcnG"),u=t("oBZk"),o=t("ZZ/e"),i=t("gIcY"),r=t("XHxw"),a=t("lGQG"),s=t("ZYCi");t.d(l,"a",(function(){return g}));var c=e.sb({encapsulation:0,styles:[[".start-logo[_ngcontent-%COMP%]{max-width:160px;margin-bottom:20px}.button-h[_ngcontent-%COMP%]{height:50px;font-size:14px;font-weight:700!important;margin:10px 0 0!important;text-transform:uppercase!important}.go-to-terms[_ngcontent-%COMP%]{text-align:center;margin-top:20px;font-size:13px;text-transform:uppercase!important}.go-to-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#807e7e}.line-input[_ngcontent-%COMP%]{margin-bottom:0!important}.line-input[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:transparent!important;--background-activated:white;--background-focused:white;--background-hover:white;--highlight-height:0;border:1px solid #807e7e;border-radius:50px}.line-input[_ngcontent-%COMP%]   ion-item.item-has-focus[_ngcontent-%COMP%]{border:1px solid var(--ion-color-primary)}.line-input[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#807e7e!important;font-weight:300;font-size:14px!important}.line-input[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#807e7e!important;margin-right:8px!important}.sc-ion-input-ios-h[_ngcontent-%COMP%]{font-size:14px!important}"]],data:{}});function p(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,12,"ion-header",[["class","lightheader"],["no-border",""]],null,null,null,u.T,u.m)),e.tb(1,49152,null,0,o.z,[e.h,e.k,e.z],null,null),(n()(),e.ub(2,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,u.nb,u.G)),e.tb(3,49152,null,0,o.Ab,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(n()(),e.ub(4,0,null,0,2,"ion-title",[["class","ion-text-capitalize"]],null,null,null,u.mb,u.F)),e.tb(5,49152,null,0,o.yb,[e.h,e.k,e.z],null,null),(n()(),e.Ob(6,0,[" "," "])),(n()(),e.ub(7,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,u.K,u.d)),e.tb(8,49152,null,0,o.j,[e.h,e.k,e.z],null,null),(n()(),e.ub(9,0,null,0,3,"ion-button",[["color","dark"],["mode","md"],["slot","start"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goClosePage()&&e),e}),u.J,u.c)),e.tb(10,49152,null,0,o.i,[e.h,e.k,e.z],{color:[0,"color"],mode:[1,"mode"]},null),(n()(),e.ub(11,0,null,0,1,"ion-icon",[["name","md-arrow-back"]],null,null,null,u.U,u.n)),e.tb(12,49152,null,0,o.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.ub(13,0,null,null,58,"ion-content",[["fixed",""]],null,null,null,u.Q,u.j)),e.tb(14,49152,null,0,o.s,[e.h,e.k,e.z],null,null),(n()(),e.ub(15,0,null,0,56,"ion-grid",[["fixed",""],["style","height: 100%;"]],null,null,null,u.S,u.l)),e.tb(16,49152,null,0,o.y,[e.h,e.k,e.z],{fixed:[0,"fixed"]},null),(n()(),e.ub(17,0,null,0,54,"ion-row",[["class","ion-justify-content-center ion-align-items-center"],["style","height: 100%;"]],null,null,null,u.db,u.w)),e.tb(18,49152,null,0,o.hb,[e.h,e.k,e.z],null,null),(n()(),e.ub(19,0,null,0,52,"ion-col",[["class","ion-text-center"],["size","8"]],null,null,null,u.P,u.i)),e.tb(20,49152,null,0,o.r,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.ub(21,0,null,0,0,"img",[["class","start-logo"],["src","./assets/images/logo_dark.png"]],null,null,null,null,null)),(n()(),e.ub(22,0,null,0,46,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,t){var u=!0,o=n.component;return"submit"===l&&(u=!1!==e.Gb(n,24).onSubmit(t)&&u),"reset"===l&&(u=!1!==e.Gb(n,24).onReset()&&u),"ngSubmit"===l&&(u=!1!==o.tryRegister(o.validationsform.value)&&u),u}),null,null)),e.tb(23,16384,null,0,i.t,[],null,null),e.tb(24,540672,null,0,i.e,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Lb(2048,null,i.a,null,[i.e]),e.tb(26,16384,null,0,i.m,[[4,i.a]],null,null),(n()(),e.ub(27,0,null,null,12,"ion-list",[["class","line-input"],["mode","md"]],null,null,null,u.ab,u.s)),e.tb(28,49152,null,0,o.M,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(n()(),e.ub(29,0,null,0,10,"ion-item",[["mode","md"]],null,null,null,u.X,u.q)),e.tb(30,49152,null,0,o.F,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(n()(),e.ub(31,0,null,0,1,"ion-icon",[["name","md-person"],["size","small"],["slot","start"]],null,null,null,u.U,u.n)),e.tb(32,49152,null,0,o.A,[e.h,e.k,e.z],{name:[0,"name"],size:[1,"size"]},null),(n()(),e.ub(33,0,null,0,6,"ion-input",[["class","ion-text-left"],["formControlName","name"],["placeholder","Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Gb(n,34)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Gb(n,34)._handleInputEvent(t.target)&&u),u}),u.W,u.p)),e.tb(34,16384,null,0,o.Mb,[e.k],null,null),e.Lb(1024,null,i.j,(function(n){return[n]}),[o.Mb]),e.tb(36,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.j],[2,i.s]],{name:[0,"name"]},null),e.Lb(2048,null,i.k,null,[i.d]),e.tb(38,16384,null,0,i.l,[[4,i.k]],null,null),e.tb(39,49152,null,0,o.E,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.ub(40,0,null,null,12,"ion-list",[["class","line-input"],["mode","md"]],null,null,null,u.ab,u.s)),e.tb(41,49152,null,0,o.M,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(n()(),e.ub(42,0,null,0,10,"ion-item",[["mode","md"]],null,null,null,u.X,u.q)),e.tb(43,49152,null,0,o.F,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(n()(),e.ub(44,0,null,0,1,"ion-icon",[["name","md-mail"],["size","small"],["slot","start"]],null,null,null,u.U,u.n)),e.tb(45,49152,null,0,o.A,[e.h,e.k,e.z],{name:[0,"name"],size:[1,"size"]},null),(n()(),e.ub(46,0,null,0,6,"ion-input",[["class","ion-text-left"],["formControlName","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Gb(n,47)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Gb(n,47)._handleInputEvent(t.target)&&u),u}),u.W,u.p)),e.tb(47,16384,null,0,o.Mb,[e.k],null,null),e.Lb(1024,null,i.j,(function(n){return[n]}),[o.Mb]),e.tb(49,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.j],[2,i.s]],{name:[0,"name"]},null),e.Lb(2048,null,i.k,null,[i.d]),e.tb(51,16384,null,0,i.l,[[4,i.k]],null,null),e.tb(52,49152,null,0,o.E,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.ub(53,0,null,null,12,"ion-list",[["class","line-input"],["mode","md"]],null,null,null,u.ab,u.s)),e.tb(54,49152,null,0,o.M,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(n()(),e.ub(55,0,null,0,10,"ion-item",[["mode","md"]],null,null,null,u.X,u.q)),e.tb(56,49152,null,0,o.F,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(n()(),e.ub(57,0,null,0,1,"ion-icon",[["name","md-lock"],["size","small"],["slot","start"]],null,null,null,u.U,u.n)),e.tb(58,49152,null,0,o.A,[e.h,e.k,e.z],{name:[0,"name"],size:[1,"size"]},null),(n()(),e.ub(59,0,null,0,6,"ion-input",[["class","ion-text-left"],["formControlName","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Gb(n,60)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Gb(n,60)._handleInputEvent(t.target)&&u),u}),u.W,u.p)),e.tb(60,16384,null,0,o.Mb,[e.k],null,null),e.Lb(1024,null,i.j,(function(n){return[n]}),[o.Mb]),e.tb(62,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.j],[2,i.s]],{name:[0,"name"]},null),e.Lb(2048,null,i.k,null,[i.d]),e.tb(64,16384,null,0,i.l,[[4,i.k]],null,null),e.tb(65,49152,null,0,o.E,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.ub(66,0,null,null,2,"ion-button",[["class","button-h"],["color","primary"],["expand","block"],["fill","solid"],["mode","ios"],["shape","round"],["size","default"],["type","submit"]],null,null,null,u.J,u.c)),e.tb(67,49152,null,0,o.i,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],fill:[3,"fill"],mode:[4,"mode"],shape:[5,"shape"],size:[6,"size"],type:[7,"type"]},null),(n()(),e.Ob(68,0,[" "," "])),(n()(),e.ub(69,0,null,0,2,"p",[["class","go-to-terms"]],null,null,null,null,null)),(n()(),e.ub(70,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goTermsPage()&&e),e}),null,null)),(n()(),e.Ob(71,null,["",""]))],(function(n,l){var t=l.component;n(l,3,0,"ios"),n(l,10,0,"dark","md"),n(l,12,0,"md-arrow-back"),n(l,16,0,""),n(l,20,0,"8"),n(l,24,0,t.validationsform),n(l,28,0,"md"),n(l,30,0,"md"),n(l,32,0,"md-person","small"),n(l,36,0,"name"),n(l,39,0,"Name","text"),n(l,41,0,"md"),n(l,43,0,"md"),n(l,45,0,"md-mail","small"),n(l,49,0,"email"),n(l,52,0,"Email","email"),n(l,54,0,"md"),n(l,56,0,"md"),n(l,58,0,"md-lock","small"),n(l,62,0,"password"),n(l,65,0,"Password","password"),n(l,67,0,"primary",!t.validationsform.valid,"block","solid","ios","round","default","submit")}),(function(n,l){var t=l.component;n(l,6,0,t.strings.ST27),n(l,22,0,e.Gb(l,26).ngClassUntouched,e.Gb(l,26).ngClassTouched,e.Gb(l,26).ngClassPristine,e.Gb(l,26).ngClassDirty,e.Gb(l,26).ngClassValid,e.Gb(l,26).ngClassInvalid,e.Gb(l,26).ngClassPending),n(l,33,0,e.Gb(l,38).ngClassUntouched,e.Gb(l,38).ngClassTouched,e.Gb(l,38).ngClassPristine,e.Gb(l,38).ngClassDirty,e.Gb(l,38).ngClassValid,e.Gb(l,38).ngClassInvalid,e.Gb(l,38).ngClassPending),n(l,46,0,e.Gb(l,51).ngClassUntouched,e.Gb(l,51).ngClassTouched,e.Gb(l,51).ngClassPristine,e.Gb(l,51).ngClassDirty,e.Gb(l,51).ngClassValid,e.Gb(l,51).ngClassInvalid,e.Gb(l,51).ngClassPending),n(l,59,0,e.Gb(l,64).ngClassUntouched,e.Gb(l,64).ngClassTouched,e.Gb(l,64).ngClassPristine,e.Gb(l,64).ngClassDirty,e.Gb(l,64).ngClassValid,e.Gb(l,64).ngClassInvalid,e.Gb(l,64).ngClassPending),n(l,68,0,t.strings.ST28),n(l,71,0,t.strings.ST82)}))}function d(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,1,"app-signup",[],null,null,null,p,c)),e.tb(1,114688,null,0,r.a,[a.a,o.Hb,i.b,s.m,o.Fb,o.Gb,o.Eb],null,null)],(function(n,l){n(l,1,0)}),null)}var g=e.qb("app-signup",r.a,d,{},{},[])},UUSl:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){return function(){}}()},XHxw:function(n,l,t){"use strict";t.d(l,"a",(function(){return a}));var e=t("mrSG"),u=t("gIcY"),o=(t("lGQG"),t("ZZ/e"),t("3kIx")),i=t("Wcq6"),r=t("+dSU"),a=function(){function n(n,l,t,e,u,i,r){this.authService=n,this.navCtrl=l,this.formBuilder=t,this.router=e,this.menuCtrl=u,this.modalCtrl=i,this.loadingController=r,this._strings=o.a}return Object.defineProperty(n.prototype,"strings",{get:function(){return this._strings},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.validationsform=this.formBuilder.group({name:new u.c("",u.p.compose([u.p.required])),email:new u.c("",u.p.compose([u.p.required,u.p.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new u.c("",u.p.compose([u.p.minLength(6),u.p.required]))})},n.prototype.tryRegister=function(n){var l=this;this.authService.doRegister(n).then((function(t){i.auth().currentUser.updateProfile({displayName:n.name}),l.modalCtrl.dismiss(),l.router.navigate(["/home"])}),(function(n){l.presentAlert("auth/email-already-in-use"===n.code?o.a.ST36:o.a.ST32)}))},n.prototype.ionViewWillEnter=function(){this.menuCtrl.enable(!1)},n.prototype.presentAlert=function(n){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(l){switch(l.label){case 0:return[4,this.loadingController.create({spinner:null,duration:2e3,message:n,mode:"ios"})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},n.prototype.goClosePage=function(){this.modalCtrl.dismiss()},n.prototype.goTermsPage=function(){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:r.a})];case 1:return n.sent().present(),[2]}}))}))},n}()},eOyQ:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t("XHxw");var e=function(){return function(){}}()},exxb:function(n,l,t){"use strict";var e=t("CcnG"),u=t("coIi"),o=t("qQYQ"),i=t("oBZk"),r=t("ZZ/e"),a=t("Ip0R"),s=t("+dSU"),c=t("EnSQ");t.d(l,"a",(function(){return m}));var p=e.sb({encapsulation:0,styles:[[""]],data:{}});function d(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,1,"app-loading",[],null,null,null,u.b,u.a)),e.tb(1,114688,null,0,o.a,[],null,null)],(function(n,l){n(l,1,0)}),null)}function g(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.ub(2,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,l){var t=l.component;n(l,1,0,t.privacypolicy),n(l,2,0,t.termsofservice)}))}function b(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,14,"ion-header",[["class","lightheader"],["no-border",""]],null,null,null,i.T,i.m)),e.tb(1,49152,null,0,r.z,[e.h,e.k,e.z],null,null),(n()(),e.ub(2,0,null,0,12,"ion-toolbar",[["mode","ios"]],null,null,null,i.nb,i.G)),e.tb(3,49152,null,0,r.Ab,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(n()(),e.ub(4,0,null,0,2,"ion-title",[["class","ion-text-capitalize"]],null,null,null,i.mb,i.F)),e.tb(5,49152,null,0,r.yb,[e.h,e.k,e.z],null,null),(n()(),e.Ob(6,0,[" "," "])),(n()(),e.ub(7,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,i.K,i.d)),e.tb(8,49152,null,0,r.j,[e.h,e.k,e.z],null,null),(n()(),e.ub(9,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,i.K,i.d)),e.tb(10,49152,null,0,r.j,[e.h,e.k,e.z],null,null),(n()(),e.ub(11,0,null,0,3,"ion-button",[["color","dark"],["mode","md"],["slot","start"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goClosePage()&&e),e}),i.J,i.c)),e.tb(12,49152,null,0,r.i,[e.h,e.k,e.z],{color:[0,"color"],mode:[1,"mode"]},null),(n()(),e.ub(13,0,null,0,1,"ion-icon",[["name","md-arrow-back"]],null,null,null,i.U,i.n)),e.tb(14,49152,null,0,r.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.ub(15,0,null,null,5,"ion-content",[["class","ion-padding"],["fixed",""]],null,null,null,i.Q,i.j)),e.tb(16,49152,null,0,r.s,[e.h,e.k,e.z],null,null),(n()(),e.jb(16777216,null,0,1,null,d)),e.tb(18,16384,null,0,a.i,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.jb(16777216,null,0,1,null,g)),e.tb(20,16384,null,0,a.i,[e.P,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"ios"),n(l,12,0,"dark","md"),n(l,14,0,"md-arrow-back"),n(l,18,0,t.isLoading),n(l,20,0,!t.isLoading)}),(function(n,l){n(l,6,0,l.component.strings.ST82)}))}function h(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,1,"app-termsguest",[],null,null,null,b,p)),e.tb(1,114688,null,0,s.a,[r.Gb,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}var m=e.qb("app-termsguest",s.a,h,{},{},[])},kwsO:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t("+dSU");var e=function(){return function(){}}()}}]);