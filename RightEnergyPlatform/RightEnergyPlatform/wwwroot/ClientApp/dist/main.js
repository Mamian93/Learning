(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.css":
/*!*****************************************!*\
  !*** ./ClientApp/app/app.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    <div class=\"row\">\r\n        <br />\r\n        <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-2\" id=\"navAngular\">\r\n\r\n            <div id=\"sidenav\" style=\"margin-top:6px;\">\r\n                <p-menu [model]=\"menuItems\"></p-menu>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-8 col-md-9 col-lg-10\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
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
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.menuItems = [
            { label: 'Current Load', icon: 'fa fa-bolt', routerLink: ['/currentLoad'] },
            { label: 'Current Price', icon: 'fa fa-money', routerLink: ['/currentPrice'] },
            { label: 'Archive Load', icon: 'fa fa-archive', routerLink: ['/archiveLoad'] },
            { label: 'Archive Price', icon: 'fa fa-archive', routerLink: ['/archivePrice'] },
            { label: 'Graph', icon: 'fa fa-line-chart', routerLink: ['/graph'] },
            { label: 'Forecast Price', icon: 'fa fa-chevron-right', routerLink: ['/forecastPrice'] }
        ];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rep-app',
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _currentLoad_currentLoadList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currentLoad/currentLoadList.component */ "./ClientApp/app/currentLoad/currentLoadList.component.ts");
/* harmony import */ var _currentPrice_currentPrice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currentPrice/currentPrice.component */ "./ClientApp/app/currentPrice/currentPrice.component.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph/graph.component */ "./ClientApp/app/graph/graph.component.ts");
/* harmony import */ var _archivePrice_archivePrice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./archivePrice/archivePrice.component */ "./ClientApp/app/archivePrice/archivePrice.component.ts");
/* harmony import */ var _archiveLoad_archiveLoad_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./archiveLoad/archiveLoad.component */ "./ClientApp/app/archiveLoad/archiveLoad.component.ts");
/* harmony import */ var _forecastPrice_forecastPrice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forecastPrice/forecastPrice.component */ "./ClientApp/app/forecastPrice/forecastPrice.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ClientApp/app/shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/components/datatable/datatable */ "./node_modules/primeng/components/datatable/datatable.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: "currentLoad", component: _currentLoad_currentLoadList_component__WEBPACK_IMPORTED_MODULE_4__["CurrentLoadListComponent"] },
    { path: "currentPrice", component: _currentPrice_currentPrice_component__WEBPACK_IMPORTED_MODULE_5__["CurrentPriceComponent"] },
    { path: "archivePrice", component: _archivePrice_archivePrice_component__WEBPACK_IMPORTED_MODULE_7__["ArchivePriceComponent"] },
    { path: "archiveLoad", component: _archiveLoad_archiveLoad_component__WEBPACK_IMPORTED_MODULE_8__["ArchiveLoadComponent"] },
    { path: "graph", component: _graph_graph_component__WEBPACK_IMPORTED_MODULE_6__["GraphComponent"] },
    { path: "forecastPrice", component: _forecastPrice_forecastPrice_component__WEBPACK_IMPORTED_MODULE_9__["ForecastPriceComponent"] },
    { path: "", redirectTo: 'currentLoad', pathMatch: 'full' },
    { path: "**", redirectTo: 'currentLoad', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _currentLoad_currentLoadList_component__WEBPACK_IMPORTED_MODULE_4__["CurrentLoadListComponent"],
                _currentPrice_currentPrice_component__WEBPACK_IMPORTED_MODULE_5__["CurrentPriceComponent"],
                _graph_graph_component__WEBPACK_IMPORTED_MODULE_6__["GraphComponent"],
                _archivePrice_archivePrice_component__WEBPACK_IMPORTED_MODULE_7__["ArchivePriceComponent"],
                _archiveLoad_archiveLoad_component__WEBPACK_IMPORTED_MODULE_8__["ArchiveLoadComponent"],
                _forecastPrice_forecastPrice_component__WEBPACK_IMPORTED_MODULE_9__["ForecastPriceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["MenuModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["ChartModule"],
                primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_16__["DataTableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["PaginatorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_11__["DataService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/archiveLoad/archiveLoad.component.css":
/*!*************************************************************!*\
  !*** ./ClientApp/app/archiveLoad/archiveLoad.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/archiveLoad/archiveLoad.component.html":
/*!**************************************************************!*\
  !*** ./ClientApp/app/archiveLoad/archiveLoad.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <ng4-loading-spinner [loadingText]=\"'Please wait...'\"> </ng4-loading-spinner>\r\n    <p-dataTable #dt [value]=\"loadTable\" class=\"ui-g-12 table table-hover\" id=\"flowTable\" [reorderableColumns]=\"true\" exportFilename=\"flows\"\r\n                 [paginator]=\"true\" [rows]=\"12\" [rowsPerPageOptions]=\"[6,12,24]\" [totalRecords]=\"recordCount\" [pageLinks]=\"3\">\r\n        <p-column field=\"time\" header=\"Time\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.time | date:'short'}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"ukFlowAmount\" header=\"UK[MW]\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"irlFlowAmount\" header=\"IRL[MW]\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"nirlFlowAmount\" header=\"NIRL[MW]\" [sortable]=\"true\"></p-column>\r\n\r\n        <p-footer>\r\n            <a class=\"btn btn-warning pull-left\" href=\"../../\">Main Page</a>\r\n            <button type=\"button\" pButton class=\"btn btn-info\" (click)=\"dt.exportCSV()\" style=\"float:right\">\r\n                <i class=\"fa fa-table\"></i> Export CSV file\r\n            </button>\r\n        </p-footer>\r\n    </p-dataTable>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/archiveLoad/archiveLoad.component.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/archiveLoad/archiveLoad.component.ts ***!
  \************************************************************/
/*! exports provided: ArchiveLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveLoadComponent", function() { return ArchiveLoadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArchiveLoadComponent = /** @class */ (function () {
    function ArchiveLoadComponent(_data, spinnerService) {
        this._data = _data;
        this.spinnerService = spinnerService;
        this.loadTable = [];
    }
    ArchiveLoadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this._data.loadArchiveLoads()
            .subscribe(function (success) {
            if (success) {
                _this.loadTable = _this._data.loads;
                _this.recordCount = _this.loadTable.length;
                _this.spinnerService.hide();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dt"),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTable"])
    ], ArchiveLoadComponent.prototype, "dt", void 0);
    ArchiveLoadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archiveLoad',
            template: __webpack_require__(/*! ./archiveLoad.component.html */ "./ClientApp/app/archiveLoad/archiveLoad.component.html"),
            styles: [__webpack_require__(/*! ./archiveLoad.component.css */ "./ClientApp/app/archiveLoad/archiveLoad.component.css")]
        }),
        __metadata("design:paramtypes", [ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], ArchiveLoadComponent);
    return ArchiveLoadComponent;
}());



/***/ }),

