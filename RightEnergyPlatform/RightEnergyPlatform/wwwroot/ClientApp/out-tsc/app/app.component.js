"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        core_1.Component({
            selector: 'rep-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map