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
var common_1 = require("@angular/common");
var moment = require("moment");
var ng4_loading_spinner_1 = require("ng4-loading-spinner");
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
                var j = moment(barTime[i]);
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
                var j = moment(barTime[i]);
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
                var j = moment(barTime[i]);
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
                    var j = moment(barTime[i]);
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
        core_1.Component({
            selector: 'app-graph',
            templateUrl: './graph.component.html',
            styleUrls: ['./graph.component.css']
        }),
        __metadata("design:paramtypes", [dataService_1.DataService,
            common_1.DatePipe, ng4_loading_spinner_1.Ng4LoadingSpinnerService])
    ], GraphComponent);
    return GraphComponent;
}());
exports.GraphComponent = GraphComponent;
//# sourceMappingURL=graph.component.js.map