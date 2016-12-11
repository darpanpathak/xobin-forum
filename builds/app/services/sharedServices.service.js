"use strict";
var SharedServices = (function () {
    function SharedServices() {
    }
    SharedServices.prototype.setSelectedPost = function (post) {
        this.selectedPost = post;
    };
    SharedServices.prototype.getSelectedPost = function () {
        return this.selectedPost;
    };
    return SharedServices;
}());
exports.SharedServices = SharedServices;

//# sourceMappingURL=sharedServices.service.js.map
