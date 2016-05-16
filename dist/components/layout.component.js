"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var sidebar_component_1 = require('./sidebar.component');
var scrollable_directive_1 = require('../directives/scrollable.directive');
var LayoutComponent = (function () {
    function LayoutComponent(elementRef) {
        this.elementRef = elementRef;
        this.type = 'fluid';
        this.scrollable = true;
    }
    Object.defineProperty(LayoutComponent.prototype, "wrapper", {
        get: function () {
            return this.elementRef.nativeElement.querySelector('.layout-container');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('layout-type'), 
        __metadata('design:type', String)
    ], LayoutComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input('layout-scrollable'), 
        __metadata('design:type', Boolean)
    ], LayoutComponent.prototype, "scrollable", void 0);
    __decorate([
        core_1.ContentChildren(sidebar_component_1.SidebarComponent), 
        __metadata('design:type', core_1.QueryList)
    ], LayoutComponent.prototype, "sidebarComponents", void 0);
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'layout',
            template: "\n\t\t<div class=\"layout-container\">\n\n\t\t\t<!-- Navbar -->\n\t\t\t<ng-content select=\"navbar\"></ng-content>\n\n\t\t\t<!-- Sidebar -->\n\t\t\t<ng-content select=\"sidebar\"></ng-content>\n\n\t\t\t<!-- Content -->\n\t\t\t<div class=\"layout-content\" data-scrollable>\n\t\t\t\t<div [ngClass]=\"{ 'container': type === 'fixed', 'container-fluid': type === 'fluid' }\">\n\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t</div>\n\t\t\t</div> <!-- // END Content -->\n\t\t</div>\n\t",
            directives: [
                scrollable_directive_1.ScrollableComponent
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;
