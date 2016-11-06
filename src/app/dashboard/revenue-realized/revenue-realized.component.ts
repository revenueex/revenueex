import {Component, OnInit} from "@angular/core";

declare var zingchart: any;

@Component({
  selector: 'app-revenue-realized',
  templateUrl: './revenue-realized.component.html',
  styleUrls: ['./revenue-realized.component.css']
})
export class RevenueRealizedComponent implements OnInit {

  constructor() {
  }

  getAverageWinRate() {
    //windRate
    let winRate: number = 0.21;
    let data: number[] = [];
    for (let i = 0; i < 10; i++) {

      data.push(2 + i * winRate);
    }
    return data;
  }


  ngOnInit() {
    zingchart.THEME = "classic";
    var myConfig = {
        "graphset": [
          {
            "type": "gauge",
            "width": "50%",
            "backgroundColor": "white",
            title: {
              text: "Revenue Realized",
              fontColor: "#5f5f5f",
              backgroundColor: "transparent",
              textAlign: "center",
              padding: "0px 15px",
              fontSize: "14px"
            },
            "plotarea": {
              "y": 0,
              height: "150%"
            },
            "scale-r": {
              "aperture": 200,
              "values": "0:100:20",
              labels: ['', '', '', '', '', ''],
              tick: {
                visible: false
              },
              "center": {
                "size": 5,
                "background-color": "#66CCFF #FFCCFF",
                "border-color": "none"
              }
              ,
              "plotarea": {
                "margin": "0px 0px 0px 0px"
              }
              ,
              "plot": {
                "value-box": {
                  "visible": false
                }
                ,
                "animation": {
                  "delay": 0,
                  "effect": 2,
                  "speed": "1000",
                  "method": "0",
                  "sequence": "1"
                }
              }
              ,
              ring: {
                size: 20,
                rules: [
                  {
                    rule: '%v <= 40',
                    backgroundColor: '#fe6c00'
                  },
                  {
                    rule: '%v > 40 && %v < 64',
                    backgroundColor: '#ffc91c'
                  },
                  {
                    rule: '%v >= 64',
                    backgroundColor: '#18aa4a'
                  }
                ]
              }
            }
            ,
            "plot": {
              "csize": "5%",
              "size": "100%",
              "background-color": "#000000"
            }
            ,
            "series": [
              {
                "values": [83]
              }
            ],
            labels: [{
              id: 'score',
              text: '3.0M',
              x: '50%',
              y: '70%',
              anchor: 'c',
              fontSize: 25
            }]
          },
          {
            backgroundColor: "#fff",
            globals: {
              shadow: false,
              fontFamily: "Helvetica"
            }
            ,
            type: "area",
            "width": "50%",
            title: {
              text: "Average Win Rate",
              fontColor: "#5f5f5f",
              backgroundColor: "transparent",
              textAlign: "center",
              padding: "0px 15px",
              fontSize: "14px"
            }
            ,
            scaleX: {
              visible: false
            }
            ,
            scaleY: {
              visible: false,
              "max-value": 10,
            }
            ,
            tooltip: {
              visible: false
            }
            ,
            plot: {
              "contour-on-top": false,
              alphaArea: 1,
              lineWidth: "2px",
              aspect: "spline",
              marker: {
                visible: false
              }
              ,
              animation: {
                delay: 500,
                effect: "ANIMATION_SLIDE_TOP",
                speed: 700,
                method: 0,
                sequence: 1
              }
            }
            ,
            series: [
              {
                text: "All Sites",
                values: this.getAverageWinRate(),
                backgroundColor1: "#978af6",
                backgroundColor2: "#978af6",
                lineColor: "#978af6"
              }
            ]
          }
          ,
          {
            "type": "area",
            "background-color": "#fff",
            "width": "50%",
            "utc": true,
            title: {
              text: "Revenue Attainment",
              fontColor: "#5f5f5f",
              backgroundColor: "transparent",
              textAlign: "center",
              padding: "0px 15px",
              fontSize: "14px"
            }
            ,
            "plotarea": {
              "margin-top": "10%",
              "margin-right": "dynamic",
              "margin-bottom": "dynamic",
              "margin-left": "dynamic",
              "adjust-layout": true
            }
            ,
            "labels": [
              {
                "text": "98%",
                "default-value": "",
                "color": "#5f5f5f",
                "x": "20%",
                "y": 50,
                "width": 50,
                "text-align": "left",
                "bold": 0,
                "font-size": "24px",
                "font-weight": "bold"
              },
              {
                "text": "of Quota",
                "default-value": "",
                "color": "#5f5f5f",
                "x": "40%",
                "y": 50,
                "width": 120,
                "text-align": "left",
                "bold": 0,
                "font-size": "14px",
                "font-weight": "bold"
              }
            ],
            "scale-x": {
              visible: false
            }
            ,
            "crosshair-x": {
              "line-color": "#fff",
              "line-width": 1,
              "plot-label": {
                "visible": false
              }
            }
            ,
            "scale-y": {
              "min-value": 800,
              "max-value": 4000,
              visible: false
            }
            ,
            "plot": {
              "line-width": 2,
              "marker": {
                "size": 1,
                "visible": false
              }
              ,
              "tooltip": {
                "font-family": "Roboto",
                "font-size": "15px",
                "text": "There were %v %t on %data-days",
                "text-align": "left",
                "border-radius": 5,
                "padding": 10
              }
              ,
              "animation": {
                "delay": 0,
                "effect": 4,
                "speed": "1000",
                "method": "0",
                "sequence": "0"

              }
            }
            ,
            "series": [
              {
                "values": [
                  1204,
                  1179,
                  1146,
                  1182,
                  1058,
                  1086,
                  1141,
                  1105,
                  1202,
                  992,
                  1200,
                  1350
                ],
                "data-days": [
                  "Sept 19",
                  "Sept 20",
                  "Sept 21",
                  "Sept 22",
                  "Sept 23",
                  "Sept 24",
                  "Sept 25",
                  "Sept 26",
                  "Sept 27",
                  "Sept 28",
                  "Sept 29",
                  "Sept 30"
                ],
                "line-color": "#fc8d62",
                "aspect": "spline",
                "background-color": "#fc8d62",
                "alpha-area": ".3",
                "font-family": "Roboto",
                "font-size": "14px",
                "text": "returns"
              }
            ]
          }
          ,
          {
            "type": "pie",
            "width": "50%",
            "background-color": "#ffffff",
            "border-radius": 4,
            title: {
              text: "Shipments",
              fontColor: "#5f5f5f",
              backgroundColor: "transparent",
              textAlign: "center",
              padding: "0px 15px",
              fontSize: "14px"
            }
            ,
            "value-box": {
              "visible": true
            }
            ,
            "plotarea": {
              "margin": "20% 0% 0% 0%"
            }
            ,
            "plot": {
              "slice": 50,
              "ref-angle": 225,
              "detach": false,
              "hover-state": {
                "visible": false
              }
              ,
              "value-box": {
                "visible": true,
                "type": "first",
                "connected": false,
                "placement": "center",
                "text": "0.2M",
                "rules": [
                  {
                    "rule": "%v < 3850",
                    "visible": false
                  }
                ],
                "font-color": "#000000",
                "font-size": "20px"
              }
              ,
              "tooltip": {
                "rules": [
                  {
                    "rule": "%i == 0",
                    "text": "%v %t ",
                    "shadow": false,
                    "border-radius": 4
                  },
                  {
                    "rule": "%i == 1",
                    "text": "%v",
                    "shadow": false,
                    "border-radius": 4
                  }
                ]
              }
              ,
              "animation": {
                "delay": 0,
                "effect": 2,
                "speed": "600",
                "method": "0",
                "sequence": "1"
              }
            }
            ,
            "series": [
              {
                "values": [3852],
                "text": "Shipped",
                "background-color": "#18aa4a",
                "border-width": "0px",
                "shadow": 0
              },
              {
                "values": [1148],
                "text": "In-transit",
                "background-color": "#53bbd4",
                "border-color": "#dadada",
                "border-width": "1px",
                "shadow": 0
              }, {
                "values": [1148],
                "background-color": "#ffc91c",
                "text": "Late",
                "border-color": "#dadada",
                "border-width": "1px",
                "shadow": 0
              }, {
                "values": [200],
                "background-color": "#fe6c00",
                "text": "Cancelled",
                "border-color": "#dadada",
                "border-width": "1px",
                "shadow": 0
              }
            ]
          }
        ]
      }
      ;

    zingchart
      .render({
        id: 'chart-revenue-realized-dashboard',
        data: myConfig,
        height: 400,
        width: "100%"
      });
  }
}
