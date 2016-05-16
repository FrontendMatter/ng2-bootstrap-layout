import { QueryList, ElementRef } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
export declare class LayoutComponent {
    private elementRef;
    type: string;
    scrollable: boolean;
    sidebarComponents: QueryList<SidebarComponent>;
    constructor(elementRef: ElementRef);
    wrapper: any;
}
