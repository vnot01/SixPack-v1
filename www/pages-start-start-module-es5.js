(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/start/start.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fixed class=\"dark\">\n\n<ion-grid fixed class=\"grid-bg\">\n\n  <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\n    <ion-col size=\"8\" class=\"ion-text-center\">\n      <img src=\"./assets/images/logo.png\" class=\"start-logo\"/>\n\n      <ion-button class=\"button-h start-button\" mode=\"ios\" (click)=\"goLoginPage()\" color=\"primary\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n        {{strings.ST26}}\n      </ion-button>\n\n      <ion-button class=\"button-h margin-h start-button\" (click)=\"goSignUpPage()\" mode=\"ios\" color=\"primary\" fill=\"outline\" size=\"default\" shape=\"round\" expand=\"block\">\n        {{strings.ST27}}\n      </ion-button>\n\n      <ion-button (click)=\"tryFacebookLogin()\" mode=\"ios\" class=\"button-h color-facebook start-button\" color=\"light\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n        <ion-icon class=\"color-facebook\" slot=\"start\" name=\"logo-facebook\"></ion-icon>\n        <ion-label class=\"color-facebook\">{{strings.ST104}}</ion-label>\n      </ion-button>\n\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/start/start-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/start/start-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function() { return StartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.page */ "./src/app/pages/start/start.page.ts");




var routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }
];
var StartPageRoutingModule = /** @class */ (function () {
    function StartPageRoutingModule() {
    }
    StartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StartPageRoutingModule);
    return StartPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/start/start.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.module.ts ***!
  \*********************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-routing.module */ "./src/app/pages/start/start-routing.module.ts");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "./src/app/pages/start/start.page.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.module */ "./src/app/pages/login/login.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../signup/signup.module */ "./src/app/pages/signup/signup.module.ts");










var StartPageModule = /** @class */ (function () {
    function StartPageModule() {
    }
    StartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
                _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__["SignupPageModule"]
            ],
            declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
        })
    ], StartPageModule);
    return StartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/start/start.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-bg {\n  height: 100%;\n  background-image: url('bg.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.start-logo {\n  max-width: 160px;\n  margin-bottom: 20px; }\n\n.margin-h {\n  margin-top: 15px !important;\n  margin-bottom: 15px !important; }\n\n.button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important; }\n\n.color-facebook {\n  color: #3b5998 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhcnQvRDpcXC1ERVZcXH5JT05JQ1xcMVNpeFBhY2stdjFcXFNpeFBhY2stdjEvc3JjXFxhcHBcXHBhZ2VzXFxzdGFydFxcc3RhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWTtFQUNaLCtCQUFzRDtFQUN0RCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0L3N0YXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmdyaWQtYmd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uc3RhcnQtbG9nb3tcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tYXJnaW4taHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWh7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItZmFjZWJvb2t7XG4gICAgY29sb3I6ICMzYjU5OTggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/start/start.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signup/signup.page */ "./src/app/pages/signup/signup.page.ts");









var StartPage = /** @class */ (function () {
    function StartPage(menuCtrl, authService, navCtrl, router, modalCtrl, loadingController) {
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        // tslint:disable-next-line: variable-name
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
    }
    Object.defineProperty(StartPage.prototype, "strings", {
        get: function () {
            return this._strings;
        },
        enumerable: true,
        configurable: true
    });
    StartPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    StartPage.prototype.ngOnInit = function () {
    };
    StartPage.prototype.goLoginPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartPage.prototype.presentAlert = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            duration: 2000,
                            message: value,
                            mode: 'ios'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartPage.prototype.goSignUpPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartPage.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigateByUrl('/home');
        }, function (err) {
            if (err === 'auth/wrong-password') {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST30);
            }
            else if (err === 'auth/user-not-found') {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST31);
            }
            else {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
        });
    };
    StartPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    StartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! raw-loader!./start.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html"),
            styles: [__webpack_require__(/*! ./start.page.scss */ "./src/app/pages/start/start.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], StartPage);
    return StartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-start-start-module-es5.js.map