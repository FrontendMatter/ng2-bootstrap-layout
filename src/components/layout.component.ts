import { Component, Input, ContentChildren, QueryList, ElementRef } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { ScrollableDirective } from '../directives/scrollable.directive';

@Component({
	selector: 'ng2-bl-layout',
	template: `
		<div class="layout-container">

			<!-- Navbar -->
			<ng-content select="ng2-bl-navbar"></ng-content>

			<!-- Sidebar -->
			<ng-content select="ng2-bl-sidebar"></ng-content>

			<!-- Content -->
			<div class="layout-content" ng2-bl-scrollable>
				<div [ngClass]="{ 'container': type === 'fixed', 'container-fluid': type === 'fluid' }">
					<ng-content></ng-content>
				</div>
			</div> <!-- // END Content -->
		</div>
	`,
	directives: [
		ScrollableDirective
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