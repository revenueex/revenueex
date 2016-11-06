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
      total: 4500,
      items: [
        {
          customer: "Customer 1",
          value: 1500,
          suggestion: "Offer 10% discount"
        },
        {
          customer: "Customer 2",
          value: 3000,
          suggestion: "Pull-in orders"
        }
      ]

    }, {
      total: 24000,
      items: [
        {
          customer: "Customer 3",
          value: 22000,
          suggestion: "Offer Substitutions"
        }
      ]
    }, {
      total: 150000,
      items: [
        {
          customer: "Customer 1",
          value: 15000,
          suggestion: "Email to Confirm"
        },
        {
          customer: "Customer 3",
          value: 10000,
          suggestion: "Pull-in orders"
        }
      ]
    }, {
      total: 650000,
      items: [
        {
          customer: "Customer 1",
          value: 1500,
          suggestion: "Offer 10% discount"
        },
        {
          customer: "Customer 2",
          value: 3000,
          suggestion: "Pull-in orders"
        }
      ]
    },

  ];

  ngOnInit() {
  }

}
