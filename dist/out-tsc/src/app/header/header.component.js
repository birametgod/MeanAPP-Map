import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
        this.isAuthenticate = false;
        this.tst = new FormControl();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthenticate = this.userService.getIsAuth();
        this.authSubs = this.userService.getUserAuthenticateListener().subscribe(function (authValue) {
            _this.isAuthenticate = authValue;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.userService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authSubs.unsubscribe();
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map