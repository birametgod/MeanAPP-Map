import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatProgressSpinnerModule, MatPaginatorModule, MatDialogModule, MatIconModule, MatTableModule, MatBadgeModule } from '@angular/material';
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                MatInputModule,
                MatCardModule,
                MatDialogModule,
                MatIconModule,
                MatPaginatorModule,
                MatToolbarModule,
                MatExpansionModule,
                MatProgressSpinnerModule,
                MatButtonModule,
                MatTableModule,
                MatBadgeModule
            ],
            exports: [
                MatInputModule,
                MatCardModule,
                MatDialogModule,
                MatPaginatorModule,
                MatToolbarModule,
                MatExpansionModule,
                MatProgressSpinnerModule,
                MatButtonModule,
                MatIconModule,
                MatTableModule,
                MatBadgeModule
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());
export { AngularMaterialModule };
//# sourceMappingURL=angular-material.module.js.map