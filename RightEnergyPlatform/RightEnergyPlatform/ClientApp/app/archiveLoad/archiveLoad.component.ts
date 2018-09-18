import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'ClientApp/app/shared/dataService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UIChart, DataTable, MenuItem, TreeNode, ConfirmationService, Message, LazyLoadEvent } from "primeng/primeng";
import * as moment from 'moment';
import { Load } from 'ClientApp/app/shared/load';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-archiveLoad',
  templateUrl: './archiveLoad.component.html',
  styleUrls: ['./archiveLoad.component.css']
})
export class ArchiveLoadComponent implements OnInit {

    @ViewChild("dt") dt: DataTable;
    constructor(private _data: DataService, private spinnerService: Ng4LoadingSpinnerService) { }

    public recordCount: number;
    public loadTable: Load[] = [];

    ngOnInit() {
        this.spinnerService.show();
        this._data.loadArchiveLoads()
            .subscribe(success => {
                if (success) {
                    this.loadTable = this._data.loads;
                    this.recordCount = this.loadTable.length;
                    this.spinnerService.hide();
                }
            });
    }

}
