import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlinesComponent } from './components/admin/add-airlines/add-airlines.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { ManageAirlinesComponent } from './components/admin/manage-airlines/manage-airlines.component';
import { ManageDiscountsComponent } from './components/admin/manage-discounts/manage-discounts.component';
import { ManageSchedulesComponent } from './components/admin/manage-schedules/manage-schedules.component';
import { ReportsComponent } from './components/admin/reports/reports.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  //Admin
  {path: "admin-menu", component: AdminMenuComponent},
  {path: "add-airlines", component: AddAirlinesComponent},
  {path: "manage-airlines", component: ManageAirlinesComponent},
  {path: "manage-discounts", component: ManageDiscountsComponent},
  {path: "manage-schedules", component: ManageSchedulesComponent},
  {path: "reports", component: ReportsComponent},


  //Home
  {path: "home", component: HomeComponent},

 
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
