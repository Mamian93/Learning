"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var currentLoadList_component_1 = require("./currentLoad/currentLoadList.component");
var currentPrice_component_1 = require("./currentPrice/currentPrice.component");
var graph_component_1 = require("./graph/graph.component");
var archivePrice_component_1 = require("./archivePrice/archivePrice.component");
var archiveLoad_component_1 = require("./archiveLoad/archiveLoad.component");
var forecastPrice_component_1 = require("./forecastPrice/forecastPrice.component");
var app_component_1 = require("./app.component");
var dataService_1 = require("ClientApp/app/shared/dataService");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var primeng_1 = require("primeng/primeng");
var datatable_1 = require("primeng/components/datatable/datatable");
var ng4_loading_spinner_1 = require("ng4-loading-spinner");
var routes = [
    { path: "currentLoad", component: currentLoadList_component_1.CurrentLoadListComponent },
    { path: "currentPrice", component: currentPrice_component_1.CurrentPriceComponent },
    { path: "archivePrice", component: archivePrice_component_1.ArchivePriceComponent },
    { path: "archiveLoad", component: archiveLoad_component_1.ArchiveLoadComponent },
    { path: "graph", component: graph_component_1.GraphComponent },
    { path: "forecastPrice", component: forecastPrice_component_1.ForecastPriceComponent },
    { path: "", redirectTo: 'currentLoad', pathMatch: 'full' },
    { path: "**", redirectTo: 'currentLoad', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                currentLoadList_component_1.CurrentLoadListComponent,
                currentPrice_component_1.CurrentPriceComponent,
                graph_component_1.GraphComponent,
                archivePrice_component_1.ArchivePriceComponent,
                archiveLoad_component_1.ArchiveLoadComponent,
                forecastPrice_component_1.ForecastPriceComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                primeng_1.PanelModule,
                primeng_1.MenuModule,
                primeng_1.ChartModule,
                datatable_1.DataTableModule,
                primeng_1.PaginatorModule,
                forms_1.FormsModule,
                primeng_1.TabViewModule,
                ng4_loading_spinner_1.Ng4LoadingSpinnerModule.forRoot(),
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                dataService_1.DataService,
                common_1.DatePipe
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map