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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-landingpage></app-landingpage> -->\n\n\n<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.text = "";
        this.title = 'testAngular';
    }
    AppComponent.prototype.myFunction = function () {
        this.text += this.name;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "./src/app/landingpage/landingpage.component.ts");
/* harmony import */ var _liststudent_liststudent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./liststudent/liststudent.component */ "./src/app/liststudent/liststudent.component.ts");
/* harmony import */ var _incommingtransfer_incommingtransfer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./incommingtransfer/incommingtransfer.component */ "./src/app/incommingtransfer/incommingtransfer.component.ts");
/* harmony import */ var _outgoingtransfer_outgoingtransfer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./outgoingtransfer/outgoingtransfer.component */ "./src/app/outgoingtransfer/outgoingtransfer.component.ts");
/* harmony import */ var _viewstudent_viewstudent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewstudent/viewstudent.component */ "./src/app/viewstudent/viewstudent.component.ts");
/* harmony import */ var _editstudent_editstudent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editstudent/editstudent.component */ "./src/app/editstudent/editstudent.component.ts");
/* harmony import */ var _listoutgoingtransfer_listoutgoingtransfer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./listoutgoingtransfer/listoutgoingtransfer.component */ "./src/app/listoutgoingtransfer/listoutgoingtransfer.component.ts");
/* harmony import */ var _apporved_apporved_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./apporved/apporved.component */ "./src/app/apporved/apporved.component.ts");
/* harmony import */ var _app_service_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../app/service/data */ "./src/app/service/data.ts");
/* harmony import */ var _app_service_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../app/service/auth */ "./src/app/service/auth.ts");
/* harmony import */ var _viewtransfer_viewtransfer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./viewtransfer/viewtransfer.component */ "./src/app/viewtransfer/viewtransfer.component.ts");
/* harmony import */ var _approvedview_approvedview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./approvedview/approvedview.component */ "./src/app/approvedview/approvedview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var config = {
    apiKey: "AIzaSyD8d-WkpT0Ccopjxv0YxxJrrA3veuG_4zs",
    authDomain: "school-student-dd03a.firebaseapp.com",
    databaseURL: "https://school-student-dd03a.firebaseio.com",
    projectId: "school-student-dd03a",
    storageBucket: "school-student-dd03a.appspot.com",
    messagingSenderId: "189468088775"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_9__["StudentComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_11__["LandingpageComponent"],
                _liststudent_liststudent_component__WEBPACK_IMPORTED_MODULE_12__["ListstudentComponent"],
                _incommingtransfer_incommingtransfer_component__WEBPACK_IMPORTED_MODULE_13__["IncommingtransferComponent"],
                _outgoingtransfer_outgoingtransfer_component__WEBPACK_IMPORTED_MODULE_14__["OutgoingtransferComponent"],
                _viewstudent_viewstudent_component__WEBPACK_IMPORTED_MODULE_15__["ViewstudentComponent"],
                _editstudent_editstudent_component__WEBPACK_IMPORTED_MODULE_16__["EditstudentComponent"],
                _listoutgoingtransfer_listoutgoingtransfer_component__WEBPACK_IMPORTED_MODULE_17__["ListoutgoingtransferComponent"],
                _apporved_apporved_component__WEBPACK_IMPORTED_MODULE_18__["ApporvedComponent"],
                _viewtransfer_viewtransfer_component__WEBPACK_IMPORTED_MODULE_21__["ViewtransferComponent"],
                _approvedview_approvedview_component__WEBPACK_IMPORTED_MODULE_22__["ApprovedviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(config),
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
                    { path: '', pathMatch: 'full', redirectTo: 'login' },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
                    { path: 'app', component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_11__["LandingpageComponent"],
                        children: [
                            { path: '', pathMatch: 'full', redirectTo: 'student' },
                            { path: "student", component: _student_student_component__WEBPACK_IMPORTED_MODULE_9__["StudentComponent"] },
                            { path: "liststudent", component: _liststudent_liststudent_component__WEBPACK_IMPORTED_MODULE_12__["ListstudentComponent"] },
                            { path: "incommingtransfer", component: _incommingtransfer_incommingtransfer_component__WEBPACK_IMPORTED_MODULE_13__["IncommingtransferComponent"] },
                            { path: "outgoingtransfer", component: _outgoingtransfer_outgoingtransfer_component__WEBPACK_IMPORTED_MODULE_14__["OutgoingtransferComponent"] },
                            { path: "viewstudent/:id", component: _viewstudent_viewstudent_component__WEBPACK_IMPORTED_MODULE_15__["ViewstudentComponent"] },
                            { path: "editstudent/:id", component: _editstudent_editstudent_component__WEBPACK_IMPORTED_MODULE_16__["EditstudentComponent"] },
                            { path: "listoutgoingtransfer", component: _listoutgoingtransfer_listoutgoingtransfer_component__WEBPACK_IMPORTED_MODULE_17__["ListoutgoingtransferComponent"] },
                            { path: "approved", component: _apporved_apporved_component__WEBPACK_IMPORTED_MODULE_18__["ApporvedComponent"] },
                            { path: "viewtransfer/:id", component: _viewtransfer_viewtransfer_component__WEBPACK_IMPORTED_MODULE_21__["ViewtransferComponent"] },
                            { path: "approvedview/:id", component: _approvedview_approvedview_component__WEBPACK_IMPORTED_MODULE_22__["ApprovedviewComponent"] }
                        ]
                    }
                ])
            ],
            providers: [_app_service_data__WEBPACK_IMPORTED_MODULE_19__["DataService"],
                _app_service_auth__WEBPACK_IMPORTED_MODULE_20__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/apporved/apporved.component.css":
/*!*************************************************!*\
  !*** ./src/app/apporved/apporved.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    padding-bottom: 0px;\r\n    margin: 0px 0 0 0;\r\n}\r\n.alert{\r\n    padding: 0px;\r\n    margin-bottom: 0px;\r\n    font-size: 1rem;\r\n}\r\n.secondRow{\r\n    margin-top: 2rem;\r\n}\r\nh4{\r\n    font-size: 1.15rem;\r\n}\r\n.btnTabs{\r\npadding:0 7.15rem; \r\n}\r\n@media (min-width:768px) and (max-width:992px){\r\n    .btnTabs{\r\n        padding:0 2.4rem; \r\n        } \r\n}\r\n"

/***/ }),

/***/ "./src/app/apporved/apporved.component.html":
/*!**************************************************!*\
  !*** ./src/app/apporved/apporved.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" style=\"margin-top: 2.5rem\">\n\n  \n    <div class=\"container\">\n        <div class=\"col-md-12\">\n            <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"tab1\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\">#</th>\n                                    <th>Standard</th>\n                                    <th>Name</th>\n                                    <th>Gender</th>\n                                    <th>Transfer To School </th>\n                                    <th>Reason</th>\n                                    <th>Date</th>\n                                    <th class=\"text-right\">Actions</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let student of allStudents\">\n                                    <td class=\"text-center\">{{student.id}}</td>\n                                    <td>{{student.standard}}</td>\n                                    <td>{{student.name}}</td>\n                                    <td>{{student.gender}}</td>\n                                    <td>{{student.school}}</td>\n                                    <td>{{student.reason}}</td>\n                                    <td>{{student.date}}</td>\n                                    <td class=\"td-actions text-right\">\n                                        <a routerLink=\"/app/approvedview/{{student.id}}\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                      <a routerLink=\"/app/outgoingtransfer\"><button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                            <i class=\"material-icons\">edit</i>\n                                        </button></a>\n                                        <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/apporved/apporved.component.ts":
/*!************************************************!*\
  !*** ./src/app/apporved/apporved.component.ts ***!
  \************************************************/
/*! exports provided: ApporvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApporvedComponent", function() { return ApporvedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
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



var ApporvedComponent = /** @class */ (function () {
    function ApporvedComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    ApporvedComponent.prototype.ngOnInit = function () {
        this.getAllStudents();
    };
    ApporvedComponent.prototype.getAllStudents = function () {
        var _this = this;
        this.dataservice.getapporved().subscribe(function (res) {
            _this.allStudents = res;
            console.log(_this.allStudents);
        });
    };
    ApporvedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apporved',
            template: __webpack_require__(/*! ./apporved.component.html */ "./src/app/apporved/apporved.component.html"),
            styles: [__webpack_require__(/*! ./apporved.component.css */ "./src/app/apporved/apporved.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ApporvedComponent);
    return ApporvedComponent;
}());



/***/ }),

/***/ "./src/app/approvedview/approvedview.component.css":
/*!*********************************************************!*\
  !*** ./src/app/approvedview/approvedview.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    max-width:400px;\r\n \r\n    background:purple;\r\n  \r\n    padding:10px;\r\n    border:10px solid purple;\r\n    margin-top:30px;\r\n    \r\n}\r\n.card span {\r\n    color:white;\r\n    font-size:17px;\r\n    text-justify: inter-word;}\r\n.card h5{\r\n    color:purple;\r\n    background: white;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/approvedview/approvedview.component.html":
/*!**********************************************************!*\
  !*** ./src/app/approvedview/approvedview.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <div>\n    <p>name:{{editStudent.name}}</p>\n  </div> -->\n  <div class=\"row text-center\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n            <h5 class=\"text-center\">Students Details</h5>\n               <div class=\"row text-center\" style=\"background:white;padding:15px;\">\n                 <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                   <span style=\"color:purple;font-weight: bold\">{{editStudent.name}}</span>\n                 </div>\n                 <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                    <img src=\"assets/img/school/user.png\" style=\"width:70px;\">\n                  </div>\n               </div>\n               <hr>\n               <div class=\"row text-center\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                    <span>Standard</span>\n                  </div>\n                 \n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                     <span>{{editStudent.standard}}</span>\n                   </div>\n                </div><br>\n                <div class=\"row text-center\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                      <span>School Name</span>\n                    </div>\n                   \n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                       <span>{{editStudent.school}}</span>\n                     </div>\n                  </div><br>\n                  <div class=\"row text-center\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                        <span>Std</span>\n                      </div>\n                     \n                      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                         <span>{{editStudent.std}}</span>\n                       </div>\n                    </div><br>\n                    <div class=\"row text-center\">\n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                          <span>Date</span>\n                        </div>\n                       \n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                           <span>{{editStudent.date}}</span>\n                         </div>\n                      </div><br>\n        \n                      <div class=\"row text-center\">\n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                            <span>Reason</span>\n                          </div>\n                         \n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                             <span>{{editStudent.reason}}</span>\n                           </div>\n                        </div>\n                        <br>\n\n          </div>\n    </div>\n  </div>\n \n</div>\n\n"

/***/ }),

