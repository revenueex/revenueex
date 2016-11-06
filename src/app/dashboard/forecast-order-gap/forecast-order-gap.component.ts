import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


declare var zingchart: any;

@Component({
  selector: 'app-forecast-order-gap',
  templateUrl: './forecast-order-gap.component.html',
  styleUrls: ['./forecast-order-gap.component.css']
})
export class ForecastOrderGapComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {


    let chartConfig = {
      "type": "hmixed",
      "backgroundColor": "white",
      "plot": {
        "bars-overlap": "100%",
        "stacked": true,
        "rules": [
          {
            "rule": "%v / %g < 0.5 ",
            "background-color": "#fe6c00"
          },
          {
            "rule": "%v/%g >= 0.5 && %v/%g < 0.75 ",
            "background-color": "#ffc91c"
          },
          {
            "rule": "%v/%g >= 0.75 && %v/%g < 0.9 ",
            "background-color": "#53bbd4"
          },
          {
            "rule": "%v / %g >= 0.9 ",
            "background-color": "#18aa4a"
          },
        ]
      },
      title: {
        text: "Forecast Order Gap by Product",
        fontColor: "#5f5f5f",
        backgroundColor: "transparent",
        textAlign: "center",
        padding: "30px 15px",
        fontSize: "14px"
      },
      "scale-x": {
        "labels": ["Monitor", "Memory", "SSD", "Laptop", "Desktop"],
        "guide": {
          "visible": false
        }
      },
      "scale-y": {
        "values": "0:50:10",
        "guide": {
          "visible": false
        }
      },
      "series": [
        {
          "type": "hbar",
          "values": [25, 30, 15, 20, 25],
          "stack": 1,
          "background-color": "gray",
          "alpha": 0.7,
          "color": "red",
          "hover-state": {
            "visible": false
          },
          "max-trackers": 0
        },
        {
          "type": "hbar",
          "values": [20, 10, 30, 25, 15],
          "stack": 1,
          "background-color": "gray",
          "alpha": 0.5,
          "hover-state": {
            "visible": false
          },
          "max-trackers": 0
        },
        {
          "type": "hbar",
          "values": [5, 10, 5, 5, 10],
          "stack": 1,
          "background-color": "gray",
          "alpha": 0.3,
          "hover-state": {
            "visible": false
          },
          "max-trackers": 0
        },
        {
          "type": "hbullet",
          "values": [18, 42, 30, 43, 36],
          "goals": [38, 39, 43, 35, 41],
          "stack": 2,
          "tooltip": {
            "text": "Actual: %v<br>Goal: %g",
            "font-color": "black",
            "background-color": "white"
          }
        }
      ]
    };

    zingchart.render({
      id: 'chart-forecast-order-gap-dashboard',
      data: chartConfig,
      height: 300,
      width: '100%'
    });

    zingchart.component = this;
    zingchart.plot_click = function (p) {
      this.component.router.navigate(['/customer-dashboard']);
    }
  }

}
