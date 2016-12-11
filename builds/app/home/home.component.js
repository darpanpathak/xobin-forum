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
var sitemenu_component_1 = require("../sitemenu/sitemenu.component");
var Posts_service_1 = require("../services/Posts.service");
var sharedservices_service_1 = require("../services/sharedservices.service");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router, postsservice, sharedServices) {
        this.router = router;
        this.postsservice = postsservice;
        this.sharedServices = sharedServices;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsservice.getPosts().subscribe(function (postsdata) {
            _this.posts = postsdata.posts.row;
            console.log(postsdata.posts.row);
        });
    };
    HomeComponent.prototype.PostDetails = function (Id, post) {
        this.sharedServices.setSelectedPost(post);
        this.router.navigate(['postdetails', Id]);
    };
    HomeComponent.prototype.vote = function (Id, type) {
        var voteitem = localStorage.getItem(Id.toString());
        if (voteitem === undefined || voteitem === null) {
            if (type === "up")
                localStorage.setItem(Id.toString(), "1|0");
            if (type === "down")
                localStorage.setItem(Id.toString(), "0|1");
        }
        else {
            if (type === "up") {
                var upcount = +voteitem.split('|')[0] + 1;
                localStorage.setItem(Id.toString(), upcount.toString() + "|" + voteitem.split('|')[1]);
            }
            if (type === "down") {
                var downcount = +voteitem.split('|')[1] + 1;
                localStorage.setItem(Id.toString(), voteitem.split('|')[0] + "|" + downcount.toString());
            }
        }
    };
    HomeComponent.prototype.getvotecount = function (Id, type) {
        var voteitem = localStorage.getItem(Id.toString());
        if (voteitem === undefined || voteitem === null) {
            return "0";
        }
        else {
            if (type === "up")
                return voteitem.split('|')[0];
            if (type === "down")
                return voteitem.split('|')[1];
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        providers: [sitemenu_component_1.SitemenuComponent],
        moduleId: module.id,
        templateUrl: '../../partials/home.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, Posts_service_1.PostsServices, sharedservices_service_1.SharedServices])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map
