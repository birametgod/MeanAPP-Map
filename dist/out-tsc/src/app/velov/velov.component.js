import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VelovService } from '../velov.service';
var VelovComponent = /** @class */ (function () {
    function VelovComponent(velovService) {
        this.velovService = velovService;
        this.coordinates = [];
        this.stationVelov = [];
        this.displayedColumns = ['name', 'Velos', 'Stand'];
        this.lat = 45.735486;
        this.lng = 4.883498;
        this.locationChosen = false;
    }
    VelovComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    VelovComponent.prototype.onChoseLocation = function (event) {
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        this.locationChosen = true;
    };
    VelovComponent.prototype.getVelov = function () {
        var _this = this;
        var result = this.searchFormGroup.get('search').value;
        this.velovService.getVelov(result);
        this.velovService.getVelovUpdated().subscribe(function (velovUpdated) {
            console.log(velovUpdated);
            _this.stationVelov = velovUpdated;
            var res = { name: null, available_bikes: null, available_bikes_stands: null, lat: null, lng: null };
            _this.coordinates = velovUpdated.map(function (oneVelovUpdated) {
                res = tslib_1.__assign({}, res, { name: oneVelovUpdated.properties.name });
                res = tslib_1.__assign({}, res, { available_bikes: oneVelovUpdated.properties.available_bikes });
                res = tslib_1.__assign({}, res, { available_bikes_stands: oneVelovUpdated.properties.available_bike_stands });
                oneVelovUpdated.geometry.coordinates.map(function (coordinate, number) {
                    if (number % 2 === 0) {
                        res = tslib_1.__assign({}, res, { lng: coordinate });
                    }
                    else {
                        res = tslib_1.__assign({}, res, { lat: coordinate });
                    }
                });
                return res;
            });
        });
    };
    VelovComponent.prototype.addMarker = function (lat, lng) {
        // this.stationVelov = velovUpdated;
        // let res: ICoordinate = { name: null, available_bikes: null, available_bikes_stands: null, lat: null, lng: null };
        // this.coordinates = velovUpdated.map((oneVelovUpdated: Velov) => {
        //   res = { ...res, name: oneVelovUpdated.properties.name };
        //   res = { ...res, available_bikes: oneVelovUpdated.properties.available_bikes };
        //   res = { ...res, available_bikes_stands: oneVelovUpdated.properties.available_bike_stands };
        //   oneVelovUpdated.geometry.coordinates.map((coordinate, number) => {
        //     if (number % 2 === 0) {
        //       res = { ...res, lng: coordinate };
        //     } else {
        //       res = { ...res, lat: coordinate };
        //     }
        //   });
        //   return res;
        // });
    };
    VelovComponent.prototype.max = function (coordType) {
        return Math.max.apply(Math, this.coordinates.map(function (marker) { return marker[coordType]; }));
    };
    VelovComponent.prototype.min = function (coordType) {
        return Math.min.apply(Math, this.coordinates.map(function (marker) { return marker[coordType]; }));
    };
    VelovComponent.prototype.initForm = function () {
        this.searchFormGroup = new FormGroup({
            search: new FormControl('')
        });
    };
    VelovComponent = tslib_1.__decorate([
        Component({
            selector: 'app-velov',
            templateUrl: './velov.component.html',
            styleUrls: ['./velov.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [VelovService])
    ], VelovComponent);
    return VelovComponent;
}());
export { VelovComponent };
//# sourceMappingURL=velov.component.js.map