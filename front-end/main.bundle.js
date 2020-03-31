webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<user></user>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_header_header_component__ = __webpack_require__("../../../../../src/app/user/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_footer_footer_component__ = __webpack_require__("../../../../../src/app/user/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_select_bus_select_bus_component__ = __webpack_require__("../../../../../src/app/user/select-bus/select-bus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_select_seat_select_seat_component__ = __webpack_require__("../../../../../src/app/user/select-seat/select-seat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_bus_search_result_bus_search_result_component__ = __webpack_require__("../../../../../src/app/user/bus-search-result/bus-search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_services_selectBus_service__ = __webpack_require__("../../../../../src/app/user/services/selectBus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_form_user_form_component__ = __webpack_require__("../../../../../src/app/user/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_services_booking_service__ = __webpack_require__("../../../../../src/app/user/services/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_print_print_component__ = __webpack_require__("../../../../../src/app/user/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_sign_sign_component__ = __webpack_require__("../../../../../src/app/user/sign/sign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_services_user_registration_service__ = __webpack_require__("../../../../../src/app/user/services/user-registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var userRoute = [
    { path: 'select', component: __WEBPACK_IMPORTED_MODULE_10__user_select_bus_select_bus_component__["a" /* SelectBusComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_12__user_bus_search_result_bus_search_result_component__["a" /* BusSearchResultComponent */] },
    { path: 'user-form', component: __WEBPACK_IMPORTED_MODULE_14__user_user_form_user_form_component__["a" /* UserFormComponent */] },
    { path: 'print', component: __WEBPACK_IMPORTED_MODULE_17__user_print_print_component__["a" /* PrintComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_18__user_login_login_component__["a" /* LoginComponent */] },
    { path: 'sign', component: __WEBPACK_IMPORTED_MODULE_19__user_sign_sign_component__["a" /* SignComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_18__user_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_select_bus_select_bus_component__["a" /* SelectBusComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_select_seat_select_seat_component__["a" /* SelectSeatComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_bus_search_result_bus_search_result_component__["a" /* BusSearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_14__user_user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_17__user_print_print_component__["a" /* PrintComponent */],
                __WEBPACK_IMPORTED_MODULE_18__user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__user_sign_sign_component__["a" /* SignComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(userRoute),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__user_services_selectBus_service__["a" /* SelectBusService */],
                __WEBPACK_IMPORTED_MODULE_15__user_services_booking_service__["a" /* BookingService */],
                __WEBPACK_IMPORTED_MODULE_16__user_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_20__user_services_user_registration_service__["a" /* UserRegistrationService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/bus-search-result/bus-search-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/bus-search-result/bus-search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4 \" *ngIf=\"route\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-10\">\n        <div class=\"row text-center\">\n            <h6 class=\" text-capitalize col-md-12 mb-3 text-center\">{{route.leaving_form}} - {{route.going_to}} on {{route.date | date:'longDate'}}</h6>\n          </div>\n      <div class=\"row mb-3 card card-body\">\n\n       <div class=\" row\">\n         <div class=\"col-md-4 text-right\">\n           <p><b>Filter By</b></p>\n         </div>\n          <div class=\"form-group col-md-4\">\n            <select name=\"\" class=\"form-control form-control-sm\" id=\"\">\n              <option value=\"\">By Bus</option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-4\">\n              <select name=\"\" class=\"form-control form-control-sm\">\n                <option value=\"\">By Type</option>\n              </select>\n            </div>\n       </div>\n      </div>\n      <div class=\"row search-result mb-5 pb-5\">\n\n        <table class=\"table\">\n\n          <thead>\n            <tr>\n                <th>Bus Name</th>\n                <th>Dept. Time</th>\n                <th>Coach Type</th>\n                <th>Seats Available</th>\n                <th>Fare</th>\n                <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let b of buses\">\n              <td> <h6>{{b.name}}</h6></td>\n             \n              <td>{{b.time}}</td>\n              <td>{{b.coach_type}}</td>\n              <td>{{b.seat}}</td>\n              <td>{{b.fare}}</td>\n              <ng-template #template>\n           \n                  <div class=\"modal-body\">\n                      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    <select-seat [bus]=\"b\" (closeModal)=\"closeModal()\"></select-seat>\n                  </div>\n              </ng-template>\n              <td><button  (click)=\"openModal(template)\" class=\"btn btn-danger btn-sm\">View Seats</button></td>\n            </tr>\n  \n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/bus-search-result/bus-search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusSearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_selectBus_service__ = __webpack_require__("../../../../../src/app/user/services/selectBus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_bus_model__ = __webpack_require__("../../../../../src/app/user/models/bus.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusSearchResultComponent = /** @class */ (function () {
    function BusSearchResultComponent(BusService, modalService, router) {
        this.BusService = BusService;
        this.modalService = modalService;
        this.router = router;
        this.buses = [];
        this.route = new Object();
    }
    BusSearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route = JSON.parse(localStorage.getItem("route"));
        if (!this.route) {
            this.router.navigate(['']);
        }
        this.subscription = this.BusService.castId.subscribe(function (res) { return _this.getAllBus(res); });
    };
    BusSearchResultComponent.prototype.getAllBus = function (res) {
        // let bus=new Object();
        var bus1 = new __WEBPACK_IMPORTED_MODULE_2__models_bus_model__["a" /* Bus */]();
        bus1.key = "abc1";
        bus1.name = "Volvo";
        bus1.coach_type = "ac";
        bus1.fare = 600;
        bus1.location = "Mohali";
        bus1.seat = 36;
        bus1.time = "10:00 PM";
        this.buses.push(bus1);
        var bus2 = new __WEBPACK_IMPORTED_MODULE_2__models_bus_model__["a" /* Bus */]();
        bus2.key = "abc2";
        bus2.name = "C.T.U.";
        bus2.coach_type = "non ac";
        bus2.fare = 350;
        bus2.location = "Punjab";
        bus2.seat = 25;
        bus2.time = "9:00 PM";
        this.buses.push(bus2);
        var bus3 = new __WEBPACK_IMPORTED_MODULE_2__models_bus_model__["a" /* Bus */]();
        bus3.key = "abc3";
        bus3.name = "RAJDHANI";
        bus3.coach_type = "ac";
        bus3.fare = 450;
        bus3.location = "Punjab";
        bus3.seat = 25;
        bus3.time = "9:50 AM";
        this.buses.push(bus3);
        var bus4 = new __WEBPACK_IMPORTED_MODULE_2__models_bus_model__["a" /* Bus */]();
        bus4.key = "abc4";
        bus4.name = "Sheikhpura";
        bus4.coach_type = "non ac";
        bus4.fare = 350;
        bus4.location = "Chandigarh";
        bus4.seat = 40;
        bus4.time = "12:30 PM";
        this.buses.push(bus4);
        var bus5 = new __WEBPACK_IMPORTED_MODULE_2__models_bus_model__["a" /* Bus */]();
        bus5.key = "abc2";
        bus5.name = "Nanuan Travels";
        bus5.coach_type = "ac";
        bus5.fare = 550;
        bus5.location = "Rajpura";
        bus5.seat = 60;
        bus5.time = "1:00 PM";
        this.buses.push(bus5);
        // this.BusService.getBus(res)
        // .subscribe(
        //   res=>{
        //     for(let key in res){
        //       bus=res[key];
        //       bus['$key']=key;
        //    this.buses.push(bus as Bus);
        //     }
        //   }
        // )
    };
    BusSearchResultComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BusSearchResultComponent.prototype.openModal = function (template, bus) {
        this.modalRef = this.modalService.show(template);
        // let journey={
        //   route:this.route,
        //   bus_info:bus,
        //   seats:
        // }
    };
    BusSearchResultComponent.prototype.closeModal = function () {
        this.modalRef.hide();
    };
    BusSearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-result-info',
            template: __webpack_require__("../../../../../src/app/user/bus-search-result/bus-search-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/bus-search-result/bus-search-result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_selectBus_service__["a" /* SelectBusService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], BusSearchResultComponent);
    return BusSearchResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer \">\n\n  <div class=\"container\">\n    <div class=\"row mt-5 mb-5 justify-content-center\">\n      <div class=\"col-md-6 \">\n    </div>\n    <div class=\"justify-content-center\">\n      <img src=\"../assets/img/sslcommerz_logo.png\" alt=\"\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'footer',
            template: __webpack_require__("../../../../../src/app/user/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-top\">\n    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 logo\">\n            <img src=\"assets/img/buslogo.png\" alt=\"\">\n          </div>\n        </div>\n      </div>    \n</div>\n\n<div class=\"menu\">\n  <div class=\"container\">\n    \n     <div class=\"col-md-7\">\n      <ul>\n       <li [routerLink]=''>Home</li>\n      </ul>\n     </div>\n     \n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header',
            template: __webpack_require__("../../../../../src/app/user/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jevada\"> <!--style=\"background-image:url('assets/img/Dreams.jpg');\"-->\n  <br>\n<div class=\"formq\">\n  <div  class=\"p-2 width-33\">\n  \n        <form class=\"example-form\" (ngSubmit) = \"onAddPost(loginForm)\" #loginForm = \"ngForm\">\n          <div>\n            \n              <p>Email</p>\n              <input    type = \"email\" \n               placeholder=\"Enter your email\"\n              \n               required\n               #email = \"ngModel\" ngModel name = \"email\">\n              \n               <!-- <mat-error *ngIf=\"email.errors.pattern\">\n                 Please enter valid email\n               </mat-error> -->\n               \n          </div>\n          <br>\n          <!-- pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" -->\n          <!-- pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\"  -->\n          <div >\n            \n              <p>Password</p>\n              <input   type = \"password\" \n              placeholder=\"Password\"\n              \n              required showHideInput\n               #password = \"ngModel\" ngModel name = \"password\">\n              \n         \n          </div>\n          <br>\n          <div>\n           <button   class=\"example-button-row\"  (click)=\"onLogin(loginForm)\">Log In</button> <!--(click)=\"login()\"-->\n            <br>\n           <h2 class=\"nomem\"> Not a Member?</h2>\n            <button  class=\"example-button-row\"  routerLink=\"/sign\" >Register</button>\n          </div>\n        </form>\n      </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_registration_service__ = __webpack_require__("../../../../../src/app/user/services/user-registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {AuthenticationService} from '../authentication.service';


//import {AppServiceService} from '../app-service.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.myimage14 = "assets/img/wallpaper11.jpg";
        var response = this.service.userData();
        response.subscribe(function (data) { return _this.credentials = data; });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onAddPost = function (form) {
        if (form.invalid) {
            console.log("Invalid");
            return;
        }
        var post = { pssword: form.value.password, email_id: form.value.email };
        console.log(post);
    };
    LoginComponent.prototype.onLogin = function (form) {
        var flag = true;
        var email = form.value.email;
        var password = form.value.password;
        // console.log(email);
        // console.log(password);
        console.log(form.valid);
        for (var i in this.credentials) {
            // console.log(this.credentials[i].eMail)
            // console.log(this.credentials[i].password)
            if (email == this.credentials[i].eMail && password == this.credentials[i].password) {
                flag = false;
                this.router.navigateByUrl('select');
            }
            else {
            }
        }
        if (flag == true) {
            alert("Invalid Credentials");
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_registration_service__["a" /* UserRegistrationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/models/bus.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bus; });
var Bus = /** @class */ (function () {
    function Bus() {
    }
    return Bus;
}());



/***/ }),

/***/ "../../../../../src/app/user/print/print.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/print/print.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"createTicket\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-10 ticket \">\n        <h6 class=\"text-center pt-3 pb-3 \"> Online Reservation      </h6>\n        <table class=\"table \">\n   <thead>\n    <td class=\"text-capitalize\">{{createTicket.journey.journey_route.leaving_form}} <span> <i class=\"fas fa- arrow-right\"></i></span> {{createTicket.journey.journey_route.going_to}}</td>\n    <td>ThursDay 12 , 2018</td>\n   </thead>  \n        </table>\n        <table class=\"table ps_details\">\n          <tr>\n            <th>Passenger Details</th>\n            <th>Ticket Id</th>\n            <th>Seat No</th>\n            <th>Total Fare</th>\n            \n          </tr>\n          <tr>\n            <td><b>{{createTicket.user.user_name}}</b> <br>\n              <span>{{createTicket.user.mobile}}</span> <br>\n              <span>{{createTicket.user.user_email}}</span>\n            </td>\n\n            <td>{{createTicket.ticketId}}</td>\n            <td *ngIf=\"createTicket.journey.seats\">\n             <span  *ngFor=\"let s of createTicket.journey.seats\">{{s}}</span> \n            </td>\n            <td>{{createTicket.journey.fare}} </td>\n          </tr>\n        </table>\n        <table class=\"table ps_details \">\n          <tr>\n            <th>Bus Name</th>\n            <th>Reporting Time </th>\n            <th>Departure Time</th>\n            \n          </tr>\n          <tr>\n            <td>{{createTicket.journey.bus.name}} <br>\n            <span> <em>Coach Type: </em>{{createTicket.journey.bus.coach_type}} </span>\n            </td>\n            <td>Before 30 mints</td>\n            <td>{{createTicket.journey.bus.time}}</td>\n          </tr>\n        </table>\n    </div>\n    <div class=\"row\">\n      <p style=\"color:red\">** Please Bring this copy to ticket counter for collect your ticket </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/print/print.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_booking_service__ = __webpack_require__("../../../../../src/app/user/services/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrintComponent = /** @class */ (function () {
    function PrintComponent(BookingService, route) {
        this.BookingService = BookingService;
        this.route = route;
    }
    PrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.BookingService.cast.subscribe(function (res) { return _this.createTicket = res; });
        if (!this.createTicket) {
            this.route.navigate(['']);
        }
    };
    PrintComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-print',
            template: __webpack_require__("../../../../../src/app/user/print/print.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/print/print.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_booking_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PrintComponent);
    return PrintComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/select-bus/select-bus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/select-bus/select-bus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlap\"></div>\n<div class=\"container\">\n  <div class=\"row justify-content-center pb-5 pt-5\" >\n    <div class=\"col-md-5 block mt-3\">\n      <form (ngSubmit)=\"SearchBus(f)\" #f=ngForm>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label>Leaving from</label>\n            <select (change)=\"leave($event)\"name=\"leaving_form\" required ngModel class=\"form-control form-control-sm\">\n              <option value=\"\">Select Place</option>\n              <option value=\"Chandigarh\">Chandigarh</option>\n              <option value=\"Delhi\">Delhi</option>\n            \n              <option value=\"Mumbai\">Mumbai</option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Going To</label>\n            <select name=\"going_to\"  [ngModel]=\"place[0].key\"   required class=\"form-control form-control-sm\">\n\n              <!-- <option value=\"1109001\">Comilla</option>\n              <option value=\"1109002\">Chittagong</option>\n              <option value=\"1109003\">Sylet</option>2\n              <option value=\"1109004\">Barishal</option> -->\n             \n              <option *ngFor=\"let p of place\"  [value]=\"p.key\">{{p.value}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-md-12\">\n            <label for=\"\">Departing On</label>\n            <input type=\"date\" required class=\"form-control form-control-sm\" ngModel name=\"depart_date\" >\n          </div>\n          \n        </div>\n        <button [disabled]=\"!f.valid\"class=\"btn btn-block mt-3 btn-search btn-sm\"> <i class=\"fas mr-2 fa-search\"></i> Search Buses</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/select-bus/select-bus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBusComponent; });
/* unused harmony export Place */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_selectBus_service__ = __webpack_require__("../../../../../src/app/user/services/selectBus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectBusComponent = /** @class */ (function () {
    function SelectBusComponent(BusService, router) {
        this.BusService = BusService;
        this.router = router;
        // ={
        //   1109001:'comilla',
        //   1109002:'Chittagong',
        //   1109003:'Sylet',
        //   1109004:'Barisal'
        // }
        this.pnumber = 1;
        this.place = [];
        this.place[0] = new Place();
    }
    SelectBusComponent.prototype.ngOnInit = function () {
    };
    SelectBusComponent.prototype.SearchBus = function (form) {
        var leaving_form = form.value.leaving_form;
        var destination;
        this.place.filter(function (iteam) {
            if (iteam.key == form.value.going_to) {
                destination = iteam.value;
            }
        });
        var date = form.value.depart_date;
        var route = {
            leaving_form: leaving_form,
            going_to: destination,
            date: date
        };
        localStorage.setItem("route", JSON.stringify(route));
        var routeId = form.value.going_to;
        this.BusService.getRoueId(routeId);
        this.router.navigate(['search']);
    };
    SelectBusComponent.prototype.leave = function (e) {
        var leavingfrom = e.target.value;
        console.log(leavingfrom);
        if (leavingfrom == 'Chandigarh') {
            this.place = [
                { key: '1109001', value: 'Delhi' },
                { key: '1109002', value: 'Patiala' },
                { key: '1109004', value: 'Amritsar' },
                { key: '1109005', value: 'Shimla' }
            ];
        }
        else if (leavingfrom == 'Delhi') {
            this.place = [
                { key: '2209002', value: 'Chandigarh' },
                { key: '2209001', value: 'Ludhiana' },
                { key: '2209003', value: 'Amritsar' },
            ];
        }
        else if (leavingfrom == 'Mumbai') {
            this.place = [
                { key: '3309003', value: 'Pune' },
                { key: '3309001', value: 'Bangalore' },
                { key: '3309002', value: 'Goa' },
            ];
        }
    };
    SelectBusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '.select-bus',
            template: __webpack_require__("../../../../../src/app/user/select-bus/select-bus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/select-bus/select-bus.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_selectBus_service__["a" /* SelectBusService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SelectBusComponent);
    return SelectBusComponent;
}());

var Place = /** @class */ (function () {
    function Place() {
    }
    return Place;
}());



/***/ }),

/***/ "../../../../../src/app/user/select-seat/select-seat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/select-seat/select-seat.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container-fluid pt-5 mb-5\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-9 \">\n      <div class=\"seat_plan_wrap\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h6>Select Seats </h6>\n            <div class=\"seats\">\n              <div class=\"handle\">\n                <img src=\"../assets/img/handle.png\" alt=\"\">\n              </div>\n              <div class=\"row1\">\n                <ul>\n                  <li>\n                    <a (click)=\"Seat('A1')\" id=\"A1\" title=\"[A1]\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a (click)=\"Seat('B1')\" id=\"B1\" title=\"[B1]\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[C1]\" (click)=\"Seat('C1')\" id=\"C1\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[D1]\" (click)=\"Seat('D1')\" id=\"D1\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[E1]\" (click)=\"Seat('E1')\" id=\"E1\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[F1]\" (click)=\"Seat('F1')\" id=\"F1\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[G1]\" (click)=\"Seat('G1')\" id=\"G1\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[H1]\" (click)=\"Seat('H1')\" id=\"H1\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[I1]\" (click)=\"Seat('I1')\" id=\"I1\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                </ul>\n\n\n                <ul>\n                  <li>\n                    <a title=\"[A2]\" (click)=\"Seat('A2')\" id=\"A2\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[B2]\" (click)=\"Seat('B2')\" id=\"B2\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[C2]\" (click)=\"Seat('C2')\" id=\"C2\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[D2]\" (click)=\"Seat('D2')\" id=\"D2\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[E2]\" (click)=\"Seat('E2')\" id=\"E2\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[F2]\" (click)=\"Seat('F2')\" id=\"F2\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[G2]\" (click)=\"Seat('G2')\" id=\"G2\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[H2]\" (click)=\"Seat('H2')\" id=\"H2\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[I2]\" (click)=\"Seat('I2')\" id=\"I2\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                </ul>\n\n              </div>\n              <div class=\"row1\">\n\n                <ul>\n                  <!-- ROW 3 START -->\n                  <li>\n                    <a title=\"[A3]\" (click)=\"Seat('A3')\" id=\"A3\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[B3]\" (click)=\"Seat('B3')\" id=\"B3\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[C3]\" (click)=\"Seat('C3')\" id=\"C3\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[D3]\" (click)=\"Seat('D3')\" id=\"D3\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[E3]\" (click)=\"Seat('E3')\" id=\"E3\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[F3]\" (click)=\"Seat('F3')\" id=\"F3\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[G3]\" (click)=\"Seat('G3')\" id=\"G3\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[H3]\" (click)=\"Seat('H3')\" id=\"H3\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[I3]\" (click)=\"Seat('I3')\" id=\"I3\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                </ul>\n\n                <!-- ROW 3 COMPLETE  -->\n\n                <ul>\n                  <!-- ROW 4 START  -->\n                  <li>\n                    <a title=\"[A4]\" (click)=\"Seat('A4')\" id=\"A4\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[B4]\" (click)=\"Seat('B4')\" id=\"B4\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[C4]\" (click)=\"Seat('C4')\" id=\"C4\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[D4]\" (click)=\"Seat('D4')\" id=\"D4\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[E4]\" (click)=\"Seat('E4')\" id=\"E4\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[F4]\" (click)=\"Seat('F4')\" id=\"F4\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[G4]\" (click)=\"Seat('G4')\" id=\"G4\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[H4]\" (click)=\"Seat('H4')\" id=\"H4\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                  <li>\n                    <a title=\"[I4]\" (click)=\"Seat('I4')\" id=\"I4\">\n                      <img src=\"../assets/img/bseat.png\" alt=\"\">\n                    </a>\n                  </li>\n                </ul>\n\n              </div>\n             \n            </div>\n            <div *ngIf=\"alert\"class=\"alert alert-danger \">You can buy only 4 seats in one time </div>\n          </div>\n          <div class=\"col-md-6 \">\n          <div class=\"seat_plan\">\n            <table class=\"table \">\n              <thead>\n                <tr>\n                  <th>Seats</th>\n                  <th>Fare</th>\n                  <th>Class</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let s of showSeatList\">\n                  <td>{{s.seatNo}}</td>\n                  <td>{{s.fare}}</td>\n                  <td>{{s.seatClass}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n            <div class=\"total  bg-default\">\n              <b>Total: {{total}}</b>\n            </div>\n            <div class=\"row \">\n              <button (click)=\"confirmJourney()\"class=\"btn mt-3 ml-3 btn-primary btn-sm btn-block \">Confirm</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/user/select-seat/select-seat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSeatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_bus_model__ = __webpack_require__("../../../../../src/app/user/models/bus.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_selectBus_service__ = __webpack_require__("../../../../../src/app/user/services/selectBus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectSeatComponent = /** @class */ (function () {
    function SelectSeatComponent(route, BusService) {
        this.route = route;
        this.BusService = BusService;
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.showSeatList = [];
        this.total = 0;
        this.fillupSeat = [];
        this.alert = false;
    }
    SelectSeatComponent.prototype.ngOnInit = function () {
        this.getbookSeat();
    };
    SelectSeatComponent.prototype.Seat = function (e) {
        var seats = [];
        seats = this.showSeatList.map(function (iteam) {
            return iteam.seatNo;
        });
        var id = document.getElementById(e);
        if ((this.fillupSeat.indexOf(String(e)) < 0) && (seats.indexOf(e) < 0)) {
            if ((this.showSeatList.length != 4)) {
                id.innerHTML = "   <img src=\"../assets/img/fseat.png\" alt=\"\">";
                var seat = {
                    seatNo: e,
                    fare: this.bus.fare,
                    seatClass: 'economy'
                };
                this.totalFare(seat.fare);
                this.showList(seat);
            }
            else {
                this.alert = true;
            }
        }
    };
    SelectSeatComponent.prototype.showList = function (seat) {
        this.showSeatList.push(seat);
    };
    SelectSeatComponent.prototype.totalFare = function (fare) {
        this.total += fare;
    };
    SelectSeatComponent.prototype.confirmJourney = function () {
        var route = JSON.parse(localStorage.getItem("route"));
        var seats = [];
        seats = this.showSeatList.map(function (iteam) {
            return iteam.seatNo;
        });
        var journey = {
            bus: this.bus,
            seats: seats,
            fare: Number(this.total),
            journey_route: route
        };
        localStorage.setItem("journey", JSON.stringify(journey));
        this.route.navigate(['user-form']);
        this.closeModal.emit();
    };
    SelectSeatComponent.prototype.getbookSeat = function () {
        var _this = this;
        var route = JSON.parse(localStorage.getItem("route"));
        // Updated 13 march
        // let busid=this.bus.$key;
        var busid = this.bus.key;
        var key = String(new Date(route.date).getTime());
        console.log(busid, key);
        this.subscription = this.BusService.getFillupseat(key, busid)
            .subscribe(function (res) {
            for (key in res) {
                for (var i in res[key].seats) {
                    _this.fillupSeat.push(res[key].seats[i]);
                    _this.changeSeatColor(res[key].seats[i]);
                }
            }
        });
    };
    SelectSeatComponent.prototype.changeSeatColor = function (seatNo) {
        var id = document.getElementById(seatNo);
        id.innerHTML = "  <img src=\"../assets/img/bookseat.png\">";
        id.removeEventListener("click", this.Seat);
    };
    SelectSeatComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('bus'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_bus_model__["a" /* Bus */])
    ], SelectSeatComponent.prototype, "bus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('closeModal'),
        __metadata("design:type", Object)
    ], SelectSeatComponent.prototype, "closeModal", void 0);
    SelectSeatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-seat',
            template: __webpack_require__("../../../../../src/app/user/select-seat/select-seat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/select-seat/select-seat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_selectBus_service__["a" /* SelectBusService */]])
    ], SelectSeatComponent);
    return SelectSeatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/services/booking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var BookingService = /** @class */ (function () {
    function BookingService(http, UserService, router) {
        this.http = http;
        this.UserService = UserService;
        this.router = router;
        this.journey_info = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"]('');
        this.cast = this.journey_info.asObservable();
        this.Root_Url = "https://localhost8080.com/";
    }
    // userBooking(jourey:Journey) {
    //     this.http.post(this.Root_Url+'user_booking',jourey)
    // }
    BookingService.prototype.seatBooking = function (jourey, user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var busID, booking, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        busID = jourey.bus.key;
                        booking = new Object();
                        key = new Date(jourey.journey_route.date).getTime();
                        return [4 /*yield*/, this.createUserID(user).subscribe(function (res) {
                                booking = {
                                    user_id: Object.values(res)[0],
                                    seats: jourey.seats
                                };
                                _this.chekBookingDate_BusInfo(key, jourey, booking, busID);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookingService.prototype.createBookingDate = function (journey, key, booking, busID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.create(journey, key, busID, booking)
                        // await this.createBooking(booking, key,busID)
                    ];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookingService.prototype.create = function (journey, key, busID, booking) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var location;
            return __generator(this, function (_a) {
                location = journey.journey_route.leaving_form + ' to ' + journey.journey_route.going_to;
                this.http.put(this.Root_Url + 'booking/' + key + '/' + busID + '.json', {
                    bus: {
                        location: location,
                        name: journey.bus.name,
                        coach_type: journey.bus.coach_type,
                        nfareame: journey.bus.fare,
                        time: journey.bus.time,
                        seat: journey.bus.seat
                    }
                })
                    .subscribe(function (res) {
                    _this.createBooking(booking, key, busID);
                }, function (error) { return console.log(error); });
                return [2 /*return*/];
            });
        });
    };
    BookingService.prototype.CheckBusID = function (busID, key, booking, journey) {
        var _this = this;
        var busidArray = [];
        this.http.get(this.Root_Url + 'booking/' + key + '.json')
            .subscribe(function (res) {
            for (var key_1 in res) {
                busidArray.push(key_1);
            }
            if (busidArray.indexOf(String(busID)) > -1) {
                _this.createBooking(booking, key, busID);
            }
            else {
                _this.create(journey, key, busID, booking);
            }
        });
    };
    BookingService.prototype.chekBookingDate_BusInfo = function (key, journey, booking, busID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var keys;
            return __generator(this, function (_a) {
                keys = [];
                this.http.get(this.Root_Url + 'booking.json')
                    .subscribe(function (res) {
                    for (var key_2 in res) {
                        keys.push(key_2);
                    }
                    if (keys.indexOf(String(key)) > -1) {
                        _this.CheckBusID(busID, key, booking, journey);
                    }
                    else {
                        _this.createBookingDate(journey, key, booking, busID);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    BookingService.prototype.createBooking = function (booking, key, busID) {
        var _this = this;
        var tketID;
        this.http.post(this.Root_Url + 'booking/' + key + '/' + busID + '/seat_booking.json', booking)
            .subscribe(function (res) {
            for (var key_3 in res) {
                tketID = res[key_3];
            }
            _this.createPrintView(tketID);
        }, function (err) { return console.log(err); });
    };
    BookingService.prototype.createUserID = function (user) {
        localStorage.setItem("user", JSON.stringify(user));
        return this.UserService.createUser(user);
    };
    BookingService.prototype.createPrintView = function (tketID) {
        var journey = JSON.parse(localStorage.getItem("journey"));
        var user = JSON.parse(localStorage.getItem("user"));
        var Ticket = {
            ticketId: tketID,
            journey: journey,
            user: user
        };
        this.getJourneyInfo(Ticket);
        this.router.navigate(['print']);
    };
    BookingService.prototype.getJourneyInfo = function (Ticket) {
        this.journey_info.next(Ticket);
        localStorage.removeItem("journey");
        localStorage.removeItem("route");
        localStorage.removeItem("user");
    };
    BookingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "../../../../../src/app/user/services/selectBus.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectBusService = /** @class */ (function () {
    function SelectBusService(http) {
        this.http = http;
        this.Root_url = "https://localhost8080.com/";
        this.routeId = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]('');
        this.castId = this.routeId.asObservable();
    }
    SelectBusService.prototype.getBus = function (routeId) {
        return this.http.get(this.Root_url + 'buses/' + routeId + '.json');
        //    console.log(this.http.get(this.Root_url + 'buses/'+routeId+'.json'));
    };
    SelectBusService.prototype.getRoueId = function (routeId) {
        this.routeId.next(routeId);
    };
    SelectBusService.prototype.getFillupseat = function (key, busID) {
        return this.http.get(this.Root_url + 'booking/' + key + '/' + busID + '/seat_booking.json');
        //console.log(this.Root_url+'booking/'+key+'/'+busID+'.json')
    };
    SelectBusService.prototype.getRoute = function (key) {
        return this.http.get(this.Root_url + 'routes/' + key + '.json');
    };
    SelectBusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SelectBusService);
    return SelectBusService;
}());



/***/ }),

/***/ "../../../../../src/app/user/services/user-registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRegistrationService = /** @class */ (function () {
    function UserRegistrationService(http) {
        this.http = http;
    }
    //Does an API Call using POST Http Method
    //for signup
    UserRegistrationService.prototype.doRegistration = function (user) {
        return this.http.post("http://localhost:8080/create", user, { responseType: 'text' });
    };
    //checking data during login
    UserRegistrationService.prototype.userData = function () {
        //return this.http.get(`${this.url}`);
        return this.http.get("http://localhost:8080/getAll");
    };
    //other methods from here
    UserRegistrationService.prototype.deleteAll = function () {
        return this.http.get("http://localhost:8080/deleteAll", { responseType: 'text' });
    };
    UserRegistrationService.prototype.findbyName = function (name) {
        return this.http.get("http://localhost:8080/get?firstName=" + name);
    };
    UserRegistrationService.prototype.deletebyName = function (name) {
        return this.http.get("http://localhost:8080/delete?firstName=" + name);
    };
    UserRegistrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserRegistrationService);
    return UserRegistrationService;
}());



/***/ }),

/***/ "../../../../../src/app/user/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.Root_Url = "https://bdbusticket.firebaseio.com/";
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.Root_Url + 'users.json', user);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/sign/sign.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/sign/sign.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div1\">\n  <div class=\"div2\">  \n    <div> <h1 class=\"hed\" style=\"color:white\">Sign Up</h1>\n      <p class=\"fill\" style=\"color:white\">Please fill in this form to create an account.</p>\n    </div>\n    <hr>\n    <form class=\"example-form\" (ngSubmit) = \"onAddPost(signupForm)\" #signupForm = \"ngForm\">\n      <div>\n          <p class=\"sub\">Username</p>\n     \n          <!-- <mat-label>Name</mat-label> -->\n          <input  minlength = \"4\"  type = \"text\" \n          required placeholder=\"Enter your username\"\n          [(ngModel)]=\"user.firstName\" [ngModelOptions]=\"{standalone: true}\"\n           #name = \"ngModel\" ngModel name = \"name\">\n          <br>\n        </div>\n        <div>\n          <p class=\"sub\">Age</p>\n      \n          <!-- <mat-label>Age</mat-label> -->\n          <input maxlength = \"2\"  type = \"text\" \n         placeholder=\"Enter your age\"\n          [(ngModel)]=\"user.age\" [ngModelOptions]=\"{standalone: true}\"\n           #age = \"ngModel\" ngModel name = \"age\"   required>\n           <br>\n        </div>\n        <div>\n          <p class=\"sub\">Email</p>\n         \n            <!-- <mat-label>Email</mat-label> -->\n            <input   type = \"email\" \n             placeholder=\"Enter your email\"\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" required\n            [(ngModel)]=\"user.eMail\" [ngModelOptions]=\"{standalone: true}\"\n             #email = \"ngModel\" ngModel name = \"email\">\n            \n        </div>\n        <div>\n          <p class=\"sub\">Contact Number</p>\n        \n          <!-- <mat-label>Contact Number</mat-label> -->\n           <input  minlength = \"10\" maxlength=\"10\"  type = \"text\" \n           required placeholder=\"Enter your number\"\n           [(ngModel)]=\"user.number\" [ngModelOptions]=\"{standalone: true}\"\n            #mnum = \"ngModel\" ngModel name = \"mnum\">\n            <br>\n         </div>\n        <div>\n          <p class=\"sub\">Password</p>\n        \n          <!-- <mat-label>Password</mat-label> -->\n          <input  type = \"password\" \n           placeholder=\"Enter your password\"\n           pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\" required showHideInput\n          [(ngModel)]=\"user.password\" [ngModelOptions]=\"{standalone: true}\"\n           #password = \"ngModel\" ngModel name = \"password\">\n           \n         <br/><br/><br/>\n        </div>\n         <div>\n          <button  class=\"example-button-row\" (click)=\"registerProcess()\">Sign up</button> \n         </div>\n    </form>\n  \n  </div>\n  \n    <br><br>\n  <br>\n  <br>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/user/sign/sign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_registration_service__ = __webpack_require__("../../../../../src/app/user/services/user-registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { formatNumber } from '@angular/common';
var SignComponent = /** @class */ (function () {
    function SignComponent(service, router) {
        this.service = service;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]("", "", 0, "", "");
    }
    SignComponent.prototype.ngOnInit = function () {
    };
    SignComponent.prototype.registerProcess = function () {
        var _this = this;
        var response = this.service.doRegistration(this.user);
        response.subscribe(function (data) { return _this.message = (data); });
        this.router.navigateByUrl('login');
    };
    // public check(form:NgForm) {
    //   // console.log(form.valid);
    //   if(form.valid==true)
    //   {
    //     this.registerProcess();
    //     // this.router.navigateByUrl('login');
    // }
    // else if(form.value==false)
    // {
    //   alert("Fill the form correctly!");
    // }
    // }
    SignComponent.prototype.onAddPost = function (form) {
        if (form.invalid) {
            console.log("Invalid");
            return;
        }
        // console.log(form.valid);
        var post = { Name: form.value.name, Age: form.value.age, Email: form.value.email, Contact: form.value.number, Password: form.value.password };
        console.log(post);
    };
    SignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign',
            template: __webpack_require__("../../../../../src/app/user/sign/sign.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/sign/sign.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_registration_service__["a" /* UserRegistrationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-form/user-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4 \">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-10\">\n      <div class=\"row\">\n        <div class=\"col-md-8 block\" style=\"\n  height: 340px;\n  margin-bottom: 28px;\n\">\n          <form (ngSubmit)=\"userForm(userF)\" #userF=\"ngForm\">\n            <div class=\"form-group\">\n              <label>User Name</label>\n              <input type=\"text\" required name=\"user_name\" ngModel class=\"form-control form-control-sm\">\n            </div>\n            <div class=\"form-group\">\n              <label>User Mobile No</label>\n              <input type=\"text\" required name=\"user_mobile\" ngModel class=\"form-control form-control-sm\">\n            </div>\n            <div class=\"form-group\">\n              <label>Email </label>\n              <input type=\"email\" required name=\"user_email\" ngModel class=\"form-control form-control-sm\">\n            </div>\n            <button [disabled]=\"!userF.valid\" class=\"btn btn-sm btn-primary\">Submit</button>\n          </form>\n        </div>\n        <div class=\"col-md-4\">\n          <div *ngIf=\"journey\" class=\"card card-body block j_details\">\n            <h6>Journy Details</h6>\n            <hr>\n            <h5 class=\"text-capitalize\"style=\"color:coral\"> {{journey.journey_route.leaving_form}} to {{journey.journey_route.going_to}} </h5>\n            <p> Date & Time : {{journey.journey_route.date}} :{{journey.bus.time}}</p>\n            <p>{{journey.bus.name}} <br>\n                <span>Coach Type : {{journey.bus.coach_type}}  </span>\n            </p>\n            <p >Seats No (\n              <li style=\"display:inline;color:coral\" *ngFor=\"let s of journey.seats\">{{s}} , </li>\n              \n              )</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_booking_service__ = __webpack_require__("../../../../../src/app/user/services/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(BookingService, route) {
        this.BookingService = BookingService;
        this.route = route;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.journey = JSON.parse(localStorage.getItem("journey"));
        if (!this.journey) {
            this.route.navigate(['']);
        }
    };
    UserFormComponent.prototype.userForm = function (form) {
        var name = form.value.user_name;
        var mobile_no = form.value.user_mobile;
        var email = form.value.user_email;
        var user = {
            user_email: email,
            mobile: mobile_no,
            user_name: name
        };
        this.BookingService.seatBooking(this.journey, user);
    };
    UserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-form',
            template: __webpack_require__("../../../../../src/app/user/user-form/user-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_booking_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<header></header>\n<router-outlet></router-outlet>\n<!-- <div class=\"select-bus\"></div> -->\n<!-- <search-result-info></search-result-info> -->\n<!-- <select-seat></select-seat> -->\n<footer></footer>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
        localStorage.removeItem("journey");
        localStorage.removeItem("route");
        localStorage.removeItem("user");
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(firstName, eMail, age, password, number) {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map