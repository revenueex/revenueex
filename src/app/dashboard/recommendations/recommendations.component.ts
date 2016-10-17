import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor() {
  }

  recommendations: [any] = [
    {
      action: "email",
      customer: "Customer ABC Inc",
      solutions: [
        "Offer 10% discount on product family 1 up to max 25,000 units",
        "Offer to pull in order #123 by 7 days"
      ],
      ago: "5 min ago",
      date: "2016-10-16T18:25:43.511Z"
    },
    {
      action: "call",
      customer: "Customer DEF Inc",
      solutions: [
        "Offer 10% discount on product family 1 up to max 25,000 units"
      ],
      ago: "45 min ago",
      date: "2016-10-16T18:25:43.511Z"
    }
  ];

  ngOnInit() {
  }

}
