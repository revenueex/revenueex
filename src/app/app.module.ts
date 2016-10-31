import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {RevenueexRoutingModule} from "./app-routing.module";
import {RevenueTrendComponent} from "./dashboard/revenue-trend/revenue-trend.component";
import {ForecastOrderGapComponent} from "./dashboard/forecast-order-gap/forecast-order-gap.component";
import {RevenueRealizedComponent} from "./dashboard/revenue-realized/revenue-realized.component";
import {RevenueRealizationRateComponent} from "./dashboard/revenue-realization-rate/revenue-realization-rate.component";
import {TopOpportunitiesComponent} from "./dashboard/top-opportunities/top-opportunities.component";
import {RecommendationsComponent} from "./dashboard/recommendations/recommendations.component";
import {CustomerDashboardComponent} from "./customer-dashboard/customer-dashboard.component";
import { CustomerChartComponent } from './customer-dashboard/customer-chart/customer-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RevenueTrendComponent,
    ForecastOrderGapComponent,
    RevenueRealizedComponent,
    RevenueRealizationRateComponent,
    TopOpportunitiesComponent,
    RecommendationsComponent,
    CustomerDashboardComponent,
    CustomerChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RevenueexRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
