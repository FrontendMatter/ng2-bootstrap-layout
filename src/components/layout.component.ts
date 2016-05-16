import { Component, Input, ContentChildren, QueryList, ElementRef } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { ScrollableComponent } from '../directives/scrollable.directive';

@Component({
	selector: 'layout',
	template: `
		<div class="layout-container">

			<!-- Navbar -->
			<ng-content select="navbar"></ng-content>

			<!-- Sidebar -->
			<ng-content select="sidebar"></ng-content>

			<!-- Content -->
			<div class="layout-content" data-scrollable>
				<div [ngClass]="{ 'container': type === 'fixed', 'container-fluid': type === 'fluid' }">
					<ng-content></ng-content>
				</div>
			</div> <!-- // END Content -->
		</div>
	`,
	directives: [
		ScrollableComponent
	]
})

export class LayoutComponent {
	@Input('layout-type') type: string = 'fluid';
	@Input('layout-scrollable') scrollable: boolean = true;
	@ContentChildren(SidebarComponent) sidebarComponents: QueryList<SidebarComponent>

	constructor(private elementRef: ElementRef) {}

	get wrapper() {
		return this.elementRef.nativeElement.querySelector('.layout-container');
	}
}