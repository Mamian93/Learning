"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map