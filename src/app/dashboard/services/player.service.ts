import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../models/player';
import { playerMock } from '../models/player.mock';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public getPlayerInfo(): Observable<Player>{
    return of(playerMock);
  }

  constructor() { }
}
