import {Component, OnInit} from "@angular/core";

declare var zingchart: any;

@Component({
  selector: 'app-customer-chart',
  templateUrl: './customer-chart.component.html',
  styleUrls: ['./customer-chart.component.css']
})
export class CustomerChartComponent implements OnInit {

  chartConfig: any = {
    "type": "bar",
    "plot": {
      "stacked": true,
      "bar-width": "61.8%"
    },
    "globals": {
      "fontFamily": "Roboto"
    },
    "legend": {
      "layout": "float",
      "background-color": "none",
      "border-color": "none",
      "item": {
        "font-color": "#333"
      }
      ,
      "x": "20%",
      "y": "90%",
      "width": "90%",
      "shadow": 0
    },
    "backgroundColor": "#fff",
    "scaleX": {
      "values": [
        "16 GB",
        "32 GB",
        "64 GB",
        "128 GB"
      ],
      "lineWidth": 0,
      "lineColor": "none",
      "tick": {
        "visible": false
      },
      "guide": {
        "visible": false
      },
      "item": {
        "font-color": "#999"
      }
    },
    "scaleY": {
      "lineWidth": 0,
      "lineColor": "none",
      "min-value": 0,
      "max-value": 50000,
      "step": 5000,
      "thousands-separator": ",",
      "tick": {
        "visible": false
      },
      "guide": {
        "lineStyle": "solid"
      },
      "item": {
        "font-color": "#999"
      }
    },
    "series": [
      {
        "values": [
          10000,
          18000,
          12000,
          12000
        ],
        "text": "Forecast",
        "background-color": "#53bbd4",
        "hover-state": {
          backgroundColor: '#3199b2'
        }
      },
      {
        "values": [
          12500,
          12500,
          12500,
          12500
        ],
        "alpha": 1,
        "text": "Ordered",
        "background-color": "#18aa4a",
        "hover-state": {
          backgroundColor: '#089a3a'
        }
      },
      {
        "values": [
          2500,
          4500,
          3700,
          1200
        ],
        "alpha": 1,
        "text": "Confirmed",
        "background-color": "#54698D",
        "hover-state": {
          backgroundColor: '#44597D'
        }
      },

      {
        "values": [
          2500,
          4500,
          3700,
          1200
        ],
        "alpha": 1,
        "text": "Unconfirmed",
        "background-color": "#fe6c00",
        "hover-state": {
          backgroundColor: '#e34c00'
        }
      },
      {
        "values": [
          2500,
          4500,
          3700,
          1200
        ],
        "alpha": 1,
        "text": "Shipped",
        "background-color": "#00396B",
        "hover-state": {
          backgroundColor: '#00295B'
        }
      },
      {
        "values": [
          2500,
          4700,
          1200,
          2300
        ],
        "alpha": 1,
        "text": "Gap",
        "background-color": "#901E15",
        "hover-state": {
          backgroundColor: '#800E05'
        },
        "border-radius-top-left": "3px",
        "border-radius-top-right": "3px"
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
    this.chartConfig.plot.animation = {
      'method': 'LINEAR',
      'delay': 0,
      'effect': 'ANIMATION_EXPAND_VERTICAL',
      'sequence': 'ANIMATION_BY_PLOT_AND_NODE',
      'speed': 10
    };
    zingchart.render({
      id: 'chart-customer-dashboard',
      data: this.chartConfig,
      output: 'canvas',
      height: '100%',
      width: '100%'
    });
  }

}
