(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-signup-signup-module~pages-start-start-module~pages-termsguest-termsguest-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/termsguest/termsguest.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/termsguest/termsguest.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST82}}\n      </ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n            <ion-button color=\"dark\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\n              <ion-icon name=\"md-arrow-back\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fixed>\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n  \n  <div *ngIf=\"!isLoading\">\n  <div [innerHTML]=\"privacypolicy\"></div>\n  <div [innerHTML]=\"termsofservice\"></div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/termsguest/termsguest-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TermsguestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsguestPageRoutingModule", function() { return TermsguestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _termsguest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./termsguest.page */ "./src/app/pages/termsguest/termsguest.page.ts");




var routes = [
    {
        path: '',
        component: _termsguest_page__WEBPACK_IMPORTED_MODULE_3__["TermsguestPage"]
    }
];
var TermsguestPageRoutingModule = /** @class */ (function () {
    function TermsguestPageRoutingModule() {
    }
    TermsguestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TermsguestPageRoutingModule);
    return TermsguestPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/termsguest/termsguest.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest.module.ts ***!
  \*******************************************************/
/*! exports provided: TermsguestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsguestPageModule", function() { return TermsguestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _termsguest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./termsguest-routing.module */ "./src/app/pages/termsguest/termsguest-routing.module.ts");
/* harmony import */ var _termsguest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./termsguest.page */ "./src/app/pages/termsguest/termsguest.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var TermsguestPageModule = /** @class */ (function () {
    function TermsguestPageModule() {
    }
    TermsguestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _termsguest_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsguestPageRoutingModule"]
            ],
            declarations: [_termsguest_page__WEBPACK_IMPORTED_MODULE_6__["TermsguestPage"]]
        })
    ], TermsguestPageModule);
    return TermsguestPageModule;
}());



/***/ }),

/***/ "./src/app/pages/termsguest/termsguest.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zZ3Vlc3QvdGVybXNndWVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/termsguest/termsguest.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest.page.ts ***!
  \*****************************************************/
/*! exports provided: TermsguestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsguestPage", function() { return TermsguestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");





var TermsguestPage = /** @class */ (function () {
    function TermsguestPage(modalCtrl, dataService) {
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.isLoading = true;
        // tslint:disable-next-line: variable-name
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
    }
    Object.defineProperty(TermsguestPage.prototype, "strings", {
        get: function () {
            return this._strings;
        },
        enumerable: true,
        configurable: true
    });
    TermsguestPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.dataService.getDataStrings()
            .subscribe(function (resp) {
            var data = resp[0];
            _this.privacypolicy = data.st_privacypolicy;
            _this.termsofservice = data.st_termsofservice;
            _this.isLoading = false;
        });
    };
    TermsguestPage.prototype.goClosePage = function () {
        this.modalCtrl.dismiss();
    };
    TermsguestPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    TermsguestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-termsguest',
            template: __webpack_require__(/*! raw-loader!./termsguest.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/termsguest/termsguest.page.html"),
            styles: [__webpack_require__(/*! ./termsguest.page.scss */ "./src/app/pages/termsguest/termsguest.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], TermsguestPage);
    return TermsguestPage;
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
//# sourceMappingURL=default~pages-signup-signup-module~pages-start-start-module~pages-termsguest-termsguest-module-es5.js.map