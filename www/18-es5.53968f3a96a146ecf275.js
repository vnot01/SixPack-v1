(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{EnSQ:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var o=e("0np6"),l=e("CcnG"),a=e("t/Na"),r=o.a.Url,u=function(){function t(t){this.http=t,this.page=0}return t.prototype.ejectQuery=function(t){return console.log(t),t=r+t,console.log(t),console.log(r),console.log(t),this.http.get(t)},t.prototype.getDataStrings=function(){var t=this.ejectQuery("/json/data_strings.php");return console.log(t),this.ejectQuery("/json/data_strings.php")},t.prototype.getDataMotivation=function(){var t=this.ejectQuery("/json/data_quotes.php");return console.log(t),this.ejectQuery("/json/data_quotes.php")},t.prototype.getDataFeaturedDiets=function(){var t=this.ejectQuery("/json/data_diets.php?featured=1");return console.log(t),this.ejectQuery("/json/data_diets.php?featured=1")},t.prototype.getDataCategories=function(){var t=this.ejectQuery("/json/data_categories.php");return console.log(t),this.ejectQuery("/json/data_categories.php")},t.prototype.getDataGoals=function(){var t=this.ejectQuery("/json/data_goals.php");return console.log(t),this.ejectQuery("/json/data_goals.php")},t.prototype.getDataLevels=function(){var t=this.ejectQuery("/json/data_levels.php");return console.log(t),this.ejectQuery("/json/data_levels.php")},t.prototype.getDataTags=function(){var t=this.ejectQuery("/json/data_tags.php");return console.log(t),this.ejectQuery("/json/data_tags.php")},t.prototype.getDataEquipments=function(){var t=this.ejectQuery("/json/data_equipments.php");return console.log(t),this.ejectQuery("/json/data_equipments.php")},t.prototype.getDataBodyparts=function(){var t=this.ejectQuery("/json/data_bodyparts.php");return console.log(t),this.ejectQuery("/json/data_bodyparts.php")},t.prototype.getDataFeaturedPosts=function(){var t=this.ejectQuery("/json/data_posts.php?featured=1");return console.log(t),this.ejectQuery("/json/data_posts.php?featured=1")},t.prototype.getDataRecentPosts=function(t){var n=this.ejectQuery("/json/data_posts.php?limit="+t);return console.log(n),this.ejectQuery("/json/data_posts.php?limit="+t)},t.prototype.getDataWorkoutsByGoal=function(t){var n=this.ejectQuery("/json/data_workouts.php?goal="+t);return console.log(n),this.ejectQuery("/json/data_workouts.php?goal="+t)},t.prototype.getDataWorkoutsByLevel=function(t){var n=this.ejectQuery("/json/data_workouts.php?level="+t);return console.log(n),this.ejectQuery("/json/data_workouts.php?level="+t)},t.prototype.getDataExercisesByBodypart=function(t){var n=this.ejectQuery("/json/data_bodypart.php?id="+t);return console.log(n),this.ejectQuery("/json/data_bodypart.php?id="+t)},t.prototype.getDataExercisesByEquipment=function(t){var n=this.ejectQuery("/json/data_equipment.php?id="+t);return console.log(n),this.ejectQuery("/json/data_equipment.php?id="+t)},t.prototype.getDataDietsByCategory=function(t){var n=this.ejectQuery("/json/data_diets.php?category="+t);return console.log(n),this.ejectQuery("/json/data_diets.php?category="+t)},t.prototype.getDataPostsByTag=function(t){var n=this.ejectQuery("/json/data_posts.php?tag="+t);return console.log(n),this.ejectQuery("/json/data_posts.php?tag="+t)},t.prototype.getDataExerciseById=function(t){var n=this.ejectQuery("/json/data_exercises.php?id="+t+"&limit=1");return console.log(n),this.ejectQuery("/json/data_exercises.php?id="+t+"&limit=1")},t.prototype.getDataWorkoutById=function(t){var n=this.ejectQuery("/json/data_workouts.php?id="+t+"&limit=1");return console.log(n),this.ejectQuery("/json/data_workouts.php?id="+t+"&limit=1")},t.prototype.getDataDietById=function(t){var n=this.ejectQuery("/json/data_diets.php?id="+t+"&limit=1");return console.log(n),this.ejectQuery("/json/data_diets.php?id="+t+"&limit=1")},t.prototype.getDataPostById=function(t){var n=this.ejectQuery("/json/data_posts.php?id="+t+"&limit=1");return console.log(n),this.ejectQuery("/json/data_posts.php?id="+t+"&limit=1")},t.prototype.getDataWorkoutExercisesByDay=function(t,n){var e=this.ejectQuery("/json/data_days.php?id="+t+"&day="+n);return console.log(e),this.ejectQuery("/json/data_days.php?id="+t+"&day="+n)},t.ngInjectableDef=l.Tb({factory:function(){return new t(l.Ub(a.c))},token:t,providedIn:"root"}),t}()},cyjP:function(t,n,e){"use strict";e.r(n);var o=e("CcnG"),l=function(){return function(){}}(),a=e("pMnS"),r=e("rT8w"),u=e("4uez"),i=e("coIi"),s=e("qQYQ"),p=e("oBZk"),c=e("Ip0R"),d=e("ZZ/e"),h=e("ZYCi"),b=e("bruO"),g=e("4tq4"),y=e("vEyU"),j=e("3kIx"),f=e("EnSQ"),_=function(){function t(t,n){this.DataService=t,this.plt=n,this.strings=j.a,this.bodyparts=[],this.isLoading=!1}return t.prototype.ngOnInit=function(){var t=this;this.isLoading=!0,this.height=this.plt.height()/4.4+"px",this.DataService.getDataBodyparts().subscribe((function(n){t.bodyparts=n,0===t.bodyparts.length?t.height="157.273px":3===t.bodyparts.length||2===t.bodyparts.length?t.height="inherit !important":t.bodyparts.length>=4&&(t.height=t.plt.height()/4.4+"px"),t.isLoading=!1}))},t}(),v=o.sb({encapsulation:0,styles:[['ion-grid[_ngcontent-%COMP%], ion-row[_ngcontent-%COMP%]{height:100%}.cardcategory[_ngcontent-%COMP%]{width:100%;height:100%;background-size:cover;background-position:center;position:relative;border-radius:8px}.cardcategory[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);position:absolute;width:100%;height:100%;-webkit-box-pack:end;justify-content:flex-end;-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;text-align:left;border-radius:8px}.cardcategory[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]:before{content:"";background:var(--ion-color-primary);height:3px;display:block;width:40px;margin-left:auto;margin-right:auto;position:relative;top:0;margin-bottom:10px}.cardcategory[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]{padding-bottom:15px;width:100%;text-align:center;background-color:rgba(0,0,0,.5);border-bottom-left-radius:8px;border-bottom-right-radius:8px;position:relative}.cardcategory[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;margin:0;font-weight:700;font-size:14px;display:block;overflow:hidden;text-transform:uppercase;text-overflow:ellipsis;white-space:nowrap}']],data:{}});function Q(t){return o.Qb(0,[(t()(),o.ub(0,0,null,null,1,"app-loading",[],null,null,null,i.b,i.a)),o.tb(1,114688,null,0,s.a,[],null,null)],(function(t,n){t(n,1,0)}),null)}function k(t){return o.Qb(0,[(t()(),o.ub(0,0,null,null,13,"ion-col",[["size","6"]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==o.Gb(t,5).onClick()&&l),"click"===n&&(l=!1!==o.Gb(t,7).onClick(e)&&l),l}),p.P,p.i)),o.Lb(512,null,c.q,c.r,[o.k,o.t,o.D]),o.tb(2,278528,null,0,c.l,[c.q],{ngStyle:[0,"ngStyle"]},null),o.Jb(3,{height:0}),o.tb(4,49152,null,0,d.r,[o.h,o.k,o.z],{size:[0,"size"]},null),o.tb(5,16384,null,0,h.n,[h.m,h.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.Hb(6,3),o.tb(7,737280,null,0,d.Kb,[c.g,d.Hb,o.k,h.m,[2,h.n]],null,null),(t()(),o.ub(8,0,null,0,5,"div",[["class","cardcategory"]],[[4,"background-image",null]],null,null,null,null)),o.Kb(9,1),(t()(),o.ub(10,0,null,null,3,"div",[["class","overlay"]],null,null,null,null,null)),(t()(),o.ub(11,0,null,null,2,"div",[["class","texts"]],null,null,null,null,null)),(t()(),o.ub(12,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),o.Ob(13,null,["",""]))],(function(t,n){var e=t(n,3,0,n.component.height);t(n,2,0,e),t(n,4,0,"6");var o=t(n,6,0,"/ebodyparts",n.context.$implicit.bodypart_id,n.context.$implicit.bodypart_title);t(n,5,0,o),t(n,7,0)}),(function(t,n){var e="url("+o.Pb(n,8,0,t(n,9,0,o.Gb(n.parent,0),n.context.$implicit.bodypart_image))+")";t(n,8,0,e),t(n,13,0,n.context.$implicit.bodypart_title)}))}function m(t){return o.Qb(0,[o.Ib(0,b.a,[]),(t()(),o.ub(1,0,null,null,10,"ion-header",[["class","lightheader"],["no-border",""]],null,null,null,p.T,p.m)),o.tb(2,49152,null,0,d.z,[o.h,o.k,o.z],null,null),(t()(),o.ub(3,0,null,0,8,"ion-toolbar",[["mode","ios"]],null,null,null,p.nb,p.G)),o.tb(4,49152,null,0,d.Ab,[o.h,o.k,o.z],{mode:[0,"mode"]},null),(t()(),o.ub(5,0,null,0,2,"ion-title",[["class","ion-text-capitalize"]],null,null,null,p.mb,p.F)),o.tb(6,49152,null,0,d.yb,[o.h,o.k,o.z],null,null),(t()(),o.Ob(7,0,[" "," "])),(t()(),o.ub(8,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,p.K,p.d)),o.tb(9,49152,null,0,d.j,[o.h,o.k,o.z],null,null),(t()(),o.ub(10,0,null,0,1,"app-backbutton",[["color","dark"]],null,null,null,g.b,g.a)),o.tb(11,114688,null,0,y.a,[d.Hb],{color:[0,"color"]},null),(t()(),o.ub(12,0,null,null,9,"ion-content",[["fixed",""]],null,null,null,p.Q,p.j)),o.tb(13,49152,null,0,d.s,[o.h,o.k,o.z],null,null),(t()(),o.jb(16777216,null,0,1,null,Q)),o.tb(15,16384,null,0,c.i,[o.P,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.ub(16,0,null,0,5,"ion-grid",[["fixed",""]],null,null,null,p.S,p.l)),o.tb(17,49152,null,0,d.y,[o.h,o.k,o.z],{fixed:[0,"fixed"]},null),(t()(),o.ub(18,0,null,0,3,"ion-row",[],null,null,null,p.db,p.w)),o.tb(19,49152,null,0,d.hb,[o.h,o.k,o.z],null,null),(t()(),o.jb(16777216,null,0,1,null,k)),o.tb(21,278528,null,0,c.h,[o.P,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],(function(t,n){var e=n.component;t(n,4,0,"ios"),t(n,11,0,"dark"),t(n,15,0,e.isLoading),t(n,17,0,""),t(n,21,0,e.bodyparts)}),(function(t,n){t(n,7,0,n.component.strings.ST37)}))}function x(t){return o.Qb(0,[(t()(),o.ub(0,0,null,null,1,"app-bodyparts",[],null,null,null,m,v)),o.tb(1,114688,null,0,_,[f.a,d.Ib],null,null)],(function(t,n){t(n,1,0)}),null)}var D=o.qb("app-bodyparts",_,x,{},{},[]),w=e("gIcY"),E=e("iTUp"),P=e("Lm9r"),C=e("j1ZV"),O=function(){return function(){}}();e.d(n,"BodypartsPageModuleNgFactory",(function(){return q}));var q=o.rb(l,[],(function(t){return o.Db([o.Eb(512,o.j,o.cb,[[8,[a.a,r.a,u.a,D]],[3,o.j],o.x]),o.Eb(4608,c.k,c.j,[o.u,[2,c.t]]),o.Eb(4608,w.r,w.r,[]),o.Eb(4608,d.a,d.a,[o.z,o.g]),o.Eb(4608,d.Gb,d.Gb,[d.a,o.j,o.q]),o.Eb(4608,d.Jb,d.Jb,[d.a,o.j,o.q]),o.Eb(4608,w.b,w.b,[]),o.Eb(1073742336,c.b,c.b,[]),o.Eb(1073742336,w.q,w.q,[]),o.Eb(1073742336,w.f,w.f,[]),o.Eb(1073742336,d.Cb,d.Cb,[]),o.Eb(1073742336,E.a,E.a,[]),o.Eb(1073742336,P.a,P.a,[]),o.Eb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),o.Eb(1073742336,w.o,w.o,[]),o.Eb(1073742336,C.a,C.a,[]),o.Eb(1073742336,O,O,[]),o.Eb(1073742336,l,l,[]),o.Eb(1024,h.k,(function(){return[[{path:"",component:_}]]}),[])])}))}}]);