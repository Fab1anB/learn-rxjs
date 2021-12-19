import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface Player {
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  age?: number;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerApiService {
  public getPlayers(): Observable<Player[]> {
    return of(personsMock);
  }

  constructor() {}
}

const personsMock: Player[] = [
  {
    firstname: 'Thomas',
    lastname: 'Müller',
    dateOfBirth: '09/13/1989',
  },
  {
    firstname: 'Joshua',
    lastname: 'Kimmich',
    dateOfBirth: '02/08/1995',
  },
];
