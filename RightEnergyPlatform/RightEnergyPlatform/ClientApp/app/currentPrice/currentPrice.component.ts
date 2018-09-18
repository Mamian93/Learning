import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'ClientApp/app/shared/dataService';
import { Price } from 'ClientApp/app/shared/price';
import { PaginatorModule, DataTable } from 'primeng/primeng';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-currentPrice',
  templateUrl: './currentPrice.component.html',
  styleUrls: ['./currentPrice.component.css']
})
export class CurrentPriceComponent implements OnInit {

    @ViewChild("dt") dt: DataTable;
    constructor(private data: DataService, private spinnerService: Ng4LoadingSpinnerService) { }

    public prices: Price[] = [];
    public recordCount: number;

    ngOnInit(): void {
        this.spinnerService.show();
        this.data.loadPrices()
            .subscribe(success => {
                if (success) {
                    this.prices = this.data.prices;
                    this.recordCount = this.prices.length;
                    this.spinnerService.hide();
                }
            });
    }
    
}
