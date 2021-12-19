import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Player, PlayerApiService } from './player-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public persons$: Observable<Player[]> = this.playerApiService
    .getPlayers()
    .pipe(
      map((persons) =>
        persons.map((person) => ({
          ...person,
          age:
            new Date().getFullYear() -
            new Date(person.dateOfBirth).getFullYear(),
        }))
      )
    );

   constructor(private playerApiService: PlayerApiService) {}
}
