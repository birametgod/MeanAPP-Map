import * as tslib_1 from "tslib";
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService) {
        this.userService = userService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = this.userService.getToken();
        var authToken = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token)
        });
        return next.handle(authToken);
    };
    AuthInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=auth-interceptor.js.map