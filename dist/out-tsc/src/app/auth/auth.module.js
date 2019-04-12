import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib_1.__decorate([
        NgModule({
            declarations: [LoginComponent, SignupComponent],
            imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule, FormsModule]
        })
    ], AuthModule);
    return AuthModule;
}());
export { AuthModule };
//# sourceMappingURL=auth.module.js.map