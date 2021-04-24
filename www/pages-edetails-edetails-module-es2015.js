(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edetails-edetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edetails/edetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edetails/edetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST115}}\n      </ion-title>\n            <ion-buttons slot=\"start\">\n              <app-backbutton color=\"dark\"></app-backbutton>\n            </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n\n  <div class=\"details\">\n\n  <img [src]=\"exercise.exercise_image | image\">\n\n  <ion-grid fixed>\n    <ion-row>\n        <ion-col size=\"4\" class=\"col-icon\">\n        <ion-icon name=\"md-list\" color=\"primary\"></ion-icon>\n        <p class=\"name\">{{strings.ST97}}</p>\n        <p class=\"value\">{{exercise.exercise_sets}}</p>\n        </ion-col>\n\n        <ion-col size=\"4\" class=\"col-icon\">\n          <ion-icon name=\"md-sync\" color=\"primary\"></ion-icon>\n          <p class=\"name\">{{strings.ST98}}</p>\n          <p class=\"value\">{{exercise.exercise_reps}}</p>\n        </ion-col>\n\n        <ion-col size=\"4\" class=\"col-icon\">\n            <ion-icon name=\"md-stopwatch\" color=\"primary\"></ion-icon>\n            <p class=\"name\">{{strings.ST99}}</p>\n            <p class=\"value\">{{exercise.exercise_rest}}</p>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n    <div class=\"tags\" (click)=toggleInfo()>\n        <h1>{{strings.ST112}}</h1>\n        <ion-icon [name]=\"isInfoHidden ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\n      </div>\n    \n      <div class=\"animated fadeIn subinfo\" [hidden]=\"isInfoHidden\">\n      <p class=\"title\">{{strings.ST111}}</p>\n      <p class=\"subtitle\">{{exercise.exercise_title}}</p>\n\n      <p class=\"title\">{{strings.ST17}}</p>\n      <p class=\"subtitle\">{{exercise.level_title}}</p>\n\n      </div> \n    \n      <div class=\"tags\" (click)=toggleInstru()>\n          <h1>{{strings.ST113}}</h1>\n          <ion-icon [name]=\"isInstruHidden ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\n        </div>\n      \n        <div class=\"animated fadeIn subinfo\" [hidden]=\"isInstruHidden\">\n        <app-html [htmlcontent]=\"exercise.exercise_instructions\"></app-html>\n        </div> \n\n\n        <div class=\"tags\" (click)=toggleTips()>\n            <h1>{{strings.ST114}}</h1>\n            <ion-icon [name]=\"isTipsHidden ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\n          </div>\n        \n          <div class=\"animated fadeIn subinfo\" [hidden]=\"isTipsHidden\">\n          <app-html [htmlcontent]=\"exercise.exercise_tips\"></app-html>\n          </div> \n\n</div>\n\n\n</ion-content>\n\n<ion-footer mode=\"ios\" no-border>\n    <ion-button (click)=\"play()\" class=\"primary ion-text-uppercase ion-text-bold\" mode=\"ios\" expand=\"block\">\n      {{strings.ST102}}\n        <ion-icon slot=\"start\" name=\"md-arrow-dropright-circle\"></ion-icon>\n    </ion-button>\n  </ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/edetails/edetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edetails/edetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdetailsPageRoutingModule", function() { return EdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edetails.page */ "./src/app/pages/edetails/edetails.page.ts");




const routes = [
    {
        path: '',
        component: _edetails_page__WEBPACK_IMPORTED_MODULE_3__["EdetailsPage"]
    }
];
let EdetailsPageRoutingModule = class EdetailsPageRoutingModule {
};
EdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edetails/edetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edetails/edetails.module.ts ***!
  \***************************************************/
/*! exports provided: EdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdetailsPageModule", function() { return EdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edetails-routing.module */ "./src/app/pages/edetails/edetails-routing.module.ts");
/* harmony import */ var _edetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edetails.page */ "./src/app/pages/edetails/edetails.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let EdetailsPageModule = class EdetailsPageModule {
};
EdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _edetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["EdetailsPageRoutingModule"]
        ],
        declarations: [_edetails_page__WEBPACK_IMPORTED_MODULE_6__["EdetailsPage"]]
    })
], EdetailsPageModule);



/***/ }),

