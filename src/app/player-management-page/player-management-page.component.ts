import { Component } from '@angular/core';
import { Observable, finalize, takeUntil, Subject } from 'rxjs';
import { Player, PlayerApiService } from '../player-api.service';


@Component({
  selector: 'app-player-management-page',
  templateUrl: './player-management-page.component.html',
  styleUrls: ['./player-management-page.component.scss']
})
export class PlayerManagementPageComponent {
  public onDestroy$ = new Subject<void>();

  public players$: Observable<Player[]> = this.playerApiService.getPlayers().pipe(
    finalize(() => console.log('Best Practice completed'))
  );

  public players?: Player[];

  constructor(private playerApiService: PlayerApiService) {
    this.playerApiService.getPlayers().pipe(takeUntil(this.onDestroy$)).subscribe({
      next: (players) => {
        this.players = players;
      },
      complete: () => console.log('Worse Practise completed'),
    });
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
