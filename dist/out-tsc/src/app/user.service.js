import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
var BACKEND_URL = environment.apiUrl + '/user';
var UserService = /** @class */ (function () {
    function UserService(http, route) {
        this.http = http;
        this.route = route;
        this.isAuthenticate = false;
        this.userAuthenticate = new Subject();
    }
    UserService.prototype.addUser = function (email, password) {
        var _this = this;
        var user = {
            email: email,
            password: password
        };
        this.http.post(BACKEND_URL + '/signup', user).subscribe(function (res) {
            _this.route.navigate(['/']);
        }, function (error) {
            _this.userAuthenticate.next(false);
        });
    };
    UserService.prototype.getToken = function () {
        return this.token;
    };
    UserService.prototype.getIsAuth = function () {
        return this.isAuthenticate;
    };
    UserService.prototype.getIdUser = function () {
        return this.idUser;
    };
    UserService.prototype.getUserAuthenticateListener = function () {
        return this.userAuthenticate.asObservable();
    };
    UserService.prototype.logout = function () {
        this.token = null;
        this.idUser = null;
        this.isAuthenticate = false;
        this.userAuthenticate.next(false);
        clearTimeout(this.myTimer);
        this.clearAuthData();
        this.route.navigate(['/']);
    };
    UserService.prototype.userLogin = function (email, password) {
        var _this = this;
        var user = {
            email: email,
            password: password
        };
        this.http
            .post(BACKEND_URL + '/login', user)
            .subscribe(function (res) {
            _this.token = res.token;
            if (res.token) {
                _this.setTimer(res.expiresIn);
            }
            _this.idUser = res.user._id;
            var now = new Date();
            var expireDate = new Date(now.getTime() + res.expiresIn * 1000);
            _this.saveAuthData(res.token, expireDate);
            _this.isAuthenticate = true;
            _this.userAuthenticate.next(true);
            _this.route.navigate(['/']);
        }, function (error) {
            _this.userAuthenticate.next(false);
        });
    };
    UserService.prototype.autoUserAuth = function () {
        var authData = this.getAuhtData();
        var now = new Date();
        if (!authData) {
            return;
        }
        var expiresIn = authData.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.setTimer(expiresIn / 1000);
            this.token = authData.token;
            this.idUser = authData.userId;
            this.isAuthenticate = true;
            this.userAuthenticate.next(true);
        }
    };
    UserService.prototype.setTimer = function (duration) {
        var _this = this;
        this.myTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    UserService.prototype.saveAuthData = function (token, expirationDate) {
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate.toISOString());
        localStorage.setItem('userId', this.idUser);
    };
    UserService.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userId');
    };
    UserService.prototype.getAuhtData = function () {
        var userId = localStorage.getItem('userId');
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expirationDate');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map