/***/ "./src/app/pages/edetails/edetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/edetails/edetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details img {\n  width: 100%;\n  display: block;\n  max-width: 340px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n  margin-top: 15px; }\n\n.details {\n  margin: 14px; }\n\nion-grid {\n  margin-bottom: 20px; }\n\np {\n  font-size: 14px;\n  margin: 0; }\n\n.subinfo {\n  padding: 20px; }\n\n.title {\n  margin-bottom: 8px;\n  font-weight: bold; }\n\n.subtitle {\n  margin-bottom: 18px; }\n\n.col-icon {\n  text-align: center; }\n\n.col-icon ion-icon {\n  font-size: 38px;\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 14px; }\n\n.col-icon .name {\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 7px; }\n\n.col-icon .value {\n  margin: 0;\n  font-size: 14px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\nion-footer {\n  padding: 9px 11px; }\n\nion-footer ion-button {\n  font-size: 14px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRldGFpbHMvRDpcXC1ERVZcXH5JT05JQ1xcMVNpeFBhY2stdjFcXFNpeFBhY2stdjEvc3JjXFxhcHBcXHBhZ2VzXFxlZGV0YWlsc1xcZWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWU7RUFDZixTQUFTLEVBQUE7O0FBR2I7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0EsU0FBUztFQUNULGVBQWUsRUFBQTs7QUFJZjtFQUNJLHlCQUF5QjtFQUN6QiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFRLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUEsZUFBZTtFQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRldGFpbHMvZWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmRldGFpbHN7XG4gICAgbWFyZ2luOiAxNHB4O1xufVxuXG5pb24tZ3JpZHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5we1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zdWJpbmZve1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJ0aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uY29sLWljb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sLWljb24gaW9uLWljb257XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmNvbC1pY29uIC5uYW1le1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4uY29sLWljb24gLnZhbHVle1xubWFyZ2luOiAwO1xuZm9udC1zaXplOiAxNHB4O1xuICAgIFxufVxuXG4udGFnc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YWdzIGgxe1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjowO1xufVxuXG4udGFncyBpb24taWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE0cHg7XG4gICAgdG9wOiAxMXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaW9uLWZvb3RlcntcbiAgICBwYWRkaW5nOiA5cHggMTFweDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbntcblxuZm9udC1zaXplOiAxNHB4O1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/edetails/edetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/edetails/edetails.page.ts ***!
  \*************************************************/
/*! exports provided: EdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdetailsPage", function() { return EdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");








let EdetailsPage = class EdetailsPage {
    constructor(dataService, router, route, streamingMedia, admob, screenOrientation) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.streamingMedia = streamingMedia;
        this.admob = admob;
        this.screenOrientation = screenOrientation;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        this.exercise = {};
        this.isLoading = false;
        this.isInfoHidden = true;
        this.isInstruHidden = true;
        this.isTipsHidden = true;
        this.orientation = 'landscape';
    }
    ngOnInit() {
        this.admob.HideBannerAd();
        this.setPortrait();
        if (this.orientation === 'landscape') {
            this.setPortrait();
        }
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.getDetails();
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    toggleInfo() {
        this.isInfoHidden = !this.isInfoHidden;
    }
    toggleInstru() {
        this.isInstruHidden = !this.isInstruHidden;
    }
    toggleTips() {
        this.isTipsHidden = !this.isTipsHidden;
    }
    getDetails() {
        this.dataService.getDataExerciseById(this.id)
            .subscribe(resp => {
            this.exercise = resp[0];
            this.isLoading = false;
        });
    }
    play() {
        this.unlockScreenOrientation();
        this.observeScreenOrientation();
        const videoUrl = this.exercise.exercise_video;
        const options = {
            successCallback: () => { console.info('Video played'); },
            errorCallback: (e) => { console.info('Error streaming'); },
            orientation: `${this.screenOrientation.type}`,
            shouldAutoClose: false,
            controls: true
        };
        // var videoUrl = STREAMING_VIDEO_URL;
        // tslint:disable-next-line: max-line-length
        // this.streamingMedia.playVideo(videoUrl, options);
        // exercise_video
        // <p class="value">{{exercise.exercise_video}}
        // this.streamingMedia.playVideo('https://sixpack.sivnot.com/videos/RenegadeRow.mp4', options);
        this.streamingMedia.playVideo(videoUrl, options);
    }
    getCurrentPosition() {
    }
    setPortrait() {
        // set to portrait
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.lockScreenOrientation();
    }
    setLandscape() {
        // set to portrait
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    getCurrentScreenOrientation() {
        // get current
        console.info(this.screenOrientation.type); // logs the current orientation, example: 'landscape'  
    }
    unlockScreenOrientation() {
        // allow user rotate
        this.screenOrientation.unlock();
    }
    lockScreenOrientation() {
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
            console.error(error);
        }
    }
    observeScreenOrientation() {
        // detect orientation changes
        this.screenOrientation.onChange().subscribe(() => {
            console.warn("Orientation Changed");
        });
    }
};
EdetailsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"] },
    { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"] }
];
EdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edetails',
        template: __webpack_require__(/*! raw-loader!./edetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edetails/edetails.page.html"),
        styles: [__webpack_require__(/*! ./edetails.page.scss */ "./src/app/pages/edetails/edetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"],
        _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]])
], EdetailsPage);



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
//# sourceMappingURL=pages-edetails-edetails-module-es2015.js.map