import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Load } from "../shared/load";
import { Price } from "../shared/price";


@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }
    
    public loads: Load[] = [];
    public prices: Price[] = [];

    loadPrices(): Observable<boolean> {
        return this.http.get("/api/flow/getpriceview")
            .map((data: any[]) => {
                this.prices = data;
                return true;
            });
    }
    loadArchivePrices(): Observable<boolean> {
        return this.http.get("/api/flow/getarchivepriceview")
            .map((data: any[]) => {
                this.prices = data;
                return true;
            });
    }
    loadFlows(): Observable<boolean> {
        return this.http.get("/api/flow/getflowamountview")
            .map((data: any[]) => {
                this.loads = data;
                return true;
            });
    }
    loadForecastPrices(): Observable<boolean> {
        return this.http.get("/api/flow/getlongpriceforecastloadview")
            .map((data: any[]) => {
                this.prices = data;
                return true;
            });
    }
    loadArchiveLoads(): Observable<boolean> {
        return this.http.get("/api/flow/getarchiveloadview")
            .map((data: any[]) => {
                this.loads = data;
                return true;
            });
    }



    loadGraphFlows() {
        return this.http.get("/api/flow/getflowamountview")
            .map(result => result);
    }

    loadGraphPrices() {
        return this.http.get("/api/flow/getpriceview")
            .map(result => result);
    }

    loadGraphArchivePrices() {
        return this.http.get("/api/flow/getarchivepriceview")
            .map(result => result);
    }

    loadGraphArchiveLoads() {
        return this.http.get("/api/flow/getarchiveloadview")
            .map(result => result);
    }

    loadGraphForecastPrices() {
        return this.http.get("/api/flow/getlongpriceforecastloadview")
            .map(result => result);
    }
    
    
}