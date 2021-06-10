import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AddAirlinesComponent } from './components/admin/add-airlines/add-airlines.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { ManageAirlinesComponent } from './components/admin/manage-airlines/manage-airlines.component';
import { ManageDiscountsComponent } from './components/admin/manage-discounts/manage-discounts.component';
import { ManageSchedulesComponent } from './components/admin/manage-schedules/manage-schedules.component';
import { ReportsComponent } from './components/admin/reports/reports.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    AddAirlinesComponent,
    AdminMenuComponent,
    ManageAirlinesComponent,
    ManageDiscountsComponent,
    ManageSchedulesComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