/***/ "./src/app/approvedview/approvedview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/approvedview/approvedview.component.ts ***!
  \********************************************************/
/*! exports provided: ApprovedviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedviewComponent", function() { return ApprovedviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
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



var ApprovedviewComponent = /** @class */ (function () {
    function ApprovedviewComponent(dataservice, router, route) {
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.editStudent = {
            id: '',
            name: '',
            school: '',
            std: '',
            reason: '',
            date: '',
            gender: ''
        };
    }
    ApprovedviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.route.snapshot.params['id'];
        this.dataservice.getapporved().subscribe(function (res) {
            _this.allStudents = res;
            console.log(_this.allStudents);
            for (var i = 0; i < _this.allStudents.length; i++) {
                if (_this._id === _this.allStudents[i].id) {
                    _this.editStudent.id = _this.allStudents[i].id;
                    _this.editStudent.name = _this.allStudents[i].name;
                    _this.editStudent.school = _this.allStudents[i].school;
                    _this.editStudent.date = _this.allStudents[i].date;
                    _this.editStudent.reason = _this.allStudents[i].reason;
                    _this.editStudent.std = _this.allStudents[i].std;
                    _this.editStudent.gender = _this.allStudents[i].gender;
                    _this.editStudent.standard = _this.allStudents[i].standard;
                }
            }
            console.log("test" + _this.editStudent.name);
        });
    };
    ApprovedviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approvedview',
            template: __webpack_require__(/*! ./approvedview.component.html */ "./src/app/approvedview/approvedview.component.html"),
            styles: [__webpack_require__(/*! ./approvedview.component.css */ "./src/app/approvedview/approvedview.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ApprovedviewComponent);
    return ApprovedviewComponent;
}());



/***/ }),

/***/ "./src/app/editstudent/editstudent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editstudent/editstudent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\r\n    margin-top: 100px;\r\n}\r\n\r\nh4 {\r\n    font-size: 1.15rem;\r\n}\r\n\r\n.alert {\r\n    padding: 0px;\r\n    margin-bottom: 0px;\r\n    font-size: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/editstudent/editstudent.component.html":
/*!********************************************************!*\
  !*** ./src/app/editstudent/editstudent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h5>Update Student</h5>\n  <form #editStudentForm=\"ngForm\" (ngSubmit)='updateStudent(editStudentForm.value)' method=\"#\" action=\"#\">\n      <div class=\"row\">\n          <div class=\"col-md-3\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">Name</label>\n                  <input type=\"text\" name=\"name\" #name=\"ngModel\" class=\"form-control\" [(ngModel)]=\"editStudent.name\" minlength=\"4\" ngModel required>\n                  <div *ngIf=\"name.errors && name.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!name.errors.required\">\n                          * Enter Name\n                      </div>\n                      <div [hidden]=\"!name.errors.minlength\">\n                          * Please fill atleast 4 character\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">Father Name</label>\n                  <input type=\"text\" name=\"fathername\" #fathername=\"ngModel\" [(ngModel)]=\"editStudent.fathername\" class=\"form-control\" minlength=\"4\" ngModel required>\n                  <div *ngIf=\"fathername.errors && fathername.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!fathername.errors.required\">\n                          * Enter Fathername\n                      </div>\n                      <div [hidden]=\"!name.errors.minlength\">\n                          * Please fill atleast 4 character\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">Mother Name</label>\n                  <input type=\"text\" name=\"mothername\" #mothername=\"ngModel\" [(ngModel)]=\"editStudent.mothername\" class=\"form-control\" minlength=\"4\" ngModel required>\n                  <div *ngIf=\"mothername.errors && mothername.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!mothername.errors.required\">\n                          * Enter Mothername\n                      </div>\n                      <div [hidden]=\"!name.errors.minlength\">\n                          * Please fill atleast 4 character\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"form-group  is-empty\">\n                  <label class=\"control-label\">Aadhar Number</label>\n                  <input type=\"text\" name=\"aadharnumber\" pattern=\"[0-9]+\" minlength=\"12\" maxlength=\"12\" [(ngModel)]=\"editStudent.aadharnumber\" #aadharnumber=\"ngModel\" class=\"form-control\" ngModel required>\n                  <div *ngIf=\"aadharnumber.errors && aadharnumber.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!aadharnumber.errors.required\">\n                          * Enter aadharnumber\n                      </div>\n                      <div [hidden]=\"!aadharnumber.errors.minlength\">\n                          * Enter 12 char\n                      </div>\n                      <div [hidden]=\"!aadharnumber.errors.pattern\">\n                          * Enter numeric\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-3\">\n              <div class=\"form-group  is-empty\">\n                  <label class=\"control-label\">DOB</label>\n                  <input type=\"date\" name=\"dob\" #dob=\"ngModel\" [(ngModel)]=\"editStudent.dob\" class=\"form-control\" ngModel required>\n                  <div *ngIf=\"dob.errors && dob.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!dob.errors.required\">\n                          * Select dob\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"form-group  is-empty\">\n                  <label class=\"control-label\">Gender</label>\n                  <!-- <input type=\"text\" name=\"gender\" ngModel=\"gender\" class=\"form-control\"  ngModel required > -->\n                  <select name=\"gender\" #gender=\"ngModel\" [(ngModel)]=\"editStudent.gender\" class=\"form-control\" ngModel required>\n               <option value=\"\" disabled> Gender </option>\n               <option value=\"Male\">   Male </option>\n               <option value=\"Female\"> Female </option>\n               <option value=\"Other\">  Other </option>\n           </select>\n                  <div *ngIf=\"gender.errors && gender.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!gender.errors.required\">\n                          * Select gender\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">Mobile Nmuber</label>\n                  <input type=\"text\" name=\"mobilenumber\" pattern=\"[0-9]+\" [(ngModel)]=\"editStudent.mobilenumber\" minlength=\"10\" maxlength=\"10\" #mobilenumber=\"ngModel\" class=\"form-control\" ngModel required>\n                  <div *ngIf=\"mobilenumber.errors && mobilenumber.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!mobilenumber.errors.required\">\n                          * Enter mobilenumber\n                      </div>\n                      <div [hidden]=\"!mobilenumber.errors.minlength\">\n                          * Enter 10 char\n                      </div>\n                      <div [hidden]=\"!mobilenumber.errors.pattern\">\n                          * Enter numeric\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"form-group  is-empty\">\n                  <label class=\"control-label\">Date Of Joining</label>\n                  <input type=\"text\" name=\"doj\" #doj=\"ngModel\" [(ngModel)]=\"editStudent.doj\" class=\"form-control\" ngModel required>\n                  <span class=\"material-input\"></span>\n                  <div *ngIf=\"doj.errors && doj.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!doj.errors.required\">\n                          * Enter doj\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-3\">\n              <div class=\"form-group  is-empty\">\n                  <label class=\"control-label\">Standart</label>\n                  <!-- <input type=\"text\" name=\"standard\" #standard=\"ngModel\" class=\"form-control\"  ngModel required > -->\n                  <select name=\"standard\" #standard=\"ngModel\" [(ngModel)]=\"editStudent.standard\" class=\"form-control\" ngModel required>\n                  <option value=\"\" disabled> Standard </option>\n                  <option value=\"1\">   1 </option>\n                  <option value=\"2\">   2 </option>\n                  <option value=\"3\">   3 </option>\n                  <option value=\"4\">   4 </option>\n                  <option value=\"5\">   5 </option>\n                  <option value=\"6\">   6 </option>\n                  <option value=\"7\">   7 </option>\n                  <option value=\"8\">   8 </option>\n                  <option value=\"9\">   9 </option>\n                  <option value=\"10\">   10 </option>\n                  <option value=\"11\">   11 </option>\n                  <option value=\"12\">   12</option>\n              </select>\n                  <div *ngIf=\"standard.errors && standard.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!standard.errors.required\">\n                          * Enter standard\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"form-group  is-empty\">\n                  <label class=\"control-label\">Blood Group</label>\n                  <!-- <input type=\"text\" name=\"bloodgroup\" #bloodgroup=\"ngModel\" class=\"form-control\"  ngModel required > -->\n                  <select name=\"bloodgroup\" #bloodgroup=\"ngModel\" [(ngModel)]=\"editStudent.bloodgroup\" class=\"form-control\" ngModel required>\n                  <option value=\"\" disabled> Blood Group </option>\n                  <option value=\"A+\">   A+ </option>\n                  <option value=\"B+\">   B+ </option>\n                  <option value=\"O+\">   O+ </option>\n              </select>\n                  <div *ngIf=\"bloodgroup.errors && bloodgroup.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!bloodgroup.errors.required\">\n                          * Enter bloodgroup\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"form-group  is-empty\">\n                  <label class=\"control-label\">Father Occupation</label>\n                  <!-- <input type=\"text\" name=\"fatheroccupation\" #fatheroccupation=\"ngModel\" class=\"form-control\" minlength=\"4\"  ngModel required > -->\n                  <select name=\"fatheroccupation\" #fatheroccupation=\"ngModel\" [(ngModel)]=\"editStudent.fatheroccupation\" class=\"form-control\" ngModel required>\n                  <option value=\"\" disabled> Father Occupation </option>\n                  <option value=\"Employeer\">   Employeer </option>\n                  <option value=\"Goverment Employee\"> Goverment Employee </option>\n                  <option value=\"Daily wage\">  Daily wage </option>\n              </select>\n                  <div *ngIf=\"fatheroccupation.errors && fatheroccupation.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!fatheroccupation.errors.required\">\n                          * Enter fatheroccupation\n                      </div>\n                      <div [hidden]=\"!fatheroccupation.errors.minlength\">\n                          * Please fill atleast 4 character\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">Mother Occupation</label>\n                  <!-- <input type=\"text\" name=\"motheroccupation\" #motheroccupation=\"ngModel\" class=\"form-control\" minlength=\"4\" ngModel required > -->\n                  <select name=\"motheroccupation\" #motheroccupation=\"ngModel\" [(ngModel)]=\"editStudent.motheroccupation\" class=\"form-control\" ngModel required>\n                  <option value=\"\" disabled> Mother Occupation </option>\n                  <option value=\"Employeer\">   Employeer </option>\n                  <option value=\"Goverment Employee\"> Goverment Employee </option>\n                  <option value=\"Daily wage\">  Daily wage </option>\n              </select>\n                  <div *ngIf=\"motheroccupation.errors && motheroccupation.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!motheroccupation.errors.required\">\n                          * Enter motheroccupation\n                      </div>\n                      <div [hidden]=\"!motheroccupation.errors.minlength\">\n                          * Please fill atleast 4 character\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-offset-4 col-md-4 text-center\">\n              <button class=\"btn btn-primary btn-round\" type=\"submit\">Update</button>\n          </div>\n      </div>\n     \n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/editstudent/editstudent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editstudent/editstudent.component.ts ***!
  \******************************************************/
