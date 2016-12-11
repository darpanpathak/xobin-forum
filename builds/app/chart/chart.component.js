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
var Posts_service_1 = require("../services/Posts.service");
var ChartComponent = (function () {
    function ChartComponent(postsservice) {
        this.postsservice = postsservice;
        this.dataraw = [];
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsservice.getChartData().subscribe(function (postsdata) {
            console.log(postsdata);
            for (var i = 0; i < postsdata.tags.row; i++) {
                var json = { "label": postsdata.tags.row[0].$.TagName, "value": postsdata.tags.row[0].$.Count };
                _this.dataraw.push(json);
            }
        });
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };
        // this.data = [
        //     {
        //       key: "Tags Chart",
        //       values: []
        //     }
        //   ];
        this.data = [
            {
                key: "Tags Chart",
                values: [
                    {
                        "label": "A",
                        "value": -29.765957771107
                    },
                    {
                        "label": "B",
                        "value": 0
                    },
                    {
                        "label": "C",
                        "value": 32.807804682612
                    },
                    {
                        "label": "D",
                        "value": 196.45946739256
                    },
                    {
                        "label": "E",
                        "value": 0.19434030906893
                    },
                    {
                        "label": "F",
                        "value": -98.079782601442
                    },
                    {
                        "label": "G",
                        "value": -13.925743130903
                    },
                    {
                        "label": "H",
                        "value": -5.1387322875705
                    }
                ]
            }
        ];
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    core_1.Component({
        selector: 'chart',
        moduleId: module.id,
        template: "\n    <div>\n      <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [Posts_service_1.PostsServices])
], ChartComponent);
exports.ChartComponent = ChartComponent;

//# sourceMappingURL=chart.component.js.map
