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
var headers_1 = require("../common/headers");
require("rxjs/add/operator/map");
var angular2_jwt_js_1 = require("angular2-jwt/angular2-jwt.js");
var PostsServices = (function () {
    function PostsServices(authHttp) {
        this.authHttp = authHttp;
    }
    PostsServices.prototype.getPosts = function () {
        return this.authHttp.get('/api/getPosts', { headers: headers_1.contentHeaders })
            .map(function (res) { return res.json(); });
    };
    PostsServices.prototype.getPostDetails = function (Id) {
        return this.authHttp.get('/api/getPostDetails/' + Id, { headers: headers_1.contentHeaders })
            .map(function (res) { return res.json(); });
    };
    PostsServices.prototype.getChartData = function () {
        return this.authHttp.get('/api/gettagscount/', { headers: headers_1.contentHeaders })
            .map(function (res) { return res.json(); });
    };
    return PostsServices;
}());
PostsServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angular2_jwt_js_1.AuthHttp])
], PostsServices);
exports.PostsServices = PostsServices;

//# sourceMappingURL=Posts.service.js.map