/***/ "./ClientApp/app/archivePrice/archivePrice.component.css":
/*!***************************************************************!*\
  !*** ./ClientApp/app/archivePrice/archivePrice.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/archivePrice/archivePrice.component.html":
/*!****************************************************************!*\
  !*** ./ClientApp/app/archivePrice/archivePrice.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <ng4-loading-spinner [loadingText]=\"'Please wait...'\"> </ng4-loading-spinner>\r\n    <p-dataTable #dt [value]=\"priceTable\" class=\"ui-g-12 table table-hover\" id=\"flowTable\" [reorderableColumns]=\"true\" exportFilename=\"archivePrices\"\r\n                 [paginator]=\"true\" [rows]=\"12\" [rowsPerPageOptions]=\"[6,12,24]\" [totalRecords]=\"recordCount\" [pageLinks]=\"3\">\r\n        <p-column field=\"time\" header=\"Time\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.time | date:'short'}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"ukPrice\" header=\"UK Price of one MW\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.ukPrice | currency:\"GBP\":\"symbol\"}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"irlPrice\" header=\"IRL Price of one MW\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.irlPrice | currency:\"GBP\":\"symbol\"}}\r\n            </ng-template>\r\n        </p-column>\r\n\r\n        <p-footer>\r\n            <a class=\"btn btn-warning pull-left\" href=\"../../\">Main Page</a>\r\n            <button type=\"button\" pButton class=\"btn btn-info\" (click)=\"dt.exportCSV()\" style=\"float:right\">\r\n                <i class=\"fa fa-table\"></i> Export CSV file\r\n            </button>\r\n        </p-footer>\r\n    </p-dataTable>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/archivePrice/archivePrice.component.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/archivePrice/archivePrice.component.ts ***!
  \**************************************************************/