/*! exports provided: EditstudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstudentComponent", function() { return EditstudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
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



var EditstudentComponent = /** @class */ (function () {
    function EditstudentComponent(dataservice, router, route) {
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.editStudent = {
            _id: '',
            aadharnumber: '',
            bloodgroup: '',
            dob: '',
            doj: '',
            fathername: '',
            fatheroccupation: '',
            gender: '',
            mobilenumber: '',
            mothername: '',
            name: '',
            standard: '',
            motheroccupation: ''
        };
    }
    EditstudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.dataservice.getAllStudents().subscribe(function (res) {
            _this.allStudents = res;
            console.log(_this.allStudents);
            for (var i = 0; i < _this.allStudents.length; i++) {
                if (_this.id === _this.allStudents[i]._id) {
                    _this.editStudent._id = _this.allStudents[i]._id;
                    _this.editStudent.name = _this.allStudents[i].name;
                    _this.editStudent.dob = _this.allStudents[i].dob;
                    _this.editStudent.aadharnumber = _this.allStudents[i].aadharnumber;
                    _this.editStudent.fathername = _this.allStudents[i].fathername;
                    _this.editStudent.mothername = _this.allStudents[i].mothername;
                    _this.editStudent.gender = _this.allStudents[i].gender;
                    _this.editStudent.doj = _this.allStudents[i].doj;
                    _this.editStudent.bloodgroup = _this.allStudents[i].bloodgroup;
                    _this.editStudent.mobilenumber = _this.allStudents[i].mobilenumber;
                    _this.editStudent.standard = _this.allStudents[i].standard;
                    _this.editStudent.fatheroccupation = _this.allStudents[i].fatheroccupation;
                    _this.editStudent.motheroccupation = _this.allStudents[i].motheroccupation;
                }
            }
        });
    };
    EditstudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editstudent',
            template: __webpack_require__(/*! ./editstudent.component.html */ "./src/app/editstudent/editstudent.component.html"),
            styles: [__webpack_require__(/*! ./editstudent.component.css */ "./src/app/editstudent/editstudent.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditstudentComponent);
    return EditstudentComponent;
}());



/***/ }),

/***/ "./src/app/incommingtransfer/incommingtransfer.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/incommingtransfer/incommingtransfer.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    padding-bottom: 0px;\r\n    margin: 0px 0 0 0;\r\n}\r\n.alert{\r\n    padding: 0px;\r\n    margin-bottom: 0px;\r\n    font-size: 1rem;\r\n}\r\n.secondRow{\r\n    margin-top: 2rem;\r\n}\r\nh4{\r\n    font-size: 1.15rem;\r\n}\r\n.btnTabs{\r\npadding:0 7.15rem; \r\n}\r\n@media (min-width:768px) and (max-width:992px){\r\n    .btnTabs{\r\n        padding:0 2.4rem; \r\n        } \r\n}\r\n"

/***/ }),

/***/ "./src/app/incommingtransfer/incommingtransfer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/incommingtransfer/incommingtransfer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" style=\"margin-top: 2.5rem\">\n\n  \n          <div class=\"container\">\n              <div class=\"col-md-12\">\n                  <div class=\"tab-content\">\n                      <div class=\"tab-pane active\" id=\"tab1\">\n                          <div class=\"table-responsive\">\n                              <table class=\"table\">\n                                  <thead>\n                                      <tr>\n                                          <th class=\"text-center\">#</th>\n                                          <th>Standard</th>\n                                          <th>Name</th>\n                                          <th>Gender</th>\n                                          <th>Transfer To School </th>\n                                          <th>Reason</th>\n                                          <th>Date</th>\n                                          <th class=\"text-right\">Actions</th>\n                                      </tr>\n                                  </thead>\n                                  <tbody>\n                                      <tr >\n                                          <td class=\"text-center\">1</td>\n                                          <td>12</td>\n                                          <td>Gowtham</td>\n                                          <td>Male</td>\n                                          <td>z.k.m.hr.sec.school</td>\n                                          <td>pass</td>\n                                          <td>20-06-2018</td>\n                                          <td class=\"td-actions text-right\">\n                                              <a routerLink=\"/app/viewstudent\">\n                                                <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                        <i class=\"material-icons\">remove_red_eye</i>\n                                                    </button></a>\n                                            <a routerLink=\"/app/outgoingtransfer\"><button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button></a>\n                                              <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <hr>\n     \n   \n     \n</div>"

/***/ }),

/***/ "./src/app/incommingtransfer/incommingtransfer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/incommingtransfer/incommingtransfer.component.ts ***!
  \******************************************************************/
/*! exports provided: IncommingtransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncommingtransferComponent", function() { return IncommingtransferComponent; });
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

var IncommingtransferComponent = /** @class */ (function () {
    function IncommingtransferComponent() {
    }
    IncommingtransferComponent.prototype.ngOnInit = function () {
    };
    IncommingtransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incommingtransfer',
            template: __webpack_require__(/*! ./incommingtransfer.component.html */ "./src/app/incommingtransfer/incommingtransfer.component.html"),
            styles: [__webpack_require__(/*! ./incommingtransfer.component.css */ "./src/app/incommingtransfer/incommingtransfer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IncommingtransferComponent);
    return IncommingtransferComponent;
}());



/***/ }),

/***/ "./src/app/landingpage/landingpage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landingContainer{\r\n    padding: 0;\r\n}\r\n.footer{\r\n    font-size:10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/landingpage/landingpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <nav class=\"navbar navbar-primary navbar-fixed-top\"    id=\"sectionsNav\">\n <div class=\"container landingContainer\" style=\"position: relative\">\n   <!-- Brand and toggle get grouped for better mobile display -->\n   <div class=\"navbar-header\">\n     <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n       <span class=\"sr-only\">Toggle navigation</span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n     </button>\n   </div>\n\n   <div class=\"collapse navbar-collapse\">\n\n     <ul class=\"nav navbar-nav navbar-right\" >\n        \n       <li class=\"dropdown\" id=\"headerNavigationItems\">\n         <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n           <i class=\"material-icons\"></i> Students\n           <b class=\"caret\"></b>\n         </a>\n         <ul class=\"dropdown-menu dropdown-with-icons\">\n           <li>\n             <a routerLink=\"/app/student\">\n               <i class=\"fas fa-exchange-alt fa-lg\"></i>Add Students\n             </a>\n           </li>\n           <li>\n            <a routerLink=\"/app/liststudent\">\n              <i class=\"fas fa-exchange-alt fa-lg\"></i>List Of Students\n            </a>\n          </li>\n         </ul>\n       </li>\n\n\n\n       <li class=\"dropdown\" id=\"headerNavigationItems\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n          <i class=\"material-icons\"></i> Transfer students\n          <b class=\"caret\"></b>\n        </a>\n        <ul class=\"dropdown-menu dropdown-with-icons\">\n          <li>\n            <a routerLink=\"/app/incommingtransfer\">\n              <i class=\"fas fa-exchange-alt fa-lg\"></i>Incomming Transfer\n            </a>\n          </li>\n          <li>\n           <a routerLink=\"/app/outgoingtransfer\">\n             <i class=\"fas fa-exchange-alt fa-lg\"></i>Outgoing Transfer\n           </a>\n         </li>\n         <li>\n            <a routerLink=\"/app/approved\">\n              <i class=\"fas fa-exchange-alt fa-lg\"></i>Apporved List\n            </a>\n          </li>\n        </ul>\n      </li>\n      \n   \n\n      \n\n       <li class=\"dropdown LandingLogout \" id=\"headerNavigationItems\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n             <i class=\"fas fa-user fa-lg\"></i> Users\n             <b class=\"caret\"></b>\n           </a>\n           <ul class=\"dropdown-menu dropdown-with-icons\">\n             <li>\n               <a routerLink=\"/login\">\n                 <i class=\"fas fa-power-off fa-lg\"></i> Logout\n               </a>\n             </li>\n           </ul>\n         </li>\n     </ul>\n\n   </div>\n   <img src=\"./../../assets/img/school/logo.png\" style=\"color:white;position: absolute;left:20px;top:0;\" width=\"160\">\n\n </div>\n</nav>\n<div class=\"section\">\n <router-outlet></router-outlet>\n</div>\n  </div>\n  <hr>\n   <div class=\"row text-center footer\">\n       <div class=\"col-md-3\">\n           <h4>Powered by School</h4>\n       </div>\n       <div class=\"col-md-6\"></div>\n       <div class=\"col-md-3\">\n           <h4>Copyrights @ Triodesk</h4>\n       </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landingpage/landingpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.ts ***!
  \******************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
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

