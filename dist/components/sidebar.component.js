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
var bootstrap_layout_1 = require('bootstrap-layout');
var scrollable_directive_1 = require('../directives/scrollable.directive');
var SidebarComponent = (function () {
    function SidebarComponent(elementRef, sidebar) {
        this.elementRef = elementRef;
        this.sidebar = sidebar;
    }
    Object.defineProperty(SidebarComponent.prototype, "selector", {
        get: function () {
            return this.elementRef.nativeElement.querySelector('.sidebar');
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.ngAfterViewInit = function () {
        this.sidebar.init(this.selector);
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.sidebar.destroy(this.selector);
    };
    __decorate([
        core_1.Input('sidebar-id'), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "id", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            template: "\n\t\t<div class=\"sidebar sidebar-dark bg-primary\" [id]=\"id\" data-scrollable>\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t",
            directives: [
                scrollable_directive_1.ScrollableComponent
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, bootstrap_layout_1.Sidebar])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