/*! exports provided: ArchivePriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivePriceComponent", function() { return ArchivePriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
    '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
    '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
    '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];
var ArchivePriceComponent = /** @class */ (function () {
    function ArchivePriceComponent(_data, spinnerService) {
        this._data = _data;
        this.spinnerService = spinnerService;
        this.priceTable = [];
    }
    ArchivePriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this._data.loadArchivePrices()
            .subscribe(function (success) {
            if (success) {
                _this.priceTable = _this._data.prices;
                _this.recordCount = _this.priceTable.length;
                _this.spinnerService.hide();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dt"),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTable"])
    ], ArchivePriceComponent.prototype, "dt", void 0);
    ArchivePriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archivePrice',
            template: __webpack_require__(/*! ./archivePrice.component.html */ "./ClientApp/app/archivePrice/archivePrice.component.html"),
            styles: [__webpack_require__(/*! ./archivePrice.component.css */ "./ClientApp/app/archivePrice/archivePrice.component.css")]
        }),
        __metadata("design:paramtypes", [ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], ArchivePriceComponent);
    return ArchivePriceComponent;
}());



/***/ }),

/***/ "./ClientApp/app/currentLoad/currentLoadList.component.css":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/currentLoad/currentLoadList.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainPageButton{\r\n    border:solid blue 1px;\r\n}\r\n\r\n#updateButton {\r\n    border: solid orange 1px;\r\n    margin-right: 3px;\r\n}\r\n\r\n#flowTable{\r\n    color: black;\r\n}\r\n\r\n#flowTable > tr:nth-child(even) {\r\n    background-color: none;\r\n    color: black;\r\n}\r\n\r\nbody .ui-datatable .ui-datatable-header, body .ui-datatable .ui-datatable-footer {\r\n    padding: .75em 1.25em;\r\n    background-color: #f5f5f5;\r\n    min-height: 60px;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/currentLoad/currentLoadList.component.html":
/*!******************************************************************!*\
  !*** ./ClientApp/app/currentLoad/currentLoadList.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <ng4-loading-spinner [loadingText]=\"'Please wait...'\"> </ng4-loading-spinner>\r\n    <p-dataTable #dt [value]=\"loads\" class=\"ui-g-12 table table-hover\" id=\"flowTable\" [reorderableColumns]=\"true\" exportFilename=\"flows\"\r\n                 [paginator]=\"true\" [rows]=\"12\" [rowsPerPageOptions]=\"[6,12,24]\" [totalRecords]=\"recordCount\" [pageLinks]=\"3\">\r\n        <p-column field=\"time\" header=\"Time\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.time | date:'short'}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"ukFlowAmount\" header=\"UK[MW]\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"irlFlowAmount\" header=\"IRL[MW]\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"nirlFlowAmount\" header=\"NIRL[MW]\" [sortable]=\"true\"></p-column>\r\n\r\n        <p-footer>\r\n            <a class=\"btn btn-warning pull-left\" href=\"../../\">Main Page</a>\r\n            <button type=\"button\" pButton class=\"btn btn-info\" (click)=\"dt.exportCSV()\" style=\"float:right\">\r\n                <i class=\"fa fa-table\"></i> Export CSV file\r\n            </button>\r\n        </p-footer>\r\n    </p-dataTable>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/currentLoad/currentLoadList.component.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/currentLoad/currentLoadList.component.ts ***!
  \****************************************************************/
