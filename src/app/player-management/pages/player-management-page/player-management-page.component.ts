import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatestWith,
  firstValueFrom,
  map,
  Observable,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { Player } from 'src/app/dashboard/models/player';
import { logObservable } from 'src/app/shared/utils/log-observable';
import { updater } from 'src/app/shared/utils/updater';
import { PlayerManagementApiService } from '../../services/player-management-api.service';

@Component({
  selector: 'app-player-management-page',
  templateUrl: './player-management-page.component.html',
  styleUrls: ['./player-management-page.component.scss'],
})
export class PlayerManagementPageComponent {
  public navigationItem$ = new BehaviorSubject(1337);

  private updater$ = new Subject<void>();

  public players$: Observable<Player []> = this.navigationItem$.pipe(
    tap( () => console.log('#1')),
    combineLatestWith(this.updater$.pipe(startWith(null))),
    map(([a, _]) => a),
    tap( () => console.log('#2')),
    switchMap((clubId) => this.playerManagementApiService.getPlayers(clubId))
  );

  public formGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    dateOfBirth: new FormControl(),
  });

  constructor(private playerManagementApiService: PlayerManagementApiService) {}

  public async addPlayer(): Promise<void> {
    await firstValueFrom(
      this.playerManagementApiService.addPlayer({
        ...this.formGroup.getRawValue(),
        dateOfBirth: new Date(this.formGroup.getRawValue().dateOfBirth),
      })
    );
    this.updater$.next();
  }
}
