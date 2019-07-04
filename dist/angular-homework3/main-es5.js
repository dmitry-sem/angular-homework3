(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hotels</h1>\n<div class=\"element\" *ngIf=\"hotels; else loadingEl\">\n  <div class=\"element-left\">\n    <app-hotel-list [hotels]=\"hotels\" (hotelSelected)=\"hotelSelected($event)\"></app-hotel-list>\n  </div>\n  <div class=\"element-right\">\n    <app-hotel-weather [hotelWeather]=\"selectedHotel?.weather\"></app-hotel-weather>\n    <app-hotel-social-info [hotelSocialInfo]=\"selectedHotel?.social_info\"></app-hotel-social-info>\n  </div>\n  <div class=\"clear\"> </div>\n</div>\n<ng-template #loadingEl>Loading...</ng-template>\n<div class=\"copy-right\">\n  <p>© 2019</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hotel-list/hotel-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hotel-list/hotel-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-bg-img\"><img [src]=\"selectedHotel.img\" alt=\"\" class=\"img-responsive\"> </div>\n<div class=\"element-left-bottom\">\n  <div class=\"ele-strip\">\n    <ul (click)=\"selectHotelType($event)\">\n      <li><a [attr.data-id]=\"HotelType.ONE_STAR\">One star</a></li>\n      <li><a [attr.data-id]=\"HotelType.TWO_STAR\">Two stars</a></li>\n      <li><a [attr.data-id]=\"HotelType.THREE_STAR\">Three stars</a></li>\n      <li><a [attr.data-id]=\"HotelType.FOUR_STAR\">Four stars</a></li>\n      <li class=\"anc-bor\"><a [attr.data-id]=\"HotelType.FIVE_STAR\">Five stars</a></li>\n    </ul>\n  </div>\n  <div class=\"village\">\n    <h3>Hotels</h3>\n    <span class=\"line\"> </span>\n    <div class=\"activity_box\">\n      <div class=\"scrollbar\" id=\"style-2\">\n        <div class=\"activity-row\" *ngFor=\"let hotel of hotels | hotelType:selectedHotelType\" (click)=\"selectHotel(hotel)\">\n          <div class=\"activity-desc\">\n            <h5>{{hotel.address}}</h5>\n            <h6>{{hotel.phone | phone}}</h6>\n          </div>\n          <div class=\"activity-img\">\n            <ul>\n              <li><img width=\"60\" height=\"60\" [src]='hotel.img'  alt=\"\"/></li>\n              <li><img width=\"60\" height=\"60\" [src]='hotel.social_info.img'  alt=\"\"/></li>\n            </ul>\n          </div>\n          <div class=\"clear\"> </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hotel-social-info/hotel-social-info.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hotel-social-info/hotel-social-info.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{hotelSocialInfo?.title}}</h4>\n    <span class=\"w-line\"> </span>\n    <img [src]=\"hotelSocialInfo?.img\" alt=\"\"  class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\"><h3>{{hotelSocialInfo?.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li><h3>{{hotelSocialInfo?.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hotel-weather/hotel-weather.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hotel-weather/hotel-weather.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{hotelWeather?.title}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h2>{{hotelWeather?.temperature}}<sup class=\"degree\">°</sup></h2>\n  <h6>Water {{hotelWeather?.water}}<sup class=\"degree\">°</sup></h6>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock */ "./src/app/mock.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.hotels$ = _mock__WEBPACK_IMPORTED_MODULE_2__["hotels$"];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotels$.subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    AppComponent.prototype.hotelSelected = function (hotel) {
        this.selectedHotel = hotel;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotel-list/hotel-list.component */ "./src/app/hotel-list/hotel-list.component.ts");
/* harmony import */ var _hotel_weather_hotel_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hotel-weather/hotel-weather.component */ "./src/app/hotel-weather/hotel-weather.component.ts");
/* harmony import */ var _hotel_social_info_hotel_social_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotel-social-info/hotel-social-info.component */ "./src/app/hotel-social-info/hotel-social-info.component.ts");
/* harmony import */ var _hotel_type_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hotel-type.pipe */ "./src/app/hotel-type.pipe.ts");
/* harmony import */ var _phone_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phone.pipe */ "./src/app/phone.pipe.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_4__["HotelListComponent"],
                _hotel_weather_hotel_weather_component__WEBPACK_IMPORTED_MODULE_5__["HotelWeatherComponent"],
                _hotel_social_info_hotel_social_info_component__WEBPACK_IMPORTED_MODULE_6__["HotelSocialInfoComponent"],
                _hotel_type_pipe__WEBPACK_IMPORTED_MODULE_7__["HotelTypePipe"],
                _phone_pipe__WEBPACK_IMPORTED_MODULE_8__["PhonePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hotel-list/hotel-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/hotel-list/hotel-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWwtbGlzdC9ob3RlbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG90ZWwtbGlzdC9ob3RlbC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/hotel-list/hotel-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/hotel-list/hotel-list.component.ts ***!
  \****************************************************/
/*! exports provided: HotelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListComponent", function() { return HotelListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock */ "./src/app/mock.ts");