/*! exports provided: CurrentLoadListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentLoadListComponent", function() { return CurrentLoadListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrentLoadListComponent = /** @class */ (function () {
    function CurrentLoadListComponent(data, spinnerService) {
        this.data = data;
        this.spinnerService = spinnerService;
        this.loads = [];
        this.showSpinner = true;
    }
    CurrentLoadListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.data.loadFlows()
            .subscribe(function (success) {
            if (success) {
                _this.loads = _this.data.loads;
                _this.recordCount = _this.loads.length;
                _this.spinnerService.hide();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dt"),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["DataTable"])
    ], CurrentLoadListComponent.prototype, "dt", void 0);
    CurrentLoadListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "currentLoad-list",
            template: __webpack_require__(/*! ./currentLoadList.component.html */ "./ClientApp/app/currentLoad/currentLoadList.component.html"),
            styles: [__webpack_require__(/*! ./currentLoadList.component.css */ "./ClientApp/app/currentLoad/currentLoadList.component.css")]
        }),
        __metadata("design:paramtypes", [ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"]])
    ], CurrentLoadListComponent);
    return CurrentLoadListComponent;
}());



/***/ }),

/***/ "./ClientApp/app/currentPrice/currentPrice.component.css":
/*!***************************************************************!*\
  !*** ./ClientApp/app/currentPrice/currentPrice.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/currentPrice/currentPrice.component.html":
/*!****************************************************************!*\
  !*** ./ClientApp/app/currentPrice/currentPrice.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <ng4-loading-spinner [loadingText]=\"'Please wait...'\"> </ng4-loading-spinner>\r\n    <p-dataTable #dt [value]=\"prices\" class=\"ui-g-12 table table-hover\" id=\"flowTable\" [reorderableColumns]=\"true\" exportFilename=\"prices\"\r\n                 [paginator]=\"true\" [rows]=\"12\" [rowsPerPageOptions]=\"[6,12,24]\" [totalRecords]=\"recordCount\" [pageLinks]=\"3\">\r\n        <p-column field=\"time\" header=\"Time\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.time | date:'short'}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"ukPrice\" header=\"UK Price of one MW\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.ukPrice | currency:\"GBP\":\"symbol\"}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"irlPrice\" header=\"IRL Price of one MW\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.irlPrice | currency:\"GBP\":\"symbol\"}}\r\n            </ng-template>\r\n        </p-column>\r\n\r\n        <p-footer>\r\n            <a class=\"btn btn-warning pull-left\" href=\"../../\">Main Page</a>\r\n            <button type=\"button\" pButton class=\"btn btn-info\" (click)=\"dt.exportCSV()\" style=\"float:right\">\r\n                <i class=\"fa fa-table\"></i> Export CSV file\r\n            </button>\r\n        </p-footer>\r\n    </p-dataTable>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/currentPrice/currentPrice.component.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/currentPrice/currentPrice.component.ts ***!
  \**************************************************************/
/*! exports provided: CurrentPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPriceComponent", function() { return CurrentPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrentPriceComponent = /** @class */ (function () {
    function CurrentPriceComponent(data, spinnerService) {
        this.data = data;
        this.spinnerService = spinnerService;
        this.prices = [];
    }
    CurrentPriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.data.loadPrices()
            .subscribe(function (success) {
            if (success) {
                _this.prices = _this.data.prices;
                _this.recordCount = _this.prices.length;
                _this.spinnerService.hide();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dt"),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["DataTable"])
    ], CurrentPriceComponent.prototype, "dt", void 0);
    CurrentPriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currentPrice',
            template: __webpack_require__(/*! ./currentPrice.component.html */ "./ClientApp/app/currentPrice/currentPrice.component.html"),
            styles: [__webpack_require__(/*! ./currentPrice.component.css */ "./ClientApp/app/currentPrice/currentPrice.component.css")]
        }),
        __metadata("design:paramtypes", [ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"]])
    ], CurrentPriceComponent);
    return CurrentPriceComponent;
}());



