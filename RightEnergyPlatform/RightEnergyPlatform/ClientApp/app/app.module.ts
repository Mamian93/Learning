import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { CurrentLoadListComponent } from './currentLoad/currentLoadList.component';
import { CurrentPriceComponent } from './currentPrice/currentPrice.component';
import { GraphComponent } from './graph/graph.component';
import { ArchivePriceComponent } from './archivePrice/archivePrice.component';
import { ArchiveLoadComponent } from './archiveLoad/archiveLoad.component';
import { ForecastPriceComponent } from './forecastPrice/forecastPrice.component';

import { AppComponent } from './app.component';
import { DataService } from 'ClientApp/app/shared/dataService';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { MenuModule, PanelModule, ChartModule, PaginatorModule, TabViewModule } from 'primeng/primeng';
import * as moment from 'moment';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


let routes = [
    { path: "currentLoad", component: CurrentLoadListComponent },
    { path: "currentPrice", component: CurrentPriceComponent },
    { path: "archivePrice", component: ArchivePriceComponent },
    { path: "archiveLoad", component: ArchiveLoadComponent },
    { path: "graph", component: GraphComponent },
    { path: "forecastPrice", component: ForecastPriceComponent },
    { path: "", redirectTo: 'currentLoad', pathMatch: 'full' },
    { path: "**", redirectTo: 'currentLoad', pathMatch: 'full' }
];

@NgModule({
  declarations: [
      AppComponent,
      CurrentLoadListComponent,
      CurrentPriceComponent,
      GraphComponent,
      ArchivePriceComponent,
      ArchiveLoadComponent,
      ForecastPriceComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      PanelModule,
      MenuModule,
      ChartModule,
      DataTableModule,
      PaginatorModule,
      FormsModule,
      TabViewModule,
      Ng4LoadingSpinnerModule.forRoot(),
      RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false // for Debugging of the Routes
      })
  ],
    providers: [
        DataService,
        DatePipe
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
