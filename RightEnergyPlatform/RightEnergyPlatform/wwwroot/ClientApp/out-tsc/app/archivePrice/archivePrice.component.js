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
var core_1 = require("@angular/core");
var dataService_1 = require("ClientApp/app/shared/dataService");
require("rxjs/add/operator/map");
var primeng_1 = require("primeng/primeng");
var ng4_loading_spinner_1 = require("ng4-loading-spinner");
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
        core_1.ViewChild("dt"),
        __metadata("design:type", primeng_1.DataTable)
    ], ArchivePriceComponent.prototype, "dt", void 0);
    ArchivePriceComponent = __decorate([
        core_1.Component({
            selector: 'app-archivePrice',
            templateUrl: './archivePrice.component.html',
            styleUrls: ['./archivePrice.component.css']
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, ng4_loading_spinner_1.Ng4LoadingSpinnerService])
    ], ArchivePriceComponent);
    return ArchivePriceComponent;
}());
exports.ArchivePriceComponent = ArchivePriceComponent;
//# sourceMappingURL=archivePrice.component.js.map