/***/ }),

/***/ "./ClientApp/app/forecastPrice/forecastPrice.component.css":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/forecastPrice/forecastPrice.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/forecastPrice/forecastPrice.component.html":
/*!******************************************************************!*\
  !*** ./ClientApp/app/forecastPrice/forecastPrice.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <ng4-loading-spinner [loadingText]=\"'Please wait...'\"> </ng4-loading-spinner>\r\n    <p-dataTable #dt [value]=\"prices\" class=\"ui-g-12 table table-hover\" id=\"flowTable\" [reorderableColumns]=\"true\" exportFilename=\"prices\"\r\n                 [paginator]=\"true\" [rows]=\"12\" [rowsPerPageOptions]=\"[6,12,24]\" [totalRecords]=\"recordCount\" [pageLinks]=\"3\">\r\n        <p-column field=\"time\" header=\"Time\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.time | date:'short'}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"ukPrice\" header=\"UK Price of one MW\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.ukPrice | currency:\"GBP\":\"symbol\"}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"irlPrice\" header=\"IRL Price of one MW\" [sortable]=\"true\">\r\n            <ng-template let-p=\"rowData\" pTemplate=\"body\">\r\n                {{ p.irlPrice | currency:\"GBP\":\"symbol\"}}\r\n            </ng-template>\r\n        </p-column>\r\n\r\n        <p-footer>\r\n            <a class=\"btn btn-warning pull-left\" href=\"../../\">Main Page</a>\r\n            <button type=\"button\" pButton class=\"btn btn-info\" (click)=\"dt.exportCSV()\" style=\"float:right\">\r\n                <i class=\"fa fa-table\"></i> Export CSV file\r\n            </button>\r\n        </p-footer>\r\n    </p-dataTable>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/forecastPrice/forecastPrice.component.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/forecastPrice/forecastPrice.component.ts ***!
  \****************************************************************/
/*! exports provided: ForecastPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastPriceComponent", function() { return ForecastPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForecastPriceComponent = /** @class */ (function () {
    function ForecastPriceComponent(_data, spinnerService) {
        this._data = _data;
        this.spinnerService = spinnerService;
        this.prices = [];
    }
    ForecastPriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this._data.loadForecastPrices()
            .subscribe(function (success) {
            if (success) {
                _this.prices = _this._data.prices;
                _this.recordCount = _this.prices.length;
                _this.spinnerService.hide();
            }
        });
    };
    ForecastPriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forecast-price',
            template: __webpack_require__(/*! ./forecastPrice.component.html */ "./ClientApp/app/forecastPrice/forecastPrice.component.html"),
            styles: [__webpack_require__(/*! ./forecastPrice.component.css */ "./ClientApp/app/forecastPrice/forecastPrice.component.css")]
        }),
        __metadata("design:paramtypes", [ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"]])
    ], ForecastPriceComponent);
    return ForecastPriceComponent;
}());



/***/ }),

