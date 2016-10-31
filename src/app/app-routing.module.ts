import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {CustomerDashboardComponent} from "./customer-dashboard/customer-dashboard.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customer-dashboard', component: CustomerDashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RevenueexRoutingModule {
}

