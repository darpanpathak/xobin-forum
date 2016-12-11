import { Component } from '@angular/core';
import { nvD3 } from 'http://cdn.rawgit.com/krispo/ng2-nvd3/v1.1.0/lib/ng2-nvd3.ts';
import { PostsServices } from '../services/Posts.service';

@Component({
  selector: 'chart',
  moduleId: module.id,
  template: `
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
  `
})
export class ChartComponent {
  options: any;
  data: any;
  chartType: any;
  dataraw = [];


  constructor(private postsservice: PostsServices) { }

  ngOnInit() {

    this.postsservice.getChartData().subscribe(postsdata => {
      console.log(postsdata);

      for (var i = 0; i < postsdata.tags.row; i++) {
        var json = { "label": postsdata.tags.row[0].$.TagName, "value": postsdata.tags.row[0].$.Count };
        this.dataraw.push(json);
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
    }

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
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
          {
            "label" : "D" ,
            "value" : 196.45946739256
          } ,
          {
            "label" : "E" ,
            "value" : 0.19434030906893
          } ,
          {
            "label" : "F" ,
            "value" : -98.079782601442
          } ,
          {
            "label" : "G" ,
            "value" : -13.925743130903
          } ,
          {
            "label" : "H" ,
            "value" : -5.1387322875705
          }
        ]
      }
    ];


    
  }

  // ngAfterViewInit() {
  //   //  this.nvD3.chart.update()
  // }

}