import { Component, OnInit } from '@angular/core';
import { Observable, map, finalize } from 'rxjs';
import { Player, PlayerApiService } from '../player-api.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent  {
}