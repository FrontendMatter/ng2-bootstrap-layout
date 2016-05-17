import { Component, Input, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Sidebar } from 'bootstrap-layout';
import { ScrollableDirective } from '../directives/scrollable.directive';

@Component({
	selector: 'ng2-bl-sidebar',
	template: `
		<div class="sidebar sidebar-dark bg-primary" [id]="id" ng2-bl-scrollable>
			<ng-content></ng-content>
		</div>
	`,
	directives: [
		ScrollableDirective
	]
})

export class SidebarComponent implements AfterViewInit, OnDestroy {
	@Input('sidebar-id') id: String;

	constructor(private elementRef: ElementRef, private sidebar: Sidebar) {}

	get selector(): string {
		return this.elementRef.nativeElement.querySelector('.sidebar');
	}

	ngAfterViewInit(): void {
		this.sidebar.init(this.selector);
	}

	ngOnDestroy(): void {
		this.sidebar.destroy(this.selector);
	}
}