/***/ "./ClientApp/app/graph/graph.component.css":
/*!*************************************************!*\
  !*** ./ClientApp/app/graph/graph.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/graph/graph.component.html":
/*!**************************************************!*\
  !*** ./ClientApp/app/graph/graph.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <ng4-loading-spinner [loadingText]=\"'Please wait...'\"> </ng4-loading-spinner>\r\n    <div class=\"ui-g-12\">\r\n        <p-panel header=\"Graph showing the whole flow amount\" class=\"ui-g-12 ui-md-12\">\r\n\r\n            <p-chart type=\"line\" [data]=\"loadGraph\"\r\n                     (onDataSelect)=\"onDataSelect($event)\"></p-chart>\r\n\r\n        </p-panel>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <p-panel header=\"Graph showing the hourly price rate\" class=\"ui-g-12 ui-md-12\">\r\n\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"myFunction()\" style=\"margin-right:20px;\">Irland</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"showUKPrice()\">UK</button>\r\n            <p-chart type=\"bar\" [data]=\"priceGraph\"></p-chart>\r\n\r\n        </p-panel>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <p-panel header=\"Graph showing the whole flow amount\" class=\"ui-g-12 ui-md-12\">\r\n\r\n            <p-chart type=\"bar\" [data]=\"priceForecastGraph\"\r\n                     (onDataSelect)=\"onDataSelect($event)\"></p-chart>\r\n\r\n        </p-panel>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/graph/graph.component.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/graph/graph.component.ts ***!
  \************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
    '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
    '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
    '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];
var GraphComponent = /** @class */ (function () {
    function GraphComponent(_data, datepipe, spinnerService) {
        this._data = _data;
        this.datepipe = datepipe;
        this.spinnerService = spinnerService;
    }
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this._data.loadGraphFlows()
            .subscribe(function (res) {
            _this.chart = res;
            var barIRL = _this.chart.map(function (c) { return c.irlFlowAmount; });
            var barNIRL = _this.chart.map(function (c) { return c.nirlFlowAmount; });
            var barUK = _this.chart.map(function (c) { return c.ukFlowAmount; });
            var barTime = _this.chart.map(function (c) { return c.time; });
            var arrayPlh = [];
            for (var i = 0; i < barTime.length; i++) {
                var j = moment__WEBPACK_IMPORTED_MODULE_4__(barTime[i]);
                arrayPlh.push(j.format('h:mm a'));
            }
            console.log(arrayPlh);
            _this.loadGraph = {
                labels: arrayPlh,
                datasets: [
                    {
                        label: 'NIRL Amount',
                        backgroundColor: DEFAULT_COLORS[2],
                        data: barNIRL
                    },
                    {
                        label: 'IRL Amount',
                        backgroundColor: DEFAULT_COLORS[1],
                        data: barIRL
                    },
                    {
                        label: 'UK Amount',
                        backgroundColor: DEFAULT_COLORS[6],
                        data: barUK
                    }
                ]
            };
            _this.options = {
                title: {
                    display: true,
                    text: 'My Title',
                    fontSize: 16
                },
                tooltips: {
                    mode: 'nearest'
                },
                legend: {
                    position: 'bottom'
                }
            };
        });
        this._data.loadGraphPrices()
            .subscribe(function (res) {
            _this.chart = res;
            var barIRL = _this.chart.map(function (c) { return c.irlPrice; });
            var barUK = _this.chart.map(function (c) { return c.ukPrice; });
            var barTime = _this.chart.map(function (c) { return c.time; });
            var arrayPlh = [];
            for (var i = 0; i < barTime.length; i++) {
                var j = moment__WEBPACK_IMPORTED_MODULE_4__(barTime[i]);
                arrayPlh.push(j.format('h:mm a'));
            }
            _this.priceGraph = {
                labels: arrayPlh,
                datasets: [
                    {
                        label: 'UK Price',
                        backgroundColor: DEFAULT_COLORS[1],
                        data: barUK
                    }
                ]
            };
            _this.spinnerService.hide();
        });
        this._data.loadGraphForecastPrices()
            .subscribe(function (res) {
            _this.chart = res;
            var barIRL = _this.chart.map(function (c) { return c.irlPrice; });
            var barUK = _this.chart.map(function (c) { return c.ukPrice; });
            var barTime = _this.chart.map(function (c) { return c.time; });
            var arrayPlh = [];
            for (var i = 0; i < barTime.length; i++) {
                var j = moment__WEBPACK_IMPORTED_MODULE_4__(barTime[i]);
                arrayPlh.push(j.format('DD-MM h:mm a'));
            }
            _this.priceForecastGraph = {
                labels: arrayPlh,
                datasets: [
                    {
                        label: 'UK Price',
                        backgroundColor: DEFAULT_COLORS[14],
                        data: barUK
                    },
                    {
                        label: 'IRL Price',
                        backgroundColor: DEFAULT_COLORS[15],
                        data: barIRL
                    }
                ]
            };
        });
    };
    GraphComponent.prototype.showUKPrice = function () {
        this.ngOnInit();
    };
    GraphComponent.prototype.myFunction = function () {
        var _this = this;
        this._data.loadGraphPrices()
            .subscribe(function (res) {
            _this.chart = res;
            var barIRL = _this.chart.map(function (c) { return c.irlPrice; });
            var barUK = _this.chart.map(function (c) { return c.ukPrice; });
            var barTime = _this.chart.map(function (c) { return c.time; });
            var barIRL0 = [];
            for (var i = 0; i < barIRL.length; i++) {
                if (i % 2 == 1) {
                    barIRL0.push(barIRL[i]);
                }
            }
            var arrayPlh = [];
            for (var i = 0; i < barTime.length; i++) {
                if (i % 2 == 1) {
                    var j = moment__WEBPACK_IMPORTED_MODULE_4__(barTime[i]);
                    arrayPlh.push(j.format('h:mm a'));
                }
            }
            _this.priceGraph = {
                labels: arrayPlh,
                datasets: [
                    {
                        label: 'IRL Price',
                        backgroundColor: DEFAULT_COLORS[3],
                        data: barIRL0
                    }
                ]
            };
        });
    };
    GraphComponent.prototype.onDataSelect = function (event) {
        var dataSetIndex = event.element._datasetIndex;
        var dataItemIndex = event.element._index;
        var labelClicked = this.loadGraph.datasets[dataSetIndex].label;
        var valueClicked = this.loadGraph.datasets[dataSetIndex].data[dataItemIndex];
        alert("Looks like " + labelClicked + " has value " + valueClicked);
    };
    GraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__(/*! ./graph.component.html */ "./ClientApp/app/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.css */ "./ClientApp/app/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./ClientApp/app/shared/dataService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/shared/dataService.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.loads = [];
        this.prices = [];
    }
    DataService.prototype.loadPrices = function () {
        var _this = this;
        return this.http.get("/api/flow/getpriceview")
            .map(function (data) {
            _this.prices = data;
            return true;
        });
    };
    DataService.prototype.loadArchivePrices = function () {
        var _this = this;
        return this.http.get("/api/flow/getarchivepriceview")
            .map(function (data) {
            _this.prices = data;
            return true;
        });
    };
    DataService.prototype.loadFlows = function () {
        var _this = this;
        return this.http.get("/api/flow/getflowamountview")
            .map(function (data) {
            _this.loads = data;
            return true;
        });
    };
    DataService.prototype.loadForecastPrices = function () {
        var _this = this;
        return this.http.get("/api/flow/getlongpriceforecastloadview")
            .map(function (data) {
            _this.prices = data;
            return true;
        });
    };
    DataService.prototype.loadArchiveLoads = function () {
        var _this = this;
        return this.http.get("/api/flow/getarchiveloadview")
            .map(function (data) {
            _this.loads = data;
            return true;
        });
    };
    DataService.prototype.loadGraphFlows = function () {
        return this.http.get("/api/flow/getflowamountview")
            .map(function (result) { return result; });
    };
    DataService.prototype.loadGraphPrices = function () {
        return this.http.get("/api/flow/getpriceview")
            .map(function (result) { return result; });
    };
    DataService.prototype.loadGraphArchivePrices = function () {
        return this.http.get("/api/flow/getarchivepriceview")
            .map(function (result) { return result; });
    };
    DataService.prototype.loadGraphArchiveLoads = function () {
        return this.http.get("/api/flow/getarchiveloadview")
            .map(function (result) { return result; });
    };
    DataService.prototype.loadGraphForecastPrices = function () {
        return this.http.get("/api/flow/getlongpriceforecastloadview")
            .map(function (result) { return result; });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\T430\source\repos\REP\RightEnergyPlatform\RightEnergyPlatform\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map