var HotelListComponent = /** @class */ (function () {
    function HotelListComponent() {
        this.hotelSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.HotelType = _mock__WEBPACK_IMPORTED_MODULE_2__["HotelType"];
    }
    Object.defineProperty(HotelListComponent.prototype, "selectedHotel", {
        get: function () {
            return this._selectedHotel;
        },
        set: function (selectedHotel) {
            this._selectedHotel = selectedHotel;
            this.hotelSelected.emit(selectedHotel);
        },
        enumerable: true,
        configurable: true
    });
    HotelListComponent.prototype.ngOnInit = function () {
        this.selectedHotel = this.hotels[0];
    };
    HotelListComponent.prototype.selectHotelType = function ($event) {
        var hotelType = $event.target.getAttribute('data-id');
        if (!hotelType) {
            return;
        }
        this.selectedHotelType = hotelType;
    };
    HotelListComponent.prototype.selectHotel = function (hotel) {
        this.selectedHotel = hotel;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HotelListComponent.prototype, "hotels", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HotelListComponent.prototype, "hotelSelected", void 0);
    HotelListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-list',
            template: __webpack_require__(/*! raw-loader!./hotel-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/hotel-list/hotel-list.component.html"),
            styles: [__webpack_require__(/*! ./hotel-list.component.css */ "./src/app/hotel-list/hotel-list.component.css")]
        })
    ], HotelListComponent);
    return HotelListComponent;
}());



/***/ }),

/***/ "./src/app/hotel-social-info/hotel-social-info.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/hotel-social-info/hotel-social-info.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsLXNvY2lhbC1pbmZvL2hvdGVsLXNvY2lhbC1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/hotel-social-info/hotel-social-info.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/hotel-social-info/hotel-social-info.component.ts ***!
  \******************************************************************/
/*! exports provided: HotelSocialInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelSocialInfoComponent", function() { return HotelSocialInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelSocialInfoComponent = /** @class */ (function () {
    function HotelSocialInfoComponent() {
    }
    HotelSocialInfoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HotelSocialInfoComponent.prototype, "hotelSocialInfo", void 0);
    HotelSocialInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-social-info',
            template: __webpack_require__(/*! raw-loader!./hotel-social-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/hotel-social-info/hotel-social-info.component.html"),
            styles: [__webpack_require__(/*! ./hotel-social-info.component.css */ "./src/app/hotel-social-info/hotel-social-info.component.css")]
        })
    ], HotelSocialInfoComponent);
    return HotelSocialInfoComponent;
}());



/***/ }),

/***/ "./src/app/hotel-type.pipe.ts":
/*!************************************!*\
  !*** ./src/app/hotel-type.pipe.ts ***!
  \************************************/
/*! exports provided: HotelTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelTypePipe", function() { return HotelTypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelTypePipe = /** @class */ (function () {
    function HotelTypePipe() {
    }
    HotelTypePipe.prototype.transform = function (hotels, hotelType) {
        if (!hotels) {
            return;
        }
        if (!hotelType) {
            return hotels;
        }
        return hotels.filter(function (hotel) { return hotel.type === hotelType; });
    };
    HotelTypePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'hotelType'
        })
    ], HotelTypePipe);
    return HotelTypePipe;
}());



/***/ }),

/***/ "./src/app/hotel-weather/hotel-weather.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hotel-weather/hotel-weather.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsLXdlYXRoZXIvaG90ZWwtd2VhdGhlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hotel-weather/hotel-weather.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hotel-weather/hotel-weather.component.ts ***!
  \**********************************************************/
/*! exports provided: HotelWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelWeatherComponent", function() { return HotelWeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelWeatherComponent = /** @class */ (function () {
    function HotelWeatherComponent() {
    }
    HotelWeatherComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HotelWeatherComponent.prototype, "hotelWeather", void 0);
    HotelWeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-weather',
            template: __webpack_require__(/*! raw-loader!./hotel-weather.component.html */ "./node_modules/raw-loader/index.js!./src/app/hotel-weather/hotel-weather.component.html"),
            styles: [__webpack_require__(/*! ./hotel-weather.component.css */ "./src/app/hotel-weather/hotel-weather.component.css")]
        })
    ], HotelWeatherComponent);
    return HotelWeatherComponent;
}());



/***/ }),

/***/ "./src/app/mock.ts":
/*!*************************!*\
  !*** ./src/app/mock.ts ***!
  \*************************/
