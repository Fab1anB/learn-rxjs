import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PlayerWidgetComponent } from './components/player-widget/player-widget.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    PlayerWidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
