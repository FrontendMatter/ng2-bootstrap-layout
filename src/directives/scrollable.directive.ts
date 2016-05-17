import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import { scrollable } from 'bootstrap-layout-scrollable';

@Directive({
	selector: '[ng2-bl-scrollable]'
})

export class ScrollableDirective implements AfterViewInit {
	constructor(private elementRef: ElementRef) {}
	ngAfterViewInit(): void {
		scrollable.init(this.elementRef.nativeElement)
	}
}