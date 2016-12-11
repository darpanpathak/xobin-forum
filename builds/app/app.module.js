"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var auth_guard_1 = require("./common/auth.guard");
var angular2_jwt_js_1 = require("angular2-jwt/angular2-jwt.js");
var app_component_1 = require("./app.component");
var chart_component_1 = require("./chart/chart.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var sitemenu_component_1 = require("./sitemenu/sitemenu.component");
var PostDetails_component_1 = require("./PostDetails/PostDetails.component");
var app_routes_1 = require("./app.routes");
var authentication_service_1 = require("./services/authentication.service");
var Posts_service_1 = require("./services/Posts.service");
var sharedservices_service_1 = require("./services/sharedservices.service");
var ng2_pagination_1 = require("ng2-pagination");
var tags_pipe_1 = require("./Pipes/tags.pipe");
var ng2_nvd3_1 = require("ng2-nvd3");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, app_routes_1.routing, http_1.HttpModule, forms_1.FormsModule, ng2_pagination_1.Ng2PaginationModule],
        declarations: [app_component_1.AppComponent, login_component_1.loginComponent, home_component_1.HomeComponent, sitemenu_component_1.SitemenuComponent, PostDetails_component_1.PostDetailsComponent, tags_pipe_1.TagsPipe, ng2_nvd3_1.nvD3, chart_component_1.ChartComponent, about_component_1.AboutComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, angular2_jwt_js_1.AUTH_PROVIDERS, auth_guard_1.AuthGuard, authentication_service_1.AuthenticationService, Posts_service_1.PostsServices, sharedservices_service_1.SharedServices],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
