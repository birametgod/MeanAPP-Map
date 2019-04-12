import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(data) {
        this.data = data;
    }
    ErrorComponent.prototype.ngOnInit = function () { };
    ErrorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-error',
            templateUrl: './error.component.html',
            styleUrls: ['./error.component.css']
        }),
        tslib_1.__param(0, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ErrorComponent);
    return ErrorComponent;
}());
export { ErrorComponent };
//# sourceMappingURL=error.component.js.map