import {Component, OnInit} from "@angular/core";


declare var zingchart: any;

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})


export class ShipmentsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let chartConfig =
      {
        "type": "pie",
        "background-color": "#ffffff",
        "border-radius": 4,
        title: {
          text: "Today's Shipments",
          fontColor: "#5f5f5f",
          backgroundColor: "transparent",
          textAlign: "center",
          padding: "30px 15px",
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
      };
    zingchart.render({
      id: 'chart-shipments-dashboard',
      data: chartConfig,
      height: 240,
      width: '100%'
    });
  }

}
