import { Injectable } from '@angular/core';
import {mapTo, Observable, scan} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Share } from '../models/share';

@Injectable({
  providedIn: 'root',
})
export class SharePriceService {
  private url = 'http://localhost:4200/shares-live';

  public sharePrice$: Observable<Share[]> = this.getSharePrice();

  public isPositive$ = this.sharePrice$.pipe(
    scan((acc, curr) => {
      let shareChangeMapping = curr.map((share) => {
        const currentShare = acc.find((x) => (x.wkn = share.wkn));
        if(!currentShare) {
          return null;
        }
        console.log("-> currentShare", currentShare);
        return {
          isPositive: share.value > currentShare!.value,
          diff: Math.abs(share.value - currentShare!.value),
        };
      });
      console.log('-> curr', curr);
      console.log('-> acc', acc);
      acc = curr;
      return curr;
    }, [] as Share[]),
    mapTo(true)
  );

  constructor(private http: HttpClient) {}

  public getSharePrice(): Observable<Share[]> {
    return this.http.get<Share[]>(this.url);
  }
}
