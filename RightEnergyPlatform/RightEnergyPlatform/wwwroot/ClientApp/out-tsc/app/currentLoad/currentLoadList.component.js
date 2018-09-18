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
var primeng_1 = require("primeng/primeng");
var ng4_loading_spinner_1 = require("ng4-loading-spinner");
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
        core_1.ViewChild("dt"),
        __metadata("design:type", primeng_1.DataTable)
    ], CurrentLoadListComponent.prototype, "dt", void 0);
    CurrentLoadListComponent = __decorate([
        core_1.Component({
            selector: "currentLoad-list",
            templateUrl: "currentLoadList.component.html",
            styleUrls: ["currentLoadList.component.css"]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService,
            ng4_loading_spinner_1.Ng4LoadingSpinnerService])
    ], CurrentLoadListComponent);
    return CurrentLoadListComponent;
}());
exports.CurrentLoadListComponent = CurrentLoadListComponent;
//# sourceMappingURL=currentLoadList.component.js.map