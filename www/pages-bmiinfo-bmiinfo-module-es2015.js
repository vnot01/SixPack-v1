(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bmiinfo-bmiinfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bmiinfo/bmiinfo.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bmiinfo/bmiinfo.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n          {{strings.ST116}}\n        </ion-title>\n        <ion-buttons slot=\"start\">\n            <app-backbutton color=\"dark\"></app-backbutton>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n<ion-grid fixed>\n  <ion-row class=\"ion-align-items-stretch\" *ngFor=\"let item of data\">\n    <ion-col size=\"8\">\n      <div class=\"bg1\">\n          {{item.text}}\n      </div>\n    </ion-col>\n    <ion-col size=\"4\">\n        <div class=\"bg2\" [ngStyle]=\"{'background-color': item.color}\">\n            {{item.number}}\n        </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/bmiinfo/bmiinfo-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/bmiinfo/bmiinfo-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BmiinfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmiinfoPageRoutingModule", function() { return BmiinfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bmiinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bmiinfo.page */ "./src/app/pages/bmiinfo/bmiinfo.page.ts");




const routes = [
    {
        path: '',
        component: _bmiinfo_page__WEBPACK_IMPORTED_MODULE_3__["BmiinfoPage"]
    }
];
let BmiinfoPageRoutingModule = class BmiinfoPageRoutingModule {
};
BmiinfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BmiinfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/bmiinfo/bmiinfo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/bmiinfo/bmiinfo.module.ts ***!
  \*************************************************/
/*! exports provided: BmiinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmiinfoPageModule", function() { return BmiinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bmiinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bmiinfo-routing.module */ "./src/app/pages/bmiinfo/bmiinfo-routing.module.ts");
/* harmony import */ var _bmiinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bmiinfo.page */ "./src/app/pages/bmiinfo/bmiinfo.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let BmiinfoPageModule = class BmiinfoPageModule {
};
BmiinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _bmiinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["BmiinfoPageRoutingModule"]
        ],
        declarations: [_bmiinfo_page__WEBPACK_IMPORTED_MODULE_6__["BmiinfoPage"]]
    })
], BmiinfoPageModule);



/***/ }),

/***/ "./src/app/pages/bmiinfo/bmiinfo.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/bmiinfo/bmiinfo.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n\nion-row {\n  height: 16%; }\n\nion-col {\n  height: 100%; }\n\n.bg1 {\n  border-radius: 8px;\n  background-color: #f1f2f6;\n  padding: 3px 20px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  font-weight: bold; }\n\n.bg2 {\n  border-radius: 8px;\n  padding: 3px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm1paW5mby9EOlxcLURFVlxcfklPTklDXFwxU2l4UGFjay12MVxcU2l4UGFjay12MS9zcmNcXGFwcFxccGFnZXNcXGJtaWluZm9cXGJtaWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JtaWluZm8vYm1paW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tcm93e1xuICAgIGhlaWdodDogMTYlO1xufVxuXG5pb24tY29se1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4uYmcxe1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmY2O1xuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmcye1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/bmiinfo/bmiinfo.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/bmiinfo/bmiinfo.page.ts ***!
  \***********************************************/
/*! exports provided: BmiinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmiinfoPage", function() { return BmiinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



let BmiinfoPage = class BmiinfoPage {
    constructor() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.data = [
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST117,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST123,
                color: '#dff9fb'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST118,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST124,
                color: '#badc58'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST119,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST125,
                color: '#f6e58d'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST120,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST126,
                color: '#ffbe76'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST121,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST127,
                color: '#ff7979'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST122,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST128,
                color: '#eb4d4b'
            },
        ];
    }
    ngOnInit() {
    }
};
BmiinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bmiinfo',
        template: __webpack_require__(/*! raw-loader!./bmiinfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bmiinfo/bmiinfo.page.html"),
        styles: [__webpack_require__(/*! ./bmiinfo.page.scss */ "./src/app/pages/bmiinfo/bmiinfo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BmiinfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-bmiinfo-bmiinfo-module-es2015.js.map