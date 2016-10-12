import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {RevenueexRoutingModule} from "./app-routing.module";
import {RevenueTrendComponent} from "./dashboard/revenue-trend/revenue-trend.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RevenueTrendComponent
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
