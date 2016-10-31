import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-customer-revenue',
  templateUrl: './customer-revenue.component.html',
  styleUrls: ['./customer-revenue.component.css']
})
export class CustomerRevenueComponent implements OnInit {

  revenue: any = {
    pullIns: "0.15M",
    discounting: "0.07M",
    substitution: "0.01M",
    gap: "0.01M",
    qEnd: "Oct 31st",
    lastQ: "2.2M",
    lastQAttainment: "98.6%",
    activeProducts: 15,
    accountManager: "John Doe",
    phone: "214-1234567"

  };

  constructor() {
  }

  ngOnInit() {
  }

}