var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
    }
    LandingpageComponent.prototype.ngOnInit = function () {
    };
    LandingpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landingpage',
            template: __webpack_require__(/*! ./landingpage.component.html */ "./src/app/landingpage/landingpage.component.html"),
            styles: [__webpack_require__(/*! ./landingpage.component.css */ "./src/app/landingpage/landingpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/app/listoutgoingtransfer/listoutgoingtransfer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/listoutgoingtransfer/listoutgoingtransfer.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    padding-bottom: 0px;\r\n    margin: 0px 0 0 0;\r\n}\r\n.alert{\r\n    padding: 0px;\r\n    margin-bottom: 0px;\r\n    font-size: 1rem;\r\n}\r\n.secondRow{\r\n    margin-top: 2rem;\r\n}\r\nh4{\r\n    font-size: 1.15rem;\r\n}\r\n.btnTabs{\r\npadding:0 7.15rem; \r\n}\r\n@media (min-width:768px) and (max-width:992px){\r\n    .btnTabs{\r\n        padding:0 2.4rem; \r\n        } \r\n}\r\n"

/***/ }),

/***/ "./src/app/listoutgoingtransfer/listoutgoingtransfer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/listoutgoingtransfer/listoutgoingtransfer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" style=\"margin-top: 2.5rem\">\n\n  \n    <div class=\"container\">\n        <div class=\"col-md-12\">\n            <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"tab1\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\">#</th>\n                                    <th>Standard</th>\n                                    <th>Name</th>\n                                    <th>Gender</th>\n                                    <th>Transfer To School </th>\n                                    <th>Reason</th>\n                                    <th>Date</th>\n                                    <th class=\"text-right\">Actions</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let student of allStudents\">\n                                    <td class=\"text-center\">{{student.id}}</td>\n                                    <td>{{student.standard}}</td>\n                                    <td>{{student.name}}</td>\n                                    <td>{{student.gender}}</td>\n                                    <td>{{student.school}}</td>\n                                    <td>{{student.reason}}</td>\n                                    <td>{{student.date}}</td>\n                                    <td class=\"td-actions text-right\">\n                                        <a routerLink=\"/app/viewtransfer/{{student.id}}\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                      <a routerLink=\"/app/outgoingtransfer\"><button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                            <i class=\"material-icons\">edit</i>\n                                        </button></a>\n                                        <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/listoutgoingtransfer/listoutgoingtransfer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/listoutgoingtransfer/listoutgoingtransfer.component.ts ***!
  \************************************************************************/
/*! exports provided: ListoutgoingtransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListoutgoingtransferComponent", function() { return ListoutgoingtransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
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



var ListoutgoingtransferComponent = /** @class */ (function () {
    function ListoutgoingtransferComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    ListoutgoingtransferComponent.prototype.ngOnInit = function () {
        this.getAllStudents();
    };
    ListoutgoingtransferComponent.prototype.getAllStudents = function () {
        var _this = this;
        this.dataservice.getAllTransfer().subscribe(function (res) {
            _this.allStudents = res;
            console.log(_this.allStudents);
        });
    };
    ListoutgoingtransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listoutgoingtransfer',
            template: __webpack_require__(/*! ./listoutgoingtransfer.component.html */ "./src/app/listoutgoingtransfer/listoutgoingtransfer.component.html"),
            styles: [__webpack_require__(/*! ./listoutgoingtransfer.component.css */ "./src/app/listoutgoingtransfer/listoutgoingtransfer.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListoutgoingtransferComponent);
    return ListoutgoingtransferComponent;
}());



/***/ }),

/***/ "./src/app/liststudent/liststudent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/liststudent/liststudent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh4{\r\n    font-size: 1.15rem;\r\n}\r\n.notification{\r\n    font-size:15px;\r\n   background:lightcoral;\r\n   color:white;\r\n   text-align: center;\r\n   padding:4px;\r\n}\r\n.nav a\r\n{\r\n    font-size:11px;\r\n}"

/***/ }),

/***/ "./src/app/liststudent/liststudent.component.html":
/*!********************************************************!*\
  !*** ./src/app/liststudent/liststudent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-6\">\n              <h5>Students List</h5>\n          </div>\n          <div class=\"col-md-6 col-sm-6 col-6\" style=\"text-align:right\">\n                  <a routerLink=\"/app\"> <button class=\"btn btn-primary\" style=\"padding:10px;\">   <i class=\"material-icons\">add</i>Add Students</button></a>\n              </div>\n      </div>    <div class=\"row\">\n  <div class=\"col-md-3 col-sm-5\">\n      <ul class=\"nav nav-pills nav-pills-btn-primary\">\n          <li class=\"active\">\n              <a href=\"#tab1\" data-toggle=\"tab\">12<sup>th</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab2\" data-toggle=\"tab\">11<sup>th</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab3\" data-toggle=\"tab\">10<sup>th</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab4\" data-toggle=\"tab\">9<sup>th</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab5\" data-toggle=\"tab\">8<sup>th</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab6\" data-toggle=\"tab\">7th Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab7\" data-toggle=\"tab\">6<sup>th</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab8\" data-toggle=\"tab\">5<sup>th</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab9\" data-toggle=\"tab\">4<sup>th</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab10\" data-toggle=\"tab\">3<sup>rd</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab11\" data-toggle=\"tab\">2<sup>nd</sup> Standard</a>\n          </li>\n          <li>\n              <a href=\"#tab12\" data-toggle=\"tab\">1<sup>st</sup> Standard</a>\n          </li>\n\n      </ul>\n  </div>\n\n  <div class=\"col-md-9 col-sm-7\">\n      <div class=\"tab-content\">\n          <div class=\"tab-pane active\" id=\"tab1\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor='let students of twelthStudents;let i=index'>\n                              <td class=\"text-center\">1</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/viewstudent/{{students.id}}\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"twelthStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          \n          <div class=\"tab-pane\" id=\"tab2\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor='let students of eleventhStudents;let i=index'>\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"eleventhStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab3\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let students of tenthStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"tenthStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab4\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let students of ninethStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"ninethStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab5\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let students of eighthStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"eighthStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab6\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let students of seventhStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"seventhStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab7\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let students of sixthStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"sixthStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab8\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let students of fifthStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"fifthStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab9\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let students of fourthStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"fourthStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab10\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                        \n                          <tr *ngFor=\"let students of thirdStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"thirdStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab11\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let students of secondStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <div  class=\"alert alert-success notification\" *ngIf=\"secondStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n          <div class=\"tab-pane\" id=\"tab12\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                              <th class=\"text-center\">#</th>\n                              <th>Name</th>\n                              <th>Gender</th>\n                              <th>FatherName</th>\n                              <th class=\"text-right\">Mobile</th>\n                              <th class=\"text-right\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                             \n                          <tr *ngFor=\"let students of firstStudents;let i=index\">\n                              <td class=\"text-center\">{{i+1}}</td>\n                              <td>{{students.name}}</td>\n                              <td>{{students.gender}}</td>\n                              <td>{{students.fathername}}</td>\n                              <td class=\"text-right\">{{students.mobilenumber}}</td>\n                              <td class=\"td-actions text-right\">\n                                      <a routerLink=\"/app/addmission\">\n                                          <button type=\"button\" rel=\"tooltip\"  class=\"btn btn-info\" data-original-title=\"\" title=\"\">\n                                                  <i class=\"material-icons\">remove_red_eye</i>\n                                              </button></a>\n                                  <a routerLink='/app/editstudent/{{students.id}}'>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success\" data-original-title=\"\" title=\"\">\n                                          <i class=\"material-icons\">edit</i>\n                                      </button>\n                                  </a>\n                                  <button type=\"button\" rel=\"tooltip\" (click)=\"deleteStudent(students)\" class=\"btn btn-danger\" data-original-title=\"\" title=\"\">\n                                      <i class=\"material-icons\">close</i>\n                                  </button>\n                              </td>\n                          </tr>\n                         \n                      </tbody>\n                  </table>\n                  <div  class=\"notification\" *ngIf=\"firstStudents==0\">\n                          No Records Found\n                   </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/liststudent/liststudent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/liststudent/liststudent.component.ts ***!
  \******************************************************/
