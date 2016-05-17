import { Directive } from '@angular/core';
import { SidebarToggle } from 'bootstrap-layout';

@Directive({
	selector: '[ng2-bl-sidebar-toggle]',
	host: {
		'(click)': 'sidebarToggle._onClick($event)'
	}
})

export class SidebarToggleDirective {
	constructor(private sidebarToggle: SidebarToggle) {}
}