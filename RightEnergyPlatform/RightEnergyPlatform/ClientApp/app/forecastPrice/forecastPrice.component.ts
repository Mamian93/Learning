import { Component, OnInit } from '@angular/core';
import { DataService } from 'ClientApp/app/shared/dataService';
import { Price } from 'ClientApp/app/shared/price';
import { PaginatorModule, DataTable } from 'primeng/primeng';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-forecast-price',
    templateUrl: './forecastPrice.component.html',
    styleUrls: ['./forecastPrice.component.css']
})
export class ForecastPriceComponent implements OnInit {

    constructor(private _data: DataService, private spinnerService: Ng4LoadingSpinnerService) { }

    public prices: Price[] = [];
    public recordCount: number;

    ngOnInit(): void {
        this.spinnerService.show();
        this._data.loadForecastPrices()
            .subscribe(success => {
                if (success) {
                    this.prices = this._data.prices;
                    this.recordCount = this.prices.length;
                    this.spinnerService.hide();
                }
            });
    }

}
