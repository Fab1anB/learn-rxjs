import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerManagementPageComponent } from './pages/player-management-page/player-management-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlayerManagementPageComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class PlayerManagementModule {}
