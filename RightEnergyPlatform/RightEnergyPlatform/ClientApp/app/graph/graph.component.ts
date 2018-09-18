import { Component, OnInit } from '@angular/core';
import { DataService } from 'ClientApp/app/shared/dataService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UIChart, LazyLoadEvent } from "primeng/primeng";
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { empty } from 'rxjs/internal/observable/empty';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
    '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
    '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
    '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

    constructor(private _data: DataService,
        public datepipe: DatePipe, private spinnerService: Ng4LoadingSpinnerService) {
    }

    public chart: any;
    public loadGraph: any;
    public priceGraph: any;
    public priceForecastGraph: any;
    options: any;

    ngOnInit() {
        this.spinnerService.show();
        this._data.loadGraphFlows()
            .subscribe(res => {
                this.chart = res;
                var barIRL = this.chart.map(c => c.irlFlowAmount);
                var barNIRL = this.chart.map(c => c.nirlFlowAmount);
                var barUK = this.chart.map(c => c.ukFlowAmount);
                var barTime = this.chart.map(c => c.time);

                var arrayPlh = [];

                for (var i = 0; i < barTime.length; i++) {

                    let j = moment(barTime[i]);
                    arrayPlh.push(j.format('h:mm a'));
                }

                console.log(arrayPlh);
                this.loadGraph = {

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
                }
                this.options = {
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
            })

        this._data.loadGraphPrices()
            .subscribe(res => {
                this.chart = res;
                var barIRL = this.chart.map(c => c.irlPrice);
                var barUK = this.chart.map(c => c.ukPrice);
                var barTime = this.chart.map(c => c.time);

                var arrayPlh = [];
                for (var i = 0; i < barTime.length; i++) {
                    let j = moment(barTime[i]);
                    arrayPlh.push(j.format('h:mm a'));
                }

                this.priceGraph = {

                    labels: arrayPlh,
                    datasets: [
                        {
                            label: 'UK Price',
                            backgroundColor: DEFAULT_COLORS[1],
                            data: barUK
                        }
                    ]
                }
                this.spinnerService.hide();
            })

        this._data.loadGraphForecastPrices()
            .subscribe(res => {
                this.chart = res;
                var barIRL = this.chart.map(c => c.irlPrice);
                var barUK = this.chart.map(c => c.ukPrice);
                var barTime = this.chart.map(c => c.time);

                var arrayPlh = [];
                for (var i = 0; i < barTime.length; i++) {
                    let j = moment(barTime[i]);
                    arrayPlh.push(j.format('DD-MM h:mm a'));
                }

                this.priceForecastGraph = {

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
                }
            })

    }

    showUKPrice() {
        this.ngOnInit();
    }

    myFunction() {
        this._data.loadGraphPrices()
            .subscribe(res => {
                this.chart = res;
                var barIRL = this.chart.map(c => c.irlPrice);
                var barUK = this.chart.map(c => c.ukPrice);
                var barTime = this.chart.map(c => c.time);
                var barIRL0 = [];
                for (var i = 0; i < barIRL.length; i++) {
                    if (i % 2 == 1) {
                        barIRL0.push(barIRL[i]);
                    }
                }

                var arrayPlh = [];
                for (var i = 0; i < barTime.length; i++) {
                    if (i % 2 == 1) {
                        let j = moment(barTime[i]);
                        arrayPlh.push(j.format('h:mm a'));
                    }
                }

                this.priceGraph = {

                    labels: arrayPlh,
                    datasets: [
                        {
                            label: 'IRL Price',
                            backgroundColor: DEFAULT_COLORS[3],
                            data: barIRL0
                        }
                    ]
                }
            })
    }

    onDataSelect(event) {
        let dataSetIndex = event.element._datasetIndex;
        let dataItemIndex = event.element._index;

        let labelClicked = this.loadGraph.datasets[dataSetIndex].label;
        let valueClicked = this.loadGraph.datasets[dataSetIndex].data[dataItemIndex];

        alert(`Looks like ${labelClicked} has value ${valueClicked}`);
    }

}
