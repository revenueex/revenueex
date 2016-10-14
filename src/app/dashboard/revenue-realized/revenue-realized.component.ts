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

  ngOnInit() {
    zingchart.THEME = "classic";
    var myConfig = {
      "background-color": "white",
      "graphset": [
        {
          "type": "gauge",
          "scale-r": {
            "aperture": 200,
            "values": "0:100:20",
            "center": {
              "size": 5,
              "background-color": "#66CCFF #FFCCFF",
              "border-color": "none"
            },
            "ring": {
              "size": 10,
              "rules": [
                {
                  "rule": "%v >= 0 && %v <= 20",
                  "background-color": "red"
                },
                {
                  "rule": "%v >= 20 && %v <= 40",
                  "background-color": "orange"
                },
                {
                  "rule": "%v >= 40 && %v <= 60",
                  "background-color": "yellow"
                },
                {
                  "rule": "%v >= 60 && %v <= 80",
                  "background-color": "green"
                },
                {
                  "rule": "%v >= 80 && %v <=100",
                  "background-color": "blue"
                }
              ]
            },
            "guide": { //Specify your gauge chart's background color(s).
              "background-color": "#66CCFF #FFCCFF",
              "alpha": 0.2
            }
          },
          "plot": {
            "csize": "5%",
            "size": "100%",
            "background-color": "#000000"
          },
          "series": [
            {"values": [87]}
          ]
        },
        {
          "type": "pie",
          "width": "34%",
          "x": "66%",
          "background-color": "white",
          "title": {
            "background-color": "none",
            "font-weight": "normal",
            "font-family": "Arial",
            "font-color": "#ffffff",
            "height": "40px"
          },
          "plotarea": {
            "margin": "60px 10px 0px 0px"
          },
          "plot": {
            "value-box": {
              "visible": false
            },
            "animation": {
              "delay": 0,
              "effect": 2,
              "speed": "300",
              "method": "0",
              "sequence": "1"
            }
          },
          "series": [
            {
              "text": "Product 1",
              "values": [
                15
              ],
              "background-color": "#57dce5",
              "border-color": "#454754",
              "border-width": "1px",
              "shadow": 0,
              "tooltip": {
                "background-color": "#54ced4",
                "font-color": "#454754",
                "border-radius": "6px",
                "shadow": false,
                "padding": "5px 10px"
              }
            },
            {
              "text": "Product 2",
              "values": [
                18
              ],
              "background-color": "#9688f7",
              "border-color": "#454754",
              "border-width": "1px",
              "shadow": 0,
              "tooltip": {
                "background-color": "#796bdd",
                "font-color": "#ffffff",
                "border-radius": "6px",
                "shadow": false,
                "padding": "5px 10px"
              }
            },
            {
              "text": "Product 3",
              "values": [
                20
              ],
              "background-color": "#b659b4",
              "border-color": "#454754",
              "border-width": "1px",
              "shadow": 0,
              "tooltip": {
                "background-color": "#a03f9c",
                "font-color": "#ffffff",
                "border-radius": "6px",
                "shadow": false,
                "padding": "5px 10px"
              }
            },
            {
              "text": "Product 4",
              "values": [
                16
              ],
              "background-color": "#3bbcfc",
              "border-color": "#454754",
              "border-width": "1px",
              "shadow": 0,
              "tooltip": {
                "background-color": "#1b9ede",
                "font-color": "#ffffff",
                "border-radius": "6px",
                "shadow": false,
                "padding": "5px 10px"
              }
            },
            {
              "text": "Product 5",
              "values": [
                21
              ],
              "background-color": "#6597a2",
              "border-color": "#454754",
              "border-width": "1px",
              "shadow": 0,
              "tooltip": {
                "background-color": "#2f6672",
                "font-color": "#ffffff",
                "border-radius": "6px",
                "shadow": false,
                "padding": "5px 10px"
              }
            }
          ]
        },
        {
          "type": "bar",
          "width": "100%",
          "background-color": "white",
          "border-bottom": "8px solid #565867",
          "plot": {
            "bar-space": "10px",
            "animation": {
              "delay": 0,
              "effect": 4,
              "speed": "1000",
              "method": "0",
              "sequence": "0"
            }
          },
          "plotarea": {
            "margin": "45px 30px 40px 65px"
          },
          "scale-x": {
            "values": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "line-color": "#55717c",
            "offset-y": "4px",
            "tick": {
              "size": "5px",
              "line-color": "#55717c",
              "line-width": "1px",
              "visible": false
            },
            "guide": {
              "visible": false
            },
            "item": {
              "font-size": "10px",
              "font-family": "Arial",
              "font-color": "#c0c0c0"
            }
          },
          "scale-y": {
            "line-color": "none",
            "values": "0:50000:10000",
            "multiplier": true,
            "guide": {
              "line-style": "solid",
              "line-color": "#5e606c",
              "alpha": 1
            },
            "tick": {
              "visible": false
            },
            "label": {
              "text": "Sales by Employee",
              "offset-x": "-5px",
              "font-size": "11px",
              "font-family": "Arial",
              "font-color": "#ffffff",
              "font-weight": "normal"
            },
            "item": {
              "padding-left": "2px",
              "font-size": "10px",
              "font-family": "Arial",
              "font-color": "#c0c0c0"
            }
          },
          "series": [
            {
              "values": [
                31000,
                39500,
                24300,
                36000,
                38000,
                45500,
                28500,
                38000,
                21000,
                17000,
                24000,
                17500
              ],
              "background-color": "#57dde8",
              "tooltip": {
                "background-color": "#54ced4",
                "font-color": "#454754",
                "border-radius": "6px",
                "shadow": false,
                "padding": "5px 10px"
              }
            },
            {
              "values": [
                11500,
                36750,
                7000,
                44500,
                11500,
                28450,
                42900,
                26750,
                13050,
                32600,
                12500,
                14300
              ],
              "background-color": "#978af6",
              "tooltip": {
                "background-color": "#796bdd",
                "font-color": "#ffffff",
                "border-radius": "6px",
                "shadow": false,
                "padding": "5px 10px"
              }
            },
            {
              "values": [
                21500,
                29550,
                14500,
                16500,
                28450,
                35600,
                21550,
                18750,
                11600,
                7500,
                14750,
                16000
              ],
              "background-color": "#b857b4",
              "tooltip": {
                "background-color": "#a03f9c",
                "font-color": "#ffffff",
                "border-radius": "6px",
                "shadow": false,
                "padding": "5px 10px"
              }
            }
          ]
        }
      ]
    };

    zingchart.render({
      id: 'chart-revenue-realized-dashboard',
      data: myConfig,
      height: 400,
      width: "100%"
    });

  }
