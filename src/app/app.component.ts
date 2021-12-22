import { Component } from '@angular/core';
import { finalize, map, Observable } from 'rxjs';
import { Player, PlayerApiService } from './player-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public players$: Observable<Player[]> = this.playerApiService
    .getPlayers()
    .pipe(
      map((players) =>
        players.map((player) => ({
          ...player,
          age:
            new Date().getFullYear() -
            new Date(player.dateOfBirth).getFullYear(),
        }))
      ),
      finalize(() => console.log('Best Practice completed'))
    );

  public players?: Player[];

  constructor(private playerApiService: PlayerApiService) {
    this.playerApiService.getPlayers().subscribe({
      next: (players) => {
        this.players = players;
      },
      complete: () => console.log('Worse Practise completed'),
    });
  }
}
