import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'ClientApp/app/shared/dataService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UIChart, DataTable, MenuItem, TreeNode, ConfirmationService, Message, LazyLoadEvent } from "primeng/primeng";
import * as moment from 'moment';
import { Price } from 'ClientApp/app/shared/price';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
    '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
    '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
    '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']

@Component({
    selector: 'app-archivePrice',
    templateUrl: './archivePrice.component.html',
    styleUrls: ['./archivePrice.component.css']
})
export class ArchivePriceComponent implements OnInit {

    @ViewChild("dt") dt: DataTable;
    constructor(private _data: DataService, private spinnerService: Ng4LoadingSpinnerService) { }

    public recordCount: number;
    public priceTable: Price[] = [];

    ngOnInit() {
        this.spinnerService.show();
        this._data.loadArchivePrices()
            .subscribe(success => {
                if (success) {
                    this.priceTable = this._data.prices;
                    this.recordCount = this.priceTable.length;
                    this.spinnerService.hide();
                }
            });
    }

}
