import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "ClientApp/app/shared/dataService";
import { Load } from "../shared/load";
import { PaginatorModule, DataTable } from 'primeng/primeng';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: "currentLoad-list",
    templateUrl: "currentLoadList.component.html",
    styleUrls: [ "currentLoadList.component.css" ]
})
export class CurrentLoadListComponent implements OnInit {

    @ViewChild("dt") dt: DataTable;
    constructor(private data: DataService,
                 private spinnerService: Ng4LoadingSpinnerService) {
    }
    
    public loads: Load[] = [];
    public recordCount: number;
    public showSpinner: boolean = true;

    ngOnInit(): void {
        this.spinnerService.show();
        this.data.loadFlows()
            .subscribe(success => {
                if (success) {
                    this.loads = this.data.loads;
                    this.recordCount = this.loads.length;
                    this.spinnerService.hide();
                }              
            });
    }
    
}