import { Directive } from '@angular/core';
import { SidebarToggle } from 'bootstrap-layout';

@Directive({
	selector: '[sidebar-toggle]',
	host: {
		'(click)': 'sidebarToggle._onClick($event)'
	}
})

export class SidebarToggleComponent {
	constructor(private sidebarToggle: SidebarToggle) {}
}