import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from 'src/app/dashboard/models/player';
import { playerMock } from 'src/app/dashboard/models/player.mock';

@Injectable({
  providedIn: 'root'
})
export class PlayerManagementApiService {

  private playersDatabase = [playerMock];

  public getPlayers(clubId: number): Observable<Player []> {    
    return of([...this.playersDatabase])
  }

  public addPlayer(player: Player): Observable<Player>{
    this.playersDatabase.push(player);
    
    return of(player);
  }

  constructor() { }
}
