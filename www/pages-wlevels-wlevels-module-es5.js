(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wlevels-wlevels-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wlevels/wlevels.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wlevels/wlevels.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n          {{title}}\n        </ion-title>\n              <ion-buttons slot=\"start\">\n                <app-backbutton color=\"dark\"></app-backbutton>\n              </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <app-loading *ngIf=\"isLoading\"></app-loading>\n    <app-empty *ngIf=\"workouts.length === 0\" [title]=\"strings.ST141\"></app-empty>\n    \n    <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" *ngFor=\"let item of workouts\" [routerLink]=\"['/wdetails', item.workout_id]\" [ngStyle]=\"{'height': height}\">\n             <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.workout_image | image) + ')'\">\n                 <div class=\"overlay\">\n                 <div class=\"texts\">\n                 <p>{{item.goal_title}}</p>\n                 <h1>{{item.workout_title}}</h1>\n                 </div>\n               </div>\n               </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/wlevels/wlevels-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/wlevels/wlevels-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WlevelsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WlevelsPageRoutingModule", function() { return WlevelsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wlevels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wlevels.page */ "./src/app/pages/wlevels/wlevels.page.ts");




var routes = [
    {
        path: '',
        component: _wlevels_page__WEBPACK_IMPORTED_MODULE_3__["WlevelsPage"]
    }
];
var WlevelsPageRoutingModule = /** @class */ (function () {
    function WlevelsPageRoutingModule() {
    }
    WlevelsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WlevelsPageRoutingModule);
    return WlevelsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/wlevels/wlevels.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/wlevels/wlevels.module.ts ***!
  \*************************************************/
/*! exports provided: WlevelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WlevelsPageModule", function() { return WlevelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wlevels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wlevels-routing.module */ "./src/app/pages/wlevels/wlevels-routing.module.ts");
/* harmony import */ var _wlevels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wlevels.page */ "./src/app/pages/wlevels/wlevels.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var WlevelsPageModule = /** @class */ (function () {
    function WlevelsPageModule() {
    }
    WlevelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _wlevels_routing_module__WEBPACK_IMPORTED_MODULE_5__["WlevelsPageRoutingModule"]
            ],
            declarations: [_wlevels_page__WEBPACK_IMPORTED_MODULE_6__["WlevelsPage"]]
        })
    ], WlevelsPageModule);
    return WlevelsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/wlevels/wlevels.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/wlevels/wlevels.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts {\n  padding: 15px; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cardcategory .texts p {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  font-size: 13px;\n  display: block;\n  margin-bottom: 7px;\n  text-transform: uppercase;\n  letter-spacing: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2xldmVscy9EOlxcLURFVlxcfklPTklDXFwxU2l4UGFjay12MVxcU2l4UGFjay12MS9zcmNcXGFwcFxccGFnZXNcXHdsZXZlbHNcXHdsZXZlbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUdJLDRHQUErRTtFQUEvRSxxRkFBK0U7RUFDL0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFpQjtFQUFqQiw2QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2xldmVscy93bGV2ZWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkY2F0ZWdvcnl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jYXJkY2F0ZWdvcnkgLm92ZXJsYXl7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNhcmRjYXRlZ29yeSAudGV4dHN7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLmNhcmRjYXRlZ29yeSAudGV4dHMgaDF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2FyZGNhdGVnb3J5IC50ZXh0cyBwe1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/wlevels/wlevels.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/wlevels/wlevels.page.ts ***!
  \***********************************************/
/*! exports provided: WlevelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WlevelsPage", function() { return WlevelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var WlevelsPage = /** @class */ (function () {
    function WlevelsPage(dataService, router, route, plt) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
        this.workouts = [];
        this.isLoading = false;
    }
    WlevelsPage.prototype.ngOnInit = function () {
    };
    WlevelsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.title = data.title;
                    _this.getWorkouts();
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    WlevelsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    WlevelsPage.prototype.getWorkouts = function () {
        var _this = this;
        this.dataService.getDataWorkoutsByLevel(this.id)
            .subscribe(function (resp) {
            _this.workouts = resp;
            if (_this.workouts.length === 1) {
                _this.height = '167.273px';
            }
            else if (_this.workouts.length === 3 || _this.workouts.length === 2) {
                _this.height = 'inherit !important';
            }
            else if (_this.workouts.length >= 4) {
                _this.height = _this.plt.height() / 4.4 + 'px';
            }
            _this.isLoading = false;
        });
    };
    WlevelsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
    ]; };
    WlevelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wlevels',
            template: __webpack_require__(/*! raw-loader!./wlevels.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wlevels/wlevels.page.html"),
            styles: [__webpack_require__(/*! ./wlevels.page.scss */ "./src/app/pages/wlevels/wlevels.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], WlevelsPage);
    return WlevelsPage;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");




var Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.page = 0;
    }
    DataService.prototype.ejectQuery = function (query) {
        console.log(query);
        query = Url + query;
        console.log(query);
        console.log(Url);
        console.log(query);
        return this.http.get(query);
    };
    DataService.prototype.getDataStrings = function () {
        var query = this.ejectQuery('/json/data_strings.php');
        console.log(query);
        return this.ejectQuery('/json/data_strings.php');
    };
    DataService.prototype.getDataMotivation = function () {
        var query = this.ejectQuery('/json/data_quotes.php');
        console.log(query);
        return this.ejectQuery('/json/data_quotes.php');
    };
    DataService.prototype.getDataFeaturedDiets = function () {
        var query = this.ejectQuery('/json/data_diets.php?featured=1');
        console.log(query);
        return this.ejectQuery('/json/data_diets.php?featured=1');
    };
    DataService.prototype.getDataCategories = function () {
        var query = this.ejectQuery('/json/data_categories.php');
        console.log(query);
        return this.ejectQuery('/json/data_categories.php');
    };
    DataService.prototype.getDataGoals = function () {
        var query = this.ejectQuery('/json/data_goals.php');
        console.log(query);
        return this.ejectQuery('/json/data_goals.php');
    };
    DataService.prototype.getDataLevels = function () {
        var query = this.ejectQuery('/json/data_levels.php');
        console.log(query);
        return this.ejectQuery('/json/data_levels.php');
    };
    DataService.prototype.getDataTags = function () {
        var query = this.ejectQuery('/json/data_tags.php');
        console.log(query);
        return this.ejectQuery('/json/data_tags.php');
    };
    DataService.prototype.getDataEquipments = function () {
        var query = this.ejectQuery('/json/data_equipments.php');
        console.log(query);
        return this.ejectQuery('/json/data_equipments.php');
    };
    DataService.prototype.getDataBodyparts = function () {
        var query = this.ejectQuery('/json/data_bodyparts.php');
        console.log(query);
        return this.ejectQuery('/json/data_bodyparts.php');
    };
    DataService.prototype.getDataFeaturedPosts = function () {
        var query = this.ejectQuery('/json/data_posts.php?featured=1');
        console.log(query);
        return this.ejectQuery('/json/data_posts.php?featured=1');
    };
    DataService.prototype.getDataRecentPosts = function (limit) {
        var query = this.ejectQuery("/json/data_posts.php?limit=" + limit);
        console.log(query);
        return this.ejectQuery("/json/data_posts.php?limit=" + limit);
    };
    DataService.prototype.getDataWorkoutsByGoal = function (id) {
        var query = this.ejectQuery("/json/data_workouts.php?goal=" + id);
        console.log(query);
        return this.ejectQuery("/json/data_workouts.php?goal=" + id);
    };
    DataService.prototype.getDataWorkoutsByLevel = function (id) {
        var query = this.ejectQuery("/json/data_workouts.php?level=" + id);
        console.log(query);
        return this.ejectQuery("/json/data_workouts.php?level=" + id);
    };
    DataService.prototype.getDataExercisesByBodypart = function (id) {
        var query = this.ejectQuery("/json/data_bodypart.php?id=" + id);
        console.log(query);
        return this.ejectQuery("/json/data_bodypart.php?id=" + id);
    };
    DataService.prototype.getDataExercisesByEquipment = function (id) {
        var query = this.ejectQuery("/json/data_equipment.php?id=" + id);
        console.log(query);
        return this.ejectQuery("/json/data_equipment.php?id=" + id);
    };
    DataService.prototype.getDataDietsByCategory = function (id) {
        var query = this.ejectQuery("/json/data_diets.php?category=" + id);
        console.log(query);
        return this.ejectQuery("/json/data_diets.php?category=" + id);
    };
    DataService.prototype.getDataPostsByTag = function (id) {
        var query = this.ejectQuery("/json/data_posts.php?tag=" + id);
        console.log(query);
        return this.ejectQuery("/json/data_posts.php?tag=" + id);
    };
    DataService.prototype.getDataExerciseById = function (id) {
        var query = this.ejectQuery("/json/data_exercises.php?id=" + id + "&limit=1");
        console.log(query);
        return this.ejectQuery("/json/data_exercises.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutById = function (id) {
        var query = this.ejectQuery("/json/data_workouts.php?id=" + id + "&limit=1");
        console.log(query);
        return this.ejectQuery("/json/data_workouts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataDietById = function (id) {
        var query = this.ejectQuery("/json/data_diets.php?id=" + id + "&limit=1");
        console.log(query);
        return this.ejectQuery("/json/data_diets.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataPostById = function (id) {
        var query = this.ejectQuery("/json/data_posts.php?id=" + id + "&limit=1");
        console.log(query);
        return this.ejectQuery("/json/data_posts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutExercisesByDay = function (id, day) {
        var query = this.ejectQuery("/json/data_days.php?id=" + id + "&day=" + day);
        console.log(query);
        return this.ejectQuery("/json/data_days.php?id=" + id + "&day=" + day);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-wlevels-wlevels-module-es5.js.map