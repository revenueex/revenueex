import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-top-opportunities',
  templateUrl: './top-opportunities.component.html',
  styleUrls: ['./top-opportunities.component.css']
})
export class TopOpportunitiesComponent implements OnInit {

  constructor() {
  }

  topOpptunities: [any] = [
    {
      customer: "Customer ABC Inc",
      planned: 15000,
      ordered: 40000,
      shipped: 3000,
      gap: 2700,
      totalGap: 30000,
      contribution: 0.523,
      revenueAcceleration: 18000
    },
    {
      customer: "Customer ABC Inc",
      planned: 15000,
      ordered: 40000,
      shipped: 3000,
      gap: 2700,
      totalGap: 30000,
      contribution: 0.523,
      revenueAcceleration: 18000
    }, {
      customer: "Customer ABC Inc",
      planned: 15000,
      ordered: 40000,
      shipped: 3000,
      gap: 2700,
      totalGap: 30000,
      contribution: 0.523,
      revenueAcceleration: 18000
    }
  ];

  ngOnInit() {
  }

}
