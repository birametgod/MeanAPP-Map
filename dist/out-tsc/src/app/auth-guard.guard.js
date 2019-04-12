import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuardGuard.prototype.canActivate = function (next, state) {
        var auth = this.userService.getIsAuth();
        if (!auth) {
            this.router.navigate(['/auth/login']);
        }
        return auth;
    };
    AuthGuardGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, Router])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());
export { AuthGuardGuard };
//# sourceMappingURL=auth-guard.guard.js.map