import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, of, pluck, tap } from 'rxjs';
import { logObservable } from 'src/app/shared/utils/log-observable';
import { Player, PlayerViewModel } from '../../models/player';
import { PlayerService } from '../../services/player.service';
import { calculateAge } from '../../utils/calculate-age';

@Component({
  selector: 'app-player-widget',
  templateUrl: './player-widget.component.html',
  styleUrls: ['./player-widget.component.scss'],
})
export class PlayerWidgetComponent implements OnInit {
  public playerViewModel$: Observable<PlayerViewModel> = this.playerService
    .getPlayerInfo()
    .pipe(
      map((player: Player) => {
        return { ...player, age: calculateAge(player.dateOfBirth) };
      })
    );

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}
}
