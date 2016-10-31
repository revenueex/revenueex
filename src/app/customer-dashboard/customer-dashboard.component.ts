import {Component, OnInit} from "@angular/core";
import {DashboardComponent} from "../dashboard/dashboard/dashboard.component";

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent extends DashboardComponent implements OnInit {

  summaries: any =
    [{
      forecast: '1.2M',
      ordered: '0.6M',
      invoiced: '0.5M',
      unconfirmed: '0.1M',
      atrisk: '0.5M',
      revenuecontribution: "18.3%",
      projectedRevenueAcceleration: "0.2M"
    }];
  customerName: string = 'Customer ABC Inc.';
  currentSummary: any = this.summaries[0];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
