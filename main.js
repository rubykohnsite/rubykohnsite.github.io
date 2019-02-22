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
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'research', component: _research_research_component__WEBPACK_IMPORTED_MODULE_4__["ResearchComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
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
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./research/research.component */ "./src/app/research/research.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _research_research_component__WEBPACK_IMPORTED_MODULE_7__["ResearchComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#my-input {\n    font-size:14px;\n}\n\n#my-text {\n    font-size:14px;\n    width: 45%;\n    height: 25%;\n}\n\n#my-button {\n    font-size:14px;\n    background:#f9da10;\n    width: 125px;\n    height: 55px\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXktaW5wdXQge1xuICAgIGZvbnQtc2l6ZToxNHB4O1xufVxuXG4jbXktdGV4dCB7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDI1JTtcbn1cblxuI215LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgYmFja2dyb3VuZDojZjlkYTEwO1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBoZWlnaHQ6IDU1cHhcbn0gIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contact</h1>\n<br /><br />\n<form>\n\n  <!-- name -->\n  <div class=\"field\">\n    <input id = \"my-input\" type=\"text\" name=\"name\" class=\"input\" placeholder=\"Your Name\">\n  </div>\n  <br/>\n  <!-- email -->\n  <div class=\"field\">\n    <input id = \"my-input\" type=\"email\" name=\"email\" class=\"input\" placeholder=\"Your Email\">\n  </div>\n  <br/>\n  <!-- message -->\n  <div class=\"field\">\n    <textarea id=\"my-text\" class=\"textarea\" name=\"message\" placeholder=\"What's on your mind?\"></textarea>\n  </div>\n  <br/>\n  <button type=\"submit\" id=\"my-button\" class=\"button is-danger is-large\">Submit</button>\n\n</form>\n<br /><br />\n\n<p>\n  rubykohnsite @ gmail [dot] com\n</p>\n\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid black;\n  left: 0;\n}\n\n#copyright {\n  font-size: 7pt;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\na:hover {\n  color: #f9da10;\n}\n\n#footer-nav {\n  font-size: 9pt;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbGVmdDogMDtcbn1cblxuI2NvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogN3B0O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI2Y5ZGExMDtcbn1cblxuI2Zvb3Rlci1uYXYge1xuICBmb250LXNpemU6IDlwdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-container\">\n  <div id=\"footer-nav\">\n      <a routerLink=\"/\">Home</a>&nbsp;|&nbsp;\n      <a routerLink=\"/research\">Research</a>&nbsp;|&nbsp;\n      <a routerLink=\"/contact\">Contact</a>\n  </div>\n  <div id=\"copyright\">Copyright 2019 Ruby H. Kohn | All Rights Reserved</div>\n</footer>\n"

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

module.exports = "#home-text {\n    text-align:center;\n    margin-left:20%;\n    margin-right:20%;\n}\n\n#home-img {\n    border: 1px solid black;\n}\n\nimg {\n    width:20%;\n    border: 1px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLXRleHQge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OjIwJTtcbiAgICBtYXJnaW4tcmlnaHQ6MjAlO1xufVxuXG4jaG9tZS1pbWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOjIwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br /><br />\n<img src=\"../../assets/KOHN.JPG\" />\n\n<div id=\"home-text\">\n  <p>\n    I am a senior at Smith College currently finishing up my B.S. in\n    Engineering.\n  </p>\n  <p>\n    My research experience predominantly concerns clean water engineering. I\n    have worked as a research assistant in the <a href=\"http://www.science.smith.edu/ismail/\">Ismail Lab </a>at Smith\n    college for\n    the last two years. This lab utilizes zooplankton as a filter of microbial\n    pollutants.\n  </p>\n  <p>\n    My engineering interests aren’t solely related to water. This past summer\n    (2018) I had the opportunity to work at the Technical University in\n    Darmstadt, Germany on infrastructural engineering related to electric\n    vehicles. See my research page for a full list of my research with descriptions, diagrams, and links.\n  </p>\n  <p>\n    Please feel free to contact me for job opportunities or otherwise.\n  </p>\n</div>\n"

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

module.exports = "<header>\n  <div class=\"nav-container\">\n    <nav>\n      <ul>\n        <li style=\"float:left\"><img src=\"../../assets/yellowhat.png\" /></li>\n        <li style=\"float:left\"><a routerLink=\"/\">Ruby H. Kohn</a></li>\n        <li style=\"float:right\"><a href=\"../../assets/KohnResume.pdf\" download>Download Resume</a></li>\n        <li style=\"float:right\"><a routerLink=\"/contact\">Contact</a></li>\n        <li style=\"float:right\"><a routerLink=\"/research\">Research</a></li>\n        <li style=\"float:right\"><a routerLink=\"/\">Home</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n"

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

module.exports = ".inner-text {\n  text-align: left;\n}\n\n.major-header {\n  border: 2px groove #f9da10;\n  background: #f9f9f9;\n}\n\n.minor-header {\n  border: 1px solid black;\n  background: #f9f9f9;\n}\n\nimg {\n  width: 180px;\n}\n\n.research-card {\n  margin-left: 15%;\n  margin-right: 15%;\n  background: #f9f9f9;\n  border: 2px dashed #f9da10;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWFyY2gvcmVzZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcmVzZWFyY2gvcmVzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1ham9yLWhlYWRlciB7XG4gIGJvcmRlcjogMnB4IGdyb292ZSAjZjlkYTEwO1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuXG4ubWlub3ItaGVhZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuLnJlc2VhcmNoLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNmOWRhMTA7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/research/research.component.html":
/*!**************************************************!*\
  !*** ./src/app/research/research.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br /><br />\n<!-- Honors Thesis Portion -->\n<div class=\"research-card\">\n  <h1>Honors Thesis</h1>\n  <img src=\"../../assets/smithlogo.png\" />\n  <div class=\"inner-text\">\n    <ul>\n      <li><u>Dates:</u>&nbsp;&nbsp; September 2018 - May 2019</li>\n      <li><u>Lab:</u>&nbsp;&nbsp; <a href=\"http://www.science.smith.edu/ismail/\">Ismail Lab </a></li>\n      <li><u>Tentative Title:</u>&nbsp;&nbsp; </li>\n      <li><u>Tentative Description:</u>&nbsp;&nbsp; </li>\n      <li><a>Download Paper </a></li>\n    </ul>\n  </div>\n  <br />\n</div>\n\n<br /><br />\n\n<div class=\"research-card\">\n  <h1>NSF Funded Research Experience for Undergrads (REU)</h1>\n  <img src=\"../../assets/tudlogo.png\" />\n  <div class=\"inner-text\">\n    <ul>\n      <li><u>Dates:</u>&nbsp;&nbsp;June - August 2018</li>\n      <li><u>Lab: <a href=\"https://www.fzd.tu-darmstadt.de/internationaleraustausch/automotiveengineeringsummer/automotiveengineeringsummergermany.en.jsp\">\n            Institute of Automotive Engineering</a>\n        </u>&nbsp;&nbsp; </li>\n      <li><u>Description:</u>&nbsp;&nbsp; </li>\n      <li><a>Download Paper </a></li>\n    </ul>\n  </div>\n  <br />\n</div>\n\n<br /><br />\n\n<div class=\"research-card\">\n  <h1>Ismail Lab Assistant</h1>\n  <img src=\"../../assets/smithlogo.png\" />\n  <div class=\"inner-text\">\n    <ul>\n      <li><u>Dates:</u>&nbsp;&nbsp; February 2017 - Present</li>\n      <li><u>Lab:</u>&nbsp;&nbsp; <a href=\"http://www.science.smith.edu/ismail/\">Ismail Lab </a></li>\n      <li><u>Description:</u>&nbsp;&nbsp; </li>\n      <li><a>Download Paper </a></li>\n    </ul>\n  </div>\n  <br />\n</div>\n\n\n<br /><br />\n\n<div class=\"research-card\">\n  <h1>Summer Undergraduate Research Fellowship</h1>\n  <img src=\"../../assets/smithlogo.png\" />\n  <div class=\"inner-text\">\n    <ul>\n      <li><u>Dates:</u>&nbsp;&nbsp; May - July 2017</li>\n      <li><u>Description:</u>&nbsp;&nbsp; </li>\n      <li><a>Download Paper </a></li>\n    </ul>\n  </div>\n  <br />\n</div>\n\n\n<br /><br />\n\n<div class=\"research-card\">\n  <h1> Mushroom Mycellium Project</h1>\n  <img src=\"../../assets/smithlogo.png\" />\n  <div class=\"inner-text\">\n    <ul>\n      <li><u>Dates:</u>&nbsp;&nbsp; September - December 2017</li>\n      <li><u>Description:</u>&nbsp;&nbsp; </li>\n      <li><a>Download Paper </a></li>\n    </ul>\n  </div>\n  <br />\n</div>\n\n\n<br />\n"

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

module.exports = __webpack_require__(/*! /Users/th27938/Desktop/sourcecode/rubykohn/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map