import { AfterViewInit, OnDestroy } from '@angular/core';
import { LayoutComponent } from './layout.component';
export declare class NavbarComponent implements AfterViewInit, OnDestroy {
    private layout;
    navbarClass: string;
    navbarFixed: boolean;
    navbarFixedPosition: string;
    private layoutSpacingClass;
    constructor(layout: LayoutComponent);
    isFixedTop: boolean;
    isFixedBottom: boolean;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
