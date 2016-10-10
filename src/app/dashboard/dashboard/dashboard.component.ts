import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  summaries: any =
    [{
      plan: '4.2M',
      realized: '3.0M',
      projected: '3.8M',
      atRisk: '0.4M'
    }, {
      plan: '3.2M',
      realized: '2.0M',
      projected: '3.6M',
      atRisk: '0.23M'
    }, {
      plan: '8.2M',
      realized: '3.0M',
      projected: '9.1M',
      atRisk: '2.0M'
    }]

  //range type, month to date | quator to date | year to date
  rangeType: number = 0;

  currentSummary: any;

  constructor() {
  }

  ngOnInit() {
    this.rangeType = 0;
    this.currentSummary = this.summaries[this.rangeType];
    this.currentSummary.daysLeft = this.getMonthToDate();
  }

  setRangeType(type: number) {
    this.rangeType = type;
    this.currentSummary = this.summaries[this.rangeType];
    if (type == 0) {
      this.currentSummary.daysLeft = this.getMonthToDate();
    } else if (type == 1) {
      this.currentSummary.daysLeft = this.getQuarterToDate();
    } else {
      this.currentSummary.daysLeft = this.getYearToDate();
    }
  }

  private getMonthToDate() {
    let monthEnd = new Date();
    monthEnd.setMonth(monthEnd.getMonth() + 1);
    monthEnd.setDate(0);
    return monthEnd.getDate() - (new Date()).getDate() + 1;
  }

  private  getQuarterToDate() {
    let today = new Date();
    let quarter: number = Math.floor((today.getMonth() + 3) / 3);
    let nextq: Date;
    if (quarter == 4) {
      nextq = new Date(today.getFullYear() + 1, 0, 1);
    } else {
      nextq = new Date(today.getFullYear(), quarter * 3, 1);
    }
    return Math.ceil((nextq.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
  }

  private getYearToDate() {
    let yearEnd: Date = new Date();
    yearEnd.setMonth(11);
    yearEnd.setDate(31);
    return Math.ceil((yearEnd.getTime() - (new Date()).getTime()) / 1000 / 60 / 60 / 24);

  }

}
