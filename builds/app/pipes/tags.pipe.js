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
var TagsPipe = (function () {
    function TagsPipe() {
    }
    TagsPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return value.replace(/\w\S*/g, function (txt) {
            var btnarr = [];
            var regex = new RegExp('<', 'g');
            var valarr = txt.replace(regex, '').split('>');
            for (var i = 0; i < valarr.length - 1; i++) {
                btnarr.push("<a class='btn btn-info'>" + valarr[i].replace('<', '') + "</a>");
            }
            var finalstring = btnarr.join('');
            return finalstring;
        });
    };
    return TagsPipe;
}());
TagsPipe = __decorate([
    core_1.Pipe({ name: 'tags' }),
    __metadata("design:paramtypes", [])
], TagsPipe);
exports.TagsPipe = TagsPipe;

//# sourceMappingURL=tags.pipe.js.map
