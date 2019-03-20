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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./research/research.component */ "./src/app/research/research.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'projects', component: _research_research_component__WEBPACK_IMPORTED_MODULE_4__["ResearchComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-nav></app-nav>\n  <br /><br />\n  <section>\n    <router-outlet></router-outlet>\n  </section>\n  <br /><br />\n  <app-footer></app-footer>\n</div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'rubykohn';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./research/research.component */ "./src/app/research/research.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _research_research_component__WEBPACK_IMPORTED_MODULE_6__["ResearchComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid black;\n  left: 0;\n  height: auto;\n}\n\n#copyright {\n  font-size: 7pt;\n  margin-bottom: 3px;\n  \n\n}\n\na {\n  text-decoration: none;\n  color: black;\n  \n}\n\na:hover {\n  color: #f9da10;\n}\n\n#footer-nav {\n  font-size: 9pt;\n  margin:3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjs7O0FBR3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogYXV0bztcbn1cblxuI2NvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogN3B0O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIFxuXG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgXG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI2Y5ZGExMDtcbn1cblxuI2Zvb3Rlci1uYXYge1xuICBmb250LXNpemU6IDlwdDtcbiAgbWFyZ2luOjNweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-container\">\n  <div id=\"footer-nav\">\n      <a routerLink=\"/\">About</a>&nbsp;|&nbsp;\n      <a routerLink=\"/projects\">Projects</a>&nbsp;|&nbsp;\n      <a href=\"../../assets/Resume_RubyKohn.pdf\" download>Download Resume</a>\n  </div>\n  <div id=\"copyright\">Copyright 2019 Ruby H. Kohn | All Rights Reserved</div>\n</footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-text {\n    text-align:left ;\n    margin-left:20%;\n}\n\n#home-img {\n    border: 1px solid black;\n}\n\nimg {\n    width:20%;\n    border: 1px solid black;\n    min-width: 300px;\n    float:left;\n    margin-right:20px;\n}\n\n#home-container{\n    margin-left:15%;\n    margin-right: 15%;\n    align-content: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLXRleHQge1xuICAgIHRleHQtYWxpZ246bGVmdCA7XG4gICAgbWFyZ2luLWxlZnQ6MjAlO1xufVxuXG4jaG9tZS1pbWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOjIwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG59XG5cblxuI2hvbWUtY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OjE1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br /><br />\n<div id=\"home-container\">\n  <img src=\"../../assets/picture_about.jpg\"/>\n\n  <div id=\"home-text\">\n    <p>\n      I am a senior at Smith College who will graduate with a B.S. in\n      Engineering Science in May. I am passionate about applications of\n      engineering that benefit people and the environment. My education and\n      research experiences in both environmental and mechatronic engineering\n      have made me a resourceful and resilient engineer who takes an\n      interdisciplinary approach when solving problems. See my projects page for\n      a full list of my research and design experiences.\n    </p>\n    <p>\n      Feel free to contact me with job opportunities or otherwise at\n      rkohn@smith.edu.\n    </p>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n/* Change the link color to #111 (black) on hover */\n\nli a:hover {\n  background-color: #f9da10;\n  color:#000;\n  \n}\n\n.active {\n  background-color: #4caf50;\n}\n\n.nav-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\nimg{\n  width:35px;\n  margin-top:5px;\n  margin-left: 20px;\n  margin-right: 10px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEsbURBQW1EOztBQUNuRDtFQUNFLHlCQUF5QjtFQUN6QixVQUFVOztBQUVaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbmxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXG5saSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZGExMDtcbiAgY29sb3I6IzAwMDtcbiAgXG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW1ne1xuICB3aWR0aDozNXB4O1xuICBtYXJnaW4tdG9wOjVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"nav-container\">\n    <nav>\n      <ul>\n        <li style=\"float:left\"><img src=\"../../assets/yellowhat.png\" /></li>\n        <li style=\"float:left\"><a routerLink=\"/\">Ruby H. Kohn</a></li>\n        <li style=\"float:right\">\n          <a href=\"../../assets/Resume_RubyKohn.pdf\" download>Download Resume</a>\n        </li>\n        <li style=\"float:right\"><a routerLink=\"/projects\">Projects</a></li>\n        <li style=\"float:right\"><a routerLink=\"/\">About</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/research/research.component.css":
/*!*************************************************!*\
  !*** ./src/app/research/research.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: left;\n  margin-left:20px\n}\n\nimg {\n  width: 180px;\n  float:left; \n  margin-left:20px\n}\n\n.research-card {\n  margin-left: 10%;\n  margin-right: 10%;\n  background: #f9f9f9;\n  border: 2px dashed #f9da10;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWFyY2gvcmVzZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcmVzZWFyY2gvcmVzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDoyMHB4XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxODBweDtcbiAgZmxvYXQ6bGVmdDsgXG4gIG1hcmdpbi1sZWZ0OjIwcHhcbn1cblxuLnJlc2VhcmNoLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNmOWRhMTA7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/research/research.component.html":
/*!**************************************************!*\
  !*** ./src/app/research/research.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br /><br />\n<!-- Honors Thesis Portion -->\n<div class=\"research-card\">\n  <h1>Full Year Honors Thesis</h1>\n  <h4>Design of Microcosms for Testing of Contaminant Removal</h4>\n  <img src=\"../../assets/smithlogo.png\" />\n  <br />\n  <div>\n    <p><b>Dates:&nbsp;</b> September 2018 – May 2019</p>\n    <p>\n      <b>Lab:&nbsp;</b>\n      <a href=\"http://www.science.smith.edu/ismail/\">Ismail Lab </a>\n    </p>\n    <p>\n      <b>Description:&nbsp;</b> I am designing and building flow-through\n      microcosm tanks that model engineered treatment wetlands to study the\n      long-term filter feeding behavior of zooplankton in natural systems. I am\n      generating designs based on previous zooplankton and treatment wetlands\n      research as well as chemical reactor theory and fluid mechanics. To verify\n      design requirements, I am using tracer studies, analysis of flow regime,\n      viability studies, and initial microcosm experiments. The results of\n      microcosm experiments will help inform treatment wetland engineers about\n      the capacity of zooplankton to treat microbial contaminants like E. coli\n      and the ideal conditions for treatment.\n    </p>\n  </div>\n  <br />\n</div>\n\n<br /><br />\n\n<div class=\"research-card\">\n  <h1>NSF Funded Research Experience for Undergraduates (REU)</h1>\n  <img style=\"width:100px\" src=\"../../assets/VT_logo.png\" />\n  <img style=\"width:130px\" src=\"../../assets/tudlogo.png\" />\n  <br />\n  <br />\n  <br />\n  <br />\n  <div>\n    <p><b>Dates:&nbsp;</b>June – August 2018</p>\n    <p>\n      <b>Lab:&nbsp;</b\n      ><a\n        href=\"https://www.ims.tu-darmstadt.de/institut/startseite_ims/index.en.jsp\"\n      >\n        Institute for Mechatronic Systems\n      </a>\n    </p>\n    <p>\n      <b>Description:&nbsp;</b>While in Germany, I created a model of charging\n      infrastructure for electric vehicles in residential complexes based on\n      driver habits and charger scenarios using MATLAB. During this project I\n      became familiar with object oriented programming in MATLAB, as well as\n      data analysis and visualization techniques. I optimized the model to\n      significantly reduce the energy consumption of an outdated housing complex\n      being refurbished with a smart grid controller. I directed the research\n      and design of the model independently in collaboration with a graduate\n      mentor.\n    </p>\n  </div>\n  <br />\n</div>\n\n<br /><br />\n\n<div class=\"research-card\">\n  <h1>Environmental Engineering Research Assistant</h1>\n  <img src=\"../../assets/smithlogo.png\" />\n  <br />\n  <div>\n    <p><b>Dates:&nbsp;</b>February 2017 - May 2019</p>\n    <p>\n      <b>Lab:&nbsp;</b>\n      <a href=\"http://www.science.smith.edu/ismail/\">Ismail Lab </a>\n    </p>\n    <p>\n      <b>Description:&nbsp;</b> In my role as research assistant I have designed\n      and implemented original experiments with a team assessing the ability of\n      zooplankton to filter E. coli from aquatic systems under varied\n      environmental conditions. I am continuing this research through my honors\n      thesis, building flow-through microcosm tanks that model engineered\n      treatment wetlands to study the long-term filter feeding behavior of\n      zooplankton in natural systems. I was awarded an undergraduate summer\n      research fellowship in 2017; I collected water quality data of a stream\n      running through a cattle pasture at the Smith College field station to\n      asses diurnal impact and geographic correlation of fecal contamination,\n      informing rechanneling of the stream. I took a leadership position by\n      coordinating laboratory upkeep, maintaining organism cultures, and\n      training new research assistants.\n    </p>\n  </div>\n  <br />\n</div>\n\n<br /><br />\n\n<div class=\"research-card\">\n  <h1>Controlled Flight Aerial Vehicle Design Project</h1>\n  <div>\n    <p><b>Dates:&nbsp;</b>January – May 2019</p>\n    <p><b>Course:&nbsp;</b>Aerial Vehicle Design</p>\n    <p>\n      <b>Description:&nbsp;</b>I am designing and fabricating a small glider\n      capable of controlled flight with the goal of staying in the air as long\n      as possible. I am soldering chosen components onto a PCB, programming a\n      microcontroller using Propeller Tool to control glider components during\n      flight, and effectively debugging both hardware and software issues. After\n      the glider and controls have been completed, I will conduct flight tests,\n      record pressure sensor data, and iterate the design to optimize the glide\n      ratio and flight time.\n    </p>\n  </div>\n  <br />\n</div>\n\n<br /><br />\n\n<div class=\"research-card\">\n  <h1>Removal of Lead by Mushroom Mycelium</h1>\n  <div>\n    <p><b>Dates:&nbsp;</b>September - December 2017</p>\n    <p><b>Course:&nbsp;</b> Contaminants in Aquatic Systems</p>\n    <p>\n      <b>Description:&nbsp;</b>I designed an experiment with a partner measuring\n      the sorbtion of lead from water by powdered mycelium in collaboration with\n      a local farmer to develop a productive use for mushroom mycelium waste.\n      Performed batch experiments, collected data using a microwave digestor and\n      ICP-OES, and evaluated sorbtion favorability using the Freundlich isotherm\n      model.\n    </p>\n  </div>\n  <br />\n</div>\n\n<br />\n"

/***/ }),

/***/ "./src/app/research/research.component.ts":
/*!************************************************!*\
  !*** ./src/app/research/research.component.ts ***!
  \************************************************/
/*! exports provided: ResearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchComponent", function() { return ResearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResearchComponent = /** @class */ (function () {
    function ResearchComponent() {
    }
    ResearchComponent.prototype.ngOnInit = function () {
    };
    ResearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-research',
            template: __webpack_require__(/*! ./research.component.html */ "./src/app/research/research.component.html"),
            styles: [__webpack_require__(/*! ./research.component.css */ "./src/app/research/research.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResearchComponent);
    return ResearchComponent;
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

module.exports = __webpack_require__(/*! /Users/valeriemcculloch/Projects/ruby/sourcecode/rubykohn/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map