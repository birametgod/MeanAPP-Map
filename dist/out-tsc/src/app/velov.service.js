import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
var BACKEND_URL = environment.apiUrl + '/station/';
var VelovService = /** @class */ (function () {
    function VelovService(httpClient, route) {
        this.httpClient = httpClient;
        this.route = route;
        this.velovUpdated = new Subject();
    }
    VelovService.prototype.getVelov = function (address) {
        var _this = this;
        var queryParams = "?address=" + address;
        this.httpClient.get(BACKEND_URL + queryParams).subscribe(function (velovResult) {
            _this.velovUpdated.next(velovResult);
        });
    };
    VelovService.prototype.getVelovUpdated = function () {
        return this.velovUpdated.asObservable();
    };
    VelovService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], VelovService);
    return VelovService;
}());
export { VelovService };
//# sourceMappingURL=velov.service.js.map