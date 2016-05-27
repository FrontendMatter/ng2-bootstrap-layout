import { ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Sidebar } from 'bootstrap-layout';
export declare class SidebarComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    private sidebar;
    id: String;
    sidebarClass: String;
    position: String;
    constructor(elementRef: ElementRef, sidebar: Sidebar);
    selector: string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
