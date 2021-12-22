import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { PlayerManagementPageComponent } from './player-management-page/player-management-page.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    PlayerManagementPageComponent
  ],
  imports: [
    BrowserModule, RoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
