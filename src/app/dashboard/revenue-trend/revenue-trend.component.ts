import {Component, OnInit} from "@angular/core";

declare var zingchart: any;

@Component({
  selector: 'app-revenue-trend',
  templateUrl: './revenue-trend.component.html',

})


export class RevenueTrendComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
    var tmax = [56, 61, 67, 74, 82, 70, 72, 72, 64, 74, 77, 87, 73, 71, 71, 70, 81, 68, 75, 69, 62, 79, 68, 74, 77, 76, 74, 78, 80, 78, 79];
    var tmin = [47, 43, 46, 50, 55, 54, 51, 53, 58, 58, 62, 65, 55, 51, 53, 58, 61, 57, 57, 54, 52, 54, 51, 53, 57, 60, 61, 60, 63, 62, 63];
    var tavg = [52, 52, 57, 62, 69, 62, 62, 63, 61, 66, 70, 76, 64, 61, 62, 64, 71, 63, 66, 62, 57, 67, 60, 64, 67, 68, 68, 69, 72, 70, 71];
    var tmax2 = [56, 61, 67, 74, 82, 70, 72, 72, 64, 74, 77, 87, 73, 71, 71, 70, 81, 68, 75, 69, 62, 79, 68, 74, 77, 76, 74, 78, 80, 78, 79];
    var tmin2 = [47, 43, 46, 50, 55, 54, 51, 53, 58, 58, 62, 65, 55, 51, 53, 58, 61, 57, 57, 54, 52, 54, 51, 53, 57, 60, 61, 60, 63, 62, 63];

    var markerRange = [];

    for (var n = 0; n < tavg.length; n++) {
      markerRange.push([tmin[n], tmax[n]]); // Push the [min, max] for each index
    }

    zingchart.THEME = "classic";

    var myConfig = {
      globals: {
        fontFamily: "Helvetica"
      },
      type: "mixed",
      utc: true,
      backgroundColor: "white",
      "title": {
        "text": "Revenue Trend",
        "height": "20px",
        "font-weight": "normal",
        "text-color": "#ffffff"
      },
      plot: {
        "data-min": [47, 43, 46, 50, 55, 54, 51, 53, 58, 58, 62, 65, 55, 51, 53, 58, 61, 57, 57, 54, 52, 54, 51, 53, 57, 60, 61, 60, 63, 62, 63],
        "data-max": [56, 61, 67, 74, 82, 70, 72, 72, 64, 74, 77, 87, 73, 71, 71, 70, 81, 68, 75, 69, 62, 79, 68, 74, 77, 76, 74, 78, 80, 78, 79],
        tooltip: {
          visible: false
        }
      },
      scaleY: {
        format: "%v",
        values: "40:90:5",
        lineWidth: 1,
        lineColor: "#2D2D2D",
        label: {
          color: "#2D2D2D",
          fontWeight: "none",
          text: "Revenue (k)"
        },
        tick: {
          lineWidth: 1,
          lineColor: "#2D2D2D"
        },
        item: {
          color: "#2D2D2D"
        }
      },
      scaleX: {
        minValue: 1430438400000,
        step: "day",
        lineWidth: 1,
        lineColor: "#2D2D2D",
        transform: {
          type: "date",
          all: "%m/%d/%y"
        },
        tick: {
          lineWidth: 1,
          lineColor: "#2D2D2D"
        },
        item: {
          color: "#2D2D2D"
        }
      },
      crosshairX: {
        scaleLabel: {
          backgroundColor: "#7CB5EC"
        },
        plotLabel: {
          backgroundColor: "white",
          multiple: false,
          borderRadius: 3,
          text: "<span style='color:#7CB5EC;font-weight:bold;'>%k</span>\n<span style='color:#7CB5EC;font-weight:bold;'>Avg</span>: %v°\n<span style='color:#7CB5EC;font-weight:bold;'>Range</span>: %data-min° - %data-max°"
        }
      },
      series: [
        {
          type: "line",
          values: tavg,
          lineWidth: 1,
          shadow: false,
          lineColor: "black",
          marker: {
            size: 3,
            backgroundColor: "white",
            borderColor: "#7CB5EC",
            shadow: false
          }
        },
        {
          type: "range",
          values: markerRange,
          backgroundColor: "rgba(127, 127, 255, 0.8)",
          lineWidth: 0,
          marker: {
            visible: false
          },
          tooltip: {
            visible: false
          },
          guideLabel: {
            visible: false
          }
        }
      ]
    };

    zingchart.render({
      id: 'chart-revenue-trend-dashboard',
      data: myConfig,
      height: 400,
      width: "100%"
    });
  }
}
