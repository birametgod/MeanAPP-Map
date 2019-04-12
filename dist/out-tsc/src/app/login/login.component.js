import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new FormGroup({
            email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
            password: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] })
        });
        this.subs = this.userService.getUserAuthenticateListener().subscribe(function (value) {
            _this.isLoading = value;
        });
    };
    LoginComponent.prototype.onLogin = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        this.userService.userLogin(this.form.value.email, this.form.value.password);
        this.form.reset();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map