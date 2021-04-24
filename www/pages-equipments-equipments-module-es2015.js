(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-equipments-equipments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/equipments/equipments.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/equipments/equipments.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n          {{strings.ST38}}\n        </ion-title>\n              <ion-buttons slot=\"start\">\n                <app-backbutton color=\"dark\"></app-backbutton>\n              </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding-top\">\n  \n    <app-loading *ngIf=\"isLoading\"></app-loading>\n\n\n    <ion-list lines=\"none\" class=\"ion-padding-top\">\n\n    <ion-item *ngFor=\"let item of equipments\" [routerLink]=\"['/eequipments', item.equipment_id, item.equipment_title]\" style=\"margin-bottom: 30px;\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"item.equipment_image | image\">\n        </ion-avatar>\n        <ion-label>{{item.equipment_title}}</ion-label>\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/equipments/equipments-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/equipments/equipments-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EquipmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPageRoutingModule", function() { return EquipmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _equipments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipments.page */ "./src/app/pages/equipments/equipments.page.ts");




const routes = [
    {
        path: '',
        component: _equipments_page__WEBPACK_IMPORTED_MODULE_3__["EquipmentsPage"]
    }
];
let EquipmentsPageRoutingModule = class EquipmentsPageRoutingModule {
};
EquipmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EquipmentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/equipments/equipments.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipments/equipments.module.ts ***!
  \*******************************************************/
/*! exports provided: EquipmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPageModule", function() { return EquipmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipments-routing.module */ "./src/app/pages/equipments/equipments-routing.module.ts");
/* harmony import */ var _equipments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipments.page */ "./src/app/pages/equipments/equipments.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let EquipmentsPageModule = class EquipmentsPageModule {
};
EquipmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsPageRoutingModule"]
        ],
        declarations: [_equipments_page__WEBPACK_IMPORTED_MODULE_6__["EquipmentsPage"]]
    })
], EquipmentsPageModule);



/***/ }),

/***/ "./src/app/pages/equipments/equipments.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipments/equipments.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 50px !important;\n  max-height: 50px !important; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label {\n  padding-left: 20px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 14px; }\n\nion-item {\n  --background-focused:#fff !important;\n  --background-activated:#fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXF1aXBtZW50cy9EOlxcLURFVlxcfklPTklDXFwxU2l4UGFjay12MVxcU2l4UGFjay12MS9zcmNcXGFwcFxccGFnZXNcXGVxdWlwbWVudHNcXGVxdWlwbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCO0VBQ3JCLHVCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUduQjtFQUNJLG9DQUFxQjtFQUNyQixzQ0FBdUI7RUFDdkIsNkNBQW9CO0VBQ3BCLHdCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXF1aXBtZW50cy9lcXVpcG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIgIHsgICAgIFxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDsgIFxuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxuICAgIG1heC13aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICB9XG5pb24tYXZhdGFyIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuXG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmYgIWltcG9ydGFudDtcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/equipments/equipments.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/equipments/equipments.page.ts ***!
  \*****************************************************/
/*! exports provided: EquipmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPage", function() { return EquipmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




let EquipmentsPage = class EquipmentsPage {
    constructor(DataService) {
        this.DataService = DataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.equipments = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.DataService.getDataEquipments()
            .subscribe(resp => {
            this.equipments = resp;
            this.isLoading = false;
        });
    }
};
EquipmentsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
EquipmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-equipments',
        template: __webpack_require__(/*! raw-loader!./equipments.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/equipments/equipments.page.html"),
        styles: [__webpack_require__(/*! ./equipments.page.scss */ "./src/app/pages/equipments/equipments.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], EquipmentsPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");




const Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.page = 0;
    }
    ejectQuery(query) {
        console.log(query);
        query = Url + query;
        console.log(query);
        console.log(Url);
        console.log(query);
        return this.http.get(query);
    }
    getDataStrings() {
        const query = this.ejectQuery('/json/data_strings.php');
        console.log(query);
        return this.ejectQuery('/json/data_strings.php');
    }
    getDataMotivation() {
        const query = this.ejectQuery('/json/data_quotes.php');
        console.log(query);
        return this.ejectQuery('/json/data_quotes.php');
    }
    getDataFeaturedDiets() {
        const query = this.ejectQuery('/json/data_diets.php?featured=1');
        console.log(query);
        return this.ejectQuery('/json/data_diets.php?featured=1');
    }
    getDataCategories() {
        const query = this.ejectQuery('/json/data_categories.php');
        console.log(query);
        return this.ejectQuery('/json/data_categories.php');
    }
    getDataGoals() {
        const query = this.ejectQuery('/json/data_goals.php');
        console.log(query);
        return this.ejectQuery('/json/data_goals.php');
    }
    getDataLevels() {
        const query = this.ejectQuery('/json/data_levels.php');
        console.log(query);
        return this.ejectQuery('/json/data_levels.php');
    }
    getDataTags() {
        const query = this.ejectQuery('/json/data_tags.php');
        console.log(query);
        return this.ejectQuery('/json/data_tags.php');
    }
    getDataEquipments() {
        const query = this.ejectQuery('/json/data_equipments.php');
        console.log(query);
        return this.ejectQuery('/json/data_equipments.php');
    }
    getDataBodyparts() {
        const query = this.ejectQuery('/json/data_bodyparts.php');
        console.log(query);
        return this.ejectQuery('/json/data_bodyparts.php');
    }
    getDataFeaturedPosts() {
        const query = this.ejectQuery('/json/data_posts.php?featured=1');
        console.log(query);
        return this.ejectQuery('/json/data_posts.php?featured=1');
    }
    getDataRecentPosts(limit) {
        const query = this.ejectQuery(`/json/data_posts.php?limit=${limit}`);
        console.log(query);
        return this.ejectQuery(`/json/data_posts.php?limit=${limit}`);
    }
    getDataWorkoutsByGoal(id) {
        const query = this.ejectQuery(`/json/data_workouts.php?goal=${id}`);
        console.log(query);
        return this.ejectQuery(`/json/data_workouts.php?goal=${id}`);
    }
    getDataWorkoutsByLevel(id) {
        const query = this.ejectQuery(`/json/data_workouts.php?level=${id}`);
        console.log(query);
        return this.ejectQuery(`/json/data_workouts.php?level=${id}`);
    }
    getDataExercisesByBodypart(id) {
        const query = this.ejectQuery(`/json/data_bodypart.php?id=${id}`);
        console.log(query);
        return this.ejectQuery(`/json/data_bodypart.php?id=${id}`);
    }
    getDataExercisesByEquipment(id) {
        const query = this.ejectQuery(`/json/data_equipment.php?id=${id}`);
        console.log(query);
        return this.ejectQuery(`/json/data_equipment.php?id=${id}`);
    }
    getDataDietsByCategory(id) {
        const query = this.ejectQuery(`/json/data_diets.php?category=${id}`);
        console.log(query);
        return this.ejectQuery(`/json/data_diets.php?category=${id}`);
    }
    getDataPostsByTag(id) {
        const query = this.ejectQuery(`/json/data_posts.php?tag=${id}`);
        console.log(query);
        return this.ejectQuery(`/json/data_posts.php?tag=${id}`);
    }
    getDataExerciseById(id) {
        const query = this.ejectQuery(`/json/data_exercises.php?id=${id}&limit=1`);
        console.log(query);
        return this.ejectQuery(`/json/data_exercises.php?id=${id}&limit=1`);
    }
    getDataWorkoutById(id) {
        const query = this.ejectQuery(`/json/data_workouts.php?id=${id}&limit=1`);
        console.log(query);
        return this.ejectQuery(`/json/data_workouts.php?id=${id}&limit=1`);
    }
    getDataDietById(id) {
        const query = this.ejectQuery(`/json/data_diets.php?id=${id}&limit=1`);
        console.log(query);
        return this.ejectQuery(`/json/data_diets.php?id=${id}&limit=1`);
    }
    getDataPostById(id) {
        const query = this.ejectQuery(`/json/data_posts.php?id=${id}&limit=1`);
        console.log(query);
        return this.ejectQuery(`/json/data_posts.php?id=${id}&limit=1`);
    }
    getDataWorkoutExercisesByDay(id, day) {
        const query = this.ejectQuery(`/json/data_days.php?id=${id}&day=${day}`);
        console.log(query);
        return this.ejectQuery(`/json/data_days.php?id=${id}&day=${day}`);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataService);



/***/ })

}]);
//# sourceMappingURL=pages-equipments-equipments-module-es2015.js.map