/*! exports provided: HotelType, hotels$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelType", function() { return HotelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotels$", function() { return hotels$; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var HotelType;
(function (HotelType) {
    HotelType["ONE_STAR"] = "one";
    HotelType["TWO_STAR"] = "two";
    HotelType["THREE_STAR"] = "three";
    HotelType["FOUR_STAR"] = "four";
    HotelType["FIVE_STAR"] = "five";
})(HotelType || (HotelType = {}));
var hotels = [
    {
        _id: 1,
        type: HotelType.TWO_STAR,
        img: 'assets/img/1/1.jpg',
        phone: 1111111111,
        address: 'Address 1',
        weather: {
            title: 'Weather 1',
            icon: '',
            water: 1,
            temperature: 1
        },
        social_info: {
            title: 'Social info 1',
            img: 'assets/img/1/2.jpg',
            followers: 1,
            following: 1
        }
    },
    {
        _id: 2,
        type: HotelType.TWO_STAR,
        img: 'assets/img/2/1.jpg',
        phone: 2222222222,
        address: 'Address 2',
        weather: {
            title: 'Weather 2',
            icon: '',
            water: 2,
            temperature: 2
        },
        social_info: {
            title: 'Social info 2',
            img: 'assets/img/2/2.jpg',
            followers: 2,
            following: 2
        }
    },
    {
        _id: 3,
        type: HotelType.THREE_STAR,
        img: 'assets/img/3/1.jpg',
        phone: 3333333333,
        address: 'Address 3',
        weather: {
            title: 'Weather 3',
            icon: '',
            water: 3,
            temperature: 3
        },
        social_info: {
            title: 'Social info 3',
            img: 'assets/img/3/2.jpg',
            followers: 3,
            following: 3
        }
    },
    {
        _id: 4,
        type: HotelType.FOUR_STAR,
        img: 'assets/img/4/1.jpg',
        phone: 4444444444,
        address: 'Address 4',
        weather: {
            title: 'Weather 4',
            icon: '',
            water: 4,
            temperature: 4
        },
        social_info: {
            title: 'Social info 4',
            img: 'assets/img/4/2.jpg',
            followers: 4,
            following: 4
        }
    },
    {
        _id: 5,
        type: HotelType.FIVE_STAR,
        img: 'assets/img/5/1.jpg',
        phone: 55555555555,
        address: 'Address 5',
        weather: {
            title: 'Weather 5',
            icon: '',
            water: 5,
            temperature: 5
        },
        social_info: {
            title: 'Social info 5',
            img: 'assets/img/5/2.jpg',
            followers: 5,
            following: 5
        }
    },
    {
        _id: 6,
        type: HotelType.THREE_STAR,
        img: 'assets/img/6/1.jpg',
        phone: 66666666666,
        address: 'Address 6',
        weather: {
            title: 'Weather 6',
            icon: '',
            water: 6,
            temperature: 6
        },
        social_info: {
            title: 'Social info 6',
            img: 'assets/img/6/2.jpg',
            followers: 6,
            following: 6
        }
    },
    {
        _id: 7,
        type: HotelType.ONE_STAR,
        img: 'assets/img/7/1.jpg',
        phone: 777777777,
        address: 'Address 7',
        weather: {
            title: 'Weather 7',
            icon: '',
            water: 7,
            temperature: 7
        },
        social_info: {
            title: 'Social info 7',
            img: 'assets/img/7/2.jpg',
            followers: 7,
            following: 7
        }
    },
    {
        _id: 8,
        type: HotelType.THREE_STAR,
        img: 'assets/img/8/1.jpg',
        phone: 88888888,
        address: 'Address 8',
        weather: {
            title: 'Weather 8',
            icon: '',
            water: 8,
            temperature: 8
        },
        social_info: {
            title: 'Social info 8',
            img: 'assets/img/8/2.jpg',
            followers: 8,
            following: 8
        }
    },
    {
        _id: 9,
        type: HotelType.THREE_STAR,
        img: 'assets/img/9/1.jpg',
        phone: 99999999999,
        address: 'Address 9',
        weather: {
            title: 'Weather 9',
            icon: '',
            water: 9,
            temperature: 9
        },
        social_info: {
            title: 'Social info 9',
            img: 'assets/img/9/2.jpg',
            followers: 9,
            following: 9
        }
    }
];
var hotels$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(hotels).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1500));


/***/ }),

/***/ "./src/app/phone.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/phone.pipe.ts ***!
  \*******************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (phone) {
        var value = phone.toString().trim().replace(/^\+/, '');
        if (value.match(/[^0-9]/)) {
            return phone.toString();
        }
        var country;
        var city;
        var number;
        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = '1';
                city = value.slice(0, 3);
                number = value.slice(3);
                break;
            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;
            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;
            default:
                return phone.toString();
        }
        if (country === '1') {
            country = '';
        }
        number = number.slice(0, 3) + '-' + number.slice(3);
        return (country + ' (' + city + ') ' + number).trim();
    };
    PhonePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'phone'
        })
    ], PhonePipe);
    return PhonePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dmitry/JavaScript/angular-homework3/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map