/*! exports provided: ListstudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListstudentComponent", function() { return ListstudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
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



var ListstudentComponent = /** @class */ (function () {
    function ListstudentComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.twelthStudents = [];
        this.eleventhStudents = [];
        this.tenthStudents = [];
        this.ninethStudents = [];
        this.eighthStudents = [];
        this.seventhStudents = [];
        this.sixthStudents = [];
        this.fifthStudents = [];
        this.fourthStudents = [];
        this.thirdStudents = [];
        this.secondStudents = [];
        this.firstStudents = [];
    }
    ListstudentComponent.prototype.ngOnInit = function () {
        this.getAllStudents();
    };
    ListstudentComponent.prototype.getAllStudents = function () {
        var _this = this;
        this.dataservice.getAllStudents().subscribe(function (res) {
            _this.allStudents = res;
            for (var i = 0; i < _this.allStudents.length; i++) {
                if (_this.allStudents[i].standard === "12") {
                    _this.twelthStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "11") {
                    _this.eleventhStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "10") {
                    _this.tenthStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "9") {
                    _this.ninethStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "8") {
                    _this.eighthStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "7") {
                    _this.seventhStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "6") {
                    _this.sixthStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "5") {
                    _this.fifthStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "4") {
                    _this.fourthStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "3") {
                    _this.thirdStudents.push(_this.allStudents[i]);
                }
                else if (_this.allStudents[i].standard === "2") {
                    _this.secondStudents.push(_this.allStudents[i]);
                }
                else {
                    _this.firstStudents.push(_this.allStudents[i]);
                }
            }
        });
    };
    ListstudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liststudent',
            template: __webpack_require__(/*! ./liststudent.component.html */ "./src/app/liststudent/liststudent.component.html"),
            styles: [__webpack_require__(/*! ./liststudent.component.css */ "./src/app/liststudent/liststudent.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListstudentComponent);
    return ListstudentComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header .container {\r\n    padding-top: 100px;\r\n    color: #FFFFFF;\r\n}\r\n.card img {\r\n    width: 80%;\r\n    height: auto;\r\n    margin-left: 1.5rem;\r\n}\r\n.footer{\r\n    margin-bottom: 1rem;\r\n}\r\n.alert{\r\n    padding: 0px;\r\n    margin-bottom: 0px;\r\n    font-size: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header header-filter\" style=\"background-image: url('../assets/img/pexels-photo-681331.jpeg'); background-size: cover; background-position: top center;\">\n  <div id=\"msg\" *ngIf=\"!isNewUser\">\n          <p *ngIf=\"errorMessage.length > 0\" class=\"alert alert-danger alert-dismissible fade show\">\n              {{errorMessage}}</p>\n          <p  *ngIf=\"error.message.length > 0\" class=\"alert alert-danger alert-dismissible fade show\">\n              {{error.message}}</p>\n      </div>\n  <div class=\"container\">\n         \n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n        <div class=\"card card-signup\">\n          <!-- <form class=\"form\" method=\"\" action=\"\"> -->\n          <form #personForm=\"ngForm\" (ngSubmit)=\"onLogin(personForm.value)\">    \n            <div class=\"header header-primary text-center\">\n              <h4 class=\"card-title\">School</h4>\n              <!-- <div class=\"social-line\">\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n                  <i class=\"fa fa-facebook-square\"></i>\n                </a>\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n                  <i class=\"fa fa-google-plus\"></i>\n                </a>\n              </div> -->\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-offset-4 col-md-4 col-xs-offset-4 col-xs-4\">\n                  <div class=\"school_logo text-center\">\n                    <img src=\"./../../assets/img/school/logo1.png\"   alt=\"Circle Image\" class=\"img-circle img-responsive\">\n                  </div>\n                </div>\n            </div>\n            <p class=\"description text-center\">Our Secure Application</p>\n            <div class=\"card-content\">\n\n              <!-- <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"material-icons\">face</i>\n                </span>\n                <div class=\"form-group is-empty\"><input type=\"text\" class=\"form-control\" placeholder=\"First Name...\"><span class=\"material-input\"></span></div>\n              </div> -->\n            \n\n              <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">email</i>\n                      </span>\n                          <div class=\"form-group  is-empty\">\n                        <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Email...\"> -->\n                        <input type=\"username\" name=\"email\" class=\"form-control\" id=\"name\" [(ngModel)]=\"email\" placeholder=\"UserName\"  #Username=\"ngModel\" minlength=\"6\" required ngModel>\n\n                        <div *ngIf=\"Username.errors && (Username.touched|| Username.dirty)\" class=\"alert text-primary\">\n                            <div  [hidden]=\"!Username.errors.required\">\n                                *Emailid required\n                            </div>\n                            <div [hidden]=\"!Username.errors.minlength\">\n                                  *Please enter valid Username\n                            </div>                                                      \n                        </div>\n                        \n                        <span class=\"material-input\"></span></div>\n                    </div>\n      \n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">lock_outline</i>\n                      </span>\n                          <div class=\"form-group  is-empty\">\n                        <!-- <input type=\"password\" placeholder=\"Password...\" class=\"form-control\"> -->\n                        <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" #Password=\"ngModel\" minlength=\"8\" required ngModel>\n                        <div *ngIf=\"Password.errors && (Password.touched|| Password.dirty)\" class=\"alert text-danger\">\n                            <div [hidden]=\"!Password.errors.required\">\n                                *Password requried\n                              </div>\n                              <div [hidden]=\"!Password.errors.minlength\">\n                                 *Please enter minimum 6 character\n                              </div>\n                        </div>  \n                        <span class=\"material-input\"></span></div>\n                    </div>\n      \n              <!-- If you want to add a checkbox to this form, uncomment this code\n\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                  Subscribe to newsletter\n                </label>\n              </div> -->\n            </div>\n            <div class=\"footer text-center\">\n              <!-- <a routerLink=\"/landingpage\" class=\"btn btn-primary btn-round\">Get Started</a> -->\n                              <button class=\"btn btn-primary btn-round\" [disabled]=\"!personForm.form.valid\">Login</button>\n            </div>\n            <div class=\"text-center\">\n                <h6><a  routerLink=\"/signup\" >Singup Click Here..</a></h6>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
/* harmony import */ var _service_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth */ "./src/app/service/auth.ts");
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
    function LoginComponent(router, dataservice, authService) {
        this.router = router;
        this.dataservice = dataservice;
        this.authService = authService;
        this.email = '';
        this.password = '';
        this.errorMessage = '';
        this.error = { name: '', message: '' };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (this.validateForm(this.email, this.password)) {
            this.authService.loginWithEmail(this.email, this.password)
                .then(function () { return _this.router.navigate(['/app']); })
                .catch(function (_error) {
                _this.error = _error;
                alert(_error);
                _this.router.navigate(['/login']);
            });
        }
    };
    LoginComponent.prototype.validateForm = function (email, password) {
        if (email.length === 0) {
            this.errorMessage = 'Please enter Email!';
            return false;
        }
        if (password.length === 0) {
            this.errorMessage = 'Please enter Password!';
            return false;
        }
        if (password.length < 6) {
            this.errorMessage = 'Password should be at least 6 characters!';
            return false;
        }
        this.errorMessage = '';
        return true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_data__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _service_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/outgoingtransfer/outgoingtransfer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/outgoingtransfer/outgoingtransfer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    padding-bottom: 0px;\r\n    margin: 0px 0 0 0;\r\n}\r\n.alert{\r\n    padding: 0px;\r\n    margin-bottom: 0px;\r\n    font-size: 1rem;\r\n}\r\n.secondRow{\r\n    margin-top: 2rem;\r\n}\r\nh4{\r\n    font-size: 1.15rem;\r\n}\r\n.btnTabs{\r\npadding:0 7.15rem; \r\n}\r\n@media (min-width:768px) and (max-width:992px){\r\n    .btnTabs{\r\n        padding:0 2.4rem; \r\n        } \r\n}\r\n"

/***/ }),

/***/ "./src/app/outgoingtransfer/outgoingtransfer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/outgoingtransfer/outgoingtransfer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n\n    </div>\n    <div class=\"col-md-2\">\n      <a routerLink=\"/app/listoutgoingtransfer\"><button class=\"btn btn-primary\">List Of Outgoing Transfer</button></a>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <h5>Transfer Student</h5>\n  <form #transferForm=\"ngForm\" (ngSubmit)='transferStudent(transferForm.value)' method=\"#\" action=\"#\">\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">Select Standard</label>\n                  <!-- <input type=\"text\" name=\"standard\" #standard=\"ngModel\" class=\"form-control\"  ngModel required > -->\n                  <select name=\"standard\" (change)=\"selectStandard(transferForm.value)\" #standard=\"ngModel\" class=\"form-control\" ngModel required>\n                      <option value=\"\" disabled>Select Standard </option>\n                      <option value=\"1\"> 1 </option>\n                      <option value=\"2\"> 2 </option>\n                      <option value=\"3\"> 3 </option>\n                      <option value=\"4\"> 4 </option>\n                      <option value=\"5\"> 5 </option>\n                      <option value=\"6\"> 6 </option>\n                      <option value=\"7\"> 7 </option>\n                      <option value=\"8\"> 8 </option>\n                      <option value=\"9\"> 9 </option>\n                      <option value=\"10\"> 10 </option>\n                      <option value=\"11\"> 11 </option>\n                      <option value=\"12\"> 12</option>\n                  </select>\n                  <div *ngIf=\"standard.errors && standard.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!standard.errors.required\">\n                          * Select standard\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">Select Student</label>\n                  <select name=\"name\" #name=\"ngModel\"  class=\"form-control\"  ngModel required>\n                      <option value=\"\" disabled>Select Name </option>\n                      <option *ngFor=\"let students of selectedStandard\"  value=\"{{students._id}}\">{{students.name}}</option>\n                  </select>\n\n\n                  <div *ngIf=\"name.errors && name.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!name.errors.required\">\n                          * Enter Name\n                      </div>\n                      <div [hidden]=\"!name.errors.minlength\">\n                          * Please fill atleast 4 character\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">Select To Standard</label>\n                  <select name=\"tostd\" #tostd=\"ngModel\" class=\"form-control\" ngModel required>\n                      <option value=\"\" disabled>Select To Std </option>\n                      <option *ngFor=\"let stands of toStd \" value=\"{{stands}}\">{{stands}} </option>\n                  </select>\n                  <div *ngIf=\"tostd.errors && tostd.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!tostd.errors.required\">\n                          * select to standard\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <!-- <div class=\"col-md-3\">\n                  <div class=\"form-group is-empty\">\n                      <label class=\"control-label\">Select To Gender</label>\n                      <input type=\"text\" name=\"gender\" #gender=\"ngModel\" value=\"{{Getage}}\" class=\"form-control\"  ngModel required>\n                      <div *ngIf=\"tostd.errors && tostd.touched\" class=\"alert text-danger\">\n                          <div [hidden]=\"!tostd.errors.required\">\n                              * select to standard\n                          </div>\n                      </div>\n                      <span class=\"material-input\"></span>\n                  </div>\n              </div> -->\n      </div>\n      <div class=\"row secondRow\">\n          <div class=\"col-md-4\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">To School</label>\n                  <input type=\"text\" name=\"school\" #school=\"ngModel\" class=\"form-control\" ngModel required>\n                  <div *ngIf=\"school.errors && school.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!school.errors.required\">\n                          * Enter to School\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"form-group is-empty\">\n                  <label class=\"control-label\">Transfer Date</label>\n                  <input type=\"date\" name=\"date\" #date=\"ngModel\" class=\"form-control\" ngModel required>\n                  <div *ngIf=\"date.errors && date.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!date.errors.required\">\n                          * Select date\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"form-group  is-empty\">\n                  <label class=\"control-label\">Reason For Transfer</label>\n                  <input type=\"text\" name=\"reason\" #reason=\"ngModel\"  class=\"form-control\" ngModel required>\n                  <div *ngIf=\"date.errors && reason.touched\" class=\"alert text-danger\">\n                      <div [hidden]=\"!reason.errors.required\">\n                          * Enter reason\n                      </div>\n                  </div>\n                  <span class=\"material-input\"></span>\n              </div>\n          </div>\n        \n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-offset-4 col-md-4 text-center\">\n              <button class=\"btn btn-primary btn-round\"   type=\"submit\" [disabled]=\"!transferForm.form.valid\">Transfer Student</button>\n          </div>\n      </div>\n      <hr>\n  \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/outgoingtransfer/outgoingtransfer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/outgoingtransfer/outgoingtransfer.component.ts ***!
  \****************************************************************/
/*! exports provided: OutgoingtransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutgoingtransferComponent", function() { return OutgoingtransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
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



var OutgoingtransferComponent = /** @class */ (function () {
    function OutgoingtransferComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.toStd = [];
        this.selectedStandard = [];
        this.selected_Id = [];
        this.remainingStudents = [];
    }
    OutgoingtransferComponent.prototype.ngOnInit = function () {
        this.getAllStudents();
    };
    OutgoingtransferComponent.prototype.seletedStudent = function (value) {
        var data = {
            id: value.id
        };
        console.log("test" + data);
    };
    OutgoingtransferComponent.prototype.transferStudent = function (value) {
        var _this = this;
        console.log("my" + value);
        this.dataservice.transferStudent1(value).subscribe(function (res) {
            _this.transferstudent = res;
        });
    };
    OutgoingtransferComponent.prototype.getAllStudents = function () {
        var _this = this;
        this.dataservice.getAllStudents().subscribe(function (res) {
            _this.allStudents = res;
            console.log(_this.allStudents);
        });
    };
    OutgoingtransferComponent.prototype.selectStandard = function (value) {
        this.std = value.standard;
        this.selectedStandard = [];
        for (var i = 0; i < this.allStudents.length; i++) {
            if (this.allStudents[i].standard === this.std) {
                this.selectedStandard.push(this.allStudents[i]);
            }
            else
                this.remainingStudents.push(this.allStudents[i]);
        }
        this.toStd = [];
        for (var k = 0; k < this.std.length; k++) {
            this.toStd.push(this.std);
            this.toStd.push(JSON.stringify(parseInt(this.std) + 1));
        }
        console.log("all data" + this.selectedStandard);
    };
    OutgoingtransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outgoingtransfer',
            template: __webpack_require__(/*! ./outgoingtransfer.component.html */ "./src/app/outgoingtransfer/outgoingtransfer.component.html"),
            styles: [__webpack_require__(/*! ./outgoingtransfer.component.css */ "./src/app/outgoingtransfer/outgoingtransfer.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OutgoingtransferComponent);
    return OutgoingtransferComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.ts":
/*!*********************************!*\
  !*** ./src/app/service/auth.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
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



// import { HttpModule } from '@angular/http';
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.authState = null;
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    AuthService.prototype.loginWithEmail = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            console.log(user);
            return user;
            // this.authState = user
        })
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/data.ts":
/*!*********************************!*\
  !*** ./src/app/service/data.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//  import { database } from 'firebase';
// import { AngularFireDatabase } from 'angularfire2/database';
// import 'rxjs/add/operator/map'
// import { map } from 'rxjs/operators';
var DataService = /** @class */ (function () {
    function DataService(http, router) {
        this.http = http;
        this.router = router;
    }
    DataService.prototype.ngOnInit = function () {
    };
    DataService.prototype.getAllStudents = function () {
        var _this = this;
        return this.http.get('https://5bdbe65b433b4f0013e6e024.mockapi.io/student')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.allStudents = data.json(); }));
    };
    DataService.prototype.transferStudent1 = function (value) {
        var _this = this;
        return this.http.post('https://5bdbe65b433b4f0013e6e024.mockapi.io/outgoing', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.Tstudent = data.json(); }));
    };
    DataService.prototype.getAllTransfer = function () {
        var _this = this;
        return this.http.get('https://5bdbe65b433b4f0013e6e024.mockapi.io/outgoing')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.Tstudent1 = data.json(); }));
    };
    DataService.prototype.apporved = function (value) {
        var _this = this;
        return this.http.post('https://5bdbe65b433b4f0013e6e024.mockapi.io/approved', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.Tstudent2 = data.json(); }));
    };
    DataService.prototype.getapporved = function () {
        var _this = this;
        return this.http.get('https://5bdbe65b433b4f0013e6e024.mockapi.io/approved')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.Tstudent3 = data.json(); }));
    };
    // newUser(value){
    // return  this.http.post('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/fslogin',value)
    //   .pipe(map(data =>{
    //     if(data){
    //       alert("Please Login");
    //     }
    //     console.log(data)
    //   }))
    // }
    // newUsers(value)
    // { 
    //   var list;
    //   this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/fslogin',value)
    //   .pipe(map(data1 =>{
    //     if(data1==value)
    //     {
    //       this.router.navigate(['/landpage/home']); 
    //     }
    //     else{
    //       alert("bye");
    //     }
    //   }))
    // }
    /* POST NEW NEWS */
    DataService.prototype.createStudent = function (value) {
        var _this = this;
        return this.http.post('https://5bdbe65b433b4f0013e6e024.mockapi.io/student', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.cstudent = data.json(); }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header .container {\r\n    padding-top: 100px;\r\n    color: #FFFFFF;\r\n}\r\n.card img {\r\n    width: 80%;\r\n    height: auto;\r\n    margin-left: 1.5rem;\r\n}\r\n.footer{\r\n    margin-bottom: 1rem;\r\n}\r\n.alert{\r\n    padding: 0px;\r\n    margin-bottom: 0px;\r\n    font-size: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header header-filter\" style=\"background-image: url('../assets/img/pexels-photo-681331.jpeg'); background-size: cover; background-position: top center;\">\n  <div id=\"msg\" *ngIf=\"!isNewUser\">\n          <p *ngIf=\"errorMessage.length > 0\" class=\"alert alert-danger alert-dismissible fade show\">\n              {{errorMessage}}</p>\n          <p  *ngIf=\"error.message.length > 0\" class=\"alert alert-danger alert-dismissible fade show\">\n              {{error.message}}</p>\n      </div>\n  <div class=\"container\">\n         \n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n        <div class=\"card card-signup\" >\n          <!-- <form class=\"form\" method=\"\" action=\"\"> -->\n          <form #personForm=\"ngForm\"(ngSubmit)=\"onSignup(personForm.value)\">    \n            <div class=\"header header-primary text-center\">\n              <h4 class=\"card-title\">Register in</h4>\n              <!-- <div class=\"social-line\">\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n                  <i class=\"fa fa-facebook-square\"></i>\n                </a>\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n                  <i class=\"fa fa-google-plus\"></i>\n                </a>\n              </div> -->\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-md-offset-4 col-md-4 col-xs-offset-4 col-xs-4\">\n                  <div class=\"school_logo text-center\">\n                    <img src=\"./../../assets/img/school/logo1.png\"   alt=\"Circle Image\" class=\"img-circle img-responsive\">\n                  </div>\n                </div>\n            </div>\n            <p class=\"description text-center\">Our Secure Application</p>\n            <div class=\"card-content\">\n\n              <!-- <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"material-icons\">face</i>\n                </span>\n                <div class=\"form-group is-empty\"><input type=\"text\" class=\"form-control\" placeholder=\"First Name...\"><span class=\"material-input\"></span></div>\n              </div> -->\n            \n\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"material-icons\">email</i>\n                </span>\n                    <div class=\"form-group  is-empty\">\n                  <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Email...\"> -->\n                  <input type=\"username\" name=\"email\" class=\"form-control\" id=\"name\" [(ngModel)]=\"email\" placeholder=\"UserName\"  #Username=\"ngModel\" minlength=\"6\" required ngModel>\n\n                  <div *ngIf=\"Username.errors && (Username.touched|| Username.dirty)\" class=\"alert text-primary\">\n                      <div  [hidden]=\"!Username.errors.required\">\n                          *Emailid required\n                      </div>\n                      <div [hidden]=\"!Username.errors.minlength\">\n                            *Please enter valid Username\n                      </div>                                                      \n                  </div>\n                  \n                  <span class=\"material-input\"></span></div>\n              </div>\n\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"material-icons\">lock_outline</i>\n                </span>\n                    <div class=\"form-group  is-empty\">\n                  <!-- <input type=\"password\" placeholder=\"Password...\" class=\"form-control\"> -->\n                  <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" #Password=\"ngModel\" minlength=\"8\" required ngModel>\n                  <div *ngIf=\"Password.errors && (Password.touched|| Password.dirty)\" class=\"alert text-danger\">\n                      <div [hidden]=\"!Password.errors.required\">\n                          *Password requried\n                        </div>\n                        <div [hidden]=\"!Password.errors.minlength\">\n                           *Please enter minimum 6 character\n                        </div>\n                  </div>  \n                  <span class=\"material-input\"></span></div>\n              </div>\n              <!-- If you want to add a checkbox to this form, uncomment this code\n\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                  Subscribe to newsletter\n                </label>\n              </div> -->\n            </div>\n            <div class=\"footer text-center\">\n              <!-- <a routerLink=\"/landingpage\" class=\"btn btn-primary btn-round\">Get Started</a> -->\n                              <button class=\"btn btn-primary btn-round\" [disabled]=\"!personForm.form.valid\">Register</button>\n            </div>\n            <div class=\"text-center\">\n                <h6><a  routerLink=\"/login\" >Already account...? Click Here..</a></h6>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
/* harmony import */ var _service_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth */ "./src/app/service/auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(dataservice, authService, router, afauth) {
        this.dataservice = dataservice;
        this.authService = authService;
        this.router = router;
        this.afauth = afauth;
        this.user = {};
        this.userId = {
            uid: ''
        };
        this.email = '';
        this.password = '';
        this.errorMessage = '';
        this.error = { name: '', message: '' };
    }
    // onSubmit = function (user) {
    //   console.log(user);
    // }
    SignupComponent.prototype.onSignup = function (user) {
        var _this = this;
        this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(function (data) {
            _this.userId.uid = _this.afauth.auth.currentUser.uid;
            console.log(_this.userId.uid);
            alert('Registered !');
        })
            .catch(function (_error) {
            _this.error = _error;
            _this.router.navigate(['/signup']);
        });
        console.log(user.email, user.password, this.userId.uid);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _service_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr{\r\n    margin-top: 100px;\r\n}\r\nh4{\r\n    font-size: 1.15rem;\r\n}\r\n.alert{\r\n    padding: 0px;\r\n    margin-bottom: 0px;\r\n    font-size: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h5>Create Student</h5>\n  <form #addmissionForm=\"ngForm\" (ngSubmit)='newStudent(addmissionForm.value)' \n  method=\"#\" action=\"#\">\n     <div class=\"row\">\n        <div class=\"col-md-3\">\n           <div class=\"form-group label-floating is-empty\">\n       <label class=\"control-label\">Name</label>\n               <input type=\"text\" name=\"name\" #name=\"ngModel\" class=\"form-control\" minlength=\"4\" ngModel required >\n               <div *ngIf=\"name.errors && name.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!name.errors.required\">\n                       * Enter  Name\n                   </div>\n                   <div [hidden]=\"!name.errors.minlength\">\n                           * Please fill atleast 4 character\n                   </div>    \n               </div>    \n               <span class=\"material-input\"></span>\n           </div>                  \n        </div>\n        <div class=\"col-md-3\">\n           <div class=\"form-group label-floating is-empty\">\n       <label class=\"control-label\">Father Name</label>\n               <input type=\"text\" name=\"fathername\" #fathername=\"ngModel\" class=\"form-control\" minlength=\"4\"  ngModel required>\n               <div *ngIf=\"fathername.errors && fathername.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!fathername.errors.required\">\n                       * Enter  Fathername\n                   </div>\n                   <div [hidden]=\"!name.errors.minlength\">\n                           * Please fill atleast 4 character\n                   </div>     \n               </div>    \n               <span class=\"material-input\"></span>\n           </div>                   \n        </div>\n        <div class=\"col-md-3\">\n           <div class=\"form-group label-floating is-empty\">\n       <label class=\"control-label\">Mother Name</label>\n       <input type=\"text\" name=\"mothername\" #mothername=\"ngModel\" class=\"form-control\" minlength=\"4\" ngModel required >\n               <div *ngIf=\"mothername.errors && mothername.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!mothername.errors.required\">\n                       * Enter  Mothername\n                   </div>\n                   <div [hidden]=\"!name.errors.minlength\">\n                           * Please fill atleast 4 character\n                   </div>     \n               </div>     \n               <span class=\"material-input\"></span>\n           </div>                  \n        </div>\n        <div class=\"col-md-3\">\n           <div class=\"form-group label-floating is-empty\">\n         <label class=\"control-label\">Aadhar Number</label>\n       <input type=\"text\" name=\"aadharnumber\" pattern=\"[0-9]+\" minlength=\"12\" maxlength=\"12\" #aadharnumber=\"ngModel\" class=\"form-control\"  ngModel required >\n               <div *ngIf=\"aadharnumber.errors && aadharnumber.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!aadharnumber.errors.required\">\n                       * Enter  aadharnumber\n                   </div>\n                   <div [hidden]=\"!aadharnumber.errors.minlength\">\n                           * Enter  12 char\n                   </div>\n                   <div [hidden]=\"!aadharnumber.errors.pattern\">\n                           * Enter  numeric\n                   </div>\n               </div>      \n               <span class=\"material-input\"></span>\n           </div>                \n        </div>\n     </div>\n     <div class=\"row\">\n         <div class=\"col-md-3\">\n            <div class=\"form-group label-floating is-empty\">\n                <input type=\"date\" name=\"dob\" #dob=\"ngModel\" class=\"form-control\"  ngModel required >\n                <div *ngIf=\"dob.errors && dob.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!dob.errors.required\">\n                       * Select  dob\n                   </div>\n               </div>   \n                <span class=\"material-input\"></span>\n           </div>                \n         </div>\n         <div class=\"col-md-3\">\n            <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <!-- <input type=\"text\" name=\"gender\" ngModel=\"gender\" class=\"form-control\"  ngModel required > -->\n                <select name=\"gender\" #gender=\"ngModel\" class=\"form-control\"  ngModel required >\n                    <option value=\"\" disabled> Gender </option>\n                    <option value=\"Male\">   Male </option>\n                    <option value=\"Female\"> Female </option>\n                    <option value=\"Other\">  Other </option>\n                </select>\n                <div *ngIf=\"gender.errors && gender.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!gender.errors.required\">\n                       * Select gender \n                   </div>\n               </div>      \n              <span class=\"material-input\"></span>\n           </div>                  \n         </div>\n         <div class=\"col-md-3\">\n            <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\">Mobile Nmuber</label>\n                <input type=\"text\" name=\"mobilenumber\" pattern=\"[0-9]+\" minlength=\"10\" maxlength=\"10\" #mobilenumber=\"ngModel\" class=\"form-control\"  ngModel required >\n                <div *ngIf=\"mobilenumber.errors && mobilenumber.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!mobilenumber.errors.required\">\n                       * Enter  mobilenumber\n                   </div>\n                   <div [hidden]=\"!mobilenumber.errors.minlength\">\n                       * Enter 10 char\n                   </div>\n                   <div [hidden]=\"!mobilenumber.errors.pattern\">\n                       * Enter numeric\n                   </div>\n               </div>   \n                <span class=\"material-input\"></span>\n           </div>                  \n         </div>\n         <div class=\"col-md-3\">\n            <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\">Date Of Joining</label>\n                <input type=\"text\" name=\"doj\" #doj=\"ngModel\" class=\"form-control\"  ngModel required >\n              <span class=\"material-input\"></span>\n               <div *ngIf=\"doj.errors && doj.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!doj.errors.required\">\n                       * Enter  doj\n                   </div>\n               </div>   \n           </div>                 \n         </div>\n      </div>\n      <div class=\"row\">\n         <div class=\"col-md-3\">\n            <div class=\"form-group label-floating is-empty\">\n                <label class=\"control-label\"></label>\n                <!-- <input type=\"text\" name=\"standard\" #standard=\"ngModel\" class=\"form-control\"  ngModel required > -->\n                <select name=\"standard\" #standard=\"ngModel\" class=\"form-control\"  ngModel required >\n                       <option value=\"\" disabled> Standard </option>\n                       <option value=\"1\">   1 </option>\n                       <option value=\"2\">   2 </option>\n                       <option value=\"3\">   3 </option>\n                       <option value=\"4\">   4 </option>\n                       <option value=\"5\">   5 </option>\n                       <option value=\"6\">   6 </option>\n                       <option value=\"7\">   7 </option>\n                       <option value=\"8\">   8 </option>\n                       <option value=\"9\">   9 </option>\n                       <option value=\"10\">   10 </option>\n                       <option value=\"11\">   11 </option>\n                       <option value=\"12\">   12</option>\n                   </select> \n                <div *ngIf=\"standard.errors && standard.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!standard.errors.required\">\n                       * Enter  standard\n                   </div>\n               </div>   \n                <span class=\"material-input\"></span>\n           </div>                 \n         </div>\n         <div class=\"col-md-3\">\n            <div class=\"form-group label-floating is-empty\">\n                <!-- <label class=\"control-label\">Blood Group</label> -->\n                <!-- <input type=\"text\" name=\"bloodgroup\" #bloodgroup=\"ngModel\" class=\"form-control\"  ngModel required > -->\n                <select name=\"bloodgroup\" #bloodgroup=\"ngModel\" class=\"form-control\"  ngModel required >\n                       <option value=\"\" disabled> Blood Group </option>\n                       <option value=\"A+\">   A+ </option>\n                       <option value=\"B+\">   B+ </option>\n                       <option value=\"O+\">   O+ </option>\n                   </select>  \n                <div *ngIf=\"bloodgroup.errors && bloodgroup.touched\" class=\"alert text-danger\">\n                   <div [hidden]=\"!bloodgroup.errors.required\">\n                       * Enter  bloodgroup\n                   </div>\n               </div>   \n                <span class=\"material-input\"></span>\n           </div>             \n         </div>\n         <div class=\"col-md-3\">\n            <div class=\"form-group label-floating is-empty\">\n                <!-- <label class=\"control-label\">Father Occupation</label> -->\n                <!-- <input type=\"text\" name=\"fatheroccupation\" #fatheroccupation=\"ngModel\" class=\"form-control\" minlength=\"4\"  ngModel required > -->\n                <select name=\"fatheroccupation\" #fatheroccupation=\"ngModel\" class=\"form-control\"  ngModel required >\n                       <option value=\"\" disabled> Father Occupation </option>\n                       <option value=\"Employeer\">   Employeer </option>\n                       <option value=\"Goverment Employee\"> Goverment Employee </option>\n                       <option value=\"Daily wage\">  Daily wage </option>\n                   </select>  \n                <div *ngIf=\"fatheroccupation.errors && fatheroccupation.touched\" class=\"alert text-danger\">\n                       <div [hidden]=\"!fatheroccupation.errors.required\">\n                           * Enter  fatheroccupation\n                       </div>\n                       <div [hidden]=\"!fatheroccupation.errors.minlength\">\n                               * Please fill atleast 4 character\n                       </div> \n                   </div> \n                <span class=\"material-input\"></span>\n           </div>\n                   \n         </div>\n         <div class=\"col-md-3\">\n            <div class=\"form-group label-floating is-empty\">\n                <!-- <label class=\"control-label\">Mother Occupation</label> -->\n                <!-- <input type=\"text\" name=\"motheroccupation\" #motheroccupation=\"ngModel\" class=\"form-control\" minlength=\"4\" ngModel required > -->\n                <select name=\"motheroccupation\" #motheroccupation=\"ngModel\" class=\"form-control\"  ngModel required >\n                       <option value=\"\" disabled> Mother Occupation </option>\n                       <option value=\"Employeer\">   Employeer </option>\n                       <option value=\"Goverment Employee\"> Goverment Employee </option>\n                       <option value=\"Daily wage\">  Daily wage </option>\n                   </select> \n                <div *ngIf=\"motheroccupation.errors && motheroccupation.touched\" class=\"alert text-danger\">\n                       <div [hidden]=\"!motheroccupation.errors.required\">\n                           * Enter  motheroccupation\n                       </div>\n                       <div [hidden]=\"!motheroccupation.errors.minlength\">\n                               * Please fill atleast 4 character\n                       </div>     \n                   </div>   \n                <span class=\"material-input\"></span>\n           </div>                 \n         </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-offset-4 col-md-4 text-center\">\n               <button class=\"btn btn-primary btn-round\" type=\"submit\" [disabled]=\"!addmissionForm.form.valid\" >Create Student</button>\n          </div>\n      </div>\n  \n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
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



var StudentComponent = /** @class */ (function () {
    function StudentComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent.prototype.newStudent = function (value) {
        var _this = this;
        console.log(value);
        // http call ends
        this.dataservice.createStudent(value).subscribe(function (res) {
            _this.newstudent = res;
            alert("Add sucessfully");
            // http call ends
            _this.router.navigate(['/app/liststudent']);
        });
    };
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/viewstudent/viewstudent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/viewstudent/viewstudent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    max-width:400px;\r\n \r\n    background:purple;\r\n  \r\n    padding:10px;\r\n    border:10px solid purple;\r\n    margin-top:30px;\r\n    \r\n}\r\n.card span {\r\n    color:white;\r\n    font-size:17px;\r\n    text-justify: inter-word;}\r\n.card h5{\r\n    color:purple;\r\n    background: white;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/viewstudent/viewstudent.component.html":
/*!********************************************************!*\
  !*** ./src/app/viewstudent/viewstudent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <div>\n    <p>name:{{editStudent.name}}</p>\n  </div> -->\n  <div class=\"row text-center\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n            <h5 class=\"text-center\">Students Details</h5>\n               <div class=\"row text-center\" style=\"background:white;padding:15px;\">\n                 <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                   <span style=\"color:purple;font-weight: bold\">{{editStudent.name}}</span>\n                 </div>\n                 <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                    <img src=\"assets/img/school/user.png\" style=\"width:70px;\">\n                  </div>\n               </div>\n               <hr>\n               <div class=\"row text-center\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                    <span>Standard</span>\n                  </div>\n                 \n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                     <span>{{editStudent.standard}}</span>\n                   </div>\n                </div><br>\n                <div class=\"row text-center\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                      <span>Blood Group</span>\n                    </div>\n                   \n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                       <span>{{editStudent.bloodgroup}}</span>\n                     </div>\n                  </div><br>\n                  <div class=\"row text-center\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                        <span>Father Name</span>\n                      </div>\n                     \n                      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                         <span>{{editStudent.fathername}}</span>\n                       </div>\n                    </div><br>\n                    <div class=\"row text-center\">\n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                          <span>Mother Name</span>\n                        </div>\n                       \n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                           <span>{{editStudent.mothername}}</span>\n                         </div>\n                      </div><br>\n        \n                      <div class=\"row text-center\">\n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                            <span>Father occupation</span>\n                          </div>\n                         \n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                             <span>{{editStudent.fatheroccupation}}</span>\n                           </div>\n                        </div>\n                        <br>\n        \n                      <div class=\"row text-center\">\n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                            <span>Mother occupation</span>\n                          </div>\n                         \n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                             <span>{{editStudent.motheroccupation}}</span>\n                           </div>\n                        </div>\n          </div>\n    </div>\n  </div>\n \n</div>\n"

/***/ }),

/***/ "./src/app/viewstudent/viewstudent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/viewstudent/viewstudent.component.ts ***!
  \******************************************************/
/*! exports provided: ViewstudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewstudentComponent", function() { return ViewstudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
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



var ViewstudentComponent = /** @class */ (function () {
    function ViewstudentComponent(dataservice, router, route) {
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.editStudent = {
            id: '',
            aadharnumber: '',
            bloodgroup: '',
            dob: '',
            doj: '',
            fathername: '',
            fatheroccupation: '',
            gender: '',
            mobilenumber: '',
            mothername: '',
            name: '',
            standard: '',
            motheroccupation: ''
        };
    }
    ViewstudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.route.snapshot.params['id'];
        this.dataservice.getAllStudents().subscribe(function (res) {
            _this.allStudents = res;
            console.log(_this.allStudents);
            for (var i = 0; i < _this.allStudents.length; i++) {
                if (_this._id === _this.allStudents[i].id) {
                    _this.editStudent.id = _this.allStudents[i].id;
                    _this.editStudent.name = _this.allStudents[i].name;
                    _this.editStudent.dob = _this.allStudents[i].dob;
                    _this.editStudent.aadharnumber = _this.allStudents[i].aadharnumber;
                    _this.editStudent.fathername = _this.allStudents[i].fathername;
                    _this.editStudent.mothername = _this.allStudents[i].mothername;
                    _this.editStudent.gender = _this.allStudents[i].gender;
                    _this.editStudent.doj = _this.allStudents[i].doj;
                    _this.editStudent.bloodgroup = _this.allStudents[i].bloodgroup;
                    _this.editStudent.mobilenumber = _this.allStudents[i].mobilenumber;
                    _this.editStudent.standard = _this.allStudents[i].standard;
                    _this.editStudent.fatheroccupation = _this.allStudents[i].fatheroccupation;
                    _this.editStudent.motheroccupation = _this.allStudents[i].motheroccupation;
                }
            }
            console.log("test" + _this.editStudent.name);
        });
    };
    ViewstudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewstudent',
            template: __webpack_require__(/*! ./viewstudent.component.html */ "./src/app/viewstudent/viewstudent.component.html"),
            styles: [__webpack_require__(/*! ./viewstudent.component.css */ "./src/app/viewstudent/viewstudent.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewstudentComponent);
    return ViewstudentComponent;
}());



/***/ }),

/***/ "./src/app/viewtransfer/viewtransfer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/viewtransfer/viewtransfer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    max-width:400px;\r\n \r\n    background:purple;\r\n  \r\n    padding:10px;\r\n    border:10px solid purple;\r\n    margin-top:30px;\r\n    \r\n}\r\n.card span {\r\n    color:white;\r\n    font-size:17px;\r\n    text-justify: inter-word;}\r\n.card h5{\r\n    color:purple;\r\n    background: white;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/viewtransfer/viewtransfer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/viewtransfer/viewtransfer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <div>\n    <p>name:{{editStudent.name}}</p>\n  </div> -->\n  <div class=\"row text-center\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n            <h5 class=\"text-center\">Students Details</h5>\n               <div class=\"row text-center\" style=\"background:white;padding:15px;\">\n                 <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                   <span style=\"color:purple;font-weight: bold\">{{editStudent.name}}</span>\n                 </div>\n                 <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                    <img src=\"assets/img/school/user.png\" style=\"width:70px;\">\n                  </div>\n               </div>\n               <hr>\n               <div class=\"row text-center\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                    <span>Standard</span>\n                  </div>\n                 \n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                     <span>{{editStudent.standard}}</span>\n                   </div>\n                </div><br>\n                <div class=\"row text-center\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                      <span>School Name</span>\n                    </div>\n                   \n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                       <span>{{editStudent.school}}</span>\n                     </div>\n                  </div><br>\n                  <div class=\"row text-center\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                        <span>Std</span>\n                      </div>\n                     \n                      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                         <span>{{editStudent.std}}</span>\n                       </div>\n                    </div><br>\n                    <div class=\"row text-center\">\n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                          <span>Date</span>\n                        </div>\n                       \n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                           <span>{{editStudent.date}}</span>\n                         </div>\n                      </div><br>\n        \n                      <div class=\"row text-center\">\n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                            <span>Reason</span>\n                          </div>\n                         \n                          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                             <span>{{editStudent.reason}}</span>\n                           </div>\n                        </div>\n                        <br>\n                        <button class=\"btn btn-primary\" (click)=\"datasent()\">Appord</button>\n\n          </div>\n    </div>\n  </div>\n \n</div>\n\n"

/***/ }),

