import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';


export interface Player {
  firstname: string;
  lastname: string;
  dateOfBirth: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerApiService {

  public players = new BehaviorSubject(playersMock);

  public getPlayers(): Observable<Player[]> {
    return this.players.asObservable();
  }

  constructor() {}
}

const playersMock: Player[] = [
  {
    firstname: 'Thomas',
    lastname: 'Müller',
    dateOfBirth: '09/13/1989',
  },
  {
    firstname: 'Joshua',
    lastname: 'Kimmich',
    dateOfBirth: '02/08/1995',
  }
];
