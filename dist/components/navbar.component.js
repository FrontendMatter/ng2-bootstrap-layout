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
var layout_component_1 = require('./layout.component');
var NavbarComponent = (function () {
    function NavbarComponent(layout) {
        this.layout = layout;
        this.navbarClass = 'navbar-dark bg-primary';
        this.navbarFixed = true;
        this.navbarFixedPosition = 'top';
        this.layoutSpacingClass = 'ls-top-navbar';
    }
    Object.defineProperty(NavbarComponent.prototype, "isFixedTop", {
        get: function () {
            return this.navbarFixed && this.navbarFixedPosition === 'top';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "isFixedBottom", {
        get: function () {
            return this.navbarFixed && this.navbarFixedPosition === 'bottom';
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.ngAfterViewInit = function () {
        if (this.isFixedTop) {
            this.layout.wrapper.classList.add(this.layoutSpacingClass);
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.isFixedTop) {
            this.layout.wrapper.classList.remove(this.layoutSpacingClass);
        }
    };
    __decorate([
        core_1.Input('navbar-class'), 
        __metadata('design:type', String)
    ], NavbarComponent.prototype, "navbarClass", void 0);
    __decorate([
        core_1.Input('navbar-fixed'), 
        __metadata('design:type', Boolean)
    ], NavbarComponent.prototype, "navbarFixed", void 0);
    __decorate([
        core_1.Input('navbar-fixed-position'), 
        __metadata('design:type', String)
    ], NavbarComponent.prototype, "navbarFixedPosition", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            template: "\n\t\t<nav class=\"navbar navbar-full\" [class.navbar-fixed-top]=\"isFixedTop\" [class.navbar-fixed-bottom]=\"isFixedBottom\" [ngClass]=\"navbarClass\" [class.ls-left-sidebar]=\"layout.sidebarComponents.length\">\n\t\t\t<ng-content></ng-content>\n\t\t</nav>\n\t"
        }), 
        __metadata('design:paramtypes', [layout_component_1.LayoutComponent])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
