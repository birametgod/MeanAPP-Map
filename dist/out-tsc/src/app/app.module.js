import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent, HeaderComponent, ErrorComponent],
            imports: [
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                AngularMaterialModule,
                HttpClientModule,
                PostsModule,
                AuthModule
            ],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
            ],
            // identifier provided by the /common/http , and we tell angular for identifier that's the value(userclass:AuthInt..)
            bootstrap: [AppComponent],
            entryComponents: [ErrorComponent] // dynamically loaded error component on the view
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map