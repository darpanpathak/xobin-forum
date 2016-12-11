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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var d3 = require("d3");
var BarGraph = (function () {
    function BarGraph(elementRef, width, height) {
        var el = elementRef.nativeElement; // reference to <bar-graph> element from the main template
        var graph = d3.select(el); // D3 chart container
        // setup the graph
        this.divs = graph
            .append('div')
            .attr({
            'class': 'chart'
        })
            .style({
            'width': width + 'px',
            'height': height + 'px',
        })
            .selectAll('div');
    }
    // Render the D3 Bar Chart
    BarGraph.prototype.__render = function (newValue) {
        if (!newValue)
            return;
        // join the data and chain styles and bar text ... all the usual suspects
        this.divs.data(newValue).enter().append('div')
            .transition().ease('elastic')
            .style('width', function (d) { return d + '%'; })
            .text(function (d) { return d + '%'; });
    };
    // update render on change
    BarGraph.prototype.ngOnChanges = function (changes) {
        this.__render(this.data);
    };
    return BarGraph;
}());
BarGraph = __decorate([
    core_1.Directive({
        selector: 'bar-graph',
    }),
    __param(1, core_1.Attribute('width')), __param(2, core_1.Attribute('height')),
    __metadata("design:paramtypes", [core_1.ElementRef, String, String])
], BarGraph);
exports.BarGraph = BarGraph;

//# sourceMappingURL=barchart.js.map
