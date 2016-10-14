import {Component, OnInit} from "@angular/core";


declare var zingchart: any;

@Component({
  selector: 'app-forecast-order-gap',
  templateUrl: './forecast-order-gap.component.html',
  styleUrls: ['./forecast-order-gap.component.css']
})
export class ForecastOrderGapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    var primaryColor = "#4184F3";
    var primaryColorHover = "#3a53c5";
    var secondaryColor = '#DCDCDC'
    var scaleTextColor = '#999';

    var chartConfig = {
        "type": "hbar3d",
        "plot": {
          "stacked": true,
          "animation": {
            'method': 'LINEAR',
            'delay': 0,
            'effect': 'ANIMATION_EXPAND_VERTICAL',
            'sequence': 'ANIMATION_BY_PLOT_AND_NODE',
            'speed': 10
          }
        },
        "3d-aspect": {
          "true3d": 0,
          "y-angle": 10,
          "depth": 30
        },
        "title": {
          "text": "My Title"
        },
        "legend": {
          "layout": "float",
          "background-color": "none",
          "border-color": "none",
          "item": {
            "font-color": "#333"
          }
          ,
          "x": "37%",
          "y": "90%",
          "width": "90%",
          "shadow": 0
        }
        ,
        "globals": {
          "fontFamily": "Roboto"
        }
        ,
        "backgroundColor": "#fff",
        "scaleX": {
          "values": [
            "Customer1",
            "Customer2",
            "Customer3",
            "Customer4"
          ],
          "lineWidth": 0,
          "lineColor": "none",
          "tick": {
            "visible": false
          }
          ,
          "guide": {
            "visible": false
          }
          ,
          "item": {
            "font-color": "#999"
          }
        }
        ,
        "scaleY": {
          "lineWidth": 0,
          "lineColor": "none",
          "min-value": 0,
          "max-value": 495,
          "step": 123.75,
          "tick": {
            "visible": false
          }
          ,
          "guide": {
            "lineStyle": "solid"
          }
          ,
          "item": {
            "font-color": "#999"
          }
        }
        ,
        "tooltip": {
          "htmlMode": true,
          "backgroundColor": "none",
          "padding": 0,
          "placement": "node:center",
          "text": "<div class='zingchart-tooltip'><div class='scalex-value'>%kt<\/div><div class='scaley-value'>$%v<\/div><\/div>"
        }
        ,
        "series": [
          {
            "values": [
              100,
              180,
              120,
              120
            ],
            "alpha": 1,
            "text": "Orders",
            "background-color": "#4184f3",
            "hover-state": {
              backgroundColor: '#2956A0'
            }
          },
          {
            "values": [
              125,
              145,
              135,
              165
            ],
            "alpha": 1,
            "text": "Forecasts",
            "background-color": "#f4b400",
            "border-radius-top-left": "3px",
            "border-radius-top-right": "3px",
            "hover-state": {
              backgroundColor: '#8C6A0B'
            }
          },
          {
            "values": [
              125,
              125,
              125,
              125
            ],
            "alpha": 1,
            "text": "Gap",
            "background-color": "#db4437",
            "hover-state": {
              backgroundColor: '#901E15'
            }
          }
        ]
      }
      ;
    zingchart.render({
      id: 'chart-forecast-order-gap-dashboard',
      data: chartConfig,
      height: 400,
      width: '100%'
    });
  }

}
