(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{EnSQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var s=n("0np6"),o=n("8Y7J"),l=n("IheW");const a=s.a.Url;let u=(()=>{class t{constructor(t){this.http=t,this.page=0}ejectQuery(t){return console.log(t),t=a+t,console.log(t),console.log(a),console.log(t),this.http.get(t)}getDataStrings(){const t=this.ejectQuery("/json/data_strings.php");return console.log(t),this.ejectQuery("/json/data_strings.php")}getDataMotivation(){const t=this.ejectQuery("/json/data_quotes.php");return console.log(t),this.ejectQuery("/json/data_quotes.php")}getDataFeaturedDiets(){const t=this.ejectQuery("/json/data_diets.php?featured=1");return console.log(t),this.ejectQuery("/json/data_diets.php?featured=1")}getDataCategories(){const t=this.ejectQuery("/json/data_categories.php");return console.log(t),this.ejectQuery("/json/data_categories.php")}getDataGoals(){const t=this.ejectQuery("/json/data_goals.php");return console.log(t),this.ejectQuery("/json/data_goals.php")}getDataLevels(){const t=this.ejectQuery("/json/data_levels.php");return console.log(t),this.ejectQuery("/json/data_levels.php")}getDataTags(){const t=this.ejectQuery("/json/data_tags.php");return console.log(t),this.ejectQuery("/json/data_tags.php")}getDataEquipments(){const t=this.ejectQuery("/json/data_equipments.php");return console.log(t),this.ejectQuery("/json/data_equipments.php")}getDataBodyparts(){const t=this.ejectQuery("/json/data_bodyparts.php");return console.log(t),this.ejectQuery("/json/data_bodyparts.php")}getDataFeaturedPosts(){const t=this.ejectQuery("/json/data_posts.php?featured=1");return console.log(t),this.ejectQuery("/json/data_posts.php?featured=1")}getDataRecentPosts(t){const e=this.ejectQuery("/json/data_posts.php?limit="+t);return console.log(e),this.ejectQuery("/json/data_posts.php?limit="+t)}getDataWorkoutsByGoal(t){const e=this.ejectQuery("/json/data_workouts.php?goal="+t);return console.log(e),this.ejectQuery("/json/data_workouts.php?goal="+t)}getDataWorkoutsByLevel(t){const e=this.ejectQuery("/json/data_workouts.php?level="+t);return console.log(e),this.ejectQuery("/json/data_workouts.php?level="+t)}getDataExercisesByBodypart(t){const e=this.ejectQuery("/json/data_bodypart.php?id="+t);return console.log(e),this.ejectQuery("/json/data_bodypart.php?id="+t)}getDataExercisesByEquipment(t){const e=this.ejectQuery("/json/data_equipment.php?id="+t);return console.log(e),this.ejectQuery("/json/data_equipment.php?id="+t)}getDataDietsByCategory(t){const e=this.ejectQuery("/json/data_diets.php?category="+t);return console.log(e),this.ejectQuery("/json/data_diets.php?category="+t)}getDataPostsByTag(t){const e=this.ejectQuery("/json/data_posts.php?tag="+t);return console.log(e),this.ejectQuery("/json/data_posts.php?tag="+t)}getDataExerciseById(t){const e=this.ejectQuery(`/json/data_exercises.php?id=${t}&limit=1`);return console.log(e),this.ejectQuery(`/json/data_exercises.php?id=${t}&limit=1`)}getDataWorkoutById(t){const e=this.ejectQuery(`/json/data_workouts.php?id=${t}&limit=1`);return console.log(e),this.ejectQuery(`/json/data_workouts.php?id=${t}&limit=1`)}getDataDietById(t){const e=this.ejectQuery(`/json/data_diets.php?id=${t}&limit=1`);return console.log(e),this.ejectQuery(`/json/data_diets.php?id=${t}&limit=1`)}getDataPostById(t){const e=this.ejectQuery(`/json/data_posts.php?id=${t}&limit=1`);return console.log(e),this.ejectQuery(`/json/data_posts.php?id=${t}&limit=1`)}getDataWorkoutExercisesByDay(t,e){const n=this.ejectQuery(`/json/data_days.php?id=${t}&day=${e}`);return console.log(n),this.ejectQuery(`/json/data_days.php?id=${t}&day=${e}`)}}return t.ngInjectableDef=o.Rb({factory:function(){return new t(o.Sb(l.c))},token:t,providedIn:"root"}),t})()},mn1c:function(t,e,n){"use strict";n.r(e);var s=n("8Y7J");class o{}var l=n("pMnS"),a=n("rT8w"),u=n("4uez"),r=n("coIi"),i=n("qQYQ"),c=n("oBZk"),p=n("ZZ/e"),h=n("4tq4"),d=n("vEyU"),j=n("SVse"),g=n("EnSQ"),b=n("3kIx");class y{constructor(t){this.dataService=t,this.isLoading=!0,this.strings=b.a}ngOnInit(){this.isLoading=!0,this.dataService.getDataStrings().subscribe(t=>{const e=t[0];this.privacypolicy=e.st_privacypolicy,this.termsofservice=e.st_termsofservice,this.isLoading=!1})}}var Q=s.qb({encapsulation:0,styles:[[""]],data:{}});function _(t){return s.Ob(0,[(t()(),s.sb(0,0,null,null,1,"app-loading",[],null,null,null,r.b,r.a)),s.rb(1,114688,null,0,i.a,[],null,null)],(function(t,e){t(e,1,0)}),null)}function m(t){return s.Ob(0,[(t()(),s.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(t()(),s.sb(1,0,null,null,0,"div",[["class","html"]],[[8,"innerHTML",1]],null,null,null,null)),(t()(),s.sb(2,0,null,null,0,"div",[["class","html"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(t,e){var n=e.component;t(e,1,0,n.privacypolicy),t(e,2,0,n.termsofservice)}))}function f(t){return s.Ob(0,[(t()(),s.sb(0,0,null,null,10,"ion-header",[["class","lightheader"],["no-border",""]],null,null,null,c.T,c.m)),s.rb(1,49152,null,0,p.z,[s.h,s.k,s.x],null,null),(t()(),s.sb(2,0,null,0,8,"ion-toolbar",[["mode","ios"]],null,null,null,c.nb,c.G)),s.rb(3,49152,null,0,p.Ab,[s.h,s.k,s.x],{mode:[0,"mode"]},null),(t()(),s.sb(4,0,null,0,2,"ion-title",[["class","ion-text-capitalize"]],null,null,null,c.mb,c.F)),s.rb(5,49152,null,0,p.yb,[s.h,s.k,s.x],null,null),(t()(),s.Mb(6,0,[" "," "])),(t()(),s.sb(7,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.K,c.d)),s.rb(8,49152,null,0,p.j,[s.h,s.k,s.x],null,null),(t()(),s.sb(9,0,null,0,1,"app-backbutton",[["color","dark"]],null,null,null,h.b,h.a)),s.rb(10,114688,null,0,d.a,[p.Hb],{color:[0,"color"]},null),(t()(),s.sb(11,0,null,null,5,"ion-content",[["class","ion-padding"]],null,null,null,c.Q,c.j)),s.rb(12,49152,null,0,p.s,[s.h,s.k,s.x],null,null),(t()(),s.hb(16777216,null,0,1,null,_)),s.rb(14,16384,null,0,j.i,[s.N,s.J],{ngIf:[0,"ngIf"]},null),(t()(),s.hb(16777216,null,0,1,null,m)),s.rb(16,16384,null,0,j.i,[s.N,s.J],{ngIf:[0,"ngIf"]},null)],(function(t,e){var n=e.component;t(e,3,0,"ios"),t(e,10,0,"dark"),t(e,14,0,n.isLoading),t(e,16,0,!n.isLoading)}),(function(t,e){t(e,6,0,e.component.strings.ST82)}))}function v(t){return s.Ob(0,[(t()(),s.sb(0,0,null,null,1,"app-terms",[],null,null,null,f,Q)),s.rb(1,114688,null,0,y,[g.a],null,null)],(function(t,e){t(e,1,0)}),null)}var D=s.ob("app-terms",y,v,{},{},[]),k=n("s7LF"),C=n("iTUp"),B=n("Lm9r"),I=n("iInd"),w=n("j1ZV");class x{}n.d(e,"TermsPageModuleNgFactory",(function(){return q}));var q=s.pb(o,[],(function(t){return s.Bb([s.Cb(512,s.j,s.ab,[[8,[l.a,a.a,u.a,D]],[3,s.j],s.v]),s.Cb(4608,j.k,j.j,[s.s,[2,j.t]]),s.Cb(4608,k.r,k.r,[]),s.Cb(4608,p.a,p.a,[s.x,s.g]),s.Cb(4608,p.Gb,p.Gb,[p.a,s.j,s.p]),s.Cb(4608,p.Jb,p.Jb,[p.a,s.j,s.p]),s.Cb(4608,k.b,k.b,[]),s.Cb(1073742336,j.b,j.b,[]),s.Cb(1073742336,k.q,k.q,[]),s.Cb(1073742336,k.f,k.f,[]),s.Cb(1073742336,p.Cb,p.Cb,[]),s.Cb(1073742336,C.a,C.a,[]),s.Cb(1073742336,B.a,B.a,[]),s.Cb(1073742336,I.o,I.o,[[2,I.t],[2,I.m]]),s.Cb(1073742336,k.o,k.o,[]),s.Cb(1073742336,w.a,w.a,[]),s.Cb(1073742336,x,x,[]),s.Cb(1073742336,o,o,[]),s.Cb(1024,I.k,(function(){return[[{path:"",component:y}]]}),[])])}))}}]);