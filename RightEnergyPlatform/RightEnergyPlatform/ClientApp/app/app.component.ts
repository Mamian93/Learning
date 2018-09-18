import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MenuItem } from "primeng/primeng";
import { Menu } from "primeng/components/menu/menu";

@Component({
    selector: 'rep-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
    menuItems: MenuItem[];

    ngOnInit(): void {
        this.menuItems = [
            { label: 'Current Load', icon: 'fa fa-bolt', routerLink: ['/currentLoad'] },
            { label: 'Current Price', icon: 'fa fa-money', routerLink: ['/currentPrice'] },
            { label: 'Archive Load', icon: 'fa fa-archive', routerLink: ['/archiveLoad'] },
            { label: 'Archive Price', icon: 'fa fa-archive', routerLink: ['/archivePrice'] },
            { label: 'Graph', icon: 'fa fa-line-chart', routerLink: ['/graph'] },
            { label: 'Forecast Price', icon: 'fa fa-chevron-right', routerLink: ['/forecastPrice'] }
            
        ]
    }
    title = 'app';
}
