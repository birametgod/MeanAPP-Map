import * as tslib_1 from "tslib";
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from './error/error.component';
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(userService, dialog) {
        this.userService = userService;
        this.dialog = dialog;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(catchError(function (err) {
            var errorMessage = 'error';
            if (err.error.message) {
                errorMessage = err.error.message;
            }
            var dial = _this.dialog.open(ErrorComponent, {
                data: { message: errorMessage }
            });
            return throwError(err);
        }));
    };
    ErrorInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [UserService, MatDialog])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
export { ErrorInterceptor };
//# sourceMappingURL=error-interceptor.js.map