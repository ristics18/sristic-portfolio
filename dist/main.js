(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-section\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"intro\">\n        <div class=\"container text-center\">\n          <img class=\"header-section-profile-image img-fluid\" src=\"assets/img/{{myImageAm}}\" alt=\"No image\" id=\"profileImg\">\n          <h1 class=\"header-section-name\">{{myTitleAm}}</h1>\n          <div class=\"header-section-title\">{{mySubtitleAm}}</div>\n          <div class=\"header-section-main-text\">\n            <p>{{mySummaryAm}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"wrapper container\">\n  <div class=\"main\">\n    <section class=\"main-section section\">\n      <h2 class=\"section-title\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i> Experience</h2>\n      <div class=\"row\">\n        <div class=\"item col-12 col-md-4\" *ngFor=\"let experience of experiences\">\n          <div class=\"item-inner\">\n            <h3 class=\"main-section-title\">{{experience.experienceName}}</h3>\n            <div class=\"main-section-subtitle\">\n              {{experience.experienceCompany}}\n            </div>\n            <div class=\"main-section-date\">{{experience.experienceDate}}</div>\n            <div class=\"main-section-desc\">\n              {{experience.experienceDesc}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n\n\n<div class=\"wrapper container\">\n  <div class=\"main\">\n    <section class=\"main-section section\">\n      <h2 class=\"section-title\"><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> Education</h2>\n      <div class=\"row\">\n        <div class=\"item col-12 col-md-4\" *ngFor=\"let education of educations\">\n          <div class=\"item-inner\">\n            <h3 class=\"main-section-title\">{{education.educationName}}</h3>\n            <div class=\"main-section-subtitle\">\n              {{education.educationUniversity}}\n            </div>\n            <div class=\"main-section-date\">{{education.educationDate}}</div>\n            <div class=\"main-section-desc\">\n              {{education.educationDesc}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section-profile {\n  padding-bottom: 15px; }\n\n.header-section-profile-image {\n  width: 700px;\n  height: 500px; }\n\n.header-section-main-text {\n  padding-bottom: 25px; }\n\n.header-section-name {\n  padding-top: 10px; }\n\n.header-section {\n  margin-top: 20px; }\n\n.section {\n  background: var(--white-3); }\n\n.main-section-subtitle {\n  color: var(--black-5); }\n\n@media all and (max-width: 768px) {\n  #profileImg {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLGNBQWEsRUFDZDs7QUFFRDtFQUNFLHFCQUFvQixFQUNyQjs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLDJCQUEwQixFQUMzQjs7QUFFRDtFQUNFLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFO0lBQ0UsYUFBWSxFQUNiLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItc2VjdGlvbi1wcm9maWxlIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5oZWFkZXItc2VjdGlvbi1wcm9maWxlLWltYWdle1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5oZWFkZXItc2VjdGlvbi1tYWluLXRleHR7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuLmhlYWRlci1zZWN0aW9uLW5hbWV7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uaGVhZGVyLXNlY3Rpb257XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtMyk7XG59XG5cbi5tYWluLXNlY3Rpb24tc3VidGl0bGV7XG4gIGNvbG9yOiB2YXIoLS1ibGFjay01KTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3Byb2ZpbGVJbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/app.constants */ "./src/constants/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(constants) {
        this.constants = constants;
        this.myImageAm = this.constants.MY_IMAGE_AM;
        this.myTitleAm = this.constants.MY_TITLE_AM;
        this.mySubtitleAm = this.constants.MY_SUBTITLE_AM;
        this.mySummaryAm = this.constants.MY_SUMMARY_AM;
        this.experiences = this.constants.EXPERIENCE;
        this.educations = this.constants.EDUCATION;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")],
            providers: [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]]
        }),
        __metadata("design:paramtypes", [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _errors_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors/error/error.component */ "./src/app/errors/error/error.component.ts");
/* harmony import */ var _project_view_project_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-view/project-view.component */ "./src/app/project-view/project-view.component.ts");
/* harmony import */ var _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./errors/page-not-found/page-not-found.component */ "./src/app/errors/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'error', component: _errors_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"] },
    { path: 'project/:id', component: _project_view_project_view_component__WEBPACK_IMPORTED_MODULE_8__["ProjectViewComponent"] },
    { path: '404', component: _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] },
    { path: '**', component: _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container-fluid\">\n  <section>\n    <router-outlet></router-outlet>\n  </section>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_themes_themes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/themes/themes.service */ "./src/services/themes/themes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(themesService) {
        this.themesService = themesService;
        this.title = 'main';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.themesService.switchTheme(this.themesService.DefaultTheme);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_themes_themes_service__WEBPACK_IMPORTED_MODULE_1__["ThemesService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _errors_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./errors/error/error.component */ "./src/app/errors/error/error.component.ts");
/* harmony import */ var _project_view_project_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project-view/project-view.component */ "./src/app/project-view/project-view.component.ts");
/* harmony import */ var _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./errors/page-not-found/page-not-found.component */ "./src/app/errors/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _errors_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                _project_view_project_view_component__WEBPACK_IMPORTED_MODULE_14__["ProjectViewComponent"],
                _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper container\">\n    <div class=\"main\">\n      <section class=\"main-section section\">\n        <h2 class=\"section-title\">Have a question or want to work together?</h2>\n        <div class=\"row\">\n          <div class=\"item col-12\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-lg-8\">\n                  <form [formGroup]=\"messageForm\" (ngSubmit)=\"sendMessage()\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\" style=\"padding-left: 17px;\"><i class=\"fa fa-user text-info\"></i></div>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Full Name\" formControlName=\"name\">\n\n                      </div>\n                      <div *ngIf=\"submitted && messageForm.controls.name.errors\" class=\"error\">\n                        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"messageForm.controls.name.errors.required\">Full Name field is required.</div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\"><i class=\"fa fa-envelope text-info\"></i></div>\n                        </div>\n                        <input type=\"email\" class=\"form-control\" placeholder=\"Email@mail.com\" formControlName=\"email\" email>\n                      </div>\n                      <div *ngIf=\"submitted && messageForm.controls.email.errors\" class=\"error\">\n                        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"messageForm.controls.email.errors.required\">Email field is required.</div>\n                        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"messageForm.controls.email.errors.email\">Please provide correct email address.</div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\"><i class=\"fa fa-comment text-info\"></i></div>\n                        </div>\n                        <textarea class=\"form-control\" placeholder=\"Message\" formControlName=\"message\"></textarea>\n                      </div>\n                      <div *ngIf=\"submitted && messageForm.controls.message.errors\" class=\"error\">\n                        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"messageForm.controls.message.errors.required\">Message field is required.</div>\n                      </div>\n                    </div>\n\n                    <div class=\"text-center\">\n                      <input type=\"submit\" value=\"Send\" class=\"btn btn-info btn-block sendMessageBtn\">\n                      <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">Message Successfully Sent!</div>\n                      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">Something Went Wrong. Please Try Again!</div>\n                    </div>\n                  </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: var(--silver-4); }\n\n.sendMessageBtn {\n  background-color: var(--blue-8);\n  border-color: var(--blue-8); }\n\n.sendMessageBtn:hover {\n  background-color: var(--blue-11);\n  border-color: var(--blue-11); }\n\n.alert {\n  margin-top: 10px; }\n\n.section {\n  background: var(--white-3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGdDQUErQjtFQUMvQiw0QkFBMkIsRUFDNUI7O0FBRUQ7RUFDRSxpQ0FBZ0M7RUFDaEMsNkJBQTRCLEVBQzdCOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsMkJBQTBCLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gIGNvbG9yOiB2YXIoLS1zaWx2ZXItNCk7XG59XG5cbi5zZW5kTWVzc2FnZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtOCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS04KTtcbn1cblxuLnNlbmRNZXNzYWdlQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS0xMSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS0xMSk7XG59XG5cbi5hbGVydHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS0zKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http/http.service */ "./src/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.submitted = false;
        this.success = false;
        this.error = false;
        this.messageForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ContactComponent.prototype.sendMessage = function () {
        var _this = this;
        this.submitted = true;
        this.success = false;
        this.error = false;
        if (this.messageForm.invalid) {
            return;
        }
        this.http.postRequest('https://hooks.slack.com/services/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', {
            "text": "Name: " + this.messageForm.get('name').value +
                "\n Email: " + this.messageForm.get('email').value +
                "\n Message: " + this.messageForm.get('message').value
        }).subscribe(function (res) {
            _this.success = true;
            _this.messageForm.reset();
            _this.submitted = false;
        }, function (err) {
            _this.error = true;
            _this.messageForm.reset();
            _this.submitted = false;
        });
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/errors/error/error.component.html":
/*!***************************************************!*\
  !*** ./src/app/errors/error/error.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper container\">\n    <div class=\"main\">\n      <section class=\"main-section section\">\n        <div class=\"row\">\n          <div class=\"item col-12\">\n            <h2 class=\"section-title errorTitle\">Something went wrong. Please try again later!</h2>\n            <h4 class=\"main-section-subtitle errorSubTitle\">\n              If you keep seeing this message, please contact me using this\n              <a routerLink=\"/contact\">form</a>.\n            </h4>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/errors/error/error.component.scss":
/*!***************************************************!*\
  !*** ./src/app/errors/error/error.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: var(--silver-4); }\n\n.errorTitle {\n  color: var(--red-2); }\n\n.errorSubTitle {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL2Vycm9ycy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICBjb2xvcjogdmFyKC0tc2lsdmVyLTQpO1xufVxuXG4uZXJyb3JUaXRsZXtcbiAgY29sb3I6IHZhcigtLXJlZC0yKTtcbn1cblxuLmVycm9yU3ViVGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/errors/error/error.component.ts":
/*!*************************************************!*\
  !*** ./src/app/errors/error/error.component.ts ***!
  \*************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/errors/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/errors/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/errors/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/errors/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper container\">\n    <div class=\"main\">\n      <section class=\"main-section section\">\n        <div class=\"row\">\n          <div class=\"item col-12\">\n            <h2 class=\"section-title errorTitle\">Page Not Found!</h2>\n            <h4 class=\"main-section-subtitle errorSubTitle\">\n              If you keep seeing this message and you believe something should be working, please contact me using this\n              <a routerLink=\"/contact\">form</a>.\n            </h4>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/errors/page-not-found/page-not-found.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/errors/page-not-found/page-not-found.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: var(--silver-4); }\n\n.errorTitle {\n  color: var(--red-2); }\n\n.errorSubTitle {\n  text-align: center;\n  color: var(--silver-4); }\n\n.container {\n  height: 500px; }\n\n.section {\n  background: var(--white-3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL2Vycm9ycy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lcnJvcnMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgY29sb3I6IHZhcigtLXNpbHZlci00KTtcbn1cblxuLmVycm9yVGl0bGV7XG4gIGNvbG9yOiB2YXIoLS1yZWQtMik7XG59XG5cbi5lcnJvclN1YlRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zaWx2ZXItNCk7XG59XG5cbi5jb250YWluZXJ7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtMyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/errors/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/errors/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/errors/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/errors/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small mdb-color lighten-3 pt-4\">\n  <div class=\"container text-center text-md-left\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1\">\n        <h5 class=\"font-weight-bold text-uppercase mb-4\">What's New</h5>\n        <p>\n         {{myWhatsNew}}\n        </p>\n      </div>\n      <hr class=\"clearfix w-100 d-md-none\">\n      <div class=\"col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1\">\n        <h5 class=\"font-weight-bold text-uppercase mb-4\">Navigation</h5>\n        <ul class=\"list-unstyled\">\n          <li>\n            <p>\n              <a routerLink=\"/about\">ABOUT ME</a>\n            </p>\n          </li>\n          <li>\n            <p>\n              <a routerLink=\"/projects\">PROJECTS</a>\n            </p>\n          </li>\n          <li>\n            <p>\n              <a routerLink=\"/contact\">CONTACT</a>\n            </p>\n          </li>\n          <li>\n            <p>\n              <a routerLink=\"/login\">LOGIN</a>\n            </p>\n          </li>\n        </ul>\n      </div>\n      <hr class=\"clearfix w-100 d-md-none\">\n      <div class=\"col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1\">\n        <h5 class=\"font-weight-bold text-uppercase mb-4\">Info</h5>\n        <ul class=\"list-unstyled\">\n          <li>\n            <p>\n              <i class=\"fa fa-home mr-3\"></i> {{myCity}}</p>\n          </li>\n          <li>\n            <p>\n              <i class=\"fa fa-envelope mr-3\"></i> {{myEmail}}</p>\n          </li>\n          <li>\n            <p>\n              <i class=\"fa fa-phone mr-3\"></i> {{myPhone}}</p>\n          </li>\n          <li>\n            <p>\n              <i class=\"fa fa-skype mr-3\"></i> {{mySkype}}</p>\n          </li>\n        </ul>\n      </div>\n      <hr class=\"clearfix w-100 d-md-none\">\n      <div class=\"col-md-2 col-lg-2 text-center mx-auto my-4\">\n        <h5 class=\"font-weight-bold text-uppercase mb-4\">Follow Me</h5>\n        <a href=\"{{myGithub}}\" target=\"_blank\" type=\"button\" class=\"btn-floating btn-github footer-btn-hover\">\n          <i class=\"fa fa-github fa-2x footer-link\"></i>\n        </a>\n        <a href=\"{{myLinkedIn}}\" target=\"_blank\" type=\"button\" class=\"btn-floating btn-linkedin footer-btn-hover\">\n          <i class=\"fa fa-linkedin fa-2x footer-link\"></i>\n        </a>\n        <a href=\"{{myStackOverflow}}\" target=\"_blank\" type=\"button\" class=\"btn-floating btn-stackoverflow footer-btn-hover\">\n          <i class=\"fa fa-stack-overflow fa-2x footer-link\"></i>\n        </a>\n        <a href=\"{{mySlack}}\" target=\"_blank\" type=\"button\" class=\"btn-floating btn-slack footer-btn-hover\">\n          <i class=\"fa fa-facebook fa-2x footer-link\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright text-center py-3\">\n    {{footerCopyright}}\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-footer {\n  background-color: var(--blue-2);\n  color: var(--white); }\n\n.footer-copyright {\n  background-color: var(--blue-1);\n  color: var(--white); }\n\n.btn-floating {\n  box-shadow: 0 5px 11px 0 var(--black-4), 0 4px 15px 0 var(--black-3);\n  width: 53px;\n  height: 53px;\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  overflow: hidden;\n  margin: 10px;\n  border-radius: 50%;\n  padding: 0;\n  cursor: pointer;\n  -webkit-appearance: inherit; }\n\n.btn-github {\n  background-color: var(--black-7);\n  color: var(--white); }\n\n.btn-linkedin {\n  background-color: var(--blue-10);\n  color: var(--white); }\n\n.btn-stackoverflow {\n  background-color: var(--red-1);\n  color: var(--white); }\n\n.btn-slack {\n  padding-top: 3px;\n  background-color: var(--blue-5);\n  color: var(--white); }\n\n.footer-link {\n  line-height: 53px; }\n\n.footer-btn-hover:hover {\n  opacity: 0.7; }\n\n.list-unstyled a {\n  color: var(--white); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBK0I7RUFDL0Isb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0NBQStCO0VBQy9CLG9CQUFtQixFQUNwQjs7QUFFRDtFQUVFLHFFQUFvRTtFQUNwRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZiw0QkFBMkIsRUFDNUI7O0FBRUQ7RUFDRyxpQ0FBZ0M7RUFDaEMsb0JBQW1CLEVBQ3BCOztBQUVGO0VBQ0UsaUNBQWdDO0VBQ2hDLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLCtCQUE4QjtFQUM5QixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsZ0NBQStCO0VBQy9CLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1mb290ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtMik7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5mb290ZXItY29weXJpZ2h0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLTEpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uYnRuLWZsb2F0aW5ne1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCB2YXIoLS1ibGFjay00KSwgMCA0cHggMTVweCAwIHZhcigtLWJsYWNrLTMpO1xuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgdmFyKC0tYmxhY2stNCksIDAgNHB4IDE1cHggMCB2YXIoLS1ibGFjay0zKTtcbiAgd2lkdGg6IDUzcHg7XG4gIGhlaWdodDogNTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogaW5oZXJpdDtcbn1cblxuLmJ0bi1naXRodWIge1xuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stNyk7XG4gICBjb2xvcjogdmFyKC0td2hpdGUpO1xuIH1cblxuLmJ0bi1saW5rZWRpbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS0xMCk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5idG4tc3RhY2tvdmVyZmxvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTEpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uYnRuLXNsYWNre1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLTUpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uZm9vdGVyLWxpbmt7XG4gIGxpbmUtaGVpZ2h0OiA1M3B4O1xufVxuXG4uZm9vdGVyLWJ0bi1ob3Zlcjpob3ZlcntcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ubGlzdC11bnN0eWxlZCBhe1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/app.constants */ "./src/constants/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(constants) {
        this.constants = constants;
        this.myWhatsNew = this.constants.MY_WHATS_NEW;
        this.myEmail = this.constants.MY_EMAIL;
        this.myPhone = this.constants.MY_PHONE;
        this.myCity = this.constants.MY_CITY;
        this.mySkype = this.constants.MY_SKYPE;
        this.myGithub = this.constants.MY_GITHUB;
        this.myLinkedIn = this.constants.MY_LINKEDIN;
        this.myStackOverflow = this.constants.MY_STACKOVERFLOW;
        this.mySlack = this.constants.MY_SLACK;
        this.footerCopyright = this.constants.COPYRIGHT;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")],
            providers: [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]]
        }),
        __metadata("design:paramtypes", [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-section\">\n    <div class=\"row\">\n      <div class=\"resume\">\n        <a href=\"assets/files/{{myResume}}\" target=\"_blank\" class=\"resumeBtn\"><i class=\"fa fa-download\" aria-hidden=\"true\" download></i> Download my resume</a>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"intro\">\n          <div class=\"container text-center\">\n            <img class=\"header-section-profile-image\" src=\"assets/img/{{myImage}}\" alt=\"\">\n            <h1 class=\"header-section-name\">{{myName}}</h1>\n            <div class=\"header-section-title\">{{myTitle}}</div>\n            <div class=\"header-section-main-text\">\n              <p>{{mySummary}}</p>\n            </div>\n\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"header-section-footer\">\n  <div class=\"container text-center\">\n    <ul class=\"list-inline\">\n      <li class=\"email list-inline-item\">\n        <i class=\"fa fa-envelope whiteIcons\"></i>&nbsp;<a href=\"mailto:{{myEmail}}\">{{myEmail}}</a>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"fa fa-phone whiteIcons\"></i>&nbsp;<a href=\"tel: {{myPhone}}\">{{myPhone}}</a>\n      </li>\n      <li class=\"website list-inline-item\">\n        <i class=\"fa fa-globe whiteIcons\"></i>&nbsp;<a href=\"\">{{myWebsite}}</a>\n      </li>\n    </ul>\n    </div>\n</div>\n\n<div class=\"wrapper container\">\n  <div class=\"main\">\n    <section class=\"main-section section\">\n      <div class=\"skills-overview\">\n        <h2 class=\"section-title\"><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i> Skills Overview</h2>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-1\"></div>\n          <div class=\"col-12 col-md-10 skills-desc\">\n             {{mySkillsSummary}}\n            <br />\n            <a routerLink=\"/projects\" id=\"check-out-my-projects\">Check out my projects</a>\n          </div>\n          <div class=\"col-12 col-md-1\"></div>\n        </div>\n      </div>\n\n      <div class=\"skills-blocks mx-auto pt-5\">\n        <div class=\"row\">\n          <div class=\"skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0\" *ngFor=\"let skill of mySkills\">\n            <div class=\"skills-block-inner bg-white-skills-sub-blocks py-4 px-5 position-relative\">\n              <h4 class=\"skills-cat text-center mb-3 mt-5\">{{skill.skillTitle}}</h4>\n              <div class=\"skills-icon-holder position-absolute d-inline-block rounded-circle text-center\">\n                <img class=\"skills-icon\" src=\"assets/img/{{skill.skillImage}}\">\n              </div>\n              <ul class=\"skills-list list-unstyled text-secondary\">\n                <li class=\"mb-2\" *ngFor=\"let indvSkill of skill.skills\">\n                  <i class=\"fa fa-check text-primary\"></i> {{indvSkill.skillName}}\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n\n<div class=\"wrapper container\">\n  <div class=\"main\">\n  <section class=\"main-section section\">\n    <h2 class=\"section-title\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i> Certifications and Awards</h2>\n    <div class=\"row\">\n      <div class=\"item col-12 col-md-4\" *ngFor=\"let cert of myCertAndAwards\">\n        <div class=\"item-inner\">\n          <div class=\"certification-img\">\n            <img src=\"assets/img/{{cert.caaImage}}\" *ngIf=\"cert.caaImage != 'lsus-award.png'\">\n            <img src=\"assets/img/{{cert.caaImage}}\" *ngIf=\"cert.caaImage == 'lsus-award.png'\" style=\"width:200px; height: 100px\">\n          </div>\n          <a href=\"{{cert.caaLink}}\" target=\"_blank\"><h3 class=\"main-section-title\">{{cert.caaName}}</h3></a>\n          <div class=\"main-section-subtitle\">\n            {{cert.caaOrganization}}\n          </div>\n          <div class=\"main-section-date\">{{cert.caaDate}}</div>\n          <div class=\"main-section-desc\">\n            {{cert.caaDesc}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section-profile-image {\n  width: 270px; }\n\n.resumeBtn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem; }\n\n.resumeBtn:hover, a.resumeBtn:hover {\n  background: var(--blue-8);\n  text-decoration: none; }\n\n.resumeBtn, a.resumeBtn {\n  background: var(--blue-7);\n  color: var(--white);\n  padding: 8px 15px;\n  border-radius: 2px;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  box-shadow: 0 2px 4px 0 var(--black-2);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 14px; }\n\n.resume {\n  position: absolute;\n  z-index: 1;\n  right: 20px; }\n\n#check-out-my-projects {\n  color: var(--blue-5); }\n\n.skills-overview {\n  margin-bottom: 3rem; }\n\n.skills-title {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 30px;\n  text-align: center;\n  color: var(--silver-4);\n  font-weight: 500; }\n\n.skills-desc {\n  text-align: center;\n  color: var(--silver-8); }\n\n.skills-icon {\n  text-align: center; }\n\n.skills-list {\n  width: 200px; }\n\n.skills-sub-title {\n  text-align: center;\n  color: var(--silver-9);\n  font-size: 22px;\n  margin-top: 15px; }\n\n.pl-5, .px-5 {\n  padding-left: 3rem !important; }\n\n.skills-icon-holder {\n  background: var(--blue-9);\n  width: 80px;\n  height: 80px;\n  padding-top: 1.25rem;\n  top: -40px;\n  left: 50%;\n  margin-left: -40px; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.text-secondary {\n  color: var(--silver-10) !important; }\n\n.skills-cat {\n  color: var(--silver-11); }\n\n.text-primary {\n  color: var(--blue-9) !important; }\n\n.bg-white-skills-sub-blocks {\n  background-color: var(--white-2); }\n\n.section {\n  background: var(--white-3); }\n\n.certification-img {\n  text-align: center;\n  margin-bottom: 25px; }\n\n.certification-img img {\n  width: 100px;\n  height: 100px; }\n\n.main-section-subtitle {\n  color: var(--black-5); }\n\n@media (max-width: 767px) {\n  .resume {\n    position: inherit;\n    width: 90%;\n    margin: auto;\n    padding-bottom: 20px; }\n  .resumeBtn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQix1QkFBc0I7RUFDdEIsMEJBQXlCO0VBQ3pCLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLDhCQUE2QjtFQUM3Qix3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3RCOztBQUNEO0VBQ0UsMEJBQXlCO0VBQ3pCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBS2pCLG1CQUFrQjtFQUNsQiw4QkFBNkI7RUFDN0IscUNBQW9DO0VBQ3BDLDZCQUE0QjtFQUc1Qix1Q0FBc0M7RUFDdEMsMEJBQXlCO0VBQ3pCLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBVyxFQUNaOztBQUNEO0VBQ0UscUJBQW9CLEVBQ3JCOztBQU1EO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSw4QkFBNkIsRUFDOUI7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsWUFBVztFQUNYLGFBQVk7RUFDWixxQkFBb0I7RUFDcEIsV0FBVTtFQUNWLFVBQVM7RUFDVCxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLG1DQUFrQyxFQUNuQzs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLGdDQUErQixFQUNoQzs7QUFFRDtFQUNFLGlDQUFnQyxFQUNqQzs7QUFFRDtFQUNFLDJCQUEwQixFQUMzQjs7QUFNRDtFQUNFLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osY0FBYSxFQUNkOztBQUVEO0VBQ0Usc0JBQXFCLEVBQ3RCOztBQUtEO0VBQ0U7SUFDRSxrQkFBaUI7SUFDakIsV0FBVTtJQUNWLGFBQVk7SUFDWixxQkFBb0IsRUFDckI7RUFDRDtJQUNFLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgIEhlYWRlciAgICAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLmhlYWRlci1zZWN0aW9uLXByb2ZpbGUtaW1hZ2V7XG4gIHdpZHRoOiAyNzBweDtcbn1cblxuLnJlc3VtZUJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuLnJlc3VtZUJ0bjpob3ZlciwgYS5yZXN1bWVCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLTgpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yZXN1bWVCdG4sIGEucmVzdW1lQnRuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS03KTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IDAgdmFyKC0tYmxhY2stMik7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggNHB4IDAgdmFyKC0tYmxhY2stMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHZhcigtLWJsYWNrLTIpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yZXN1bWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAyMHB4O1xufVxuI2NoZWNrLW91dC1teS1wcm9qZWN0c3tcbiAgY29sb3I6IHZhcigtLWJsdWUtNSk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICBTa2lsbHMgICAgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLnNraWxscy1vdmVydmlld3tcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnNraWxscy10aXRsZXtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zaWx2ZXItNCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2tpbGxzLWRlc2N7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXNpbHZlci04KTtcbn1cblxuLnNraWxscy1pY29ue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5za2lsbHMtbGlzdHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2tpbGxzLXN1Yi10aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tc2lsdmVyLTkpO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wbC01LCAucHgtNSB7XG4gIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4uc2tpbGxzLWljb24taG9sZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS05KTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHRvcDogLTQwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuXG4ubGlzdC11bnN0eWxlZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6IHZhcigtLXNpbHZlci0xMCkgIWltcG9ydGFudDtcbn1cblxuLnNraWxscy1jYXR7XG4gIGNvbG9yOiB2YXIoLS1zaWx2ZXItMTEpO1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLWJsdWUtOSkgIWltcG9ydGFudDtcbn1cblxuLmJnLXdoaXRlLXNraWxscy1zdWItYmxvY2tzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtMik7XG59XG5cbi5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtMyk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgIENlcnRpZmljYXRpb25zICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmNlcnRpZmljYXRpb24taW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uY2VydGlmaWNhdGlvbi1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubWFpbi1zZWN0aW9uLXN1YnRpdGxle1xuICBjb2xvcjogdmFyKC0tYmxhY2stNSk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgIFJlc3BvbnNpdmUgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucmVzdW1lIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICAucmVzdW1lQnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/app.constants */ "./src/constants/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(constants) {
        this.constants = constants;
        this.myName = this.constants.MY_NAME;
        this.myTitle = this.constants.MY_TITLE;
        this.mySummary = this.constants.MY_SUMMARY;
        this.myImage = this.constants.MY_IMAGE;
        this.myEmail = this.constants.MY_EMAIL;
        this.myPhone = this.constants.MY_PHONE;
        this.myWebsite = this.constants.MY_WEBSITE_URL;
        this.mySkillsSummary = this.constants.MY_SKILLS_SUMMARY;
        this.mySkills = this.constants.SKILLS;
        this.myCertAndAwards = this.constants.CERTS_AND_AWARDS;
        this.myResume = this.constants.MY_RESUME;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            providers: [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]]
        }),
        __metadata("design:paramtypes", [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper container\">\n    <div class=\"main\">\n      <section class=\"main-section section\">\n        <h2 class=\"section-title\">Admin Login</h2>\n        <div class=\"row\">\n          <div class=\"item col-12\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-lg-5\">\n\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                    <div class=\"input-group mb-2\">\n                      <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\"><i class=\"fa fa-envelope text-info\"></i></div>\n                      </div>\n                      <input type=\"email\" class=\"form-control\" placeholder=\"Email@mail.com\" formControlName=\"email\" email>\n                    </div>\n                    <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"error\">\n                      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"loginForm.controls.email.errors.required\">Email field is required.</div>\n                      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"loginForm.controls.email.errors.email\">Please provide correct email address.</div>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <div class=\"input-group mb-2\">\n                      <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\" style=\"padding-left: 17px;\"><i class=\"fa fa-lock text-info\"></i></div>\n                      </div>\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n                    </div>\n                    <div *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"error\">\n                      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"loginForm.controls.password.errors.required\">Password field is required.</div>\n                    </div>\n                  </div>\n\n                  <div class=\"text-center\">\n                    <input type=\"submit\" value=\"Login\" class=\"btn btn-info btn-block loginBtn\">\n                    <!--<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">Successfully Logged In!</div>-->\n                    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!success\">Wrong Credentials!</div>\n                  </div>\n                </form>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: var(--silver-4); }\n\n.loginBtn {\n  background-color: var(--blue-8);\n  border-color: var(--blue-8); }\n\n.loginBtn:hover {\n  background-color: var(--blue-11);\n  border-color: var(blue-11); }\n\n.alert {\n  margin-top: 10px; }\n\n.container {\n  height: 500px; }\n\n.section {\n  background: var(--white-3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsZ0NBQStCO0VBQy9CLDRCQUEyQixFQUM1Qjs7QUFFRDtFQUNFLGlDQUFnQztFQUNoQywyQkFBMEIsRUFDM0I7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICBjb2xvcjogdmFyKC0tc2lsdmVyLTQpO1xufVxuXG4ubG9naW5CdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLTgpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUtOCk7XG59XG5cbi5sb2dpbkJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtMTEpO1xuICBib3JkZXItY29sb3I6IHZhcihibHVlLTExKTtcbn1cblxuLmFsZXJ0e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFpbmVye1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLTMpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = true;
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.success = false;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"navbar-brand\"><img src=\"assets/img/{{logo}}\" width=\"100\" height=\"50\" /></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" id=\"navBtn\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item linkHover\">\n          <a routerLink=\"/\" (click)=\"onClickLink()\" class=\"nav-link\" [routerLinkActiveOptions]=\"{exact:true}\" routerLinkActive=\"activeNavLink\"><i class=\"fa fa-home \" aria-hidden=\"true\"></i> Home</a>\n        </li>\n        <li class=\"nav-item linkHover\">\n          <a routerLink=\"/about\" (click)=\"onClickLink()\" class=\"nav-link\" routerLinkActive=\"activeNavLink\"><i class=\"fa fa-question \" aria-hidden=\"true\"></i> About Me</a>\n        </li>\n        <li class=\"nav-item linkHover\">\n          <a routerLink=\"/projects\" (click)=\"onClickLink()\" class=\"nav-link\" routerLinkActive=\"activeNavLink\"><i class=\"fa fa-codepen \" aria-hidden=\"true\"></i> Projects</a>\n        </li>\n        <li class=\"nav-item linkHover\">\n          <a routerLink=\"/contact\" (click)=\"onClickLink()\" class=\"nav-link\" routerLinkActive=\"activeNavLink\"><i class=\"fa fa-envelope \" aria-hidden=\"true\"></i> Contact</a>\n        </li>\n        <li class=\"nav-item linkHover\">\n          <a routerLink=\"/login\" (click)=\"onClickLink()\" class=\"nav-link\" routerLinkActive=\"activeNavLink\"><i class=\"fa fa-lock \" aria-hidden=\"true\"></i> Login</a>\n        </li>\n        <li class=\"nav-item linkHover\">\n          <a (click)=\"onChangeMode(); onClickLink();\" class=\"nav-link\" routerLinkActive=\"activeNavLink\"><i class=\"fa fa-adjust\" aria-hidden=\"true\"></i><span id=\"theme-mode\"> Enable Dark Mode</span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-dark .navbar-nav .nav-link {\n  color: var(--silver-1); }\n\n.activeNavLink {\n  color: var(--white) !important; }\n\n.activeNavLink i {\n  color: var(--white) !important; }\n\n.linkHover:hover a {\n  cursor: pointer;\n  color: var(--white) !important; }\n\n.linkHover:hover i {\n  color: var(--white) !important; }\n\n.dark-mode-switch {\n  display: flex;\n  justify-content: flex-end; }\n\n.slider {\n  background-color: var(--silver-13);\n  bottom: 0;\n  cursor: pointer;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: .4s; }\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider:before {\n  background-color: var(--white);\n  bottom: 2px;\n  content: \"\";\n  height: 21px;\n  left: 4px;\n  position: absolute;\n  transition: .4s;\n  width: 21px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(21px);\n          transform: translateX(21px); }\n\ninput:checked + .slider {\n  background-color: var(--green-1); }\n\n.theme-switch {\n  display: inline-block;\n  height: 25px;\n  position: relative;\n  width: 50px;\n  margin-bottom: 0; }\n\n.theme-switch-wrapper {\n  display: flex;\n  align-items: center; }\n\ninput[type=\"checkbox\"] {\n  background-color: initial;\n  cursor: default;\n  -webkit-appearance: checkbox;\n  box-sizing: border-box;\n  margin: 3px 0.5ex;\n  padding: initial;\n  border: initial; }\n\n.dark-mode-switch-text {\n  color: var(--silver-1);\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSwrQkFBOEIsRUFDL0I7O0FBRUQ7RUFDRSwrQkFBOEIsRUFDL0I7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLCtCQUE4QixFQUMvQjs7QUFFRDtFQUNFLCtCQUE4QixFQUMvQjs7QUFDRDtFQUNFLGNBQWE7RUFDYiwwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFDRSxtQ0FBa0M7RUFDbEMsVUFBUztFQUNULGdCQUFlO0VBQ2YsUUFBTztFQUNQLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsT0FBTTtFQUNOLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsK0JBQThCO0VBQzlCLFlBQVc7RUFDWCxZQUFXO0VBQ1gsYUFBWTtFQUNaLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxvQ0FBMkI7VUFBM0IsNEJBQTJCLEVBQzVCOztBQUNEO0VBQ0UsaUNBQWdDLEVBQ2pDOztBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGNBQWE7RUFDYixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSwwQkFBeUI7RUFDekIsZ0JBQWU7RUFDZiw2QkFBNEI7RUFDNUIsdUJBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogdmFyKC0tc2lsdmVyLTEpO1xufVxuLmFjdGl2ZU5hdkxpbmsge1xuICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmVOYXZMaW5rIGkge1xuICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rSG92ZXI6aG92ZXIgYXtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rSG92ZXI6aG92ZXIgaXtcbiAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xufVxuLmRhcmstbW9kZS1zd2l0Y2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlci0xMyk7XG4gIGJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IC40cztcbn1cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuLnNsaWRlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvdHRvbTogMnB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDIxcHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIHdpZHRoOiAyMXB4O1xufVxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjFweCk7XG59XG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTEpO1xufVxuLnRoZW1lLXN3aXRjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRoZW1lLXN3aXRjaC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBjaGVja2JveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAzcHggMC41ZXg7XG4gIHBhZGRpbmc6IGluaXRpYWw7XG4gIGJvcmRlcjogaW5pdGlhbDtcbn1cbi5kYXJrLW1vZGUtc3dpdGNoLXRleHQge1xuICBjb2xvcjogdmFyKC0tc2lsdmVyLTEpO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/app.constants */ "./src/constants/app.constants.ts");
/* harmony import */ var _services_themes_themes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/themes/themes.service */ "./src/services/themes/themes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(constants, themesService) {
        this.constants = constants;
        this.themesService = themesService;
        this.appTitle = 'Srdan Ristic Portfolio';
        this.logo = this.constants.MY_LOGO;
        this.onClickLink = function () {
            var screenWidth = window.innerWidth;
            if (screenWidth < 992) {
                document.getElementById('navBtn').click();
            }
        };
        this.onChangeMode = function () {
            var themeModeText = document.getElementById('theme-mode').innerText;
            themeModeText = themeModeText.trim();
            if (themeModeText === 'Enable Dark Mode') {
                this.themesService.switchTheme('dark');
            }
            else {
                this.themesService.switchTheme('light');
            }
        };
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")],
            providers: [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]]
        }),
        __metadata("design:paramtypes", [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"], _services_themes_themes_service__WEBPACK_IMPORTED_MODULE_2__["ThemesService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/project-view/project-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/project-view/project-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"project\" style=\"padding-top: 30px\">\n  <h1 class=\"my-4\">{{project.projectName}}</h1>\n  <div class=\"row\">\n    <div class=\"col-md-8\" *ngIf=\"project.projectImage != 'udemyCourse.mp4'\">\n      <a href=\"assets/img/projects/{{project.projectImage}}\"><img class=\"img-fluid\" style=\"border: 8px solid #007888\" src=\"assets/img/projects/{{project.projectImage}}\" alt=\"No Image\"></a>\n    </div>\n    <div class=\"col-md-8\" *ngIf=\"project.projectImage == 'udemyCourse.mp4'\">\n      <video width=\"100%\" height=\"auto\" style=\"object-fit: fill; border: 8px solid #007888;\" poster=\"/assets/img/projects/udemyThumbnail.png\" controls>\n        <source src=\"/assets/img/projects/{{project.projectImage}}\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n      </video>\n    </div>\n    <div class=\"col-md-4\">\n      <h3><span class=\"parentheses\">(</span><a href=\"{{project.projectUrl}}\" target=\"_blank\">Live View</a><span class=\"parentheses\">)</span></h3>\n      <h3 class=\"my-3 projectTitle\">Project Description</h3>\n      <p style=\"text-align: justify\" class=\"text-color\">{{project.projectDesc}}</p>\n      <h3 class=\"my-3 projectTitle\">Date</h3>\n      <p class=\"text-color\">{{project.projectDate}}</p>\n      <h3 class=\"my-3 projectTitle\">Technologies</h3>\n      <ul style=\"padding-left: 21px\">\n        <li *ngFor=\"let tech of project.projectTechnologies\" class=\"text-color\">\n          <span class=\"text-color\">{{tech.technologyName}}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/project-view/project-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/project-view/project-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: var(--silver-4); }\n\n.projectTitle {\n  color: var(--silver-7); }\n\n.container {\n  padding-bottom: 30px; }\n\nh3 {\n  color: var(--blue-5); }\n\nh3 a {\n  color: var(--blue-5); }\n\n.img-fluid:hover {\n  opacity: 0.8; }\n\n.text-color {\n  color: var(--black-8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL3Byb2plY3Qtdmlldy9wcm9qZWN0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxzQkFBcUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LXZpZXcvcHJvamVjdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gIGNvbG9yOiB2YXIoLS1zaWx2ZXItNCk7XG59XG5cbi5wcm9qZWN0VGl0bGV7XG4gIGNvbG9yOiB2YXIoLS1zaWx2ZXItNyk7XG59XG5cbi5jb250YWluZXJ7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG5oMyB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlLTUpO1xufVxuXG5oMyBhe1xuICBjb2xvcjogdmFyKC0tYmx1ZS01KTtcbn1cblxuLmltZy1mbHVpZDpob3ZlcntcbiAgb3BhY2l0eTogMC44O1xufVxuXG4udGV4dC1jb2xvcntcbiAgY29sb3I6IHZhcigtLWJsYWNrLTgpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/project-view/project-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-view/project-view.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewComponent", function() { return ProjectViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/app.constants */ "./src/constants/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectViewComponent = /** @class */ (function () {
    function ProjectViewComponent(constants, route, router) {
        this.constants = constants;
        this.route = route;
        this.router = router;
        this.project = undefined;
        this.projects = this.constants.PROJECTS;
    }
    ProjectViewComponent.prototype.ngOnInit = function () {
        this.getProject();
        if (!this.project) {
            this.router.navigate(['/404']);
        }
    };
    ProjectViewComponent.prototype.getProject = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        for (var i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id == id) {
                this.project = this.projects[i];
                break;
            }
        }
    };
    ProjectViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-view',
            template: __webpack_require__(/*! ./project-view.component.html */ "./src/app/project-view/project-view.component.html"),
            styles: [__webpack_require__(/*! ./project-view.component.scss */ "./src/app/project-view/project-view.component.scss")],
            providers: [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]]
        }),
        __metadata("design:paramtypes", [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectViewComponent);
    return ProjectViewComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 60px\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 portfolio-item\" *ngFor=\"let project of projects\">\n      <div class=\"card h-100\">\n        <div *ngIf=\"project.projectImage != 'udemyCourse.mp4'\">\n          <a routerLink=\"/project/{{project.id}}\"><img class=\"card-img-top\" id=\"projectImg\" src=\"/assets/img/projects/{{project.projectImage}}\" alt=\"No Image\" width=\"650\" height=\"350\"></a>\n        </div>\n        <div *ngIf=\"project.projectImage == 'udemyCourse.mp4'\">\n          <video width=\"100%\" height=\"350px\" style=\"object-fit: fill;\" poster=\"/assets/img/projects/udemyThumbnail.png\" controls>\n            <source src=\"/assets/img/projects/{{project.projectImage}}\" type=\"video/mp4\">\n            Your browser does not support the video tag.\n          </video>\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title checkItOutBtn\">\n            <a class=\"btn btn-primary\" routerLink=\"/project/{{project.id}}\"><i aria-hidden=\"true\" class=\"fa fa-globe\"></i> View</a>\n          </h5>\n          <h4 class=\"card-title projectName\">\n            <a routerLink=\"/project/{{project.id}}\">{{project.projectName}}</a>\n          </h4>\n          <h6 class=\"card-title projectDate\">\n            {{project.projectDate}}\n          </h6>\n          <p class=\"card-text projectDesc\">{{project.projectDesc}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: var(--silver-4); }\n\n.portfolio-item {\n  margin-bottom: 30px; }\n\n.checkItOutBtn {\n  float: right; }\n\n.checkItOutBtn a {\n  background-color: var(--blue-5);\n  border-color: var(--blue-5); }\n\n.checkItOutBtn a:hover {\n  background-color: var(--blue-6);\n  border-color: var(--blue-6); }\n\n.projectName a {\n  color: var(--blue-5); }\n\n.projectDate {\n  color: var(--silver-5); }\n\n.projectDesc {\n  color: var(--silver-4); }\n\n.card-img-top:hover {\n  opacity: 0.8; }\n\n.card {\n  background-color: var(--white-3); }\n\n@media all and (max-width: 768px) {\n  #projectImg {\n    height: auto; }\n  video {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXJnZS9zcmlzdGljLXBvcnRmb2xpby9zcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsZ0NBQStCO0VBQy9CLDRCQUEyQixFQUM1Qjs7QUFFRDtFQUNFLGdDQUErQjtFQUMvQiw0QkFBMkIsRUFDNUI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckI7O0FBQ0Q7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxpQ0FBZ0MsRUFDakM7O0FBRUQ7RUFDRTtJQUNFLGFBQVksRUFDYjtFQUNEO0lBQ0UsYUFBWSxFQUNiLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICBjb2xvcjogdmFyKC0tc2lsdmVyLTQpO1xufVxuXG4ucG9ydGZvbGlvLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2hlY2tJdE91dEJ0bntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2hlY2tJdE91dEJ0biBhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLTUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUtNSk7XG59XG5cbi5jaGVja0l0T3V0QnRuIGE6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtNik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS02KTtcbn1cblxuLnByb2plY3ROYW1lIGF7XG4gIGNvbG9yOiB2YXIoLS1ibHVlLTUpO1xufVxuLnByb2plY3REYXRle1xuICBjb2xvcjogdmFyKC0tc2lsdmVyLTUpO1xufVxuXG4ucHJvamVjdERlc2N7XG4gIGNvbG9yOiB2YXIoLS1zaWx2ZXItNCk7XG59XG5cbi5jYXJkLWltZy10b3A6aG92ZXJ7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS0zKTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3Byb2plY3RJbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICB2aWRlb3tcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/app.constants */ "./src/constants/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(constants) {
        this.constants = constants;
        this.projects = this.constants.PROJECTS;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")],
            providers: [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]]
        }),
        __metadata("design:paramtypes", [_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/constants/app.constants.ts":
/*!****************************************!*\
  !*** ./src/constants/app.constants.ts ***!
  \****************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConstants = /** @class */ (function () {
    function AppConstants() {
        // Basic Info
        this.MY_NAME = "Srdan Ristic";
        this.MY_LOGO = "initials-logo.png";
        this.MY_IMAGE = "profile.png";
        this.MY_TITLE = "Full Stack Developer";
        this.MY_SUMMARY = "Hi! Thank you for taking your time to check out my website! My name is Srđan/Surgen, and I am a Software Developer. I am very enthusiastic about technologies and electronic devices. I love to explore and try new programming languages as well as other technologies and techniques involved in software development world. I enjoy being involved in both front-end and back-end within the scope of a full software development cycle. I have built various cross-platform applications and enjoyed working on every single one of them. I am currently working for PioneerRx Pharmacy Software in Shreveport, LA.";
        this.MY_EMAIL = "srdanristic2@gmail.com";
        this.MY_PHONE = "318-900-1294";
        this.MY_CITY = "Shreveport, LA";
        this.MY_SKYPE = "srlepn";
        this.MY_WEBSITE_URL = "https://srdanristic.com";
        this.MY_SKILLS_SUMMARY = "I have 3 years of experience building web, mobile and desktop applications. Below is a quick overview of my skills and certifications. Want to find out more about my experience?";
        this.MY_WHATS_NEW = "Aside from my work, I have been preparing for SQL and C# certification.";
        this.MY_RESUME = "Srdan Ristic Resume.pdf";
        // Links
        this.MY_GITHUB = "https://github.com/ristics18";
        this.MY_LINKEDIN = "https://www.linkedin.com/in/srdan-ristic-87577580/";
        this.MY_STACKOVERFLOW = "https://stackoverflow.com/users/2687059/srdan-ristic";
        this.MY_SLACK = "https://www.facebook.com/srdjan.ristic.surge";
        // About Me
        this.MY_IMAGE_AM = "about-me.png";
        this.MY_TITLE_AM = "Income seldom exceeds personal development";
        this.MY_SUBTITLE_AM = "Keep evolving";
        this.MY_SUMMARY_AM = "My name is Srđan Ristic and I am from Serbia, very cool and interesting country in Southeastern Europe. In the United States I go by Surgen. My life is focused on happiness; If I am not happy, I make a change. I like to live every day as if it was my last day on Earth. I make sure to surround myself with positive people, because it helps me grow and become more mature every day. I spend most of my time playing sports, socializing and doing software development. Love meeting new people and making new connections.";
        // Experience
        this.EXPERIENCE = [
            {
                experienceName: "Full Stack Developer",
                experienceCompany: "PioneerRx Pharmacy Software",
                experienceDate: "18 Jun 2018 - Present",
                experienceDesc: "This is my current job where I develop software for independent pharmacies, which deals with patients, prescriptions, prescribers etc. My involvement is mainly focused on the core functions of the pharmacies and their stores. I am also working on some of the company's internal web projects."
            },
            {
                experienceName: "Graduate Research Assistant",
                experienceCompany: "Louisiana State University Shreveport",
                experienceDate: "01 Feb 2017 - 01 May 2018",
                experienceDesc: "I worked on a variety of biomedical informatics projects. With the use of powerful computers, I learned and worked on managing and analyzing biological, chemical, and medical processes in the interest of improving medicine and patient care. I frequently collaborated with doctors regarding the data analysis."
            },
            {
                experienceName: "Intern/Junior Software Developer",
                experienceCompany: "Benetech Corporation",
                experienceDate: "01 Oct 2015 - 01 May 2016",
                experienceDesc: "Besides learning and acquiring new skills using various programming technologies, I worked on development and maintenance of the systems for content management, using technologies such as Java, Spring, REST, SQL, Alfresco, CMIS and AngularJS. I communicated with clients on a daily bases regarding the improvement of the system."
            }
        ];
        // Education
        this.EDUCATION = [
            {
                educationName: "MS in Computer System Technology",
                educationUniversity: "Louisiana State University Shreveport",
                educationDate: "01 Jan 2017 - 15 May 2018",
                educationDesc: "Attended LSUS for a year and a half in order to complete my Master's. Worked on a variety of projects where my favorite one was a capstone project (Android app)."
            },
            {
                educationName: "BS in Information Technology",
                educationUniversity: "University Metropolitan",
                educationDate: "01 Oct 2012 - 01 Dec 2016",
                educationDesc: "Pursued my Bachelor's degree in Belgrade, Serbia. This was my starting point when it comes to software development. Mainly focused on Java projects."
            },
            {
                educationName: "High School",
                educationUniversity: "Sports High School in Belgrade",
                educationDate: "01 Sep 2008 - 12 Apr 2012",
                educationDesc: "Attended Sports High School in Belgrade where my main focus besides school was basketball. Spent my junior year in Raymond, IL as an exchange student."
            }
        ];
        // Skills
        this.SKILLS = [
            {
                skillTitle: "Frontend",
                skillImage: "front-end.svg",
                skills: [
                    {
                        skillName: "HTML/CSS/SASS"
                    },
                    {
                        skillName: "Bootstrap 3/4"
                    },
                    {
                        skillName: "JavaScript/Angular"
                    },
                    {
                        skillName: "NodeJS"
                    },
                    {
                        skillName: "jQuery"
                    }
                ]
            },
            {
                skillTitle: "Backend",
                skillImage: "back-end.svg",
                skills: [
                    {
                        skillName: "Java/C#"
                    },
                    {
                        skillName: "Spring/.NET"
                    },
                    {
                        skillName: "MySQL/SQL Server"
                    },
                    {
                        skillName: "PHP"
                    },
                    {
                        skillName: "Python"
                    }
                ]
            },
            {
                skillTitle: "Other",
                skillImage: "other.svg",
                skills: [
                    {
                        skillName: "Git/TFS/Subversion"
                    },
                    {
                        skillName: "Maven/Gradle"
                    },
                    {
                        skillName: "AWS"
                    },
                    {
                        skillName: "JIRA/Scrum"
                    },
                    {
                        skillName: "Data Mining"
                    }
                ]
            }
        ];
        // Certifications and Awards
        this.CERTS_AND_AWARDS = [
            {
                caaName: "MCSA SQL 2016 Database Development",
                caaOrganization: "Microsoft",
                caaImage: "microsoft-cert.png",
                caaDate: "In Progress",
                caaLink: "https://www.youracclaim.com/badges/8ba16afe-0be6-42dc-bc8e-60441ea37c97/linked_in_profile",
                caaDesc: "I am currently pursuing this certification which consists of two exams: 70-701 and 70-702. I have already passed the 701 and am currently studying for 702."
            },
            {
                caaName: "Oracle Certified Associate, Java SE 8 Programmer",
                caaOrganization: "Oracle",
                caaImage: "oracle-cert.png",
                caaDate: "14 Nov 2017",
                caaLink: "https://www.youracclaim.com/badges/b0610484-16e7-43c4-af31-851ebfc2c002/linked_in_profile",
                caaDesc: "I am a big fan of Java - one of the reasons why I pursued and successfully completed this certification. My future goal is to take Oracle Certified Professional exam."
            },
            {
                caaName: "University Award for Outstanding Student",
                caaOrganization: "Louisiana State University Shreveport",
                caaImage: "lsus-award.png",
                caaDate: "03 Apr 2018",
                caaLink: "https://www.lsus.edu/news-and-events/lsus-honors-its-best-of-the-best-at-academic-awards-convocation-2018",
                caaDesc: "I was chosen as an outstanding student at the end of my Master's studies at LSUS. I was honored to receive this award, as it demonstrated that hard works pays off."
            }
        ];
        // Projects
        this.PROJECTS = [
            {
                id: 1,
                projectName: "PioneerRx Pharmacy Software",
                projectDesc: "This is my current job where I develop software for independent pharmacies, which deals with patients, prescriptions, prescribers etc.",
                projectDate: "Jun 2018 - Present",
                projectImage: "work.png",
                projectUrl: "https://www.pioneerrx.com",
                projectTechnologies: [
                    {
                        technologyName: "C#"
                    },
                    {
                        technologyName: ".NET"
                    },
                    {
                        technologyName: "SQL Server, MariaDB"
                    },
                    {
                        technologyName: "HTML, CSS, JavaScript"
                    },
                    {
                        technologyName: "TFS/Git"
                    }
                ]
            },
            {
                id: 2,
                projectName: "Oracle Certified Associate Java SE 8 Practice Exams",
                projectDesc: "I have created this Udemy course with an idea to develop practice exams that will help students and developers prepare for OCA Java SE 8 Programmer I (1Z0-808) certification or Java interviews.",
                projectDate: "February 2019 - April 2019",
                projectImage: "udemyCourse.mp4",
                projectUrl: "https://www.udemy.com/oracle-certified-associate-java-se-8-practice-exams/",
                projectTechnologies: [
                    {
                        technologyName: "Java 8"
                    }
                ]
            },
            {
                id: 3,
                projectName: "Srdan Ristic Portfolio",
                projectDesc: "This is my personal website. Here you can get to know me and find out more about my career.",
                projectDate: "Nov 2018 - Feb 2019",
                projectImage: "portfolio.png",
                projectUrl: "https://srdanristic.com",
                projectTechnologies: [
                    {
                        technologyName: "Angular 7"
                    },
                    {
                        technologyName: "AWS (CloudFront, S3, Route 53)"
                    },
                    {
                        technologyName: "HTML, CSS, Bootstrap"
                    },
                    {
                        technologyName: "Git"
                    }
                ]
            },
            {
                id: 4,
                projectName: "Advisor's Tool",
                projectDesc: "This is a system developed at LSUS. The idea of the system is to generate curriculum worksheets based on student's transcript.",
                projectDate: "Aug 2017 - May 2018",
                projectImage: "advisorsTool.png",
                projectUrl: "https://sun.cs.lsus.edu/advisors-tool/index.php",
                projectTechnologies: [
                    {
                        technologyName: "PHP 7"
                    },
                    {
                        technologyName: "MySQL"
                    },
                    {
                        technologyName: "HTML, CSS, JavaScript"
                    },
                    {
                        technologyName: "Bootstrap"
                    },
                    {
                        technologyName: "Regular Expressions"
                    },
                    {
                        technologyName: "Subversion"
                    }
                ]
            },
            {
                id: 5,
                projectName: "Education Tool",
                projectDesc: "This is a system developed with the idea to help medical students at LSUHSC learn by going through cases provided by their professors.",
                projectDate: "Aug 2017 – May 2018",
                projectImage: "education-tool.png",
                projectUrl: "http://www.lsuhscshreveport.edu/",
                projectTechnologies: [
                    {
                        technologyName: "PHP"
                    },
                    {
                        technologyName: "MySQL"
                    },
                    {
                        technologyName: "HTML, CSS, JavaScript"
                    },
                    {
                        technologyName: "Bootstrap"
                    },
                    {
                        technologyName: "Charts.js"
                    },
                    {
                        technologyName: "Subversion"
                    }
                ]
            },
            {
                id: 6,
                projectName: "Laboratory for Advanced Biomedical Informatics",
                projectDesc: "This is when I worked as Graduate Research Assistant at LSUS. My work was focused on biomedical informatics projects.",
                projectDate: "Feb 2017 – May 2018",
                projectImage: "labi.png",
                projectUrl: "http://www.labi.lsus.edu",
                projectTechnologies: [
                    {
                        technologyName: "R, Java"
                    },
                    {
                        technologyName: "MySQL"
                    },
                    {
                        technologyName: "WEKA"
                    },
                    {
                        technologyName: "Orange"
                    },
                    {
                        technologyName: "Git, Subversion"
                    }
                ]
            },
            {
                id: 7,
                projectName: "Orbit",
                projectDesc: "This is a mobile application that helps school systems with the communication between parents and teachers.",
                projectDate: "Aug 2017 – May 2018",
                projectImage: "orbit.png",
                projectUrl: "https://play.google.com/store/apps/details?id=net.orbit.orbit",
                projectTechnologies: [
                    {
                        technologyName: "Java/Android"
                    },
                    {
                        technologyName: "Spring Boot"
                    },
                    {
                        technologyName: "RESTful Web Services"
                    },
                    {
                        technologyName: "Jenkins"
                    },
                    {
                        technologyName: "AWS (EC2)"
                    },
                    {
                        technologyName: "Git"
                    }
                ]
            },
            {
                id: 8,
                projectName: "High Altitude Solar Eclipse Observer",
                projectDesc: "This project consisted of creating and developing a payload for NASA competition that took place in Palestine, TX.",
                projectDate: "Jan 2017 – May 2017",
                projectImage: "highAltitudeSEO.png",
                projectUrl: "https://sites.google.com/site/solareclipseobserver/home",
                projectTechnologies: [
                    {
                        technologyName: "Python"
                    },
                    {
                        technologyName: "Gnuplot"
                    },
                    {
                        technologyName: "HTML, CSS, JavaScript"
                    },
                    {
                        technologyName: "RaspberryPi, Sensors"
                    },
                    {
                        technologyName: "Raspbian"
                    }
                ]
            },
            {
                id: 9,
                projectName: "Twitter Data Collecting, Analyzing and Visualization",
                projectDesc: "This is a web project that is used for Twitter data collecting and visualizing based on hashtags provided.",
                projectDate: "Sep 2016 – Dec 2016",
                projectImage: "capstone-project.png",
                projectUrl: "https://www.metropolitan.ac.rs/en/",
                projectTechnologies: [
                    {
                        technologyName: "Java"
                    },
                    {
                        technologyName: "Maven"
                    },
                    {
                        technologyName: "MySQL"
                    },
                    {
                        technologyName: "Spring"
                    },
                    {
                        technologyName: "RESTful Web Services"
                    },
                    {
                        technologyName: "AngularJS"
                    },
                    {
                        technologyName: "AWS"
                    },
                    {
                        technologyName: "Git"
                    }
                ]
            }
        ];
        // Footer
        this.COPYRIGHT = "Copyright © " + new Date().getFullYear() + " - Created by Srdan Ristic";
    }
    AppConstants = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppConstants);
    return AppConstants;
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

/***/ "./src/services/http/http.service.ts":
/*!*******************************************!*\
  !*** ./src/services/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getRequest = function () {
        return this.http.get("someUrl");
    };
    HttpService.prototype.postRequest = function (url, body) {
        return this.http.post(url, body, { responseType: 'text', headers: { 'content-type': 'application/x-www-form-urlencoded' } });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/services/themes/themes.service.ts":
/*!***********************************************!*\
  !*** ./src/services/themes/themes.service.ts ***!
  \***********************************************/
/*! exports provided: ThemesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesService", function() { return ThemesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/utilities.service */ "./src/services/utilities/utilities.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemesService = /** @class */ (function () {
    function ThemesService(utilitiesService) {
        this.utilitiesService = utilitiesService;
        this.DefaultTheme = 'light';
        this.ThemeCssVariables = [
            '--white-2',
            '--white-3',
            '--blue-1',
            '--blue-2',
            '--blue-3',
            '--blue-4',
            '--blue-5',
            '--blue-7',
            '--silver-2',
            '--silver-4',
            '--silver-5',
            '--silver-6',
            '--silver-7',
            '--silver-8',
            '--silver-10',
            '--silver-11',
            '--black-1',
            '--black-5',
            '--black-8'
        ];
    }
    ThemesService.prototype.switchTheme = function (themeName) {
        var uiThemeText = document.getElementById('theme-mode').innerText.trim();
        if (themeName === 'dark') {
            if (uiThemeText === 'Enable Dark Mode') {
                document.getElementById('theme-mode').innerText = ' Disable Dark Mode';
                this.replaceCss();
            }
        }
        else if (themeName === 'light') {
            if (uiThemeText === 'Disable Dark Mode') {
                document.getElementById('theme-mode').innerText = ' Enable Dark Mode';
                this.replaceCss();
            }
        }
    };
    ThemesService.prototype.replaceCss = function () {
        var _this = this;
        this.ThemeCssVariables.forEach(function (cssProperty) {
            var productionColor = _this.utilitiesService.getCssVariableValue(cssProperty);
            // replace production color with other theme color
            document.documentElement.style.setProperty(cssProperty, _this.utilitiesService.getCssVariableValue(cssProperty.concat(('-other-theme'))));
            // save old theme color
            document.documentElement.style.setProperty(cssProperty.concat(('-other-theme')), productionColor);
        });
    };
    ThemesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_1__["UtilitiesService"]])
    ], ThemesService);
    return ThemesService;
}());



/***/ }),

/***/ "./src/services/utilities/utilities.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/utilities/utilities.service.ts ***!
  \*****************************************************/
/*! exports provided: UtilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesService", function() { return UtilitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilitiesService = /** @class */ (function () {
    function UtilitiesService() {
    }
    UtilitiesService.prototype.getCssVariableValue = function (variableName) {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName);
    };
    UtilitiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilitiesService);
    return UtilitiesService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/surge/sristic-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map