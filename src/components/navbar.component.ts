import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { LayoutComponent } from './layout.component';

@Component({
	selector: 'ng2-bl-navbar',
	template: `
		<nav class="navbar navbar-full" [class.navbar-fixed-top]="isFixedTop" [class.navbar-fixed-bottom]="isFixedBottom" [ngClass]="navbarClass" [class.ls-left-sidebar]="layout.sidebarComponents.length">
			<ng-content></ng-content>
		</nav>
	`
})

export class NavbarComponent implements AfterViewInit, OnDestroy {
	@Input('navbar-class') navbarClass: string = 'navbar-dark bg-primary';
	@Input('navbar-fixed') navbarFixed: boolean = true;
	@Input('navbar-fixed-position') navbarFixedPosition: string = 'top';
	
	private layoutSpacingClass: string = 'ls-top-navbar';

	constructor(private layout: LayoutComponent) {}

	get isFixedTop(): boolean {
		return this.navbarFixed && this.navbarFixedPosition === 'top'
	}

	get isFixedBottom(): boolean {
		return this.navbarFixed && this.navbarFixedPosition === 'bottom'
	}

	ngAfterViewInit(): void {
		if (this.isFixedTop) {
			this.layout.wrapper.classList.add(this.layoutSpacingClass)
		}
	}

	ngOnDestroy(): void {
		if (this.isFixedTop) {
			this.layout.wrapper.classList.remove(this.layoutSpacingClass)
		}
	}
}