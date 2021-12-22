import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { PlayerManagementPageComponent } from './player-management-page/player-management-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'player-management', component: PlayerManagementPageComponent },
  {path: '', component: DashboardPageComponent},
  { path: '**', component: DashboardPageComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
