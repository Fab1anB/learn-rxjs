import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharePriceComponent } from './components/share-price/share-price.component';
import { RecentExpensesComponent } from './components/recent-expenses/recent-expenses.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { MonthlyBalanceComponent } from './components/monthly-balance/monthly-balance.component';
import { YearlyBalanceComponent } from './components/yearly-balance/yearly-balance.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {NgxGaugeModule} from "ngx-gauge";
import {NgChartsModule} from "ng2-charts";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    DashboardPageComponent,
    SharePriceComponent,
    RecentExpensesComponent,
    PaymentsComponent,
    MonthlyBalanceComponent,
    YearlyBalanceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NgxGaugeModule,
    NgChartsModule,
    MatFormFieldModule,
    MatSelectModule,

  ]
})
export class DashboardModule { }
