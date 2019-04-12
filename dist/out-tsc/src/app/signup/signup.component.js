import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.isLoading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new FormGroup({
            email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
            password: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] })
        });
        this.subs = this.userService.getUserAuthenticateListener().subscribe(function (value) {
            _this.isLoading = false;
        });
    };
    SignupComponent.prototype.onSignUp = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        this.userService.addUser(this.form.value.email, this.form.value.password);
        this.form.reset();
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    SignupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map