/***/ "./src/app/viewtransfer/viewtransfer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/viewtransfer/viewtransfer.component.ts ***!
  \********************************************************/
/*! exports provided: ViewtransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtransferComponent", function() { return ViewtransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/app/service/data.ts");
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



var ViewtransferComponent = /** @class */ (function () {
    function ViewtransferComponent(dataservice, router, route) {
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.editStudent = {
            id: '',
            name: '',
            school: '',
            std: '',
            reason: '',
            date: '',
            gender: ''
        };
    }
    ViewtransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.route.snapshot.params['id'];
        this.dataservice.getAllTransfer().subscribe(function (res) {
            _this.allStudents = res;
            console.log(_this.allStudents);
            for (var i = 0; i < _this.allStudents.length; i++) {
                if (_this._id === _this.allStudents[i].id) {
                    _this.editStudent.id = _this.allStudents[i].id;
                    _this.editStudent.name = _this.allStudents[i].name;
                    _this.editStudent.school = _this.allStudents[i].school;
                    _this.editStudent.date = _this.allStudents[i].date;
                    _this.editStudent.reason = _this.allStudents[i].reason;
                    _this.editStudent.std = _this.allStudents[i].std;
                    _this.editStudent.gender = _this.allStudents[i].gender;
                    _this.editStudent.standard = _this.allStudents[i].standard;
                }
            }
            console.log("test" + _this.editStudent.name);
        });
    };
    ViewtransferComponent.prototype.datasent = function () {
        var _this = this;
        this.dataservice.apporved(this.editStudent).subscribe(function (res) {
            _this.datatransfer = res;
            alert("successfully");
        });
    };
    ViewtransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewtransfer',
            template: __webpack_require__(/*! ./viewtransfer.component.html */ "./src/app/viewtransfer/viewtransfer.component.html"),
            styles: [__webpack_require__(/*! ./viewtransfer.component.css */ "./src/app/viewtransfer/viewtransfer.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewtransferComponent);
    return ViewtransferComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\TrioDesk\Angular\testAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map